import type { Metadata } from "next"
import { ServiceInfoPage } from "@/components/service-info-page"

export const metadata: Metadata = {
  title: "Laboratorio de Análisis Clínicos",
  description: "Laboratorio con experiencia, calidad y trazabilidad para estudios clínicos de distinta complejidad.",
}

export default function Page() {
  return (
    <ServiceInfoPage
      title="Laboratorio de Análisis Clínicos"
      summary="Laboratorio con amplia experiencia, calidad controlada y resultados en tiempos adecuados para cada estudio."
      heroImage="/images/servicios-medicos-generales/laboratorio-analisis-clinicos-nuevo.jpg"
      heroAlt="Laboratorio de análisis clínicos"
      intro={[
        "Nuestro laboratorio de análisis clínicos está gestionado por profesionales con amplia experiencia y capacitación, quienes brindan servicios desde hace 20 años.",
        "Mantenemos las más altas normas de calidad, incorporando nuevas metodologías y acompañando los avances científicos y tecnológicos.",
        "Realizamos todos los análisis y determinaciones de baja y alta complejidad con extracciones realizadas por personal calificado y entrenado en bioseguridad.",
      ]}
      actions={[
        { text: "Solicitar Turno", href: "/turnos-online" },
        { text: "WhatsApp", href: "https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web", external: true, variant: "secondary" },
        { text: "Formulario de contacto", href: "/contacto", variant: "outline" },
      ]}
      sections={[
        {
          title: "Lo que brindamos",
          content: (
            <ul className="grid gap-2 sm:grid-cols-2">
              {[
                "Resultados diarios dentro de los tiempos que cada procedimiento requiere.",
                "Extracciones con personal calificado y con experiencia.",
                "Medidas de bioseguridad para minimizar molestias.",
                "Capacidad de derivación a centros nacionales y del exterior mediante transporte especializado.",
                "Normas GSP y IATA certificadas.",
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
