import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Exámenes Psicotécnicos / Psicodiagnóstico",
  description: "Evaluaciones psicotécnicas y psicodiagnóstico para aptitud laboral según perfil de puesto.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Exámenes Psicotécnicos / Psicodiagnóstico"
      resumen="Evaluación de competencias, rasgos y aptitudes psicológicas relevantes para el desempeño laboral."
      image="/images/sis-real/equipo-trabajo-cis.jpg"
      imageAlt="Exámenes psicotécnicos y psicodiagnóstico"
      descripcion={[
        "Permite valorar habilidades y perfil conductual según la tarea a desempeñar.",
        "Se utiliza en procesos de ingreso, cambio de puesto y seguimiento ocupacional.",
        "Los resultados se integran al proceso de aptitud con confidencialidad profesional.",
      ]}
      incluye={["Entrevista y evaluación psicotécnica", "Instrumentos de valoración validados", "Informe profesional"]}
      requisitos={["DNI", "Perfil de puesto", "Coordinación de turno"]}
    />
  )
}
