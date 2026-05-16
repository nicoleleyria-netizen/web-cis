import type { Metadata } from "next"
import Link from "next/link"
import { Activity, ChevronRight, ShieldCheck, Stethoscope, Building2, UserCircle2 } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AreaHeroBanner } from "@/components/area-hero-banner"
import { LatestArticlesSection } from "@/components/latest-articles-section"

export const metadata: Metadata = {
  title: "Medicina del Deporte - EMMAC, aptitud y cobertura deportiva",
  description:
    "Atencion medica para deportistas y servicios de cobertura para clubes e instituciones en Cordoba.",
  openGraph: {
    title: "Medicina del Deporte - Consultora CIS",
    description:
      "EMMAC, apto medico deportivo y coberturas de salud para clubes e instituciones.",
    images: ["/images/medicina-del-deporte/hero.png"],
  },
  alternates: {
    canonical: "/medicina-del-deporte",
  },
}

type Card = {
  icon: any
  title: string
  description: string
  href?: string
  details?: Array<{ label: string; href?: string }>
}

const cards: Card[] = [
  {
    icon: ShieldCheck,
    title: "EMMAC",
    href: "/medicina-del-deporte/emmac",
    description: "Examen Medico de Mediana y Alta Competencia, obligatorio segun normativa provincial.",
  },
  {
    icon: ShieldCheck,
    title: "Aptos Medicos Deportivos",
    href: "/medicina-del-deporte/apto-medico-deportivo",
    description: "Chequeo preventivo y certificado valido para clubes e instituciones deportivas.",
  },
  {
    icon: Stethoscope,
    title: "Atencion Medica Especialistas",
    description: "Especialidades medicas vinculadas a la practica deportiva.",
    details: [
      { label: "Medicina general" },
      { label: "Clinica medica" },
      { label: "Traumatologia" },
      { label: "Cardiologia" },
      { label: "Oftalmologia" },
      { label: "Kinesiologia" },
      { label: "Nutricion" },
    ],
  },
  {
    icon: Activity,
    title: "Examenes Complementarios",
    description: "Estudios diagnosticos deportivos en un mismo circuito de atencion.",
    details: [
      { label: "Radiologia digitalizada" },
      { label: "Ergometria" },
      { label: "MAPA y HOLTER" },
      { label: "Electrocardiografia" },
      { label: "Espirometria" },
      { label: "Audiometria" },
      { label: "Electroencefalografia" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Fichaje de Rugby (UAR)",
    href: "/medicina-del-deporte/fichaje-rugby-uar",
    description: "Servicio unificado EMMAC + ficha UAR para habilitacion anual.",
  },
  {
    icon: ShieldCheck,
    title: "Aptitud Medica para ingresos a IPEF y otros terciarios",
    description: "Aptitud medica para ingresos con evaluacion integral y certificacion.",
    details: [],
  },
]

const coberturas = [
  {
    icon: ShieldCheck,
    title: "Cobertura de Salud para Deportistas",
    href: "/medicina-del-deporte/cobertura-salud-deportistas",
    description: "Planes y seguros de salud para planteles deportivos de clubes e instituciones.",
  },
  {
    icon: ShieldCheck,
    title: "Cobertura Medica y Paramedica en Clubes e Instituciones",
    href: "/medicina-del-deporte/cobertura-medica-paramedica-clubes-instituciones",
    description: "Equipos medicos y paramedicos para eventos, entrenamientos, temporadas y piletas.",
  },
]

function ServiceCard({ icon: Icon, title, description, href, details }: Card) {
  if (href) {
    return (
      <Link href={href} className="group flex gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-primary/5 hover:shadow-md cursor-pointer">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-primary/15 group-hover:text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            {title}
            <ChevronRight className="h-4 w-4 text-primary/70" />
          </h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </Link>
    )
  }

  if (!details || details.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      <Accordion type="single" collapsible className="mt-4">
        <AccordionItem value={title}>
          <AccordionTrigger>Ver opciones</AccordionTrigger>
          <AccordionContent>
            <ul className="grid gap-2 sm:grid-cols-2">
              {(details ?? []).map((item) => (
                <li key={item.label} className="rounded-lg border bg-background px-3 py-2 text-sm text-foreground">
                  {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default function MedicinaDelDeportePage() {
  return (
    <>
      <AreaHeroBanner
        title="Medicina del Deporte"
        summary="Ofrecemos atencion a deportistas y brindamos servicios de gestion de salud a clubes, instituciones y empresas del ambito del deporte."
        heroImage="/images/medicina-del-deporte/banner-medicina-del-deporte.jpg"
        heroAlt="Evaluacion medica deportiva profesional para atletas"
        actions={[
          {
            text: "Solicitar Turno",
            href: "/turnos-online",
            className: "border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700 hover:border-emerald-700",
          },
          {
            text: "Portal Paciente",
            href: "https://misaludmedica.com/Home.html?institution=cis",
            external: true,
            className: "border-sky-600 bg-sky-600 text-white hover:bg-sky-700 hover:border-sky-700",
          },
        ]}
      />

      <section className="py-10 lg:py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl border bg-card p-6 lg:p-8 text-center">
            <p className="text-muted-foreground leading-relaxed">
              Atendemos a deportistas de todas las edades y acompanamos a clubes e instituciones con una propuesta medica integral, ordenada y resolutiva.
            </p>
          </div>
        </div>
      </section>

      <section id="nuestros-servicios" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Nuestros Servicios"
            description="Servicios medicos para deportistas y habilitaciones deportivas, con atencion ordenada y resolutiva."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card) => (
              <ServiceCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Servicios de Salud para deportistas, clubes, instituciones y empresas del deporte"
            description="Coberturas y gestion medica integral para clubes, instituciones y eventos deportivos."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {coberturas.map((servicio) => {
              const Icon = servicio.icon

              return (
                <Link
                  key={servicio.title}
                  href={servicio.href}
                  className="group flex gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-primary/5 hover:shadow-md cursor-pointer"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-primary/15 group-hover:text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {servicio.title}
                      <ChevronRight className="h-4 w-4 text-primary/70" />
                    </h3>
                    <p className="text-muted-foreground">{servicio.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-xl border bg-card p-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <a
              href="https://misaludmedica.com/Companies.html?institution=cis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              <Building2 className="mr-2 h-4 w-4" />
              Portal Empresa
            </a>
            <a
              href="https://misaludmedica.com/Home.html?institution=cis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-sky-600 px-5 py-3 font-semibold text-white hover:bg-sky-700"
            >
              <UserCircle2 className="mr-2 h-4 w-4" />
              Portal Paciente
            </a>
          </div>
        </div>
      </section>

      <LatestArticlesSection />
    </>
  )
}
