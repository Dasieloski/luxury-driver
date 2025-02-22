"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    title: "Transporte Ejecutivo",
    description: "Servicio premium para ejecutivos y profesionales que valoran la excelencia y puntualidad.",
    image: "/service-3.jpg?height=400&width=600",
  },
  {
    title: "Eventos Especiales",
    description: "Experiencia de lujo para bodas, celebraciones y ocasiones memorables.",
    image: "/service-2.jpg?height=400&width=600",
  },
  {
    title: "Servicio VIP",
    description: "Atención personalizada y discreta para clientes que exigen el más alto nivel.",
    image: "/service-1.jpg?height=400&width=600",
  },
]

export function Services() {
  return (
    <section className="relative w-full bg-black py-32">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="font-playfair mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Servicios Exclusivos
          </h2>
          <div className="mx-auto h-[2px] w-24 bg-[#DFC181]" />
        </motion.div>
        <div className="grid gap-12 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-700 group-hover:opacity-0" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                <h3 className="font-playfair mb-4 text-2xl font-bold text-white">{service.title}</h3>
                <p className="text-white/80">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

