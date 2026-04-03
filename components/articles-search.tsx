"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import type { Category } from "@/types/sanity"

interface ArticlesSearchProps {
  categories: Category[]
  onSearch?: (term: string) => void
  onCategoryFilter?: (slug: string | null) => void
  selectedCategory?: string | null
}

export function ArticlesSearch({ categories, onSearch, onCategoryFilter, selectedCategory }: ArticlesSearchProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    onSearch?.(value)
  }

  return (
    <div className="mb-8 space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar artículos..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryFilter?.(null)}
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
            key={category.slug}
            onClick={() => onCategoryFilter?.(category.slug)}
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
  )
}
