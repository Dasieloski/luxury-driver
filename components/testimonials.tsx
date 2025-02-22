/* eslint-disable */
"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    content:
      "Un servicio que redefine el lujo y la excelencia. La atención al detalle y profesionalismo son incomparables.",
    author: "Carlos Rodríguez",
    role: "CEO, Global Enterprises",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    content: "La mejor experiencia en transporte ejecutivo. Cada viaje es una muestra de distinción y elegancia.",
    author: "Ana María Torres",
    role: "Directora Ejecutiva, Torres & Associates",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function Testimonials() {
  return (
    <section className="relative w-full bg-[#111] py-32">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="font-playfair mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Testimonios</h2>
          <div className="mx-auto h-[2px] w-24 bg-[#DFC181]" />
        </motion.div>
        <div className="grid gap-12 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative rounded-none border border-white/10 bg-black/50 p-8 backdrop-blur-sm"
            >
              <div className="mb-6 text-2xl font-light leading-relaxed text-white">"{testimonial.content}"</div>
              <div className="flex items-center">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <div className="font-playfair text-lg font-bold text-white">{testimonial.author}</div>
                  <div className="text-sm text-[#DFC181]">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

