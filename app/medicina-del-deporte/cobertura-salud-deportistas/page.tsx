import type { Metadata } from "next"
import { ServiceInfoPage } from "@/components/service-info-page"

export const metadata: Metadata = {
  title: "Cobertura de Salud para Deportistas",
  description: "Planes de cobertura y seguros de salud para clubes e instituciones deportivas.",
}

export default function Page() {
  return (
    <ServiceInfoPage
      title="Cobertura de Salud para Deportistas"
      summary="Planes de cobertura y seguros de salud para clubes e instituciones con seguimiento médico personalizado."
      heroImage="/images/medicina-del-deporte/cobertura-salud-deportistas-nuevo.jpg"
      heroAlt="Cobertura de salud para deportistas"
      intro={[
        "Consultora Integral de Salud dispone de planes de cobertura y seguros de salud para clubes e instituciones.",
        "Estos planes prepagos están destinados a cubrir a la totalidad de los jugadores del plantel ante lesiones o accidentes que deriven de la práctica deportiva relacionada con la institución.",
        "Brindamos la atención médica inicial y el seguimiento del jugador hasta el alta.",
        "Gestionamos la derivación de casos complejos y controlamos la evolución de cada caso de manera personalizada.",
        "Envíenos su consulta a continuación y exponga su necesidad: con gusto crearemos un servicio personalizado para su satisfacción.",
      ]}
      actions={[
        { text: "Solicitar Turno", href: "/turnos-online" },
        { text: "WhatsApp", href: "https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web", external: true, variant: "secondary" },
        { text: "Formulario de contacto", href: "/contacto", variant: "outline" },
      ]}
      bottomTitle="¿Necesitás un plan de cobertura para tu institución?"
      bottomDescription="Enviá tu consulta y te proponemos un servicio adaptado a tu plantel y actividad."
    />
  )
}
