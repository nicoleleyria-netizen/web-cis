"use client"

import { useState } from "react"
import Image from "@/components/base-path-image"
import Link from "next/link"
import {
  FileCheck,
  Stethoscope,
  Users,
  Building,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  MousePointer,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const servicios = [
  {
    id: "examenes-medicos",
    icon: FileCheck,
    title: "Exámenes Médicos de Aptitud",
    image: "/images/medicina-laboral/examenes-medicos-aptitud.png",
    items: [
      { label: "Examen Preocupacional", href: "/medicina-laboral/examen-preocupacional" },
      { label: "Examen Periódico de Aptitud", href: "/medicina-laboral/examen-periodico-aptitud" },
      { label: "Examen de Egreso (Post ocupacional)", href: "/medicina-laboral/examen-egreso-post-ocupacional" },
      { label: "Exámenes Complementarios Especiales", href: "/medicina-laboral/examenes-complementarios-especiales" },
      { label: "Examen Previo a una Transferencia de Actividad", href: "/medicina-laboral/examen-previo-transferencia-actividad" },
      { label: "Examen Posterior a una Ausencia Prolongada", href: "/medicina-laboral/examen-posterior-ausencia-prolongada" },
      { label: "Exámenes para trabajo en altura / física o geográfica (altitud)", href: "/medicina-laboral/examenes-trabajo-altura-altitud" },
      { label: "Exámenes psicotécnicos / Psicodiagnóstico", href: "/medicina-laboral/examen-psicotecnico-psicodiagnostico" },
      { label: "Test de detección de drogas y abuso de alcohol", href: "/medicina-laboral/test-deteccion-drogas-abuso-alcohol" },
      { label: "Chequeo médico preventivo", href: "/medicina-laboral/chequeo-medico-preventivo" },
    ],
  },
  {
    id: "control-ausentismo",
    icon: Users,
    title: "Control de Ausentismo",
    image: "/images/medicina-laboral/control-ausentismo.png",
    items: [
      "Control de ausentismo en domicilio",
      "Control de ausentismo en consultorios",
      "Ausentismo diferenciado",
      "Programa de gestión de ausentismo integral",
    ],
  },
  {
    id: "atencion-medica",
    icon: Stethoscope,
    title: "Atención Médica",
    image: "/images/medicina-laboral/atencion-medica.png",
    items: [
      "Atención primaria de empleados (atención médica inicial)",
      "Interconsultas médicas (todas las especialidades)",
      "Rehabilitación por patologías laborales / accidentes / enfermedades profesionales",
      "Exámenes complementarios: Audiometría, Ecografía, ECG, EEG, Ergometría, Espirometría, Fibrolaringoscopía, Laboratorio integral, Control de abuso de sustancias, Radiología digital",
    ],
  },
  {
    id: "gestion-salud",
    icon: Building,
    title: "Gestión de la Salud en la Empresa",
    image: "/images/medicina-laboral/gestion-salud-empresa.png",
    items: [
      "Servicios permanentes en planta (médico laboral, enfermería)",
      "Exámenes en planta con unidades móviles",
      "Campañas de vacunación en planta o a domicilio",
      "Logística/derivación de casos complejos",
      "Programas odontológicos corporativos",
      "Programas nutricionales corporativos",
      "Ergonomía y perfil de puesto",
    ],
  },
  {
    id: "asesoramiento-salud",
    icon: ShieldCheck,
    title: "Asesoramiento en Salud Ocupacional",
    image: "/images/medicina-laboral/asesoramiento-salud-ocupacional.png",
    items: [
      "Estrategias de salud ocupacional",
      "Creación y gestión de Legajo de Salud",
      "Procedimientos personalizados para casos problema",
      "Servicios de prevención en salud",
      "Asesoramiento médico legal",
    ],
  },
]

export default function MedicinaLaboralClientPage() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex h-[60vh] min-h-[400px] items-center justify-center overflow-hidden">
        <Image
          src="/images/medicina-laboral/atencion-medica.png"
          alt="Equipo médico profesional especializado en medicina laboral y salud ocupacional"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">Medicina Laboral</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80 sm:text-xl">
            Soluciones integrales en salud ocupacional para empresas
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <MousePointer className="h-6 w-6 text-white/70" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Nuestros Servicios</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Contamos con una amplia gama de servicios diseñados para cuidar la salud de su equipo de trabajo
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {servicios.map((servicio) => {
              const isOpen = openId === servicio.id
              const Icon = servicio.icon

              return (
                <div
                  key={servicio.id}
                  className={`rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md ${
                    isOpen ? "md:col-span-2" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(servicio.id)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative h-14 w-14 overflow-hidden rounded-lg">
                        <Image
                          src={servicio.image}
                          alt={servicio.title}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-md bg-white/90 text-primary">
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{servicio.title}</h3>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="border-t border-border px-6 pb-6 pt-4">
                      <ul className={`grid gap-2 ${isOpen ? "md:grid-cols-2 lg:grid-cols-3" : ""}`}>
                        {servicio.items.map((item, index) => {
                          const isLink = typeof item !== "string"
                          return (
                            <li key={index} className="flex items-start gap-2 text-muted-foreground">
                              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                              {isLink ? (
                                <Link
                                  href={item.href}
                                  className="rounded px-1 -mx-1 transition-colors hover:bg-primary/10 hover:text-primary underline-offset-4 hover:underline"
                                >
                                  {item.label}
                                </Link>
                              ) : (
                                <span>{item}</span>
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-xl border bg-card p-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/turnos-online"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
            >
              Turno Online
            </Link>
            <a
              href="https://misaludmedica.com/Companies.html?institution=cis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              Portal Empresas
            </a>
          </div>
        </div>
      </section>

      {/* Objective Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Nuestro Objetivo</h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
              En CIS, nuestro objetivo es brindar un servicio integral de salud ocupacional que permita a las empresas
              cumplir con la normativa vigente, mientras cuidamos la salud de sus trabajadores de manera preventiva y
              eficiente.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contacto">Solicitar información</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
