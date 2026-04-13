import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Facebook, Instagram, Youtube, Play, ChevronDown, ArrowLeft, Calendar, User, BookOpen } from 'lucide-react';
import { Logo } from './components/Logo';

export default function SerieDetalle() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sermons = [
    {
      id: 1,
      title: "La Justicia de Dios revelada en el Evangelio",
      date: "13 Abril, 2026",
      passage: "Romanos 1:16-17",
      preacher: "Pr. Cristian Palomares",
      img: "sermon-1"
    },
    {
      id: 2,
      title: "La Ira de Dios contra la Injusticia",
      date: "06 Abril, 2026",
      passage: "Romanos 1:18-32",
      preacher: "Pr. Cristian Palomares",
      img: "sermon-2"
    },
    {
      id: 3,
      title: "El Justo Juicio de Dios",
      date: "30 Marzo, 2026",
      passage: "Romanos 2:1-16",
      preacher: "Pr. Cristian Palomares",
      img: "sermon-3"
    },
    {
      id: 4,
      title: "La Falsa Seguridad Religiosa",
      date: "23 Marzo, 2026",
      passage: "Romanos 2:17-29",
      preacher: "Pr. Cristian Palomares",
      img: "sermon-4"
    },
    {
      id: 5,
      title: "No hay Justo, ni aun Uno",
      date: "16 Marzo, 2026",
      passage: "Romanos 3:1-20",
      preacher: "Pr. Cristian Palomares",
      img: "sermon-5"
    }
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
            <a href="/sermones" className="text-[11px] uppercase tracking-[0.2em] font-medium text-slate-900 hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Sermones</a>
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
            <a href="/sermones" className="text-4xl font-serif text-slate-900 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Sermones</a>
            <a href="/articulos" className="text-4xl font-serif text-slate-900 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Artículos</a>
            <a href="/visitanos" className="text-4xl font-serif text-slate-900 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Visítanos</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-32 pb-32">
        <div className="container-custom">
          
          {/* Breadcrumbs */}
          <div className="mb-8 flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-slate-400">
            <a href="/sermones" className="hover:text-ibcd-blue transition-colors flex items-center gap-1">
              <ArrowLeft size={14} /> Sermones
            </a>
            <span>/</span>
            <span className="text-slate-900">Romanos</span>
          </div>

          {/* Series Header */}
          <div className="flex flex-col md:flex-row gap-12 mb-20">
            <div className="md:w-1/3">
              <div className="aspect-[4/5] bg-slate-100 relative overflow-hidden rounded-sm shadow-sm">
                <img 
                  src="https://picsum.photos/seed/series-romans/800/1000" 
                  alt="Serie Romanos" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-ibcd-orange text-white text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-sm shadow-sm">
                  Serie Actual
                </div>
              </div>
            </div>
            <div className="md:w-2/3 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.2em] text-ibcd-orange font-bold mb-4 block">
                Serie de Sermones
              </span>
              <h1 className="text-5xl md:text-7xl font-serif leading-[0.95] mb-6">
                Romanos: La Justicia de Dios
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed font-light max-w-2xl mb-8">
                La carta a los Romanos es la exposición más sistemática y profunda del evangelio en toda la Biblia. En esta serie, exploramos verso a verso cómo la gracia de Dios nos alcanza, nos justifica y nos transforma desde el corazón hacia afuera.
              </p>
              <div className="flex items-center gap-6 text-sm text-slate-500 border-t border-slate-100 pt-6">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-slate-400" />
                  <span>24 Sermones</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-slate-400" />
                  <span>Pr. Cristian Palomares</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sermons List */}
          <div>
            <h2 className="text-3xl font-serif italic mb-8">Sermones en esta serie</h2>
            
            <div className="flex flex-col gap-4">
              {sermons.map((sermon) => (
                <a 
                  key={sermon.id}
                  href="/sermon"
                  className="bg-white border border-slate-100 p-6 flex flex-col md:flex-row items-start md:items-center gap-6 hover:border-ibcd-blue/30 hover:shadow-sm transition-all group"
                >
                  <div className="w-full md:w-48 aspect-video bg-slate-100 relative overflow-hidden shrink-0">
                    <img 
                      src={`https://picsum.photos/seed/${sermon.img}/400/225`} 
                      alt={sermon.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-ibcd-blue transition-colors">
                        <Play size={16} fill="currentColor" className="ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-serif mb-2 group-hover:text-ibcd-blue transition-colors">{sermon.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {sermon.date}</span>
                      <span className="flex items-center gap-1"><BookOpen size={12} /> {sermon.passage}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </main>

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
