"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/95 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-24 items-center justify-between px-4">
          <Link href="/" className="font-playfair text-2xl text-white">
            LUXURY DRIVER
          </Link>
          <div className="hidden space-x-8 md:flex">
            {["Inicio", "Servicios", "Galería", "Testimonios", "Contacto"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-wider text-white/80 transition-colors hover:text-[#DFC181]"
              >
                {item.toUpperCase()}
              </Link>
            ))}
          </div>
          <button onClick={() => setIsMenuOpen(true)} className="text-white md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <div className="flex flex-col items-center space-y-8">
              {["Inicio", "Servicios", "Galería", "Testimonios", "Contacto"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-playfair text-2xl text-white/80 transition-colors hover:text-[#DFC181]"
                >
                  {item}
                </Link>
              ))}
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="absolute right-4 top-4 text-white">
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

