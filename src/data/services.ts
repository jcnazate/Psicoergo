// src/data/services.ts
import {
  Brain,
  Armchair,
  Stethoscope,
  Headphones,
  ShieldCheck,
} from "lucide-react"

export type ServiceItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  bullets: string[]
  href?: string
}

export const services: ServiceItem[] = [
  {
    icon: Brain,
    title: "🌱 Servicios en Riesgo Psicosocial",
    bullets: [
      "Diagnóstico y evaluación con instrumentos",
      "Planes de intervención personalizados",
      "Salud mental: estrés, acoso, burnout",
    ],
    href: "/servicios#psicosocial",
  },
  {
    icon: Headphones,
    title: "🖥️ Servicios Psicológicos (24/7) – SER",
    bullets: [
      "Soporte emocional y resiliencia",
      "Clínica, nutrición, neurofeedback",
      "Talleres, conferencias y terapias",
    ],
    href: "/servicios#psicologicos",
  },
  {
    icon: Armchair,
    title: "💺 Servicios en Ergonomía",
    bullets: [
      "ISO 12295:2014 • cargas • posturas",
      "Antropometría y diseño de puestos",
      "Reincorporación y wearables",
    ],
    href: "/servicios#ergonomia",
  },
  {
    icon: Stethoscope,
    title: "🩺 Salud Ocupacional",
    bullets: [
      "Vigilancia de la salud y exámenes",
      "Salud sexual y reproductiva",
      "Vacunación • Actívate y Vive",
    ],
    href: "/servicios#salud-ocupacional",
  },
  {
    icon: ShieldCheck,
    title: "🦺 Seguridad y Prevención",
    bullets: [
      "Sistemas ISO 45001",
      "Emergencias y matriz de riesgos",
      "Comités paritarios y accidentes",
    ],
    href: "/servicios#seguridad",
  },
]
