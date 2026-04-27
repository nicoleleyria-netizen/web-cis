"use client"

import Link from "next/link"
import { Activity, Apple, ChevronRight, FileText, FlaskConical, HeartPulse, Home, Pill, Stethoscope, Syringe, Video } from "lucide-react"
import Image from "@/components/base-path-image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CTASection } from "@/components/cta-section"

const bannerButtons = [
  { text: "Solicitar Turno", href: "/turnos-online", variant: "default" as const },
  { text: "Portal empresa", href: "https://misaludmedica.com/Companies.html?institution=cis", external: true, variant: "secondary" as const },
  { text: "Portal persona", href: "https://misaludmedica.com/Home.html?institution=cis", external: true, variant: "secondary" as const },
]

const servicios = [
  {
    icon: Stethoscope,
    title: "Consultas Médicas",
    href: "#consultas-medicas",
    description: "Medicina general, clínica médica, reumatología, traumatología y más.",
    accordion: true,
  },
  {
    icon: Pill,
    title: "Infusión de Medicamentos",
    href: "/servicios-medicos-generales/infusion-medicamentos",
    description: "Centro ambulatorio para administración de medicación con supervisión médica.",
  },
  {
    icon: Activity,
    title: "Exámenes Complementarios",
    href: "#examenes-complementarios",
    description: "Radiología, ergometría, holter, ecografías y más estudios integrados.",
    accordion: true,
  },
  {
    icon: HeartPulse,
    title: "Chequeo Médico Preventivo",
    href: "/servicios-medicos-generales/chequeo-medico-preventivo",
    description: "Evaluación preventiva para detección temprana de riesgos y enfermedades.",
  },
  {
    icon: FlaskConical,
    title: "Laboratorio de Análisis Clínicos",
    href: "/servicios-medicos-generales/laboratorio-analisis-clinicos",
    description: "Análisis de baja y alta complejidad con trazabilidad y resultados confiables.",
  },
  {
    icon: FileText,
    title: "Certificado Escolar",
    href: "/servicios-medicos-generales/certificado-escolar",
    description: "Apto médico escolar para instituciones y personas en edad escolar.",
  },
  {
    icon: Activity,
    title: "EMMAC",
    href: "/medicina-del-deporte/emmac",
    description: "Examen deportivo derivado a la sección de Medicina del Deporte.",
  },
  {
    icon: FileText,
    title: "Certificados Médicos de Aptitud",
    href: "#certificados-aptitud",
    description: "Conducción, deporte, estudios, viajes y aptitudes especiales.",
    accordion: true,
  },
  {
    icon: Video,
    title: "Telemedicina",
    href: "/servicios-medicos-generales/telemedicina",
    description: "Consultas online y seguimiento profesional remoto.",
  },
  {
    icon: Syringe,
    title: "Vacunatorio",
    href: "/servicios-medicos-generales/vacunatorio",
    description: "Vacunación en consultorio o domicilio con control profesional.",
  },
  {
    icon: Home,
    title: "Servicios Médicos a Domicilio",
    href: "/servicios-medicos-generales/servicios-medicos-domicilio",
    description: "Atención médica y prácticas en domicilio para pacientes que lo requieran.",
  },
  {
    icon: Apple,
    title: "Asesoramiento Nutricional",
    href: "/servicios-medicos-generales/asesoramiento-nutricional",
    description: "Planes de alimentación y seguimiento nutricional personalizado.",
  },
]

const consultasMedicas = [
  "Medicina general",
  "Clínica médica",
  "Reumatología",
  "Traumatología",
  "Medicina del deporte",
  "Cardiología",
  "Oftalmología",
  "Neumonología",
  "Diabetología",
  "Psiquiatría",
  "Kinesiología",
  "Psicología",
  "Fonoaudiología",
  "Neurología",
  "Ginecología",
  "Otorrinolaringología",
  "Dermatología",
]

const examenesComplementarios = [
  "Radiología digitalizada",
  "Ergometría",
  "MAPA",
  "HOLTER",
  "Electrocardiografía",
  "Espirometría",
  "Electroencefalografía",
  "Audiometría, logoaudiometría, sisigrama, valoración del lenguaje",
  "Ecografías",
  "Ecocardiografía",
  "Laringoscopia, fibrolaringoscopia, rinoscopia",
  "Agudeza visual, fondo de ojos",
  "PAP, colposcopia",
]

const certificadosAptitud = [
  "Certificados para carnet de conducir profesional: taxis, remises, choferes de larga distancia, entre otros.",
  "Certificado para carnet de conducir particular y sus estudios complementarios",
  "Certificados de salud para actividad física, maratones, entre otros",
  "Aptitud para uso de natatorios y piletas.",
  "Aptitud para gimnasios.",
  "Ingreso a universidades e instituciones educativas.",
  "Certificados escolares",
  "Certificados para viajes turísticos, de egresados, entre otros",
  "Certificaciones para cruceros",
  "Exámenes complementarios para carnet de timonel y embarcaciones",
  "Aptitud para ingresos a las FFAA",
  "Aptitud ANMAC (para uso de arma de fuego)",
]

