import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Facebook, Instagram, Youtube, Play, ChevronDown, ArrowLeft, Calendar, User, BookOpen } from 'lucide-react';

const Logo = ({ lightText = false, className = "" }: { lightText?: boolean, className?: string }) => {
  const textFill1 = lightText ? "#FFFFFF" : "#4D4D4D"; 
  const textFill2 = lightText ? "#FFFFFF" : "#0072BC"; 
  const iconFill = "#0072BC";

  return (
    <svg viewBox="0 0 553.46 276.82" className={className} xmlns="http://www.w3.org/2000/svg">
      <g>
        <g fill={textFill2} className="transition-colors duration-500">
          <path d="M329.64,156.16c-12.69,0-22.96-10.28-22.96-22.96s10.28-22.96,22.96-22.96c8.69,0,16.05,4.82,19.92,11.73-3.87,2.03-4.19,2.22-8.5,4.31-2.22-3.87-6.53-6.53-11.42-6.53-7.42,0-13.45,6.09-13.45,13.45s6.03,13.45,13.45,13.45c5.07,0,9.51-2.73,11.8-7.04,4.31,2.22,4.44,2.47,8.5,4.31-3.87,7.29-11.35,12.24-20.3,12.24Z"/>
          <path d="M354.5,110.75h9.96v45.29h-9.96v-45.29Z"/>
          <path d="M410.06,138.91c0,12.24-7.23,18.2-19.35,18.2s-19.28-5.83-19.28-18.2v-28.16h9.96v28.16c0,4.95,1.27,9.83,9.32,9.83,7.1,0,9.39-3.04,9.39-9.83v-28.16h9.96v28.16Z"/>
          <path d="M417.03,110.75h19.54c11.74,0,20.55,7.42,20.55,22.39,0,13.13-6.72,22.9-20.55,22.9h-19.54v-45.29ZM426.99,147.66h8.88c5.77,0,11.29-3.55,11.29-13.57,0-9.13-3.23-14.97-13.07-14.97h-7.1v28.54Z"/>
          <path d="M458.13,156.04l20.55-45.23h10.02l20.23,45.23h-9.64l-4.44-10.02h-22.9l-4.76,10.02h-9.07ZM483.82,119.31l-7.61,17.51h15.03l-7.36-17.51h-.06Z"/>
          <path d="M512.04,110.75h19.54c11.74,0,20.55,7.42,20.55,22.39,0,13.13-6.72,22.9-20.55,22.9h-19.54v-45.29ZM522,147.66h8.88c5.77,0,11.29-3.55,11.29-13.57,0-9.13-3.24-14.97-13.07-14.97h-7.1v28.54Z"/>
        </g>
        <g fill={textFill2} className="transition-colors duration-500">
          <path d="M305.34,170.75h19.54c11.74,0,20.55,7.42,20.55,22.39,0,13.13-6.72,22.9-20.55,22.9h-19.54v-45.29ZM315.3,207.66h8.88c5.77,0,11.29-3.55,11.29-13.57,0-9.13-3.24-14.97-13.07-14.97h-7.1v28.54Z"/>
          <path d="M359.25,197.96v9.64h25.56v8.37h-35.2v-45.42h33.05v8.37h-23.41v10.21h20.68v8.82h-20.68Z"/>
          <path d="M407.9,170.75h19.54c11.74,0,20.55,7.42,20.55,22.39,0,13.13-6.72,22.9-20.55,22.9h-19.54v-45.29ZM417.86,207.66h8.88c5.77,0,11.29-3.55,11.29-13.57,0-9.13-3.24-14.97-13.07-14.97h-7.1v28.54Z"/>
          <path d="M453.31,170.75h9.96v45.29h-9.96v-45.29Z"/>
          <path d="M490.61,216.61c-12.94,0-23.41-10.47-23.41-23.41s10.47-23.47,23.41-23.47,23.47,10.47,23.47,23.47-10.59,23.41-23.47,23.41ZM476.78,193.2c0,7.55,6.28,13.83,13.83,13.83s13.7-6.28,13.7-13.83-6.15-13.89-13.7-13.89-13.83,6.34-13.83,13.89Z"/>
          <path d="M524.98,202.59c1.01,5.96,6.34,6.79,10.02,6.79,3.49,0,8.82-1.01,8.82-5.65,0-9.64-26.96-3.42-26.96-20.36,0-9.32,8.75-13.7,16.94-13.7,9.45,0,18.14,4.12,18.14,14.59l-9.64-1.39c-1.21-5.27-5.84-5.46-8.94-5.46s-6.85,1.33-6.85,5.14c0,3.36,2.16,4.12,13.51,6.85,3.36.82,13.45,2.92,13.45,13.19,0,8.31-6.47,14.53-18.84,14.53-10.15,0-19.28-4.95-19.28-16.11l9.64,1.59Z"/>
        </g>
        <g fill={textFill1} className="transition-colors duration-500">
          <path d="M309.23,60.57v29.17h-3.25v-29.17h3.25Z"/>
          <path d="M329.6,67.61v2.5h-3.08v-2.67c0-2.63-1.04-4.21-3.42-4.21s-3.42,1.58-3.42,4.21v15.42c0,2.62,1.08,4.21,3.42,4.21s3.42-1.58,3.42-4.21v-5.83h-3v-2.92h6.08v8.58c0,4.42-2.08,7.33-6.58,7.33s-6.54-2.92-6.54-7.33v-15.08c0-4.42,2.08-7.33,6.54-7.33s6.58,2.92,6.58,7.33Z"/>
          <path d="M336.86,89.74v-29.17h3.25v26.21h8.33v2.96h-11.58Z"/>
          <path d="M365.45,73.49v2.92h-7.13v10.38h8.75v2.96h-12v-29.17h12v2.96h-8.75v9.96h7.13Z"/>
          <path d="M386.87,67.57v.79h-3.08v-.96c0-2.62-1-4.17-3.33-4.17s-3.33,1.54-3.33,4.12c0,6.54,9.79,7.17,9.79,15.38,0,4.42-2.12,7.29-6.58,7.29s-6.54-2.88-6.54-7.29v-1.67h3.04v1.83c0,2.62,1.08,4.17,3.42,4.17s3.42-1.54,3.42-4.17c0-6.5-9.75-7.13-9.75-15.33,0-4.5,2.08-7.29,6.46-7.29s6.5,2.88,6.5,7.29Z"/>
          <path d="M397.17,60.57v29.17h-3.25v-29.17h3.25Z"/>
          <path d="M407.96,83.86l-1.12,5.88h-3l5.58-29.17h4.71l5.58,29.17h-3.25l-1.12-5.88h-7.38ZM408.38,81.07h6.5l-3.29-16.83-3.21,16.83Z"/>
          <path d="M443.59,60.57c4.54,0,6.33,2.17,6.33,6.46v1.38c0,3.08-.88,5-3.42,5.79,2.83.79,3.92,3.04,3.92,6.25v2.46c0,4.38-2.13,6.83-6.67,6.83h-6.71v-29.17h6.54ZM442.8,72.95c2.58,0,3.92-.83,3.92-3.88v-1.71c0-2.58-.88-3.83-3.21-3.83h-3.21v9.42h2.5ZM443.76,86.78c2.38,0,3.46-1.25,3.46-3.96v-2.58c0-3.25-1.29-4.33-4.08-4.33h-2.83v10.88h3.46Z"/>
          <path d="M455.59,60.57h3.25v29.17h-3.25v-29.17ZM455.59,49.07h3.25v5.5h-3.25v-5.5Z"/>
          <path d="M465.13,60.57c4.54,0,6.33,2.17,6.33,6.46v1.38c0,3.08-.88,5-3.42,5.79,2.83.79,3.92,3.04,3.92,6.25v2.46c0,4.38-2.13,6.83-6.67,6.83h-6.71v-29.17h6.54ZM464.34,72.95c2.58,0,3.92-.83,3.92-3.88v-1.71c0-2.58-.88-3.83-3.21-3.83h-3.21v9.42h2.5ZM465.3,86.78c2.38,0,3.46-1.25,3.46-3.96v-2.58c0-3.25-1.29-4.33-4.08-4.33h-2.83v10.88h3.46Z"/>
          <path d="M485.8,89.74v-29.17h3.25v26.21h8.33v2.96h-11.58Z"/>
          <path d="M503.22,60.57h3.25v29.17h-3.25v-29.17Z"/>
          <path d="M527.76,60.28c5.42,0,9.29,2.67,10.08,7.96l-3.21.38c-.5-3.67-2.67-5.38-6.88-5.38s-6.75,2.42-6.75,10.63,2.54,10.63,6.75,10.63,6.38-1.71,6.88-5.38l3.21.38c-.79,5.29-4.67,7.96-10.08,7.96-6.17,0-10.08-3.67-10.08-13.58s3.92-13.58,10.08-13.58Z"/>
          <path d="M541.89,83.86l-1.12,5.88h-3l5.58-29.17h4.71l5.58,29.17h-3.25l-1.12-5.88h-7.38ZM542.3,81.07h6.5l-3.29-16.83-3.21,16.83Z"/>
        </g>
        <g fill={iconFill}>
          <path d="M129.56,236.46H39.29v-5.21c0-13.88,11.25-25.13,25.13-25.13h40.01c13.88,0,25.13,11.25,25.13,25.13v5.21Z"/>
          <path d="M228.66,236.46h-90.27v-5.21c0-13.88,11.25-25.13,25.13-25.13h40.01c13.88,0,25.13,11.25,25.13,25.13v5.21Z"/>
          <path d="M134.42,168.04H34.43v-5.21c0-13.88,11.25-25.13,25.13-25.13h49.73c13.88,0,25.13,11.25,25.13,25.13v5.21Z"/>
          <path d="M233.52,168.04h-90.27v-5.21c0-13.88,11.25-25.13,25.13-25.13h40.01c13.88,0,25.13,11.25,25.13,25.13v5.21Z"/>
          <path d="M134.42,99.63H34.43v-5.21c0-13.88,11.25-25.13,25.13-25.13h49.73c13.88,0,25.13,11.25,25.13,25.13v5.21Z"/>
          <path d="M233.52,99.63h-90.27v-5.21c0-13.88,11.25-25.13,25.13-25.13h40.01c13.88,0,25.13,11.25,25.13,25.13v5.21Z"/>
          <path d="M134.42,31.21H34.43v-5.21c0-13.88,11.25-25.13,25.13-25.13h49.73c13.88,0,25.13,11.25,25.13,25.13v5.21Z"/>
          <path d="M233.52,31.21h-90.27v-5.21c0-13.88,11.25-25.13,25.13-25.13h40.01c13.88,0,25.13,11.25,25.13,25.13v5.21Z"/>
          <path d="M134.42,276.82H34.43v-32.55h99.99v32.55Z"/>
          <path d="M233.52,276.82h-90.27v-32.55h90.27v32.55Z"/>
          <path d="M134.42,208.41H34.43v-32.55h99.99v32.55Z"/>
          <path d="M233.52,208.41h-90.27v-32.55h90.27v32.55Z"/>
          <path d="M134.42,140H34.43v-32.55h99.99v32.55Z"/>
          <path d="M233.52,140h-90.27v-32.55h90.27v32.55Z"/>
          <path d="M134.42,71.58H34.43V39.04h99.99v32.55Z"/>
          <path d="M233.52,71.58h-90.27V39.04h90.27v32.55Z"/>
          <path d="M25.6,276.82H0V0h25.6v276.82Z"/>
          <path d="M267.95,276.82h-25.6V0h25.6v276.82Z"/>
          <path d="M143.25,276.82h-17.65V0h17.65v276.82Z"/>
        </g>
      </g>
    </svg>
  );
};

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
