import { Facebook, Instagram, Youtube, Play, ArrowUpRight, BookOpen } from 'lucide-react';
import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { getLatestSermons, getActiveSeries } from './lib/api';
import { useFetch } from './lib/hooks';

export default function Sermones() {
  const { data: latestSermons, loading: loadingSermons, error: errorSermons } = useFetch(getLatestSermons);
  const { data: series, loading: loadingSeries } = useFetch(getActiveSeries);

  const featuredSermon = latestSermons?.[0] ?? null;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-ibcd-blue selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-48 pb-32 bg-slate-50 border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-ibcd-orange font-bold mb-6 block">
              Predicación Expositiva
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.95] mb-8">
              La fe viene por el <span className="italic">oír</span>.
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
              Explora nuestro archivo de sermones y series de enseñanza. Creemos en la predicación expositiva que revela el significado original del texto bíblico.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Sermon */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-3xl font-serif italic">Sermón Más Reciente</h2>
          </div>

          {loadingSermons && (
            <p className="text-slate-400 text-sm">Cargando...</p>
          )}
          {errorSermons && (
            <p className="text-slate-400 text-sm">Error al cargar el sermón.</p>
          )}
          {featuredSermon && (
          <a 
            href={`/sermones/${featuredSermon.slug}`}
            className="bg-white border border-slate-100 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all group cursor-pointer block"
          >
            <div className="md:w-1/2 aspect-video bg-slate-900 relative overflow-hidden">
              <img 
                src={featuredSermon.featured_image || "https://picsum.photos/seed/sermon-min/1200/800"} 
                alt={featuredSermon.title} 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all group-hover:bg-ibcd-blue group-hover:border-ibcd-blue outline-none focus-visible:bg-ibcd-blue">
                  <Play size={24} fill="currentColor" className="ml-1" />
                </button>
              </div>
            </div>
            <div className="md:w-1/2 p-12 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.2em] text-ibcd-orange font-bold mb-4 block">Serie: {featuredSermon.sermon_data.series?.[0]?.name ?? 'Sermón'}</span>
              <h3 className="text-3xl font-serif mb-6 leading-tight group-hover:text-ibcd-blue transition-colors">{featuredSermon.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {featuredSermon.sermon_data.summary}
              </p>
              <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                <span>{featuredSermon.sermon_data.date_label}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span>{featuredSermon.sermon_data.preachers?.[0]?.name}</span>
              </div>
            </div>
          </a>
          )}
        </div>
      </section>

      {/* Series Grid */}
      <section className="py-32 bg-slate-50">
        <div className="container-custom">
          <h2 className="text-4xl font-serif mb-16">Series de Sermones</h2>
          
          {loadingSeries && (
            <p className="text-slate-400 text-sm">Cargando series...</p>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {series?.map((item) => (
              <a 
                key={item.id} 
                href={`/series/${item.slug}`}
                className="bg-white border border-slate-100 overflow-hidden group hover:border-ibcd-blue/30 transition-colors flex flex-col"
              >
                <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                  <img 
                    src={item.series_data?.image_url || `https://picsum.photos/seed/${item.slug}/800/500`} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {item.series_data?.state === 'en_curso' && (
                    <div className="absolute top-4 right-4 bg-ibcd-orange text-white text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-sm shadow-sm">
                      Serie Actual
                    </div>
                  )}
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-serif mb-3 group-hover:text-ibcd-blue transition-colors">{item.name}</h3>
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                    <span className="text-xs text-slate-400 flex items-center gap-2">
                      <BookOpen size={14} />
                      {item.count} Sermones
                    </span>
                    <ArrowUpRight size={16} className="text-slate-300 group-hover:text-ibcd-blue transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
