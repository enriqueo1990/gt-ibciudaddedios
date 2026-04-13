import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Facebook, Instagram, Youtube, Calendar as CalendarIcon, MapPin, Clock, Plus, ChevronDown } from 'lucide-react';

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
          <path d="M455.59,60.57h3.25v29.17h-3.25v-29.17ZM455.59,49.07h3.25v5.5h-3.25v-5.5Z"/>
          <path d="M465.13,60.57c4.54,0,6.33,2.17,6.33,6.46v1.38c0,3.08-.88,5-3.42,5.79,2.83.79,3.92,3.04,3.92,6.25v2.46c0,4.38-2.13,6.83-6.67,6.83h-6.71v-29.17h6.54ZM464.34,72.95c2.58,0,3.92-.83,3.92-3.88v-1.71c0-2.58-.88-3.83-3.21-3.83h-3.21v9.42h2.5ZM465.3,86.78c2.38,0,3.46-1.25,3.46-3.96v-2.58c0-3.25-1.29-4.33-4.08-4.33h-2.83v10.88h3.46Z"/>
          <path d="M485.8,89.74v-29.17h3.25v26.21h8.33v2.96h-11.58Z"/>
          <path d="M503.22,60.57h3.25v29.17h-3.25v-29.17Z"/>
          <path d="M527.76,60.28c5.42,0,9.29,2.67,10.08,7.96l-3.21.38c-.5-3.67-2.67-5.38-6.88-5.38s-6.75,2.42-6.75,10.63,2.54,10.63,6.75,10.63,6.38-1.71,6.88-5.38l3.21.38c-.79,5.29-4.67,7.96-10.08,7.96-6.17,0-10.08-3.67-10.08-13.58s3.92-13.58,10.08-13.58Z"/>
          <path d="M541.89,83.86l-1.12,5.88h-3l5.58-29.17h4.71l5.58,29.17h-3.25l-1.12-5.88h-7.38ZM542.3,81.07h6.5l-3.29-16.83-3.21,16.83Z"/>
        </g>
        {/* ICON */}
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
