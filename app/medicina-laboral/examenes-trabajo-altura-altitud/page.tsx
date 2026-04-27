import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Exámenes para Trabajo en Altura / Altitud",
  description: "Evaluaciones médicas para tareas en altura física o geográfica según normativa vigente.",
}

const sectores = [
  "Construcción",
  "Telecomunicaciones",
  "Energía y electricidad",
  "Mantenimiento industrial",
  "Limpieza de fachadas y vidrios",
  "Pintura y estructuras metálicas",
]

export default function Page() {
  return (
    <StudyPage
      titulo="Exámenes para Trabajo en Altura / Altitud"
      resumen="Aptitud médica para tareas en altura física o geográfica según exigencias y normativa de seguridad vigente."
      image="/images/medicina-laboral/examenes-altura-altitud-nuevo.jpg"
      imageAlt="Exámenes para trabajo en altura o altitud"
      descripcion={[
        "El trabajo en altura es una de las actividades laborales con mayor riesgo de accidentes, por lo que en Argentina su realización está regulada por normativas de seguridad e higiene.",
        "Uno de los requisitos fundamentales para desempeñar estas tareas es la realización de un examen médico laboral, el cual garantiza que el trabajador se encuentra en condiciones físicas y psicológicas adecuadas para desempeñar su labor de manera segura.",
        "El trabajo en alturas puede incluir actividades como escalada, construcción en estructuras elevadas, mantenimiento de torres de comunicación, entre otras. Estas actividades requieren que la persona posea una buena condición física y mental para prevenir accidentes y lesiones graves.",
      ]}
      incluye={[
        "Declaración jurada de salud",
        "Examen clínico completo con agudeza visual y visión cromática",
        "Análisis de sangre y orina",
        "Electrocardiograma",
        "Radiografía de tórax (frente)",
        "Audiometría",
        "Rx de columna lumbosacra frente y perfil",
        "Rx de columna cervical frente y perfil",
        "Electroencefalograma",
        "Examen neurológico",
        "Examen psicotécnico",
        "Equilibriometría",
      ]}
      sections={[
        {
          title: "¿Quiénes deben realizarlo?",
          content: (
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                Este examen es obligatorio para todos los trabajadores que desempeñan tareas en alturas superiores
                a 2 metros, como los empleados de los sectores de:
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {sectores.map((s) => (
                  <li key={s} className="rounded-lg border bg-background px-3 py-2">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ),
        },
      ]}
    />
  )
}
