import Image from "next/image"
import { CheckCircle2, Clock, Users, Shield, Activity, Briefcase, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ServiciosPage() {
  const servicios = [
    {
      id: 1,
      icon: Users,
      emoji: "🌱",
      title: "Servicios en Riesgo Psicosocial",
      badge: "Salud Mental",
      description:
        "En GRUPO PSICOERGO apoyamos a las organizaciones en la detección, prevención y gestión de riesgos que afectan la salud mental y emocional de los colaboradores.",
      image: "/images/servicios/Servicios1.png",
      items: [
        "Diagnóstico psicosocial: uso de instrumentos especializados adaptados a la realidad de cada empresa.",
        "Planes de intervención personalizados, diseñados para atender las necesidades concretas de cada equipo de trabajo.",
        "Atención a problemáticas específicas: estrés laboral, acoso, burnout, teletrabajo y factores emocionales que afectan el clima organizacional.",
        "Programas de bienestar laboral: estrategias de prevención, talleres y gestión emocional para fortalecer la resiliencia y la cultura de cuidado en el trabajo.",
      ],
      conclusion: "Con este servicio ayudamos a construir entornos más saludables, productivos y humanos.",
      gradient: "from-[#004300] to-[#005a00]",
      stats: [
        { value: "10+", label: "Empresas atendidas" },
        { value: "95%", label: "Satisfacción" },
      ],
    },
    {
      id: 2,
      icon: Clock,
      emoji: "🧠",
      title: "Servicios Psicológicos (24/7) – Programa SER",
      badge: "Disponible 24/7",
      description:
        "Nuestro Programa SER (Soporte Emocional y Resiliencia) está disponible las 24 horas del día, ofreciendo atención inmediata y especializada.",
      image: "/images/servicios/Psicologicos2.png",
      items: [
        "Psicología clínica: acompañamiento profesional para la salud mental individual.",
        "Nutrición: hábitos alimenticios saludables que potencian el bienestar integral.",
        "Bioneuroemoción y neurofeedback: herramientas innovadoras para gestionar emociones y mejorar la calidad de vida.",
        "Talleres, conferencias y terapias grupales: espacios de aprendizaje, prevención y acompañamiento emocional en equipo.",
      ],
      conclusion:
        "Este servicio fortalece la salud mental, física y emocional de los colaboradores, promoviendo la resiliencia y el equilibrio en la vida laboral.",
      gradient: "from-[#005a00] to-[#007a00]",
      stats: [
        { value: "24/7", label: "Disponibilidad" },
        { value: "100+", label: "Consultas mensuales" },
      ],
    },
    {
      id: 3,
      icon: Briefcase,
      emoji: "💺",
      title: "Servicios en Ergonomía",
      badge: "Ergonomía Avanzada",
      description:
        "Diseñamos soluciones ergonómicas que optimizan los puestos de trabajo y previenen lesiones musculoesqueléticas.",
      image: "/images/servicios/Servicios6.png",
      items: [
        "Valoración y diseño ergonómico de cada puesto de trabajo (Identificación, ErgoCheck).",
        "Evaluación de tareas que implican cargas, empujes, arrastres, movimientos repetitivos y posturas forzadas.",
        "Mediciones antropométricas para crear puestos adaptados a cada trabajador.",
        "Asesoría en reincorporación laboral tras bajas por trastornos musculoesqueléticos.",
        "Selección y diseño de elementos de trabajo que favorecen la productividad y seguridad.",
        "Uso de wearables para el monitoreo de signos vitales, fatiga y prevención de accidentes.",
      ],
      conclusion: "Con este servicio buscamos garantizar un entorno laboral seguro, eficiente y saludable.",
      gradient: "from-[#007a00] to-[#009a00]",
      stats: [
        { value: "100+", label: "Puestos evaluados" },
        { value: "85%", label: "Reducción de lesiones" },
      ],
    },
    {
      id: 4,
      icon: Activity,
      emoji: "🩺",
      title: "Salud Ocupacional",
      badge: "Prevención Integral",
      description: "Brindamos un acompañamiento integral en la protección de la salud física de los trabajadores.",
      image: "/images/servicios/Servicios5.png",
      items: [
        "Vigilancia médica continua y especializada.",
        "Exámenes médicos laborales: preempleo, periódicos, especiales y de salida.",
        "Programas de prevención: salud sexual y reproductiva, VIH/SIDA, consumo de alcohol, tabaco y drogas.",
        "Programa Actívate y Vive: promoción de la actividad física y estilos de vida saludables.",
        "Campañas de vacunación para la protección colectiva.",
      ],
      conclusion:
        "Con este servicio contribuimos a la prevención de enfermedades laborales y al fortalecimiento del bienestar integral.",
      gradient: "from-[#009a00] to-[#7cb342]",
      stats: [
        { value: "200+", label: "Exámenes anuales" },
        { value: "98%", label: "Cobertura" },
      ],
    },
    {
      id: 5,
      icon: Shield,
      emoji: "🦺",
      title: "Seguridad y Prevención de Riesgos Laborales",
      badge: "Seguridad Total",
      description:
        "Apoyamos a las empresas en la implementación de sistemas de gestión que protegen la integridad de sus equipos.",
      image: "/images/servicios/Servicios7.png",
      items: [
        "Implementación y auditoría de sistemas de gestión ",
        "Elaboración de planes de emergencia y contingencia.",
        "Diseño de la matriz de riesgos laborales.",
        "Creación del reglamento interno de higiene y seguridad.",
        "Conformación de organismos paritarios de seguridad.",
        "Gestión de accidentes y enfermedades laborales con planes de acción eficaces.",
      ],
      conclusion:
        "Con este servicio ayudamos a las organizaciones a cumplir con la normativa vigente y a crear una cultura sólida de prevención y seguridad.",
      gradient: "from-[#7cb342] to-[#a5d6a7]",
      stats: [
        { value: "50+", label: "Certificaciones " },
        { value: "90%", label: "Reducción de accidentes" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#004300] via-[#005a00] to-[#007a00] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              Soluciones Profesionales
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">Nuestros Servicios</h1>
            <p className="text-xl md:text-2xl text-white/90 text-balance leading-relaxed max-w-3xl mx-auto">
              Soluciones integrales para el bienestar, la seguridad y la productividad de tu equipo
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {servicios.map((servicio, index) => (
              <div
                key={servicio.id}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
              >
                <div className={`grid lg:grid-cols-2 ${index % 2 === 0 ? "" : "lg:grid-cols-2"}`}>
                  {/* Content Side */}
                  <div
                    className={`p-8 md:p-12 lg:p-16 flex flex-col justify-between ${
                      index % 2 === 0 ? "order-1" : "order-1 lg:order-2"
                    }`}
                  >
                    {/* Header */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${servicio.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                        >
                          <servicio.icon className="w-8 h-8" />
                        </div>
                        <span className="text-5xl group-hover:scale-125 transition-transform duration-500">
                          {servicio.emoji}
                        </span>
                      </div>

                      <div className="inline-block">
                        <span
                          className={`px-4 py-1.5 bg-gradient-to-r ${servicio.gradient} text-white text-xs font-bold rounded-full uppercase tracking-wider`}
                        >
                          {servicio.badge}
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-[#004300] leading-tight group-hover:text-[#005a00] transition-colors duration-300">
                        {servicio.title}
                      </h3>

                      <p className="text-lg text-[#424242] leading-relaxed">{servicio.description}</p>
                    </div>

                    {/* Items List */}
                    <div className="space-y-3 my-8">
                      {servicio.items.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="flex gap-3 items-start group/item">
                          <CheckCircle2 className="w-5 h-5 text-[#007a00] flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                          <p className="text-sm text-[#424242] leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                      {servicio.stats.map((stat, idx) => (
                        <div key={idx} className="space-y-1">
                          <div
                            className={`text-3xl font-bold bg-gradient-to-r ${servicio.gradient} bg-clip-text text-transparent`}
                          >
                            {stat.value}
                          </div>
                          <div className="text-sm text-[#424242] font-medium">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-6">
                      <a
                        href="/contacto"
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${servicio.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                      >
                        Más información
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className={`relative h-[400px] lg:h-auto ${index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}`}>
                    <div className="absolute inset-0">
                      <Image
                        src={servicio.image || "/placeholder.svg"}
                        alt={servicio.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay con degradado en hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${servicio.gradient} opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
                      />
                      {/* Badge flotante en hover */}
                      <div className="absolute top-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-sm font-bold text-[#004300]">{servicio.badge}</span>
                      </div>
                      {/* Conclusión en hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white font-semibold leading-relaxed">{servicio.conclusion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#004300] via-[#005a00] to-[#007a00] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
              ¿Listo para transformar tu organización?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 text-balance leading-relaxed">
              Contáctanos hoy y descubre cómo nuestros servicios pueden mejorar el bienestar y la productividad de tu
              equipo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <a
                href="/contacto"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#004300] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
              >
                Contáctanos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              <a
                href="/nosotros"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Conoce más sobre nosotros
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
