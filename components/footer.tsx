export function Footer() {
  return (
    <footer className="w-full bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 border-t border-white/10 pt-12 md:grid-cols-4">
          <div>
            <h3 className="font-playfair mb-6 text-xl font-bold text-white">Contacto</h3>
            <div className="space-y-4 text-white/60">
              <p>+1 234 567 890</p>
              <p>info@luxurydriver.com</p>
            </div>
          </div>
          <div>
            <h3 className="font-playfair mb-6 text-xl font-bold text-white">Ubicación</h3>
            <div className="space-y-4 text-white/60">
              <p>123 Luxury Avenue</p>
              <p>Ciudad, País</p>
            </div>
          </div>
          <div>
            <h3 className="font-playfair mb-6 text-xl font-bold text-white">Horario</h3>
            <div className="space-y-4 text-white/60">
              <p>Lunes - Domingo</p>
              <p>24 Horas</p>
            </div>
          </div>
          <div>
            <h3 className="font-playfair mb-6 text-xl font-bold text-white">Redes Sociales</h3>
            <div className="space-y-4 text-white/60">
              <p>Instagram</p>
              <p>Facebook</p>
              <p>LinkedIn</p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          <p>© 2024 Luxury Driver. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

