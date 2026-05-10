import type { ReactNode } from "react"
import Link from "next/link"
import Image from "@/components/base-path-image"
import { AreaHeroBanner } from "@/components/area-hero-banner"
import { StudyTurnoForm } from "@/components/studies/study-turno-form"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { LatestArticlesSection } from "@/components/latest-articles-section"

type Section = { title: string; content: ReactNode }

type Props = {
  titulo: string
  resumen: string
  image: string
  imageAlt: string
  descripcion: string[]
  incluye?: string[]
  requisitos?: string[]
  sections?: Section[]
}

export function StudyPage({ titulo, resumen, image, imageAlt, descripcion, incluye = [], requisitos = [], sections = [] }: Props) {
  return (
    <>
      <AreaHeroBanner
        title={titulo}
        summary={resumen}
        heroImage={image}
        heroAlt={imageAlt}
        actions={[
          {
            text: "Solicitar Turno",
            href: "/turnos-online",
            className: "border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700 hover:border-emerald-700",
          },
          {
            text: "WhatsApp",
            href: "https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web",
            external: true,
            className: "border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50",
          },
          {
            text: "Formulario de contacto",
            href: "/contacto",
            className: "border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50",
          },
        ]}
      />

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-2xl border bg-card p-6 lg:p-8">
              <h2 className="text-2xl font-semibold text-foreground">Descripción del servicio</h2>
              <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
                {descripcion.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {(incluye.length > 0 || requisitos.length > 0) && (
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {incluye.length > 0 && (
                    <div className="rounded-xl border bg-background p-4">
                      <h3 className="font-semibold mb-2">Qué incluye</h3>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        {incluye.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {requisitos.length > 0 && (
                    <div className="rounded-xl border bg-background p-4">
                      <h3 className="font-semibold mb-2">Requisitos</h3>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        {requisitos.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="rounded-2xl border bg-secondary p-6 lg:p-8">
              <h2 className="text-2xl font-semibold text-foreground">Contacto rápido</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Si querés resolverlo rápido, podés usar alguno de estos accesos.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/turnos-online">Solicitar Turno</Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent">
                  <a href="https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/contacto">Formulario de contacto</Link>
                </Button>
                <Button asChild variant="secondary">
                  <a href="https://misaludmedica.com/Companies.html?institution=cis" target="_blank" rel="noopener noreferrer">
                    Portal Empresa
                  </a>
                </Button>
                <Button asChild variant="secondary">
                  <a href="https://misaludmedica.com/Home.html?institution=cis" target="_blank" rel="noopener noreferrer">
                    Portal Paciente
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {sections.length > 0 && (
            <div className="mt-10 grid gap-6">
              {sections.map((section) => (
                <div key={section.title} className="rounded-2xl border bg-card p-6 lg:p-8">
                  <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
                  <div className="mt-4 text-muted-foreground leading-relaxed">{section.content}</div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-10 rounded-2xl border bg-card p-6 lg:p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Formulario de contacto</h3>
            <StudyTurnoForm estudio={titulo} />
          </div>

          <div className="mt-10 rounded-2xl border bg-card p-4 lg:p-5">
            <div className="relative aspect-video overflow-hidden rounded-xl border">
              <Image src={image} alt={imageAlt} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Querés reservar este estudio?"
        description="Te ayudamos a gestionar el turno de forma rápida por WhatsApp o formulario."
        primaryCTA={{ text: "Pedir turno", href: "/contacto" }}
        whatsappCTA
      />

      <LatestArticlesSection />
    </>
  )
}
