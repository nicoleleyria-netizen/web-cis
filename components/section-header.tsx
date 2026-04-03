interface SectionHeaderProps {
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ title, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <div className={`mb-4 ${centered ? "flex justify-center" : ""}`}>
        <div className="h-1 w-12 rounded-full bg-primary" />
      </div>
      <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">{title}</h2>
      {description && (
        <p
          className={`text-lg text-muted-foreground text-pretty leading-relaxed ${centered ? "mx-auto max-w-2xl" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
