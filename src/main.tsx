import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import Creencias from './Creencias.tsx';
import Liderazgo from './Liderazgo.tsx';
import Eventos from './Eventos.tsx';
import Visitanos from './Visitanos.tsx';
import Sermones from './Sermones.tsx';
import SermonDetalle from './SermonDetalle.tsx';
import SerieDetalle from './SerieDetalle.tsx';
import './index.css';

const path = window.location.pathname;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {path === '/creencias' ? <Creencias /> : path === '/liderazgo' ? <Liderazgo /> : path === '/eventos' ? <Eventos /> : path === '/visitanos' ? <Visitanos /> : path === '/sermones' ? <Sermones /> : path === '/sermon' ? <SermonDetalle /> : path === '/serie' ? <SerieDetalle /> : <App />}
  </StrictMode>,
);
