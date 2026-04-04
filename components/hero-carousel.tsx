"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "@/components/base-path-image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    title: "Medicina Laboral",
    subtitle: "Más de 18 años cuidando la salud de tu empresa",
    cta: { text: "Conocer más", href: "/medicina-laboral" },
    image: "/images/sis-real/recepcion-paciente.jpg",
  },
  {
    id: 2,
    title: "Servicios Médicos Generales",
    subtitle: "Atención integral con profesionales de todas las especialidades",
    cta: { text: "Conocer más", href: "/servicios-medicos-generales" },
    image: "/images/sis-real/recepcion-espera.jpg",
  },
  {
    id: 3,
    title: "Medicina del Deporte",
    subtitle: "Evaluación y seguimiento para deportistas de todos los niveles",
    cta: { text: "Conocer más", href: "/medicina-del-deporte" },
    image: "/images/medicina-del-deporte/hero.png",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const handleTurnoOnline = () => {
    const fn = (window as any).ShowReservationArea
    if (typeof fn === "function") {
      fn()
      return
    }
    setTimeout(() => {
      const retry = (window as any).ShowReservationArea
      if (typeof retry === "function") retry()
      else window.open("https://misaludmedica.com/Home.html?institution=cis", "_blank", "noopener,noreferrer")
    }, 700)
  }

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Carrusel de servicios principales"
    >
      <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
            aria-hidden={index !== currentSlide}
          >
            {/* Imagen de fondo optimizada para LCP */}
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={`${slide.title} - ${slide.subtitle}`}
              fill
              className="object-cover"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="100vw"
            />

            {/* Overlay oscuro con gradiente para legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

            {/* Contenido centrado */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  {/* Badge */}
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-5 py-2">
                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-white uppercase tracking-wider">Consultora CIS</span>
                  </div>

                  {/* Título grande centrado */}
                  <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl text-balance">
                    {slide.title}
                  </h1>

                  {/* Subtítulo */}
                  <p className="mb-10 text-lg text-white/90 md:text-xl lg:text-2xl text-pretty max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>

                  {/* Botones */}
                  <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                    {slide.id === 1 ? (
                      <>
                        <Button
                          asChild
                          size="lg"
                          className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-xl text-base px-8 py-6"
                        >
                          <Link href={slide.cta.href}>Conocer más</Link>
                        </Button>
                        <Button asChild size="lg" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl text-base px-8 py-6">
                          <a href="https://misaludmedica.com/Companies.html?institution=cis" target="_blank" rel="noopener noreferrer">
                            Portal Empresas
                          </a>
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          type="button"
                          size="lg"
                          onClick={handleTurnoOnline}
                          className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl text-base px-8 py-6"
                        >
                          Turno Online
                        </Button>
                        <Button asChild size="lg" className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white shadow-xl text-base px-8 py-6">
                          <a href="https://misaludmedica.com/Home.html?institution=cis" target="_blank" rel="noopener noreferrer">
                            Portal Pacientes
                          </a>
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - más grandes y elegantes */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 backdrop-blur-sm p-3 md:p-4 text-white transition-all hover:bg-white/30 border border-white/30"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 backdrop-blur-sm p-3 md:p-4 text-white transition-all hover:bg-white/30 border border-white/30"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      {/* Dot Indicators - en la parte inferior */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3" role="tablist" aria-label="Indicadores de slide">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-3 rounded-full transition-all duration-300 border border-white/50",
              index === currentSlide ? "w-10 bg-white" : "w-3 bg-white/40 hover:bg-white/60",
            )}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`${slide.title} - Slide ${index + 1} de ${slides.length}`}
          />
        ))}
      </div>

      {/* Screen reader announcement for current slide */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {`Mostrando ${slides[currentSlide].title}: ${slides[currentSlide].subtitle}`}
      </div>
    </section>
  )
}
