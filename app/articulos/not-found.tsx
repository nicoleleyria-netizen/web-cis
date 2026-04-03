import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <FileQuestion className="mb-6 h-16 w-16 text-muted-foreground" />
      <h1 className="mb-2 text-3xl font-bold text-foreground">Artículo no encontrado</h1>
      <p className="mb-6 text-muted-foreground">El artículo que buscas no existe o ha sido removido.</p>
      <Button asChild>
        <Link href="/articulos">Ver todos los artículos</Link>
      </Button>
    </div>
  )
}
