"use client"

import { motion } from "framer-motion"

const stats = [
  {
    value: "10+",
    label: "Años de Experiencia",
  },
  {
    value: "5000+",
    label: "Viajes Realizados",
  },
  {
    value: "98%",
    label: "Clientes Satisfechos",
  },
  {
    value: "24/7",
    label: "Disponibilidad",
  },
]

export function Stats() {
  return (
    <section className="relative w-full bg-black py-32">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <h3 className="font-playfair mb-2 text-4xl font-bold text-[#DFC181] md:text-5xl">{stat.value}</h3>
              <p className="text-sm tracking-wider text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

