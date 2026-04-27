import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Visado de Examen Preocupacional",
  description: "Servicio de visado médico para validación de exámenes preocupacionales realizados por otros centros.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Visado de Examen Preocupacional"
      resumen="Servicio de visado médico para la validación formal de exámenes preocupacionales realizados por otros centros."
      image="/images/medicina-laboral/visado-examen-preocupacional-nuevo.jpg"
      imageAlt="Visado de examen preocupacional"
      descripcion={[
        "El visado de examen preocupacional consiste en la revisión y certificación médica de estudios realizados previamente en otro centro o institución.",
        "Un profesional habilitado evalúa la documentación presentada y emite el certificado de aptitud correspondiente, conforme a la normativa laboral vigente.",
        "En CIS ofrecemos este servicio de forma ágil para empresas y postulantes que requieren validar sus exámenes de ingreso.",
      ]}
      requisitos={[
        "DNI",
        "Resultados del examen preocupacional a visar",
        "Datos del puesto y empresa contratante",
      ]}
    />
  )
}
