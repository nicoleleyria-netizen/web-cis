"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Stethoscope,
  FlaskConical,
  FileText,
  Video,
  Pill,
  Activity,
  HeartPulse,
  Syringe,
  Home,
  Apple,
  MousePointer,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const servicios = [
  {
    id: "consultas-medicas",
    icon: Stethoscope,
    title: "Consultas Médicas",
    href: "/servicios-medicos-generales/consultas-medicas",
    image: "/images/servicios-medicos-generales/consultas-medicas.png",
    description: "Atención médica profesional con especialistas en diversas áreas de la salud.",
  },
  {
    id: "laboratorio",
    icon: FlaskConical,
    title: "Laboratorio de Análisis Clínicos",
    href: "/servicios-medicos-generales/laboratorio-analisis-clinicos",
    image: "/images/servicios-medicos-generales/servicios-medicos-generales.png",
    description: "Análisis clínicos de baja y alta complejidad con estándares de calidad y bioseguridad.",
  },
  {
    id: "certificados-aptitud",
    icon: FileText,
    title: "Certificados Médicos de Aptitud",
    href: "/servicios-medicos-generales/certificados-medicos-aptitud",
    image: "/images/servicios-medicos-generales/certificados-medicos-aptitud.png",
    description: "Certificaciones médicas para distintas actividades y requisitos específicos.",
  },
  {
    id: "telemedicina",
    icon: Video,
    title: "Telemedicina",
    href: "/servicios-medicos-generales/telemedicina",
    image: "/images/servicios-medicos-generales/servicios-medicos-generales.png",
    description: "Consultas médicas a distancia y seguimiento profesional remoto.",
  },
  {
    id: "infusion-medicamentos",
    icon: Pill,
    title: "Infusión de Medicamentos",
    href: "/servicios-medicos-generales/infusion-medicamentos",
    image: "/images/servicios-medicos-generales/servicios-medicos-generales.png",
    description: "Hospital de día para administración de medicación con supervisión médica.",
  },
  {
    id: "examenes-complementarios",
    icon: Activity,
    title: "Exámenes Complementarios",
    href: "/servicios-medicos-generales/examenes-complementarios",
    image: "/images/servicios-medicos-generales/servicios-medicos-generales.png",
    description: "Estudios diagnósticos para evaluación integral de salud.",
  },
  {
    id: "chequeo-preventivo",
    icon: HeartPulse,
    title: "Chequeo Médico Preventivo",
    href: "/servicios-medicos-generales/chequeo-medico-preventivo",
    image: "/images/servicios-medicos-generales/chequeo-medico-preventivo.png",
    description: "Evaluación preventiva para detección temprana de factores de riesgo.",
  },
  {
    id: "vacunatorio",
    icon: Syringe,
    title: "Vacunatorio",
    href: "/servicios-medicos-generales/vacunatorio",
    image: "/images/servicios-medicos-generales/servicios-medicos-generales.png",
    description: "Aplicación de vacunas del calendario y especiales según indicación.",
  },
  {
    id: "servicios-domicilio",
    icon: Home,
    title: "Servicios Médicos a Domicilio",
    href: "/servicios-medicos-generales/servicios-medicos-domicilio",
    image: "/images/servicios-medicos-generales/servicios-medicos-generales.png",
    description: "Atención y prácticas médicas en domicilio para pacientes que lo requieran.",
  },
  {
    id: "asesoramiento-nutricional",
    icon: Apple,
    title: "Asesoramiento Nutricional",
    href: "/servicios-medicos-generales/asesoramiento-nutricional",
    image: "/images/servicios-medicos-generales/asesoramiento-nutricional.jpeg",
    description: "Planes de alimentación personalizados y seguimiento profesional.",
  },
  {
    id: "certificado-escolar",
    icon: FileText,
    title: "Certificado Escolar",
    href: "/servicios-medicos-generales/certificado-escolar",
    image: "/images/servicios-medicos-generales/certificado-escolar.png",
    description: "Apto médico escolar en consultorio o con operativos para instituciones.",
  },
  {
    id: "emmac",
    icon: Activity,
    title: "EMMAC",
    href: "/servicios-medicos-generales/emmac",
    image: "/images/servicios-medicos-generales/emmac.png",
    description: "Examen Médico para Mediana y Alta Competencia para comunidad deportiva.",
  },
]

export default function ServiciosMedicosClientPage() {
  return (
    <main>
      <section className="relative flex h-[60vh] min-h-[400px] items-center justify-center overflow-hidden">
        <Image
          src="/images/servicios-medicos-generales/servicios-medicos-generales.png"
          alt="Servicios Médicos Generales"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">Servicios Médicos Generales</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80 sm:text-xl">Atención médica integral para empresas y particulares</p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <MousePointer className="h-6 w-6 text-white/70" />
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Nuestros Servicios</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Hacé click en cada servicio para ver información ampliada y solicitar turno.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {servicios.map((servicio) => {
              const Icon = servicio.icon
              return (
                <Link
                  key={servicio.id}
                  href={servicio.href}
                  className="group flex gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:shadow-md"
                >
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={servicio.image}
                      alt={servicio.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="64px"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-md bg-white/90 text-primary">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">{servicio.title}</h3>
                    <p className="mt-1 text-muted-foreground">{servicio.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Atención Integral</h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
              En CIS contamos con un equipo multidisciplinario de profesionales comprometidos con brindar atención accesible, eficiente y personalizada.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contacto">Solicitar turno</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
