import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Examen de Egreso (Post Ocupacional)",
  description: "Evaluación médica al finalizar la relación laboral para registro de estado de salud.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Examen de Egreso (Post Ocupacional)"
      resumen="Evaluación médica al cierre del vínculo laboral para documentar el estado de salud del trabajador."
      image="/images/sis-real/recepcion-paciente.jpg"
      imageAlt="Examen de egreso post ocupacional"
      descripcion={[
        "El examen de egreso registra la condición de salud del trabajador al finalizar su etapa laboral en la empresa.",
        "Permite documentar antecedentes y evolución, aportando respaldo para empresa y trabajador.",
        "CIS realiza el proceso con criterios de medicina laboral y gestión administrativa clara.",
      ]}
      incluye={[
        "Consulta médica ocupacional",
        "Estudios complementarios según antecedentes",
        "Informe final post ocupacional",
      ]}
      requisitos={[
        "DNI",
        "Datos de empresa",
        "Historia ocupacional disponible (si aplica)",
      ]}
    />
  )
}
