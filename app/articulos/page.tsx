import type { Metadata } from "next"
import { ArticlesPageClient } from "@/components/articles-page-client"

export const metadata: Metadata = {
  title: "Artículos y Publicaciones sobre Salud",
  description:
    "Artículos informativos sobre medicina laboral, medicina del deporte, investigación clínica y bienestar. Consejos de salud por profesionales de Consultora CIS.",
  openGraph: {
    title: "Artículos sobre Salud - Consultora CIS",
    description:
      "Publicaciones informativas sobre medicina laboral, deportiva, investigación clínica y bienestar.",
    images: ["/clinical-research-laboratory-medical-science.jpg"],
  },
  alternates: {
    canonical: "/articulos",
  },
}

// This avoids any server-side Sanity calls during build which were causing null.slice() errors
export default function ArticulosPage() {
  return <ArticlesPageClient />
}
