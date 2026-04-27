"use client"

import Link from "next/link"
import { Activity, ArrowRight, ChevronRight, FileText, FlaskConical, HeartPulse, List, Pill, Stethoscope, Video } from "lucide-react"
import Image from "@/components/base-path-image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PostCard } from "@/components/post-card"
import { TurneroButton } from "@/components/turnero-button"

const servicios = [
  {
    icon: Stethoscope,
    title: "Consultas Médicas",
    href: "#consultas-medicas",
    description: "Medicina general, clínica médica, reumatología, traumatología y más especialidades.",
    accordion: true,
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
    icon: Pill,
    title: "Infusión de Medicamentos",
    href: "/servicios-medicos-generales/infusion-medicamentos",
    description: "Centro ambulatorio para administración de medicación con supervisión médica.",
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
    description: "Examen Médico de Mediana y Alta Competencia, obligatorio según normativa provincial.",
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
    description: "Consultas online con profesionales médicos desde cualquier lugar.",
  },
]

const latestArticles = [
  {
    title: "Investigación y cuidado en esclerosis sistémica: la importancia del diagnóstico temprano",
    excerpt: "La esclerosis sistémica es una de esas enfermedades que desafían tanto al cuerpo como a la ciencia. Poco frecuente, compleja y aún sin cura definitiva...",
    slug: "investigacion-esclerosis-sistemica",
    publishedAt: "2025-10-27",
    categories: [{ title: "Investigación Clínica", slug: "investigacion-clinica" }, { title: "Salud en General", slug: "salud-en-general" }],
  },
  {
    title: "Los 5 secretos de la caminata rápida: más beneficios en menos tiempo",
    excerpt: "La caminata quizás sea la actividad más popular y accesible para todo el mundo a la hora de comenzar o mantener una rutina de ejercicio...",
    slug: "secretos-caminata-rapida",
    publishedAt: "2025-10-16",
    categories: [{ title: "Medicina del Deporte", slug: "medicina-del-deporte" }, { title: "Salud en General", slug: "salud-en-general" }],
  },
  {
    title: "Las 4A para gestionar el estrés: una estrategia práctica para la vida cotidiana",
    excerpt: "Parece que la vida y nuestras rutinas cotidianas cada vez se hacen más pesadas, más rápidas, más demandantes...",
    slug: "4a-gestionar-estres",
    publishedAt: "2025-10-16",
    categories: [{ title: "Medicina Laboral", slug: "medicina-laboral" }, { title: "Salud en General", slug: "salud-en-general" }],
  },
]

const consultasMedicas = [
  "Medicina general",
  "Clínica médica",
  "Reumatología",
  "Traumatología",
  "Osteología",
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
  "Endocrinología",
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

          <div id="nuestros-servicios" className="mt-14">
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

      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Últimos Artículos</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Mantente informado con nuestras publicaciones sobre salud, medicina y bienestar.
            </p>
          </div>
          <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <PostCard key={article.slug} {...article} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="https://consultoracis.com.ar/blog" target="_blank" rel="noopener noreferrer">
                Ver todos los artículos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
