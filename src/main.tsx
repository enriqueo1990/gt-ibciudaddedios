import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Creencias from './Creencias.tsx';
import Liderazgo from './Liderazgo.tsx';
import Eventos from './Eventos.tsx';
import Visitanos from './Visitanos.tsx';
import Sermones from './Sermones.tsx';
import SermonDetalle from './SermonDetalle.tsx';
import SerieDetalle from './SerieDetalle.tsx';
import Articulos from './Articulos.tsx';
import ArticuloDetalle from './ArticuloDetalle.tsx';
import { ScrollToTop } from './components/ScrollToTop.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/creencias" element={<Creencias />} />
        <Route path="/liderazgo" element={<Liderazgo />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/visitanos" element={<Visitanos />} />
        <Route path="/sermones" element={<Sermones />} />
        <Route path="/sermones/:slug" element={<SermonDetalle />} />
        <Route path="/series/:slug" element={<SerieDetalle />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/articulos/:slug" element={<ArticuloDetalle />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
