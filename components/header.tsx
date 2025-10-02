// components/header.tsx
"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function Header() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : ""
  const [activeHash, setActiveHash] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const onHashChange = () => setActiveHash(window.location.hash)
      window.addEventListener("hashchange", onHashChange)
      setActiveHash(window.location.hash)
      return () => window.removeEventListener("hashchange", onHashChange)
    }
  }, [])

  return (
    <header className="fixed top-4 left-0 w-full z-[60]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            flex items-center justify-between
            rounded-full
            bg-white
            shadow-lg
            px-6 md:px-10 h-16
          "
        >
          {/* Logo + nombre */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/LogoGrande.png"
              alt="GRUPO PSICOERGO"
              width={72}
              height={60}
              className="object-contain"
              priority
            />
            <span className="hidden sm:inline text-lg md:text-xl font-bold text-[#424242] tracking-wide rounded">
              GRUPO <span className="text-[#03842a]">PSICOERGO</span>
            </span>
          </div>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-base font-semibold text-gray-700 hover:text-green-700 rounded"
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className="text-base font-semibold text-gray-700 hover:text-green-700 rounded"
            >
              Nosotros
            </Link>
            <Link
              href="/#clientes"
              className={`text-base font-semibold rounded transition-colors
                ${activeHash === "#clientes" ? "bg-[#d6f5e3] text-[#03842a]" : "text-gray-700 hover:text-green-700"}
                px-4 py-2`}
            >
              Clientes
            </Link>
            <Link
              href="/servicios"
              className="text-base font-semibold text-gray-700 hover:text-green-700 rounded"
            >
              Servicios
            </Link>
          </nav>

          {/* CTA */}
          <Link
            href="/contacto"
            className="
              inline-flex items-center justify-center
              rounded-full
              px-5 py-2
              text-sm md:text-base font-semibold
              text-white
              shadow-md
              bg-gradient-to-r from-[#72c367] to-[#337233]
              transition-all duration-300
              hover:opacity-60
            "
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </header>
  )
}
