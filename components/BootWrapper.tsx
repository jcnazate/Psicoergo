"use client"

import { useEffect, useState } from "react"
import { FullScreenLoader } from "@/components/FullScreenLoader"

export default function BootWrapper({ children }: { children: React.ReactNode }) {
  const [booting, setBooting] = useState(true)

  useEffect(() => {
    // Simula la carga inicial: ajusta el tiempo a tu gusto o
    // cámbialo para que se oculte cuando termine alguna llamada real.
    const t = setTimeout(() => setBooting(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <FullScreenLoader show={booting} />
      {children}
    </>
  )
}
