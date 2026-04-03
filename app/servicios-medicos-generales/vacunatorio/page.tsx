import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Vacunatorio",
  description: "Aplicación de vacunas de calendario y especiales con control profesional.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Vacunatorio"
      resumen="Aplicación de vacunas de calendario y especiales con control profesional."
      image="/images/sis-real/medicina-laboral-real.jpg"
      imageAlt="Vacunatorio"
      descripcion={[
        "En Consultora CIS brindamos este servicio con un enfoque práctico, profesional y orientado a resultados.",
        "La atención se adapta a cada persona/empresa y busca optimizar tiempos sin perder calidad asistencial.",
        "Nuestro equipo acompaña todo el proceso para facilitar la gestión del turno y la continuidad de atención.",
      ]}
      incluye={[
        'Vacunas de calendario','Vacunas especiales según indicación','Registro y control'
      ]}
      requisitos={[
        'DNI','Carnet de vacunación si lo tiene'
      ]}
    />
  )
}
