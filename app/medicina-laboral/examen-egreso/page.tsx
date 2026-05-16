import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Examen de Egreso (Post Ocupacional)",
  description: "Evaluación médica al finalizar la relación laboral para constatar el estado de salud del trabajador.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Examen de Egreso (Post Ocupacional)"
      resumen="Evaluación médica al finalizar la relación laboral para constatar el estado de salud del trabajador y detectar posibles daños vinculados a la actividad desarrollada."
      image="/images/medicina-laboral/examen-preocupacional-nuevo.jpg"
      imageAlt="Examen de egreso post ocupacional"
      showBottomImage={false}
      ddjjLink={{ href: "/ddjj-examen-egreso", label: "Completar DDJJ de Egreso" }}
      descripcion={[
        "El examen de egreso, también conocido como examen post ocupacional, es la evaluación médica que se realiza al finalizar la relación laboral entre el empleador y el trabajador.",
        "Su objetivo es constatar el estado de salud del trabajador al momento del cese, detectar eventuales daños o enfermedades profesionales vinculadas a las tareas realizadas y proteger tanto los derechos del trabajador como las responsabilidades del empleador.",
        "La realización de este examen es responsabilidad del empleador y debe efectuarse dentro de los diez días hábiles anteriores a la extinción del vínculo laboral, o dentro de los treinta días hábiles posteriores al mismo.",
      ]}
      incluye={[
        "Declaración jurada de salud",
        "Examen clínico completo",
        "Análisis de sangre y orina",
        "Electrocardiograma",
        "Radiografía de tórax",
        "Estudios complementarios según el puesto y riesgos laborales del trabajador",
      ]}
      sections={[
        {
          title: "¿Por qué es importante?",
          content: (
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                El examen de egreso cumple una función protectora para ambas partes de la relación laboral:
              </p>
              <ul className="space-y-1">
                {[
                  "Permite identificar enfermedades profesionales o daños en la salud vinculados al trabajo",
                  "Protege al trabajador garantizando la detección de problemas de salud relacionados con su actividad",
                  "Protege al empleador dejando constancia del estado de salud al momento del cese",
                  "Sirve como evidencia en caso de disputas posteriores relacionadas con enfermedades profesionales",
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
