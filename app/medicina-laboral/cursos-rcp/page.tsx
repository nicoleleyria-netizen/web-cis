import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Cursos de RCP",
  description: "Capacitación en Reanimación Cardiopulmonar con teoría y práctica para empresas y particulares.",
}

const beneficios = [
  "Disminuir el índice de accidentalidad mediante conocimientos para prevenir accidentes.",
  "Conocer técnicas y prácticas de primeros auxilios y atención inicial en campo, las cuales permiten aumentar significativamente los resultados de los tratamientos médicos.",
  "Conocer las técnicas más actuales de RCP.",
  "Generar interés para la formación de grupos de trabajo entrenados para actuar como referentes en estas situaciones.",
]

export default function Page() {
  return (
    <StudyPage
      titulo="Cursos de RCP. Teoría y práctica"
      resumen="Capacitación en Reanimación Cardiopulmonar con modalidad teórica y práctica, dirigida a empresas e instituciones."
      image="/images/medicina-laboral/cursos-rcp-nuevo.jpg"
      imageAlt="Cursos de RCP"
      descripcion={[
        "Nuestros cursos de RCP brindan las herramientas necesarias para actuar correctamente ante una emergencia cardiorrespiratoria, tanto en el ámbito laboral como en la vida cotidiana.",
        "La capacitación es brindada por un equipo profesional capacitado del staff de CIS, en modalidad online o presencial según las necesidades de cada empresa.",
      ]}
      sections={[
        {
          title: "Beneficios",
          content: (
            <ul className="space-y-2 text-sm text-muted-foreground">
              {beneficios.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          ),
        },
        {
          title: "Modalidades",
          content: (
            <div className="grid gap-4 sm:grid-cols-2 text-sm">
              <div className="rounded-lg border bg-background p-4">
                <p className="font-semibold text-foreground mb-1">Online</p>
                <p className="text-muted-foreground">
                  El curso se dicta a través de Google Meet y es brindado por un equipo profesional capacitado del
                  staff de CIS.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-4">
                <p className="font-semibold text-foreground mb-1">Presencial</p>
                <p className="text-muted-foreground">
                  El curso se dicta de manera presencial en el espacio dispuesto por la empresa dentro de sus
                  instalaciones o en un ámbito externo, y es brindado por un equipo profesional capacitado del
                  staff de CIS.
                </p>
              </div>
            </div>
          ),
        },
        {
          title: "Cursos adaptables",
          content: (
            <p className="text-sm text-muted-foreground">
              Brindamos la posibilidad de adecuar el material de formación a las necesidades de cada empresa o
              institución. El contenido podrá adaptarse de acuerdo a las normas de calidad (OHSAS, ISO 45001),
              decretos provinciales y nacionales (Decreto 905/15) y demás regulaciones de salud ocupacional a las
              que adhiera cada empresa.
            </p>
          ),
        },
      ]}
    />
  )
}
