// components/footer.tsx
import Link from "next/link"
import Image from "next/image"
import {
  Mail, Phone, MapPin, ArrowRight,
  Facebook, Instagram, Linkedin
} from "lucide-react"

const GREEN = "#004300"

export function Footer() {
  return (
    <footer className="relative mt-24">
      {/* Fondo con mayor contraste */}
      <div
        className="rounded-t-3xl text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #6AA96A 55%, #004300 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 py-14">
          {/* Cabecera + CTA */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 mb-10 border-b border-white/15">
            <h3 className="text-4xl md:text-5xl text-[#004300] font-extrabold tracking-tight">
              <span className="opacity-95">Conectemos</span>{" "}
              <span className="text-[#004300]">aquí</span>
            </h3>

            <Link
              href="/contacto"
              className="inline-flex items-center rounded-full px-6 py-3
                         bg-white/90 text-[#1f2524] font-semibold
                         hover:bg-white transition ring-1 ring-white/40"
            >
              Contáctanos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* 4 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Logo + texto + redes */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/LogoGrande.png"
                  alt="Logo GRUPO PSICOERGO"
                  width={90}
                  height={90}
                  className="object-contain"
                />
                <div className="text-2xl md:text-3xl font-extrabold tracking-wide">
                  GRUPO <span className="text-[#004300]">PSICOERGO</span>
                </div>
              </div>

              <p className="mt-4 text-white/85 text-lg leading-relaxed max-w-md">
                Conectamos mente y cuerpo para un trabajo más saludable.
                Evaluaciones, asesoría técnica y programas de intervención
                en psicosocial, ergonomía y salud ocupacional.
              </p>

              <div className="mt-5 flex items-center gap-3">
                {[
                  { Icon: Facebook, href: "#" },
                  { Icon: Instagram, href: "#" },
                  { Icon: Linkedin, href: "#" },
                ].map(({ Icon, href }, i) => (
                  <Link
                    key={i}
                    href={href}
                    className="grid h-10 w-10 place-items-center rounded-full
                               bg-white/15 hover:bg-white/25 transition
                               ring-1 ring-white/20"
                    aria-label="Red social"
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Navegación */}
            <div className="md:col-span-2">
              <h4 className="text-xl font-bold mb-4 text-[#004300]">Navegación</h4>
              <ul className="space-y-2 text-white/90 text-lg">
                {[
                  ["Inicio", "/"],
                  ["Nosotros", "/nosotros"],
                  ["Servicios", "/servicios"],
                  ["Clientes", "/#clientes"],
                  ["Contacto", "/contacto"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="inline-block rounded-full px-3 py-1
                                 hover:bg-white/10 transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Servicios */}
            <div className="md:col-span-3">
              <h4 className="text-xl font-bold mb-4 text-[#004300]">Servicios</h4>
              <ul className="space-y-2 text-white/90 text-lg">
                {[
                  ["Prevención Psicosocial", "/servicios#psicosocial"],
                  ["Ergonomía Aplicada ", "/servicios#ergonomia"],
                  ["Salud Ocupacional", "/servicios#salud-ocupacional"],
                  ["Servicios Psicológicos (24/7)", "/servicios#psicologicos"],
                  ["Seguridad ", "/servicios#seguridad"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="inline-block rounded-full px-3 py-1
                                 hover:bg-black/10 transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto + boletín */}
            <div className="md:col-span-3">
              <h4 className="text-xl font-bold mb-4 text-[#004300]">Contacto</h4>

              <div className="space-y-3 text-white/90 text-lg">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-1" />
                  <a
                    href="mailto:evaluaciones.psicoergonomia@gmail.com"
                    className="hover:underline"
                  >
                    evaluaciones.psicoergonomia@gmail.com
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-1" />
                  <div>0987057491 · 0992696966 · 023440855</div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1" />
                  <div>Quito, Ecuador</div>
                </div>
              </div>

             
            </div>
          </div>

          {/* Barra inferior */}
          <div className="mt-10 pt-6 border-t border-white/15
                          flex flex-col md:flex-row items-center
                          justify-between gap-4 text-sm text-white/80">
            <div>
              © {new Date().getFullYear()} GRUPO PSICOERGO. Todos los derechos reservados.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/terminos" className="hover:underline">Términos de uso</Link>
              <Link href="/privacidad" className="hover:underline">Política de privacidad</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
