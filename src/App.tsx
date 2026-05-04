import { motion } from 'motion/react';
import { Play, Calendar, MapPin, Facebook, Instagram, Youtube, ArrowUpRight, ChevronRight, Hash, BookOpen } from 'lucide-react';
import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';
import { Link } from 'react-router-dom';
import { getLatestSermons, getUpcomingEvents } from './lib/api';
import { useFetch } from './lib/hooks';

export default function App() {
  const { data: latestSermons, loading: loadingSermon } = useFetch(getLatestSermons);
  const { data: events, loading: loadingEvents } = useFetch(getUpcomingEvents);
  const featuredSermon = latestSermons?.[0] ?? null;

  const galleryItems = [
    { title: 'Bautismos', tag: 'Vida Nueva', desc: 'Celebrando la fe de nuevos creyentes en nuestra comunidad.', img: '/bautismo2.jpg', height: 'h-100' },
    { title: 'Tiempo de Alabanza', tag: 'Adoración', desc: 'Nuestra congregación unida en cánticos y gratitud.', img: '/adorar2.png', height: 'h-120' },
    { title: 'Grupos de Conexión', tag: 'Comunidad', desc: 'Estudiando la Palabra en hogares de toda la ciudad.', img: '/biblia5.jpg', height: 'h-96' },
    { title: 'Ministerio Infantil', tag: 'Niños', desc: 'Sembrando la semilla del Evangelio en los más pequeños.', img: '/kids.jpg', height: 'h-90' },
    { title: 'Cena del Señor', tag: 'Comunión', desc: 'Recordando el sacrificio de Cristo en unidad.', img: '/santacena5.jpg', height: 'h-120' },
    { title: 'Unos a otros', tag: 'Crecimiento', desc: 'Valoramos y alentamos el ministerio de cuidarnos unos a otros.', img: '/cristian2.jpg', height: 'h-120' },
  ];

  return (
    <div className="bg-white selection:bg-ibcd-blue/10 selection:text-ibcd-blue">
      <Navbar isHome />

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/portada.jpg"
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
                  src="/bautismo-portada.png"
                  alt="Bautismo"
                  className="w-full h-full object-cover transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ibcd-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 text-white z-10 hidden">
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
            <Link to="/sermones" className="text-xs uppercase tracking-widest font-bold text-slate-400 hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">
              Archivo completo
            </Link>
          </div>

          {loadingSermon && (
            <div className="bg-white border border-slate-100 h-64 flex items-center justify-center text-slate-300 text-sm">
              Cargando sermón…
            </div>
          )}

          {featuredSermon && (
            <Link
              to={`/sermones/${featuredSermon.slug}`}
              className="bg-white border border-slate-100 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all group block"
            >
              <div className="md:w-1/2 aspect-video bg-slate-900 relative overflow-hidden">
                <img
                  src={featuredSermon.featured_image || 'https://picsum.photos/seed/sermon-min/1200/800'}
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
                <span className="text-[10px] uppercase tracking-[0.2em] text-ibcd-orange font-bold mb-4 block">
                  Serie: {featuredSermon.sermon_data.series?.[0]?.name ?? 'Sermón'}
                </span>
                <h3 className="text-3xl font-serif mb-6 leading-tight group-hover:text-ibcd-blue transition-colors cursor-pointer">
                  {featuredSermon.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {featuredSermon.sermon_data.summary}
                </p>
                <div className="flex items-center gap-4 text-[11px] text-slate-400 font-medium">
                  <span>{featuredSermon.sermon_data.date_label}</span>
                  <span className="w-1 h-1 bg-slate-200 rounded-full" />
                  <span className="group-hover:text-ibcd-blue transition-colors cursor-pointer">
                    {featuredSermon.sermon_data.preachers?.[0]?.name}
                  </span>
                </div>
              </div>
            </Link>
          )}
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
                className={`relative group overflow-hidden bg-slate-100 break-inside-avoid rounded-sm cursor-pointer ${item.height}`}
              >
                <img
                  src={item.img.startsWith('/') ? item.img : `https://picsum.photos/seed/ibcd-gal-${item.img}/800/1000`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
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
          <h2 className="text-4xl font-serif italic mb-16">Próximos Eventos</h2>

          {loadingEvents && (
            <div className="bg-white border border-slate-200 h-40 flex items-center justify-center text-slate-300 text-sm">
              Cargando eventos…
            </div>
          )}

          {!loadingEvents && (!events || events.length === 0) && (
            <p className="text-slate-400 text-sm">No hay eventos próximos.</p>
          )}

          {!loadingEvents && events && events.length > 0 && (
            <div className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
              {events.slice(0, 3).map((evento, i) => (
                <Link
                  key={i}
                  to="/calendario"
                  className="bg-white p-12 hover:bg-slate-50 transition-colors group cursor-pointer outline-none focus-visible:bg-slate-50 block"
                >
                  <p className="text-[10px] uppercase tracking-widest text-ibcd-orange font-bold mb-4">
                    {new Date(evento.gtc_evento_data.start_date + 'T00:00:00').toLocaleDateString('es-AR', { day: '2-digit', month: 'short' }).toUpperCase()}
                  </p>
                  <h4 className="text-2xl font-serif mb-8 group-hover:italic group-hover:text-ibcd-blue transition-all">
                    {evento.title.rendered}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors">
                      {evento.gtc_evento_data.location_name}
                    </span>
                    <ArrowUpRight size={16} className="text-slate-300 group-hover:text-ibcd-blue transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              ))}
            </div>
          )}
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
      <section id="contacto" className="py-32 bg-slate-950 text-white relative overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src="/fondo-visitanos.jpg"
            alt=""
            className="w-full h-full object-cover opacity-45"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-950/60 to-slate-950/40" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif mb-16">Visítanos.</h2>
              <div className="space-y-12">
                <div className="flex gap-12">
                  <div className="group cursor-pointer">
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-4 group-hover:text-ibcd-orange transition-colors">Domingos</p>
                    <p className="text-3xl font-serif group-hover:italic transition-all">10:00 H</p>
                    <p className="text-xs text-white/60 mt-2">Culto de Adoración</p>
                  </div>
                  <div className="group cursor-pointer">
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-4 group-hover:text-ibcd-orange transition-colors">Jueves</p>
                    <p className="text-3xl font-serif group-hover:italic transition-all">19:00 H</p>
                    <p className="text-xs text-white/60 mt-2">Culto de Oración</p>
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
                  <li><a href="#nosotros" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Nosotros</a></li>
                  <li><a href="/liderazgo" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Liderazgo</a></li>
                  <li><a href="/creencias" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Creencias</a></li>
                  <li><a href="/calendario" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Calendario</a></li>
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
