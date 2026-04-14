import type { Metadata } from "next"
import Link from "next/link"
import { ServiceInfoPage } from "@/components/service-info-page"

export const metadata: Metadata = {
  title: "EMMAC",
  description: "Examen Médico para Mediana y Alta Competencia disponible en Medicina del Deporte.",
}

export default function Page() {
  return (
    <ServiceInfoPage
      title="EMMAC"
      summary="El examen EMMAC está disponible en la sección de Medicina del Deporte."
      heroImage="/images/sis-real/evaluacion-deportiva-clinica.jpg"
      heroAlt="EMMAC en servicios médicos"
      intro={[
        "El Examen Médico para Mediana y Alta Competencia forma parte de nuestra oferta de medicina del deporte.",
        "Si buscás esta práctica específica, te derivamos a la página correcta para que la encuentres junto a la información deportiva correspondiente.",
      ]}
      actions={[
        { text: "Ir a EMMAC en Medicina del Deporte", href: "/medicina-del-deporte/emmac" },
        { text: "Solicitar Turno", href: "/turnos-online", variant: "secondary" },
        { text: "WhatsApp", href: "https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web", external: true, variant: "outline" },
      ]}
      sections={[
        {
          title: "Acceso directo",
          content: (
            <p>
              También podés ir directamente a la página de{' '}
              <Link className="font-medium text-primary underline-offset-4 hover:underline" href="/medicina-del-deporte/emmac">
                EMMAC en Medicina del Deporte
              </Link>
              .
            </p>
          ),
        },
      ]}
    />
  )
}
