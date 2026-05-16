"use client"

import { useState, type FormEvent } from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

function SectionCard({ num, title, children }: { num: number; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border bg-card overflow-hidden">
      <div className="flex items-center gap-3 border-b bg-muted/30 px-6 py-4">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground flex-shrink-0">
          {num}
        </span>
        <h2 className="font-semibold text-foreground">{title}</h2>
      </div>
      <div className="p-6">{children}</div>
    </div>
  )
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label>
        {label}
        {required && <span className="text-destructive ml-0.5">*</span>}
      </Label>
      {children}
    </div>
  )
}

function YesNoToggle({
  label,
  value,
  onChange,
  children,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  children?: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-foreground">{label}</p>
      <div className="flex gap-2">
        {(["si", "no"] as const).map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={cn(
              "px-5 py-1.5 rounded-lg text-sm font-medium border transition-colors",
              value === opt
                ? opt === "si"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted border-muted-foreground/30 text-foreground"
                : "border-border hover:border-primary/40 text-foreground"
            )}
          >
            {opt === "si" ? "Sí" : "No"}
          </button>
        ))}
      </div>
      {value === "si" && children && (
        <div className="mt-3 space-y-3 pl-4 border-l-2 border-primary/30">{children}</div>
      )}
    </div>
  )
}

const ANT_FAMILIARES = [
  "Diabetes",
  "Hipertensión arterial",
  "Enfermedades cardíacas",
  "Cáncer",
  "Enfermedades mentales / psiquiátricas",
  "Stroke / ACV",
  "Otras",
]

const ANT_PERSONALES = [
  "Diabetes",
  "Hipertensión arterial",
  "Enfermedades cardíacas / cardiovasculares",
  "Epilepsia / convulsiones",
  "Enfermedades respiratorias (asma, EPOC)",
  "Enfermedades renales",
  "Enfermedades hepáticas",
  "Enfermedades articulares / musculoesqueléticas",
  "Enfermedades mentales / psiquiátricas",
  "Enfermedades neurológicas",
  "Enfermedades infecciosas crónicas",
  "Otras",
]

function CheckboxGroup({
  options,
  selected,
  onToggle,
}: {
  options: string[]
  selected: Set<string>
  onToggle: (v: string) => void
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {options.map((opt) => (
        <label
          key={opt}
          className={cn(
            "flex items-center gap-2 rounded-lg border px-3 py-2 cursor-pointer text-sm transition-colors",
            selected.has(opt) ? "bg-primary/10 border-primary/30" : "border-border hover:border-primary/20"
          )}
        >
          <input
            type="checkbox"
            checked={selected.has(opt)}
            onChange={() => onToggle(opt)}
            className="accent-primary h-4 w-4 flex-shrink-0"
          />
          {opt}
        </label>
      ))}
    </div>
  )
}

const selectClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"

