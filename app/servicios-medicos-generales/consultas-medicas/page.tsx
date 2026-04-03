import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Consultas Médicas",
  description: "Atención por especialidades médicas con evaluación integral y seguimiento.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Consultas Médicas"
      resumen="Atención por especialidades médicas con evaluación integral y seguimiento."
      image="/images/sis-real/director-consultorio.jpg"
      imageAlt="Consultas médicas por especialidades"
      descripcion={[
        "En Consultora CIS brindamos este servicio con un enfoque práctico, profesional y orientado a resultados.",
        "La atención se adapta a cada persona/empresa y busca optimizar tiempos sin perder calidad asistencial.",
        "Nuestro equipo acompaña todo el proceso para facilitar la gestión del turno y la continuidad de atención.",
      ]}
      incluye={[
        'Medicina general y clínica médica','Derivación a especialidades','Seguimiento según evolución'
      ]}
      requisitos={[
        'DNI','Estudios previos (si los hay)'
      ]}
    />
  )
}
