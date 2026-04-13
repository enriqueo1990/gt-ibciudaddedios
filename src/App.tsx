import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Calendar, MapPin, Facebook, Instagram, Youtube, Menu, X, ArrowUpRight, ChevronRight, Hash, BookOpen, ChevronDown } from 'lucide-react';

const Logo = ({ lightText = false, className = "" }: { lightText?: boolean, className?: string }) => {
  const textFill1 = lightText ? "#FFFFFF" : "#4D4D4D"; // IGLESIA BÍBLICA
  const textFill2 = lightText ? "#FFFFFF" : "#0072BC"; // CIUDAD DE DIOS
  const iconFill = "#0072BC";

  return (
    <svg viewBox="0 0 553.46 276.82" className={className} xmlns="http://www.w3.org/2000/svg">
      <g>
        {/* CIUDAD */}
        <g fill={textFill2} className="transition-colors duration-500">
          <path d="M329.64,156.16c-12.69,0-22.96-10.28-22.96-22.96s10.28-22.96,22.96-22.96c8.69,0,16.05,4.82,19.92,11.73-3.87,2.03-4.19,2.22-8.5,4.31-2.22-3.87-6.53-6.53-11.42-6.53-7.42,0-13.45,6.09-13.45,13.45s6.03,13.45,13.45,13.45c5.07,0,9.51-2.73,11.8-7.04,4.31,2.22,4.44,2.47,8.5,4.31-3.87,7.29-11.35,12.24-20.3,12.24Z"/>
          <path d="M354.5,110.75h9.96v45.29h-9.96v-45.29Z"/>
          <path d="M410.06,138.91c0,12.24-7.23,18.2-19.35,18.2s-19.28-5.83-19.28-18.2v-28.16h9.96v28.16c0,4.95,1.27,9.83,9.32,9.83,7.1,0,9.39-3.04,9.39-9.83v-28.16h9.96v28.16Z"/>
          <path d="M417.03,110.75h19.54c11.74,0,20.55,7.42,20.55,22.39,0,13.13-6.72,22.9-20.55,22.9h-19.54v-45.29ZM426.99,147.66h8.88c5.77,0,11.29-3.55,11.29-13.57,0-9.13-3.23-14.97-13.07-14.97h-7.1v28.54Z"/>
          <path d="M458.13,156.04l20.55-45.23h10.02l20.23,45.23h-9.64l-4.44-10.02h-22.9l-4.76,10.02h-9.07ZM483.82,119.31l-7.61,17.51h15.03l-7.36-17.51h-.06Z"/>
          <path d="M512.04,110.75h19.54c11.74,0,20.55,7.42,20.55,22.39,0,13.13-6.72,22.9-20.55,22.9h-19.54v-45.29ZM522,147.66h8.88c5.77,0,11.29-3.55,11.29-13.57,0-9.13-3.24-14.97-13.07-14.97h-7.1v28.54Z"/>
        </g>
        {/* DE DIOS */}
        <g fill={textFill2} className="transition-colors duration-500">
          <path d="M305.34,170.75h19.54c11.74,0,20.55,7.42,20.55,22.39,0,13.13-6.72,22.9-20.55,22.9h-19.54v-45.29ZM315.3,207.66h8.88c5.77,0,11.29-3.55,11.29-13.57,0-9.13-3.24-14.97-13.07-14.97h-7.1v28.54Z"/>
          <path d="M359.25,197.96v9.64h25.56v8.37h-35.2v-45.42h33.05v8.37h-23.41v10.21h20.68v8.82h-20.68Z"/>
          <path d="M407.9,170.75h19.54c11.74,0,20.55,7.42,20.55,22.39,0,13.13-6.72,22.9-20.55,22.9h-19.54v-45.29ZM417.86,207.66h8.88c5.77,0,11.29-3.55,11.29-13.57,0-9.13-3.24-14.97-13.07-14.97h-7.1v28.54Z"/>
          <path d="M453.31,170.75h9.96v45.29h-9.96v-45.29Z"/>
          <path d="M490.61,216.61c-12.94,0-23.41-10.47-23.41-23.41s10.47-23.47,23.41-23.47,23.47,10.47,23.47,23.47-10.59,23.41-23.47,23.41ZM476.78,193.2c0,7.55,6.28,13.83,13.83,13.83s13.7-6.28,13.7-13.83-6.15-13.89-13.7-13.89-13.83,6.34-13.83,13.89Z"/>
          <path d="M524.98,202.59c1.01,5.96,6.34,6.79,10.02,6.79,3.49,0,8.82-1.01,8.82-5.65,0-9.64-26.96-3.42-26.96-20.36,0-9.32,8.75-13.7,16.94-13.7,9.45,0,18.14,4.12,18.14,14.59l-9.64-1.39c-1.21-5.27-5.84-5.46-8.94-5.46s-6.85,1.33-6.85,5.14c0,3.36,2.16,4.12,13.51,6.85,3.36.82,13.45,2.92,13.45,13.19,0,8.31-6.47,14.53-18.84,14.53-10.15,0-19.28-4.95-19.28-16.11l9.64,1.59Z"/>
        </g>
        {/* IGLESIA BÍBLICA */}
        <g fill={textFill1} className="transition-colors duration-500">
          <path d="M309.23,60.57v29.17h-3.25v-29.17h3.25Z"/>
          <path d="M329.6,67.61v2.5h-3.08v-2.67c0-2.63-1.04-4.21-3.42-4.21s-3.42,1.58-3.42,4.21v15.42c0,2.62,1.08,4.21,3.42,4.21s3.42-1.58,3.42-4.21v-5.83h-3v-2.92h6.08v8.58c0,4.42-2.08,7.33-6.58,7.33s-6.54-2.92-6.54-7.33v-15.08c0-4.42,2.08-7.33,6.54-7.33s6.58,2.92,6.58,7.33Z"/>
          <path d="M336.86,89.74v-29.17h3.25v26.21h8.33v2.96h-11.58Z"/>
          <path d="M365.45,73.49v2.92h-7.13v10.38h8.75v2.96h-12v-29.17h12v2.96h-8.75v9.96h7.13Z"/>
          <path d="M386.87,67.57v.79h-3.08v-.96c0-2.62-1-4.17-3.33-4.17s-3.33,1.54-3.33,4.12c0,6.54,9.79,7.17,9.79,15.38,0,4.42-2.12,7.29-6.58,7.29s-6.54-2.88-6.54-7.29v-1.67h3.04v1.83c0,2.62,1.08,4.17,3.42,4.17s3.42-1.54,3.42-4.17c0-6.5-9.75-7.13-9.75-15.33,0-4.5,2.08-7.29,6.46-7.29s6.5,2.88,6.5,7.29Z"/>
          <path d="M397.17,60.57v29.17h-3.25v-29.17h3.25Z"/>
          <path d="M407.96,83.86l-1.12,5.88h-3l5.58-29.17h4.71l5.58,29.17h-3.25l-1.12-5.88h-7.38ZM408.38,81.07h6.5l-3.29-16.83-3.21,16.83Z"/>
          <path d="M443.59,60.57c4.54,0,6.33,2.17,6.33,6.46v1.38c0,3.08-.88,5-3.42,5.79,2.83.79,3.92,3.04,3.92,6.25v2.46c0,4.38-2.13,6.83-6.67,6.83h-6.71v-29.17h6.54ZM442.8,72.95c2.58,0,3.92-.83,3.92-3.88v-1.71c0-2.58-.88-3.83-3.21-3.83h-3.21v9.42h2.5ZM443.76,86.78c2.38,0,3.46-1.25,3.46-3.96v-2.58c0-3.25-1.29-4.33-4.08-4.33h-2.83v10.88h3.46Z"/>
          <path d="M460.06,54.65h3.25l-3.88,4.29h-2.25l2.88-4.29ZM457.56,60.57h3.25v29.17h-3.25v-29.17Z"/>
          <path d="M474.85,60.57c4.54,0,6.33,2.17,6.33,6.46v1.38c0,3.08-.88,5-3.42,5.79,2.83.79,3.92,3.04,3.92,6.25v2.46c0,4.38-2.13,6.83-6.67,6.83h-6.71v-29.17h6.54ZM474.06,72.95c2.58,0,3.92-.83,3.92-3.88v-1.71c0-2.58-.88-3.83-3.21-3.83h-3.21v9.42h2.5ZM475.02,86.78c2.38,0,3.46-1.25,3.46-3.96v-2.58c0-3.25-1.29-4.33-4.08-4.33h-2.83v10.88h3.46Z"/>
          <path d="M488.82,89.74v-29.17h3.25v26.21h8.33v2.96h-11.58Z"/>
          <path d="M510.28,60.57v29.17h-3.25v-29.17h3.25Z"/>
          <path d="M530.66,67.61v2.63h-3.08v-2.79c0-2.63-1.04-4.21-3.42-4.21s-3.42,1.58-3.42,4.21v15.42c0,2.62,1.08,4.21,3.42,4.21s3.42-1.58,3.42-4.21v-3.79h3.08v3.62c0,4.42-2.08,7.33-6.58,7.33s-6.54-2.92-6.54-7.33v-15.08c0-4.42,2.08-7.33,6.54-7.33s6.58,2.92,6.58,7.33Z"/>
          <path d="M541.08,83.86l-1.12,5.88h-3l5.58-29.17h4.71l5.58,29.17h-3.25l-1.12-5.88h-7.38ZM541.5,81.07h6.5l-3.29-16.83-3.21,16.83Z"/>
        </g>
        {/* Church Icon */}
        <g fill={iconFill}>
          <circle cx="129.68" cy="149.88" r="11.6"/>
          <path d="M67.46,193.95c-3.87,0-7,3.14-7,7v15.33h14v-15.33c0-3.87-3.13-7-7-7Z"/>
          <path d="M183.46,200.95v15.33h14v-15.33c0-3.87-3.13-7-7-7s-7,3.14-7,7Z"/>
          <path d="M177.42,251.82h.03c7.56,0,17.31,2.54,26.74,4.99,14.04,3.65,27.3,7.1,37.08,4.06l-2.08-6.68c-7.87,2.45-20.77-.9-33.24-4.15-9.85-2.56-20.04-5.21-28.5-5.21h-.03c-24.47.02-36.74,5.2-43.89,14.54,2.07-12.01,14.78-24.67,44.5-24.69h.03c8.21,0,19.18,2.72,29.79,5.35,13.35,3.31,25.96,6.44,34.54,4.79l-1.32-6.87c-7.07,1.36-19.51-1.72-31.53-4.71-11.01-2.73-22.41-5.56-31.47-5.56h-.04c-1.38,0-2.73.04-4.06.09l-.86-65.33,39.69,12.84c2.25.73,3.77,2.82,3.77,5.18v33.78c0,2.66,2.18,4.4,4.43,4.4,1.13,0,2.27-.44,3.17-1.41,21.29-23.08,35.03-53.91,35.03-87.63C259.19,58.31,201.62.45,130.44,0c-.28,0-.55,0-.83,0C58.97,0,.82,57.37,0,128.11c-.39,33.6,12.31,64.3,33.01,87.53,1.08,1.21,2.47,1.75,3.84,1.75,2.65,0,5.22-2.04,5.22-5.18v-31.94c0-2.25,1.45-4.25,3.59-4.94l39.61-12.81v66.34c-.87-.02-1.76-.03-2.66-.03h-.04c-9.07,0-20.46,2.83-31.48,5.56-12.03,2.98-24.46,6.07-31.53,4.71l-1.32,6.87c8.58,1.66,21.19-1.47,34.54-4.79,10.61-2.63,21.58-5.35,29.79-5.35h.03c35.89.03,42.57,16.88,43.8,23.24-7.08-9.29-19.13-14.22-43.38-14.24h-.03c-8.46,0-18.65,2.65-28.5,5.21-12.47,3.24-25.37,6.6-33.24,4.15l-2.08,6.68c9.78,3.04,23.04-.41,37.08-4.06,9.43-2.45,19.18-4.99,26.74-4.99h.03c28.71.02,37.02,7.23,41.59,18H10.98v7h239v-7h-114.55c4.55-10.51,13.13-17.98,41.98-18ZM114,199.95v34.75c-5.33-2.52-12.11-4.46-20.72-5.36v-73.34c0-.09.02-.18.02-.27v-21.7c0-1.83.92-3.55,2.45-4.56l30.13-19.99c-.11-.37-.19-.76-.19-1.17v-48.95l-21.93.03h0c-2.21,0-4-1.79-4-3.99,0-2.21,1.78-4,3.99-4.01l21.94-.03v-18.05c0-2.21,1.79-4,4-4s4,1.79,4,4v18.04l21.86-.03h0c2.21,0,4,1.79,4,3.99,0,2.21-1.78,4-3.99,4.01l-21.87.03v48.96c0,.63-.16,1.22-.42,1.75l29.48,19.56c1.4.93,2.24,2.5,2.24,4.18v22.3c0,.11.02.22.03.33l.95,72c-7.88,1.01-14.78,3.02-20.6,6.07v-34.14c0-9.13-6.61-16.9-15.12-17.23-8.92-.34-16.26,7.32-16.26,16.82Z"/>
        </g>
      </g>
    </svg>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryItems = [
    { title: 'Bautismos 2025', tag: 'Vida Nueva', desc: 'Celebrando la fe de nuevos creyentes en nuestra comunidad.', img: 'baptism', height: 'h-80' },
    { title: 'Tiempo de Alabanza', tag: 'Adoración', desc: 'Nuestra congregación unida en cánticos y gratitud.', img: 'worship', height: 'h-64' },
    { title: 'Grupos de Conexión', tag: 'Comunidad', desc: 'Estudiando la Palabra en hogares de toda la ciudad.', img: 'community', height: 'h-96' },
    { title: 'Ministerio Infantil', tag: 'Niños', desc: 'Sembrando la semilla del Evangelio en los más pequeños.', img: 'kids', height: 'h-72' },
    { title: 'Cena del Señor', tag: 'Comunión', desc: 'Recordando el sacrificio de Cristo en unidad.', img: 'communion', height: 'h-80' },
    { title: 'Retiro Anual', tag: 'Crecimiento', desc: 'Un tiempo apartado para la reflexión y el compañerismo.', img: 'retreat', height: 'h-64' },
  ];

  return (
    <div className="bg-white selection:bg-ibcd-blue/10 selection:text-ibcd-blue">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-slate-100' : 'py-8 bg-transparent'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <a href="#" className="flex items-center group outline-none focus-visible:ring-2 focus-visible:ring-ibcd-blue rounded-sm">
            <Logo 
              lightText={!isScrolled && !mobileMenuOpen} 
              className="h-10 md:h-12 w-auto transition-all duration-500 group-hover:scale-105" 
            />
          </a>

          <div className="hidden md:flex items-center gap-12">
            <a href="/" className={`text-[13px] font-medium tracking-wide transition-all hover:text-ibcd-blue focus-visible:text-ibcd-blue outline-none ${isScrolled ? 'text-slate-600' : 'text-white/80'}`}>Inicio</a>
            
            <div className="relative group">
              <button className={`text-[13px] font-medium tracking-wide transition-all hover:text-ibcd-blue focus-visible:text-ibcd-blue outline-none flex items-center gap-1 ${isScrolled ? 'text-slate-600' : 'text-white/80'}`}>
                Nosotros <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                <div className="bg-white border border-slate-100 shadow-lg py-2 min-w-[160px] flex flex-col rounded-sm">
                  <a href="/liderazgo" className="px-4 py-2 text-[13px] font-medium text-slate-600 hover:text-ibcd-blue hover:bg-slate-50 transition-colors">Liderazgo</a>
                  <a href="/creencias" className="px-4 py-2 text-[13px] font-medium text-slate-600 hover:text-ibcd-blue hover:bg-slate-50 transition-colors">Creencias</a>
                </div>
              </div>
            </div>

            <a href="/eventos" className={`text-[13px] font-medium tracking-wide transition-all hover:text-ibcd-blue focus-visible:text-ibcd-blue outline-none ${isScrolled ? 'text-slate-600' : 'text-white/80'}`}>Eventos</a>
            <a href="/sermones" className={`text-[13px] font-medium tracking-wide transition-all hover:text-ibcd-blue focus-visible:text-ibcd-blue outline-none ${isScrolled ? 'text-slate-600' : 'text-white/80'}`}>Sermones</a>
            
            <a 
              href="/visitanos" 
              className={`text-[13px] font-semibold px-6 py-2.5 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ibcd-blue outline-none ${
                isScrolled 
                  ? 'bg-slate-900 text-white hover:bg-ibcd-blue' 
                  : 'bg-white text-slate-900 hover:bg-slate-100'
              }`}
            >
              Visítanos
            </a>
          </div>

          <button 
            className="md:hidden p-2 outline-none focus-visible:text-ibcd-blue"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="text-slate-900" />
            ) : (
              <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
            )}
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
            <a href="/visitanos" className="text-4xl font-serif text-slate-900 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Visítanos</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://picsum.photos/seed/minimal-church/1920/1080" 
            alt="IBCD Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="text-white/50 text-xs uppercase tracking-[0.3em] font-medium mb-6 block">
              Rosario, Argentina
            </span>
            <h1 className="text-white text-6xl md:text-8xl font-serif leading-[0.95] mb-12">
              Existimos para <br />
              <span className="italic text-white/90">la gloria de Dios.</span>
            </h1>
            <div className="flex items-center gap-8">
              <a href="#contacto" className="group flex items-center gap-3 text-white text-sm font-medium outline-none focus-visible:text-ibcd-blue">
                <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all group-hover:bg-ibcd-blue group-hover:border-ibcd-blue group-hover:text-white group-focus-visible:border-ibcd-blue">
                  <ChevronRight size={18} />
                </span>
                Visítanos este domingo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome / About */}
      <section id="nosotros" className="py-32 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-12">
                  Una comunidad centrada en <span className="italic">el Evangelio.</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <p className="text-slate-500 leading-relaxed">
                    Somos una iglesia que busca vivir para la gloria de Dios en cada aspecto de la vida. Nuestra misión es proclamar a Cristo y formar discípulos que amen Su Palabra.
                  </p>
                  <p className="text-slate-500 leading-relaxed">
                    Aquí encontrarás una familia que te recibirá con gracia, donde la enseñanza bíblica es nuestra prioridad y la comunión nuestra alegría.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] bg-slate-100 overflow-hidden group"
              >
                <img 
                  src="https://picsum.photos/seed/pastor-minimal/800/1000" 
                  alt="Pastor Cristian" 
                  className="w-full h-full object-cover transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ibcd-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 text-white z-10">
                  <p className="font-serif text-2xl">Cristian Palomares</p>
                  <p className="text-xs uppercase tracking-widest opacity-70">Pastor Principal</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sermon - Minimalist Card */}
      <section id="sermones" className="py-32 bg-slate-50">
        <div className="container-custom">
          <div className="flex justify-between items-baseline mb-16">
            <h2 className="text-4xl font-serif italic">Sermones</h2>
            <a href="/sermones" className="text-xs uppercase tracking-widest font-bold text-slate-400 hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">
              Archivo completo
            </a>
          </div>

          <a 
            href="/sermon"
            className="bg-white border border-slate-100 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all group block"
          >
            <div className="md:w-1/2 aspect-video bg-slate-900 relative overflow-hidden">
              <img 
                src="https://picsum.photos/seed/sermon-min/1200/800" 
                alt="Sermon" 
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all group-hover:bg-ibcd-blue group-hover:border-ibcd-blue outline-none focus-visible:bg-ibcd-blue">
                  <Play size={24} fill="currentColor" />
                </button>
              </div>
            </div>
            <div className="md:w-1/2 p-12 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.2em] text-ibcd-orange font-bold mb-4 block">Serie: Romanos</span>
              <h3 className="text-3xl font-serif mb-6 leading-tight group-hover:text-ibcd-blue transition-colors cursor-pointer">La Justicia de Dios revelada en el Evangelio</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Un estudio profundo sobre cómo la gracia de Dios nos alcanza y nos transforma desde el corazón hacia afuera.
              </p>
              <div className="flex items-center gap-4 text-[11px] text-slate-400 font-medium">
                <span>06 ABR 2026</span>
                <span className="w-1 h-1 bg-slate-200 rounded-full" />
                <span className="group-hover:text-ibcd-blue transition-colors cursor-pointer">PR. CRISTIAN PALOMARES</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Gallery Section - Masonry Grid */}
      <section id="galería" className="py-32 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mb-20">
            <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Nuestra vida <span className="italic">en comunidad.</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Momentos capturados de nuestra congregación viviendo el Evangelio juntos.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryItems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative group overflow-hidden bg-slate-100 break-inside-avoid rounded-sm cursor-pointer`}
              >
                <img 
                  src={`https://picsum.photos/seed/ibcd-gal-${item.img}/800/1000`} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-ibcd-blue text-white text-[9px] font-bold uppercase tracking-widest rounded-sm">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="text-white font-serif text-2xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h4>
                  <p className="text-white/60 text-xs leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events - Clean Grid */}
      <section id="eventos" className="py-32 bg-slate-50">
        <div className="container-custom">
          <h2 className="text-4xl font-serif italic mb-16">Próximos Encuentros</h2>
          <div className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {[
              { title: 'Retiro de Jóvenes', date: '19 ABR', loc: 'Funes' },
              { title: 'Conferencia Misiones', date: '26 ABR', loc: 'Rosario' },
              { title: 'Bautismos', date: '03 MAY', loc: 'IBCD' },
            ].map((event, i) => (
              <a 
                key={i} 
                href="/eventos"
                className="bg-white p-12 hover:bg-slate-50 transition-colors group cursor-pointer outline-none focus-visible:bg-slate-50 block"
              >
                <p className="text-[10px] uppercase tracking-widest text-ibcd-orange font-bold mb-4">{event.date}</p>
                <h4 className="text-2xl font-serif mb-8 group-hover:italic group-hover:text-ibcd-blue transition-all">{event.title}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors">{event.loc}</span>
                  <ArrowUpRight size={16} className="text-slate-300 group-hover:text-ibcd-blue transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Creencias CTA - Delicate Editorial */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-16 bg-slate-100"></div>
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center pt-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-ibcd-orange font-bold mb-8 block">
              Fundamento
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-8 leading-tight">
              Cimentados en la <span className="italic">autoridad inerrante</span> de la Biblia.
            </h2>
            <p className="text-slate-500 text-lg mb-12 leading-relaxed font-light">
              Abrazamos las doctrinas de la gracia y nos identificamos con la fe cristiana histórica, 
              buscando glorificar a Dios en todo lo que hacemos.
            </p>
            <a 
              href="/creencias" 
              className="group inline-flex items-center gap-4 text-xs uppercase tracking-widest font-bold text-slate-900 hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue"
            >
              <span className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center transition-all group-hover:border-ibcd-blue group-hover:bg-ibcd-blue/5">
                <BookOpen size={16} className="text-slate-400 group-hover:text-ibcd-blue transition-colors" />
              </span>
              Leer Declaración de Fe
            </a>
          </div>
        </div>
      </section>

      {/* Meetings & Contact */}
      <section id="contacto" className="py-32 bg-slate-950 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif mb-16">Visítanos.</h2>
              <div className="space-y-12">
                <div className="flex gap-12">
                  <div className="group cursor-pointer">
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-4 group-hover:text-ibcd-orange transition-colors">Domingos</p>
                    <p className="text-3xl font-serif group-hover:italic transition-all">10:00 AM</p>
                    <p className="text-xs text-white/60 mt-2">Culto de Adoración</p>
                  </div>
                  <div className="group cursor-pointer">
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-4 group-hover:text-ibcd-orange transition-colors">Miércoles</p>
                    <p className="text-3xl font-serif group-hover:italic transition-all">07:30 PM</p>
                    <p className="text-xs text-white/60 mt-2">Estudio Bíblico</p>
                  </div>
                </div>
                
                <div className="pt-12 border-t border-white/10">
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-4">Ubicación</p>
                  <p className="text-xl font-serif opacity-90 hover:text-ibcd-blue transition-colors cursor-pointer">San Martín 2650, Rosario</p>
                  <a href="#" className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-ibcd-blue mt-4 transition-colors outline-none focus-visible:text-ibcd-blue">
                    Ver en Google Maps <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="aspect-square bg-white/5 rounded-sm overflow-hidden opacity-50 hover:opacity-100 transition-all duration-700 border border-white/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.856723467439!2d-60.6481!3d-32.9575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab1000000001%3A0x0!2zMzLCsDU3JzI3LjAiUyA2MMKwMzgnNTMuMiJX!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar" 
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="max-w-xs">
              <a href="#" className="inline-block mb-6 group outline-none focus-visible:ring-2 focus-visible:ring-ibcd-blue rounded-sm">
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
                  <li><a href="#nosotros" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Nosotros</a></li>
                  <li><a href="/liderazgo" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Liderazgo</a></li>
                  <li><a href="/creencias" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Creencias</a></li>
                  <li><a href="/eventos" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Eventos</a></li>
                  <li><a href="/sermones" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Sermones</a></li>
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
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-50 text-[10px] text-slate-400 uppercase tracking-widest font-medium">
            <p>© 2026 IBCD Rosario</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Privacidad</a>
              <a href="#" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
