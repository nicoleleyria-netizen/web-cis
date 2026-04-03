import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "EMMAC",
  description: "Examen Médico para Mediana y Alta Competencia para práctica deportiva.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="EMMAC"
      resumen="Examen Médico para Mediana y Alta Competencia para práctica deportiva."
      image="/images/sis-real/evaluacion-deportiva-clinica.jpg"
      imageAlt="EMMAC en servicios médicos"
      descripcion={[
        "En Consultora CIS brindamos este servicio con un enfoque práctico, profesional y orientado a resultados.",
        "La atención se adapta a cada persona/empresa y busca optimizar tiempos sin perder calidad asistencial.",
        "Nuestro equipo acompaña todo el proceso para facilitar la gestión del turno y la continuidad de atención.",
      ]}
      incluye={[
        'Electrocardiograma','Ergometría según criterio','Laboratorio según criterio'
      ]}
      requisitos={[
        'DNI','Ayuno si se indica laboratorio'
      ]}
    />
  )
}
