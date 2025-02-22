"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <motion.section ref={ref} style={{ opacity }} className="relative h-screen w-full overflow-hidden">
      <motion.video
        style={{ scale }}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video-hero.mp4" type="video/mp4" />
      </motion.video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black" />
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="max-w-4xl"
        >
          <h1 className="font-playfair mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Experiencia de Transporte
            <span className="block text-[#DFC181]">Exclusiva & Personalizada</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80 md:text-xl">
            Elevando los estándares del transporte ejecutivo con un servicio impecable y atención al detalle
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-none border-2 border-[#DFC181] bg-transparent px-12 py-4 text-sm font-medium tracking-wider text-[#DFC181] transition-colors hover:bg-[#DFC181] hover:text-black"
          >
            RESERVAR AHORA
          </motion.button>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </motion.section>
  )
}

