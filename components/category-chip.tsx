import Link from "next/link"

interface CategoryChipProps {
  title: string
  slug: string
  isActive?: boolean
  asSpan?: boolean
}

export function CategoryChip({ title, slug, isActive = false, asSpan = false }: CategoryChipProps) {
  const className = `inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors ${
    isActive
      ? "bg-accent text-accent-foreground"
      : "bg-secondary text-secondary-foreground hover:bg-accent/10 hover:text-accent"
  }`

  if (asSpan) {
    return <span className={className}>{title}</span>
  }

  return (
    <Link href={`/articulos/categoria/${slug}`} className={className}>
      {title}
    </Link>
  )
}
