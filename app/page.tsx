import { HeroSection } from "@/components/hero-section"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <Services />
      <Gallery />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

