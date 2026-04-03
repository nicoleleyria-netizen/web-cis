import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Infusión de Medicamentos",
  description: "Hospital de día para administración de medicación bajo supervisión médica.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Infusión de Medicamentos"
      resumen="Hospital de día para administración de medicación bajo supervisión médica."
      image="/images/sis-real/recepcion-espera.jpg"
      imageAlt="Infusión de medicamentos hospital de día"
      descripcion={[
        "En Consultora CIS brindamos este servicio con un enfoque práctico, profesional y orientado a resultados.",
        "La atención se adapta a cada persona/empresa y busca optimizar tiempos sin perder calidad asistencial.",
        "Nuestro equipo acompaña todo el proceso para facilitar la gestión del turno y la continuidad de atención.",
      ]}
      incluye={[
        'Administración endovenosa/subcutánea','Monitoreo por enfermería y médico','Seguimiento de agenda del paciente'
      ]}
      requisitos={[
        'DNI','Orden médica','Estudios complementarios si corresponden'
      ]}
    />
  )
}
