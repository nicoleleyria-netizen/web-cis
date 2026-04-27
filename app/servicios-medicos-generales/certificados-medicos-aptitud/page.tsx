import type { Metadata } from "next"
import { ServiceInfoPage } from "@/components/service-info-page"

export const metadata: Metadata = {
  title: "Certificados Médicos de Aptitud",
  description: "Certificados para conducción, deporte, estudios, viajes y aptitudes especiales.",
}

const certificados = [
  "Certificados para carnet de conducir profesional: taxis, remises, choferes de larga distancia, entre otros.",
  "Certificado para carnet de conducir particular y sus estudios complementarios",
  "Certificados de salud para actividad física, maratones, entre otros",
  "Aptitud para uso de natatorios y piletas.",
  "Aptitud para gimnasios.",
  "Ingreso a universidades e instituciones educativas.",
  "Certificados escolares",
  "Certificados para viajes turísticos, de egresados, entre otros",
  "Certificaciones para cruceros",
  "Exámenes complementarios para carnet de timonel y embarcaciones",
  "Aptitud para ingresos a las FFAA",
  "Aptitud ANMAC (para uso de arma de fuego)",
]

export default function Page() {
  return (
    <ServiceInfoPage
      title="Certificados Médicos de Aptitud"
      summary="Certificaciones médicas para actividades, habilitaciones y requisitos específicos."
      heroImage="/images/servicios-medicos-generales/certificados-medicos-aptitud.png"
      heroAlt="Certificados médicos de aptitud"
      intro={[
        "En Consultora CIS ofrecemos certificados de aptitud con un circuito ágil y ordenado, pensado para resolver cada requerimiento en el menor tiempo posible.",
        "La atención se adapta al objetivo del certificado y puede complementarse con estudios adicionales cuando la indicación lo requiera.",
      ]}
      actions={[
        { text: "Solicitar Turno", href: "/turnos-online" },
        { text: "WhatsApp", href: "https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web", external: true, variant: "secondary" },
        { text: "Formulario de contacto", href: "/contacto", variant: "outline" },
      ]}
      sections={[
        {
          title: "Certificados disponibles",
          content: (
            <ul className="grid gap-2 sm:grid-cols-2">
              {certificados.map((item) => (
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
