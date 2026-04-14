import type { ReactNode } from "react"
import Link from "next/link"
import Image from "@/components/base-path-image"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"

export type ServiceAction = {
  text: string
  href: string
  external?: boolean
  variant?: "default" | "secondary" | "outline"
}

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
  actions?: ServiceAction[]
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
      <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image src={heroImage} alt={heroAlt} fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80" />
        <div className="container relative mx-auto grid gap-8 px-4 lg:grid-cols-2 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl text-balance">{title}</h1>
            <p className="mt-4 text-lg text-primary-foreground/85 text-pretty">{summary}</p>
            {actions.length > 0 && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {actions.map((action) => (
                  <Button key={action.text} asChild variant={action.variant ?? "secondary"} size="lg">
                    {action.external ? (
                      <a href={action.href} target="_blank" rel="noopener noreferrer">
                        {action.text}
                      </a>
                    ) : (
                      <Link href={action.href}>{action.text}</Link>
                    )}
                  </Button>
                ))}
              </div>
            )}
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur">
            <Image src={heroImage} alt={heroAlt} fill className="object-cover" priority />
          </div>
        </div>
      </section>

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
        </div>
      </section>

      <CTASection
        title={bottomTitle}
        description={bottomDescription}
        primaryCTA={{ text: "Solicitar Turno", href: "/turnos-online" }}
        secondaryCTA={{ text: "Formulario de contacto", href: "/contacto" }}
        whatsappCTA
      />
    </>
  )
}
