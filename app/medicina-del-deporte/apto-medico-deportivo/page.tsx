import type { Metadata } from "next"
import { ServiceInfoPage } from "@/components/service-info-page"

export const metadata: Metadata = {
  title: "Aptos Médicos Deportivos",
  description: "Chequeo médico preventivo para iniciar o continuar prácticas físicas y deportivas.",
}

export default function Page() {
  return (
    <ServiceInfoPage
      title="Aptos Médicos Deportivos"
      summary="Chequeo preventivo para comenzar o continuar actividad física y deportiva con respaldo profesional."
      heroImage="/images/medicina-del-deporte/aptos-medicos-deportivos-nuevo.jpg"
      heroAlt="Aptos médicos deportivos"
      intro={[
        "En Consultora CIS brindamos este servicio destinado tanto a personas que desean comenzar a realizar ejercicios físicos o deportivos como a aquellas que ya los realizan regularmente.",
        "Mediante este chequeo médico, a cargo de nuestro equipo médico especializado, se realiza un diagnóstico preventivo para identificar y evaluar potenciales limitaciones que puedan dificultar el desarrollo de las prácticas físicas.",
        "El médico indaga en los antecedentes médicos del paciente y de acuerdo a ello se realizan los estudios de diagnóstico correspondientes.",
        "El chequeo médico y los estudios médicos se realizan en un mismo lugar y en el mismo turno del paciente.",
        "El certificado brindado es válido para clubes, gimnasios, instituciones deportivas y diversas prácticas deportivas.",
      ]}
      actions={[
        { text: "Solicitar Turno", href: "/turnos-online" },
        { text: "WhatsApp", href: "https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web", external: true, variant: "secondary" },
        { text: "Formulario de contacto", href: "/contacto", variant: "outline" },
      ]}
    />
  )
}
