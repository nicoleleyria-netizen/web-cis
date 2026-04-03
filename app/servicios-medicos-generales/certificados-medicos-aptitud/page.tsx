import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Certificados Médicos de Aptitud",
  description: "Certificaciones para actividades, habilitaciones y requisitos específicos.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Certificados Médicos de Aptitud"
      resumen="Certificaciones para actividades, habilitaciones y requisitos específicos."
      image="/images/servicios-medicos-generales/certificados-medicos-aptitud.png"
      imageAlt="Certificados médicos de aptitud"
      descripcion={[
        "En Consultora CIS brindamos este servicio con un enfoque práctico, profesional y orientado a resultados.",
        "La atención se adapta a cada persona/empresa y busca optimizar tiempos sin perder calidad asistencial.",
        "Nuestro equipo acompaña todo el proceso para facilitar la gestión del turno y la continuidad de atención.",
      ]}
      incluye={[
        'Certificados para actividad física','Aptitudes para requisitos específicos','Exámenes complementarios asociados'
      ]}
      requisitos={[
        'DNI','Requisito/solicitud de la entidad receptora'
      ]}
    />
  )
}
