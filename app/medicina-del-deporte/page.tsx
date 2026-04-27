import type { Metadata } from "next"
import Link from "next/link"
import Image from "@/components/base-path-image"
import { Activity, ArrowRight, ChevronRight, List, ShieldCheck, Stethoscope } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { TurneroButton } from "@/components/turnero-button"

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
    description: "Equipos médicos y paramédicos para eventos, entrenamientos, temporadas y piletas.",
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
            <div className="text-center lg:text-left">
              <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
                Medicina del Deporte
              </h1>
              <p className="mb-6 text-lg text-primary-foreground/80 text-pretty">
                Ofrecemos atención a deportistas y brindamos servicios de gestión de salud a clubes, instituciones y
                empresas del ámbito del deporte.
              </p>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                <TurneroButton className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-70" />
                <a
                  href="#nuestros-servicios"
                  className="inline-flex items-center gap-3 rounded-md bg-white/20 border border-white/40 px-4 py-3 font-semibold text-white hover:bg-white/30"
                >
                  <List className="h-5 w-5 flex-shrink-0" />
                  <span className="flex flex-col text-left">
                    <span className="text-sm font-semibold leading-tight">Más servicios</span>
                    <span className="text-xs font-normal opacity-80 leading-tight">Atajo al listado</span>
                  </span>
                  <ArrowRight className="h-4 w-4 flex-shrink-0" />
                </a>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/images/medicina-del-deporte/banner-medicina-del-deporte.jpg"
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

      {/* Servicios */}
      <section id="nuestros-servicios" className="py-16 lg:py-24">
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
            title="Servicios de Salud para deportistas, clubes, instituciones y empresas del deporte"
            description="Coberturas y gestión médica integral para clubes, instituciones y eventos deportivos."
          />
          <div className="grid gap-6 md:grid-cols-2">
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

      {/* Portales */}
      <section className="py-8 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-xl border bg-card p-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <a
              href="https://misaludmedica.com/Companies.html?institution=cis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              Portal Empresas
            </a>
            <a
              href="https://misaludmedica.com/Home.html?institution=cis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-sky-600 px-5 py-3 font-semibold text-white hover:bg-sky-700"
            >
              Portal Personas
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
