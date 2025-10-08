// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

// Nos aseguramos de usar runtime Node.js (no Edge) porque Nodemailer lo requiere
export const runtime = "nodejs"

// Expresiones regulares para validaciones
const nombreApellidoRegex = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñA-ZÁÉÍÓÚÑ\s'-]*$/
const empresaRegex = /^[\w\s\-\.\,\&\(\)áéíóúÁÉÍÓÚñÑ]{2,}$/i
const correoRegex = /^[\w\.-]+@(?:gmail|hotmail|outlook|yahoo)\.(?:com|es)$/i

// Validación de los datos que vienen del form
const FormSchema = z.object({
  nombre: z.string()
    .min(1, "Nombre requerido")
    .regex(nombreApellidoRegex, "Solo letras, la primera mayúscula"),
  apellido: z.string()
    .min(1, "Apellido requerido")
    .regex(nombreApellidoRegex, "Solo letras, la primera mayúscula"),
  correo: z.string()
    .email("Correo inválido")
    .regex(correoRegex, "Correo debe ser gmail, hotmail, outlook o yahoo"),
  telefono: z.string().min(6, "Teléfono inválido"),
  empresa: z.string().optional().default("").refine(
    (val) => !val || empresaRegex.test(val),
    { message: "Solo letras, números y . , & ( ) -" }
  ),
  mensaje: z.string().optional().default("").refine(
    (val) => !val || val.trim().split(/\s+/).length <= 300,
    { message: "Máximo 300 palabras" }
  ),
})

export async function POST(req: NextRequest) {
  try {
    const json = await req.json()
    const data = FormSchema.parse(json)

    // Transport con credenciales del .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT || 465),
      secure: Number(process.env.MAIL_PORT || 465) === 465, // true para 465
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })

    // Email en texto plano
    const text = [
      "Nueva solicitud de evaluación",
      "-------------------------------------",
      `Nombre:   ${data.nombre}`,
      `Apellido: ${data.apellido}`,
      `Correo:   ${data.correo}`,
      `Teléfono: ${data.telefono}`,
      `Empresa:  ${data.empresa}`,
      "",
      "Mensaje:",
      data.mensaje || "(sin mensaje)",
    ].join("\n")

    // Email en HTML
    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif">
        <h2 style="color:#0d5a1b;margin:0 0 12px">Nueva solicitud de evaluación</h2>
        <table style="border-collapse:collapse;width:100%;max-width:640px">
          <tbody>
            <tr><td style="padding:6px 0"><b>Nombre:</b></td><td>${data.nombre}</td></tr>
            <tr><td style="padding:6px 0"><b>Apellido:</b></td><td>${data.apellido}</td></tr>
            <tr><td style="padding:6px 0"><b>Correo:</b></td><td>${data.correo}</td></tr>
            <tr><td style="padding:6px 0"><b>Teléfono:</b></td><td>${data.telefono}</td></tr>
            <tr><td style="padding:6px 0"><b>Empresa:</b></td><td>${data.empresa}</td></tr>
          </tbody>
        </table>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0" />
        <p style="margin:0 0 4px"><b>Mensaje:</b></p>
        <p style="white-space:pre-wrap">${(data.mensaje || "").replace(/</g, "&lt;")}</p>
      </div>
    `

    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.MAIL_USER,
      to: (process.env.MAIL_TO || "").split(",").map((s) => s.trim()),
      subject: `Nueva solicitud – ${data.nombre} ${data.apellido}`,
      replyTo: data.correo, // si respondes desde el email, va al cliente
      text,
      html,
    })

    return NextResponse.json({ ok: true, id: info.messageId })
  } catch (err: any) {
    // Si falló la validación Zod
    if (err?.issues) {
      return NextResponse.json(
        { ok: false, error: "Datos inválidos", details: err.issues },
        { status: 400 },
      )
    }
    console.error("Error enviando correo:", err)
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar el correo" },
      { status: 500 },
    )
  }
}
