import type { Metadata } from "next"
import { ServiceInfoPage } from "@/components/service-info-page"

export const metadata: Metadata = {
  title: "Exámenes Complementarios",
  description: "Estudios complementarios integrados con atención coordinada y rápida.",
}

const examenes = [
  "Radiología digitalizada",
  "Ergometría",
  "MAPA",
  "HOLTER",
  "Electrocardiografía",
  "Espirometría",
  "Electroencefalografía",
  "Audiometría, logoaudiometría, sisigrama, valoración del lenguaje",
  "Ecografías",
  "Ecocardiografía",
  "Laringoscopia, fibrolaringoscopia, rinoscopia",
  "Agudeza visual, fondo de ojos",
  "PAP, colposcopia",
]

export default function Page() {
  return (
    <ServiceInfoPage
      title="Exámenes Complementarios"
      summary="Estudios diagnósticos integrados para completar una evaluación médica en un solo circuito de atención."
      heroImage="/images/sis-real/consultorio-detalle.jpg"
      heroAlt="Exámenes complementarios"
      intro={[
        "Coordinamos estudios complementarios con una propuesta ordenada, eficiente y orientada a la resolución del caso clínico.",
        "Buscamos optimizar tiempos y mantener un seguimiento claro, con el objetivo de facilitar la continuidad médica.",
      ]}
      actions={[
        { text: "Solicitar Turno", href: "/turnos-online" },
        { text: "WhatsApp", href: "https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web", external: true, variant: "secondary" },
        { text: "Formulario de contacto", href: "/contacto", variant: "outline" },
      ]}
      sections={[
        {
          title: "Opciones disponibles",
          content: (
            <ul className="grid gap-2 sm:grid-cols-2">
              {examenes.map((item) => (
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
