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
        "Los test de detección de drogas y/o alcohol son una herramienta importante para identificar casos de consumo en situaciones que pueden resultar riesgosas, tanto para la persona que lo consume como para terceros que pueden verse afectados.",
        "En la mayoría de los casos se utiliza este test en ámbitos de seguridad vial, en ámbitos laborales o de ingreso a un puesto laboral, o como evidencia legal.",
      ]}
      sections={[
        {
          title: "¿Por qué realizarlo?",
          content: (
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                El test en el trabajo es fundamental para garantizar un entorno laboral seguro y productivo. El
                consumo de sustancias puede afectar la concentración, los reflejos y la toma de decisiones,
                incrementando el riesgo de accidentes y errores.
              </p>
              <p>
                Implementar estos controles ayuda a prevenir incidentes, proteger la salud de los empleados y
                mantener altos estándares de seguridad. Además, promueve una cultura de responsabilidad y bienestar,
                donde cada trabajador es consciente de la importancia de estar en condiciones óptimas para
                desempeñar sus funciones.
              </p>
            </div>
          ),
        },
        {
          title: "¿Cómo se realiza?",
          content: (
            <ul className="grid gap-2 sm:grid-cols-3">
              {["Test de alcohol en sangre", "Test de alcohol en aliento", "Test de drogas en orina"].map((item) => (
                <li key={item} className="rounded-lg border bg-background px-3 py-2 text-sm text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          ),
        },
      ]}
    />
  )
}
