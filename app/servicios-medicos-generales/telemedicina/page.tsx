import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Telemedicina",
  description: "Consultas online y continuidad de atención médica en forma remota.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Telemedicina"
      resumen="Consultas online y continuidad de atención médica en forma remota."
      image="/images/servicios-medicos-generales/asesoramiento-nutricional.jpeg"
      imageAlt="Telemedicina"
      descripcion={[
        "En Consultora CIS brindamos este servicio con un enfoque práctico, profesional y orientado a resultados.",
        "La atención se adapta a cada persona/empresa y busca optimizar tiempos sin perder calidad asistencial.",
        "Nuestro equipo acompaña todo el proceso para facilitar la gestión del turno y la continuidad de atención.",
      ]}
      incluye={[
        'Teleconsulta médica','Recetas digitales según criterio','Seguimiento profesional remoto'
      ]}
      requisitos={[
        'DNI','Conectividad estable'
      ]}
    />
  )
}
