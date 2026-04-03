import Image from "next/image"
import { StudyTurnoForm } from "@/components/studies/study-turno-form"
import { CTASection } from "@/components/cta-section"
import { MoreServicesButton } from "@/components/studies/more-services-button"

type Props = {
  titulo: string
  resumen: string
  image: string
  imageAlt: string
  descripcion: string[]
  incluye?: string[]
  requisitos?: string[]
}

export function StudyPage({ titulo, resumen, image, imageAlt, descripcion, incluye = [], requisitos = [] }: Props) {
  return (
    <>
      <section className="bg-primary py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">{titulo}</h1>
              <p className="mt-3 text-primary-foreground/85">{resumen}</p>
            </div>
            <MoreServicesButton />
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div className="rounded-xl border bg-card p-4 lg:p-5">
              <h2 className="text-lg font-semibold mb-2">Descripción del servicio</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                {descripcion.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-xl border">
              <Image src={image} alt={imageAlt} fill className="object-cover" />
            </div>
          </div>

          {(incluye.length > 0 || requisitos.length > 0) && (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {incluye.length > 0 && (
                <div className="rounded-xl border bg-card p-5">
                  <h3 className="font-semibold mb-2">Qué incluye</h3>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {incluye.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              )}
              {requisitos.length > 0 && (
                <div className="rounded-xl border bg-card p-5">
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

          <div className="mt-10">
            <StudyTurnoForm estudio={titulo} />
          </div>
        </div>
      </section>

      <CTASection
        title="¿Querés reservar este estudio?"
        description="Te ayudamos a gestionar el turno de forma rápida por WhatsApp o formulario."
        primaryCTA={{ text: "Pedir turno", href: "/contacto" }}
        whatsappCTA
      />
    </>
  )
}
