import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Award, Heart, TrendingUp, Shield } from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { SectionHeader } from "@/components/section-header"
import { StudyTurnoForm } from "@/components/studies/study-turno-form"

export const metadata: Metadata = {
  title: "Medicina del Deporte - EMMAC y Aptitud Física Deportiva",
  description:
    "Exámenes médicos deportivos EMMAC, certificados de aptitud física, evaluación de rendimiento y prevención de lesiones para deportistas en Córdoba. Consultora CIS.",
  openGraph: {
    title: "Medicina del Deporte - Consultora CIS",
    description:
      "EMMAC, apto físico deportivo, evaluación de rendimiento y prevención de lesiones para deportistas de todos los niveles.",
    images: ["/images/medicina-del-deporte/hero.png"],
  },
  alternates: {
    canonical: "/medicina-del-deporte",
  },
}

const servicios = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "EMMAC",
    href: "/medicina-del-deporte/emmac",
    description:
      "Examen Médico de Mediana y Alta Competencia. La evaluación más completa para deportistas de alto rendimiento.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Apto Físico Deportivo",
    href: "/medicina-del-deporte/apto-medico-deportivo",
    description: "Certificados de aptitud física para práctica deportiva amateur y federada.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Evaluación de Rendimiento",
    href: "/medicina-del-deporte/evaluacion-rendimiento",
    description: "Análisis integral del estado físico y capacidad de rendimiento deportivo.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Prevención de Lesiones",
    href: "/medicina-del-deporte/prevencion-lesiones",
    description: "Evaluación de riesgos y recomendaciones para prevenir lesiones deportivas.",
  },
]

const beneficios = [
  "Detección temprana de condiciones cardíacas",
  "Evaluación musculoesquelética completa",
  "Recomendaciones personalizadas de entrenamiento",
  "Asesoramiento nutricional básico",
  "Seguimiento periódico de evolución",
  "Certificación reconocida nacionalmente",
]

export default function MedicinaDelDeportePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
                Medicina del Deporte
              </h1>
              <p className="mb-6 text-lg text-primary-foreground/80 text-pretty">
                Ofrecemos atención a deportistas y brindamos servicios de gestión de salud a clubes, instituciones y
                empresas del ámbito del deporte.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/turnos-online"
                  className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
                >
                  Turno online
                </Link>
                <a
                  href="https://misaludmedica.com/Companies.html?institution=cis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
                >
                  Portal empresa
                </a>
                <a
                  href="https://misaludmedica.com/Home.html?institution=cis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-sky-600 px-5 py-3 font-semibold text-white hover:bg-sky-700"
                >
                  Portal persona
                </a>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/images/medicina-del-deporte/hero.png"
                alt="Evaluación médica deportiva profesional para atletas"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 lg:py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-xl border bg-card p-6 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              En Consultora CIS, ofrecemos atención a deportistas y brindamos servicios de gestión de salud a clubes,
              instituciones y empresas del ámbito del deporte.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nos especializamos en servicios de aptitud deportiva, para todas las disciplinas y niveles.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Creemos que la prevención de la enfermedad es la mejor herramienta.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Contamos con especialistas en el tratamiento de patologías derivadas del deporte, y asociadas al mismo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Es nuestro objetivo lograr que el deportista realice su actividad en un entorno seguro; en el caso de
              que detectemos una patología, la misma será tratada y acompañaremos a la persona en el proceso, hasta
              lograr su reinserción.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Disponemos de métodos de diagnóstico complementarios para que realice su consulta en un solo lugar,
              optimizando tiempos y costos.
            </p>
            <p className="font-semibold">
              Nuestro plantel de profesionales cuenta con médicos habilitados para realizar EMMAC en Córdoba (Exámenes
              Médicos Obligatorios dependientes de la Secretaría de Deportes de la provincia de Córdoba).
            </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Nuestros Servicios"
            description="Ofrecemos evaluaciones completas adaptadas a cada tipo de deportista y actividad."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {servicios.map((servicio) => {
              const cardContent = (
                <>
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-primary/15 group-hover:text-primary">
                    {servicio.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {servicio.title}
                    </h3>
                    <p className="text-muted-foreground">{servicio.description}</p>
                  </div>
                </>
              )

              if (servicio.href) {
                return (
                  <Link
                    key={servicio.title}
                    href={servicio.href}
                    className="group flex gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-primary/5 hover:shadow-md cursor-pointer"
                  >
                    {cardContent}
                  </Link>
                )
              }

              return (
                <div key={servicio.title} className="flex gap-4 rounded-xl border border-border bg-card p-6">
                  {cardContent}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/images/medicina-del-deporte/atencion-medica-mdd.jpg"
                alt="Atleta entrenando con seguimiento de rendimiento y salud deportiva"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">Beneficios de la Evaluación</h2>
              <ul className="space-y-3">
                {beneficios.map((beneficio) => (
                  <li key={beneficio} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-muted-foreground">{beneficio}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <StudyTurnoForm estudio="Medicina del Deporte" />
        </div>
      </section>

      <CTASection
        title="¿Eres deportista?"
        description="Agenda tu evaluación y asegura tu rendimiento de manera segura."
        primaryCTA={{ text: "Solicitar turno", href: "/contacto" }}
      />
    </>
  )
}
