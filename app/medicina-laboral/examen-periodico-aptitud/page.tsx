import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Examen Periódico de Aptitud",
  description: "Control médico ocupacional periódico para monitorear la salud del trabajador.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Examen Periódico de Aptitud"
      resumen="Control periódico de salud ocupacional para seguimiento preventivo y detección temprana de riesgos laborales."
      image="/images/medicina-laboral/examenes-medicos-aptitud.png"
      imageAlt="Examen periódico de aptitud"
      descripcion={[
        "Los exámenes periódicos permiten monitorear la evolución del estado de salud del personal expuesto a diferentes riesgos laborales.",
        "Ayudan a detectar en forma temprana alteraciones vinculadas al puesto y sostener acciones preventivas efectivas.",
        "CIS coordina estos controles para empresas de distintos rubros con trazabilidad y reportes operativos.",
      ]}
      incluye={[
        "Evaluación clínica ocupacional periódica",
        "Estudios complementarios según riesgo",
        "Informe de aptitud y recomendaciones",
      ]}
      requisitos={[
        "DNI",
        "Datos de empresa/puesto",
        "Documentación médica previa (si aplica)",
      ]}
    />
  )
}
