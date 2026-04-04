import type { Metadata } from "next"
import Image from "@/components/base-path-image"
import { Users, Heart, TrendingUp, Award } from "lucide-react"
import { JobApplicationForm } from "@/components/job-application-form"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Trabaja con Nosotros - Oportunidades Laborales",
  description:
    "Únete al equipo de Consultora CIS. Buscamos profesionales de la salud comprometidos. Envía tu CV y sé parte de una empresa con +18 años de trayectoria en Córdoba.",
  openGraph: {
    title: "Trabaja con Nosotros - Consultora CIS",
    description:
      "Oportunidades laborales en medicina laboral y consultoría en salud. Únete a nuestro equipo.",
    images: ["/images/sis-real/equipo-trabajo-cis.jpg"],
  },
  alternates: {
    canonical: "/trabaja-con-nosotros",
  },
}

const benefits = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Equipo Profesional",
    description: "Trabaja junto a profesionales de la salud altamente capacitados.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Impacto Positivo",
    description: "Contribuye a mejorar la salud de miles de personas y empresas.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Desarrollo Continuo",
    description: "Oportunidades de capacitación y crecimiento profesional.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Reconocimiento",
    description: "Valoramos y reconocemos el esfuerzo y dedicación de nuestro equipo.",
  },
]

export default function TrabajaConNosotrosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
            Trabaja con Nosotros
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80 text-pretty">
            Buscamos profesionales comprometidos con la salud y el bienestar. Únete a nuestro equipo y sé parte de una
            empresa en crecimiento.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">¿Por qué trabajar en CIS?</h2>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Somos una empresa con más de 18 años de experiencia en el campo de la salud, orientados a la medicina
                laboral y a los servicios médicos integrales. Buscamos personas apasionadas por la medicina y el bienestar de
                las personas.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl lg:aspect-[4/3]">
              <Image
                src="/images/sis-real/equipo-trabajo-cis.jpg"
                alt="Equipo de trabajo en Consultora CIS"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-2 text-center text-3xl font-bold text-foreground">Envía tu postulación</h2>
            <p className="mb-8 text-center text-muted-foreground">
              Completa el formulario y adjunta tu CV. Nos pondremos en contacto contigo.
            </p>
            <div className="rounded-xl bg-card p-6 shadow-sm lg:p-8">
              <JobApplicationForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Tienes preguntas?"
        description="No dudes en contactarnos si tienes alguna consulta sobre oportunidades laborales."
        primaryCTA={{ text: "Contactar", href: "/contacto" }}
        whatsappCTA={true}
      />
    </>
  )
}
