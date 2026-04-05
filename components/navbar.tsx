"use client"

import Link from "next/link"
import Image from "@/components/base-path-image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import BotonTurnero from "@/components/BotonTurnero"

const services = [
  { name: "Medicina Laboral", href: "/medicina-laboral" },
  { name: "Servicios Médicos Generales", href: "/servicios-medicos-generales" },
  { name: "Medicina del Deporte", href: "/medicina-del-deporte" },
]

const empresa = [
  { name: "Acerca de Nosotros", href: "/empresa/acerca" },
  { name: "Nuestra Historia", href: "/empresa/historia" },
]

const turnosLinks = [
  { name: "Portal Pacientes", href: "https://misaludmedica.com/Home.html?institution=cis", external: true },
  { name: "Portal Empresas", href: "https://misaludmedica.com/Companies.html?institution=cis", external: true },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logos/logo-cis-vertical.png"
            alt="Consultora CIS"
            width={72}
            height={72}
            className="h-10 w-10 object-contain object-left sm:hidden"
            priority
          />
          <Image
            src="/images/logos/logo-cis-horizontal.png"
            alt="Consultora CIS"
            width={190}
            height={64}
            className="hidden h-10 w-[190px] object-contain object-left sm:block"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Inicio
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                Empresa
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {empresa.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                Servicios
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {services.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                Turnos
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem
                asChild
                onSelect={(e) => e.preventDefault()}
              >
                <div className="p-2 focus:bg-transparent">
                  <BotonTurnero />
                </div>
              </DropdownMenuItem>
              <div className="border-t border-border my-1" />
              {turnosLinks.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <a
            href="https://consultoracis.com.ar/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Artículos
          </a>

          <Link
            href="/contacto"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Contacto
          </Link>

          <Link
            href="/trabaja-con-nosotros"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Trabaja con Nosotros
          </Link>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm" className="bg-[#25D366] hover:bg-[#128C7E] text-white">
            <a
              href="https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </Button>
          <a
            href="https://www.linkedin.com/company/consultora-integral-de-salud/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
            aria-label="LinkedIn"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/consultoradesalud.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
            aria-label="Instagram"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.207-1.504.344-1.857.182-.466.399-.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 4.041v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
            </svg>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="border-t border-border bg-background" aria-label="Menú móvil">
          <div className="container mx-auto space-y-1 px-4 py-4">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>

            <div className="space-y-1 pl-4">
              <p className="px-3 py-2 text-sm font-semibold text-muted-foreground">Empresa</p>
              {empresa.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="space-y-1 pl-4">
              <p className="px-3 py-2 text-sm font-semibold text-muted-foreground">Servicios</p>
              {services.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="space-y-1 pl-4">
              <p className="px-3 py-2 text-sm font-semibold text-muted-foreground">Turnos</p>
              <div className="px-3 py-2">
                <BotonTurnero />
              </div>
              {turnosLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <a
              href="https://consultoracis.com.ar/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              Artículos
            </a>

            <Link
              href="/contacto"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>

            <Link
              href="/trabaja-con-nosotros"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              Trabaja con Nosotros
            </Link>

            <div className="flex items-center justify-center gap-4 pt-4 border-t border-border mt-4">
              <a
                href="https://api.whatsapp.com/send?phone=543516820404&text=Consulta+Web"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] p-2.5 text-white transition-colors hover:bg-[#128C7E]"
                aria-label="WhatsApp"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/consultora-integral-de-salud/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-muted p-2.5 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/consultoradesalud.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-muted p-2.5 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
