import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Exámenes Complementarios Especiales",
  description: "Estudios complementarios para ampliar evaluación de aptitud laboral según riesgo y puesto.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Exámenes Complementarios Especiales"
      resumen="Estudios específicos solicitados según perfil de puesto, riesgo y criterio médico ocupacional."
      image="/images/medicina-laboral/examenes-complementarios-especiales-nuevo.jpg"
      imageAlt="Exámenes complementarios especiales"
      descripcion={[
        "Se indican cuando la evaluación ocupacional requiere información adicional para definir aptitud.",
        "Pueden incluir prácticas de distintas especialidades según exposición y tareas del puesto.",
        "Permiten decisiones más seguras para trabajador y empresa.",
      ]}
      incluye={["Definición por criterio médico", "Gestión de turnos y circuito de estudios", "Informe ocupacional"]}
      requisitos={["DNI", "Datos de puesto/empresa", "Orden médica si corresponde"]}
    />
  )
}
