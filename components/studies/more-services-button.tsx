"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, List } from "lucide-react"
import { Button } from "@/components/ui/button"

const serviceListByPrefix: Array<{ prefix: string; href: string; label: string }> = [
  { prefix: "/medicina-laboral", href: "/medicina-laboral", label: "Más servicios de medicina laboral" },
  {
    prefix: "/servicios-medicos-generales",
    href: "/servicios-medicos-generales",
    label: "Más servicios médicos generales",
  },
  { prefix: "/medicina-del-deporte", href: "/medicina-del-deporte", label: "Más servicios del deporte" },
]

export function MoreServicesButton() {
  const pathname = usePathname()

  const destination = serviceListByPrefix.find((item) => pathname.startsWith(item.prefix)) ?? {
    href: "/",
    label: "Más servicios",
  }

  return (
    <aside className="lg:sticky lg:top-24">
      <Button asChild variant="outline" className="group w-full justify-between border-primary/20 bg-card px-4 py-6 text-left shadow-sm hover:border-primary/40 hover:bg-primary/5 lg:w-64">
        <Link href={destination.href}>
          <span className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <List className="h-5 w-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-foreground">Más servicios</span>
              <span className="text-xs text-muted-foreground">Atajo al listado</span>
            </span>
          </span>
          <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </aside>
  )
}