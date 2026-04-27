import type { Metadata } from "next"
import { StudyPage } from "@/components/studies/study-page"

export const metadata: Metadata = {
  title: "Test de Detección de Drogas y Abuso de Alcohol",
  description: "Detección de consumo de sustancias en contexto laboral con protocolos de bioseguridad y trazabilidad.",
}

export default function Page() {
  return (
    <StudyPage
      titulo="Test de Detección de Drogas y Abuso de Alcohol"
      resumen="Evaluación toxicológica para contextos laborales que requieren controles específicos de seguridad."
      image="/images/medicina-laboral/test-deteccion-drogas-nuevo.jpg"
      imageAlt="Test de detección de drogas y alcohol"
      descripcion={[
        "Se aplica en procesos preocupacionales, controles periódicos o situaciones definidas por protocolo.",
        "El procedimiento se realiza con cadena de custodia y criterios de confidencialidad.",
        "Brinda información objetiva para decisiones de salud ocupacional y prevención de riesgos.",
      ]}
      incluye={["Toma de muestra", "Procesamiento y validación", "Informe de resultados"]}
      requisitos={["DNI", "Ayuno si se solicita", "Condiciones de muestra según protocolo"]}
    />
  )
}
