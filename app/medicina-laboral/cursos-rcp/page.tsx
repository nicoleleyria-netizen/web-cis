import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Cursos de RCP",
  description: "Capacitación en Reanimación Cardiopulmonar con teoría y práctica para empresas y particulares.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Cursos de RCP"
      resumen="Capacitación en Reanimación Cardiopulmonar (RCP) con modalidad teórica y práctica, dirigida a empresas y particulares."
      image="/images/medicina-laboral/cursos-rcp-nuevo.jpg"
      imageAlt="Cursos de RCP"
      descripcion={[
        "Nuestros cursos de RCP brindan las herramientas necesarias para actuar correctamente ante una emergencia cardiorrespiratoria, tanto en el ámbito laboral como en la vida cotidiana.",
        "La capacitación combina una parte teórica con práctica supervisada por profesionales médicos, utilizando maniquíes y equipamiento adecuado.",
        "Los cursos están orientados a empresas que requieren cumplir normativas de seguridad e higiene, así como a particulares que deseen adquirir conocimientos de primeros auxilios.",
      ]}
      incluye={[
        "Módulo teórico de fundamentos de RCP",
        "Práctica con maniquíes",
        "Uso del desfibrilador externo automático (DEA)",
        "Certificado de participación",
      ]}
    />
  )
}
