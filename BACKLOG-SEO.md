# Backlog: SEO + OpenGraph

Plan de implementación de SEO y OpenGraph para `www.ibciudaddedios.com`.

## Contexto técnico

El sitio es una SPA (Vite + React 19) renderizada en cliente. Esto significa que sin trabajo adicional:

- **Google sí indexa** porque ejecuta JavaScript (con delay).
- **WhatsApp, Facebook, LinkedIn, Twitter NO ven contenido** porque no ejecutan JS. Reciben el `index.html` genérico con `<div id="root"></div>` vacío. Los previews compartidos salen sin imagen ni título.

## Estrategia

Combinación de dos capas:

1. **`react-helmet-async`** para meta tags dinámicos del lado cliente (cubre Google).
2. **Pre-rendering en build time** para que los bots de redes sociales reciban HTML completo con metadata real.

Herramienta candidata para pre-render: `vite-plugin-prerender-spa` o `react-snap`. Probar cuál se lleva mejor con React 19 + motion/react.

## Decisiones tomadas

- **Dominio:** `www.ibciudaddedios.com`
- **Imagen OG default:** `/public/og.png` (verificar que sea 1200×630px)
- **OG dinámico por contenido:** sí, cada sermón, serie y artículo con su propia metadata desde WordPress
- **Locale:** `es_AR`

---

## Tareas

### 1. Preparar assets

- [ ] Verificar que `og.png` es 1200×630px. Si no, regenerar.
- [ ] Crear favicon set completo (16, 32, 180 apple-touch, 192, 512).
- [ ] Crear `manifest.json` para PWA básico.

### 2. Instalar y configurar `react-helmet-async`

```bash
npm install react-helmet-async
```

- [ ] Envolver `<App />` en `<HelmetProvider>` en `main.tsx`.
- [ ] Crear componente reutilizable `src/components/SEO.tsx` que reciba props: `title`, `description`, `image`, `url`, `type`.

### 3. Componente `<SEO />`

Debe emitir, como mínimo:

- `<title>`
- `<meta name="description">`
- `<link rel="canonical">`
- Open Graph: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`, `og:locale`
- Twitter: `twitter:card="summary_large_image"`, `twitter:title`, `twitter:description`, `twitter:image`
- Schema.org JSON-LD según tipo de página (Organization, Article, Event, Sermon)

### 4. Aplicar `<SEO />` en cada página

| Página | title | description | image | type |
|---|---|---|---|---|
| `/` | "Iglesia Bíblica Ciudad de Dios — Rosario" | Tagline de la iglesia | `og.png` | website |
| `/sermones` | "Sermones — IBCD" | Descripción genérica | `og.png` | website |
| `/sermones/:slug` | `${sermon.title} — IBCD` | `sermon_data.summary` truncada a 160 chars | `sermon.featured_image` | article |
| `/series/:slug` | `${serie.name} — IBCD` | `serie.description` | `serie.series_data.image_url` | website |
| `/articulos` | "Artículos — IBCD" | Descripción genérica | `og.png` | website |
| `/articulos/:slug` | `${post.title.rendered} — IBCD` | `post.excerpt.rendered` (limpiar HTML, truncar a 160) | featured image embed | article |
| `/eventos` | "Eventos — IBCD" | Descripción genérica | `og.png` | website |
| `/eventos/:slug` | `${evento.title} — IBCD` | Resumen del evento | featured image | event |
| `/creencias` | "Nuestras Creencias — IBCD" | Breve resumen doctrinal | `og.png` | website |
| `/liderazgo` | "Liderazgo — IBCD" | Breve descripción | `og.png` | website |
| `/visitanos` | "Visítanos — IBCD" | Dirección y horarios | `og.png` | website |

### 5. Configurar pre-rendering

- [ ] Investigar mejor opción para Vite 6 + React 19 (probablemente `vite-plugin-prerender-spa` o `react-snap`).
- [ ] Configurar lista de rutas estáticas: `/`, `/sermones`, `/eventos`, `/articulos`, `/creencias`, `/liderazgo`, `/visitanos`.
- [ ] Para rutas dinámicas (`/sermones/:slug`, etc.), generar la lista en build time consultando la API de WP.
- [ ] Esto requiere que WP esté online durante el build (no localhost).

### 6. Trigger automático de rebuild

- [ ] Configurar webhook en WP: cuando se publica o actualiza un sermón, evento o artículo, hace POST a un deploy hook de Cloudflare Pages.
- [ ] Plugin sugerido: `WP Webhooks` o código custom mínimo en `functions.php`.
- [ ] Generar Deploy Hook en Cloudflare Pages → Settings → Builds & deployments.

### 7. Sitemap dinámico

- [ ] Generar `sitemap.xml` en build time consumiendo la API de WP.
- [ ] Listar todas las URLs (estáticas + dinámicas).
- [ ] Incluir `lastmod`, `changefreq`, `priority`.

### 8. `robots.txt`

Crear `public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://www.ibciudaddedios.com/sitemap.xml
```

### 9. Validación y testing

- [ ] Previews en WhatsApp (mandar link a uno mismo).
- [ ] Facebook Sharing Debugger.
- [ ] Twitter Card Validator.
- [ ] LinkedIn Post Inspector.
- [ ] Lighthouse SEO score.
- [ ] PageSpeed Insights.
- [ ] Google Search Console: dar de alta el dominio, subir sitemap, verificar indexación.

### 10. Tareas opcionales (segunda fase)

- [ ] Schema.org `Sermon` específico (hay schema custom para sermones de iglesia).
- [ ] `og:audio` para sermones con MP3.
- [ ] Breadcrumbs schema para detalle de sermones, artículos, series.
- [ ] `hreflang` si en algún momento agregás versión en inglés.

---

## Orden recomendado de implementación

1. **Primero:** ir a producción (migrar WP a hosting, deploy frontend en Cloudflare Pages). Sin dominio real, los previews OG no se pueden testear bien.
2. **Después:** instalar `react-helmet-async` y crear `<SEO />` con metadata estática. Resultado inmediato: títulos correctos en pestañas del navegador, descripción para Google.
3. **Después:** aplicar `<SEO />` con datos dinámicos en cada página (sermones, artículos, eventos).
4. **Por último:** pre-rendering + sitemap + webhook de rebuild. Esto cierra el círculo para WhatsApp/Facebook/Twitter.
