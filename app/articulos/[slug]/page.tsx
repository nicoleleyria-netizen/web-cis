import type { Metadata } from "next"
import Image from "@/components/base-path-image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/sanity/lib/fetch"
import { urlForImage } from "@/sanity/lib/image"
import { PortableTextContent } from "@/components/portable-text"
import { PostCard } from "@/components/post-card"
import { Button } from "@/components/ui/button"

interface PostPageProps {
  params: Promise<{ slug: string }>
}

// Mock post for when Sanity is not configured
const mockPost = {
  _id: "1",
  title: "Investigación y cuidado en esclerosis sistémica: la importancia del diagnóstico temprano",
  slug: "investigacion-esclerosis-sistemica",
  excerpt:
    "La esclerosis sistémica es una de esas enfermedades que desafían tanto al cuerpo como a la ciencia. Poco frecuente, compleja y aún sin cura definitiva...",
  publishedAt: "2025-10-27T18:00:00Z",
  body: [
    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "La esclerosis sistémica es una de esas enfermedades que desafían tanto al cuerpo como a la ciencia. Poco frecuente, compleja y aún sin cura definitiva, esta enfermedad autoinmune afecta principalmente a mujeres y puede comprometer la piel, los pulmones, el corazón, los riñones y el sistema digestivo.",
        },
      ],
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "¿Qué es la esclerosis sistémica?" }],
    },
    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "La esclerosis sistémica, también conocida como esclerodermia, es una enfermedad autoinmune crónica que causa el endurecimiento y engrosamiento de la piel y puede afectar a los órganos internos. Se caracteriza por una producción excesiva de colágeno.",
        },
      ],
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "La importancia del diagnóstico temprano" }],
    },
    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "El diagnóstico temprano es crucial para el manejo efectivo de la esclerosis sistémica. Cuanto antes se detecte la enfermedad, más opciones de tratamiento están disponibles y mejor es el pronóstico general del paciente.",
        },
      ],
    },
    {
      _type: "block",
      style: "blockquote",
      children: [
        {
          _type: "span",
          text: "La detección precoz permite intervenir antes de que se produzcan daños irreversibles en los órganos.",
        },
      ],
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "Síntomas a tener en cuenta" }],
    },
    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "Los síntomas iniciales pueden incluir el fenómeno de Raynaud (cambio de color en los dedos con el frío), hinchazón de las manos, fatiga y problemas digestivos. Es importante consultar con un especialista si se presentan estos síntomas.",
        },
      ],
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "Investigación y nuevos tratamientos" }],
    },
    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "En Consultora CIS participamos activamente en estudios clínicos que buscan desarrollar nuevos tratamientos para esta enfermedad. La investigación clínica es fundamental para encontrar mejores opciones terapéuticas para los pacientes.",
        },
      ],
    },
  ],
  categories: [
    { title: "Investigación Clínica", slug: "investigacion-clinica" },
    { title: "Salud en General", slug: "salud-en-general" },
  ],
  author: {
    name: "Equipo CIS",
    slug: "equipo-cis",
    bio: "El equipo médico de Consultora CIS está compuesto por profesionales especializados en diversas áreas de la medicina.",
  },
}

const mockRelatedPosts = [
  {
    _id: "2",
    title: "Los 5 secretos de la caminata rápida: más beneficios en menos tiempo",
    slug: "secretos-caminata-rapida",
    excerpt: "La caminata quizás sea la actividad más popular y accesible para todo el mundo...",
    publishedAt: "2025-10-16T18:00:00Z",
    categories: [{ title: "Medicina del Deporte", slug: "medicina-del-deporte" }],
  },
  {
    _id: "3",
    title: "Las 4A para gestionar el estrés: una estrategia práctica",
    slug: "4a-gestionar-estres",
    excerpt: "Parece que la vida y nuestras rutinas cotidianas cada vez se hacen más pesadas...",
    publishedAt: "2025-10-16T18:00:00Z",
    categories: [{ title: "Salud en General", slug: "salud-en-general" }],
  },
]

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params

  try {
    const post = await getPostBySlug(slug)
    if (!post) {
      // Use mock data for metadata
      return {
        title: mockPost.title,
        description: mockPost.excerpt,
      }
    }

    return {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      openGraph: {
        title: post.seoTitle || post.title,
        description: post.seoDescription || post.excerpt,
        type: "article",
        publishedTime: post.publishedAt,
        images: post.mainImage ? [{ url: urlForImage(post.mainImage)?.width(1200).height(630).url() || "" }] : [],
      },
    }
  } catch {
    return {
      title: mockPost.title,
      description: mockPost.excerpt,
    }
  }
}

