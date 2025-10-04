// app/layout.tsx
import type { Metadata } from "next"
import "./globals.css"
import BootWrapper from "@/components/BootWrapper"

export const metadata: Metadata = {
  title: "Grupo Psicoergo",
  description: "Salud ocupacional, ergonomía y bienestar",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {/* 👇 Loader de pantalla completa mientras “booting” sea true */}
        <BootWrapper>
          {children}
        </BootWrapper>
      </body>
    </html>
  )
}
