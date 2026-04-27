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
import Image from "@/components/base-path-image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const destacados = [
  {
    icon: FileCheck,
    title: "Examen Preocupacional",
    href: "/medicina-laboral/examen-preocupacional",
    description: "Evaluación médica previa al ingreso laboral para determinar la aptitud psicofísica.",
  },
  {
    icon: FileCheck,
    title: "Examen Periódico de Aptitud",
    href: "/medicina-laboral/examen-periodico-aptitud",
    description: "Control médico periódico para el seguimiento de la salud de los trabajadores en actividad.",
  },
  {
    icon: Activity,
    title: "Exámenes para trabajo en altura física o geográfica (altitud)",
    href: "/medicina-laboral/examenes-trabajo-altura-altitud",
    description: "Aptitud médica para tareas en altura según normativa de seguridad vigente.",
  },
  {
    icon: FlaskConical,
    title: "Test de detección de drogas y abuso de alcohol",
    href: "/medicina-laboral/test-deteccion-drogas-abuso-alcohol",
    description: "Evaluación toxicológica para contextos laborales que requieren controles específicos.",
  },
]

const acordiones = [
  {
    id: "examenes-medicos-aptitud",
    icon: FileCheck,
    title: "Exámenes Médicos de Aptitud",
    description: "Conjunto completo de evaluaciones médicas pre, durante y post ocupacionales.",
    items: [
      { label: "Examen Preocupacional", href: "/medicina-laboral/examen-preocupacional" },
      { label: "Exámenes Complementarios Especiales", href: "/medicina-laboral/examenes-complementarios-especiales" },
      { label: "Exámenes para trabajo en altura física o geográfica (altitud)", href: "/medicina-laboral/examenes-trabajo-altura-altitud" },
      { label: "Chequeo médico preventivo", href: "/medicina-laboral/chequeo-medico-preventivo" },
      { label: "Examen Periódico de Aptitud", href: "/medicina-laboral/examen-periodico-aptitud" },
      { label: "Examen Previo a una Transferencia de Actividad", href: "/medicina-laboral/examen-previo-transferencia-actividad" },
      { label: "Exámenes psicotécnicos / Psicodiagnóstico", href: "/medicina-laboral/examen-psicotecnico-psicodiagnostico" },
      { label: "Examen de Egreso (Post ocupacional)", href: "/medicina-laboral/examen-egreso-post-ocupacional" },
      { label: "Examen Posterior a una Ausencia Prolongada", href: "/medicina-laboral/examen-posterior-ausencia-prolongada" },
      { label: "Test de detección de drogas y abuso de alcohol", href: "/medicina-laboral/test-deteccion-drogas-abuso-alcohol" },
    ],
  },
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
    title: "Atención Médica",
    description: "Atención primaria, interconsultas y rehabilitación para empleados.",
    items: [
      { label: "Atención primaria de empleados (atención médica inicial)" },
      { label: "Interconsultas médicas (todas las especialidades)" },
      { label: "Rehabilitación por patologías laborales / accidentes / enfermedades profesionales" },
      { label: "Exámenes complementarios: Audiometría, Ecografía, ECG, EEG, Ergometría, Espirometría, Fibrolaringoscopía, Laboratorio integral, Control de abuso de sustancias, Radiología digital" },
    ],
  },
  {
    id: "gestion-salud",
    icon: Building,
    title: "Gestión de Salud en la Empresa",
    description: "Servicios médicos en planta, campañas y programas corporativos de salud.",
    items: [
      { label: "Servicios permanentes en planta (médico laboral, enfermería)" },
      { label: "Exámenes en planta con unidades móviles" },
      { label: "Campañas de vacunación en planta o a domicilio" },
      { label: "Logística/derivación de casos complejos" },
      { label: "Programas nutricionales corporativos" },
      { label: "Ergonomía y perfil de puesto" },
    ],
  },
  {
    id: "capacitaciones",
    icon: BookOpen,
    title: "Capacitaciones para Empresas",
    description: "Formación en salud ocupacional, RCP y normativas de seguridad vigentes.",
    items: [
      { label: "Prevención en salud ocupacional" },
      { label: "Charlas de salud conforme a decreto 915/15" },
      { label: "Capacitaciones según normas de calidad ISO 45001" },
      { label: "Cursos de RCP. Teoría y práctica.", href: "/medicina-laboral/cursos-rcp" },
      { label: "Prevención de la salud." },
      { label: "Patologías de mayor incidencia en la población." },
    ],
  },
  {
    id: "asesoramiento-legal",
    icon: ShieldCheck,
    title: "Asesoramiento Médico Legal",
    description: "Pericias, representación y asesoramiento en aspectos médico-legales laborales.",
    items: [
      { label: "Pericias Médicas judiciales, extrajudiciales" },
      { label: "Asesoramiento y Representación en juntas médicas." },
      { label: "Mediación en casos conflictivos." },
      { label: "Asesoramiento y Representación ante ART y seguros" },
      { label: "Representación Médica Laboral-Legal en Ministerio de Trabajo" },
      { label: "Valoración de daño corporal." },
      { label: "Certificados de incapacidad." },
    ],
  },
]

