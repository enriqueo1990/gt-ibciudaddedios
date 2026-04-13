import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Facebook, Instagram, Youtube, MapPin, Clock, Car, Music, Baby, BookOpen, ChevronDown } from 'lucide-react';
import { Logo } from './components/Logo';

export default function Visitanos() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-ibcd-blue selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-500 bg-white border-b border-slate-100 py-4">
        <div className="container-custom flex justify-between items-center">
          <a href="/" className="relative z-50 outline-none focus-visible:ring-2 focus-visible:ring-ibcd-blue rounded-sm">
            <Logo lightText={false} className="h-10 w-auto" />
          </a>
          
          <div className="hidden md:flex gap-10 items-center">
            <a href="/" className="text-[11px] uppercase tracking-[0.2em] font-medium text-slate-900 hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Inicio</a>
            
            <div className="relative group">
              <button className="text-[11px] uppercase tracking-[0.2em] font-medium text-slate-900 hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue flex items-center gap-1">
                Nosotros <ChevronDown size={12} />
              </button>
              <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                <div className="bg-white border border-slate-100 shadow-lg py-2 min-w-[160px] flex flex-col">
                  <a href="/liderazgo" className="px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-medium text-slate-500 hover:text-ibcd-blue hover:bg-slate-50 transition-colors">Liderazgo</a>
                  <a href="/creencias" className="px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-medium text-slate-500 hover:text-ibcd-blue hover:bg-slate-50 transition-colors">Creencias</a>
                </div>
              </div>
            </div>

            <a href="/eventos" className="text-[11px] uppercase tracking-[0.2em] font-medium text-slate-900 hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Eventos</a>
            <a href="/sermones" className="text-[11px] uppercase tracking-[0.2em] font-medium text-slate-900 hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Sermones</a>
            <a href="/articulos" className="text-[11px] uppercase tracking-[0.2em] font-medium text-slate-900 hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Artículos</a>
            <a 
              href="/visitanos" 
              className="text-[11px] uppercase tracking-[0.2em] font-bold px-6 py-2.5 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ibcd-blue outline-none bg-ibcd-blue text-white"
            >
              Visítanos
            </a>
          </div>

          <button 
            className="md:hidden p-2 outline-none focus-visible:text-ibcd-blue relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="text-slate-900" /> : <Menu className="text-slate-900" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center gap-8"
          >
            <a href="/" className="text-4xl font-serif text-slate-900 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Inicio</a>
            
            <div className="flex flex-col items-center gap-4">
              <span className="text-4xl font-serif text-slate-900">Nosotros</span>
              <a href="/liderazgo" className="text-xl font-serif text-slate-500 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Liderazgo</a>
              <a href="/creencias" className="text-xl font-serif text-slate-500 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Creencias</a>
            </div>

            <a href="/eventos" className="text-4xl font-serif text-slate-900 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Eventos</a>
            <a href="/sermones" className="text-4xl font-serif text-slate-900 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Sermones</a>
            <a href="/articulos" className="text-4xl font-serif text-slate-900 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Artículos</a>
            <a href="/visitanos" className="text-4xl font-serif text-ibcd-blue italic transition-all" onClick={() => setMobileMenuOpen(false)}>Visítanos</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Header */}
      <section className="pt-48 pb-32 bg-slate-50 border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-ibcd-orange font-bold mb-6 block">
              Planifica tu visita
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.95] mb-8">
              Nos encantaría adorar a Dios <span className="italic">junto a ti.</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
              Ya sea que estés buscando una iglesia local o simplemente quieras saber más acerca de Jesús, 
              eres bienvenido este domingo.
            </p>
          </div>
        </div>
      </section>

      {/* Horarios y Ubicación */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Info */}
            <div>
              <h2 className="text-4xl font-serif mb-12">Horarios y Ubicación</h2>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center flex-shrink-0 text-ibcd-blue">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2">Reuniones Dominicales</h3>
                    <p className="text-slate-500 font-light mb-1">10:00 AM — Culto de Adoración</p>
                    <p className="text-slate-500 font-light">11:30 AM — Escuela Dominical</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center flex-shrink-0 text-ibcd-blue">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2">Dirección</h3>
                    <p className="text-slate-500 font-light mb-4">
                      Av. San Martín 1234<br />
                      Rosario, Santa Fe, Argentina
                    </p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-widest font-bold text-ibcd-blue hover:text-slate-900 transition-colors"
                    >
                      Abrir en Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center flex-shrink-0 text-ibcd-blue">
                    <Car size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2">Estacionamiento</h3>
                    <p className="text-slate-500 font-light">
                      Contamos con estacionamiento gratuito en la parte trasera del edificio. 
                      También hay lugar disponible en las calles aledañas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-square md:aspect-[4/5] bg-slate-100 rounded-sm overflow-hidden relative group">
              <img 
                src="https://picsum.photos/seed/map/800/1000" 
                alt="Ubicación IBCD" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg text-ibcd-blue">
                  <MapPin size={24} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Qué Esperar */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">¿Qué puedes esperar?</h2>
            <p className="text-slate-500 text-lg font-light">
              Sabemos que visitar una iglesia por primera vez puede ser intimidante. 
              Aquí te contamos un poco sobre cómo son nuestras reuniones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-white p-8 border border-slate-100 hover:border-ibcd-blue/30 transition-colors group">
              <Music className="text-slate-300 group-hover:text-ibcd-orange transition-colors mb-6" size={32} />
              <h3 className="text-xl font-serif mb-3">Adoración</h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                Cantamos una mezcla de himnos históricos y cánticos contemporáneos, priorizando siempre que la letra sea bíblica y exalte a Cristo.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-100 hover:border-ibcd-blue/30 transition-colors group">
              <BookOpen className="text-slate-300 group-hover:text-ibcd-orange transition-colors mb-6" size={32} />
              <h3 className="text-xl font-serif mb-3">Predicación</h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                Nuestra predicación es expositiva. Esto significa que estudiamos la Biblia verso a verso, buscando entender el significado original del texto.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-100 hover:border-ibcd-blue/30 transition-colors group">
              <Baby className="text-slate-300 group-hover:text-ibcd-orange transition-colors mb-6" size={32} />
              <h3 className="text-xl font-serif mb-3">Niños</h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                Ofrecemos cuidado y enseñanza bíblica adaptada para niños (IBCD Kids) durante el tiempo del sermón en un ambiente seguro.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-100 hover:border-ibcd-blue/30 transition-colors group">
              <Menu className="text-slate-300 group-hover:text-ibcd-orange transition-colors mb-6" size={32} />
              <h3 className="text-xl font-serif mb-3">Vestimenta</h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                No tenemos un código de vestimenta. Verás personas de traje y otras en jeans. Ven como te sientas cómodo; lo importante es tu presencia.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="max-w-xs">
              <a href="/" className="inline-block mb-6 group outline-none focus-visible:ring-2 focus-visible:ring-ibcd-blue rounded-sm">
                <Logo lightText={false} className="h-10 w-auto transition-all duration-500 group-hover:scale-105" />
              </a>
              <p className="text-slate-400 text-sm leading-relaxed">
                Una iglesia bíblica comprometida con la sana doctrina y la gloria de Dios en Rosario.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold mb-6 text-slate-900">Explorar</p>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li><a href="/#nosotros" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Nosotros</a></li>
                  <li><a href="/liderazgo" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Liderazgo</a></li>
                  <li><a href="/creencias" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Creencias</a></li>
                  <li><a href="/eventos" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Eventos</a></li>
                  <li><a href="/sermones" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Sermones</a></li>
                  <li><a href="/articulos" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Artículos</a></li>
                  <li><a href="/visitanos" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Visítanos</a></li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold mb-6 text-slate-900">Social</p>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li><a href="#" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Instagram</a></li>
                  <li><a href="#" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">YouTube</a></li>
                  <li><a href="#" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Facebook</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} Iglesia Bíblica Ciudad de Dios. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-slate-400">
              <a href="#" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue"><Instagram size={18} /></a>
              <a href="#" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue"><Youtube size={18} /></a>
              <a href="#" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue"><Facebook size={18} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
