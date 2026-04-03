import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Examen Previo a una Transferencia de Actividad",
  description: "Evaluación previa al cambio de tareas para confirmar aptitud en nuevas condiciones de trabajo.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Examen Previo a una Transferencia de Actividad"
      resumen="Control médico antes de cambiar de actividad o puesto para verificar aptitud en el nuevo perfil laboral."
      image="/images/sis-real/recepcion-equipo.jpg"
      imageAlt="Examen previo a transferencia de actividad"
      descripcion={[
        "Evalúa compatibilidad entre condición de salud y nuevas exigencias del puesto.",
        "Reduce riesgos de incidentes y facilita una transición laboral segura.",
        "Se integra al legajo de salud ocupacional de la empresa.",
      ]}
      incluye={["Consulta ocupacional", "Estudios según riesgo", "Informe de aptitud para nueva actividad"]}
      requisitos={["DNI", "Detalle del nuevo puesto", "Antecedentes médicos relevantes"]}
    />
  )
}
