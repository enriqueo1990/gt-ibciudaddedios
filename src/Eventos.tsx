import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, MapPin, Clock, Plus, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './components/Logo';
import { getUpcomingEvents } from './lib/api';
import { useFetch } from './lib/hooks';
import type { WPEvent } from './lib/types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

/* ── Helpers ── */

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString('es-AR', { day: 'numeric', month: 'long' });
}

function formatMonthYear(dateStr: string): string {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString('es-AR', { month: 'long', year: 'numeric' })
    .replace(/^\w/, c => c.toUpperCase());
}

function getEventImg(event: WPEvent): string {
  return event._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? '';
}

function getGoogleCalUrl(event: WPEvent): string {
  const ed = event.gtc_evento_data;
  const startStr = `${ed.start_date.replace(/-/g, '')}${ed.start_time ? 'T' + ed.start_time.replace(':', '') + '00' : ''}`;
  const endStr = `${(ed.end_date || ed.start_date).replace(/-/g, '')}${ed.end_time ? 'T' + ed.end_time.replace(':', '') + '00' : ''}`;
  const title = event.title.rendered;
  const desc = event.excerpt.rendered.replace(/<[^>]+>/g, '');
  const loc = ed.location_name || ed.address || '';
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startStr}/${endStr}&details=${encodeURIComponent(desc)}&location=${encodeURIComponent(loc)}`;
}

function getICSContent(event: WPEvent): string {
  const ed = event.gtc_evento_data;
  const startStr = `${ed.start_date.replace(/-/g, '')}${ed.start_time ? 'T' + ed.start_time.replace(':', '') + '00' : ''}`;
  const endStr = `${(ed.end_date || ed.start_date).replace(/-/g, '')}${ed.end_time ? 'T' + ed.end_time.replace(':', '') + '00' : ''}`;
  const title = event.title.rendered;
  const desc = event.excerpt.rendered.replace(/<[^>]+>/g, '');
  const loc = ed.location_name || ed.address || '';
  const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:${startStr}\nDTEND:${endStr}\nSUMMARY:${title}\nDESCRIPTION:${desc}\nLOCATION:${loc}\nEND:VEVENT\nEND:VCALENDAR`;
  return `data:text/calendar;charset=utf8,${encodeURIComponent(ics)}`;
}

function groupByMonth(events: WPEvent[]): { month: string; events: WPEvent[] }[] {
  const map = new Map<string, WPEvent[]>();
  for (const ev of events) {
    const key = formatMonthYear(ev.gtc_evento_data.start_date);
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(ev);
  }
  return Array.from(map.entries()).map(([month, events]) => ({ month, events }));
}

/* ── Component ── */

