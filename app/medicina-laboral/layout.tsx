import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Medicina Laboral - Exámenes Preocupacionales y Salud Ocupacional",
  description:
    "Servicios completos de medicina laboral en Córdoba: exámenes preocupacionales, periódicos, de egreso, control de ausentismo y asesoramiento en salud ocupacional. +18 años de experiencia.",
  openGraph: {
    title: "Medicina Laboral - Consultora CIS",
    description:
      "Exámenes preocupacionales, periódicos, control de ausentismo y servicios de salud ocupacional para empresas.",
    images: ["/professional-medical-team-modern-clinic-occupational-health.jpg"],
  },
  alternates: {
    canonical: "/medicina-laboral",
  },
}

export default function MedicinaLaboralLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
