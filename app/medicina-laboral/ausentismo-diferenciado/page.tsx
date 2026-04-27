import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Ausentismo Diferenciado",
  description: "Control médico especializado para empleados con patologías crónicas o situaciones de salud particular.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Ausentismo Diferenciado"
      resumen="Control y seguimiento médico especializado para empleados con patologías crónicas o situaciones de salud particular que requieren atención personalizada."
      image="/images/medicina-laboral/ausentismo-diferenciado-nuevo.jpg"
      imageAlt="Ausentismo diferenciado"
      descripcion={[
        "El ausentismo diferenciado es un servicio de seguimiento médico orientado a trabajadores con condiciones de salud específicas que generan ausencias recurrentes.",
        "Permite a las empresas gestionar de forma eficiente y humana las bajas médicas prolongadas o frecuentes, coordinando con los profesionales tratantes del empleado.",
        "En CIS brindamos acompañamiento continuo, evaluaciones periódicas y comunicación fluida entre empresa, empleado y equipo médico.",
      ]}
      incluye={[
        "Evaluación médica personalizada",
        "Seguimiento de evolución clínica",
        "Coordinación con médicos tratantes",
        "Informes periódicos para la empresa",
      ]}
    />
  )
}
