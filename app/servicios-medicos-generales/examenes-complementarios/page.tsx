import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Exámenes Complementarios",
  description: "Estudios diagnósticos para evaluación integral en un solo circuito de atención.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Exámenes Complementarios"
      resumen="Estudios diagnósticos para evaluación integral en un solo circuito de atención."
      image="/images/sis-real/consultorio-detalle.jpg"
      imageAlt="Exámenes complementarios"
      descripcion={[
        "En Consultora CIS brindamos este servicio con un enfoque práctico, profesional y orientado a resultados.",
        "La atención se adapta a cada persona/empresa y busca optimizar tiempos sin perder calidad asistencial.",
        "Nuestro equipo acompaña todo el proceso para facilitar la gestión del turno y la continuidad de atención.",
      ]}
      incluye={[
        'Cardiología, laboratorio, imágenes y más','Coordinación de turnos','Informe para continuidad médica'
      ]}
      requisitos={[
        'DNI','Orden médica cuando aplique'
      ]}
    />
  )
}
