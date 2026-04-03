import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, email, telefono, mensaje } = body
    const recipient = process.env.CONTACT_EMAIL || "info@consultoracis.com.ar"

    if (!nombre || !email || !telefono || !mensaje) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    // TODO: integrar envío real de correo/CRM
    console.log("Contact form submission:", {
      nombre,
      email,
      telefono,
      mensaje,
      recipient,
    })

    return NextResponse.json({ success: true, message: "Mensaje recibido correctamente" })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
