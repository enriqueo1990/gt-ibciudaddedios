import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Facebook, Instagram, Youtube, ChevronDown, ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import { Logo } from './components/Logo';

export default function ArticuloDetalle() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-ibcd-blue selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-500 bg-white border-b border-slate-100 py-4">
        <div className="container-custom flex justify-between items-center">
          <a href="/" className="relative z-50 outline-none focus-visible:ring-2 focus-visible:ring-ibcd-blue rounded-sm">
            <Logo lightText={false} className="h-10 w-auto" />
          </a>
          
          <div className="hidden md:flex gap-8 lg:gap-10 items-center">
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
            <a href="/articulos" className="text-[11px] uppercase tracking-[0.2em] font-medium text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Artículos</a>
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
            <a href="/articulos" className="text-4xl font-serif text-ibcd-blue italic transition-all" onClick={() => setMobileMenuOpen(false)}>Artículos</a>
            <a href="/visitanos" className="text-4xl font-serif text-slate-900 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Visítanos</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-32 pb-32">
        <div className="container-custom">
          
          {/* Breadcrumbs */}
          <div className="mb-8 flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-slate-400">
            <a href="/articulos" className="hover:text-ibcd-blue transition-colors flex items-center gap-1">
              <ArrowLeft size={14} /> Artículos
            </a>
            <span>/</span>
            <a href="#" className="hover:text-ibcd-blue transition-colors">Eclesiología</a>
          </div>

          {/* Article Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-900 text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded-sm mb-8">
              <Tag size={12} className="text-ibcd-orange" /> Eclesiología
            </div>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
              La importancia de la membresía en la iglesia local
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <User size={16} className="text-slate-400" />
                <span className="font-medium text-slate-900">Pr. Cristian Palomares</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-slate-400" />
                <span>10 Abril, 2026</span>
              </div>
              <button className="flex items-center gap-2 hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue ml-4">
                <Share2 size={16} /> <span>Compartir</span>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-[21/9] bg-slate-100 relative rounded-sm overflow-hidden mb-16 max-w-5xl mx-auto">
            <img 
              src="https://picsum.photos/seed/church/1920/800" 
              alt="Iglesia local" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Article Content */}
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-slate prose-lg max-w-none font-light leading-relaxed text-slate-600">
              <p className="text-xl text-slate-900 font-medium mb-8">
                Unirse a una iglesia local no es simplemente añadir tu nombre a una lista, es un compromiso bíblico con un cuerpo de creyentes para el cuidado mutuo, la rendición de cuentas y la gloria de Dios.
              </p>
              
              <p>
                En nuestra cultura moderna, altamente individualista e independiente, la idea de comprometerse formalmente con una institución a menudo se ve con sospecha. Muchos cristianos hoy en día prefieren ser "consumidores" de la iglesia: asisten a los servicios, disfrutan de la música, escuchan el sermón y se van a casa sin establecer vínculos profundos. Sin embargo, cuando examinamos el Nuevo Testamento, descubrimos que esta mentalidad es ajena al diseño de Dios para Su pueblo.
              </p>

              <h3>1. Un compromiso visible con un cuerpo local</h3>
              <p>
                La iglesia universal está compuesta por todos los creyentes verdaderos en todo el mundo y a lo largo de la historia. Pero esta realidad universal debe tener una expresión local y visible. En el Nuevo Testamento, vemos que los creyentes se reunían en lugares específicos (Corinto, Éfeso, Roma) y sabían exactamente quiénes formaban parte de su comunidad.
              </p>
              <p>
                La membresía de la iglesia es simplemente la manera en que formalizamos y hacemos visible nuestro compromiso con un grupo específico de creyentes. Es decir: "Yo soy responsable por ustedes, y ustedes son responsables por mí".
              </p>

              <blockquote className="border-l-4 border-ibcd-orange pl-6 italic my-8 text-slate-500">
                "No podemos obedecer los mandamientos de 'unos a otros' en el Nuevo Testamento (amaos unos a otros, exhortaos unos a otros, soportaos unos a otros) en abstracto. Debemos hacerlo en el contexto de una comunidad local comprometida."
              </blockquote>

              <h3>2. Sumisión al liderazgo pastoral</h3>
              <p>
                Hebreos 13:17 nos instruye: <em>"Obedeced a vuestros pastores, y sujetaos a ellos; porque ellos velan por vuestras almas, como quienes han de dar cuenta"</em>.
              </p>
              <p>
                Para que un pastor pueda "velar por las almas" y "dar cuenta" a Dios, necesita saber exactamente por quiénes es responsable. Un pastor no dará cuenta por todos los cristianos de su ciudad, sino por el rebaño específico que Dios le ha confiado (1 Pedro 5:2-3). La membresía define quiénes conforman ese rebaño.
              </p>

              <h3>3. Disciplina y restauración</h3>
              <p>
                En Mateo 18 y 1 Corintios 5, Jesús y Pablo enseñan sobre la disciplina en la iglesia. Si un hermano persiste en un pecado no arrepentido, la iglesia debe actuar para llamarlo al arrepentimiento. El paso final de este proceso es tratar a la persona como un "gentil y publicano", lo que implica removerlo de la comunión de la iglesia.
              </p>
              <p>
                Lógicamente, no puedes "remover" a alguien de algo a lo que nunca perteneció formalmente. La disciplina eclesiástica presupone una membresía definida. Su propósito no es castigar, sino restaurar al pecador y proteger la pureza y el testimonio de la iglesia.
              </p>

              <h3>Conclusión</h3>
              <p>
                La membresía en la iglesia local es un acto de amor y obediencia. Es renunciar a nuestra independencia para someternos al cuidado de los pastores y al amor de los hermanos. Si eres un creyente en Cristo, te animamos a que no te conformes con ser un asistente casual. Busca una iglesia bíblica, comprométete con ella y sirve para la edificación del cuerpo y la gloria de Dios.
              </p>
            </div>
            
            {/* Author Bio */}
            <div className="mt-16 p-8 bg-slate-50 border border-slate-100 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 bg-slate-200">
                <img 
                  src="https://picsum.photos/seed/pastor/200/200" 
                  alt="Pr. Cristian Palomares" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-lg font-serif mb-2">Pr. Cristian Palomares</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Pastor principal de la Iglesia Bíblica Ciudad de Dios. Apasionado por la predicación expositiva y la teología reformada. Casado con María y padre de tres hijos.
                </p>
              </div>
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
