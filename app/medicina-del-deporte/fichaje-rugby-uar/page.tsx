import type { Metadata } from "next"
import { ServiceInfoPage } from "@/components/service-info-page"

export const metadata: Metadata = {
  title: "Fichaje de Rugby (UAR)",
  description: "Servicio unificado para cumplir requisitos EMMAC y Ficha UAR con enfoque específico en rugby.",
}

export default function Page() {
  return (
    <ServiceInfoPage
      title="Fichaje de Rugby (UAR)"
      summary="Servicio orientado a los requerimientos del Rugby Nacional para habilitación anual del jugador."
      heroImage="/images/medicina-del-deporte/fichaje-rugby-uar-nuevo.jpg"
      heroAlt="Fichaje de Rugby UAR"
      intro={[
        "En Consultora CIS brindamos este servicio destinado específicamente a los requerimientos especiales del Rugby Nacional, que están centralizados en la Unión Argentina de Rugby, bajo altos estándares de control que permiten desempeñarse en este deporte de contacto minimizando riesgos.",
        "Se ofrece como servicio unificado la realización del EMMAC (según requisitos de la Provincia de Córdoba - Agencia Córdoba Deportes) y se completa en la misma consulta la ficha de UAR.",
        "Es así que se realizan los laboratorios correspondientes, radiografías para determinar índice de Torg-Pavlov, electrocardiograma y ergometría.",
        "De corresponder se agregan los exámenes complementarios necesarios.",
        "Este servicio está pensado para simplificar la habilitación anual del jugador, cumpliendo con los requisitos necesarios, gestionados por profesionales que conocen de rugby.",
      ]}
      actions={[
        { text: "Solicitar Turno", href: "/turnos-online" },
        { text: "WhatsApp", href: "https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web", external: true, variant: "secondary" },
        { text: "Formulario de contacto", href: "/contacto", variant: "outline" },
      ]}
    />
  )
}
