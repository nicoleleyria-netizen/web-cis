import type { Metadata } from "next"
import { ServiceInfoPage } from "@/components/service-info-page"

export const metadata: Metadata = {
  title: "EMMAC - Examen Médico para Mediana y Alta Competencia",
  description: "Examen Médico para Mediana y Alta Competencia con estudios en un mismo turno y profesionales habilitados.",
}

export default function Page() {
  return (
    <ServiceInfoPage
      title="EMMAC"
      summary="Examen Médico para Mediana y Alta Competencia, obligatorio para práctica deportiva según normativa provincial."
      heroImage="/images/medicina-del-deporte/emmac-nuevo.jpg"
      heroAlt="EMMAC en Consultora CIS"
      intro={[
        "Todos los estudios médicos que comprende el examen se realizan en nuestra Consultora y en un mismo turno.",
        "Contamos con un plantel de profesionales médicos habilitados para la realización del EMMAC.",
      ]}
      actions={[
        { text: "Solicitar Turno", href: "/turnos-online" },
        { text: "WhatsApp", href: "https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web", external: true, variant: "secondary" },
        { text: "Formulario de contacto", href: "/contacto", variant: "outline" },
      ]}
      sections={[
        {
          title: "Tabla de exámenes complementarios obligatorios",
          content: (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-xs sm:text-sm">
                <thead>
                  <tr>
                    <th className="border bg-secondary px-2 sm:px-3 py-2 text-left">Edad</th>
                    <th className="border bg-secondary px-1 sm:px-3 py-2 text-center whitespace-nowrap">Ex. Clínico</th>
                    <th className="border bg-secondary px-1 sm:px-3 py-2 text-center">ECG</th>
                    <th className="border bg-secondary px-1 sm:px-3 py-2 text-center whitespace-nowrap">Laboratorio</th>
                    <th className="border bg-secondary px-1 sm:px-3 py-2 text-center whitespace-nowrap">Ergometría</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Hasta 14 años", "✓", "✓", "—", "—"],
                    ["Año que cumple 15", "✓", "✓", "✓", "—"],
                    ["Año que cumple 16", "✓", "✓", "—", "✓"],
                    ["Año que cumple 17", "✓", "✓", "✓", "—"],
                    ["Año que cumple 18", "✓", "✓", "—", "—"],
                    ["Año que cumple 19", "✓", "✓", "✓", "—"],
                    ["Año que cumple 20", "✓", "✓", "—", "—"],
                    ["Año que cumple 21", "✓", "✓", "✓", "—"],
                    ["22 a 29 años", "✓", "✓", "✓", "—"],
                    ["Desde los 30 años (anual)", "✓", "✓", "✓", "✓"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="border px-2 sm:px-3 py-1.5 sm:py-2">{row[0]}</td>
                      <td className="border px-1 sm:px-3 py-1.5 sm:py-2 text-center">{row[1]}</td>
                      <td className="border px-1 sm:px-3 py-1.5 sm:py-2 text-center">{row[2]}</td>
                      <td className="border px-1 sm:px-3 py-1.5 sm:py-2 text-center">{row[3]}</td>
                      <td className="border px-1 sm:px-3 py-1.5 sm:py-2 text-center">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ),
        },
        {
          title: "Listado de profesionales habilitados",
          content: (
            <p>
              Vea listado de profesionales habilitados{' '}
              <a
                className="font-medium text-primary underline-offset-4 hover:underline"
                href="https://deportes.cba.gov.ar/wp-content/uploads/2026/03/listado-efectores-marzo-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                aquí
              </a>
              .
            </p>
          ),
        },
        {
          title: "Preguntas Frecuentes",
          content: (
            <div className="space-y-4">
              {[
                {
                  q: "¿En qué consiste el trámite?",
                  a: "Certificación de aptitud física por un profesional médico que habilita al jugador para la práctica de deportes sociales/comunitarios, federados y competencias escolares.",
                },
                {
                  q: "¿A quién está dirigido?",
                  a: "Jugadores, técnicos, árbitros, jueces, entrenadores, monitores y demás miembros de la comunidad deportiva según la disciplina, a partir de la instancia de iniciación deportiva.",
                },
                {
                  q: "¿Cuándo es necesario realizarlo?",
                  a: "Al comenzar la práctica de la disciplina deportiva y renovarse al año aniversario, es decir, vence en la misma fecha del año siguiente.",
                },
                {
                  q: "¿Debo presentar algún formulario?",
                  a: "No debe presentar ningún formulario.",
                },
                {
                  q: "¿Cuáles son los requisitos?",
                  a: "Concurrir munido del DNI. Los menores de edad deberán concurrir acompañados de padre, madre o tutor, ambos munidos de DNI. En caso de que se requiera laboratorio, debe concurrir en ayuno de 12 hs.",
                },
                {
                  q: "¿Quiénes están habilitados para realizar el EMMAC?",
                  a: "Únicamente los médicos efectores que figuran en el listado exhibido en la página web de la Agencia Córdoba Deportes. Ningún médico no habilitado por la agencia puede certificar la aptitud.",
                },
                {
                  q: "¿Qué comprobante recibo?",
                  a: "Certificado de aptitud física para la práctica deportiva válido en ámbitos sociales, federados y educativos de la provincia de Córdoba.",
                },
                {
                  q: "¿Puede el médico efector requerir más estudios antes de dar el apto definitivo?",
                  a: "De existir algún impedimento, el médico efector solicitará estudios complementarios. Una vez cumplimentados y de corresponder, se otorgará el apto definitivo.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="rounded-lg border bg-background p-4">
                  <p className="font-semibold text-foreground">{q}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{a}</p>
                </div>
              ))}
            </div>
          ),
        },
      ]}
    />
  )
}
