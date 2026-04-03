"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type Props = {
  estudio: string
}

export function StudyTurnoForm({ estudio }: Props) {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState<null | boolean>(null)

  async function onSubmit(formData: FormData) {
    setLoading(true)
    setOk(null)
    const nombre = String(formData.get("nombre") || "")
    const apellido = String(formData.get("apellido") || "")
    const payload = {
      nombre: `${nombre} ${apellido}`.trim(),
      telefono: String(formData.get("telefono") || ""),
      email: String(formData.get("email") || ""),
      mensaje: `Consulta (${estudio}): ${String(formData.get("comentarios") || "")}`,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      setOk(res.ok)
    } catch {
      setOk(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form action={onSubmit} className="space-y-3 rounded-xl border bg-card p-5">
      <div>
        <Label htmlFor="nombre">Nombre</Label>
        <Input id="nombre" name="nombre" required />
      </div>
      <div>
        <Label htmlFor="apellido">Apellido</Label>
        <Input id="apellido" name="apellido" required />
      </div>
      <div>
        <Label htmlFor="telefono">Teléfono</Label>
        <Input id="telefono" name="telefono" required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div>
        <Label htmlFor="comentarios">Escribir tu consulta acá</Label>
        <Textarea id="comentarios" name="comentarios" rows={3} placeholder="Escribir tu consulta acá" />
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Enviando..." : "Pedir turno"}
      </Button>

      {ok === true && <p className="text-sm text-green-700">Solicitud enviada. Te contactamos por WhatsApp.</p>}
      {ok === false && <p className="text-sm text-red-700">No se pudo enviar. Probá de nuevo o escribinos por WhatsApp.</p>}
    </form>
  )
}
