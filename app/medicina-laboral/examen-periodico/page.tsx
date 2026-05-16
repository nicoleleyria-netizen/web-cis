import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Examen Periódico de Aptitud",
  description: "Evaluación médica ocupacional periódica para seguimiento de la aptitud laboral del trabajador.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Examen Periódico de Aptitud"
      resumen="Evaluación médica periódica para el seguimiento del estado de salud del trabajador durante la relación laboral."
      image="/images/medicina-laboral/examen-preocupacional-nuevo.jpg"
      imageAlt="Examen periódico de aptitud laboral"
      showBottomImage={false}
      ddjjLink={{ href: "/ddjj-examen-periodico", label: "Completar DDJJ Periódico" }}
      descripcion={[
        "El examen periódico de aptitud es una evaluación médica que se realiza de manera regular durante la relación laboral, con el objetivo de monitorear el estado de salud del trabajador y detectar precozmente cualquier alteración relacionada con el trabajo.",
        "Su realización es obligatoria para los empleadores y su periodicidad varía según el tipo de actividad, los riesgos del puesto y la normativa vigente (Resolución SRT N° 37/10).",
        "Esta evaluación permite identificar enfermedades profesionales en etapas tempranas, controlar el impacto de los agentes de riesgo del ambiente laboral y garantizar que el trabajador mantiene su aptitud psicofísica para las tareas asignadas.",
      ]}
      incluye={[
        "Declaración jurada de salud",
        "Examen clínico completo",
        "Análisis de sangre y orina",
        "Electrocardiograma",
        "Radiografía de tórax",
        "Estudios complementarios según puesto y riesgo laboral",
      ]}
      sections={[
        {
          title: "¿Cuándo debe realizarse?",
          content: (
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                La periodicidad del examen depende del tipo de exposición al riesgo laboral:
              </p>
              <ul className="space-y-1">
                {[
                  "Anual para trabajadores con exposición a agentes de riesgo (ruido, productos químicos, radiaciones, etc.)",
                  "Cada dos años para trabajadores sin exposición a riesgos específicos",
                  "Con mayor frecuencia si la normativa del sector o la ART así lo establece",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {item}
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
