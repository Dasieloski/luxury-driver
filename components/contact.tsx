"use client"

import { motion } from "framer-motion"

export function Contact() {
  return (
    <section className="relative w-full bg-black py-32">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-playfair mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Reserva Tu Experiencia
          </h2>
          <div className="mx-auto mb-12 h-[2px] w-24 bg-[#DFC181]" />
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto grid max-w-2xl gap-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="Nombre"
              className="rounded-none border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-white/40 focus:border-[#DFC181] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-none border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-white/40 focus:border-[#DFC181] focus:outline-none"
            />
          </div>
          <input
            type="tel"
            placeholder="Teléfono"
            className="rounded-none border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-white/40 focus:border-[#DFC181] focus:outline-none"
          />
          <textarea
            placeholder="Mensaje"
            rows={6}
            className="rounded-none border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-white/40 focus:border-[#DFC181] focus:outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-none border-2 border-[#DFC181] bg-transparent px-12 py-4 text-sm font-medium tracking-wider text-[#DFC181] transition-colors hover:bg-[#DFC181] hover:text-black"
          >
            ENVIAR MENSAJE
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

