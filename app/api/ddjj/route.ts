import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const RECIPIENT = "informes@consultoracis.com.ar"
const FROM = process.env.RESEND_FROM_EMAIL ?? "CIS - Consultora Integral de Salud <onboarding@resend.dev>"

type Campo = { label: string; valor: string }
type Seccion = { titulo: string; campos: Campo[] }

function buildHtml(tipo: string, nombre: string, apellido: string, dni: string, fecha: string, secciones: Seccion[]) {
  const sectionsHtml = secciones
    .map((sec) => {
      const rows = sec.campos
        .filter(({ valor }) => valor && valor.trim() !== "")
        .map(
          ({ label, valor }) => `
        <tr>
          <td style="padding:7px 14px;font-weight:600;color:#374151;width:220px;vertical-align:top;border-bottom:1px solid #f3f4f6;font-size:13px;">${label}</td>
          <td style="padding:7px 14px;color:#4b5563;border-bottom:1px solid #f3f4f6;font-size:13px;">${valor}</td>
        </tr>`
        )
        .join("")

      if (!rows) return ""

      return `
      <div style="margin-bottom:22px;">
        <div style="background:#1e3a5f;color:#ffffff;padding:9px 16px;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:0.06em;">
          ${sec.titulo}
        </div>
        <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;border-top:none;">
          ${rows}
        </table>
      </div>`
    })
    .join("")

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="font-family:Arial,Helvetica,sans-serif;max-width:820px;margin:0 auto;padding:20px;background:#f9fafb;">
  <div style="background:#1e3a5f;color:white;padding:22px 28px;border-radius:8px 8px 0 0;">
    <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;opacity:0.75;margin-bottom:4px;">Consultora Integral de Salud</div>
    <h1 style="margin:0;font-size:20px;font-weight:700;">Declaración Jurada — ${tipo}</h1>
    <div style="margin-top:8px;font-size:13px;opacity:0.85;">${nombre} ${apellido} &mdash; DNI ${dni} &mdash; ${fecha}</div>
  </div>
  <div style="background:#ffffff;padding:28px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
    ${sectionsHtml}
    <div style="margin-top:20px;padding:14px 16px;background:#f0fdf4;border:1px solid #86efac;border-radius:6px;font-size:13px;color:#166534;">
      &#10003; El firmante declaró bajo juramento que los datos consignados son verdaderos y completos.
    </div>
  </div>
  <div style="text-align:center;margin-top:16px;font-size:11px;color:#9ca3af;">
    Formulario enviado desde consultoracis.com.ar — ${new Date().toLocaleString("es-AR")}
  </div>
</body>
</html>`
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { tipo, nombre, apellido, dni, fecha, secciones } = body as {
      tipo: string
      nombre: string
      apellido: string
      dni: string
      fecha: string
      secciones: Seccion[]
    }

    if (!nombre || !apellido || !dni || !tipo) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "tu_api_key_aqui") {
      console.error("RESEND_API_KEY no configurada")
      return NextResponse.json({ error: "Servicio de email no configurado" }, { status: 503 })
    }

    const subject = `DDJJ ${tipo} - ${nombre} ${apellido} - DNI ${dni}`
    const html = buildHtml(tipo, nombre, apellido, dni, fecha, secciones)

    const { error } = await resend.emails.send({
      from: FROM,
      to: [RECIPIENT],
      subject,
      html,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Error al enviar el email" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("DDJJ route error:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
