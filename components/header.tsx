// components/header.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const GREEN = "#004300"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Contacto", href: "/contacto" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname?.startsWith(href)
  }

  return (
    <header className="fixed top-4 left-0 w-full z-[60]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* NAV tipo cápsula */}
        <div
          className="
            relative flex items-center justify-between
            h-16 rounded-full
            bg-white/95 backdrop-blur
            ring-1 ring-black/5 shadow-lg
            px-4 md:px-6
          "
        >
          {/* Logo + nombre */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/LogoGrande.png"
              alt="GRUPO PSICOERGO"
              width={72}
              height={60}
              className="object-contain"
              priority
            />
            <span className="hidden sm:inline text-lg md:text-xl font-extrabold tracking-wide text-[#424242]">
              GRUPO <span style={{ color: GREEN }}>PSICOERGO</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="ml-6 flex items-center gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative px-3 py-2 rounded-md text-sm font-semibold transition-colors
                    ${isActive(item.href)
                      ? "text-[#004300]"
                      : "text-gray-700 hover:text-[#004300]"}
                  `}
                >
                  {item.name}
                  {/* subrayado en activo */}
                  {isActive(item.href) && (
                    <span className="absolute left-2 right-2 -bottom-0.5 h-0.5 bg-[#004300] rounded-full" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Button asChild className="rounded-full font-semibold">
              <Link href="/contacto">Solicitar Evaluación</Link>
            </Button>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Abrir menú"
              className="rounded-full"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Panel móvil */}
          {isMenuOpen && (
            <div
              className="
                absolute top-full left-0 right-0 mt-2
                md:hidden
                rounded-2xl bg-white ring-1 ring-black/10 shadow-xl
                overflow-hidden
              "
            >
              <div className="px-3 py-2 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      block px-3 py-2 rounded-lg text-base font-medium transition-colors
                      ${isActive(item.href)
                        ? "text-[#004300] bg-[#004300]/10"
                        : "text-gray-800 hover:text-[#004300] hover:bg-[#004300]/5"}
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-3 pb-2">
                  <Button asChild className="w-full rounded-full font-semibold">
                    <Link href="/contacto" onClick={() => setIsMenuOpen(false)}>
                      Solicitar Evaluación
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
