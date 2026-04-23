import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Link2 as LinkIcon, Share2 } from 'lucide-react';
import { getSermonBySlug, getSeriesWithSermons, getPreacherBySlug } from './lib/api';
import { useFetch } from './lib/hooks';
import { AudioPlayer } from './components/AudioPlayer';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function extractYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  return match ? match[1] : null;
}

function processNotes(html: string): string {
  let processed = html.replace(/<span class="ytwMarkdownDivTimestamp"[^>]*>[^<]*<\/span>/g, '');
  processed = processed.replace(/\r\n/g, '\n');
  const blocks = processed.split(/\n\n+/);
  processed = blocks.map(block => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    if (/^<(h[1-6]|ul|ol|li|blockquote|div|table|hr|p|figure)/i.test(trimmed)) {
      return trimmed;
    }
    return `<p>${trimmed}</p>`;
  }).join('\n');
  return processed;
}

export default function SermonDetalle() {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);
  const [notesExpanded, setNotesExpanded] = useState(false);

  const { data: sermon, loading, error } = useFetch(
    () => getSermonBySlug(slug!),
    [slug]
  );

  // Calcular series/slug para el segundo fetch
  const seriesSlug = sermon?.sermon_data?.series?.[0]?.slug ?? null;

  const { data: seriesData } = useFetch(
    () => seriesSlug ? getSeriesWithSermons(seriesSlug) : Promise.resolve(null),
    [seriesSlug]
  );

  // Fetch datos extendidos del predicador (bio, cargo, foto)
  const preacherSlug = sermon?.sermon_data?.preachers?.[0]?.slug ?? null;
  const { data: preacherData } = useFetch(
    () => preacherSlug ? getPreacherBySlug(preacherSlug) : Promise.resolve(null),
    [preacherSlug]
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

  // Navegación anterior/siguiente dentro de la serie
  const sermonsList = seriesData?.sermons ?? [];
  const currentIndex = sermonsList.findIndex((s) => s.slug === slug);
  const prevSermon = currentIndex > 0 ? sermonsList[currentIndex - 1] : null;
  const nextSermon = currentIndex !== -1 && currentIndex < sermonsList.length - 1 ? sermonsList[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-ibcd-blue selection:text-white">
      <Navbar />

      <main className="pt-24 pb-16">

        <div className="container-custom">
          <div className="max-w-3xl mx-auto">

            {/* Hero: Video o Imagen */}
            <div className="mb-8 rounded-lg overflow-hidden bg-slate-950 isolate">
              {ytId ? (
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${ytId}`}
                    title={sermon.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="aspect-video relative">
                  <img
                    src={sermon.featured_image || '/portada.jpg'}
                    alt={sermon.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>
              )}
            </div>

            {/* Breadcrumb */}
            <div className="mb-6 flex items-center text-xs text-slate-500 font-medium">
              <Link to="/sermones" className="hover:text-ibcd-blue transition-colors flex items-center gap-1">
                <ArrowLeft size={14} /> Sermones
              </Link>
              {series && (
                <>
                  <span className="px-2">&middot;</span>
                  <Link to={`/series/${series.slug}`} className="hover:text-ibcd-blue hover:underline transition-all">{series.name}</Link>
                </>
              )}
            </div>

            {/* Título y metadata */}
            <h1 className="text-3xl md:text-4xl font-serif leading-tight mb-3">
              {sermon.title}
            </h1>
            <p className="text-slate-600 text-base leading-relaxed mb-5">
              {sd.hook}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-neutral-700 mb-8">
              {preacher && <span>{preacher}</span>}
              {preacher && <span className="w-1 h-1 rounded-full bg-slate-400" />}
              <span>{sd.date_label}</span>
              <span className="w-1 h-1 rounded-full bg-slate-400" />
              <span>{sd.passage}</span>
              {series && (
                <>
                  <span className="w-1 h-1 rounded-full bg-slate-400" />
                  <Link to={`/series/${series.slug}`} className="hover:text-ibcd-blue transition-colors">
                    Serie: {series.name}
                  </Link>
                </>
              )}
            </div>

            {/* Audio Player */}
            {sd.media.audio && (
              <div className="mb-12 md:mb-16">
                <AudioPlayer
                  src={sd.media.audio}
                  title={sermon.title}
                  preacher={preacher}
                />
              </div>
            )}

          </div>
        </div>

        {sd.computed?.has_notes && sd.notes && (
          <section className="bg-[#FAF8F3] w-full py-16 md:py-20 mb-12">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto">

                {/* Contenedor colapsable */}
                <div className="relative">
                  <div
                    id="sermon-notes-body"
                    style={{
                      maxHeight: notesExpanded ? '9999px' : '15rem',
                      overflow: 'hidden',
                      transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1)',
                    }}
                  >
                    <div
                      className="prose prose-lg max-w-none font-serif leading-loose prose-headings:font-serif prose-headings:text-slate-900 prose-h1:text-2xl prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-p:text-slate-700 prose-p:mb-4 prose-strong:text-slate-800 prose-em:text-slate-700 prose-ul:text-slate-700 prose-ol:text-slate-700 prose-li:mb-1 prose-blockquote:border-ibcd-blue prose-blockquote:text-slate-600 prose-blockquote:italic"
                      dangerouslySetInnerHTML={{ __html: processNotes(sd.notes as string) }}
                    />
                  </div>

                  {/* Fade inferior — solo visible cuando está colapsado */}
                  {!notesExpanded && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
                      style={{ background: 'linear-gradient(to bottom, transparent, #FAF8F3)' }}
                    />
                  )}
                </div>

                {/* Botón secundario debajo del contenido */}
                <button
                  onClick={() => setNotesExpanded(v => !v)}
                  aria-expanded={notesExpanded}
                  aria-controls="sermon-notes-body"
                  className="mt-6 text-xs font-medium text-slate-500 hover:text-ibcd-blue transition-colors uppercase tracking-widest"
                >
                  {notesExpanded ? '↑ Ocultar notas' : 'Ver notas completas ↓'}
                </button>
              </div>
            </div>
          </section>
        )}

        <div className="container-custom">
          <div className="max-w-3xl mx-auto">

            {/* Acciones */}
            <div className="mb-12 pb-12 pt-6">
              {/* Descargas */}
              {((sd.media as any).pdf || (sd.media as any).ppt || (sd.media as any).word) && (
                <div className="mb-10">
                  <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">Descargar</p>
                  <div className="flex flex-wrap gap-3">
                    {(sd.media as any).pdf && (
                      <a href={(sd.media as any).pdf} download target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2 border border-slate-300 text-sm font-medium text-slate-700 rounded-full hover:border-ibcd-blue hover:text-ibcd-blue transition-colors">
                        <Download size={14} /> PDF
                      </a>
                    )}
                    {(sd.media as any).ppt && (
                      <a href={(sd.media as any).ppt} download target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2 border border-slate-300 text-sm font-medium text-slate-700 rounded-full hover:border-ibcd-blue hover:text-ibcd-blue transition-colors">
                        <Download size={14} /> Presentación
                      </a>
                    )}
                    {(sd.media as any).word && (
                      <a href={(sd.media as any).word} download target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2 border border-slate-300 text-sm font-medium text-slate-700 rounded-full hover:border-ibcd-blue hover:text-ibcd-blue transition-colors">
                        <Download size={14} /> Word
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Compartir */}
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">Compartir</p>
                <div className="flex flex-wrap gap-3">
                  {'share' in navigator && (
                    <button
                      onClick={() => navigator.share({
                        title: sermon.title,
                        text: sd.hook || sermon.title,
                        url: window.location.href,
                      })}
                      className="inline-flex items-center gap-2 px-5 py-2 border border-slate-300 text-sm text-slate-700 rounded-full hover:border-ibcd-blue hover:text-ibcd-blue transition-colors">
                      <Share2 size={14} /> Compartir
                    </button>
                  )}
                  <a href={`https://wa.me/?text=${encodeURIComponent(sermon.title + ' — ' + window.location.href)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 border border-slate-300 text-sm text-slate-700 rounded-full hover:border-ibcd-blue hover:text-ibcd-blue transition-colors">
                    WhatsApp
                  </a>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 border border-slate-300 text-sm text-slate-700 rounded-full hover:border-ibcd-blue hover:text-ibcd-blue transition-colors">
                    Facebook
                  </a>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2 border border-slate-300 text-sm text-slate-700 rounded-full hover:border-ibcd-blue hover:text-ibcd-blue transition-colors">
                    <LinkIcon size={14} /> {copied ? '¡Copiado!' : 'Copiar enlace'}
                  </button>
                </div>
              </div>
            </div>

            {/* Predicador */}
            {preacher && (
              <div className="py-12 border-t border-slate-200">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-24 h-24 sm:w-[120px] sm:h-[120px] rounded-full overflow-hidden shrink-0 bg-slate-200">
                    <img
                      src={preacherData?.preacher_data?.image_url || `/${sd.preachers?.[0]?.slug || 'default'}.jpg`}
                      alt={preacher}
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).src = '/portada.jpg'; }}
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Predicador</p>
                    <p className="text-2xl font-serif text-slate-900 mb-2">{preacher}</p>
                    {(preacherData?.preacher_data?.role || preacherData?.preacher_data?.short_bio) && (
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        {[preacherData.preacher_data.role, preacherData.preacher_data.short_bio]
                          .filter(Boolean).join(' · ')}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Navegación anterior/siguiente */}
            {(prevSermon || nextSermon) && (
              <div className="border-t border-slate-200">
                <div className="grid grid-cols-2">
                  {prevSermon ? (
                    <Link to={`/sermones/${prevSermon.slug}`} className="group py-10 pr-8 border-r border-slate-200">
                      <p className="text-xs uppercase tracking-widest text-slate-400 mb-3 group-hover:text-ibcd-blue transition-colors">← Sermón anterior</p>
                      <p className="text-xl font-serif text-slate-900 group-hover:text-ibcd-blue transition-colors leading-snug">{prevSermon.title}</p>
                    </Link>
                  ) : (
                    <div className="py-10 pr-8 border-r border-slate-200">
                      <p className="text-xs uppercase tracking-widest text-slate-300 mb-3">← Sermón anterior</p>
                      <p className="text-xl font-serif text-slate-400 leading-snug">Primer sermón de la serie</p>
                    </div>
                  )}
                  {nextSermon ? (
                    <Link to={`/sermones/${nextSermon.slug}`} className="group py-10 pl-8 text-right">
                      <p className="text-xs uppercase tracking-widest text-slate-400 mb-3 group-hover:text-ibcd-blue transition-colors">Siguiente sermón →</p>
                      <p className="text-xl font-serif text-slate-900 group-hover:text-ibcd-blue transition-colors leading-snug">{nextSermon.title}</p>
                    </Link>
                  ) : <div />}
                </div>
              </div>
            )}

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