export default function Eventos() {
  const { data: events, loading, error } = useFetch(getUpcomingEvents);

  // Separar destacados (featured=true) de los del listado mensual
  const featured = events?.filter(e => e.gtc_evento_data.featured) ?? [];
  const allForList = events ?? [];
  const monthGroups = groupByMonth(allForList);

  // Fallback: si no hay ninguno marcado como featured, mostrar los primeros 3
  const highlightedEvents = featured.length > 0 ? featured.slice(0, 3) : (events?.slice(0, 3) ?? []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-ibcd-blue selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-48 pb-24 bg-white border-b border-slate-100">
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

      {/* Skeleton global */}
      {loading && (
        <section className="py-32 bg-white">
          <div className="container-custom">
            <div className="h-8 w-48 bg-slate-100 rounded mb-16 animate-pulse" />
            <div className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 animate-pulse">
              {[1,2,3].map(i => (
                <div key={i} className="bg-white p-8 md:p-12 flex flex-col gap-4">
                  <div className="aspect-[4/3] bg-slate-100 rounded-sm" />
                  <div className="h-6 w-3/4 bg-slate-100 rounded" />
                  <div className="h-4 w-full bg-slate-100 rounded" />
                  <div className="h-4 w-2/3 bg-slate-100 rounded" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Error */}
      {error && (
        <section className="py-32 bg-white">
          <div className="container-custom text-center">
            <p className="text-slate-400 text-lg">No se pudieron cargar los eventos.</p>
          </div>
        </section>
      )}

      {/* Destacados */}
      {!loading && !error && highlightedEvents.length > 0 && (
        <section className="py-32 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-serif mb-16">Destacados</h2>
            
            <div className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
              {highlightedEvents.map((event) => {
                const ed = event.gtc_evento_data;
                const img = getEventImg(event);
                const dateDisplay = formatDate(ed.start_date);
                const location = ed.location_name || ed.address || (ed.format === 'online' ? 'Online' : '');
                const timeDisplay = ed.all_day ? 'Todo el día' : [ed.start_time, ed.end_time].filter(Boolean).join(' - ');
                const description = event.excerpt.rendered.replace(/<[^>]+>/g, '').trim()
                  || event.content.rendered.replace(/<[^>]+>/g, '').trim();

                return (
                  <div key={event.id} className="bg-white p-8 md:p-12 group flex flex-col h-full">
                    <div className="aspect-[4/3] bg-slate-100 mb-8 overflow-hidden rounded-sm relative">
                      {img ? (
                        <img 
                          src={img}
                          alt={event.title.rendered}
                          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <CalendarIcon size={48} className="text-slate-200" />
                        </div>
                      )}
                      <div className="absolute top-4 left-4 bg-white px-4 py-2 text-[10px] uppercase tracking-widest font-bold text-slate-900 shadow-sm">
                        {dateDisplay}
                      </div>
                      {ed.format === 'online' && (
                        <div className="absolute top-4 right-4 bg-ibcd-blue text-white px-3 py-1 text-[9px] uppercase tracking-widest font-bold rounded-sm flex items-center gap-1">
                          <Wifi size={10} /> Online
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-serif mb-4 group-hover:text-ibcd-blue transition-colors">
                      {event.title.rendered}
                    </h3>
                    {description && (
                      <p className="text-slate-500 font-light leading-relaxed mb-8 flex-grow line-clamp-3">
                        {description}
                      </p>
                    )}
                    
                    <div className="space-y-3 mb-8 text-sm text-slate-500">
                      {timeDisplay && (
                        <div className="flex items-center gap-3">
                          <Clock size={16} className="text-slate-400 shrink-0" />
                          <span>{timeDisplay}</span>
                        </div>
                      )}
                      {location && (
                        <div className="flex items-center gap-3">
                          <MapPin size={16} className="text-slate-400 shrink-0" />
                          <span>{location}</span>
                        </div>
                      )}
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
                          href={getICSContent(event)}
                          download={`${event.slug}.ics`}
                          className="text-xs font-medium text-slate-600 hover:text-ibcd-blue transition-colors flex items-center gap-1"
                        >
                          <Plus size={14} /> Apple / Outlook
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Lista mensual */}
      {!loading && !error && monthGroups.length > 0 && (
        <section className="py-32 bg-slate-50 border-t border-slate-100">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {monthGroups.map((monthGroup, idx) => (
                <div key={idx} className="mb-24 last:mb-0">
                  <h2 className="text-4xl font-serif italic mb-12 text-slate-900">{monthGroup.month}</h2>
                  
                  <div className="flex flex-col gap-px bg-slate-200 border border-slate-200">
                    {monthGroup.events.map((event) => {
                      const ed = event.gtc_evento_data;
                      const dateDisplay = formatDate(ed.start_date);
                      const location = ed.location_name || ed.address || (ed.format === 'online' ? 'Online' : '');
                      const timeDisplay = ed.all_day ? 'Todo el día' : [ed.start_time, ed.end_time].filter(Boolean).join(' - ');
                      const description = event.excerpt.rendered.replace(/<[^>]+>/g, '').trim()
                        || event.content.rendered.replace(/<[^>]+>/g, '').trim();

                      return (
                        <div key={event.id} className="bg-white p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 group hover:bg-slate-50/50 transition-colors">
                          {/* Fecha */}
                          <div className="md:w-1/4 flex-shrink-0">
                            <span className="text-sm font-bold text-ibcd-blue block mb-2">{dateDisplay}</span>
                            {timeDisplay && (
                              <span className="text-sm text-slate-500 flex items-center gap-2">
                                <Clock size={14} /> {timeDisplay}
                              </span>
                            )}
                          </div>
                          
                          {/* Detalle */}
                          <div className="md:w-2/4 flex-grow">
                            <h3 className="text-2xl font-serif mb-3 text-slate-900 group-hover:text-ibcd-blue transition-colors">
                              {event.title.rendered}
                            </h3>
                            {description && (
                              <p className="text-slate-500 font-light leading-relaxed mb-4 line-clamp-2">{description}</p>
                            )}
                            {location && (
                              <span className="text-sm text-slate-400 flex items-center gap-2">
                                <MapPin size={14} /> {location}
                              </span>
                            )}
                          </div>

                          {/* Acciones */}
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
                              href={getICSContent(event)}
                              download={`${event.slug}.ics`}
                              className="text-xs font-medium text-slate-600 hover:text-ibcd-blue transition-colors flex items-center gap-2"
                            >
                              <Plus size={14} /> Apple / ICS
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sin eventos */}
      {!loading && !error && (!events || events.length === 0) && (
        <section className="py-32 bg-white">
          <div className="container-custom text-center">
            <CalendarIcon size={48} className="text-slate-200 mx-auto mb-6" />
            <p className="text-slate-400 text-lg">No hay eventos próximos por el momento.</p>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
