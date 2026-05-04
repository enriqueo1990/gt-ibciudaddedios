import { Facebook, Instagram, Youtube, ArrowUpRight, Calendar, User, Tag } from 'lucide-react';
import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';
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
                    <div className="flex flex-col gap-1">
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
