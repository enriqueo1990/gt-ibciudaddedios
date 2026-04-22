import { Facebook, Instagram, Youtube, ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';
import { useParams } from 'react-router-dom';
import { getPostBySlug } from './lib/api';
import { useFetch } from './lib/hooks';

export default function ArticuloDetalle() {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, loading, error } = useFetch(
    () => slug ? getPostBySlug(slug) : Promise.reject(new Error('Sin slug')),
    [slug]
  );

  const featuredImage = post?._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const authorName = post?._embedded?.['author']?.[0]?.name;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-ibcd-blue selection:text-white">
      <Navbar />

      {/* Main Content */}
      <main className="pt-32 pb-32">
        <div className="container-custom">
          
          {/* Breadcrumbs */}
          <div className="mb-8 flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-slate-400">
            <a href="/articulos" className="hover:text-ibcd-blue transition-colors flex items-center gap-1">
              <ArrowLeft size={14} /> Artículos
            </a>
          </div>

          {loading && <p className="text-slate-400 text-sm py-16 text-center">Cargando...</p>}
          {error && <p className="text-slate-400 text-sm py-16 text-center">Error al cargar el artículo.</p>}

          {post && (
          <>
          {/* Article Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-8" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
              {authorName && (
              <div className="flex items-center gap-2">
                <User size={16} className="text-slate-400" />
                <span className="font-medium text-slate-900">{authorName}</span>
              </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-slate-400" />
                <span>{new Date(post.date).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <button className="flex items-center gap-2 hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue ml-4">
                <Share2 size={16} /> <span>Compartir</span>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-[21/9] bg-slate-100 relative rounded-sm overflow-hidden mb-16 max-w-5xl mx-auto">
            <img 
              src={featuredImage || `https://picsum.photos/seed/${slug}/1920/800`} 
              alt={post.title.rendered} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Article Content */}
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-slate prose-lg max-w-none font-light leading-relaxed text-slate-600"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
            
            {/* Author Bio */}
            {authorName && (
            <div className="mt-16 p-8 bg-slate-50 border border-slate-100 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 bg-slate-200">
                <img 
                  src={post._embedded?.['author']?.[0]?.avatar_urls?.['96'] || `https://picsum.photos/seed/author-${post.author}/200/200`} 
                  alt={authorName} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-lg font-serif mb-2">{authorName}</h4>
              </div>
            </div>
            )}
          </div>
          </>
          )}

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
