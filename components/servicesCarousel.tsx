"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Brain, Headphones, Users, Heart, Shield, ArrowRight } from "lucide-react"
import Image from "next/image"

const services = [
	{
		icon: Brain,
		title: "Servicios en Riesgo Psicosocial",
		image: "/images/Psicosocial.png",
		bullets: [
			"Diagnóstico y evaluación con instrumentos",
			"Planes de intervención personalizados",
			"Salud mental: estrés, acoso, burnout",
		],
	},
	{
		icon: Headphones,
		title: "Servicios Psicológicos (24/7) ",
		image: "/images/ServiciosPsicologico.png",
		bullets: [
			"Soporte Emocional y Resiliencia",
			"Psicología clínica y nutrición",
			"Talleres y terapias grupales",
		],
	},
	{
		icon: Users,
		title: "Servicios en Ergonomía",
		image: "/images/Ergonomica.png",
		bullets: [
			"Valoración y diseño ergonómico ",
			"Evaluación de tareas y posturas",
			"Asesoría en uso de wearables",
		],
	},
	{
		icon: Heart,
		title: "Salud Ocupacional",
		image: "/images/SaludOcupacional.png",
		bullets: [
			"Vigilancia de la salud de trabajadores",
			"Exámenes médicos (preempleo, periódicos, salida)",
			"Programas de vacunación y prevención",
		],
	},
	{
		icon: Shield,
		title: "Seguridad y Prevención de Riesgos Laborales",
		image: "/images/RiesgosLaborales.png",
		bullets: [
			"Sistemas de gestión ",
			"Planes de emergencia y contingencia",
			"Gestión de accidentes laborales",
		],
	},
]

export function ServicesCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0)

	// Cambia la lógica para que el carrusel sea cíclico
	const nextSlide = () => setCurrentIndex((prev) => (prev === 0 ? 1 : 0))
	const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? 1 : 0))

	const visibleServices =
		currentIndex === 0 ? services.slice(0, 3) : services.slice(2, 5)

	return (
		<div className="relative py-4">
			<div className="mx-auto w-full max-w-none px-0  sm:px-0 lg:px-0">
				<div className="text-center mb-8">
					<h2 className="text-5xl font-bold text-foreground">Servicios</h2>
				</div>

				<div className="flex items-center w-full gap-2">
					{/* Flecha izquierda más separada */}
					<div className="flex-shrink-0 flex items-center h-full mx-6">
						<button
							onClick={prevSlide}
							aria-label="Anterior"
							className="h-16 w-16 rounded-full grid place-items-center border-2 border-primary text-primary bg-white/80 hover:bg-primary hover:text-white transition-all shadow-md"
						>
							<ChevronLeft className="h-8 w-8" />
						</button>
					</div>

					{/* Grid de tarjetas */}
					<div className="flex-1">
                        <div className="mx-auto max-w-[1400px] md:max-w-[1600px] px-2 sm:px-4">
						{/* Haz las tarjetas más anchas y mantén el gap */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 items-stretch">
							{visibleServices.map((service, index) => {
								const Icon = service.icon
								return (
									<Card
                                        key={currentIndex === 0 ? index : index + 2}
                                        className="group relative overflow-hidden transition-all duration-300 hover:shadow-2xl border-2 border-border bg-white min-h-[580px]  h-full rounded-3xl max-w-[370px] mx-auto flex flex-col"
                                        // max-w para evitar overflow, mx-auto para centrar
                                    >
                                        {/* Imagen de fondo */}
                                        <div className="absolute inset-0 z-0">
                                            <Image
                                            src={service.image || "/placeholder.svg"}
                                            alt={service.title}
                                            fill
                                            className="object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-300"
                                            />
                                        </div>

                                        {/* Overlay para legibilidad / hover */}
                                        <div className="absolute inset-0 bg-white/70 group-hover:bg-[#004300e6] transition-all duration-300 z-[1]" />

                                        {/* Contenido alineado con grid */}
                                        <CardContent
                                            className="
                                            relative z-10 p-8 h-full
                                            grid grid-rows-[80px_60px_1fr_60px] gap-0
                                            items-center
                                            text-center
                                            "
                                        >
                                            {/* Icono alineado */}
                                            <div className="flex items-center justify-center h-[80px]">
                                                <div className="w-16 h-16 bg-[#0043000f] group-hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300">
                                                    <Icon className="h-9 w-9 text-[#004300] group-hover:text-white transition-colors duration-300" />
                                                </div>
                                            </div>

                                            {/* Título alineado */}
                                            <div className="flex items-center justify-center h-[60px]">
                                                <h3 className="text-2xl font-bold text-foreground group-hover:text-white transition-colors duration-300 m-0">
                                                    {service.title}
                                                </h3>
                                            </div>

                                            {/* Bullets alineados */}
                                            <ul className="flex flex-col justify-center row-start-3 space-y-2 w-full min-h-[120px]">
                                                {service.bullets.map((bullet, bulletIndex) => (
                                                    <li
                                                        key={bulletIndex}
                                                        className="text-lg text-muted-foreground group-hover:text-white flex items-start justify-center transition-colors duration-300"
                                                    >
                                                        <span className="mr-2 text-[#004300] group-hover:text-white transition-colors duration-300">
                                                            ✓
                                                        </span>
                                                        <span className="text-left">{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Botón alineado */}
                                            <div className="flex items-end justify-center h-[60px]">
                                                <button
                                                    className="
                                                    inline-flex items-center rounded-full px-8 py-3 text-lg font-semibold
                                                    border border-[#004300] bg-[#004300] text-white shadow-sm
                                                    transition-all duration-300
                                                    group-hover:bg-white group-hover:text-[#004300]
                                                    "
                                                >
                                                    Detalles
                                                    <ArrowRight className="ml-2 h-6 w-6" />
                                                </button>
                                            </div>
                                        </CardContent>
                                    </Card>
								)
							})}
						</div>
                        </div>
					</div>

					{/* Flecha derecha más separada */}
					<div className="flex-shrink-0 flex items-center h-full mx-6">
						<button
							onClick={nextSlide}
							aria-label="Siguiente"
							className="h-16 w-16 rounded-full grid place-items-center border-2 border-primary text-primary bg-white/80 hover:bg-primary hover:text-white transition-all shadow-md"
						>
							<ChevronRight className="h-8 w-8" />
						</button>
					</div>
				</div>

				{/* Indicadores */}
				<div className="flex justify-center items-center gap-2 mt-4">
					<div
						className={`h-3 w-3 rounded-full ${
							currentIndex === 0
								? "bg-primary"
								: "bg-muted-foreground/30"
						}`}
					/>
					<div
						className={`h-3 w-3 rounded-full ${
							currentIndex === 1
								? "bg-primary"
								: "bg-muted-foreground/30"
						}`}
					/>
				</div>
			</div>
		</div>
	)
}
