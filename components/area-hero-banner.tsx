"use client"

import Link from "next/link"
import Image from "@/components/base-path-image"
import { Button } from "@/components/ui/button"

export type AreaHeroAction = {
  text: string
  href: string
  external?: boolean
  variant?: "default" | "secondary" | "outline"
  className?: string
}

type AreaHeroBannerProps = {
  title: string
  summary: string
  heroImage: string
  heroAlt: string
  actions?: AreaHeroAction[]
  eyebrow?: string
}

export function AreaHeroBanner({ title, summary, heroImage, heroAlt, actions = [], eyebrow }: AreaHeroBannerProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={heroImage} alt={heroAlt} fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.8),rgba(0,0,0,0.55),rgba(0,0,0,0.35))]" />
      <div className="relative">
        <div className="container mx-auto flex min-h-[420px] items-center px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center text-white">
            {eyebrow ? <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-white/70">{eyebrow}</p> : null}
            <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl">{title}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85 text-pretty">{summary}</p>
            {actions.length > 0 ? (
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                {actions.map((action) => (
                  <Button key={action.text} asChild variant={action.variant ?? "secondary"} size="lg" className={action.className}>
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
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}