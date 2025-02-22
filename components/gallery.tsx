"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const images = [
  {
    src: "/gallery-1.jpg?height=800&width=1200",
    alt: "Luxury Vehicle Exterior",
  },
  {
    src: "/gallery-2.jpg?height=800&width=1200",
    alt: "Premium Interior",
  },
  {
    src: "/gallery-3.jpg?height=800&width=1200",
    alt: "Professional Service",
  },
]

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const yValues = images.map((_, index) => {
    return useTransform(scrollYProgress, [0, 1], [100 * (index + 1), -100 * (index + 1)])
  })

  return (
    <section ref={ref} className="relative w-full bg-[#111] py-32">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="font-playfair mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Nuestra Flota</h2>
          <div className="mx-auto h-[2px] w-24 bg-[#DFC181]" />
        </motion.div>
        <div className="grid gap-8">
          {images.map((image, index) => {
            const y = yValues[index]

            return (
              <motion.div key={index} style={{ y }} className="relative aspect-[16/9] overflow-hidden">
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

