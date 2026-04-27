import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Examen Preocupacional",
  description: "Evaluación médica de ingreso para determinar aptitud según perfil del puesto.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Examen Preocupacional"
      resumen="Evaluación médica previa al ingreso laboral para determinar aptitud psicofísica de acuerdo con el puesto."
      image="/images/medicina-laboral/examen-preocupacional-nuevo.jpg"
      imageAlt="Examen preocupacional"
      descripcion={[
        "El examen preocupacional permite verificar la aptitud del postulante para tareas específicas del puesto de trabajo.",
        "Se realiza con enfoque preventivo, respetando normativa vigente y criterios de salud ocupacional.",
        "En CIS se coordina de forma ágil para empresas y particulares, con resultados en tiempos operativos.",
      ]}
      incluye={[
        "Evaluación clínica ocupacional",
        "Estudios complementarios según perfil de riesgo",
        "Informe de aptitud laboral",
      ]}
      requisitos={[
        "DNI",
        "Datos del puesto a evaluar",
        "Ayuno si se solicita laboratorio",
      ]}
    />
  )
}
