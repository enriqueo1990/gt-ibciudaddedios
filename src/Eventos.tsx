import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Facebook, Instagram, Youtube, Calendar as CalendarIcon, MapPin, Clock, Plus, ChevronDown } from 'lucide-react';
import { Logo } from './components/Logo';

// Helper functions for calendar links
const getGoogleCalUrl = (event: any) => {
  const start = new Date(event.date).toISOString().replace(/-|:|\.\d\d\d/g, "");
  const end = new Date(event.endDate).toISOString().replace(/-|:|\.\d\d\d/g, "");
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${start}/${end}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
};

const getAppleCalUrl = (event: any) => {
  const start = new Date(event.date).toISOString().replace(/-|:|\.\d\d\d/g, "");
  const end = new Date(event.endDate).toISOString().replace(/-|:|\.\d\d\d/g, "");
  const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:${start}\nDTEND:${end}\nSUMMARY:${event.title}\nDESCRIPTION:${event.description}\nLOCATION:${event.location}\nEND:VEVENT\nEND:VCALENDAR`;
  return `data:text/calendar;charset=utf8,${encodeURIComponent(ics)}`;
};

export default function Eventos() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const highlightedEvents = [
    { 
      id: 1, 
      title: "Conferencia de Mujeres 2026", 
      date: "2026-05-15T09:00:00", 
      endDate: "2026-05-15T18:00:00", 
      displayDate: "15 de Mayo",
      time: "09:00 AM - 06:00 PM",
      location: "Auditorio Principal IBCD", 
      description: "Un tiempo de enseñanza, comunión y adoración exclusivo para mujeres. Tema central: 'Arraigadas en Su Palabra'.", 
      img: "women" 
    },
    { 
      id: 2, 
      title: "Retiro de Jóvenes", 
      date: "2026-05-22T18:00:00", 
      endDate: "2026-05-24T14:00:00", 
      displayDate: "22 - 24 de Mayo",
      time: "Salida: Viernes 6:00 PM",
      location: "Campamento Peniel", 
      description: "Fin de semana de estudio bíblico intensivo y compañerismo para jóvenes de 18 a 30 años.", 
      img: "youth" 
    },
    { 
      id: 3, 
      title: "Noche de Adoración y Oración", 
      date: "2026-05-29T19:30:00", 
      endDate: "2026-05-29T21:30:00", 
      displayDate: "29 de Mayo",
      time: "07:30 PM",
      location: "Santuario Principal", 
      description: "Nos reunimos como iglesia para un tiempo especial dedicado a la alabanza congregacional y la oración corporativa.", 
      img: "worship" 
    }
  ];

  const upcomingMonths = [
    { 
      month: "Junio 2026", 
      events: [
        { id: 4, title: "Bautismos y Santa Cena", date: "2026-06-07T10:00:00", endDate: "2026-06-07T12:30:00", displayDate: "Domingo 7", time: "10:00 AM", location: "Santuario Principal", description: "Celebración de nuevos creyentes y comunión." },
        { id: 5, title: "Taller para Matrimonios", date: "2026-06-20T09:00:00", endDate: "2026-06-20T13:00:00", displayDate: "Sábado 20", time: "09:00 AM", location: "Salón Anexo", description: "Herramientas bíblicas prácticas para fortalecer el pacto matrimonial." }
      ]
    },
    { 
      month: "Julio 2026", 
      events: [
        { id: 6, title: "Escuela Bíblica de Vacaciones (EBV)", date: "2026-07-15T09:00:00", endDate: "2026-07-19T12:00:00", displayDate: "15 al 19 de Julio", time: "09:00 AM - 12:00 PM", location: "Instalaciones IBCD", description: "Cinco días de enseñanza bíblica, juegos y manualidades para niños de 4 a 12 años." },
        { id: 7, title: "Reunión General de Servidores", date: "2026-07-25T10:00:00", endDate: "2026-07-25T12:00:00", displayDate: "Sábado 25", time: "10:00 AM", location: "Auditorio Principal", description: "Tiempo de capacitación y visión para todos los voluntarios de la iglesia." }
      ]
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

            <a href="/eventos" className="text-[11px] uppercase tracking-[0.2em] font-medium text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Eventos</a>
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

            <a href="/eventos" className="text-4xl font-serif text-ibcd-blue italic transition-all" onClick={() => setMobileMenuOpen(false)}>Eventos</a>
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
              Calendario
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.95] mb-8">
              Próximos <span className="italic">Eventos.</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
              Únete a nosotros en nuestras próximas actividades. Un espacio para crecer en la Palabra, 
              fomentar la comunión y servir juntos como cuerpo de Cristo.
            </p>
          </div>
        </div>
      </section>

      {/* Destacados (Highlighted) */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-serif mb-16">Destacados este mes</h2>
          
          <div className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {highlightedEvents.map((event) => (
              <div key={event.id} className="bg-white p-8 md:p-12 group flex flex-col h-full">
                <div className="aspect-[4/3] bg-slate-100 mb-8 overflow-hidden rounded-sm relative">
                  <img 
                    src={`https://picsum.photos/seed/${event.img}/800/600`} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white px-4 py-2 text-[10px] uppercase tracking-widest font-bold text-slate-900 shadow-sm">
                    {event.displayDate}
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif mb-4 group-hover:text-ibcd-blue transition-colors">
                  {event.title}
                </h3>
                <p className="text-slate-500 font-light leading-relaxed mb-8 flex-grow">
                  {event.description}
                </p>
                
                <div className="space-y-3 mb-8 text-sm text-slate-500">
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-slate-400" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-slate-400" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Añadir al calendario:</span>
                  <div className="flex gap-4">
                    <a 
                      href={getGoogleCalUrl(event)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-slate-600 hover:text-ibcd-blue transition-colors flex items-center gap-1"
                    >
                      <Plus size={14} /> Google
                    </a>
                    <a 
                      href={getAppleCalUrl(event)}
                      className="text-xs font-medium text-slate-600 hover:text-ibcd-blue transition-colors flex items-center gap-1"
                    >
                      <Plus size={14} /> Apple/Outlook
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Months List */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {upcomingMonths.map((monthGroup, idx) => (
              <div key={idx} className="mb-24 last:mb-0">
                <h2 className="text-4xl font-serif italic mb-12 text-slate-900">{monthGroup.month}</h2>
                
                <div className="flex flex-col gap-px bg-slate-200 border border-slate-200">
                  {monthGroup.events.map((event) => (
                    <div key={event.id} className="bg-white p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 group hover:bg-slate-50/50 transition-colors">
                      {/* Date Column */}
                      <div className="md:w-1/4 flex-shrink-0">
                        <span className="text-sm font-bold text-ibcd-blue block mb-2">{event.displayDate}</span>
                        <span className="text-sm text-slate-500 flex items-center gap-2"><Clock size={14}/> {event.time}</span>
                      </div>
                      
                      {/* Details Column */}
                      <div className="md:w-2/4 flex-grow">
                        <h3 className="text-2xl font-serif mb-3 text-slate-900 group-hover:text-ibcd-blue transition-colors">{event.title}</h3>
                        <p className="text-slate-500 font-light leading-relaxed mb-4">{event.description}</p>
                        <span className="text-sm text-slate-400 flex items-center gap-2"><MapPin size={14}/> {event.location}</span>
                      </div>

                      {/* Actions Column */}
                      <div className="md:w-1/4 flex-shrink-0 flex flex-col justify-center gap-3 border-t border-slate-100 md:border-t-0 pt-6 md:pt-0">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Añadir a:</span>
                        <a 
                          href={getGoogleCalUrl(event)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-slate-600 hover:text-ibcd-blue transition-colors flex items-center gap-2"
                        >
                          <Plus size={14} /> Google Calendar
                        </a>
                        <a 
                          href={getAppleCalUrl(event)}
                          className="text-xs font-medium text-slate-600 hover:text-ibcd-blue transition-colors flex items-center gap-2"
                        >
                          <Plus size={14} /> Apple / ICS
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
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
