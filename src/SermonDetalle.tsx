import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Facebook, Instagram, Youtube, Play, ChevronDown, ArrowLeft, Calendar, User, BookOpen, Share2, Download } from 'lucide-react';
import { Logo } from './components/Logo';

export default function SermonDetalle() {
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
            <a href="#" className="hover:text-ibcd-blue transition-colors">Serie: Romanos</a>
          </div>

          {/* Video Player Placeholder */}
          <div className="aspect-video bg-slate-900 relative rounded-sm overflow-hidden mb-12 group">
            <img 
              src="https://picsum.photos/seed/sermon-min/1920/1080" 
              alt="Video thumbnail" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:bg-ibcd-blue hover:border-ibcd-blue hover:scale-110 outline-none focus-visible:bg-ibcd-blue">
                <Play size={32} fill="currentColor" className="ml-2" />
              </button>
            </div>
          </div>

          {/* Sermon Header */}
          <div className="max-w-4xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.2em] text-ibcd-orange font-bold mb-4 block">
              Serie: Romanos
            </span>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
              La Justicia de Dios revelada en el Evangelio
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 py-6 border-y border-slate-100 mb-12 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-slate-400" />
                <span>13 Abril, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} className="text-slate-400" />
                <span>Pr. Cristian Palomares</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={16} className="text-slate-400" />
                <span>Romanos 1:16-17</span>
              </div>
              
              <div className="ml-auto flex items-center gap-4">
                <button className="flex items-center gap-2 hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">
                  <Share2 size={16} /> <span className="hidden sm:inline">Compartir</span>
                </button>
                <button className="flex items-center gap-2 hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">
                  <Download size={16} /> <span className="hidden sm:inline">Descargar Audio</span>
                </button>
              </div>
            </div>

            {/* Sermon Content/Notes */}
            <div className="prose prose-slate prose-lg max-w-none font-light leading-relaxed text-slate-600">
              <p className="text-xl text-slate-900 font-medium mb-8">
                El apóstol Pablo declara con valentía que no se avergüenza del evangelio, porque es poder de Dios para salvación. En estos dos versículos encontramos el tema central de toda la epístola a los Romanos.
              </p>
              
              <h3>1. El Poder del Evangelio</h3>
              <p>
                El evangelio no es simplemente un buen consejo o una filosofía de vida; es el poder mismo de Dios actuando para rescatar al ser humano de su condición caída. La palabra griega utilizada para poder es <em>dunamis</em>, de la cual derivamos palabras como dinámica o dinamita. Es un poder transformador que rompe las cadenas del pecado.
              </p>

              <h3>2. El Alcance del Evangelio</h3>
              <p>
                "A todo aquel que cree; al judío primeramente, y también al griego." El evangelio derriba las barreras culturales, raciales y sociales. No hay distinción delante de Dios en cuanto a nuestra necesidad de salvación, y tampoco hay distinción en la oferta de Su gracia.
              </p>

              <h3>3. La Revelación de la Justicia de Dios</h3>
              <p>
                ¿Cómo puede un Dios santo perdonar a pecadores culpables sin comprometer Su justicia? Esta es la gran pregunta que el evangelio responde. En el evangelio se revela la justicia de Dios: una justicia que Él exige, pero que también Él mismo provee a través del sacrificio de Jesucristo en la cruz.
              </p>

              <blockquote className="border-l-4 border-ibcd-orange pl-6 italic my-8 text-slate-500">
                "Mas el justo por la fe vivirá." Esta cita de Habacuc 2:4 fue el texto que transformó la vida de Martín Lutero y encendió la Reforma Protestante. Nos recuerda que nuestra posición delante de Dios no depende de nuestras obras, sino de la fe en la obra terminada de Cristo.
              </blockquote>

              <h3>Aplicación</h3>
              <ul>
                <li>¿Te avergüenzas del evangelio en tu entorno laboral o familiar?</li>
                <li>¿Estás confiando en tu propia justicia o en la justicia que Dios provee por medio de la fe?</li>
                <li>¿Cómo debería cambiar nuestra forma de vivir el saber que hemos sido justificados por la fe?</li>
                <li>¿Cómo debería cambiar nuestra forma de vivir el saber que hemos sido justificados por la fe?</li>
              </ul>
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
