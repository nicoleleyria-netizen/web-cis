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
} from "lucide-react"

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
