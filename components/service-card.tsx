import type React from "react"
import Link from "next/link"
import Image from "@/components/base-path-image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: React.ReactNode
  image: string
}

export function ServiceCard({ title, description, href, icon, image }: ServiceCardProps) {
  return (
    <Link href={href} className="group">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-primary shadow-lg">
            {icon}
          </div>
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="mb-4 text-muted-foreground leading-relaxed">{description}</CardDescription>
          <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:underline">
            Más información
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}
