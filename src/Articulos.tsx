import { Facebook, Instagram, Youtube, ArrowUpRight, Calendar, User, Tag } from 'lucide-react';
import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { getPosts } from './lib/api';
import { useFetch } from './lib/hooks';

export default function Articulos() {
  const { data: articles, loading, error } = useFetch(getPosts);

  const featuredArticle = articles?.[0] ?? null;
  const restArticles = articles?.slice(1) ?? [];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-ibcd-blue selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-48 pb-32 bg-slate-50 border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-ibcd-orange font-bold mb-6 block">
              Recursos y Reflexiones
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.95] mb-8">
              Artículos <span className="italic">Pastorales</span>.
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
              Escritos por nuestro equipo pastoral para edificar a la iglesia, profundizar en la teología y aplicar el evangelio a la vida cotidiana.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-3xl font-serif italic">Artículo Destacado</h2>
          </div>

          {loading && <p className="text-slate-400 text-sm">Cargando...</p>}
          {error && <p className="text-slate-400 text-sm">Error al cargar.</p>}
          {featuredArticle && (
          <a 
            href={`/articulos/${featuredArticle.slug}`}
            className="bg-white border border-slate-100 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all group cursor-pointer block"
          >
            <div className="md:w-1/2 aspect-video md:aspect-auto bg-slate-100 relative overflow-hidden">
              <img 
                src={featuredArticle._embedded?.['wp:featuredmedia']?.[0]?.source_url || `https://picsum.photos/seed/featured-article/1200/800`} 
                alt={featuredArticle.title.rendered} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-1/2 p-12 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-serif mb-6 leading-tight group-hover:text-ibcd-blue transition-colors" dangerouslySetInnerHTML={{ __html: featuredArticle.title.rendered }} />
              <p className="text-slate-500 text-base leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: featuredArticle.excerpt.rendered }} />
              <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mt-auto">
                <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(featuredArticle.date).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                {featuredArticle.gtc_autor && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span className="flex items-center gap-2">
                      {featuredArticle.gtc_autor.foto && (
                        <img 
                          src={featuredArticle.gtc_autor.foto.url} 
                          alt={featuredArticle.gtc_autor.foto.alt || featuredArticle.gtc_autor.nombre} 
                          className="w-6 h-6 rounded-full object-cover"
                        />
                      )}
                      <span>{featuredArticle.gtc_autor.nombre}</span>
                    </span>
                  </>
                )}
              </div>
            </div>
          </a>
          )}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-32 bg-slate-50">
        <div className="container-custom">
          <h2 className="text-4xl font-serif mb-16">Últimos Artículos</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restArticles.map((article) => (
              <a 
                key={article.id} 
                href={`/articulos/${article.slug}`}
                className="bg-white border border-slate-100 overflow-hidden group hover:border-ibcd-blue/30 hover:shadow-sm transition-all flex flex-col"
              >
                <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                  <img 
                    src={article._embedded?.['wp:featuredmedia']?.[0]?.source_url || `https://picsum.photos/seed/${article.slug}/800/500`} 
                    alt={article.title.rendered} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-serif mb-4 group-hover:text-ibcd-blue transition-colors leading-snug" dangerouslySetInnerHTML={{ __html: article.title.rendered }} />
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light line-clamp-3" dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }} />
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                    <div className="flex flex-col gap-2">
                      {article.gtc_autor && (
                        <div className="flex items-center gap-2">
                          {article.gtc_autor.foto && (
                            <img 
                              src={article.gtc_autor.foto.url} 
                              alt={article.gtc_autor.foto.alt || article.gtc_autor.nombre} 
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          )}
                          <span className="text-xs font-medium text-slate-600">{article.gtc_autor.nombre}</span>
                        </div>
                      )}
                      <span className="text-[10px] text-slate-400">{new Date(article.date).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
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
