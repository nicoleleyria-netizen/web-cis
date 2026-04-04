import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getCategoryBySlug, getPostsByCategory, getAllCategories } from "@/sanity/lib/fetch"
import { urlForImage } from "@/sanity/lib/image"
import { PostCard } from "@/components/post-card"
import { CategoryChip } from "@/components/category-chip"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

// Mock data
const mockCategories = {
  "medicina-laboral": {
    _id: "cat1",
    title: "Medicina Laboral",
    slug: "medicina-laboral",
    description: "Artículos sobre salud ocupacional, exámenes médicos laborales y bienestar en el trabajo.",
  },
  "investigacion-clinica": {
    _id: "cat2",
    title: "Investigación Clínica",
    slug: "investigacion-clinica",
    description: "Novedades sobre estudios clínicos, avances en medicina y participación en investigación.",
  },
  "medicina-del-deporte": {
    _id: "cat3",
    title: "Medicina del Deporte",
    slug: "medicina-del-deporte",
    description: "Información sobre evaluación deportiva, prevención de lesiones y rendimiento atlético.",
  },
  "salud-en-general": {
    _id: "cat4",
    title: "Salud en General",
    slug: "salud-en-general",
    description: "Consejos y artículos sobre salud, bienestar y calidad de vida.",
  },
}

const mockPostsByCategory = {
  "medicina-laboral": [
    {
      _id: "3",
      title: "Las 4A para gestionar el estrés: una estrategia práctica para la vida cotidiana",
      slug: "4a-gestionar-estres",
      excerpt: "Parece que la vida y nuestras rutinas cotidianas cada vez se hacen más pesadas...",
      publishedAt: "2025-10-16T18:00:00Z",
      categories: [{ title: "Medicina Laboral", slug: "medicina-laboral" }],
    },
    {
      _id: "4",
      title: "Medicina laboral en las empresas: beneficios clave para prevenir riesgos",
      slug: "medicina-laboral-empresas-beneficios",
      excerpt: "La medicina laboral es fundamental para el bienestar de los empleados...",
      publishedAt: "2025-10-10T18:00:00Z",
      categories: [{ title: "Medicina Laboral", slug: "medicina-laboral" }],
    },
  ],
  "investigacion-clinica": [
    {
      _id: "1",
      title: "Investigación y cuidado en esclerosis sistémica",
      slug: "investigacion-esclerosis-sistemica",
      excerpt: "La esclerosis sistémica es una de esas enfermedades que desafían...",
      publishedAt: "2025-10-27T18:00:00Z",
      categories: [{ title: "Investigación Clínica", slug: "investigacion-clinica" }],
    },
  ],
  "medicina-del-deporte": [
    {
      _id: "2",
      title: "Los 5 secretos de la caminata rápida: más beneficios en menos tiempo",
      slug: "secretos-caminata-rapida",
      excerpt: "La caminata quizás sea la actividad más popular y accesible...",
      publishedAt: "2025-10-16T18:00:00Z",
      categories: [{ title: "Medicina del Deporte", slug: "medicina-del-deporte" }],
    },
  ],
  "salud-en-general": [
    {
      _id: "1",
      title: "Investigación y cuidado en esclerosis sistémica",
      slug: "investigacion-esclerosis-sistemica",
      excerpt: "La esclerosis sistémica es una de esas enfermedades que desafían...",
      publishedAt: "2025-10-27T18:00:00Z",
      categories: [{ title: "Salud en General", slug: "salud-en-general" }],
    },
    {
      _id: "2",
      title: "Los 5 secretos de la caminata rápida",
      slug: "secretos-caminata-rapida",
      excerpt: "La caminata quizás sea la actividad más popular...",
      publishedAt: "2025-10-16T18:00:00Z",
      categories: [{ title: "Salud en General", slug: "salud-en-general" }],
    },
  ],
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params

  try {
    const category = await getCategoryBySlug(slug)
    if (!category) {
      const mockCategory = mockCategories[slug as keyof typeof mockCategories]
      if (mockCategory) {
        return {
          title: `${mockCategory.title} - Artículos`,
          description: mockCategory.description,
        }
      }
      return { title: "Categoría no encontrada" }
    }

    return {
      title: `${category.title} - Artículos`,
      description: category.description || `Artículos sobre ${category.title}`,
    }
  } catch {
    const mockCategory = mockCategories[slug as keyof typeof mockCategories]
    if (mockCategory) {
      return {
        title: `${mockCategory.title} - Artículos`,
        description: mockCategory.description,
      }
    }
    return { title: "Categoría" }
  }
}

export async function generateStaticParams() {
  try {
    const categories = await getAllCategories()
    const slugs = categories.map((category) => category.slug).filter(Boolean)

    if (slugs.length > 0) {
      return slugs.map((slug) => ({ slug }))
    }
  } catch {
    // Fall back to local mock data when CMS data is unavailable
  }

  return Object.keys(mockCategories).map((slug) => ({ slug }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params

  let category
  let posts
  let allCategories

  try {
    category = await getCategoryBySlug(slug)
    const postsData = await getPostsByCategory(slug, 1, 12)
    posts = postsData.posts
    allCategories = await getAllCategories()
  } catch {
    // Fallback to mock data
    category = mockCategories[slug as keyof typeof mockCategories]
    posts = mockPostsByCategory[slug as keyof typeof mockPostsByCategory] || []
    allCategories = Object.values(mockCategories)
  }

  // If no category from Sanity, try mock
  if (!category) {
    category = mockCategories[slug as keyof typeof mockCategories]
    posts = mockPostsByCategory[slug as keyof typeof mockPostsByCategory] || []
  }

  if (!category) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            href="/articulos"
            className="mb-6 inline-flex items-center text-sm text-primary-foreground/80 hover:text-primary-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a artículos
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl text-balance">{category.title}</h1>
          {category.description && (
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80 text-pretty">{category.description}</p>
          )}
        </div>
      </section>

      {/* Categories Filter */}
      <section className="border-b border-border py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">Categorías:</span>
            <Link
              href="/articulos"
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground hover:bg-accent/10 hover:text-accent transition-colors"
            >
              Todos
            </Link>
            {allCategories?.map((cat) => (
              <CategoryChip key={cat.slug} title={cat.title} slug={cat.slug} isActive={cat.slug === slug} />
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {posts && posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard
                  key={post._id}
                  title={post.title}
                  excerpt={post.excerpt || ""}
                  slug={post.slug}
                  publishedAt={post.publishedAt}
                  mainImage={
                    "mainImage" in post && post.mainImage
                      ? urlForImage(post.mainImage)?.width(400).height(225).url() || undefined
                      : undefined
                  }
                  categories={post.categories}
                />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">No hay artículos en esta categoría todavía.</p>
              <Button asChild variant="outline" className="mt-4 bg-transparent">
                <Link href="/articulos">Ver todos los artículos</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
