import type { Metadata } from "next"
import { ServiceInfoPage } from "@/components/service-info-page"

export const metadata: Metadata = {
  title: "Infusión de Medicamentos",
  description: "Centro ambulatorio para administración de medicación con supervisión profesional.",
}

export default function Page() {
  return (
    <ServiceInfoPage
      title="Infusión de Medicamentos"
      summary="Centro ambulatorio para administración especializada de medicación con supervisión médica y confort asistencial."
      heroImage="/images/servicios-medicos-generales/infusion-medicamentos-nuevo.jpg"
      heroAlt="Infusión de medicamentos"
      intro={[
        "Brindamos el servicio de administración endovenosa o subcutánea de medicamentos biológicos, anticuerpos monoclonales y otras drogas que por su complejidad requieren una administración especializada y supervisión médica.",
        "Ofrecemos un espacio exclusivo para realizar infusiones indicadas por reumatología, ginecología, oncología, dermatología, clínica médica y otras especialidades.",
        "Nuestro centro se localiza fuera del ámbito hospitalario, priorizando el confort, la comodidad y la atención personalizada durante tratamientos prolongados.",
      ]}
      actions={[
        { text: "Solicitar Turno", href: "/turnos-online" },
        { text: "WhatsApp", href: "https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web", external: true, variant: "secondary" },
        { text: "Formulario de contacto", href: "/contacto", variant: "outline" },
      ]}
      sections={[
        {
          title: "Características del servicio",
          content: (
            <ul className="grid gap-2 sm:grid-cols-2">
              {[
                "Ubicación geográfica cómoda y accesible.",
                "Lugar confortable y atención personalizada.",
                "Profesionales de enfermería capacitados en la preparación y administración de este tipo de drogas, con experiencia para realizar canalizaciones complejas.",
                "Monitoreo de profesionales médicos durante el proceso de infusión.",
                "Seguimiento de la agenda del paciente y sus citas médicas.",
                "Contacto fluido con el profesional, informando los resultados de la práctica en caso de ser necesario.",
                "Servicio orientado a instituciones, obras sociales, prepagas, fundaciones y profesionales médicos.",
              ].map((item) => (
                <li key={item} className="rounded-lg border bg-background px-3 py-2 text-sm text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          ),
        },
        {
          title: "Exámenes Complementarios",
          content: (
            <details className="rounded-lg border bg-background p-4">
              <summary className="cursor-pointer font-medium text-foreground">Ver opciones disponibles</summary>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {[
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
                ].map((item) => (
                  <li key={item} className="rounded-lg border bg-card px-3 py-2 text-sm text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </details>
          ),
        },
      ]}
    />
  )
}
