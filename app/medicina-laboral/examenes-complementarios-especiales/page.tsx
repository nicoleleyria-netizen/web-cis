import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Exámenes Complementarios Especiales",
  description: "Estudios complementarios para ampliar la evaluación de aptitud laboral según riesgo y puesto.",
}

const puestos = [
  {
    nombre: "Puestos Administrativos – Comerciales",
    nota: "",
    estudios: ["Examen básico"],
  },
  {
    nombre: "Operarios de planta A",
    nota: "Empleados que realizan esfuerzos físicos y/o levantan cargas de más de 5 Kg regularmente.",
    estudios: [
      "Examen básico",
      "Rx de columna lumbosacra frente y perfil",
      "Rx de columna cervical frente y perfil",
    ],
  },
  {
    nombre: "Operarios de planta B",
    nota: "Esfuerzos físicos / cargas > 5 Kg regularmente. Exposición al ruido.",
    estudios: [
      "Examen básico",
      "Rx de columna lumbosacra frente y perfil",
      "Rx de columna cervical frente y perfil",
      "Audiometría",
    ],
  },
  {
    nombre: "Conductores de transportes – Maquinaria vial – Autoelevadores",
    nota: "",
    estudios: [
      "Examen básico",
      "Audiometría",
      "Rx de columna lumbosacra frente y perfil",
      "Rx de columna cervical frente y perfil",
      "Electroencefalograma",
      "Examen neurológico",
      "Examen psicotécnico",
    ],
  },
  {
    nombre: "Trabajo en altura",
    nota: "",
    estudios: [
      "Examen básico",
      "Audiometría",
      "Rx de columna lumbosacra frente y perfil",
      "Rx de columna cervical frente y perfil",
      "Electroencefalograma",
      "Examen neurológico",
      "Examen psicotécnico",
      "Equilibriometría",
    ],
  },
  {
    nombre: "Operador telefónico A",
    nota: "",
    estudios: [
      "Examen básico",
      "Audiometría",
      "Laringoscopia indirecta",
      "Examen de función de las cuerdas vocales",
      "Rx de columna cervical",
    ],
  },
  {
    nombre: "Operador telefónico B",
    nota: "",
    estudios: [
      "Examen básico",
      "Audiometría",
      "Laringoscopia indirecta",
    ],
  },
]

export default function Page() {
  return (
    <StudyPage
      titulo="Exámenes Complementarios Especiales"
      resumen="Estudios adicionales que se suman al examen básico según el perfil de puesto y riesgo laboral."
      image="/images/medicina-laboral/examenes-complementarios-especiales-nuevo.jpg"
      imageAlt="Exámenes complementarios especiales"
      descripcion={[
        "Al comenzar una relación laboral, el empleador debe realizar ciertos exámenes médicos de control con el objetivo de determinar las condiciones psicofísicas de sus trabajadores.",
        "Este examen define si la persona es apta para las actividades que se le demanda en el puesto al que se postula. Este proceso está determinado por la Ley Nº 19587, de Higiene y Seguridad en el trabajo.",
        "Más allá de los beneficios de realizar este examen para contar con un diagnóstico acertado a la hora del ingreso, se pueden sumar estudios complementarios para un análisis ampliado del estado de salud de la persona.",
      ]}
      incluye={[
        "Rx de columna lumbosacra frente y perfil",
        "Rx de columna cervical frente y perfil",
        "Audiometría",
        "Laboratorio: Colesterol total, HDL, LDL, triglicéridos",
      ]}
      sections={[
        {
          title: "Estudios recomendados según el puesto laboral",
          content: (
            <div className="space-y-4">
              {puestos.map(({ nombre, nota, estudios }) => (
                <div key={nombre} className="rounded-lg border bg-background p-4">
                  <p className="font-semibold text-foreground text-sm">{nombre}</p>
                  {nota && <p className="text-xs text-muted-foreground mt-0.5">{nota}</p>}
                  <ul className="mt-2 space-y-1">
                    {estudios.map((e) => (
                      <li key={e} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {e}
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
