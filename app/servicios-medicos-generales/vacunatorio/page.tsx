import type { Metadata } from "next"
import { ServiceInfoPage } from "@/components/service-info-page"

export const metadata: Metadata = {
  title: "Vacunatorio",
  description: "Servicio de vacunación integral para empresas, instituciones y personas.",
}

export default function Page() {
  return (
    <ServiceInfoPage
      title="Vacunatorio"
      summary="Servicio de vacunación integral para empresas, instituciones y personas, con control y seguimiento profesional."
      heroImage="/images/servicios-medicos-generales/vacunatorio-smg.jfif"
      heroAlt="Vacunatorio"
      intro={[
        "En Consultora Integral de Salud creemos que la prevención de las enfermedades es la política de salud más importante.",
        "Por eso ofrecemos un servicio de vacunación a empresas, instituciones y personas que lo requieran.",
        "Brindamos un servicio de calidad, priorizando el cuidado del paciente y la seguridad y eficacia de las vacunas aplicadas.",
      ]}
      actions={[
        { text: "Solicitar Turno", href: "/turnos-online" },
        { text: "WhatsApp", href: "https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web", external: true, variant: "secondary" },
        { text: "Formulario de contacto", href: "/contacto", variant: "outline" },
      ]}
      sections={[
        {
          title: "Nuestro servicio integral incluye",
          content: (
            <ul className="grid gap-2 sm:grid-cols-2">
              {[
                "Asesoramiento médico para la prevención de enfermedades infectocontagiosas a través de los esquemas de vacunación.",
                "Gestión de campañas de vacunación a empresas.",
                "Aplicación de vacunas tanto en consultorio como en domicilio.",
                "Control post-vacunación.",
                "Seguimiento de los esquemas personales de vacunación, hasta cumplimentarlos.",
                "Atención médica y exámenes complementarios, disponibles de ser necesario.",
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
