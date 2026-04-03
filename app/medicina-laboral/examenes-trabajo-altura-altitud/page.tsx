import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Exámenes para Trabajo en Altura / Altitud",
  description: "Evaluaciones para tareas en altura física o geográfica, con enfoque preventivo.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Exámenes para Trabajo en Altura / Altitud"
      resumen="Aptitud médica para tareas en altura física o geográfica según exigencias y normativa de seguridad."
      image="/images/sis-real/reunion-equipo.jpg"
      imageAlt="Exámenes para trabajo en altura o altitud"
      descripcion={[
        "Evalúa condiciones cardiovasculares, respiratorias y neurológicas vinculadas al trabajo en altura.",
        "Busca prevenir eventos de riesgo en actividades con exigencia física y ambiental elevada.",
        "Permite definir aptitud con criterios claros para tareas específicas.",
      ]}
      incluye={["Evaluación clínica dirigida", "Estudios complementarios según criterio médico", "Certificación de aptitud"]}
      requisitos={["DNI", "Descripción de tareas", "Antecedentes de salud relevantes"]}
    />
  )
}
