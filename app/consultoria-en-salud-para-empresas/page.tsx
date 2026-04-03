import type { Metadata } from "next"
import Image from "next/image"
import { Building2, TrendingUp, Users, Shield, BarChart, Lightbulb } from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { SectionHeader } from "@/components/section-header"

export const metadata: Metadata = {
  title: "Consultoría en Salud para Empresas",
  description:
    "Asesoramiento integral en salud corporativa, bienestar organizacional y gestión de riesgos laborales. Consultora CIS, Córdoba.",
}

const servicios = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Diagnóstico Organizacional",
    description: "Evaluación integral del estado de salud de tu organización y sus colaboradores.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Programas de Bienestar",
    description: "Diseño e implementación de programas de wellness corporativo a medida.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Gestión de Ausentismo",
    description: "Estrategias para reducir el ausentismo y mejorar la productividad.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Prevención de Riesgos",
    description: "Identificación y mitigación de riesgos laborales en tu empresa.",
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Indicadores de Salud",
    description: "Seguimiento de KPIs de salud organizacional y reportes periódicos.",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Capacitación",
    description: "Talleres y charlas sobre salud, prevención y bienestar laboral.",
  },
]

export default function ConsultoriaEmpresasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
                Consultoría en Salud para Empresas
              </h1>
              <p className="mb-6 text-lg text-primary-foreground/80 text-pretty">
                Asesoramos a empresas de todos los tamaños en la gestión integral de la salud de sus colaboradores,
                mejorando el bienestar organizacional y la productividad.
              </p>
              <p className="text-primary-foreground/80 text-pretty">
                Desarrollamos soluciones personalizadas que se adaptan a las necesidades específicas de cada
                organización.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/corporate-health-consulting-business-meeting-welln.jpg"
                alt="Consultoría en Salud para Empresas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Nuestros Servicios de Consultoría"
            description="Ofrecemos un enfoque integral para la gestión de la salud en tu empresa."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicios.map((servicio) => (
              <div key={servicio.title} className="rounded-xl border border-border bg-card p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  {servicio.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{servicio.title}</h3>
                <p className="text-sm text-muted-foreground">{servicio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/images/sis-real/recepcion-espera.jpg"
                alt="Beneficios de la consultoría en salud"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">Beneficios para tu Empresa</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                  <div>
                    <p className="font-medium text-foreground">Reducción del ausentismo</p>
                    <p className="text-sm text-muted-foreground">
                      Programas preventivos que disminuyen las ausencias por enfermedad.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                  <div>
                    <p className="font-medium text-foreground">Mayor productividad</p>
                    <p className="text-sm text-muted-foreground">
                      Colaboradores saludables rinden mejor y están más comprometidos.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                  <div>
                    <p className="font-medium text-foreground">Cumplimiento normativo</p>
                    <p className="text-sm text-muted-foreground">
                      Aseguramos el cumplimiento de todas las regulaciones en salud ocupacional.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                  <div>
                    <p className="font-medium text-foreground">Mejor clima laboral</p>
                    <p className="text-sm text-muted-foreground">
                      Invertir en bienestar mejora la satisfacción y retención del talento.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Quieres mejorar la salud de tu empresa?"
        description="Agenda una reunión con nuestros consultores y conoce cómo podemos ayudarte."
        primaryCTA={{ text: "Solicitar reunión", href: "/contacto" }}
      />
    </>
  )
}
