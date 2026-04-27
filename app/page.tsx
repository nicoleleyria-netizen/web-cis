import Link from "next/link"
import Image from "@/components/base-path-image"
import { ArrowRight, MapPin, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"
import { PostCard } from "@/components/post-card"
import { CTASection } from "@/components/cta-section"
import { SectionHeader } from "@/components/section-header"
import { HeroCarousel } from "@/components/hero-carousel"

const services = [
  {
    title: "Medicina Laboral",
    description: "Exámenes preocupacionales, periódicos, y servicios de salud ocupacional para empresas.",
    href: "/medicina-laboral",
    image: "/images/medicina-laboral/banner-2-medicina-laboral.jpg",
  },
  {
    title: "Servicios Médicos Generales",
    description: "Atención médica integral con profesionales en múltiples especialidades.",
    href: "/servicios-medicos-generales",
    image: "/images/servicios-medicos-generales/banner-2-servicios-medicos-generales.jpg",
  },
  {
    title: "Medicina del Deporte",
    description: "Exámenes de aptitud física, EMMAC y asesoramiento para deportistas.",
    href: "/medicina-del-deporte",
    image: "/images/medicina-del-deporte/banner-2-medicina-del-deporte.jpg",
  },
]

const latestArticles = [
  {
    title: "Investigación y cuidado en esclerosis sistémica: la importancia del diagnóstico temprano",
    excerpt:
      "La esclerosis sistémica es una de esas enfermedades que desafían tanto al cuerpo como a la ciencia. Poco frecuente, compleja y aún sin cura definitiva...",
    slug: "investigacion-esclerosis-sistemica",
    publishedAt: "2025-10-27",
    categories: [
      { title: "Investigación Clínica", slug: "investigacion-clinica" },
      { title: "Salud en General", slug: "salud-en-general" },
    ],
  },
  {
    title: "Los 5 secretos de la caminata rápida: más beneficios en menos tiempo",
    excerpt:
      "La caminata quizás sea la actividad más popular y accesible para todo el mundo a la hora de comenzar o mantener una rutina de ejercicio...",
    slug: "secretos-caminata-rapida",
    publishedAt: "2025-10-16",
    categories: [
      { title: "Medicina del Deporte", slug: "medicina-del-deporte" },
      { title: "Salud en General", slug: "salud-en-general" },
    ],
  },
  {
    title: "Las 4A para gestionar el estrés: una estrategia práctica para la vida cotidiana",
    excerpt:
      "Parece que la vida y nuestras rutinas cotidianas cada vez se hacen más pesadas, más rápidas, más demandantes...",
    slug: "4a-gestionar-estres",
    publishedAt: "2025-10-16",
    categories: [
      { title: "Medicina Laboral", slug: "medicina-laboral" },
      { title: "Salud en General", slug: "salud-en-general" },
    ],
  },
]

const stats = [
  { value: "+18", label: "Años de experiencia", icon: <Award className="h-6 w-6" /> },
  { value: "Nacional", label: "Cobertura en Argentina", icon: <MapPin className="h-6 w-6" /> },
  { value: "+1000", label: "Empresas atendidas", icon: <Users className="h-6 w-6" /> },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroCarousel />

      {/* Stats Section */}
      <section className="border-b border-border bg-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Áreas Principales"
            description="Ofrecemos una variedad de servicios médicos integrales orientados a resolver las diferentes necesidades de cada cliente."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block mb-4 text-sm font-semibold text-primary uppercase tracking-wider">
                Sobre Nosotros
              </span>
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl text-balance">Quiénes Somos</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Somos una empresa de servicios con más de 18 años de experiencia acompañando y asesorando a nuestros
                clientes (empresas, instituciones y personas); en la búsqueda de soluciones de salud.
              </p>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Ofrecemos una variedad de servicios médicos integrales orientados a resolver las diferentes necesidades
                de cada cliente. Buscamos que cada solución sea eficiente, personalizada y adaptada a cada situación.
              </p>
              <Button asChild size="lg">
                <Link href="/empresa/acerca">
                  Conózcanos mejor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
              <Image
                src="/images/sis-real/equipo-trabajo-cis.jpg"
                alt="Equipo profesional de Consultora CIS brindando atención médica integral"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-2 border-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Últimos Artículos"
            description="Mantente informado con nuestras publicaciones sobre salud, medicina laboral y bienestar."
          />
          <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <PostCard key={article.slug} {...article} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/articulos">
                Ver todos los artículos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Sumate a nuestro equipo"
        description="Estamos en búsqueda de profesionales comprometidos con la calidad y la innovación en salud."
        primaryCTA={{ text: "Trabaja con nosotros", href: "/trabaja-con-nosotros" }}
        whatsappCTA={false}
      />
    </>
  )
}
