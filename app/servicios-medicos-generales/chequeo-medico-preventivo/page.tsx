import type { Metadata } from "next"
import { ServiceInfoPage } from "@/components/service-info-page"

export const metadata: Metadata = {
  title: "Chequeo Médico Preventivo",
  description: "Chequeos preventivos para detectar riesgos y enfermedades en forma temprana.",
}

export default function Page() {
  return (
    <ServiceInfoPage
      title="Chequeo Médico Preventivo"
      summary="Evaluación integral para detectar a tiempo enfermedades o riesgos potenciales de desarrollarlas."
      heroImage="/images/servicios-medicos-generales/chequeo-medico-preventivo-nuevo.jpg"
      heroAlt="Chequeo médico preventivo"
      intro={[
        "Descubrir a tiempo cualquier enfermedad, o conocer si existen riesgos potenciales de desarrollarla, nos da mejores expectativas para su tratamiento.",
        "La prevención es la mejor y más económica forma de mantener la salud.",
        "Se realizan chequeos anuales con el fin de lograr diagnóstico precoz de enfermedades crónicas como hipertensión arterial, cardiopatía, diabetes, enfermedades pulmonares y distintos tipos de cáncer.",
      ]}
      actions={[
        { text: "Solicitar Turno", href: "/turnos-online" },
        { text: "WhatsApp", href: "https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web", external: true, variant: "secondary" },
        { text: "Formulario de contacto", href: "/contacto", variant: "outline" },
      ]}
      sections={[
        {
          title: "Objetivo del chequeo",
          content: <p>El seguimiento preventivo permite tratamiento oportuno, disminuye días de ausentismo laboral y mejora la calidad de vida.</p>,
        },
      ]}
    />
  )
}