export function FormPeriodico() {
  const [yesNo, setYesNo] = useState<Record<string, string>>({})
  const setYN = (key: string, val: string) => setYesNo((prev) => ({ ...prev, [key]: val }))
  const yn = (key: string) => yesNo[key] ?? ""

  const [antFam, setAntFam] = useState(new Set<string>())
  const [antPers, setAntPers] = useState(new Set<string>())
  const toggleSet = (setter: React.Dispatch<React.SetStateAction<Set<string>>>, val: string) => {
    setter((prev) => {
      const next = new Set(prev)
      next.has(val) ? next.delete(val) : next.add(val)
      return next
    })
  }

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const g = (k: string) => String(fd.get(k) ?? "")

    const nombre = g("nombre")
    const apellido = g("apellido")
    const dni = g("dni")
    const fecha = g("fecha")

    const payload = {
      tipo: "Examen Periódico",
      nombre,
      apellido,
      dni,
      fecha,
      secciones: [
        {
          titulo: "1. Datos Personales",
          campos: [
            { label: "Nombre", valor: nombre },
            { label: "Apellido", valor: apellido },
            { label: "DNI", valor: dni },
            { label: "Fecha de nacimiento", valor: g("fechaNacimiento") },
            { label: "Sexo", valor: g("sexo") },
            { label: "Estado civil", valor: g("estadoCivil") },
          ],
        },
        {
          titulo: "2. Datos Laborales Actuales",
          campos: [
            { label: "Empresa", valor: g("empresa") },
            { label: "Puesto actual", valor: g("puestoActual") },
            { label: "Antigüedad en el puesto", valor: g("antiguedad") },
          ],
        },
        {
          titulo: "3. Datos de Contacto",
          campos: [
            { label: "Teléfono", valor: g("telefono") },
            { label: "Email", valor: g("email") },
            { label: "Domicilio", valor: g("domicilio") },
            { label: "Ciudad / Localidad", valor: g("ciudad") },
          ],
        },
        {
          titulo: "4. Hábitos",
          campos: [
            { label: "Tabaco", valor: yn("tabaco") },
            ...(yn("tabaco") === "si"
              ? [
                  { label: "Cantidad por día", valor: g("tabacoCantidad") },
                  { label: "Años de consumo", valor: g("tabacoAnios") },
                ]
              : []),
            { label: "Alcohol", valor: yn("alcohol") },
            ...(yn("alcohol") === "si" ? [{ label: "Frecuencia", valor: g("alcoholFrecuencia") }] : []),
            { label: "Medicación habitual", valor: yn("medicHabitual") },
            ...(yn("medicHabitual") === "si" ? [{ label: "¿Cuál?", valor: g("cualesMedicamentos") }] : []),
            { label: "Actividad física", valor: yn("actividadFisica") },
            ...(yn("actividadFisica") === "si"
              ? [
                  { label: "¿Cuál?", valor: g("cualActividad") },
                  { label: "Frecuencia semanal", valor: g("frecActividad") },
                ]
              : []),
          ],
        },
        {
          titulo: "5. Antecedentes Familiares",
          campos: [
            {
              label: "Patologías familiares marcadas",
              valor: antFam.size > 0 ? Array.from(antFam).join(", ") : "Ninguna",
            },
            { label: "Observaciones", valor: g("obsAntFamiliares") },
          ],
        },
        {
          titulo: "6. Antecedentes Médicos Personales",
          campos: [
            {
              label: "Patologías personales marcadas",
              valor: antPers.size > 0 ? Array.from(antPers).join(", ") : "Ninguna",
            },
            { label: "Observaciones", valor: g("obsAntPersonales") },
          ],
        },
        {
          titulo: "7. Cirugías y Hospitalizaciones",
          campos: [
            { label: "¿Ha sido operado/a?", valor: yn("operado") },
            ...(yn("operado") === "si" ? [{ label: "Detalle (cuál / cuándo)", valor: g("detCirugia") }] : []),
            { label: "¿Ha sido hospitalizado/a?", valor: yn("hospitalizado") },
            ...(yn("hospitalizado") === "si" ? [{ label: "Motivo y fecha", valor: g("detHospitalizacion") }] : []),
          ],
        },
        {
          titulo: "8. Alergias",
          campos: [
            { label: "¿Tiene alergias conocidas?", valor: yn("alergias") },
            ...(yn("alergias") === "si"
              ? [
                  { label: "Alergias a medicamentos", valor: g("alergiasMedicamentos") },
                  { label: "Alergias a alimentos", valor: g("alergiasAlimentos") },
                  { label: "Otras alergias", valor: g("alergiasOtras") },
                  { label: "Tipo de reacción", valor: g("tipoReaccion") },
                ]
              : []),
          ],
        },
        {
          titulo: "9. Estado Actual de Salud",
          campos: [
            {
              label: "¿Hubo cambios en su estado de salud desde el último examen?",
              valor: yn("cambiosSalud"),
            },
            ...(yn("cambiosSalud") === "si" ? [{ label: "Descripción", valor: g("detCambiosSalud") }] : []),
            { label: "¿Toma medicación actualmente?", valor: yn("medicActual") },
            ...(yn("medicActual") === "si" ? [{ label: "¿Cuál?", valor: g("cualesMedicActual") }] : []),
            { label: "¿Tiene alguna dolencia o malestar actual?", valor: yn("dolenciaActual") },
            ...(yn("dolenciaActual") === "si" ? [{ label: "Descripción", valor: g("detDolencia") }] : []),
          ],
        },
        {
          titulo: "10. Declaración Final",
          campos: [
            { label: "Fecha de declaración", valor: fecha },
            {
              label: "Declaración jurada",
              valor: "ACEPTADA — El firmante declara bajo juramento que los datos consignados son verdaderos y completos.",
            },
          ],
        },
      ],
    }

    setLoading(true)
    try {
      const res = await fetch("/api/ddjj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      setStatus(res.ok ? "ok" : "error")
    } catch {
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-xl border bg-card p-12 text-center space-y-4">
        <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-foreground">Declaración enviada correctamente</h2>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto">
          Tu DDJJ fue recibida por Consultora CIS. Nos comunicaremos con vos a la brevedad.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <SectionCard num={1} title="Datos Personales">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Nombre" required>
            <Input name="nombre" required />
          </Field>
          <Field label="Apellido" required>
            <Input name="apellido" required />
          </Field>
          <Field label="DNI" required>
            <Input name="dni" required placeholder="Sin puntos ni espacios" />
          </Field>
          <Field label="Fecha de nacimiento">
            <Input name="fechaNacimiento" type="date" />
          </Field>
          <Field label="Sexo">
            <select name="sexo" className={selectClass}>
              <option value="">Seleccionar</option>
              <option>Masculino</option>
              <option>Femenino</option>
              <option>Otro</option>
            </select>
          </Field>
          <Field label="Estado civil">
            <select name="estadoCivil" className={selectClass}>
              <option value="">Seleccionar</option>
              <option>Soltero/a</option>
              <option>Casado/a</option>
              <option>Divorciado/a</option>
              <option>Viudo/a</option>
              <option>Unión de hecho</option>
            </select>
          </Field>
        </div>
      </SectionCard>

      <SectionCard num={2} title="Datos Laborales Actuales">
        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Empresa" required>
            <Input name="empresa" required />
          </Field>
          <Field label="Puesto actual" required>
            <Input name="puestoActual" required />
          </Field>
          <Field label="Antigüedad">
            <Input name="antiguedad" placeholder="Ej: 3 años" />
          </Field>
        </div>
      </SectionCard>

      <SectionCard num={3} title="Datos de Contacto">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Teléfono" required>
            <Input name="telefono" required type="tel" />
          </Field>
          <Field label="Email" required>
            <Input name="email" required type="email" />
          </Field>
          <Field label="Domicilio">
            <Input name="domicilio" placeholder="Calle y número" />
          </Field>
          <Field label="Ciudad / Localidad">
            <Input name="ciudad" />
          </Field>
        </div>
      </SectionCard>

      <SectionCard num={4} title="Hábitos">
        <div className="space-y-5">
          <YesNoToggle label="Tabaco" value={yn("tabaco")} onChange={(v) => setYN("tabaco", v)}>
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Cantidad por día">
                <Input name="tabacoCantidad" placeholder="Ej: 10 cigarrillos" />
              </Field>
              <Field label="Años de consumo">
                <Input name="tabacoAnios" />
              </Field>
            </div>
          </YesNoToggle>
          <YesNoToggle label="Alcohol" value={yn("alcohol")} onChange={(v) => setYN("alcohol", v)}>
            <Field label="Frecuencia">
              <Input name="alcoholFrecuencia" placeholder="Ej: ocasional, fines de semana" />
            </Field>
          </YesNoToggle>
          <YesNoToggle
            label="Medicación habitual"
            value={yn("medicHabitual")}
            onChange={(v) => setYN("medicHabitual", v)}
          >
            <Field label="¿Cuál?">
              <Textarea name="cualesMedicamentos" rows={2} />
            </Field>
          </YesNoToggle>
          <YesNoToggle
            label="Actividad física"
            value={yn("actividadFisica")}
            onChange={(v) => setYN("actividadFisica", v)}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="¿Cuál?">
                <Input name="cualActividad" />
              </Field>
              <Field label="Veces por semana">
                <Input name="frecActividad" />
              </Field>
            </div>
          </YesNoToggle>
        </div>
      </SectionCard>

      <SectionCard num={5} title="Antecedentes Familiares">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Marque las patologías presentes en familiares directos (padres, hermanos, abuelos):
          </p>
          <CheckboxGroup options={ANT_FAMILIARES} selected={antFam} onToggle={(v) => toggleSet(setAntFam, v)} />
          <Field label="Observaciones">
            <Textarea name="obsAntFamiliares" rows={2} placeholder="Información adicional..." />
          </Field>
        </div>
      </SectionCard>

      <SectionCard num={6} title="Antecedentes Médicos Personales">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Marque las patologías que usted ha padecido o padece actualmente:
          </p>
          <CheckboxGroup options={ANT_PERSONALES} selected={antPers} onToggle={(v) => toggleSet(setAntPers, v)} />
          <Field label="Observaciones">
            <Textarea name="obsAntPersonales" rows={2} placeholder="Información adicional..." />
          </Field>
        </div>
      </SectionCard>

      <SectionCard num={7} title="Cirugías y Hospitalizaciones">
        <div className="space-y-5">
          <YesNoToggle label="¿Ha sido operado/a?" value={yn("operado")} onChange={(v) => setYN("operado", v)}>
            <Field label="Detalle (¿cuál? / ¿cuándo?)">
              <Textarea name="detCirugia" rows={2} />
            </Field>
          </YesNoToggle>
          <YesNoToggle
            label="¿Ha sido hospitalizado/a?"
            value={yn("hospitalizado")}
            onChange={(v) => setYN("hospitalizado", v)}
          >
            <Field label="Motivo y fecha aproximada">
              <Textarea name="detHospitalizacion" rows={2} />
            </Field>
          </YesNoToggle>
        </div>
      </SectionCard>

      <SectionCard num={8} title="Alergias">
        <YesNoToggle
          label="¿Tiene alergias conocidas?"
          value={yn("alergias")}
          onChange={(v) => setYN("alergias", v)}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Alergias a medicamentos">
              <Input name="alergiasMedicamentos" />
            </Field>
            <Field label="Alergias a alimentos">
              <Input name="alergiasAlimentos" />
            </Field>
            <Field label="Otras alergias">
              <Input name="alergiasOtras" />
            </Field>
            <Field label="Tipo de reacción">
              <Input name="tipoReaccion" />
            </Field>
          </div>
        </YesNoToggle>
      </SectionCard>

      <SectionCard num={9} title="Estado Actual de Salud">
        <div className="space-y-5">
          <YesNoToggle
            label="¿Hubo cambios en su estado de salud desde el último examen periódico?"
            value={yn("cambiosSalud")}
            onChange={(v) => setYN("cambiosSalud", v)}
          >
            <Field label="Descripción de los cambios">
              <Textarea name="detCambiosSalud" rows={3} />
            </Field>
          </YesNoToggle>
          <YesNoToggle
            label="¿Actualmente toma alguna medicación?"
            value={yn("medicActual")}
            onChange={(v) => setYN("medicActual", v)}
          >
            <Field label="¿Cuál?">
              <Textarea name="cualesMedicActual" rows={2} />
            </Field>
          </YesNoToggle>
          <YesNoToggle
            label="¿Tiene alguna dolencia o malestar actual?"
            value={yn("dolenciaActual")}
            onChange={(v) => setYN("dolenciaActual", v)}
          >
            <Field label="Descripción">
              <Textarea name="detDolencia" rows={2} />
            </Field>
          </YesNoToggle>
        </div>
      </SectionCard>

      <SectionCard num={10} title="Declaración Final">
        <div className="space-y-4">
          <Field label="Fecha" required>
            <Input
              name="fecha"
              type="date"
              required
              defaultValue={new Date().toISOString().split("T")[0]}
            />
          </Field>
          <div className="rounded-lg bg-muted/50 border p-4 text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground block mb-1">Declaración Jurada:</strong>
            Declaro bajo juramento que los datos consignados en el presente formulario son verdaderos y completos,
            haciéndome responsable por la información suministrada. Autorizo a Consultora Integral de Salud a
            utilizar estos datos con fines exclusivamente médicos y laborales.
          </div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" name="aceptacion" required className="mt-0.5 accent-primary h-4 w-4 flex-shrink-0" />
            <span className="text-sm font-medium">
              Acepto y declaro que la información ingresada es verdadera.{" "}
              <span className="text-destructive">*</span>
            </span>
          </label>
        </div>
      </SectionCard>

      {status === "error" && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
          No se pudo enviar la declaración. Por favor intentá de nuevo o comunicate con nosotros por WhatsApp.
        </div>
      )}

      <Button type="submit" disabled={loading} className="w-full" size="lg">
        {loading ? "Enviando declaración..." : "Enviar Declaración Jurada"}
      </Button>
    </form>
  )
}
