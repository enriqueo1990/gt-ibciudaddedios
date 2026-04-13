import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Facebook, Instagram, Youtube, Play, ChevronDown, ArrowUpRight, BookOpen } from 'lucide-react';
import { Logo } from './components/Logo';

export default function Sermones() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const series = [
    { title: "Romanos: La Justicia de Dios", sermons: 24, img: "romans", current: true },
    { title: "Efesios: Nuestra Riqueza en Cristo", sermons: 16, img: "ephesians", current: false },
    { title: "Salmos: Cánticos del Corazón", sermons: 12, img: "psalms", current: false },
    { title: "Atributos de Dios", sermons: 8, img: "attributes", current: false },
    { title: "Génesis: El Principio", sermons: 30, img: "genesis", current: false },
    { title: "Sermón del Monte", sermons: 14, img: "mount", current: false },
  ];

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
            <a href="/sermones" className="text-[11px] uppercase tracking-[0.2em] font-medium text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Sermones</a>
            <a href="/articulos" className="text-[11px] uppercase tracking-[0.2em] font-medium text-slate-900 hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Artículos</a>
            <a 
              href="/visitanos" 
              className="text-[11px] uppercase tracking-[0.2em] font-bold px-6 py-2.5 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ibcd-blue outline-none bg-slate-900 text-white hover:bg-ibcd-blue"
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
            <a href="/sermones" className="text-4xl font-serif text-ibcd-blue italic transition-all" onClick={() => setMobileMenuOpen(false)}>Sermones</a>
            <a href="/articulos" className="text-4xl font-serif text-slate-900 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Artículos</a>
            <a href="/visitanos" className="text-4xl font-serif text-slate-900 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Visítanos</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Header */}
      <section className="pt-48 pb-32 bg-slate-50 border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-ibcd-orange font-bold mb-6 block">
              Predicación Expositiva
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.95] mb-8">
              La fe viene por el <span className="italic">oír</span>.
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
              Explora nuestro archivo de sermones y series de enseñanza. Creemos en la predicación expositiva que revela el significado original del texto bíblico.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Sermon */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-3xl font-serif italic">Sermón Más Reciente</h2>
          </div>

          <a 
            href="/sermon"
            className="bg-white border border-slate-100 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all group cursor-pointer block"
          >
            <div className="md:w-1/2 aspect-video bg-slate-900 relative overflow-hidden">
              <img 
                src="https://picsum.photos/seed/sermon-min/1200/800" 
                alt="Sermon" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all group-hover:bg-ibcd-blue group-hover:border-ibcd-blue outline-none focus-visible:bg-ibcd-blue">
                  <Play size={24} fill="currentColor" className="ml-1" />
                </button>
              </div>
            </div>
            <div className="md:w-1/2 p-12 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.2em] text-ibcd-orange font-bold mb-4 block">Serie: Romanos</span>
              <h3 className="text-3xl font-serif mb-6 leading-tight group-hover:text-ibcd-blue transition-colors">La Justicia de Dios revelada en el Evangelio</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Un estudio profundo sobre cómo la gracia de Dios nos alcanza y nos transforma desde el corazón hacia afuera, basado en Romanos 1:16-17.
              </p>
              <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                <span>13 Abril, 2026</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span>Pr. Cristian Palomares</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Series Grid */}
      <section className="py-32 bg-slate-50">
        <div className="container-custom">
          <h2 className="text-4xl font-serif mb-16">Series de Sermones</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {series.map((item, i) => (
              <a 
                key={i} 
                href="/serie"
                className="bg-white border border-slate-100 overflow-hidden group hover:border-ibcd-blue/30 transition-colors flex flex-col"
              >
                <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/series-${item.img}/800/500`} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {item.current && (
                    <div className="absolute top-4 right-4 bg-ibcd-orange text-white text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-sm shadow-sm">
                      Serie Actual
                    </div>
                  )}
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-serif mb-3 group-hover:text-ibcd-blue transition-colors">{item.title}</h3>
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                    <span className="text-xs text-slate-400 flex items-center gap-2">
                      <BookOpen size={14} />
                      {item.sermons} Sermones
                    </span>
                    <ArrowUpRight size={16} className="text-slate-300 group-hover:text-ibcd-blue transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </a>
            ))}
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
