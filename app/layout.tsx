import type React from "react"
import "@/styles/globals.css"
import { Montserrat, Playfair_Display } from "next/font/google"
import { Navigation } from "@/components/navigation"
import { Preloader } from "@/components/preloader"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-black font-sans antialiased">
        <Preloader />
        <Navigation />
        {children}
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
