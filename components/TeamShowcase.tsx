"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

type Member = {
  name: string
  role: string
  photo: string
  blurb?: string
}

const members: Member[] = [
  {
    name: "Marisol Estrada",
    role: "Gerente General ",
    photo: "/Miembros/Marisol.png",   // 👈 coloca tus fotos en /public/Miembros
    blurb: "Grupo Psicoergo.",
  },
  {
    name: "Evelyn Rivera",
    role: "Médico Ocupacional",
    photo: "/Miembros/Psicologa.png",
    blurb: "Grupo Psicoergo",
  },
]

export default function TeamShowcase() {
  const [active, setActive] = useState(0) // 0 ó 1

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-white/70 shadow-xl ring-1 ring-black/5 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Columna izquierda: título/CTA */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Conoce a<br />
                <span className="text-[#0a6b2a]">nuestro equipo</span>
              </h2>

              <p className="mt-4 text-gray-600">
                Profesionales en psicosocial, ergonomía y salud ocupacional.
              </p>

              
            </div>

            {/* Paneles de personas (2) */}
            <div className="md:col-span-2 flex h-[420px] md:h-[500px]">
              {members.map((m, i) => {
                const isActive = i === active
                return (
                  <button
                    key={m.name}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`
                      relative overflow-hidden
                      transition-[flex-grow] duration-500 ease-out
                      ${isActive ? "flex-[1.6]" : "flex-[0.9]"}
                      group
                    `}
                    aria-pressed={isActive}
                  >
                    {/* Foto fondo */}
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className={`
                        object-cover transition-all duration-500
                        ${isActive ? "scale-100" : "scale-[1.08] grayscale-[35%]"}
                      `}
                      priority={i === 0}
                    />

                    {/* Vignette/oscurecido para legibilidad */}
                    <div className={`absolute inset-0 transition-all duration-500
                      ${isActive ? "bg-black/25" : "bg-black/35"}`} />

                    {/* Contenido superpuesto */}
                    <div className={`
                      absolute inset-0 flex flex-col justify-end p-6 md:p-8
                      text-left transition-all duration-500
                      ${isActive ? "opacity-100 translate-y-0" : "opacity-70 translate-y-2"}
                    `}>
                      {/* Etiqueta superior (icono redondo) */}
                      <div className={`
                        absolute left-6 top-6 h-11 w-11 rounded-full grid place-items-center
                        backdrop-blur bg-white/30 ring-1 ring-white/50
                        transition-all duration-500
                        ${isActive ? "scale-100" : "scale-90"}
                      `}>
                        {/* puntito decorativo */}
                        <span className="h-2.5 w-2.5 rounded-full bg-white" />
                      </div>

                      <div>
                        <h3 className="text-white font-extrabold text-2xl md:text-3xl leading-tight drop-shadow">
                          {m.name}
                        </h3>
                        <p className="text-white/90 font-medium">{m.role}</p>
                        {m.blurb && (
                          <p className="mt-2 text-white/85 text-sm max-w-[42ch]">{m.blurb}</p>
                        )}
                      </div>

                      {/* Botón fantasma */}
                      <span
                        className={`
                          mt-4 inline-flex items-center self-start rounded-full
                          px-5 py-2 text-sm font-semibold
                          ring-1 ring-white/70 text-white/95
                          transition-all duration-300
                          group-hover:bg-white group-hover:text-[#004300]
                        `}
                      >
                        Ver perfil
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </div>

                    {/* Borde redondeado entre paneles */}
                    <div className="absolute inset-y-0 right-0 w-px bg-white/40 md:opacity-100 opacity-0" />
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
