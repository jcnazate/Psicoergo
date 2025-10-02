// components/ServiceCard.tsx
import Link from "next/link"
import { Card } from "@/components/ui/card"
import type { ServiceItem } from "@/src/data/services"
import Image from "next/image"

const GREEN = "#004300"

export function ServiceCard({
  item,
  banner,            // ruta de imagen horizontal o vertical
  tall = true,        // deja true para tarjetas largas
}: {
  item: ServiceItem
  banner?: string
  tall?: boolean
}) {
  const Icon = item.icon
  return (
    <Card
      className="
        group relative overflow-hidden
        rounded-3xl bg-white
        border border-gray-100
        shadow-[0_10px_30px_rgba(0,0,0,0.06)]
        transition-all duration-300
        hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)]
        hover:-translate-y-1
      "
    >
      {/* Imagen de fondo (cubre toda la tarjeta) */}
      <div className="absolute inset-0 -z-10">
        {banner ? (
          <Image src={banner} alt={item.title} fill className="object-cover" />
        ) : (
          <div className="h-full w-full bg-gradient-to-b from-[#e8f4ea] to-[#cde5d0]" />
        )}
        {/* Imagen más tenue por defecto */}
        <div className="absolute inset-0 bg-white/70 group-hover:bg-white/0 transition-colors duration-300" />
      </div>

      {/* Overlay de hover: #004300 → verde → blanco */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-0
          group-hover:opacity-95 transition-opacity duration-300
        "
        style={{
          background:
            "linear-gradient(180deg, #004300 0%, #6AA96A 45%, #FFFFFF 95%)",
          mixBlendMode: "multiply",
        }}
      />

      <div className={`relative z-10 px-6 md:px-7 ${tall ? "py-8 md:py-10 min-h-[460px]" : "py-6"}`}>
        {/* Icono circular */}
        <div className="mb-5 flex justify-center">
          <div className="h-14 w-14 rounded-full bg-[#00430014] grid place-items-center backdrop-blur-[1px]">
            <Icon className="h-7 w-7" style={{ color: GREEN }} />
          </div>
        </div>

        {/* Título */}
        <h3 className="text-xl font-extrabold text-gray-900 text-center group-hover:text-white transition-colors">
          {item.title}
        </h3>

        {/* Bullets */}
        <ul className="mt-4 space-y-2 text-sm text-gray-700 group-hover:text-white/95">
          {item.bullets.map((b, i) => (
            <li key={i} className="leading-relaxed flex gap-2 justify-center text-center">
              <span className="text-[15px]" style={{ color: GREEN }}>✓</span>
              <span className="max-w-[28ch]">{b}</span>
            </li>
          ))}
        </ul>

        {/* Botón */}
        <div className="mt-6 flex justify-center">
          <Link
            href={item.href ?? "#"}
            className="
              inline-flex items-center justify-center
              rounded-full px-6 py-2.5 text-sm font-semibold
              border border-transparent
              bg-[var(--btn-bg)] text-[var(--btn-fg)]
              shadow-sm transition-all duration-300
              group-hover:bg-white group-hover:text-[#004300]
            "
            style={
              {
                ["--btn-bg"]: GREEN,
                ["--btn-fg"]: "#FFFFFF",
              } as Record<string, string>
            }
          >
            Detalles →
          </Link>
        </div>
      </div>
    </Card>
  )
}
