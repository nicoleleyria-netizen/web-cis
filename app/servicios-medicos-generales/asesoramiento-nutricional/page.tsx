import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Asesoramiento Nutricional",
  description: "Planes personalizados y seguimiento con enfoque integral y sostenible.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Asesoramiento Nutricional"
      resumen="Planes personalizados y seguimiento con enfoque integral y sostenible."
      image="/images/sis-real/recepcion-equipo.jpg"
      imageAlt="Asesoramiento nutricional"
      descripcion={[
        "En Consultora CIS brindamos este servicio con un enfoque práctico, profesional y orientado a resultados.",
        "La atención se adapta a cada persona/empresa y busca optimizar tiempos sin perder calidad asistencial.",
        "Nuestro equipo acompaña todo el proceso para facilitar la gestión del turno y la continuidad de atención.",
      ]}
      incluye={[
        'Diagnóstico inicial y objetivos','Plan alimentario personalizado','Seguimiento y ajuste'
      ]}
      requisitos={[
        'DNI','Estudios previos opcionales'
      ]}
    />
  )
}
