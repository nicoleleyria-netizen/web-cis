import type { Metadata } from "next"
import Image from "@/components/base-path-image"
import { Microscope, FileSearch, Users, ShieldCheck, HeartPulse, GraduationCap } from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { SectionHeader } from "@/components/section-header"

export const metadata: Metadata = {
  title: "Investigación Clínica",
  description:
    "Participación en estudios clínicos e investigación médica. Desarrollo de nuevos tratamientos y terapias. Consultora CIS, Córdoba.",
}

const areas = [
  {
    icon: <Microscope className="h-6 w-6" />,
    title: "Estudios Clínicos",
    description: "Participación en ensayos clínicos de fase II, III y IV con protocolos internacionales.",
  },
  {
    icon: <FileSearch className="h-6 w-6" />,
    title: "Investigación Aplicada",
    description: "Desarrollo de estudios propios orientados a problemáticas de salud locales.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Reclutamiento de Pacientes",
    description: "Identificación y seguimiento de pacientes elegibles para estudios.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Protocolos Éticos",
    description: "Cumplimiento estricto de normativas éticas nacionales e internacionales.",
  },
  {
    icon: <HeartPulse className="h-6 w-6" />,
    title: "Seguimiento de Pacientes",
    description: "Monitoreo continuo y atención personalizada durante todo el estudio.",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Formación Continua",
    description: "Capacitación permanente del equipo en metodologías de investigación.",
  },
]

export default function InvestigacionClinicaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
                Investigación Clínica
              </h1>
              <p className="mb-6 text-lg text-primary-foreground/80 text-pretty">
                Participamos activamente en el desarrollo de nuevos tratamientos y terapias, contribuyendo al avance de
                la medicina y ofreciendo opciones terapéuticas innovadoras a nuestros pacientes.
              </p>
              <p className="text-primary-foreground/80 text-pretty">
                Nuestro equipo de investigación cuenta con amplia experiencia en la conducción de estudios clínicos bajo
                los más altos estándares de calidad y ética.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
              <Image src="/images/sis-real/recepcion-paciente.jpg" alt="Investigación Clínica" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Áreas */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Áreas de Investigación"
            description="Desarrollamos investigación en múltiples áreas terapéuticas con los más altos estándares."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <div key={area.title} className="rounded-xl border border-border bg-card p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  {area.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-xl lg:order-2">
              <Image src="/images/sis-real/director-consultorio.jpg" alt="Equipo de investigación clínica" fill className="object-cover" />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">¿Cómo Participar?</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Si estás interesado en participar en un estudio clínico, el primer paso es una evaluación para
                determinar si cumples con los criterios de inclusión del estudio.
              </p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                La participación es voluntaria y puedes retirarte en cualquier momento. Todos los estudios cuentan con
                aprobación ética y cumplimiento de normativas vigentes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Los participantes reciben atención médica especializada sin costo y contribuyen al avance de la
                medicina.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Te interesa participar en investigación?"
        description="Contáctanos para conocer los estudios activos y evaluar tu elegibilidad."
        primaryCTA={{ text: "Más información", href: "/contacto" }}
      />
    </>
  )
}
