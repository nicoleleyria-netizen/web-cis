import type { ReactNode } from "react"
import Link from "next/link"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { AreaHeroBanner, type AreaHeroAction } from "@/components/area-hero-banner"
import { StudyTurnoForm } from "@/components/studies/study-turno-form"
import { LatestArticlesSection } from "@/components/latest-articles-section"

export type ServiceInfoPageProps = {
  title: string
  summary: string
  heroImage: string
  heroAlt: string
  intro: string[]
  sections?: Array<{
    title: string
    content: ReactNode
  }>
  actions?: AreaHeroAction[]
  bottomTitle?: string
  bottomDescription?: string
}

export function ServiceInfoPage({
  title,
  summary,
  heroImage,
  heroAlt,
  intro,
  sections = [],
  actions = [],
  bottomTitle = "¿Querés coordinar tu atención?",
  bottomDescription = "Podés hacerlo por solicitar turno, WhatsApp o desde la página de contacto.",
}: ServiceInfoPageProps) {
  return (
    <>
      <AreaHeroBanner title={title} summary={summary} heroImage={heroImage} heroAlt={heroAlt} actions={actions} />

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-2xl border bg-card p-6 lg:p-8">
              <h2 className="text-2xl font-semibold text-foreground">Descripción del servicio</h2>
              <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
                {intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
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

          <div className="mt-10">
            <StudyTurnoForm estudio={title} />
          </div>
        </div>
      </section>

      <CTASection
        title={bottomTitle}
        description={bottomDescription}
        primaryCTA={{ text: "Solicitar Turno", href: "/turnos-online" }}
        secondaryCTA={{ text: "Formulario de contacto", href: "/contacto" }}
        whatsappCTA
      />

      <LatestArticlesSection />
    </>
  )
}
