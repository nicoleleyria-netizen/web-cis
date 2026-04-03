"use client"

import { useState, useMemo } from "react"
import { PostCard } from "@/components/post-card"
import { Button } from "@/components/ui/button"
import { urlForImage } from "@/sanity/lib/image"
import type { Post, Category } from "@/types/sanity"

interface ArticlesListProps {
  initialPosts: Post[]
  categories: Category[]
  totalPosts: number
}

export function ArticlesList({ initialPosts, categories, totalPosts }: ArticlesListProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(9)

  const posts: Post[] = useMemo(() => {
    if (!initialPosts) return []
    if (!Array.isArray(initialPosts)) return []
    return initialPosts
  }, [initialPosts])

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    if (!posts || posts.length === 0) return []

    let filtered = [...posts]

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(
        (post) =>
          post?.categories &&
          Array.isArray(post.categories) &&
          post.categories.some((cat) => cat?.slug === selectedCategory),
      )
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter((post) => {
        if (!post) return false
        const titleMatch = post.title?.toLowerCase().includes(term)
        const excerptMatch = post.excerpt?.toLowerCase().includes(term)
        const categoryMatch =
          post.categories &&
          Array.isArray(post.categories) &&
          post.categories.some((cat) => cat?.title?.toLowerCase().includes(term))
        return titleMatch || excerptMatch || categoryMatch
      })
    }

    return filtered
  }, [posts, searchTerm, selectedCategory])

  const visiblePosts = useMemo(() => {
    if (!filteredPosts || !Array.isArray(filteredPosts)) return []
    return filteredPosts.slice(0, visibleCount)
  }, [filteredPosts, visibleCount])

  const hasMore = visibleCount < (filteredPosts?.length || 0)

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6)
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg text-muted-foreground">No hay artículos disponibles en este momento.</p>
      </div>
    )
  }

  return (
    <>
      {filteredPosts.length === 0 ? (
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
                title={post.title || "Sin título"}
                excerpt={post.excerpt || ""}
                slug={post.slug || ""}
                publishedAt={post.publishedAt}
                mainImage={
                  post.mainImage ? urlForImage(post.mainImage)?.width(400).height(225).url() || undefined : undefined
                }
                categories={post.categories}
              />
            ))}
          </div>

          {hasMore && (
            <div className="mt-8 text-center">
              <Button onClick={loadMore} variant="outline" size="lg">
                Cargar más artículos
              </Button>
            </div>
          )}
        </>
      )}
    </>
  )
}
