"use client"

import Link from "next/link"
import {
  Activity,
  ChevronRight,
  FileText,
  FlaskConical,
  HeartPulse,
  Pill,
  Stethoscope,
  Video,
  Building2,
  UserCircle2,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AreaHeroBanner } from "@/components/area-hero-banner"
import { Button } from "@/components/ui/button"
import { LatestArticlesSection } from "@/components/latest-articles-section"

type Card = {
  icon: any
  title: string
  description: string
  href?: string
  details?: Array<{ label: string; href?: string }>
}

const cards: Card[] = [
  {
    icon: Stethoscope,
    title: "Consultas Medicas",
    description: "Medicina general, clinica medica, reumatologia, traumatologia y mas especialidades.",
    details: [
      { label: "Medicina general" },
      { label: "Clinica medica" },
      { label: "Reumatologia" },
      { label: "Traumatologia" },
      { label: "Cardiologia" },
      { label: "Neurologia" },
      { label: "Ginecologia" },
      { label: "Dermatologia" },
    ],
  },
  {
    icon: Activity,
    title: "Examenes Complementarios",
    description: "Radiologia, ergometria, holter, ecografias y mas estudios integrados.",
    details: [
      { label: "Radiologia digitalizada" },
      { label: "Ergometria" },
      { label: "MAPA y HOLTER" },
      { label: "Electrocardiografia" },
      { label: "Espirometria" },
      { label: "Ecografias" },
    ],
  },
  {
    icon: HeartPulse,
    title: "Chequeo Medico Preventivo",
    description: "Evaluacion preventiva para deteccion temprana de riesgos y enfermedades.",
    href: "/servicios-medicos-generales/chequeo-medico-preventivo",
  },
  {
    icon: FlaskConical,
    title: "Laboratorio de Analisis Clinicos",
    description: "Analisis de baja y alta complejidad con trazabilidad y resultados confiables.",
    href: "/servicios-medicos-generales/laboratorio-analisis-clinicos",
  },
  {
    icon: Pill,
    title: "Infusion de Medicamentos",
    description: "Centro ambulatorio para administracion de medicacion con supervision medica.",
    href: "/servicios-medicos-generales/infusion-medicamentos",
  },
  {
    icon: FileText,
    title: "Certificado Escolar",
    description: "Apto medico escolar para instituciones y personas en edad escolar.",
    href: "/servicios-medicos-generales/certificado-escolar",
  },
  {
    icon: Activity,
    title: "EMMAC",
    description: "Examen Medico de Mediana y Alta Competencia, obligatorio segun normativa provincial.",
    href: "/medicina-del-deporte/emmac",
  },
  {
    icon: FileText,
    title: "Certificados Medicos de Aptitud",
    description: "Conduccion, deporte, estudios, viajes y aptitudes especiales.",
    details: [
      { label: "Carnet de conducir profesional" },
      { label: "Carnet de conducir particular" },
      { label: "Aptitud para actividad fisica" },
      { label: "Ingreso a universidades e instituciones" },
      { label: "Certificaciones para viajes" },
      { label: "Aptitud ANMAC" },
    ],
  },
  {
    icon: Video,
    title: "Telemedicina",
    description: "Consultas online con profesionales medicos desde cualquier lugar.",
    href: "/servicios-medicos-generales/telemedicina",
  },
]

function ServiceCard({ icon: Icon, title, description, href, details }: Card) {
  if (href) {
    return (
      <Link href={href} className="block h-full group">
        <div className="h-full flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md">
          <div className="relative h-16 w-16 flex-shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <Icon className="h-7 w-7" />
          </div>
          <div className="min-w-0">
            <h3 className="flex items-center gap-1 text-base font-semibold text-foreground transition-colors group-hover:text-primary">
              {title}
              <ChevronRight className="h-4 w-4 flex-shrink-0 text-primary/70" />
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex gap-4">
        <div className="relative h-16 w-16 flex-shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
          <Icon className="h-7 w-7" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      <Accordion type="single" collapsible className="mt-4">
        <AccordionItem value={title}>
          <AccordionTrigger>Ver opciones</AccordionTrigger>
          <AccordionContent>
            <ul className="grid gap-2">
              {(details ?? []).map((item) => (
                <li key={item.label} className="rounded-lg border bg-background px-3 py-2 text-sm text-foreground">
                  {item.href ? (
                    <Link href={item.href} className="text-primary hover:underline underline-offset-4">
                      {item.label}
                    </Link>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default function ServiciosMedicosClientPage() {
  return (
    <main>
      <AreaHeroBanner
        title="Servicios Medicos Generales"
        summary="Brindamos una amplia oferta de servicios relacionados con la salud, en consultorios y domicilios, sin internacion."
        heroImage="/images/servicios-medicos-generales/banner-servicios-medicos-generales.jpg"
        heroAlt="Servicios medicos generales en Cordoba"
        actions={[
          {
            text: "Solicitar Turno",
            href: "/turnos-online",
            className: "bg-white text-primary hover:bg-white/90",
          },
          {
            text: "Más servicios",
            href: "#nuestros-servicios",
            className: "bg-transparent border-2 border-white text-white hover:bg-white/10",
          },
        ]}
      />

      <section className="bg-background py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl border bg-card p-6 lg:p-8">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Mas sobre nuestra empresa</h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Consultora Integral de Salud CIS brinda una amplia oferta de servicios relacionados con la salud. Abarcamos el primer y el segundo nivel de atencion en consultorios y domicilios, sin internacion.
              </p>
              <p>
                Nuestra organizacion cuenta con profesionales y personal capacitado en multiples areas, con procesos de atencion eficientes para resolver cada consulta sin demoras.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/empresa/acerca">Mas sobre nuestra empresa</Link>
              </Button>
            </div>
          </div>

          <div id="nuestros-servicios" className="mt-14">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Nuestros Servicios</h2>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                Consultas medicas, estudios, certificados y atencion integral para personas, empresas e instituciones.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {cards.map((card) => (
                <ServiceCard key={card.title} {...card} />
              ))}
            </div>
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
    </main>
  )
}
