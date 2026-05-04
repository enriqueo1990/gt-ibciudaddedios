import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-white border-t border-slate-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-xs">
            <Link to="/" className="inline-block mb-6 group outline-none focus-visible:ring-2 focus-visible:ring-ibcd-blue rounded-sm">
              <Logo lightText={false} className="h-10 w-auto transition-all duration-500 group-hover:scale-105" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Una iglesia bíblica comprometida con la sana doctrina y la gloria de Dios en Rosario.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold mb-6 text-slate-900">Explorar</p>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="/#nosotros" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Nosotros</a></li>
                <li><Link to="/liderazgo" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Liderazgo</Link></li>
                <li><Link to="/creencias" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Creencias</Link></li>
                <li><Link to="/calendario" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Calendario</Link></li>
                <li><Link to="/sermones" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Sermones</Link></li>
                <li><Link to="/articulos" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Artículos</Link></li>
                <li><Link to="/visitanos" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Visítanos</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold mb-6 text-slate-900">Social</p>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="https://www.instagram.com/ibcdrosario/" target="_blank" rel="noopener noreferrer" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Instagram</a></li>
                <li><a href="https://www.youtube.com/@ibcdrosario" target="_blank" rel="noopener noreferrer" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">YouTube</a></li>
                <li><a href="https://www.facebook.com/ibcdrosario" target="_blank" rel="noopener noreferrer" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-50 text-[10px] text-slate-400 uppercase tracking-widest font-medium">
          <p>© {currentYear} IBCD Rosario</p>
        </div>
      </div>
    </footer>
  );
}
