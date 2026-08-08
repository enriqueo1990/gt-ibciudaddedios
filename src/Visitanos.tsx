import { MapPin, Clock, Music, Baby, BookOpen, HeartHandshake } from 'lucide-react';
import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Link } from 'react-router-dom';

export default function Visitanos() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-ibcd-blue selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-48 pb-32 bg-slate-50 border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-ibcd-orange font-bold mb-6 block">
              Planificá tu visita
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.95] mb-8">
              Nos encantaría <span className="italic">conocerte.</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
              Ya sea que estés buscando una iglesia local o simplemente quieras saber más acerca de Jesús,
              te esperamos este domingo.
            </p>
          </div>
        </div>
      </section>

      {/* Horarios y Ubicación */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Info */}
            <div>
              <h2 className="text-4xl font-serif mb-12">Horarios y Ubicación</h2>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center flex-shrink-0 text-ibcd-blue">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2">Cronograma de actividades</h3>
                    <p className="text-slate-500 font-light mb-4">
                      Nuestras reuniones principales son el culto dominical y la reunión de oración.
                      Además, los sábados tenemos actividades para niños, adolescentes y jóvenes.
                      Para otras actividades, ver el{' '}
                      <Link to="/calendario" className="text-ibcd-blue hover:text-slate-900 transition-colors underline underline-offset-4 outline-none focus-visible:text-slate-900">calendario</Link>.
                      ¡Te esperamos!
                    </p>
                    <div className="text-slate-500 font-light space-y-1">
                      <p><strong className="font-medium text-slate-700">Domingos 10:00 h:</strong> Culto Dominical.</p>
                      <p><strong className="font-medium text-slate-700">Jueves 19:00 h:</strong> Reunión de oración.</p>
                      <p><strong className="font-medium text-slate-700">Sábados 10:00 h:</strong> Escuela bíblica para niños.</p>
                      <p><strong className="font-medium text-slate-700">Sábados 19:00 h:</strong> Reunión de jóvenes y adolescentes.</p>
                      <p><strong className="font-medium text-slate-700">Último domingo del mes 19:00 h:</strong> Reunión Evangelística.</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center flex-shrink-0 text-ibcd-blue">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2">Dirección</h3>
                    <p className="text-slate-500 font-light mb-4">
                      San Martín 2650, P.B.<br />
                      Rosario, Santa Fe, Argentina
                    </p>
                    <a
                      href="https://maps.app.goo.gl/1a1gK4b1tDg2i2bD9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-widest font-bold text-ibcd-blue hover:text-slate-900 transition-colors"
                    >
                      Abrir en Google Maps
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Map */}
            <div className="aspect-square md:aspect-[4/5] bg-slate-100 rounded-sm overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps?q=San+Mart%C3%ADn+2650%2C+Rosario%2C+Santa+Fe%2C+Argentina&output=embed&hl=es"
                className="w-full h-full border-0"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación de la iglesia"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* Qué Esperar */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Qué esperar</h2>
            <p className="text-slate-500 text-lg font-light">
              Te contamos un poco sobre cómo son nuestras reuniones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white p-8 border border-slate-100 hover:border-ibcd-blue/30 transition-colors group">
              <Music className="text-slate-300 group-hover:text-ibcd-orange transition-colors mb-6" size={32} />
              <h3 className="text-xl font-serif mb-3">Alabanza</h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                Cantamos una mezcla de himnos históricos y cánticos contemporáneos, priorizando siempre que la letra sea bíblica, clara y exalte a Cristo.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-100 hover:border-ibcd-blue/30 transition-colors group">
              <BookOpen className="text-slate-300 group-hover:text-ibcd-orange transition-colors mb-6" size={32} />
              <h3 className="text-xl font-serif mb-3">Predicación</h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                Nuestra predicación es expositiva. Esto significa que enseñamos la Biblia buscando entender el significado original del texto en el contexto en el que aparece. Cada sermón va acompañado de una lectura del texto.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-100 hover:border-ibcd-blue/30 transition-colors group">
              <HeartHandshake className="text-slate-300 group-hover:text-ibcd-orange transition-colors mb-6" size={32} />
              <h3 className="text-xl font-serif mb-3">Oración</h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                Nuestros cultos tienen diferentes espacios para adorar a Dios, confesar nuestros pecados e interceder por las necesidades de la iglesia y el mundo.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-100 hover:border-ibcd-blue/30 transition-colors group">
              <Baby className="text-slate-300 group-hover:text-ibcd-orange transition-colors mb-6" size={32} />
              <h3 className="text-xl font-serif mb-3">Niños</h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                Nos encanta tener a los niños durante todo el culto y poder compartir la adoración a Dios con ellos. ¡Todos son bienvenidos! Contamos con un espacio tranquilo para amamantar, dormir y cambiar al niño.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
