"use client"

import Image from "next/image"

export function ClientsMarquee() {
  const clients = [
    {
      name: "Alkosto",
      logo: "/images/Clientes/Alkosto.png",
    },
    {
      name: "Hospital Claudio Benatti",
      logo: "/images/Clientes/Hospital.png",
    },
    {
      name: "Barrio Nuevo Hidalgo",
      logo: "/images/Clientes/BarrioHidalgo.jpg",
    },
    {
      name: "Cumberland",
      logo: "/images/Clientes/Cumberland.png",
    },
    {
      name: "ECP",
      logo: "/images/Clientes/ECP.jpg",
    },
    {
      name: "Hospital de los Valles",
      logo: "/images/Clientes/HospitalValles.png",
    },
    {
      name: "IMSP",
      logo: "/images/Clientes/IMSP.jpg",
    },
    {
      name: "SGT",
      logo: "/images/Clientes/SGT.png",
    },
    {
      name: "Tecsino",
      logo: "/images/Clientes/Tecsino.jpg",
    },
    {
      name: "Abraek",
      logo: "/images/Clientes/Abraek.jpg",
    }
  ]

  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-white py-8">
      <div className="flex animate-marquee  pl-2 sm:pl-4">
        {/* First set of logos */}
        {clients.map((client, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 mr-8 first:ml-0 flex items-center justify-center"
            style={{ width: "200px", height: "100px" }}
          >
            <Image
              src={client.logo || "/placeholder.svg"}
              alt={client.name}
              width={200}
              height={300}
              className="object-contain max-h-20 w-auto transition-all duration-300"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {clients.map((client, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 mr-8 first:ml-0 flex items-center justify-center"
            style={{ width: "200px", height: "100px" }}
          >
            <Image
              src={client.logo || "/placeholder.svg"}
              alt={client.name}
              width={200}
              height={100}
              className="object-contain max-h-20 w-auto transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

