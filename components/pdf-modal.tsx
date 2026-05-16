"use client"

import { useEffect, useState } from "react"
import { X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

// Reemplazar con la ruta correcta del PDF cuando esté disponible
const PDF_URL = "/pdf/servicios-cis.pdf"

export function PdfModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const shown = sessionStorage.getItem("pdf-modal-shown")
    if (shown) return

    const timer = setTimeout(() => {
      setOpen(true)
      sessionStorage.setItem("pdf-modal-shown", "1")
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-card border shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-primary px-6 pt-6 pb-5">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-full p-1.5 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
          <p className="text-xs text-primary-foreground/70 uppercase tracking-wider font-medium mb-1">
            Consultora Integral de Salud
          </p>
          <h2 className="text-xl font-bold text-white leading-tight">Conocé nuestros servicios</h2>
        </div>

        <div className="px-6 py-6 space-y-5">
          <p className="text-muted-foreground text-sm leading-relaxed">
            18 años acompañando a empresas y personas en soluciones integrales de salud laboral y medicina clínica.
          </p>
          <Button asChild className="w-full" size="lg">
            <a href={PDF_URL} download="Servicios-CIS.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              DESCARGAR
            </a>
          </Button>
          <button
            onClick={() => setOpen(false)}
            className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Continuar navegando
          </button>
        </div>
      </div>
    </div>
  )
}
