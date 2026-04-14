import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Facebook, Instagram, Youtube, ChevronDown, ArrowUpRight, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './components/Logo';
import { getPosts } from './lib/api';
import { useFetch } from './lib/hooks';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export default function Articulos() {
  const { data: posts, loading, error } = useFetch(getPosts);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-ibcd-blue selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-24 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-ibcd-orange font-bold mb-6 block">Recursos</span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.95] mb-8">
              Artículos & <span className="italic">Reflexiones.</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
              Explora nuestra colección de escritos sobre teología, vida cristiana y la eclesiología, 
              diseñados para equipar a los santos para la obra del ministerio.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 animate-pulse">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex flex-col gap-6">
                  <div className="aspect-video bg-slate-100 rounded-sm" />
                  <div className="h-4 w-24 bg-slate-100 rounded" />
                  <div className="h-8 w-full bg-slate-100 rounded" />
                  <div className="h-20 w-full bg-slate-100 rounded" />
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-slate-400">Hubo un error al cargar los artículos. Por favor, intenta de nuevo más tarde.</p>
            </div>
          )}

          {!loading && !error && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {posts?.map((post) => {
                const img = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                const author = post._embedded?.['author']?.[0]?.name;
                const category = post._embedded?.['wp:term']?.[0]?.find(t => t.taxonomy === 'category')?.name;
                const date = new Date(post.date).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });

                return (
                  <Link 
                    key={post.id} 
                    to={`/articulos/${post.slug}`}
                    className="group flex flex-col h-full focus-visible:outline-none"
                  >
                    <div className="aspect-video bg-slate-100 mb-8 overflow-hidden rounded-sm relative">
                      {img ? (
                        <img 
                          src={img} 
                          alt={post.title.rendered} 
                          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-200 uppercase tracking-widest text-[10px] font-bold">Sin imagen</div>
                      )}
                      {category && (
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[9px] uppercase tracking-widest font-bold text-slate-900 shadow-sm">
                          {category}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-4">
                        <span className="flex items-center gap-1.5"><Calendar size={12} /> {date}</span>
                        {author && <span className="flex items-center gap-1.5"><User size={12} /> {author}</span>}
                      </div>
                      
                      <h3 className="text-2xl font-serif mb-4 group-hover:text-ibcd-blue transition-colors leading-tight" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                      
                      <div 
                        className="text-slate-500 font-light leading-relaxed mb-8 flex-grow line-clamp-3 text-sm"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />
                      
                      <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-slate-900 group-hover:text-ibcd-blue transition-colors">Leer más</span>
                        <ArrowUpRight size={16} className="text-slate-300 group-hover:text-ibcd-blue transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-serif mb-6 italic">Mantente conectado</h2>
            <p className="text-slate-500 mb-10 font-light">Suscríbete para recibir los últimos artículos y recursos directamente en tu correo.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="flex-grow px-6 py-4 bg-white border border-slate-200 text-sm focus:outline-none focus:border-ibcd-blue transition-colors rounded-sm"
                required
              />
              <button 
                type="submit" 
                className="bg-slate-900 text-white px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-ibcd-blue transition-colors rounded-sm"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
