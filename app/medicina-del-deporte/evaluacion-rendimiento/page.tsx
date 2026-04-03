import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Evaluación de Rendimiento Deportivo",
  description: "Evaluación integral del estado físico y capacidad de rendimiento deportivo.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Evaluación de Rendimiento"
      resumen="Análisis integral del estado físico y capacidad de rendimiento para mejorar resultados deportivos con control médico."
      image="/images/medicina-del-deporte/chequeo-medico-periodico-mdd.jpg"
      imageAlt="Evaluación de rendimiento deportivo"
      descripcion={[
        "Esta evaluación permite conocer el punto de partida físico del deportista y su capacidad funcional actual.",
        "Se orienta a optimizar rendimiento, prevenir sobrecargas y ajustar planificación de entrenamiento.",
        "El equipo de CIS entrega recomendaciones prácticas para entrenadores y deportistas.",
      ]}
      incluye={[
        "Consulta médica deportiva",
        "Evaluación clínica y funcional",
        "Recomendaciones de seguimiento",
      ]}
      requisitos={[
        "DNI",
        "Antecedentes médicos/deportivos relevantes",
      ]}
    />
  )
}
