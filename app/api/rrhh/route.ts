import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const nombre = formData.get("nombre") as string
    const email = formData.get("email") as string
    const telefono = formData.get("telefono") as string
    const area = formData.get("area") as string

    const areaToRecipient: Record<string, string> = {
      "profesional-salud": "cisprofesionales@gmail.com",
      "area-administrativa": "profesionalescis@gmail.com",
      recepcion: "profesionalescis@gmail.com",
      "marketing-comunicacion": "profesionalescis@gmail.com",
      otro: "profesionalescis@gmail.com",
    }

    const recipient = areaToRecipient[area] || "profesionalescis@gmail.com"
    const subject = `CV - ${area} - ${nombre}`
    const linkedin = formData.get("linkedin") as string | null
    const mensaje = formData.get("mensaje") as string | null
    const cv = formData.get("cv") as File | null

    if (!nombre || !email || !telefono || !area) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    let cvInfo = null
    if (cv && cv.size > 0) {
      cvInfo = {
        name: cv.name,
        size: cv.size,
        type: cv.type,
      }
    }

    // TODO: integrar envío real de correo/CRM
    console.log("Job application submission:", {
      nombre,
      email,
      telefono,
      area,
      linkedin,
      mensaje,
      cvInfo,
      recipient,
      subject,
    })

    return NextResponse.json({ success: true, message: "Postulación recibida correctamente" })
  } catch (error) {
    console.error("Error processing job application:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
