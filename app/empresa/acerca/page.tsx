import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Acerca de Nosotros",
  description: "Misión, visión, valores y propuesta de Consultora CIS.",
}

const valores = [
  "Honestidad",
  "Innovación",
  "Responsabilidad",
  "Proactividad",
  "Flexibilidad",
  "Profesionalización",
  "Mejora continua",
  "Creatividad",
  "Resiliencia",
]

const atributos = ["Integral", "Eficiente", "Confiable", "Flexible", "Dinámica", "De calidad", "Seria", "Segura", "Honesta"]

export default function AcercaPage() {
  return (
    <main>
      <section className="bg-primary py-14">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Acerca de Nosotros</h1>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8 grid gap-8 lg:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border">
            <Image src="/images/sis-real/nuestra-historia-timeline.jpg" alt="Nuestra Historia - línea de tiempo Consultora CIS" fill className="object-cover" />
          </div>
          <div className="space-y-5">
            <div className="rounded-xl border bg-card p-5">
              <h2 className="text-2xl font-bold mb-2">Nuestra Misión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Brindar soluciones integrales de salud a empresas, instituciones y personas en el ámbito provincial,
                nacional e internacional, de manera personalizada y flexible, priorizando la calidad del servicio.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-5">
              <h2 className="text-2xl font-bold mb-2">Nuestra Visión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ser una empresa referente a nivel nacional e internacional en servicios de salud de calidad,
                generadora de relaciones positivas y duraderas con nuestros clientes, buscando siempre la innovación en
                nuestro trabajo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Valores</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v) => (
              <div key={v} className="rounded-xl border bg-card px-4 py-3 flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="font-medium">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8 grid gap-8">
          <div className="rounded-xl border bg-card p-6">
            <h3 className="text-2xl font-bold mb-3">Ubicación y Cobertura</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Estamos situados en Córdoba Capital y contamos con cobertura a nivel nacional e internacional.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Somos integrantes de una red de prestadores de salud especializada en nuestros servicios, que brinda una
              amplia cobertura en todo el país. Elegimos la mejor opción posible, basándonos en nuestra experiencia y
              conocimientos, buscando un adecuado equilibrio entre calidad del servicio y costo.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-6">
            <h3 className="text-2xl font-bold mb-3">Servicio de Extremo a Extremo</h3>
            <p className="mb-3 text-muted-foreground">Brindamos un servicio integral basado en:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Diagnóstico claro y preciso de la necesidad del cliente</li>
              <li>Diseño creativo y flexible de un proceso adecuado</li>
              <li>Cumplimiento de los tiempos pautados</li>
              <li>Inclusión de aspectos administrativos y logísticos</li>
            </ul>
          </div>

          <div className="rounded-xl border bg-card p-6">
            <h3 className="text-2xl font-bold mb-3">¿Por qué elegirnos?</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-4">
              <li>Identificamos con precisión la necesidad del cliente y diseñamos soluciones a medida</li>
              <li>Contamos con amplia experiencia y conocimiento</li>
              <li>Somos creativos, flexibles y eficientes</li>
              <li>Equipo interdisciplinario con múltiples enfoques</li>
            </ul>
            <p className="font-medium mb-2">Nuestro cliente busca una solución:</p>
            <div className="flex flex-wrap gap-2">
              {atributos.map((a) => (
                <span key={a} className="rounded-full border px-3 py-1 text-sm bg-secondary/50">
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6">
            <h3 className="text-2xl font-bold mb-3">Áreas de servicio</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link className="rounded-lg border px-4 py-2 hover:bg-primary/5 hover:border-primary/40" href="/medicina-laboral">
                Medicina Laboral
              </Link>
              <Link className="rounded-lg border px-4 py-2 hover:bg-primary/5 hover:border-primary/40" href="/servicios-medicos-generales">
                Servicios Médicos Generales
              </Link>
              <Link className="rounded-lg border px-4 py-2 hover:bg-primary/5 hover:border-primary/40" href="/medicina-del-deporte">
                Medicina del Deporte
              </Link>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6">
            <h3 className="text-2xl font-bold mb-3">Identidad de CIS</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Consultora CIS nace de la observación de sus fundadores sobre la necesidad de incorporar herramientas y
              aprendizajes utilizados en otras industrias, pero no aplicados directamente en el ámbito de la salud.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Además, el sistema de salud —complejo y de gran dimensión— involucra múltiples actores (obras sociales,
              prepagas, ART, Estado, empresas privadas), lo que genera espacios donde ciertas necesidades no están
              completamente cubiertas.
            </p>
            <p className="font-semibold">La búsqueda de calidad en los servicios de salud es el motor principal de nuestro trabajo.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
