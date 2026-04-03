import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Prevención de Lesiones Deportivas",
  description: "Evaluación de riesgos y recomendaciones para prevenir lesiones en práctica deportiva.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Prevención de Lesiones"
      resumen="Evaluación médica orientada a identificar factores de riesgo y reducir la probabilidad de lesión deportiva."
      image="/images/medicina-del-deporte/fichaje-rugby-uar-mdd.jpg"
      imageAlt="Prevención de lesiones deportivas"
      descripcion={[
        "El objetivo es detectar riesgos antes de que se transformen en lesión y sostener continuidad deportiva segura.",
        "Se analiza historia clínica, antecedentes de lesión y exigencia física según disciplina.",
        "Se entregan pautas preventivas y de control para deportistas e instituciones.",
      ]}
      incluye={[
        "Evaluación médica preventiva",
        "Identificación de factores de riesgo",
        "Plan de recomendaciones y seguimiento",
      ]}
      requisitos={[
        "DNI",
        "Antecedentes de lesiones previas (si los hay)",
      ]}
    />
  )
}
