"use client"

import Link from "next/link"
import {
  Activity,
  BookOpen,
  Building,
  ChevronRight,
  FileCheck,
  FlaskConical,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AreaHeroBanner } from "@/components/area-hero-banner"
import { LatestArticlesSection } from "@/components/latest-articles-section"

type LinkCard = {
  icon: any
  title: string
  href: string
  description: string
}

type AccordionCard = {
  id: string
  icon: any
  title: string
  description: string
  items: Array<{ label: string; href?: string }>
}

const linkCards: LinkCard[] = [
  {
    icon: FileCheck,
    title: "Examen Preocupacional",
    href: "/medicina-laboral/examen-preocupacional",
    description: "Evaluacion medica previa al ingreso laboral para determinar la aptitud psicofisica.",
  },
  {
    icon: FileCheck,
    title: "Examenes Complementarios Especiales",
    href: "/medicina-laboral/examenes-complementarios-especiales",
    description: "Estudios especificos segun riesgo laboral y perfil de puesto.",
  },
  {
    icon: Activity,
    title: "Examenes para trabajo en altura fisica o geografica (altitud)",
    href: "/medicina-laboral/examenes-trabajo-altura-altitud",
    description: "Aptitud medica para tareas en altura segun normativa de seguridad vigente.",
  },
  {
    icon: FlaskConical,
    title: "Test de deteccion de drogas y abuso de alcohol",
    href: "/medicina-laboral/test-deteccion-drogas-abuso-alcohol",
    description: "Evaluacion toxicologica para contextos laborales que requieren controles especificos.",
  },
  {
    icon: FileCheck,
    title: "Visado de Examen Preocupacional",
    href: "/medicina-laboral/visado-examen-preocupacional",
    description: "Validacion medica y administrativa de examenes preocupacionales.",
  },
  {
    icon: Users,
    title: "Ausentismo Diferenciado",
    href: "/medicina-laboral/ausentismo-diferenciado",
    description: "Seguimiento especifico de casos de ausentismo con criterio medico laboral.",
  },
  {
    icon: BookOpen,
    title: "Cursos de RCP",
    href: "/medicina-laboral/cursos-rcp",
    description: "Capacitaciones practicas de reanimacion para empresas e instituciones.",
  },
]

const accordionCards: AccordionCard[] = [
  {
    id: "control-ausentismo",
    icon: Users,
    title: "Control de Ausentismo",
    description: "Seguimiento y control del ausentismo laboral, en consultorio y domicilio.",
    items: [
      { label: "Control de ausentismo en domicilio" },
      { label: "Control de ausentismo en consultorios" },
      { label: "Ausentismo diferenciado", href: "/medicina-laboral/ausentismo-diferenciado" },
    ],
  },
  {
    id: "atencion-medica",
    icon: Stethoscope,
    title: "Atencion Medica",
    description: "Atencion primaria, interconsultas y rehabilitacion para empleados.",
    items: [
      { label: "Atencion primaria de empleados (atencion medica inicial)" },
      { label: "Interconsultas medicas (todas las especialidades)" },
      { label: "Rehabilitacion por patologias laborales / accidentes / enfermedades profesionales" },
      { label: "Examenes complementarios: Audiometria, Ecografia, ECG, EEG, Ergometria, Espirometria y Laboratorio" },
    ],
  },
  {
    id: "gestion-salud",
    icon: Building,
    title: "Gestion de Salud en la Empresa",
    description: "Servicios medicos en planta, campanas y programas corporativos de salud.",
    items: [
      { label: "Servicios permanentes en planta (medico laboral, enfermeria)" },
      { label: "Examenes en planta con unidades moviles" },
      { label: "Campanas de vacunacion en planta o a domicilio" },
      { label: "Programas nutricionales corporativos" },
      { label: "Ergonomia y perfil de puesto" },
    ],
  },
  {
    id: "capacitaciones",
    icon: BookOpen,
    title: "Capacitaciones para Empresas",
    description: "Formacion en salud ocupacional, RCP y normativas de seguridad vigentes.",
    items: [
      { label: "Prevencion en salud ocupacional" },
      { label: "Charlas de salud conforme a decreto 915/15" },
      { label: "Capacitaciones segun normas de calidad ISO 45001" },
      { label: "Cursos de RCP. Teoria y practica.", href: "/medicina-laboral/cursos-rcp" },
    ],
  },
  {
    id: "asesoramiento-legal",
    icon: ShieldCheck,
    title: "Asesoramiento Medico Legal",
    description: "Pericias, representacion y asesoramiento en aspectos medico-legales laborales.",
    items: [
      { label: "Pericias Medicas judiciales y extrajudiciales" },
      { label: "Asesoramiento y representacion en juntas medicas" },
      { label: "Asesoramiento y representacion ante ART y seguros" },
      { label: "Representacion ante Ministerio de Trabajo" },
      { label: "Valoracion de dano corporal y certificados de incapacidad" },
    ],
  },
]

function CardLink({ icon: Icon, title, href, description }: LinkCard) {
  return (
    <Link href={href} className="block group h-full">
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

function CardAccordion({ id, icon: Icon, title, description, items }: AccordionCard) {
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
        <AccordionItem value={id}>
          <AccordionTrigger>Ver opciones</AccordionTrigger>
          <AccordionContent>
            <ul className="grid gap-2">
              {items.map((item) => (
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

export default function MedicinaLaboralClientPage() {
  return (
    <main>
      <AreaHeroBanner
        title="Medicina Laboral"
        summary="Desde hace 18 anos acompanamos a las empresas en la gestion de la salud y bienestar de sus empleados, ofreciendo un servicio de medicina integral."
        heroImage="/images/medicina-laboral/banner-medicina-laboral.jpg"
        heroAlt="Equipo medico profesional especializado en medicina laboral y salud ocupacional"
        actions={[
          {
            text: "Hace tu consulta",
            href: "/contacto",
            className: "border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700 hover:border-emerald-700",
          },
          {
            text: "Portal Empresa",
            href: "https://misaludmedica.com/Companies.html?institution=cis",
            external: true,
            className: "border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700 hover:border-indigo-700",
          },
        ]}
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Nuestros Servicios</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Contamos con una amplia gama de servicios disenados para cuidar la salud de su equipo de trabajo.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {linkCards.map((service) => (
              <CardLink key={service.title} {...service} />
            ))}
            {accordionCards.map((service) => (
              <CardAccordion key={service.id} {...service} />
            ))}
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
              Portal Empresa
            </a>
            <a
              href="https://misaludmedica.com/Home.html?institution=cis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-sky-600 px-5 py-3 font-semibold text-white hover:bg-sky-700"
            >
              Portal Paciente
            </a>
          </div>
        </div>
      </section>

      <LatestArticlesSection />
    </main>
  )
}
