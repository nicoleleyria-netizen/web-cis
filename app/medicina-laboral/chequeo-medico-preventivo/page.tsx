import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Chequeo Médico Preventivo",
  description: "Control integral orientado a prevención y detección temprana de factores de riesgo en salud.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Chequeo Médico Preventivo"
      resumen="Evaluación integral de salud para prevenir enfermedades y detectar factores de riesgo en etapas tempranas."
      image="/images/sis-real/director-consultorio.jpg"
      imageAlt="Chequeo médico preventivo"
      descripcion={[
        "El chequeo preventivo combina evaluación clínica y estudios según edad, antecedentes y perfil de riesgo.",
        "Permite detectar desvíos de salud de forma temprana y planificar acciones de cuidado.",
        "Es una herramienta clave para personas y programas corporativos de bienestar.",
      ]}
      incluye={["Consulta médica integral", "Estudios base según criterio médico", "Plan de seguimiento"]}
      requisitos={["DNI", "Antecedentes médicos", "Ayuno cuando corresponda"]}
    />
  )
}