export default function ServiciosMedicosClientPage() {
  return (
    <main>
      <section className="relative bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
                Servicios Médicos Generales
              </h1>
              <p className="mb-6 text-lg text-primary-foreground/80 text-pretty">
                Brindamos una amplia oferta de servicios relacionados con la salud, en consultorios y domicilios, sin internación.
              </p>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                <Link
                  href="/turnos-online"
                  className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
                >
                  Solicitar Turno
                </Link>
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
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/images/servicios-medicos-generales/banner-servicios-medicos-generales.jpg"
                alt="Servicios médicos generales en Córdoba"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl border bg-card p-6 lg:p-8">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Más sobre nuestra empresa</h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Consultora Integral de Salud CIS, es una empresa que brinda una amplia oferta de servicios relacionados con la salud. Abarcamos el primer y el segundo nivel de atención en consultorios y domicilios, sin internación.
              </p>
              <p>
                Nuestra organización cuenta con profesionales y personal capacitado en múltiples áreas. El servicio brindado es de calidad, basados en la eficiencia y la especialización, optimizando tiempos, manteniendo una comunicación fluida, solucionando problemas y adecuándonos a tu necesidad personal.
              </p>
              <p>
                Disponemos de procesos de atención eficientes, para que puedas realizar tu consulta sin demoras.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/empresa/acerca">Más sobre nuestra empresa</Link>
              </Button>
            </div>
          </div>

          <div className="mt-14">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Nuestros Servicios</h2>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                Consultas médicas, estudios, certificados y atención integral para personas, empresas e instituciones.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {servicios.map((servicio) => {
                const Icon = servicio.icon
                const card = (
                  <div className="group flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md">
                    <div className="relative h-16 w-16 flex-shrink-0 rounded-xl bg-primary/10 text-primary">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                        {servicio.title}
                        <ChevronRight className="h-4 w-4 text-primary/70" />
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{servicio.description}</p>
                    </div>
                  </div>
                )

                if (servicio.accordion) {
                  return (
                    <a key={servicio.title} href={servicio.href} className="block scroll-mt-24">
                      {card}
                    </a>
                  )
                }

                return (
                  <Link key={servicio.title} href={servicio.href} className="block">
                    {card}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="consultas-medicas" className="bg-secondary py-16 lg:py-20 scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl border bg-card p-6 lg:p-8">
            <h2 className="text-3xl font-bold text-foreground">Consultas Médicas</h2>
            <p className="mt-3 text-muted-foreground">Desplegá las especialidades disponibles y coordiná tu atención sin salir de esta página.</p>
            <Accordion type="multiple" className="mt-6">
              <AccordionItem value="consultas-medicas-list">
                <AccordionTrigger>Ver especialidades</AccordionTrigger>
                <AccordionContent>
                  <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {consultasMedicas.map((item) => (
                      <li key={item} className="rounded-lg border bg-background px-3 py-2 text-sm text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Button asChild><Link href="/turnos-online">Solicitar Turno</Link></Button>
                    <Button asChild variant="secondary"><a href="https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web" target="_blank" rel="noopener noreferrer">WhatsApp</a></Button>
                    <Button asChild variant="outline"><Link href="/contacto">Formulario de contacto</Link></Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="examenes-complementarios" className="py-16 lg:py-20 scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl border bg-card p-6 lg:p-8">
            <h2 className="text-3xl font-bold text-foreground">Exámenes Complementarios</h2>
            <p className="mt-3 text-muted-foreground">Estudios diagnósticos integrados con una propuesta ágil y organizada.</p>
            <Accordion type="multiple" className="mt-6">
              <AccordionItem value="examenes-complementarios-list">
                <AccordionTrigger>Ver opciones disponibles</AccordionTrigger>
                <AccordionContent>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {examenesComplementarios.map((item) => (
                      <li key={item} className="rounded-lg border bg-background px-3 py-2 text-sm text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Button asChild><Link href="/turnos-online">Solicitar Turno</Link></Button>
                    <Button asChild variant="secondary"><a href="https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web" target="_blank" rel="noopener noreferrer">WhatsApp</a></Button>
                    <Button asChild variant="outline"><Link href="/contacto">Formulario de contacto</Link></Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="certificados-aptitud" className="bg-secondary py-16 lg:py-20 scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl border bg-card p-6 lg:p-8">
            <h2 className="text-3xl font-bold text-foreground">Certificados Médicos de Aptitud</h2>
            <p className="mt-3 text-muted-foreground">Seleccioná la aptitud que necesitás y solicitá tu turno desde aquí.</p>
            <Accordion type="multiple" className="mt-6">
              <AccordionItem value="certificados-aptitud-list">
                <AccordionTrigger>Ver tipos de certificados</AccordionTrigger>
                <AccordionContent>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {certificadosAptitud.map((item) => (
                      <li key={item} className="rounded-lg border bg-background px-3 py-2 text-sm text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Button asChild><Link href="/turnos-online">Solicitar Turno</Link></Button>
                    <Button asChild variant="secondary"><a href="https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web" target="_blank" rel="noopener noreferrer">WhatsApp</a></Button>
                    <Button asChild variant="outline"><Link href="/contacto">Formulario de contacto</Link></Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <CTASection
        title="Atención integral en un solo lugar"
        description="Coordiná tu atención desde Solicitar Turno, WhatsApp o contacto directo."
        primaryCTA={{ text: "Solicitar Turno", href: "/turnos-online" }}
        secondaryCTA={{ text: "Más sobre nuestra empresa", href: "/empresa/acerca" }}
      />
    </main>
  )
}
