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

export function FormPreocupacional() {
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
      tipo: "Examen Preocupacional",
      nombre,
      apellido,
      dni,
      fecha,
      secciones: [
        {
          titulo: "1. Datos Generales",
          campos: [
            { label: "Empresa", valor: g("empresa") },
            { label: "Puesto laboral", valor: g("puestoLaboral") },
          ],
        },
        {
          titulo: "2. Datos Personales",
          campos: [
            { label: "Nombre", valor: nombre },
            { label: "Apellido", valor: apellido },
            { label: "DNI", valor: dni },
            { label: "Fecha de nacimiento", valor: g("fechaNacimiento") },
            { label: "Sexo", valor: g("sexo") },
            { label: "Estado civil", valor: g("estadoCivil") },
            { label: "Lugar de nacimiento", valor: g("lugarNacimiento") },
            { label: "Nacionalidad", valor: g("nacionalidad") },
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
          titulo: "4. Historial con Consultora CIS",
          campos: [
            { label: "¿Realizó exámenes con CIS anteriormente?", valor: yn("examPrevioCIS") },
            ...(yn("examPrevioCIS") === "si" ? [{ label: "¿Cuándo aproximadamente?", valor: g("fechaExamCIS") }] : []),
          ],
        },
        {
          titulo: "5. Historia Laboral Previa",
          campos: [
            { label: "¿Ha trabajado anteriormente?", valor: yn("trabajoAnterior") },
            ...(yn("trabajoAnterior") === "si"
              ? [
                  { label: "Último empleador", valor: g("ultimoEmpleador") },
                  { label: "Puesto / cargo anterior", valor: g("puestoAnterior") },
                  { label: "Tiempo en el puesto", valor: g("tiempoPuesto") },
                ]
              : []),
            { label: "¿Abandonó algún empleo por razones de salud?", valor: yn("abandonoEmpleo") },
            ...(yn("abandonoEmpleo") === "si" ? [{ label: "Descripción", valor: g("motivoAbandono") }] : []),
            { label: "¿Sufrió accidentes laborales?", valor: yn("accidenteLab") },
            ...(yn("accidenteLab") === "si" ? [{ label: "Descripción (cuál / cuándo)", valor: g("detAccidente") }] : []),
            { label: "¿Padeció enfermedades profesionales?", valor: yn("enfermedadProf") },
            ...(yn("enfermedadProf") === "si" ? [{ label: "Descripción", valor: g("detEnfermedad") }] : []),
            { label: "¿Recibió indemnizaciones por accidente o enfermedad laboral?", valor: yn("indemnizacion") },
            ...(yn("indemnizacion") === "si" ? [{ label: "Descripción", valor: g("detIndemnizacion") }] : []),
          ],
        },
        {
          titulo: "6. Hábitos",
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
          titulo: "7. Antecedentes Familiares",
          campos: [
            {
              label: "Patologías familiares marcadas",
              valor: antFam.size > 0 ? Array.from(antFam).join(", ") : "Ninguna",
            },
            { label: "Observaciones", valor: g("obsAntFamiliares") },
          ],
        },
        {
          titulo: "8. Antecedentes Médicos Personales",
          campos: [
            {
              label: "Patologías personales marcadas",
              valor: antPers.size > 0 ? Array.from(antPers).join(", ") : "Ninguna",
            },
            { label: "Observaciones", valor: g("obsAntPersonales") },
          ],
        },
        {
          titulo: "9. Cirugías y Hospitalizaciones",
          campos: [
            { label: "¿Ha sido operado/a?", valor: yn("operado") },
            ...(yn("operado") === "si" ? [{ label: "Detalle (cuál / cuándo)", valor: g("detCirugia") }] : []),
            { label: "¿Ha sido hospitalizado/a?", valor: yn("hospitalizado") },
            ...(yn("hospitalizado") === "si" ? [{ label: "Motivo y fecha", valor: g("detHospitalizacion") }] : []),
          ],
        },
        {
          titulo: "10. Alergias",
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
          titulo: "11. Estado Actual de Salud",
          campos: [
            { label: "¿Toma medicación actualmente?", valor: yn("medicActual") },
            ...(yn("medicActual") === "si" ? [{ label: "¿Cuál?", valor: g("cualesMedicActual") }] : []),
            { label: "¿Tiene alguna dolencia o malestar actual?", valor: yn("dolenciaActual") },
            ...(yn("dolenciaActual") === "si" ? [{ label: "Descripción", valor: g("detDolencia") }] : []),
            { label: "¿Realizó exámenes médicos laborales anteriormente?", valor: yn("examLaboralPrevio") },
            ...(yn("examLaboralPrevio") === "si"
              ? [
                  { label: "¿En qué empresa?", valor: g("empresaExamPrevio") },
                  { label: "¿Cuándo?", valor: g("fechaExamPrevio") },
                ]
              : []),
          ],
        },
        {
          titulo: "12. Declaración Final",
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
          Tu DDJJ fue recibida por Consultora CIS. Nos comunicaremos con vos a la brevedad para confirmar el turno.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <SectionCard num={1} title="Datos Generales">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Empresa" required>
            <Input name="empresa" required placeholder="Nombre de la empresa" />
          </Field>
          <Field label="Puesto laboral" required>
            <Input name="puestoLaboral" required placeholder="Puesto al que ingresa" />
          </Field>
        </div>
      </SectionCard>

      <SectionCard num={2} title="Datos Personales">
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
          <Field label="Lugar de nacimiento">
            <Input name="lugarNacimiento" />
          </Field>
          <Field label="Nacionalidad">
            <Input name="nacionalidad" defaultValue="Argentina" />
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
          <Field label="Domicilio" required>
            <Input name="domicilio" required placeholder="Calle y número" />
          </Field>
          <Field label="Ciudad / Localidad" required>
            <Input name="ciudad" required />
          </Field>
        </div>
      </SectionCard>

      <SectionCard num={4} title="Historial con Consultora CIS">
        <YesNoToggle
          label="¿Ha realizado exámenes con CIS anteriormente?"
          value={yn("examPrevioCIS")}
          onChange={(v) => setYN("examPrevioCIS", v)}
        >
          <Field label="¿Cuándo aproximadamente?">
            <Input name="fechaExamCIS" placeholder="Ej: 2022" />
          </Field>
        </YesNoToggle>
      </SectionCard>

      <SectionCard num={5} title="Historia Laboral Previa">
        <div className="space-y-5">
          <YesNoToggle
            label="¿Ha trabajado anteriormente?"
            value={yn("trabajoAnterior")}
            onChange={(v) => setYN("trabajoAnterior", v)}
          >
            <div className="grid gap-3 sm:grid-cols-3">
              <Field label="Último empleador">
                <Input name="ultimoEmpleador" />
              </Field>
              <Field label="Puesto / cargo">
                <Input name="puestoAnterior" />
              </Field>
              <Field label="Tiempo en el puesto">
                <Input name="tiempoPuesto" placeholder="Ej: 2 años" />
              </Field>
            </div>
          </YesNoToggle>
          <YesNoToggle
            label="¿Abandonó algún empleo por razones de salud?"
            value={yn("abandonoEmpleo")}
            onChange={(v) => setYN("abandonoEmpleo", v)}
          >
            <Field label="Descripción">
              <Textarea name="motivoAbandono" rows={2} />
            </Field>
          </YesNoToggle>
          <YesNoToggle
            label="¿Ha sufrido accidentes laborales?"
            value={yn("accidenteLab")}
            onChange={(v) => setYN("accidenteLab", v)}
          >
            <Field label="Descripción (cuál / cuándo)">
              <Textarea name="detAccidente" rows={2} />
            </Field>
          </YesNoToggle>
          <YesNoToggle
            label="¿Ha padecido enfermedades profesionales?"
            value={yn("enfermedadProf")}
            onChange={(v) => setYN("enfermedadProf", v)}
          >
            <Field label="Descripción">
              <Textarea name="detEnfermedad" rows={2} />
            </Field>
          </YesNoToggle>
          <YesNoToggle
            label="¿Ha recibido indemnizaciones por accidente o enfermedad laboral?"
            value={yn("indemnizacion")}
            onChange={(v) => setYN("indemnizacion", v)}
          >
            <Field label="Descripción">
              <Textarea name="detIndemnizacion" rows={2} />
            </Field>
          </YesNoToggle>
        </div>
      </SectionCard>

      <SectionCard num={6} title="Hábitos">
        <div className="space-y-5">
          <YesNoToggle label="Tabaco" value={yn("tabaco")} onChange={(v) => setYN("tabaco", v)}>
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Cantidad por día">
                <Input name="tabacoCantidad" placeholder="Ej: 10 cigarrillos" />
              </Field>
              <Field label="Años de consumo">
                <Input name="tabacoAnios" placeholder="Ej: 5 años" />
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
              <Textarea name="cualesMedicamentos" rows={2} placeholder="Nombre del / los medicamento/s" />
            </Field>
          </YesNoToggle>
          <YesNoToggle
            label="Actividad física"
            value={yn("actividadFisica")}
            onChange={(v) => setYN("actividadFisica", v)}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="¿Cuál?">
                <Input name="cualActividad" placeholder="Ej: fútbol, natación" />
              </Field>
              <Field label="Veces por semana">
                <Input name="frecActividad" placeholder="Ej: 3 veces" />
              </Field>
            </div>
          </YesNoToggle>
        </div>
      </SectionCard>

      <SectionCard num={7} title="Antecedentes Familiares">
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

      <SectionCard num={8} title="Antecedentes Médicos Personales">
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

      <SectionCard num={9} title="Cirugías y Hospitalizaciones">
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

      <SectionCard num={10} title="Alergias">
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
              <Input name="tipoReaccion" placeholder="Ej: urticaria, anafilaxia" />
            </Field>
          </div>
        </YesNoToggle>
      </SectionCard>

      <SectionCard num={11} title="Estado Actual de Salud">
        <div className="space-y-5">
          <YesNoToggle
            label="¿Actualmente toma alguna medicación?"
            value={yn("medicActual")}
            onChange={(v) => setYN("medicActual", v)}
          >
            <Field label="¿Cuál?">
              <Textarea name="cualesMedicActual" rows={2} placeholder="Nombre del / los medicamento/s" />
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
          <YesNoToggle
            label="¿Ha realizado exámenes médicos laborales anteriormente?"
            value={yn("examLaboralPrevio")}
            onChange={(v) => setYN("examLaboralPrevio", v)}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="¿En qué empresa?">
                <Input name="empresaExamPrevio" />
              </Field>
              <Field label="¿Cuándo?">
                <Input name="fechaExamPrevio" placeholder="Ej: 2020" />
              </Field>
            </div>
          </YesNoToggle>
        </div>
      </SectionCard>

      <SectionCard num={12} title="Declaración Final">
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
