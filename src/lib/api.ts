import type { WPSermon, WPSeries, WPSeriesWithSermons, WPEvent, WPPost, WPPreacher } from './types';

const BASE_URL = import.meta.env.VITE_WP_API_URL as string;

export async function wpFetch<T>(path: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${response.statusText}`);
  }
  return response.json() as Promise<T>;
}

export function getLatestSermons(): Promise<WPSermon[]> {
  return wpFetch<WPSermon[]>('/sf-sermones/v1/latest-sermons');
}

export function getActiveSeries(): Promise<WPSeries[]> {
  return wpFetch<WPSeries[]>('/sf-sermones/v1/active-series');
}

export function getSermonBySlug(slug: string): Promise<WPSermon> {
  return wpFetch<WPSermon>(`/sf-sermones/v1/sermon/${slug}`);
}

/** Devuelve { series, sermons[] } — el endpoint combina ambos en una sola llamada */
export function getSeriesWithSermons(slug: string): Promise<WPSeriesWithSermons> {
  return wpFetch<WPSeriesWithSermons>(`/sf-sermones/v1/series/${slug}/sermons`);
}

/** Obtener datos extendidos de un predicador (bio, cargo, foto) por su slug */
export async function getPreacherBySlug(slug: string): Promise<WPPreacher | null> {
  const results = await wpFetch<WPPreacher[]>(`/wp/v2/predicadores?slug=${slug}`);
  return results?.[0] ?? null;
}

/** Eventos próximos desde el CPT gtc_evento, ordenados por fecha de inicio */
export function getUpcomingEvents(perPage = 20): Promise<WPEvent[]> {
  return wpFetch<WPEvent[]>(
    `/wp/v2/gtc_evento?per_page=${perPage}&orderby=date&order=asc&_embed=wp:featuredmedia`
  );
}

/** Artículos (Posts estándar de WP) */
export function getPosts(perPage = 10): Promise<WPPost[]> {
  return wpFetch<WPPost[]>(`/wp/v2/posts?per_page=${perPage}&_embed=wp:featuredmedia`);
}

/** Obtener un artículo por su slug */
export async function getPostBySlug(slug: string): Promise<WPPost> {
  const posts = await wpFetch<WPPost[]>(`/wp/v2/posts?slug=${slug}&_embed=wp:featuredmedia`);
  if (!posts || posts.length === 0) throw new Error('Artículo no encontrado');
  return posts[0];
}
