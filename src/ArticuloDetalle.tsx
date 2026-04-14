import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Facebook, Instagram, Youtube, ChevronDown, ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Logo } from './components/Logo';
import { getPostBySlug } from './lib/api';
import { useFetch } from './lib/hooks';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export default function ArticuloDetalle() {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, loading, error } = useFetch(
    () => getPostBySlug(slug!),
    [slug]
  );

  const img = post?._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const author = post?._embedded?.['author']?.[0]?.name;
  const category = post?._embedded?.['wp:term']?.[0]?.find(t => t.taxonomy === 'category')?.name;
  const date = post ? new Date(post.date).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' }) : '';

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

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-2xl font-serif mb-4">Artículo no encontrado</h2>
        <p className="text-slate-500 mb-8">El artículo que buscas no existe o ha sido movido.</p>
        <Link to="/articulos" className="text-sm font-bold uppercase tracking-widest text-ibcd-blue hover:underline">Volver a artículos</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-ibcd-blue selection:text-white">
      <Navbar />

      {/* Main Content */}
      <main className="pt-32 pb-32">
        <div className="container-custom">
          
          {/* Breadcrumbs */}
          <div className="mb-8 flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-slate-400">
            <Link to="/articulos" className="hover:text-ibcd-blue transition-colors flex items-center gap-1">
              <ArrowLeft size={14} /> Artículos
            </Link>
            {category && (
              <>
                <span>/</span>
                <span className="text-slate-500">{category}</span>
              </>
            )}
          </div>

          {/* Article Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            {category && (
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-900 text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded-sm mb-8">
                <Tag size={12} className="text-ibcd-orange" /> {category}
              </div>
            )}
            <h1 
              className="text-4xl md:text-6xl font-serif leading-tight mb-8"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            
            <div className="flex flex-wrap items-center justify-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-slate-300" />
                <span>{date}</span>
              </div>
              {author && (
                <div className="flex items-center gap-2">
                  <User size={14} className="text-slate-300" />
                  <span>{author}</span>
                </div>
              )}
            </div>
          </div>

          {/* Featured Image */}
          {img && (
            <div className="max-w-5xl mx-auto mb-20">
              <div className="aspect-[21/9] bg-slate-100 rounded-sm overflow-hidden">
                <img src={img} alt={post.title.rendered} className="w-full h-full object-cover" />
              </div>
            </div>
          )}

          {/* Article Content */}
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-slate prose-lg max-w-none 
                prose-headings:font-serif prose-headings:font-normal prose-headings:text-slate-900
                prose-p:text-slate-500 prose-p:font-light prose-p:leading-relaxed
                prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:text-slate-700 prose-blockquote:border-ibcd-blue
                prose-strong:text-slate-900 prose-strong:font-bold prose-a:text-ibcd-blue prose-a:no-underline hover:prose-a:underline
              "
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />

            {/* Sharing / Actions */}
            <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-slate-900 hover:text-ibcd-blue transition-colors px-6 py-3 border border-slate-200 rounded-full">
                  <Share2 size={14} /> Compartir
                </button>
              </div>
              <div className="flex gap-4 text-slate-400">
                <a href="#" className="hover:text-ibcd-blue transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-ibcd-blue transition-colors"><Youtube size={20} /></a>
                <a href="#" className="hover:text-ibcd-blue transition-colors"><Facebook size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Related Posts CTA */}
      <section className="py-24 bg-slate-950 text-white text-center">
        <div className="container-custom">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-8">Continuar leyendo</p>
          <Link to="/articulos" className="text-4xl md:text-5xl font-serif italic hover:text-ibcd-orange transition-all duration-500">
            Explora más recursos & artículos
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
