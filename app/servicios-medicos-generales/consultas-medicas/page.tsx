import type { Metadata } from "next"
import Link from "next/link"
import { ServiceInfoPage } from "@/components/service-info-page"

export const metadata: Metadata = {
  title: "Consultas Médicas",
  description: "Consultas médicas por especialidad con atención integral y derivación oportuna.",
}

const especialidades = [
  "Medicina general",
  "Clínica médica",
  "Reumatología",
  "Traumatología",
  "Medicina del deporte",
  "Cardiología",
  "Oftalmología",
  "Neumonología",
  "Diabetología",
  "Psiquiatría",
  "Kinesiología",
  "Psicología",
  "Fonoaudiología",
  "Neurología",
  "Ginecología",
  "Otorrinolaringología",
  "Dermatología",
]

export default function Page() {
  return (
    <ServiceInfoPage
      title="Consultas Médicas"
      summary="Atención por especialidades médicas con evaluación integral, seguimiento y derivación cuando hace falta."
      heroImage="/images/sis-real/director-consultorio.jpg"
      heroAlt="Consultas médicas por especialidades"
      intro={[
        "Consultora CIS brinda consultas médicas con una propuesta resolutiva, profesional y ordenada para personas, empresas e instituciones.",
        "La atención se adapta al motivo de consulta, optimiza tiempos y busca acompañar cada caso con comunicación fluida y continuidad asistencial.",
      ]}
      actions={[
        { text: "Solicitar Turno", href: "/turnos-online" },
        { text: "WhatsApp", href: "https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web", external: true, variant: "secondary" },
        { text: "Formulario de contacto", href: "/contacto", variant: "outline" },
      ]}
      sections={[
        {
          title: "Especialidades disponibles",
          content: (
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {especialidades.map((item) => (
                <div key={item} className="rounded-lg border bg-background px-3 py-2 text-sm text-foreground">
                  {item}
                </div>
              ))}
            </div>
          ),
        },
        {
          title: "Consulta de medicina del deporte",
          content: (
            <p>
              Si buscás atención vinculada a actividad física o rendimiento, también podés ir a la página de{' '}
              <Link className="font-medium text-primary underline-offset-4 hover:underline" href="/medicina-del-deporte">
                Medicina del Deporte
              </Link>
              .
            </p>
          ),
        },
      ]}
    />
  )
}
