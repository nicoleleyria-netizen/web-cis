import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Examen Preocupacional",
  description: "Evaluación médica de ingreso para determinar aptitud según perfil del puesto.",
}

const otrosEstudios = [
  "Radiografía de columna lumbosacra (en caso de trabajos con esfuerzo)",
  "Radiografía de columna cervical (en caso de trabajos con esfuerzo)",
  "Audiometría (en caso de exposición a ruidos)",
  "Dosaje de sangre u orina (en caso de contacto con sustancias contaminantes)",
  "Laringoscopía (en caso de tareas que requieren forzar la voz)",
  "Ergometría",
  "Espirometría (en caso de que sean trabajos en altitud)",
  "Equilibriometría (en caso de que sean trabajos en altura)",
  "Radiografía de rodillas (en caso de trabajos que demanden estar mucho tiempo de pie, ej. vigilancia)",
  "Examen psicotécnico",
]

const requisitosCategorizados = [
  {
    categoria: "Ayuno y muestras",
    items: [
      "Ayuno absoluto de 8 a 12 horas",
      "Recolección de la primera orina de la mañana en frasco estéril",
      "Evitar una cena abundante y rica en grasas",
    ],
  },
  {
    categoria: "Restricciones previas (24-48 horas)",
    items: [
      "Evitar ejercicio físico intenso para no alterar los niveles de enzimas musculares en sangre",
      "No consumir alcohol, tabaco, bebidas cola o café, ya que pueden alterar resultados",
    ],
  },
  {
    categoria: "Medicamentos",
    items: [
      "No suspender medicación crónica; informarla al médico",
      "Si hay sospecha de embarazo, comunicarlo",
    ],
  },
  {
    categoria: "Documentación",
    items: [
      "Presentar DNI / Pasaporte",
      "Si usa, llevar lentes de contacto o anteojos recetados",
    ],
  },
]

export default function Page() {
  return (
    <StudyPage
      titulo="Examen Preocupacional"
      resumen="Evaluación médica previa al ingreso laboral para determinar aptitud psicofísica de acuerdo con el puesto."
      image="/images/medicina-laboral/examen-preocupacional-nuevo.jpg"
      imageAlt="Examen preocupacional"
      descripcion={[
        "Toda empresa que necesite contratar una persona para cubrir un determinado puesto, antes debe solicitarle realizar un examen de ingreso o examen preocupacional.",
        "Esta evaluación tiene como objetivo determinar si el postulante es apto, según sus condiciones psicofísicas, para las tareas que se le requerirán en el trabajo.",
        "El examen de ingreso es obligatorio y la responsabilidad de realizarlo la tiene el empleador. Su utilidad está relacionada al cuidado de la salud del trabajador y a la prevención de futuras patologías.",
      ]}
      incluye={[
        "Declaración jurada de salud",
        "Examen clínico completo con agudeza visual y visión cromática",
        "Análisis de sangre y orina",
        "Electrocardiograma",
        "Radiografía de tórax (frente)",
      ]}
      sections={[
        {
          title: "Otros estudios según el puesto",
          content: (
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                Se realizan exámenes neurológicos y psicológicos cuando las tareas a desarrollar por el postulante
                puedan significar riesgos para sí, terceros o instalaciones (por ejemplo conductores de automotores,
                grúas, autoelevadores, trabajos en altura, etcétera).
              </p>
              <p>
                Además, de acuerdo al puesto y riesgo laboral, el empleador puede solicitar exámenes complementarios:
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {otrosEstudios.map((item) => (
                  <li key={item} className="rounded-lg border bg-background px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ),
        },
        {
          title: "Requisitos",
          content: (
            <div className="space-y-4 text-sm">
              {requisitosCategorizados.map(({ categoria, items }) => (
                <div key={categoria}>
                  <p className="font-medium text-foreground mb-1">{categoria}</p>
                  <ul className="space-y-1 text-muted-foreground">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ),
        },
      ]}
    />
  )
}
