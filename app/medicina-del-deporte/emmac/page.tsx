import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "EMMAC - Examen Médico para Mediana y Alta Competencia",
  description: "Certificación de aptitud física obligatoria para práctica deportiva en Córdoba.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="EMMAC"
      resumen="Examen Médico para la Mediana y Alta Competencia. Certificación de aptitud física obligatoria para la comunidad deportiva de Córdoba."
      image="/images/medicina-del-deporte/emmac-mdd.jpg"
      imageAlt="EMMAC en Consultora CIS"
      descripcion={[
        "El EMMAC permite evaluar y diagnosticar el estado de salud antes de iniciar o continuar la práctica deportiva, con foco preventivo.",
        "La evaluación debe realizarse antes de comenzar la actividad y renovarse anualmente.",
        "En Consultora CIS se pueden realizar los estudios en un mismo lugar y turno, optimizando tiempos.",
      ]}
      incluye={[
        "Electrocardiograma (en todos los casos)",
        "Ergometría según edad y periodicidad",
        "Examen de sangre según edad y periodicidad",
      ]}
      requisitos={[
        "DNI vigente",
        "Menores acompañados por madre/padre/tutor con DNI",
        "Ayuno de 12 horas cuando se solicite laboratorio",
      ]}
    />
  )
}
