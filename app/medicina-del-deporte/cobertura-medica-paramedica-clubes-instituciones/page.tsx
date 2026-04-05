import type { Metadata } from "next"
import { ServiceInfoPage } from "@/components/service-info-page"

export const metadata: Metadata = {
  title: "Cobertura Médica y Paramédica en Clubes e Instituciones",
  description: "Cobertura activa con equipos médicos o paramédicos para eventos y actividad deportiva.",
}

export default function Page() {
  return (
    <ServiceInfoPage
      title="Cobertura Médica y Paramédica en Clubes e Instituciones"
      summary="Presencia activa de equipos médicos o paramédicos durante actividades deportivas, eventos y temporadas de piletas."
      heroImage="/images/medicina-del-deporte/cobertura-medica-clubes-instituciones-mdd.jpg"
      heroAlt="Cobertura médica y paramédica en clubes e instituciones"
      intro={[
        "Si su institución o empresa requiere de la presencia activa en el predio de equipos médicos o paramédicos mientras se desarrolla la actividad deportiva, podemos ayudarlo.",
        "Disponemos de profesionales capacitados para la cobertura de eventos, actividad deportiva así como también para la temporada de piletas y escuelas de verano.",
        "Nos encargamos de la gestión diaria de los equipos de trabajo, asegurando la prestación efectiva del servicio de salud.",
        "Proveemos también los aparatos e insumos necesarios para brindar las prácticas médicas.",
        "Envíenos su consulta a continuación y exponga su necesidad: con gusto crearemos un servicio personalizado para su satisfacción.",
      ]}
      actions={[
        { text: "Turno online", href: "/turnos-online" },
        { text: "WhatsApp", href: "https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web", external: true, variant: "secondary" },
        { text: "Formulario de contacto", href: "/contacto", variant: "outline" },
      ]}
      sections={[
        {
          title: "Cobertura médica en piletas",
          content: <p>Este servicio también aplica para cobertura médica en piletas, con el mismo esquema operativo y de gestión de equipos en campo.</p>,
        },
      ]}
      bottomTitle="¿Necesitás cobertura médica para tu club o evento?"
      bottomDescription="Enviá tu consulta y coordinamos un esquema de cobertura médica y paramédica a medida."
    />
  )
}
