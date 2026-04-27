import type { Metadata } from "next"
import { ServiceInfoPage } from "@/components/service-info-page"

export const metadata: Metadata = {
  title: "Chequeo Médico Preventivo",
  description: "Chequeos preventivos para detectar riesgos y enfermedades en forma temprana.",
}

export default function Page() {
  return (
    <ServiceInfoPage
      title="Chequeo Médico Preventivo"
      summary="Evaluación integral para detectar a tiempo enfermedades o riesgos potenciales de desarrollarlas."
      heroImage="/images/servicios-medicos-generales/chequeo-medico-preventivo-nuevo.jpg"
      heroAlt="Chequeo médico preventivo"
      intro={[
        "Descubrir a tiempo cualquier enfermedad, o conocer si existen riesgos potenciales de desarrollarla, nos da mejores expectativas para su tratamiento.",
        "La prevención es la mejor y más económica forma de mantener la salud.",
        "Se realizan chequeos anuales con el fin de lograr diagnóstico precoz de enfermedades crónicas como hipertensión arterial, cardiopatía, diabetes, enfermedades pulmonares y distintos tipos de cáncer.",
      ]}
      actions={[
        { text: "Solicitar Turno", href: "/turnos-online" },
        { text: "WhatsApp", href: "https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web", external: true, variant: "secondary" },
        { text: "Formulario de contacto", href: "/contacto", variant: "outline" },
      ]}
      sections={[
        {
          title: "El chequeo cuenta con",
          content: (
            <ul className="grid gap-2 sm:grid-cols-2">
              {[
                "Consulta clínica",
                "RX de tórax",
                "Ecocardiograma",
                "Cicloergometría - Electrocardiograma",
                "Examen oftalmológico",
                "Examen fonoaudiológico",
                "Laboratorio de rutina (citológico, eritrosedimentación, glucemia, uremia, orina completa)",
                "Machado Guerreiro, VDRL más PSA en hombres, incluyendo lípidograma (colesterol)",
                "Espirometría",
                "Examen ginecológico: PAP, colposcopía",
                "Examen urológico",
                "Ecografía abdominal completa",
                "Resumen final: entrevista con clínico con informe de resultados, interpretaciones y recomendaciones.",
              ].map((item) => (
                <li key={item} className="rounded-lg border bg-background px-3 py-2 text-sm text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          ),
        },
        {
          title: "¿A quién se le recomienda?",
          content: (
            <ul className="space-y-2 text-sm">
              {[
                "A toda persona mayor de 30 años, aunque posea un buen estado de salud.",
                "Personas con hipertensión arterial, sobrepeso, diabetes, colesterol o triglicéridos altos, o lesiones tumorales.",
                "Fumadores.",
                "Personas con antecedentes familiares de alguna patología.",
                "Si los resultados son normales y no hay factores de riesgo identificables, se recomienda repetir la evaluación cada 5 años.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
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
