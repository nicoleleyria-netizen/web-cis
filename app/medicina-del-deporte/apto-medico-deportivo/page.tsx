import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Apto Médico Deportivo - Valoración Inicial",
  description: "Chequeo médico preventivo para iniciar o continuar actividad física/deportiva.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Apto Médico Deportivo"
      resumen="Valoración inicial para personas que desean iniciar o continuar actividad física con control médico preventivo."
      image="/images/medicina-del-deporte/aptos-medicos-deportivos-mdd.jpg"
      imageAlt="Apto médico deportivo"
      descripcion={[
        "Servicio destinado a personas que comienzan o realizan actividad física regularmente.",
        "Se evalúan antecedentes y factores de riesgo para definir aptitud y recomendaciones seguras.",
        "El certificado emitido es válido para clubes, gimnasios e instituciones deportivas.",
      ]}
      incluye={[
        "Consulta médica deportiva",
        "Evaluación clínica preventiva",
        "Indicación de estudios de diagnóstico según criterio médico",
      ]}
      requisitos={[
        "DNI",
        "Antecedentes médicos relevantes (si los hubiera)",
        "Estudios previos (opcional, recomendable)",
      ]}
    />
  )
}
