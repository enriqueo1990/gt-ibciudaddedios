import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Facebook, Instagram, Youtube, ChevronDown } from 'lucide-react';
import { Logo } from './components/Logo';

export default function Liderazgo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pastores = [
    { 
      name: "Cristian Palomares", 
      title: "Pastor", 
      bio: "Con veinte años de trayectoria en el ministerio pastoral, Cristian preside ABRA e integra el consejo de Ante Su Palabra. Es bachiller en Teología y Ministerio Pastoral por el SBF y posee una diplomatura en Consejería Bíblica del Seminario Bíblico William Carey, institución donde hoy realiza una Maestría en Estudios Teológicos. Vive junto a su esposa Miriam y sus tres hijos.", 
      img: "/cristian-palomares.jpg" 
    },
    { 
      name: "Samuel Correa Da Silva", 
      title: "Pastor", 
      bio: "Originario de Paraná, Samuel se desempeña como pastor en IBCD desde hace siete años. Se encuentra ampliando su formación teológica mediante estudios en IDEAR. Está casado con Daniela, con quien tiene tres hijos.", 
      img: "/samuel-correa.jpg" 
    }
  ];

  const lideres = [
    { name: "Esteban Ruiz", img: "leader-1" },
    { name: "Laura Gómez", img: "leader-2" },
    { name: "Carlos Mendoza", img: "leader-3" },
    { name: "Sofía Castro", img: "leader-4" },
    { name: "Andrés Navarro", img: "leader-5" },
    { name: "Elena Vargas", img: "leader-6" },
    { name: "Martín Rojas", img: "leader-7" },
    { name: "Valeria Pinto", img: "leader-8" }
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
              <button className="text-[11px] uppercase tracking-[0.2em] font-medium text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue flex items-center gap-1">
                Nosotros <ChevronDown size={12} />
              </button>
              <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                <div className="bg-white border border-slate-100 shadow-lg py-2 min-w-[160px] flex flex-col">
                  <a href="/liderazgo" className="px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-medium text-ibcd-blue bg-slate-50 transition-colors">Liderazgo</a>
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
              <span className="text-4xl font-serif text-ibcd-blue italic">Nosotros</span>
              <a href="/liderazgo" className="text-xl font-serif text-ibcd-blue italic transition-all" onClick={() => setMobileMenuOpen(false)}>Liderazgo</a>
              <a href="/creencias" className="text-xl font-serif text-slate-500 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Creencias</a>
            </div>

            <a href="/eventos" className="text-4xl font-serif text-slate-900 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Eventos</a>
            <a href="/sermones" className="text-4xl font-serif text-slate-900 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Sermones</a>
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
              Quiénes Somos
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.95] mb-8">
              Nuestro <span className="italic">Liderazgo.</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
              Hombres y mujeres llamados a servir, guiar y equipar a la iglesia para la obra del ministerio, 
              buscando siempre la gloria de Dios y el bienestar de Su pueblo.
            </p>
          </div>
        </div>
      </section>

      {/* Pastores Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif mb-16">Pastores</h2>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {pastores.map((pastor, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-slate-100 mb-8 overflow-hidden rounded-sm">
                  <img 
                    src={pastor.img} 
                    alt={pastor.name} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-ibcd-orange font-bold mb-3 block">
                  {pastor.title}
                </span>
                <h3 className="text-3xl font-serif mb-4 group-hover:text-ibcd-blue transition-colors">
                  {pastor.name}
                </h3>
                <p className="text-slate-500 font-light leading-relaxed">
                  {pastor.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Líderes de Ministerios Section */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="container-custom">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Líderes de Ministerios</h2>
            <p className="text-slate-500 text-lg font-light">
              Hermanos que sirven fielmente coordinando las diferentes áreas de servicio en nuestra congregación.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            {lideres.map((lider, i) => (
              <div key={i} className="group cursor-pointer text-center">
                <div className="aspect-square bg-slate-200 mb-6 overflow-hidden rounded-sm mx-auto w-full max-w-[200px]">
                  <img 
                    src={`https://picsum.photos/seed/${lider.img}/400/400`} 
                    alt={lider.name} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-serif group-hover:text-ibcd-blue transition-colors">
                  {lider.name}
                </h4>
              </div>
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
