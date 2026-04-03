import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Examen Posterior a una Ausencia Prolongada",
  description: "Evaluación de reintegro laboral luego de licencias prolongadas.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Examen Posterior a una Ausencia Prolongada"
      resumen="Control médico para confirmar condiciones de reintegro y definir pautas seguras de retorno laboral."
      image="/images/sis-real/recepcion-paciente.jpg"
      imageAlt="Examen posterior a ausencia prolongada"
      descripcion={[
        "Se realiza tras ausencias extensas por enfermedad, lesión u otras causas médicas.",
        "Permite definir aptitud de reintegro y, si corresponde, restricciones temporales.",
        "Favorece el regreso progresivo y seguro al entorno de trabajo.",
      ]}
      incluye={["Evaluación clínica de reintegro", "Definición de aptitud/restricciones", "Informe para empresa"]}
      requisitos={["DNI", "Documentación médica de la licencia", "Datos del puesto"]}
    />
  )
}
