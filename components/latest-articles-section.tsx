"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { PostCard } from "@/components/post-card"
import { Button } from "@/components/ui/button"

type Article = {
  _id?: string
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  mainImage?: string | null
  categories?: { title: string; slug: string }[]
}

const fallbackArticles: Article[] = [
  {
    title: "Investigación y cuidado en esclerosis sistémica: la importancia del diagnóstico temprano",
    excerpt:
      "La esclerosis sistémica es una de esas enfermedades que desafían tanto al cuerpo como a la ciencia. Poco frecuente, compleja y aún sin cura definitiva...",
    slug: "investigacion-esclerosis-sistemica",
    publishedAt: "2025-10-27",
    categories: [
      { title: "Investigación Clínica", slug: "investigacion-clinica" },
      { title: "Salud en General", slug: "salud-en-general" },
    ],
  },
  {
    title: "Los 5 secretos de la caminata rápida: más beneficios en menos tiempo",
    excerpt:
      "La caminata quizás sea la actividad más popular y accesible para todo el mundo a la hora de comenzar o mantener una rutina de ejercicio...",
    slug: "secretos-caminata-rapida",
    publishedAt: "2025-10-16",
    categories: [
      { title: "Medicina del Deporte", slug: "medicina-del-deporte" },
      { title: "Salud en General", slug: "salud-en-general" },
    ],
  },
  {
    title: "Las 4A para gestionar el estrés: una estrategia práctica para la vida cotidiana",
    excerpt:
      "Parece que la vida y nuestras rutinas cotidianas cada vez se hacen más pesadas, más rápidas, más demandantes...",
    slug: "4a-gestionar-estres",
    publishedAt: "2025-10-16",
    categories: [
      { title: "Medicina Laboral", slug: "medicina-laboral" },
      { title: "Salud en General", slug: "salud-en-general" },
    ],
  },
]

export function LatestArticlesSection() {
  const [articles, setArticles] = useState<Article[]>(fallbackArticles)

  useEffect(() => {
    async function loadLatest() {
      try {
        const res = await fetch("/api/articles")
        if (!res.ok) return
        const data = await res.json()
        if (Array.isArray(data.posts) && data.posts.length > 0) {
          setArticles(data.posts.slice(0, 3))
        }
      } catch {
        // Fallback articles remain visible if API is unavailable.
      }
    }

    loadLatest()
  }, [])

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Últimos Artículos</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Mantente informado con nuestras publicaciones sobre salud, medicina y bienestar.
          </p>
        </div>
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <PostCard
              key={article._id ?? article.slug}
              title={article.title}
              excerpt={article.excerpt || article.title}
              slug={article.slug}
              publishedAt={article.publishedAt}
              mainImage={article.mainImage ?? undefined}
              categories={article.categories ?? []}
            />
          ))}
        </div>
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <a href="https://consultoracis.com.ar/blog" target="_blank" rel="noopener noreferrer">
              Ver todos los artículos
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}