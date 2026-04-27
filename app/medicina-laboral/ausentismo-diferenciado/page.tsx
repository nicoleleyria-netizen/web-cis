import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Ausentismo Diferenciado",
  description: "Control médico especializado para empleados con patologías complejas o historia previa de enfermedad.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Ausentismo Diferenciado"
      resumen="Control médico especializado con mirada particular para casos que requieren atención diferenciada."
      image="/images/medicina-laboral/ausentismo-diferenciado-nuevo.jpg"
      imageAlt="Ausentismo diferenciado"
      descripcion={[
        "Existen casos en los que necesitamos una mirada especial a nuestro control médico, ya sea por conflictos previos, patologías complejas, historia previa de la enfermedad, entre otras.",
        "Para este tipo de caso ofrecemos un control de ausentismo diferenciado, que se realiza en consultorio, previo acuerdo de día y horario y con un médico especialista que se enfoca en el problema a resolver.",
        "En esta práctica la empresa recibe un informe completo y detallado, con sugerencias y pasos a seguir con respecto a la situación del empleado que se encuentra de baja laboral.",
        "El principal objetivo es la pronta reinserción al puesto de trabajo, de manera correcta y reduciendo al máximo la reincidencia de dichas bajas laborales.",
      ]}
    />
  )
}
