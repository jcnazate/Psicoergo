// src/app/contacto/page.tsx
"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Clock, Send, MapPin, MessageSquare, User, Building2, Sparkles } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    empresa: "",
    mensaje: "",
  })

  const [sending, setSending] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [okMsg, setOkMsg] = useState<string | null>(null)

  // Estado para errores de validación por campo
  const [fieldErrors, setFieldErrors] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    empresa: "",
    mensaje: "",
  })

  // Regex para validaciones
  const nombreApellidoRegex =
    /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?:[ '’-][A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)*$/ // letras/acentos/espacios/guiones

  // Cualquier dominio válido
  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

  // Empresa: letras, números y signos básicos
  const empresaRegex = /^[\w\s\-\.\,\&\(\)áéíóúÁÉÍÓÚñÑ]{2,}$/i

  // Validación por campo
  const validateField = (name: string, value: string) => {
    const v = value.trim()
    switch (name) {
      case "nombre":
        if (!nombreApellidoRegex.test(v))
          return "Usa solo letras/acentos y opcionalmente espacios o guiones"
        return ""
      case "apellido":
        if (!nombreApellidoRegex.test(v))
          return "Usa solo letras/acentos y opcionalmente espacios o guiones"
        return ""
      case "correo":
        if (!correoRegex.test(v))
          return "Ingresa un correo válido (cualquier dominio)"
        return ""
      case "empresa":
        if (v && !empresaRegex.test(v))
          return "Solo letras, números y . , & ( ) -"
        return ""
      case "mensaje":
        if (v.split(/\s+/).length > 300)
          return "Máximo 300 palabras"
        return ""
      default:
        return ""
    }
  }

  // Al cambiar un campo, validar y actualizar errores
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((s) => ({ ...s, [name]: value }))
    setFieldErrors((errs) => ({
      ...errs,
      [name]: validateField(name, value),
    }))
  }

  // Validar todos los campos antes de enviar
  const validateAll = () => {
    const errs = {
      nombre: validateField("nombre", formData.nombre),
      apellido: validateField("apellido", formData.apellido),
      correo: validateField("correo", formData.correo),
      empresa: validateField("empresa", formData.empresa),
      mensaje: validateField("mensaje", formData.mensaje),
    }
    setFieldErrors(errs)
    return Object.values(errs).every((v) => !v)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg(null)
    setOkMsg(null)
    if (!validateAll()) {
      setErrorMsg("Por favor corrige los errores antes de enviar.")
      return
    }
    setSending(true)
   // ... (resto del archivo igual)

// dentro de handleSubmit:
try {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })

  const json = (await res.json()) as { ok?: boolean; error?: string }

  if (!res.ok || !json.ok) {
    throw new Error(json?.error || "No se pudo enviar el formulario")
  }

  setOkMsg("¡Gracias! Hemos recibido tu solicitud y te contactaremos pronto.")
  setFormData({ nombre: "", apellido: "", correo: "", telefono: "", empresa: "", mensaje: "" })
} catch (err: unknown) {
  const message = err instanceof Error ? err.message : "Ocurrió un error"
  setErrorMsg(message)
} finally {
  setSending(false)
}

  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Correo Electrónico",
      details: "evaluaciones.psicoergonomia@gmail.com",
      action: "mailto:evaluaciones.psicoergonomia@gmail.com?subject=Consulta%20desde%20el%20sitio",
      gradient: "from-[#004300] to-[#005a00]",
    },
    {
      icon: Phone,
      title: "Teléfonos",
      details: "0987057491 / 0992696966",
      action: "tel:+593987057491",
      gradient: "from-[#1a7a1a] to-[#2d8f2d]",
    },
    {
      icon: Phone,
      title: "Teléfono Fijo",
      details: "02 344 0855",
      action: "tel:+59323440855",
      gradient: "from-[#4CAF50] to-[#66bb6a]",
    },
    {
      icon: Clock,
      title: "Horario de Atención",
      details: "Lunes a Viernes: 8:00 AM - 6:00 PM",
      action: null,
      gradient: "from-[#81c784] to-[#a5d6a7]",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-24 bg-gradient-to-br from-[#004300] via-[#005a00] to-[#1a7a1a] overflow-hidden">
        {/* capas decorativas SIN eventos */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#4CAF50] rounded-full blur-3xl opacity-20 pointer-events-none" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#a5d6a7] rounded-full blur-3xl opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-sm text-white font-medium">Estamos aquí para ayudarte</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contáctanos</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              ¿Listo para mejorar el bienestar y la productividad en tu organización? Estamos aquí para ayudarte.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#4CAF50] to-[#81c784] rounded-2xl blur-2xl opacity-30 pointer-events-none" />
              {/* FORM: sin overlays hover y SIN pointer-events-none */}
              <Card className="relative shadow-2xl border-0 overflow-hidden hover:shadow-3xl transition-all duration-500">
                {/* (El overlay decorativo que cubría el card fue removido) */}
                <CardHeader className="relative z-10 space-y-2 pb-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#004300] to-[#1a7a1a] text-white px-4 py-1.5 rounded-full w-fit mb-2">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm font-medium">Formulario de Contacto</span>
                  </div>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#004300] to-[#1a7a1a] bg-clip-text text-transparent">
                    Solicitar Evaluación
                  </CardTitle>
                  <CardDescription className="text-base">
                    Completa el formulario y nos pondremos en contacto contigo para programar una evaluación gratuita.
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="nombre" className="flex items-center gap-2 mb-2 text-[#424242] font-medium">
                          <User className="h-4 w-4 text-[#004300]" />
                          Nombre *
                        </Label>
                        <Input
                          id="nombre"
                          name="nombre"
                          required
                          value={formData.nombre}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          autoCorrect="off"
                          className="h-12 border-2 border-gray-200 focus:border-[#004300] focus:ring-2 focus:ring-[#004300]/20"
                        />
                        {fieldErrors.nombre && <p className="text-red-600 text-sm mt-1">{fieldErrors.nombre}</p>}
                      </div>
                      <div>
                        <Label htmlFor="apellido" className="flex items-center gap-2 mb-2 text-[#424242] font-medium">
                          <User className="h-4 w-4 text-[#004300]" />
                          Apellido *
                        </Label>
                        <Input
                          id="apellido"
                          name="apellido"
                          required
                          value={formData.apellido}
                          onChange={handleChange}
                          placeholder="Tu apellido"
                          autoCorrect="off"
                          className="h-12 border-2 border-gray-200 focus:border-[#004300] focus:ring-2 focus:ring-[#004300]/20"
                        />
                        {fieldErrors.apellido && <p className="text-red-600 text-sm mt-1">{fieldErrors.apellido}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="correo" className="flex items-center gap-2 mb-2 text-[#424242] font-medium">
                        <Mail className="h-4 w-4 text-[#004300]" />
                        Correo Electrónico *
                      </Label>
                      <Input
                        id="correo"
                        name="correo"
                        type="email"
                        required
                        value={formData.correo}
                        onChange={handleChange}
                        placeholder="tu@empresa.com"
                        autoComplete="off"
                        className="h-12 border-2 border-gray-200 focus:border-[#004300] focus:ring-2 focus:ring-[#004300]/20"
                      />
                      {fieldErrors.correo && <p className="text-red-600 text-sm mt-1">{fieldErrors.correo}</p>}
                    </div>

                    <div>
                      <Label htmlFor="telefono" className="flex items-center gap-2 mb-2 text-[#424242] font-medium">
                        <Phone className="h-4 w-4 text-[#004300]" />
                        Teléfono *
                      </Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="0987654321"
                        autoComplete="off"
                        className="h-12 border-2 border-gray-200 focus:border-[#004300] focus:ring-2 focus:ring-[#004300]/20"
                      />
                    </div>

                    <div>
                      <Label htmlFor="empresa" className="flex items-center gap-2 mb-2 text-[#424242] font-medium">
                        <Building2 className="h-4 w-4 text-[#004300]" />
                        Empresa
                      </Label>
                      <Input
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa"
                        autoComplete="off"
                        className="h-12 border-2 border-gray-200 focus:border-[#004300] focus:ring-2 focus:ring-[#004300]/20"
                      />
                      {fieldErrors.empresa && <p className="text-red-600 text-sm mt-1">{fieldErrors.empresa}</p>}
                    </div>

                    <div>
                      <Label htmlFor="mensaje" className="flex items-center gap-2 mb-2 text-[#424242] font-medium">
                        <MessageSquare className="h-4 w-4 text-[#004300]" />
                        Mensaje
                      </Label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        rows={5}
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Cuéntanos sobre tus necesidades específicas..."
                        autoComplete="off"
                        className="border-2 border-gray-200 focus:border-[#004300] focus:ring-2 focus:ring-[#004300]/20 resize-none"
                      />
                      {fieldErrors.mensaje && <p className="text-red-600 text-sm mt-1">{fieldErrors.mensaje}</p>}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={sending}
                      className="w-full h-14 bg-gradient-to-r from-[#004300] to-[#1a7a1a] hover:from-[#005a00] hover:to-[#2d8f2d] text-white font-semibold text-lg shadow-lg transition-all duration-300 disabled:opacity-60"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {sending ? "Enviando..." : "Enviar Solicitud"}
                    </Button>

                    {okMsg && <p className="mt-3 text-green-700">{okMsg}</p>}
                    {errorMsg && <p className="mt-3 text-red-600">{errorMsg}</p>}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Columna de información */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#004300] mb-2">Información de Contacto</h2>
                <p className="text-[#424242] mb-8">Estamos disponibles para atenderte en múltiples canales</p>
                <div className="space-y-4">
                  {contactInfo.map((info, idx) => (
                    <Card
                      key={idx}
                      className="group hover:shadow-xl transition-all duration-500 border-0 shadow-md overflow-hidden"
                    >
                      {/* overlay decorativo no clickeable */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                      />
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                          >
                            <info.icon className="h-7 w-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-[#004300] mb-2 text-lg">{info.title}</h3>
                            {info.action ? (
                              <a href={info.action} className="text-[#424242] hover:text-[#004300] font-medium block">
                                {info.details}
                              </a>
                            ) : (
                              <p className="text-[#424242] font-medium">{info.details}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="relative overflow-hidden border-0 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#004300] via-[#1a7a1a] to-[#2d8f2d] pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
                <CardContent className="relative p-8 z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">¿Necesitas atención inmediata?</h3>
                      <p className="text-white/90 text-base">
                        Llámanos directamente para consultas urgentes o programar una cita.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <Button variant="secondary" size="lg" className="flex-1 bg-white text-[#004300] hover:bg-white/90 font-semibold shadow-lg" asChild>
                      <a href="tel:+593987057491">
                        <Phone className="mr-2 h-4 w-4" />
                        Llamar Ahora
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#004300] font-semibold" asChild>
                      <a
                        href="https://wa.me/593987057491?text=Hola%20Grupo%20Psicoergo%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#a5d6a7] hover:border-[#4CAF50] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#4CAF50] to-[#81c784] rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#004300] mb-2 text-lg">Ubicación</h3>
                      <p className="text-[#424242]">Quito, Ecuador</p>
                      <p className="text-sm text-[#424242]/70 mt-1">Atención en todo el país</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
