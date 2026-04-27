import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Visado de Examen Preocupacional",
  description: "Validación y registro de preexistencias de salud ante la Superintendencia de Riesgos del Trabajo.",
}

const paraSirve = [
  {
    label: "Validación",
    desc: "Certifica que los exámenes médicos se realizaron siguiendo los procedimientos adecuados.",
  },
  {
    label: "Registro",
    desc: "Permite a la Superintendencia de Riesgos del Trabajo dejar constancia de las enfermedades preexistentes o hallazgos en los estudios complementarios del candidato.",
  },
  {
    label: "Control y prevención",
    desc: "Ayuda a prevenir enfermedades profesionales, ya que permite al empleador conocer las posibles vulnerabilidades del trabajador y adaptar las condiciones laborales si es necesario.",
  },
  {
    label: "Evaluación de aptitudes",
    desc: "Sirve para evaluar la adecuación del postulante para ciertos trabajos, especialmente aquellos con agentes de riesgo específicos.",
  },
  {
    label: "Protección de derechos",
    desc: "Protege tanto los derechos del trabajador como las obligaciones del empleador, garantizando un proceso de evaluación de salud justo y legal.",
  },
]

export default function Page() {
  return (
    <StudyPage
      titulo="Visado de Examen Preocupacional"
      resumen="Trámite mediante el cual quedan validadas y registradas las preexistencias de salud detectadas en el examen preocupacional."
      image="/images/medicina-laboral/visado-examen-preocupacional-nuevo.jpg"
      imageAlt="Visado de examen preocupacional"
      descripcion={[
        "El visado preocupacional es un trámite en el que queda validado y registrado las anomalías de salud que presenta una persona postulante a un determinado puesto luego de haber realizado el examen preocupacional.",
        "El visado debe ser solicitado por el empleador y dichas anomalías denominadas \"preexistencias\", por anteceder al comienzo del vínculo laboral, deben registrarse en la Superintendencia de Riesgos de Trabajo (SRT). Con este procedimiento queda determinado que el origen de la patología es previo a la incorporación del trabajador y no se la podrá atribuir a su actividad laboral.",
        "Este procedimiento está regulado bajo la Resolución Nº 432/99 de la Superintendencia de Riesgos del Trabajo. En Consultora Integral de Salud, si el empleador lo solicita, realizamos el trámite de presentación de visado preocupacional.",
      ]}
      sections={[
        {
          title: "¿Cuándo se necesita?",
          content: (
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                Es fundamental cuando los exámenes preocupacionales detectan anomalías que podrían agravarse con
                las tareas a desarrollar.
              </p>
              <p>
                Es aplicable en situaciones donde las secuelas o hallazgos pueden ser corroborados mediante
                estudios complementarios (como análisis de sangre o reacciones específicas) sin necesidad de un
                examen físico adicional.
              </p>
            </div>
          ),
        },
        {
          title: "¿Para qué sirve?",
          content: (
            <div className="space-y-3 text-sm">
              {paraSirve.map(({ label, desc }) => (
                <div key={label} className="rounded-lg border bg-background p-3">
                  <p className="font-semibold text-foreground">{label}</p>
                  <p className="mt-0.5 text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          ),
        },
      ]}
    />
  )
}
