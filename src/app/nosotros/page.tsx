"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Heart,
  Users,
  Award,
  Target,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const BRAND = {
  greenDark: "#004300",
  greenMid: "#6AA96A",
  gray: "#424242",
  white: "#FFFFFF",
}

// 👉 Define el tipo Slide
type Slide = {
  image: string
  title: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
}

// 👉 Tu data del carrusel
const SLIDES: Slide[] = [
  {
    image: "/images/1.png",
    title: "Una autoevaluación con reporte preventivo",
    subtitle: "Prevención psicosocial y ergonómica para tu equipo",
    ctaText: "Solicitar evaluación",
    ctaHref: "/contacto",
  },
  {
    image: "/images/2.png",
    title: "Cuidamos la salud mental y física en el trabajo",
    subtitle: "Programas, diagnósticos y acompañamiento continuo",
    ctaText: "Conoce nuestros servicios",
    ctaHref: "/servicios",
  },
  {
    image: "/images/3.png", // si es "nosotros3.png", corrígelo aquí
    title: "Productividad y bienestar van de la mano",
    subtitle:
      "Evaluación ergonómica, psicosocial y salud ocupacional",
    ctaText: "Contáctanos",
    ctaHref: "/contacto",
  },
]

export default function NosotrosPage() {
  // Valores + imagen de fondo (como tenías)
  const values = [
    { icon: Heart,  title: "Respeto",       image: "/images/Valores/Respeto.png" },
    { icon: Users,  title: "Lealtad",       image: "/images/Valores/Lealtad.png" },
    { icon: Award,  title: "Calidad",       image: "/images/Valores/Calidad.png" },
    { icon: Target, title: "Transparencia", image: "/images/Valores/Transparencia.png" },
  ]

  // 👉 Hooks arriba del return (no dentro del JSX)
  const [index, setIndex] = useState(0)

  // autoplay
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length)
    }, 6000)
    return () => clearInterval(t)
  }, [])

  const goto = (i: number) => setIndex((i + SLIDES.length) % SLIDES.length)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ===== HERO / CARRUSEL FULL-BLEED ===== */}
     {/* ===== HERO / CARRUSEL FULL-BLEED ===== */}
{/* ===== HERO / CARRUSEL FULL-BLEED ===== */}
<section className="full-bleed col-span-full ">
  {/* Forzamos 1920/900 = 2.1333:1 */}
  <div className="relative w-full aspect-[1920/900] overflow-hidden">
    {SLIDES.map((slide, i) => (
      <div
        key={i}
        aria-hidden={index !== i}
        className={`absolute inset-0 transition-opacity duration-700 ${index === i ? "opacity-100 z-10" : "opacity-0 z-0"}`}
      >
        {/* Imagen SIN recorte */}
        <Image
          src={slide.image}
          alt=""
          fill
          sizes="100vw"
          className="object-contain object-center bg-white"  // <- importante object-contain
          priority={i === 0}
        />

       
      </div>
    ))}

    {/* Flecha izquierda */}
    <button
      aria-label="Anterior"
      onClick={() => goto(index - 1)}
      className="
        absolute left-4 md:left-6 top-1/2 -translate-y-1/2
        grid place-items-center h-12 w-12 rounded-full
        bg-white/90 text-[#004300] ring-1 ring-black/10 shadow
        hover:bg-white transition z-20
      "
    >
      <ChevronLeft className="h-6 w-6" />
    </button>

    {/* Flecha derecha */}
    <button
      aria-label="Siguiente"
      onClick={() => goto(index + 1)}
      className="
        absolute right-4 md:right-6 top-1/2 -translate-y-1/2
        grid place-items-center h-12 w-12 rounded-full
        bg-white/90 text-[#004300] ring-1 ring-black/10 shadow
        hover:bg-white transition z-20
      "
    >
      <ChevronRight className="h-6 w-6" />
    </button>

    {/* Dots */}
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
      {SLIDES.map((_, i) => (
        <button
          key={i}
          onClick={() => goto(i)}
          aria-label={`Ir al slide ${i + 1}`}
          className={`
            h-2.5 rounded-full transition-all
            ${index === i ? "w-7 bg-white" : "w-2.5 bg-white/60 hover:bg-white"}
          `}
        />
      ))}
    </div>
  </div>
</section>



      {/* ========= VALORES ========= */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: BRAND.greenDark }}>
              Nuestros valores
            </h2>
            <div
              className="mt-4 h-1 w-24 mx-auto rounded-full"
              style={{ backgroundColor: BRAND.greenDark }}
            />
          </div>

          {/* Siempre una fila: grid-cols-1 sm:grid-cols-2 md:grid-cols-4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {values.map(({ icon: Icon, title, image }, i) => (
              <article
                key={i}
                className="group perspective-1000 rounded-2xl border border-black/5 shadow-sm  h-[320px] sm:h-[480px] md:h-[300px] hover:shadow-lg transition overflow-hidden"
                style={{ perspective: "1000px" }}
              >
                <div className="relative w-full h-full transition-transform duration-500 group-hover:rotate-y-180"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Imagen de fondo */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover opacity-30"
                    />
                  </div>
                  {/* Front */}
                <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-8">
                  {/* (opcional) halo sutil durante hover */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#6AA96A]/15 ring-4 ring-white/50
                                    opacity-0 scale-90 transition duration-300
                                    group-hover:opacity-100 group-hover:scale-100" />
                  </div>

                  {/* tu icono si lo quieres */}
                  {/* <Icon className="h-14 w-14 text-[#004300]" /> */}

                  <h3 className="mt-4 text-2xl font-bold text-[#424242]">
                    {title}
                  </h3>
                </div>

                 {/* Back (ahora con halo + icono) */}
                  <div className="absolute inset-0 rounded-2xl rotate-y-180 backface-hidden z-10 overflow-hidden">
                    {/* Fondo suave */}
                    <div className="absolute inset-0 bg-[#e8f3ea]" />

                    {/* HALO detrás del icono */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-36 h-36 md:w-40 md:h-40 rounded-full
                                      bg-[#6AA96A]/25 ring-8 ring-white/60
                                      shadow-inner blur-[1px]" />
                    </div>

                {/* Contenido centrado */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
                  {/* Icono sobre el halo */}
                  <Icon className="h-12 w-12 md:h-14 md:w-14 mb-3"
                        style={{ color: BRAND.greenDark }} />
                  <h3 className="text-2xl font-bold" style={{ color: BRAND.greenDark }}>
                    {title}
                  </h3>
                </div>
              </div>
              </div>
                <div
                  className="h-1 w-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${BRAND.greenMid}, transparent)` }}
                />
              </article>
            ))}
          </div>
           
        </div>
      </section>

      {/* ========= MISIÓN & VISIÓN ========= */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Misión */}
            <article className="group relative bg-gray-100 rounded-3xl shadow-md hover:shadow-xl transition">
              <div
                className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl"
                style={{ backgroundColor: BRAND.greenDark }}
              />
              <div className="p-10">
                <header className="flex items-start justify-between mb-6">
                  <h3 className="text-3xl font-bold" style={{ color: BRAND.greenDark }}>
                    Misión
                  </h3>
                  <Target className="h-8 w-8" style={{ color: BRAND.greenMid }} />
                </header>
                <p className="text-lg leading-relaxed" style={{ color: BRAND.gray }}>
                  Mejorar la calidad de vida laboral a través de soluciones integrales
                  en psicología organizacional y ergonomía. Brindamos asesoría
                  especializada para promover entornos de trabajo saludables,
                  seguros y productivos, impulsando el bienestar físico, mental y
                  emocional de las personas en las organizaciones.
                </p>
              </div>
            </article>

            {/* Visión */}
            <article className="group relative bg-gray-100 rounded-3xl shadow-md hover:shadow-xl transition">
              <div
                className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl"
                style={{ backgroundColor: BRAND.greenMid }}
              />
              <div className="p-10">
                <header className="flex items-start justify-between mb-6">
                  <h3 className="text-3xl font-bold" style={{ color: BRAND.greenDark }}>
                    Visión
                  </h3>
                  <Eye className="h-8 w-8" style={{ color: BRAND.greenMid }} />
                </header>
                <p className="text-lg leading-relaxed" style={{ color: BRAND.gray }}>
                  Ser reconocidos como líderes en Latinoamérica en consultoría en
                  salud ocupacional, bienestar psicológico y ergonomía aplicada;
                  innovando constantemente y transformando la cultura laboral hacia
                  un enfoque más humano, sostenible y eficiente.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

