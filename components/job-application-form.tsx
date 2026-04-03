"use client"

import type React from "react"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2, CheckCircle, AlertCircle, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const jobApplicationSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  telefono: z.string().min(8, "Ingresa un teléfono válido"),
  area: z.string().min(1, "Selecciona un área de interés"),
  linkedin: z.string().url("Ingresa una URL válida").optional().or(z.literal("")),
  mensaje: z.string().optional(),
})

type JobApplicationFormData = z.infer<typeof jobApplicationSchema>

const areas = [
  { value: "profesional-salud", label: "Profesional de la salud" },
  { value: "area-administrativa", label: "Área administrativa" },
  { value: "recepcion", label: "Recepción" },
  { value: "marketing-comunicacion", label: "Marketing y comunicación" },
  { value: "otro", label: "Otro" },
]

export function JobApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [cvFile, setCvFile] = useState<File | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<JobApplicationFormData>({
    resolver: zodResolver(jobApplicationSchema),
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("El archivo no puede superar los 5MB")
        return
      }
      // Check file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ]
      if (!allowedTypes.includes(file.type)) {
        alert("Solo se permiten archivos PDF o Word")
        return
      }
      setCvFile(file)
    }
  }

  const onSubmit = async (data: JobApplicationFormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value)
      })
      if (cvFile) {
        formData.append("cv", cvFile)
      }

      const response = await fetch("/api/rrhh", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setSubmitStatus("success")
        reset()
        setCvFile(null)
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nombre">Nombre completo *</Label>
          <Input id="nombre" placeholder="Tu nombre completo" {...register("nombre")} />
          {errors.nombre && <p className="text-sm text-destructive">{errors.nombre.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" placeholder="tu@email.com" {...register("email")} />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="telefono">Teléfono *</Label>
          <Input id="telefono" placeholder="(351) 123-4567" {...register("telefono")} />
          {errors.telefono && <p className="text-sm text-destructive">{errors.telefono.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="area">Área de interés *</Label>
          <Select onValueChange={(value) => setValue("area", value)}>
            <SelectTrigger id="area">
              <SelectValue placeholder="Selecciona un área" />
            </SelectTrigger>
            <SelectContent>
              {areas.map((area) => (
                <SelectItem key={area.value} value={area.value}>
                  {area.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.area && <p className="text-sm text-destructive">{errors.area.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="linkedin">LinkedIn (opcional)</Label>
        <Input id="linkedin" placeholder="https://linkedin.com/in/tu-perfil" {...register("linkedin")} />
        {errors.linkedin && <p className="text-sm text-destructive">{errors.linkedin.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="cv">Curriculum Vitae (opcional)</Label>
        <div className="relative">
          <Input id="cv" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
          <label
            htmlFor="cv"
            className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-input bg-background px-4 py-8 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Upload className="h-5 w-5" />
            <span>{cvFile ? cvFile.name : "Arrastra tu CV o haz clic para seleccionar"}</span>
          </label>
        </div>
        <p className="text-xs text-muted-foreground">Formatos: PDF, DOC, DOCX. Máximo 5MB.</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje">Mensaje adicional (opcional)</Label>
        <Textarea
          id="mensaje"
          placeholder="Cuéntanos sobre ti, tu experiencia o por qué te gustaría trabajar con nosotros..."
          rows={4}
          {...register("mensaje")}
        />
      </div>

      {submitStatus === "success" && (
        <div className="flex items-center gap-2 rounded-lg bg-green-50 p-4 text-green-800">
          <CheckCircle className="h-5 w-5" />
          <span>¡Postulación enviada correctamente! Revisaremos tu perfil y te contactaremos.</span>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-red-800">
          <AlertCircle className="h-5 w-5" />
          <span>Hubo un error al enviar la postulación. Por favor, intenta nuevamente.</span>
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar postulación"
        )}
      </Button>
    </form>
  )
}
