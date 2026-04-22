import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, Calendar, User, Bookmark, Share2, Download
} from 'lucide-react';
import { getSermonBySlug } from './lib/api';
import { useFetch } from './lib/hooks';
import { AudioPlayer } from './components/AudioPlayer';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function extractYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  return match ? match[1] : null;
}

function processNotes(html: string): string {
  // Remover spans de timestamps de YouTube
  let processed = html.replace(/<span class="ytwMarkdownDivTimestamp"[^>]*>[^<]*<\/span>/g, '');

  // Normalizar saltos de línea
  processed = processed.replace(/\r\n/g, '\n');

  // Separar por bloques (doble salto de línea)
  const blocks = processed.split(/\n\n+/);

  processed = blocks.map(block => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    // Si ya empieza con un tag HTML de bloque, dejarlo tal cual
    if (/^<(h[1-6]|ul|ol|li|blockquote|div|table|hr|p|figure)/i.test(trimmed)) {
      return trimmed;
    }
    // Si no, envolverlo en <p>
    return `<p>${trimmed}</p>`;
  }).join('\n');

  return processed;
}

export default function SermonDetalle() {
  const { slug } = useParams<{ slug: string }>();
  const [notesExpanded, setNotesExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

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
  const ytId = sd.media.video_youtube ? extractYouTubeId(sd.media.video_youtube) : null;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-ibcd-blue selection:text-white">
      <Navbar />

      <main className="pt-28 pb-16">
        <div className="container-custom">

          {/* Breadcrumbs */}
          <div className="mb-8 flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-slate-400">
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
          <div className="flex flex-col lg:flex-row gap-8 lg:items-end mb-10">
            <div className="lg:w-2/3">
              <h1 className="text-4xl md:text-5xl font-serif leading-[1.1] mb-4">
                {sermon.title}
              </h1>
              <p className="text-slate-500 text-base leading-relaxed font-light mb-4">
                {sd.hook}
              </p>
              <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-ibcd-blue/50" />
                  <span>{sd.date_label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={14} className="text-ibcd-blue/50" />
                  <span>{preacher}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bookmark size={14} className="text-ibcd-blue/50" />
                  <span>Pasaje: {sd.passage}</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 flex lg:justify-end gap-4">
              <button className="p-4 rounded-full border border-slate-200 hover:border-ibcd-blue hover:bg-ibcd-blue/5 transition-all text-slate-400 hover:text-ibcd-blue">
                <Share2 size={18} />
              </button>
            </div>
          </div>

          {/* Video Player */}
          {ytId && (
            <div className="mb-8 aspect-video bg-slate-950 rounded-sm overflow-hidden shadow-2xl relative group">
              <iframe
                src={`https://www.youtube.com/embed/${ytId}`}
                title={sermon.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {/* Audio Player Component */}
          {sd.media.audio && (
            <div className="mb-10 max-w-4xl mx-auto">
              <AudioPlayer
                src={sd.media.audio}
                title={sermon.title}
                preacher={preacher}
              />
            </div>
          )}

          {/* Sermon Info Grid */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-10">
            <div className="md:col-span-8">

              {/* Notas del Sermón */}
              {sd.computed?.has_notes && sd.notes && (
                <div className="mt-8">
                  <h3 className="text-lg font-serif mb-4 text-slate-900">Notas del Sermón</h3>
                  <div
                    className={`relative overflow-hidden transition-all duration-500 ${notesExpanded ? 'max-h-[9999px]' : 'max-h-[200px]'
                      }`}
                  >
                    <div
                      className="prose prose-slate prose-lg max-w-none font-light leading-relaxed prose-headings:font-serif prose-headings:text-slate-900 prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:mb-4 prose-strong:text-slate-800 prose-em:text-slate-700 prose-ul:text-slate-600 prose-ol:text-slate-600 prose-li:mb-2 prose-blockquote:border-ibcd-blue prose-blockquote:text-slate-500 prose-blockquote:italic"
                      dangerouslySetInnerHTML={{ __html: processNotes(sd.notes) }}
                    />
                    {!notesExpanded && (
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
                    )}
                  </div>
                  <button
                    onClick={() => setNotesExpanded(!notesExpanded)}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-serif italic text-slate-400 hover:text-slate-700 transition-colors border-b border-slate-200 hover:border-slate-700 pb-px"
                  >
                    {notesExpanded ? 'Ver menos' : 'Ver más'}
                  </button>
                </div>
              )}
            </div>

            <div className="md:col-span-4 space-y-12">
              {series && (
                <div className="p-8 bg-slate-50 rounded-sm border border-slate-100">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-6">Perteneciente a:</p>
                  <Link to={`/series/${series.slug}`} className="group block">
                    <div className="w-full aspect-square bg-slate-900 mb-4 rounded-sm overflow-hidden">
                      <img
                        src={sermon.featured_image || '/portada.jpg'}
                        alt={series.name}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500"
                      />
                    </div>
                    <h4 className="font-serif text-xl group-hover:text-ibcd-blue transition-colors leading-tight">{series.name}</h4>
                    <p className="text-xs text-slate-400 mt-2">Ver todos los sermones de la serie</p>
                  </Link>
                </div>
              )}

              {preacher && (
                <div className="p-8 bg-slate-50 rounded-sm border border-slate-100">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-6">Predicador</p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 bg-slate-200">
                      <img
                        src="/cristian-palomares.jpg"
                        alt={preacher}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg leading-tight">{preacher}</h4>
                      <p className="text-xs text-slate-400 mt-1">Pastor · IBCD Rosario</p>
                    </div>
                  </div>
                </div>
              )}

              {(sd.media.audio || sd.media.pdf || sd.media.ppt || sd.media.word) && (
                <div className="p-8 bg-slate-50 rounded-sm border border-slate-100">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-4">Recursos</p>
                  <div className="flex flex-col gap-2">
                    {sd.media.audio && (
                      <a href={sd.media.audio} download target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:text-ibcd-blue transition-colors">
                        <Download size={14} /> Audio MP3
                      </a>
                    )}
                    {sd.media.pdf && (
                      <a href={sd.media.pdf} download target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:text-ibcd-blue transition-colors">
                        <Download size={14} /> Notas PDF
                      </a>
                    )}
                    {sd.media.ppt && (
                      <a href={sd.media.ppt} download target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:text-ibcd-blue transition-colors">
                        <Download size={14} /> Presentación
                      </a>
                    )}
                    {sd.media.word && (
                      <a href={sd.media.word} download target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:text-ibcd-blue transition-colors">
                        <Download size={14} /> Documento Word
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="p-8 bg-slate-50 rounded-sm border border-slate-100">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-4">Compartir</p>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:text-ibcd-blue transition-colors text-left"
                  >
                    <Share2 size={14} />
                    {copied ? '¡Copiado!' : 'Copiar enlace'}
                  </button>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(sermon.title + ' — ' + window.location.href)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:text-ibcd-blue transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:text-ibcd-blue transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>


      <Footer />
    </div>
  );
}
