"use client"

import Link from "next/link"
import Image from "@/components/base-path-image"
import { Button } from "@/components/ui/button"

export type HeroServiceAction = {
  text: string
  href: string
  external?: boolean
  variant?: "default" | "secondary" | "outline"
  className?: string
}

type HeroServiceProps = {
  title: string
  summary: string
  heroImage: string
  heroAlt: string
  actions?: HeroServiceAction[]
  eyebrow?: string
}

export function HeroService({ title, summary, heroImage, heroAlt, actions = [], eyebrow }: HeroServiceProps) {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="relative">
        <div className="container mx-auto px-4 py-12 lg:py-16 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="text-white">
              {eyebrow ? <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-white/80">{eyebrow}</p> : null}
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
              <p className="mt-4 max-w-xl text-lg text-white/90">{summary}</p>

              {actions.length > 0 && (
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {actions.map((action, idx) => {
                    let btnClass = action.className
                    if (!btnClass) {
                      if (idx === 0) {
                        // Primary: white background, teal text
                        btnClass = "bg-white text-primary hover:bg-white/90"
                      } else if (idx === 1) {
                        // Secondary: transparent with white border, white text
                        btnClass = "bg-transparent border-2 border-white text-white hover:bg-white/10"
                      } else {
                        // Tertiary: semi-transparent white, teal text
                        btnClass = "bg-white/20 text-white hover:bg-white/30 border border-white/30"
                      }
                    }
                    return (
                      <Button key={action.text} asChild size="lg" variant="default" className={btnClass}>
                        {action.external ? (
                          <a href={action.href} target="_blank" rel="noopener noreferrer">
                            {action.text}
                          </a>
                        ) : (
                          <Link href={action.href}>{action.text}</Link>
                        )}
                      </Button>
                    )
                  })}
                </div>
              )}
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="aspect-video w-full rounded-2xl border border-white/10 overflow-hidden shadow-lg md:w-96">
                <Image src={heroImage} alt={heroAlt} width={500} height={300} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroService
