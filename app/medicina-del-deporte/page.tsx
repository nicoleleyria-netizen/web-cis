import type { Metadata } from "next"
import Link from "next/link"
import Image from "@/components/base-path-image"
import { Activity, ChevronRight, ShieldCheck, Stethoscope } from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { SectionHeader } from "@/components/section-header"
import { StudyTurnoForm } from "@/components/studies/study-turno-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Medicina del Deporte - EMMAC, aptitud y cobertura deportiva",
  description:
    "Atención médica para deportistas y servicios de cobertura para clubes e instituciones en Córdoba.",
  openGraph: {
    title: "Medicina del Deporte - Consultora CIS",
    description:
      "EMMAC, apto médico deportivo y coberturas de salud para clubes e instituciones.",
    images: ["/images/medicina-del-deporte/hero.png"],
  },
  alternates: {
    canonical: "/medicina-del-deporte",
  },
}

const servicios = [
  {
    icon: <Stethoscope className="h-6 w-6" />,
    title: "Atención Médica Especialistas",
    href: "#atencion-medica-especialistas",
    description: "Especialidades médicas vinculadas a la práctica deportiva.",
    accordion: true,
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Exámenes Complementarios",
    href: "#examenes-complementarios-mdd",
    description: "Estudios diagnósticos deportivos en un mismo circuito de atención.",
    accordion: true,
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Fichaje de Rugby (UAR)",
    href: "/medicina-del-deporte/fichaje-rugby-uar",
    description: "Servicio unificado EMMAC + ficha UAR para habilitación anual.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Aptitud Médica para ingresos a IPEF y otros terciarios",
    description: "Aptitud médica para ingresos con evaluación integral y certificación.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "EMMAC",
    href: "/medicina-del-deporte/emmac",
    description:
      "Examen Médico de Mediana y Alta Competencia, obligatorio según normativa provincial.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Aptos Médicos Deportivos",
    href: "/medicina-del-deporte/apto-medico-deportivo",
    description: "Chequeo preventivo y certificado válido para clubes e instituciones deportivas.",
  },
]

const coberturas = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Cobertura de Salud para Deportistas",
    href: "/medicina-del-deporte/cobertura-salud-deportistas",
    description: "Planes y seguros de salud para planteles deportivos de clubes e instituciones.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Cobertura Médica y Paramédica en Clubes e Instituciones",
    href: "/medicina-del-deporte/cobertura-medica-paramedica-clubes-instituciones",
    description: "Equipos médicos y paramédicos para eventos, entrenamientos y temporadas.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Cobertura Médica en Piletas",
    href: "/medicina-del-deporte/cobertura-medica-paramedica-clubes-instituciones",
    description: "Deriva a la cobertura médica y paramédica para clubes, instituciones y temporada de piletas.",
  },
]

const especialistas = [
  "Medicina general",
  "Clínica médica",
  "Traumatología",
  "Cardiología",
  "Oftalmología",
  "Kinesiología",
  "Nutrición",
]

const examenesComplementarios = [
  "Radiología digitalizada",
  "Ergometría",
  "MAPA",
  "HOLTER",
  "Electrocardiografía",
  "Espirometría",
  "Electroencefalografía",
  "Audiometría",
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
                  Solicitar Turno
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
            description="Servicios médicos para deportistas y habilitaciones deportivas, con atención ordenada y resolutiva."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {servicios.map((servicio) => {
              const cardContent = (
                <>
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-primary/15 group-hover:text-primary">
                    {servicio.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {servicio.title}
                      {servicio.href && <ChevronRight className="h-4 w-4 text-primary/70" />}
                    </h3>
                    <p className="text-muted-foreground">{servicio.description}</p>
                  </div>
                </>
              )

              if ((servicio as { accordion?: boolean }).accordion && servicio.href) {
                return (
                  <a
                    key={servicio.title}
                    href={servicio.href}
                    className="group flex gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-primary/5 hover:shadow-md cursor-pointer"
                  >
                    {cardContent}
                  </a>
                )
              }

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

      <section id="atencion-medica-especialistas" className="bg-secondary py-16 lg:py-20 scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl border bg-card p-6 lg:p-8">
            <h2 className="text-3xl font-bold text-foreground">Atención Médica Especialistas</h2>
            <p className="mt-3 text-muted-foreground">Desplegá las especialidades vinculadas a medicina del deporte.</p>
            <Accordion type="multiple" className="mt-6">
              <AccordionItem value="especialistas-mdd">
                <AccordionTrigger>Ver especialidades</AccordionTrigger>
                <AccordionContent>
                  <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {especialistas.map((item) => (
                      <li key={item} className="rounded-lg border bg-background px-3 py-2 text-sm text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="examenes-complementarios-mdd" className="py-16 lg:py-20 scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl border bg-card p-6 lg:p-8">
            <h2 className="text-3xl font-bold text-foreground">Exámenes Complementarios</h2>
            <p className="mt-3 text-muted-foreground">Estudios diagnósticos disponibles en el circuito de medicina del deporte.</p>
            <Accordion type="multiple" className="mt-6">
              <AccordionItem value="examenes-mdd">
                <AccordionTrigger>Ver opciones disponibles</AccordionTrigger>
                <AccordionContent>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {examenesComplementarios.map((item) => (
                      <li key={item} className="rounded-lg border bg-background px-3 py-2 text-sm text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Cobertura de Salud para Deportistas"
            description="Segunda parte: servicios de cobertura y gestión médica para clubes, instituciones y eventos deportivos."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coberturas.map((servicio) => (
              <Link
                key={servicio.title}
                href={servicio.href}
                className="group flex gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-primary/5 hover:shadow-md cursor-pointer"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-primary/15 group-hover:text-primary">
                  {servicio.icon}
                </div>
                <div>
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {servicio.title}
                    <ChevronRight className="h-4 w-4 text-primary/70" />
                  </h3>
                  <p className="text-muted-foreground">{servicio.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <StudyTurnoForm estudio="Medicina del Deporte" />
        </div>
      </section>

      <CTASection
        title="¿Necesitás habilitar tu práctica o cobertura deportiva?"
        description="Podés coordinar desde Solicitar Turno, WhatsApp o formulario de contacto."
        primaryCTA={{ text: "Solicitar Turno", href: "/turnos-online" }}
        secondaryCTA={{ text: "Formulario de contacto", href: "/contacto" }}
        whatsappCTA
      />
    </>
  )
}
