"use client"

import { useState, useMemo, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PostCard } from "@/components/post-card"
import { Skeleton } from "@/components/ui/skeleton"

// Mock data - always available
const mockPosts = [
  {
    _id: "1",
    title: "Investigación y cuidado en esclerosis sistémica: la importancia del diagnóstico temprano",
    slug: "investigacion-esclerosis-sistemica",
    excerpt:
      "La esclerosis sistémica es una de esas enfermedades que desafían tanto al cuerpo como a la ciencia. Poco frecuente, compleja y aún sin cura definitiva...",
    publishedAt: "2025-10-27T18:00:00Z",
    categories: [
      { title: "Investigación Clínica", slug: "investigacion-clinica" },
      { title: "Salud en General", slug: "salud-en-general" },
    ],
  },
  {
    _id: "2",
    title: "Los 5 secretos de la caminata rápida: más beneficios en menos tiempo",
    slug: "secretos-caminata-rapida",
    excerpt:
      "La caminata quizás sea la actividad más popular y accesible para todo el mundo a la hora de comenzar o mantener una rutina de ejercicio...",
    publishedAt: "2025-10-16T18:00:00Z",
    categories: [
      { title: "Medicina del Deporte", slug: "medicina-del-deporte" },
      { title: "Salud en General", slug: "salud-en-general" },
    ],
  },
  {
    _id: "3",
    title: "Las 4A para gestionar el estrés: una estrategia práctica para la vida cotidiana",
    slug: "4a-gestionar-estres",
    excerpt:
      "Parece que la vida y nuestras rutinas cotidianas cada vez se hacen más pesadas, más rápidas, más demandantes, lo que nos provoca una tensión mental...",
    publishedAt: "2025-10-16T18:00:00Z",
    categories: [
      { title: "Medicina Laboral", slug: "medicina-laboral" },
      { title: "Salud en General", slug: "salud-en-general" },
    ],
  },
  {
    _id: "4",
    title: "Medicina laboral en las empresas: beneficios clave para prevenir riesgos",
    slug: "medicina-laboral-empresas-beneficios",
    excerpt:
      "La medicina laboral es fundamental para el bienestar de los empleados y la productividad de las empresas. Conoce sus principales beneficios...",
    publishedAt: "2025-10-10T18:00:00Z",
    categories: [{ title: "Medicina Laboral", slug: "medicina-laboral" }],
  },
  {
    _id: "5",
    title: "Por qué el visado preocupacional es esencial en los procesos de incorporación",
    slug: "visado-preocupacional-esencial",
    excerpt:
      "El examen preocupacional es un paso fundamental antes de la contratación. Descubre su importancia y qué incluye esta evaluación médica...",
    publishedAt: "2025-10-05T18:00:00Z",
    categories: [{ title: "Medicina Laboral", slug: "medicina-laboral" }],
  },
  {
    _id: "6",
    title: "Del paciente real al paciente virtual: gemelos digitales en medicina",
    slug: "gemelos-digitales-medicina",
    excerpt:
      "Los gemelos digitales representan una revolución en la medicina predictiva y personalizada. Exploramos esta tecnología emergente...",
    publishedAt: "2025-09-28T18:00:00Z",
    categories: [
      { title: "Investigación Clínica", slug: "investigacion-clinica" },
      { title: "Salud en General", slug: "salud-en-general" },
    ],
  },
]

const mockCategories = [
  { _id: "cat1", title: "Medicina Laboral", slug: "medicina-laboral", postCount: 3 },
  { _id: "cat2", title: "Investigación Clínica", slug: "investigacion-clinica", postCount: 2 },
  { _id: "cat3", title: "Medicina del Deporte", slug: "medicina-del-deporte", postCount: 1 },
  { _id: "cat4", title: "Salud en General", slug: "salud-en-general", postCount: 4 },
]

interface Post {
  _id: string
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  mainImage?: string
  categories?: { title: string; slug: string }[]
}

interface Category {
  _id: string
  title: string
  slug: string
  postCount?: number
}

export function ArticlesPageClient() {
  const [posts, setPosts] = useState<Post[]>(mockPosts)
  const [categories, setCategories] = useState<Category[]>(mockCategories)
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(9)

  // Try to fetch from Sanity on client side only
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/articles")
        if (res.ok) {
          const data = await res.json()
          if (data.posts && Array.isArray(data.posts) && data.posts.length > 0) {
            setPosts(data.posts)
          }
          if (data.categories && Array.isArray(data.categories) && data.categories.length > 0) {
            setCategories(data.categories)
          }
        }
      } catch {
        // Use mock data on error - already set as default
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  // Filter posts
  const filteredPosts = useMemo(() => {
    let filtered = [...posts]

    if (selectedCategory) {
      filtered = filtered.filter(
        (post) => post.categories && post.categories.some((cat) => cat.slug === selectedCategory),
      )
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter((post) => {
        const titleMatch = post.title?.toLowerCase().includes(term)
        const excerptMatch = post.excerpt?.toLowerCase().includes(term)
        return titleMatch || excerptMatch
      })
    }

    return filtered
  }, [posts, searchTerm, selectedCategory])

  const visiblePosts = filteredPosts.slice(0, visibleCount)
  const hasMore = visibleCount < filteredPosts.length

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl text-balance">Artículos</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80 text-pretty">
            Mantente informado con nuestras publicaciones sobre medicina laboral, investigación clínica, medicina del
            deporte y salud en general.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  !selectedCategory
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent/10 hover:text-accent"
                }`}
              >
                Todos
              </button>
              {categories.map((category) => (
                <button
                  key={category._id}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    selectedCategory === category.slug
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-accent/10 hover:text-accent"
                  }`}
                >
                  {category.title}
                  {category.postCount !== undefined && <span className="ml-1 opacity-60">({category.postCount})</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Loading State */}
          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="aspect-video w-full rounded-lg" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">
                No se encontraron artículos
                {searchTerm && ` para "${searchTerm}"`}
                {selectedCategory && ` en la categoría seleccionada`}.
              </p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory(null)
                }}
              >
                Limpiar filtros
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-4 text-sm text-muted-foreground">
                Mostrando {visiblePosts.length} de {filteredPosts.length} artículos
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {visiblePosts.map((post) => (
                  <PostCard
                    key={post._id}
                    title={post.title}
                    excerpt={post.excerpt}
                    slug={post.slug}
                    publishedAt={post.publishedAt}
                    mainImage={post.mainImage}
                    categories={post.categories}
                  />
                ))}
              </div>

              {hasMore && (
                <div className="mt-8 text-center">
                  <Button onClick={() => setVisibleCount((prev) => prev + 6)} variant="outline" size="lg">
                    Cargar más artículos
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}
