import { Facebook, Instagram, Youtube, ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
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
  const autor = post?.gtc_autor;

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
              {autor && (
              <div className="flex items-center gap-2">
                <User size={16} className="text-slate-400" />
                <span className="font-medium text-slate-900">{autor.nombre}</span>
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
            {autor && (
            <div className="mt-16 p-8 bg-slate-50 border border-slate-100 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              {autor.foto && (
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 bg-slate-200">
                <img 
                  src={autor.foto.url} 
                  alt={autor.foto.alt || autor.nombre} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              )}
              <div>
                <h4 className="text-lg font-serif mb-2">{autor.nombre}</h4>
                {autor.bio && (
                  <div 
                    className="prose prose-sm prose-slate font-light leading-relaxed text-slate-600 mt-2" 
                    dangerouslySetInnerHTML={{ __html: autor.bio }} 
                  />
                )}
              </div>
            </div>
            )}
          </div>
          </>
          )}

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
