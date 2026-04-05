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
      heroImage="/images/medicina-del-deporte/emmac-mdd.jpg"
      heroAlt="EMMAC en Consultora CIS"
      intro={[
        "Todos los estudios médicos que comprende el examen se realizan en nuestra Consultora y en un mismo turno.",
        "Contamos con un plantel de profesionales médicos habilitados para la realización del EMMAC.",
      ]}
      actions={[
        { text: "Turno online", href: "/turnos-online" },
        { text: "WhatsApp", href: "https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web", external: true, variant: "secondary" },
        { text: "Formulario de contacto", href: "/contacto", variant: "outline" },
      ]}
      sections={[
        {
          title: "Tabla de exámenes complementarios obligatorios",
          content: (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border bg-secondary px-3 py-2 text-left">Edad</th>
                    <th className="border bg-secondary px-3 py-2 text-center">Ex. Clínico</th>
                    <th className="border bg-secondary px-3 py-2 text-center">ECG</th>
                    <th className="border bg-secondary px-3 py-2 text-center">Laboratorio</th>
                    <th className="border bg-secondary px-3 py-2 text-center">Ergometría</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Hasta 14 años", "x", "x", "", ""],
                    ["Año que cumple 15", "x", "x", "x", ""],
                    ["Año que cumple 16", "x", "x", "", "x"],
                    ["Año que cumple 17", "x", "x", "x", ""],
                    ["Año que cumple 18", "x", "x", "", ""],
                    ["Año que cumple 19", "x", "x", "x", ""],
                    ["Año que cumple 20", "x", "x", "", ""],
                    ["Año que cumple 21", "x", "x", "x", ""],
                    ["22 a 29 años", "x", "x", "x", ""],
                    ["A partir del año que cumple 30 (todos los años)", "x", "x", "x", "x"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="border px-3 py-2">{row[0]}</td>
                      <td className="border px-3 py-2 text-center">{row[1]}</td>
                      <td className="border px-3 py-2 text-center">{row[2]}</td>
                      <td className="border px-3 py-2 text-center">{row[3]}</td>
                      <td className="border px-3 py-2 text-center">{row[4]}</td>
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
      ]}
    />
  )
}
