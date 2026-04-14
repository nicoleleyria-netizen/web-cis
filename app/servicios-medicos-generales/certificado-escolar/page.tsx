import type { Metadata } from "next"
import { ServiceInfoPage } from "@/components/service-info-page"

export const metadata: Metadata = {
  title: "Certificado Escolar",
  description: "Apto médico escolar para personas e instituciones educativas con evaluación integral.",
}

export default function Page() {
  return (
    <ServiceInfoPage
      title="Certificado Escolar"
      summary="Apto médico escolar para personas en edad escolar y para instituciones educativas que necesitan operativos en domicilio."
      heroImage="/images/servicios-medicos-generales/certificado-medico-smg.jpg"
      heroAlt="Certificado escolar"
      intro={[
        "En Consultora CIS ofrecemos la posibilidad de realizar el apto médico para todas las personas en edad escolar y de todos los niveles educativos.",
        "Todos los estudios médicos que comprende el examen se realizan en un mismo lugar y en el mismo turno.",
        "También ofrecemos el servicio para instituciones, con la posibilidad de realizar el examen en su propio domicilio si el número de alumnos lo justifica.",
      ]}
      actions={[
        { text: "Solicitar Turno", href: "/turnos-online" },
        { text: "WhatsApp", href: "https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web", external: true, variant: "secondary" },
        { text: "Formulario de contacto", href: "/contacto", variant: "outline" },
      ]}
      sections={[
        {
          title: "Otros servicios básicos ofrecidos",
          content: (
            <ul className="grid gap-2 sm:grid-cols-2">
              {[
                "Otorrinolaringología",
                "Fonoaudiología (Audiometría, valoración del lenguaje)",
                "Oftalmología",
                "Cardiología (ECG)",
                "Bucodental (Odontología)",
                "Radiología",
                "Laboratorio",
                "Servicio de psicología",
                "Nutrición",
              ].map((item) => (
                <li key={item} className="rounded-lg border bg-background px-3 py-2 text-sm text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          ),
        },
      ]}
    />
  )
}
