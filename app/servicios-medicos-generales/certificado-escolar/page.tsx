import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Certificado Escolar",
  description: "Apto médico para edad escolar y distintos niveles educativos.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Certificado Escolar"
      resumen="Apto médico para edad escolar y distintos niveles educativos."
      image="/images/servicios-medicos-generales/certificado-medico-smg.jpg"
      imageAlt="Certificado escolar"
      descripcion={[
        "En Consultora CIS brindamos este servicio con un enfoque práctico, profesional y orientado a resultados.",
        "La atención se adapta a cada persona/empresa y busca optimizar tiempos sin perder calidad asistencial.",
        "Nuestro equipo acompaña todo el proceso para facilitar la gestión del turno y la continuidad de atención.",
      ]}
      incluye={[
        'Evaluación clínica','Estudios complementarios según criterio médico','Operativos para instituciones'
      ]}
      requisitos={[
        'DNI','Acompañante adulto en menores'
      ]}
    />
  )
}
