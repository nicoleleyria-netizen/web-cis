import type { Metadata } from "next"
import { FormEgreso } from "@/components/ddjj/form-egreso"

export const metadata: Metadata = {
  title: "DDJJ Examen de Egreso - Consultora CIS",
  description: "Declaración jurada de salud para examen médico de egreso (post ocupacional).",
  robots: { index: false },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-8 lg:px-8">
          <p className="text-sm text-muted-foreground">Medicina Laboral · Declaración Jurada</p>
          <h1 className="mt-1 text-2xl font-bold text-foreground">Declaración Jurada — Examen de Egreso</h1>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            Complete el formulario con información verdadera y completa. Los campos marcados con{" "}
            <span className="text-destructive font-medium">*</span> son obligatorios.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FormEgreso />
        </div>
      </div>
    </main>
  )
}
