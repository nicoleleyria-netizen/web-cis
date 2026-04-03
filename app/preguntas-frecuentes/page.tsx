import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description: "Respuestas rápidas sobre turnos, estudios, cobertura y atención en Consultora CIS.",
}

const placeholders = [
  "¿Cómo saco un turno?",
  "¿Qué documentación tengo que llevar?",
  "¿Trabajan con obra social o particular?",
  "¿Cuánto tarda la entrega de resultados?",
  "¿Puedo hacer estudios en un solo turno?",
]

export default function FAQPage() {
  return (
    <main>
      <section className="bg-primary py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">Preguntas Frecuentes</h1>
          <p className="mt-3 max-w-3xl text-primary-foreground/85">
            Esta sección ya está preparada. Apenas definan el listado final, cargamos las respuestas oficiales.
          </p>
        </div>
      </section>

      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-3 max-w-4xl">
            {placeholders.map((q) => (
              <details key={q} className="rounded-xl border bg-card p-4">
                <summary className="cursor-pointer font-medium">{q}</summary>
                <p className="mt-3 text-sm text-muted-foreground">Respuesta en preparación.</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
