import type { Metadata } from "next"
import Image from "@/components/base-path-image"

export const metadata: Metadata = {
  title: "Nuestra Historia - Trayectoria desde 2006",
  description:
    "Conoce la historia de Consultora CIS: desde nuestra fundación en 2006 en Córdoba hasta convertirnos en referentes en salud ocupacional con cobertura nacional.",
  openGraph: {
    title: "Nuestra Historia - Consultora CIS",
    description:
      "Desde 2006 brindando soluciones integrales de salud ocupacional en Argentina.",
    images: ["/images/sis-real/reunion-equipo.jpg"],
  },
  alternates: {
    canonical: "/empresa/historia",
  },
}

const timeline = [
  {
    year: "2006",
    title: "Fundación",
    description: "Consultora CIS nace en Córdoba con la visión de brindar soluciones integrales en salud ocupacional.",
  },
  {
    year: "2010",
    title: "Expansión de Servicios",
    description: "Incorporamos nuevos servicios de medicina del deporte e investigación clínica.",
  },
  {
    year: "2015",
    title: "Cobertura Nacional",
    description: "Ampliamos nuestra red de profesionales para brindar cobertura en todo el país.",
  },
  {
    year: "2020",
    title: "Innovación Digital",
    description: "Implementamos plataformas digitales para mejorar la experiencia de nuestros clientes.",
  },
  {
    year: "2024",
    title: "18 Años de Excelencia",
    description: "Celebramos más de 18 años de trayectoria, consolidándonos como líderes en el sector.",
  },
]

export default function HistoriaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl text-balance">Nuestra Historia</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80 text-pretty">
            Más de 18 años de compromiso con la salud de empresas y personas.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">Cómo Comenzamos</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Consultora CIS nació en 2006 en la ciudad de Córdoba, Argentina, con una visión clara: brindar
                soluciones integrales y personalizadas en el campo de la salud ocupacional.
              </p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Desde nuestros inicios, nos propusimos ir más allá de los servicios médicos tradicionales, entendiendo
                que la salud en el ámbito laboral requiere un enfoque integral que combine prevención, tratamiento y
                acompañamiento continuo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A lo largo de los años, hemos crecido y evolucionado, incorporando nuevos servicios, tecnologías y
                profesionales para satisfacer las crecientes necesidades de nuestros clientes.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/images/sis-real/nuestra-historia-como-comenzamos.jpg"
                alt="Cómo comenzamos - Consultora CIS"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Línea de Tiempo</h2>
          <div className="relative">
            <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-border lg:block" />
            <div className="space-y-8 lg:space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex flex-col gap-4 lg:flex-row lg:items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div
                      className={`rounded-xl bg-card p-6 shadow-sm ${
                        index % 2 === 0 ? "lg:ml-auto lg:mr-8" : "lg:ml-8 lg:mr-auto"
                      } lg:max-w-md`}
                    >
                      <span className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                        {item.year}
                      </span>
                      <h3 className="mb-2 text-xl font-bold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden h-4 w-4 flex-shrink-0 rounded-full bg-accent lg:block" />
                  <div className="hidden flex-1 lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