export async function generateStaticParams() {
  try {
    const { posts } = await getAllPosts(1, 200)
    const slugs = posts.map((post) => post.slug).filter(Boolean)

    if (slugs.length > 0) {
      return slugs.map((slug) => ({ slug }))
    }
  } catch {
    // Fall back to local mock data when CMS data is unavailable
  }

  return [{ slug: mockPost.slug }]
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params

  let post
  let relatedPosts

  try {
    post = await getPostBySlug(slug)
    if (post && post.categories) {
      const categorySlugs = post.categories.map((c) => c.slug)
      relatedPosts = await getRelatedPosts(slug, categorySlugs)
    }
  } catch {
    // Fallback to mock data
    post = slug === mockPost.slug ? mockPost : null
    relatedPosts = mockRelatedPosts
  }

  // If still no post and slug matches mock, use mock
  if (!post && slug === mockPost.slug) {
    post = mockPost
    relatedPosts = mockRelatedPosts
  }

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = encodeURIComponent(post.title)

  const imageUrl =
    "mainImage" in post && post.mainImage ? urlForImage(post.mainImage)?.width(1200).height(630).url() : null

  return (
    <article>
      {/* Hero Section */}
      <section className="bg-primary py-8 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            href="/articulos"
            className="mb-6 inline-flex items-center text-sm text-primary-foreground/80 hover:text-primary-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a artículos
          </Link>

          <div className="mx-auto max-w-3xl">
            {/* Categories */}
            <div className="mb-4 flex flex-wrap gap-2">
              {post.categories?.map((category) => (
                <span
                  key={category.slug}
                  className="rounded-full bg-primary-foreground/20 px-3 py-1 text-xs font-medium text-primary-foreground"
                >
                  {category.title}
                </span>
              ))}
            </div>

            <h1 className="mb-6 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl text-balance">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/80">
              {post.author && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author.name}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishedAt}>{formattedDate}</time>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {imageUrl && (
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative -mt-8 mx-auto max-w-4xl aspect-video overflow-hidden rounded-xl shadow-xl">
            <Image src={imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>
        </div>
      )}

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Excerpt */}
            {post.excerpt && <p className="mb-8 text-lg font-medium text-foreground leading-relaxed">{post.excerpt}</p>}

            {/* Body */}
            {post.body && (
              <div className="prose prose-lg max-w-none">
                <PortableTextContent value={post.body} />
              </div>
            )}

            {/* Share Buttons */}
            <div className="mt-12 border-t border-border pt-8">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Share2 className="h-4 w-4" />
                  Compartir:
                </span>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Compartir en Facebook"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Compartir en Twitter"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Compartir en LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            {post.author?.bio && (
              <div className="mt-8 rounded-xl bg-secondary p-6">
                <div className="flex items-start gap-4">
                  {"image" in post.author && post.author.image && (
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={urlForImage(post.author.image)?.width(64).height(64).url() || "/placeholder.svg"}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-foreground">Sobre {post.author.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{post.author.bio}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="bg-secondary py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Artículos Relacionados</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <PostCard
                  key={relatedPost._id}
                  title={relatedPost.title}
                  excerpt={relatedPost.excerpt || ""}
                  slug={relatedPost.slug}
                  publishedAt={relatedPost.publishedAt}
                  mainImage={
                    "mainImage" in relatedPost && relatedPost.mainImage
                      ? urlForImage(relatedPost.mainImage)?.width(400).height(225).url() || undefined
                      : undefined
                  }
                  categories={relatedPost.categories}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
