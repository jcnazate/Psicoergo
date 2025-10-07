import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ServicesCarousel } from "@/components/servicesCarousel"
import TeamShowcase from "@/components/TeamShowcase"
import { Brain, Users, Shield, Heart, ArrowRight, CheckCircle, Phone, Mail, TrendingUp, BarChart3, ClipboardList } from "lucide-react"
import HeroBackground from "@/components/hero-background"
import Image from "next/image"
import { ClientsMarquee } from "@/components/clients-marquee"

export default function HomePage() {
  

  const process = [
    {
      step: "01",
      title: "Planificación",
      description: "Análisis inicial y diseño de estrategias personalizadas",
       color: "from-[#004300] to-[#005a00]", // Verde más oscuro
      icon: ClipboardList,
    },
    {
      step: "02",
      title: "Ejecución",
      description: "Implementación de evaluaciones y programas especializados",
      color: "from-[#1a7a1a] to-[#2d8f2d]", // Verde medio-oscuro
      icon: BarChart3,
    },
    {
      step: "03",
      title: "Seguimiento",
      description: "Monitoreo continuo y ajustes según resultados",
      color: "from-[#4CAF50] to-[#66bb6a]", // Verde medio-claro
      icon: Users,
    },
    {
      step: "04",
      title: "Asesoría",
      description: "Acompañamiento permanente y mejora continua",
      color: "from-[#81c784] to-[#a5d6a7]", // Verde más claro
      icon: TrendingUp,
    },
  ]


  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
  <section
  className="
    relative
    pt-28 md:pt-32          /* espacio por el header fijo */
    min-h-[850px]
    bg-no-repeat bg-cover bg-center
  "
  style={{ backgroundImage: "url('/images/Fondo.png')" }}
>
  {/* Capa sutil para dar contraste al texto si lo necesitas */}
  <div className="absolute inset-0 bg-black/0 md:bg-black/0" aria-hidden />

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
    <h1 className="text-4xl md:text-5xl font-bold text-[#ffff] md:max-w-3xl">
      Conectamos mente y cuerpo para un trabajo más saludable
    </h1>
    <p className="mt-4 text-lg md:text-xl text-[#ffff]/80 md:max-w-2xl font-bold">
      Ofrecemos evaluaciones especializadas, asesoría técnica y programas 
      de intervención adaptados a tu empresa. Somos tu aliado estratégico
       en salud ocupacional, ergonomía y bienestar emocional.
    </p>
    <div className="mt-8 flex flex-col sm:flex-row gap-4">
      <Link
        href="/contacto"
        className="
          inline-flex items-center justify-center
          rounded-full
          px-5 py-4
          text-sm md:text-base font-semibold
          text-white
          shadow-md
          bg-gradient-to-r from-[#004300] to-[#004300]   /* 👈 degradado */
          transition-all duration-300
          hover:opacity-60"
      >
        Solicita tu evaluación
      </Link>
      {/* Botón "Conoce más sobre nosotros" */}
      <Link
        href="/nosotros"
        className="
          inline-flex items-center justify-center
          rounded-full
          px-5 py-4
          text-sm md:text-base font-semibold
          text-[#004300]
          shadow-md
          bg-white border border-[#004300]
          transition-all duration-300
          hover:bg-[#e8f3ea] hover:text-[#004300]"
      >
        Conoce más sobre nosotros
      </Link>
    </div>
  </div>

</section>

      {/* Services Section */}
      <section className="py-0 bg-background">
        {/* ===== Servicios (Carrusel) ===== */}
        <div className="mx-auto max-w-[1400px] md:max-w-[1600px] px-2 sm:px-4">
      <ServicesCarousel />
      </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-8">
               <p className="text-sm text-primary font-medium mb-2">¿Cómo lo hacemos?</p>
            <h2 className="text-5xl font-bold text-foreground">Nuestro Proceso</h2>
          </div>

        
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
            {process.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="flex items-center w-full lg:w-auto">
                  <div
                    className={`bg-gradient-to-br ${step.color} text-white rounded-t-3xl p-6 shadow-lg w-full lg:w-64 min-h-[240px] flex flex-col justify-between`}
                  >
                    <div>
                      <div className="inline-block bg-black rounded-full px-4 py-1.5 text-xs font-semibold mb-4">
                        Paso {step.step}
                      </div>
                      <div className="mb-4">
                        <Icon className="h-10 w-10 text-white" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-sm text-white/90 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block mx-2">
                      <ArrowRight className="h-8 w-8 text-primary" strokeWidth={2.5} />
                    </div>
                  )}
                  {index < process.length - 1 && (
                    <div className="lg:hidden my-2 rotate-90">
                      <ArrowRight className="h-8 w-8 text-primary mx-auto" strokeWidth={2.5} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      {/* Clients Section */}
      <section
        id="clientes"
        className="py-16 bg-background scroll-mt-32"
        style={{ scrollMarginTop: "7rem" }} // Ajusta según la altura de tu header
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold text-foreground">Confían en nosotros</h2>
          </div>
          <ClientsMarquee />
        </div>
      </section>

         <section className="py-0 bg-background">
        {/* ===== Servicios (Carrusel) ===== */}
        <div className="mx-auto max-w-[1400px] md:max-w-[1600px] px-2 sm:px-4">
       <TeamShowcase />
      </div>
      </section>

     
      <Footer />
    </div>
  )
}
