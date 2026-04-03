import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Chequeo Médico Preventivo",
  description: "Evaluación integral para detección temprana y prevención de riesgos en salud.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Chequeo Médico Preventivo"
      resumen="Evaluación integral para detección temprana y prevención de riesgos en salud."
      image="/images/sis-real/reunion-equipo.jpg"
      imageAlt="Chequeo médico preventivo"
      descripcion={[
        "En Consultora CIS brindamos este servicio con un enfoque práctico, profesional y orientado a resultados.",
        "La atención se adapta a cada persona/empresa y busca optimizar tiempos sin perder calidad asistencial.",
        "Nuestro equipo acompaña todo el proceso para facilitar la gestión del turno y la continuidad de atención.",
      ]}
      incluye={[
        'Consulta médica integral','Estudios base según perfil','Plan de seguimiento'
      ]}
      requisitos={[
        'DNI','Ayuno si corresponde'
      ]}
    />
  )
}
