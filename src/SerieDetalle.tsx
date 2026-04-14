import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Calendar, User, Bookmark, 
  Play, ChevronDown, List, Hash,
  Menu, X, Facebook, Instagram, Youtube
} from 'lucide-react';
import { Logo } from './components/Logo';
import { getSeriesWithSermons } from './lib/api';
import { useFetch } from './lib/hooks';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export default function SerieDetalle() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { slug } = useParams<{ slug: string }>();

  // Usamos el endpoint unificado: { series, sermons }
  const { data, loading, error } = useFetch(
    () => getSeriesWithSermons(slug!),
    [slug]
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-12 w-64 bg-slate-100 rounded" />
          <div className="h-4 w-48 bg-slate-100 rounded" />
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-serif mb-4 text-slate-900">Serie no encontrada</h2>
        <Link to="/sermones" className="text-sm font-bold uppercase tracking-widest text-ibcd-blue hover:underline">Volver al archivo</Link>
      </div>
    );
  }

  const { series, sermons } = data;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-ibcd-blue selection:text-white">
      <Navbar />

      <main className="pt-32 pb-32">
        <div className="container-custom">
          
          {/* Breadcrumbs */}
          <div className="mb-px flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-slate-400">
            <Link to="/sermones" className="hover:text-ibcd-blue transition-colors flex items-center gap-1">
              <ArrowLeft size={14} /> Archivo
            </Link>
            <span>/</span>
            <span className="text-slate-500">Series</span>
          </div>

          {/* Series Hero Section */}
          <div className="flex flex-col lg:flex-row gap-16 lg:items-center mb-24 py-12">
            <div className="lg:w-1/3">
              <div className="aspect-square bg-slate-100 rounded-sm overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  src={series.series_data?.image_url || "https://picsum.photos/seed/series/800/800"} 
                  alt={series.name} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="flex items-center gap-2 text-ibcd-orange font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
                <Hash size={14} /> Serie Expositiva
              </div>
              <h1 className="text-5xl md:text-8xl font-serif leading-[0.95] mb-8">
                {series.name}
              </h1>
              <p className="text-slate-500 text-xl font-light leading-relaxed max-w-2xl mb-12">
                Explora cada mensaje de esta serie. Nuestro objetivo es recorrer el texto bíblico verso a verso para extraer su riqueza teológica y práctica.
              </p>
              <div className="flex gap-12 text-[11px] uppercase tracking-widest font-bold text-slate-400 border-t border-slate-100 pt-8">
                <div>
                  <span className="block text-slate-300 mb-1">Total Mensajes</span>
                  <span className="text-slate-900">{sermons.length}</span>
                </div>
                <div>
                  <span className="block text-slate-300 mb-1">Predicador</span>
                  <span className="text-slate-900">{sermons[0]?.sermon_data.preachers?.[0]?.name || "Varios"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sermons List - Minimal Editorial Table */}
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-10 pb-6 border-b border-slate-200">
              <List size={20} className="text-ibcd-blue" />
              <h2 className="text-2xl font-serif italic text-slate-900">Mensajes de la serie</h2>
            </div>

            <div className="flex flex-col">
              {sermons.map((sermon, idx) => (
                <Link 
                  key={sermon.id} 
                  to={`/sermones/${sermon.slug}`} 
                  className="group py-8 flex flex-col md:flex-row md:items-center gap-8 md:gap-16 border-b border-slate-100 hover:bg-slate-50/50 transition-all px-4 -mx-4 rounded-sm"
                >
                  <div className="md:w-16 flex-shrink-0 text-3xl font-serif text-slate-200 group-hover:text-ibcd-blue/30 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">
                       <span>{sermon.sermon_data.date_label}</span>
                       <span className="w-1 h-1 bg-slate-200 rounded-full" />
                       <span className="text-ibcd-orange">{sermon.sermon_data.passage}</span>
                    </div>
                    <h3 className="text-2xl font-serif text-slate-900 group-hover:text-ibcd-blue transition-colors leading-tight">
                      {sermon.title}
                    </h3>
                  </div>

                  <div className="md:w-48 flex-shrink-0 text-sm text-slate-400 font-light italic">
                    {sermon.sermon_data.preachers?.[0]?.name}
                  </div>

                  <div className="md:w-12 flex justify-end">
                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-ibcd-blue group-hover:border-ibcd-blue transition-all">
                      <Play size={14} className="text-slate-400 group-hover:text-white fill-current group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {sermons.length === 0 && (
              <div className="py-20 text-center text-slate-400">
                Aún no hay sermones cargados en esta serie.
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
