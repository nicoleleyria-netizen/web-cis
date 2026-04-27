import type { Metadata } from "next"
import { ServiceInfoPage } from "@/components/service-info-page"

export const metadata: Metadata = {
  title: "Telemedicina",
  description: "Teleconsultas médicas online y seguimiento profesional a distancia.",
}

export default function Page() {
  return (
    <ServiceInfoPage
      title="Telemedicina"
      summary="Teleconsultas médicas online y seguimiento profesional para continuar la atención desde casa."
      heroImage="/images/servicios-medicos-generales/telemedicina-nuevo.jpg"
      heroAlt="Telemedicina"
      intro={[
        "La telemedicina brinda mayor eficiencia en la gestión de la demanda, reducción de tiempos de estancia hospitalaria y mejor manejo de los tiempos del paciente.",
        "También disminuye el desplazamiento a centros de salud y hace más accesible la información médica mediante sistemas informáticos seguros.",
        "En CIS implementamos este servicio para posibilitar la continuidad de la atención médica desde su casa, sin perder calidad asistencial.",
      ]}
      actions={[
        { text: "Solicitar Turno", href: "/turnos-online" },
        { text: "WhatsApp", href: "https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web", external: true, variant: "secondary" },
        { text: "Formulario de contacto", href: "/contacto", variant: "outline" },
      ]}
      sections={[
        {
          title: "Servicios disponibles",
          content: (
            <ul className="grid gap-2 sm:grid-cols-2">
              {[
                "Teleconsultas médicas online",
                "Recetas médicas digitales",
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
