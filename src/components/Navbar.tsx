import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  isHome?: boolean;
}

export function Navbar({ isHome = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const navLinks = [
    { name: 'INICIO', path: '/' },
    { name: 'CALENDARIO', path: '/calendario' },
    { name: 'SERMONES', path: '/sermones' },
    { name: 'ARTÍCULOS', path: '/articulos' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-slate-100' 
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="flex items-center group outline-none focus-visible:ring-2 focus-visible:ring-ibcd-blue rounded-sm">
            <Logo
              lightText={isHome && !isScrolled && !mobileMenuOpen}
              className="h-10 md:h-12 w-auto transition-all duration-500 group-hover:scale-105"
            />
          </Link>

          <div className="hidden md:flex items-center gap-10 lg:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-all hover:text-ibcd-blue focus-visible:text-ibcd-blue outline-none ${
                  isScrolled ? 'text-slate-900' : 'text-white/90'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="relative group">
              <button 
                className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-all hover:text-ibcd-blue focus-visible:text-ibcd-blue outline-none flex items-center gap-1 ${
                  isScrolled ? 'text-slate-900' : 'text-white/90'
                }`}
              >
                NOSOTROS <ChevronDown size={12} />
              </button>
              <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                <div className="bg-white border border-slate-100 shadow-xl py-2 min-w-[180px] flex flex-col rounded-sm">
                  <Link to="/liderazgo" className="px-6 py-3 text-[11px] uppercase tracking-[0.2em] font-medium text-slate-500 hover:text-ibcd-blue hover:bg-slate-50 transition-colors">Liderazgo</Link>
                  <Link to="/creencias" className="px-6 py-3 text-[11px] uppercase tracking-[0.2em] font-medium text-slate-500 hover:text-ibcd-blue hover:bg-slate-50 transition-colors">Creencias</Link>
                </div>
              </div>
            </div>

            <Link
              to="/visitanos"
              className={`text-[11px] uppercase tracking-[0.2em] font-bold px-8 py-3 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ibcd-blue outline-none ${
                isScrolled
                  ? 'bg-slate-900 text-white hover:bg-ibcd-blue'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              VISÍTANOS
            </Link>
          </div>

          <button
            className="md:hidden p-2 outline-none focus-visible:text-ibcd-blue relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={isHome && !isScrolled ? 'text-white' : 'text-slate-900'} />
            ) : (
              <Menu className={isHome && !isScrolled ? 'text-white' : 'text-slate-900'} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-4xl font-serif hover:text-ibcd-blue hover:italic transition-all ${
                  isActive(link.path) ? 'text-ibcd-blue italic' : 'text-slate-900'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex flex-col items-center gap-4">
              <span className="text-4xl font-serif text-slate-900">NOSOTROS</span>
              <Link to="/liderazgo" className="text-xl font-serif text-slate-500 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Liderazgo</Link>
              <Link to="/creencias" className="text-xl font-serif text-slate-500 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Creencias</Link>
            </div>

            <Link to="/visitanos" className="text-4xl font-serif text-slate-900 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>VISÍTANOS</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
