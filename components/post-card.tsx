import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CategoryChip } from "@/components/category-chip"

interface PostCardProps {
  title: string
  excerpt: string
  slug: string
  publishedAt: string
  mainImage?: string
  categories?: { title: string; slug: string }[]
}

export function PostCard({ title, excerpt, slug, publishedAt, mainImage, categories = [] }: PostCardProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Link href={`/articulos/${slug}`} className="group">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 bg-card">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={mainImage || "/placeholder.svg?height=200&width=400&query=medical article healthcare"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        <CardHeader className="pb-2">
          <div className="mb-2 flex flex-wrap gap-2">
            {categories.slice(0, 2).map((category) => (
              <CategoryChip key={category.slug} title={category.title} slug={category.slug} asSpan />
            ))}
          </div>
          <h3 className="line-clamp-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed">{excerpt}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <time dateTime={publishedAt}>{formattedDate}</time>
          </div>
          <span className="inline-flex items-center text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Leer más
            <ArrowRight className="ml-1 h-3 w-3" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  )
}
