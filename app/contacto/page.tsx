import type { Metadata } from "next"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contacto - Consultas y Turnos",
  description:
    "Contacta a Consultora CIS para consultas sobre medicina laboral, servicios médicos y salud ocupacional.",
  openGraph: {
    title: "Contacto - Consultora CIS",
    description: "Contáctanos para consultas sobre medicina laboral y servicios médicos.",
    images: ["/images/sis-real/reunion-equipo.jpg"],
  },
  alternates: {
    canonical: "/contacto",
  },
}

const contactInfo = [
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Sede Central",
    content: "Viamonte 544 – Barrio General Paz – Córdoba – Argentina",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Horario Sede Central",
    content: "Lunes a Viernes de 8 a 18 hs",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Sucursal Procrear",
    content: "PROCREAR Liceo Sector 9 – Manzana 47 – Bloque D – Local 11 – Córdoba – Argentina",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Horario Sucursal Procrear",
    content: "Lunes, Miércoles, Jueves y Viernes de 16 a 20 hs · Martes de 8 a 12 hs",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Teléfonos",
    content: "(0351) 6820404 / 5327826",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    content: "info@consultoracis.com.ar",
    href: "mailto:info@consultoracis.com.ar",
  },
]

export default function ContactoPage() {
  return (
    <>
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl text-balance">Contacto</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80 text-pretty">
            Estamos aquí para ayudarte. Completa el formulario o contáctanos por cualquiera de nuestros canales.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">Información de Contacto</h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-muted-foreground hover:text-accent transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <div className="aspect-video overflow-hidden rounded-xl bg-secondary">
                  <iframe
                    src="https://www.google.com/maps?q=Viamonte+544+C%C3%B3rdoba&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Sede Central"
                  ></iframe>
                </div>
                <div className="aspect-video overflow-hidden rounded-xl bg-secondary">
                  <iframe
                    src="https://www.google.com/maps?q=PROCREAR+Liceo+Sector+9+Manzana+47+Bloque+D+Local+11+C%C3%B3rdoba&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Sucursal Procrear"
                  ></iframe>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-2 text-2xl font-bold text-foreground">Hace tu consulta.</h2>
              <p className="mb-6 text-sm text-muted-foreground">Te contactaremos a la brevedad.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#25D366] py-12">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white">¿Prefieres WhatsApp?</h2>
          <p className="mb-6 text-white/90">Contáctanos directamente por WhatsApp para una respuesta más rápida.</p>
          <a
            href="https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#25D366] transition-transform hover:scale-105"
          >
            +54 351 682-0404
          </a>
        </div>
      </section>
    </>
  )
}
