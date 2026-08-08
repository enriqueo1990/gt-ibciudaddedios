import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export default function Liderazgo() {

  const pastores = [
    { 
      name: "Cristian Palomares", 
      title: "Pastor", 
      bio: "Con veinte años de trayectoria en el ministerio pastoral, Cristian preside ABRA e integra el consejo de Ante Su Palabra. Posee un bachiller en Teología y Ministerio Pastoral del SBF y una diplomatura en Consejería Bíblica del Seminario Bíblico William Carey, institución donde hoy realiza una Maestría en Estudios Teológicos. Está casado con Miriam y tiene tres hijos.",
      img: "/cristian-palomares.jpg" 
    },
    { 
      name: "Samuel Correa Da Silva", 
      title: "Pastor", 
      bio: "Originario de Paraná, Entre Ríos, Samuel se desempeña como pastor en IBCD desde hace siete años. Se encuentra ampliando su formación teológica en IDEAR. Está casado con Daniela, con quien tiene tres hijos.",
      img: "/samuel-correa.jpg" 
    }
  ];

  const lideres = [
    { name: "Esteban Ruiz", img: "leader-1" },
    { name: "Laura Gómez", img: "leader-2" },
    { name: "Carlos Mendoza", img: "leader-3" },
    { name: "Sofía Castro", img: "leader-4" },
    { name: "Andrés Navarro", img: "leader-5" },
    { name: "Elena Vargas", img: "leader-6" },
    { name: "Martín Rojas", img: "leader-7" },
    { name: "Valeria Pinto", img: "leader-8" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-ibcd-blue selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-48 pb-32 bg-slate-50 border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-ibcd-orange font-bold mb-6 block">
              Gobierno
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.95] mb-8">
              <span className="italic">Pastores.</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
              IBCD cree en la pluralidad de ancianos y en la responsabilidad de todos los miembros
              de participar en la vida y las decisiones de la iglesia.
            </p>
          </div>
        </div>
      </section>

      {/* Pastores Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {pastores.map((pastor, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-slate-100 mb-8 overflow-hidden rounded-sm">
                  <img 
                    src={pastor.img} 
                    alt={pastor.name} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-ibcd-orange font-bold mb-3 block">
                  {pastor.title}
                </span>
                <h3 className="text-3xl font-serif mb-4 group-hover:text-ibcd-blue transition-colors">
                  {pastor.name}
                </h3>
                <p className="text-slate-500 font-light leading-relaxed">
                  {pastor.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Líderes de Ministerios Section */}
      <section className="py-32 bg-slate-50 border-t border-slate-100 hidden">
        <div className="container-custom">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Líderes de Ministerios</h2>
            <p className="text-slate-500 text-lg font-light">
              Hermanos que sirven fielmente coordinando las diferentes áreas de servicio en nuestra congregación.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            {lideres.map((lider, i) => (
              <div key={i} className="group cursor-pointer text-center">
                <div className="aspect-square bg-slate-200 mb-6 overflow-hidden rounded-sm mx-auto w-full max-w-[200px]">
                  <img 
                    src={`https://picsum.photos/seed/${lider.img}/400/400`} 
                    alt={lider.name} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-serif group-hover:text-ibcd-blue transition-colors">
                  {lider.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
