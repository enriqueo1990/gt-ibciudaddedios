import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Calendar, User, Bookmark, Share2, 
  Download, Play, FastForward, Rewind, Volume2, Pause, ChevronDown, 
  Menu, X, Facebook, Instagram, Youtube, Hash
} from 'lucide-react';
import { Logo } from './components/Logo';
import { getSermonBySlug } from './lib/api';
import { useFetch } from './lib/hooks';
import { AudioPlayer } from './components/AudioPlayer';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export default function SermonDetalle() {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: sermon, loading, error } = useFetch(
    () => getSermonBySlug(slug!),
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

  if (error || !sermon) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-serif mb-4 text-slate-900">Sermón no encontrado</h2>
        <Link to="/sermones" className="text-sm font-bold uppercase tracking-widest text-ibcd-blue hover:underline">Volver al archivo</Link>
      </div>
    );
  }

  const sd = sermon.sermon_data;
  const preacher = sd.preachers?.[0]?.name;
  const series = sd.series?.[0];

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
            {series && (
              <>
                <span>/</span>
                <Link to={`/series/${series.slug}`} className="hover:text-ibcd-blue transition-colors">{series.name}</Link>
              </>
            )}
          </div>

          {/* Header Layout: Text + Metadata */}
          <div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-16">
            <div className="lg:w-2/3">
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8">
                {sermon.title}
              </h1>
              <div className="flex flex-wrap gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-slate-300" />
                  <span>{sd.date_label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={14} className="text-slate-300" />
                  <span>{preacher}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bookmark size={14} className="text-slate-300" />
                  <span>Pasaje: {sd.passage}</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 flex lg:justify-end gap-4">
              <button className="p-4 rounded-full border border-slate-200 hover:border-ibcd-blue hover:bg-ibcd-blue/5 transition-all text-slate-400 hover:text-ibcd-blue">
                <Share2 size={18} />
              </button>
              {sd.media.audio && (
                <a 
                  href={sd.media.audio} 
                  download 
                  className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full text-xs uppercase tracking-widest font-bold hover:bg-ibcd-blue transition-colors"
                >
                  <Download size={16} /> Descargar Audio
                </a>
              )}
            </div>
          </div>

          {/* Video Player */}
          {sd.media.video_youtube && (
            <div className="mb-16 aspect-video bg-slate-950 rounded-sm overflow-hidden shadow-2xl relative group">
              <iframe
                src={`https://www.youtube.com/embed/${sd.media.video_youtube}`}
                title={sermon.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {/* Audio Player Component */}
          {sd.media.audio && (
            <div className="mb-20 max-w-4xl mx-auto">
              <AudioPlayer 
                src={sd.media.audio} 
                title={sermon.title}
                preacher={preacher}
              />
            </div>
          )}

          {/* Sermon Info Grid */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-16">
            <div className="md:col-span-8">
              <h3 className="text-2xl font-serif mb-6 text-slate-900 uppercase tracking-tight">Sobre este mensaje</h3>
              <p className="text-slate-500 text-lg leading-relaxed font-light mb-12">
                {sd.summary}
              </p>
              
              <div className="bg-slate-50 p-10 rounded-sm border-l-4 border-ibcd-blue">
                <p className="text-[10px] uppercase tracking-widest font-bold text-ibcd-blue mb-4">Idea Central</p>
                <p className="text-xl font-serif italic text-slate-700 leading-relaxed">
                  "{sd.hook}"
                </p>
              </div>
            </div>

            <div className="md:col-span-4 space-y-12">
              {series && (
                <div className="p-8 bg-slate-50 rounded-sm border border-slate-100">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-6">Perteneciente a:</p>
                  <Link to={`/series/${series.slug}`} className="group block">
                    <div className="w-full aspect-square bg-slate-900 flex items-center justify-center mb-4 rounded-sm group-hover:bg-ibcd-blue transition-all">
                       <Hash className="text-white opacity-20 group-hover:opacity-40" size={64} />
                    </div>
                    <h4 className="font-serif text-xl group-hover:text-ibcd-blue transition-colors leading-tight">{series.name}</h4>
                    <p className="text-xs text-slate-400 mt-2">Ver todos los sermones de la serie</p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer CTA */}
      <section className="py-24 bg-slate-950 text-white text-center">
        <div className="container-custom">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-8">Continuar escuchando</p>
          <Link to="/sermones" className="text-4xl md:text-5xl font-serif italic hover:text-ibcd-orange transition-all duration-500">
            Explora el archivo completo
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