export default function MedicinaLaboralClientPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
                Medicina Laboral
              </h1>
              <p className="mb-6 text-lg text-primary-foreground/80 text-pretty">
                Desde hace 18 años acompañamos a las empresas en la gestión de la salud y bienestar de sus empleados, ofreciendo un servicio de medicina integral.
              </p>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
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
                  Portal Empresa
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-md bg-white/20 border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white/30"
                >
                  Hacé tu consulta
                </Link>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/images/medicina-laboral/banner-medicina-laboral.jpg"
                alt="Equipo médico profesional especializado en medicina laboral y salud ocupacional"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Nuestros Servicios</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Contamos con una amplia gama de servicios diseñados para cuidar la salud de su equipo de trabajo.
            </p>
          </div>

          {/* Items 1–4: link cards */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-6">
            {destacados.map((s) => {
              const Icon = s.icon
              return (
                <Link key={s.title} href={s.href} className="block group">
                  <div className="h-full flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md">
                    <div className="relative h-16 w-16 flex-shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="flex items-center gap-1 text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                        {s.title}
                        <ChevronRight className="h-4 w-4 flex-shrink-0 text-primary/70" />
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Items 5–10: accordion cards */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-6">
            {acordiones.map((s) => {
              const Icon = s.icon
              return (
                <a key={s.id} href={`#${s.id}`} className="block group scroll-mt-24">
                  <div className="h-full flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md">
                    <div className="relative h-16 w-16 flex-shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="flex items-center gap-1 text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                        {s.title}
                        <ChevronRight className="h-4 w-4 flex-shrink-0 text-primary/70" />
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Item 11: Visado */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <Link href="/medicina-laboral/visado-examen-preocupacional" className="block group">
              <div className="h-full flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md">
                <div className="relative h-16 w-16 flex-shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <FileCheck className="h-7 w-7" />
                </div>
                <div className="min-w-0">
                  <h3 className="flex items-center gap-1 text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                    Visado de Examen Preocupacional
                    <ChevronRight className="h-4 w-4 flex-shrink-0 text-primary/70" />
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">Servicio de visado médico para validación de exámenes preocupacionales.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Accordion sections for items 5–10 */}
      {acordiones.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`${idx % 2 === 0 ? "bg-secondary" : "bg-background"} py-16 lg:py-20 scroll-mt-24`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl rounded-3xl border bg-card p-6 lg:p-8">
              <h2 className="text-3xl font-bold text-foreground">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.description}</p>
              <Accordion type="multiple" className="mt-6">
                <AccordionItem value={`${s.id}-list`}>
                  <AccordionTrigger>Ver opciones disponibles</AccordionTrigger>
                  <AccordionContent>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {s.items.map((item) => (
                        <li key={item.label} className="rounded-lg border bg-background px-3 py-2 text-sm text-foreground">
                          {"href" in item && item.href ? (
                            <Link href={item.href} className="text-primary hover:underline underline-offset-4">
                              {item.label}
                            </Link>
                          ) : (
                            item.label
                          )}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <Button asChild><Link href="/turnos-online">Solicitar Turno</Link></Button>
                      <Button asChild variant="secondary">
                        <a href="https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                      </Button>
                      <Button asChild variant="outline"><Link href="/contacto">Formulario de contacto</Link></Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      ))}

      {/* Portales */}
      <section className="py-8 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-xl border bg-card p-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
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
    </main>
  )
}
