import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Servicios Médicos a Domicilio",
  description: "Atención y prácticas médicas en domicilio para mayor comodidad del paciente.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Servicios Médicos a Domicilio"
      resumen="Atención y prácticas médicas en domicilio para mayor comodidad del paciente."
      image="/images/sis-real/recepcion-espera.jpg"
      imageAlt="Servicios médicos a domicilio"
      descripcion={[
        "En Consultora CIS brindamos este servicio con un enfoque práctico, profesional y orientado a resultados.",
        "La atención se adapta a cada persona/empresa y busca optimizar tiempos sin perder calidad asistencial.",
        "Nuestro equipo acompaña todo el proceso para facilitar la gestión del turno y la continuidad de atención.",
      ]}
      incluye={[
        'Consulta médica domiciliaria','Coordinación de turnos y cobertura','Seguimiento clínico'
      ]}
      requisitos={[
        'DNI','Dirección completa y contacto'
      ]}
    />
  )
}
