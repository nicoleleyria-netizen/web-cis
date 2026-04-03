import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Laboratorio de Análisis Clínicos",
  description: "Análisis clínicos de baja y alta complejidad con resultados confiables y atención profesional.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Laboratorio de Análisis Clínicos"
      resumen="Servicio de laboratorio con procesos de calidad y resultados en tiempos acordes a cada práctica."
      image="/images/servicios-medicos-generales/consultas-medicas.png"
      imageAlt="Laboratorio de análisis clínicos"
      descripcion={[
        "Nuestro laboratorio está gestionado por profesionales con amplia experiencia y capacitación continua.",
        "Realizamos análisis de baja y alta complejidad con protocolos de bioseguridad y trazabilidad.",
        "Contamos con capacidad de derivación a centros nacionales e internacionales cuando el caso lo requiere.",
      ]}
      incluye={[
        "Extracciones con personal calificado",
        "Procesamiento de muestras de baja/alta complejidad",
        "Resultados según tiempos de cada determinación",
      ]}
      requisitos={[
        "Orden médica (si corresponde)",
        "DNI",
        "Ayuno cuando la práctica lo indique",
      ]}
    />
  )
}
