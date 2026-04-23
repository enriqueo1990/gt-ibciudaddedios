/** Predicador, serie o tema dentro de un sermón */
export interface WPTerm {
  id: number;
  name: string;
  slug: string;
  link: string;
}

/** Datos extendidos de un predicador desde /wp/v2/predicadores */
export interface WPPreacher {
  id: number;
  name: string;
  slug: string;
  preacher_data: {
    image_url: string;
    role: string;
    short_bio: string;
  };
}

export interface WPSermonMedia {
  audio: string;
  video_youtube: string;
  pdf: string;
}

export interface WPSermonComputed {
  has_audio: boolean;
  has_video: boolean;
  has_notes: boolean;
  has_summary: boolean;
}

export interface WPSermonData {
  passage: string;
  summary: string;
  hook: string;
  date: string;
  date_label: string;
  media: WPSermonMedia;
  preachers: WPTerm[];
  series: WPTerm[];
  topics: WPTerm[];
  computed: WPSermonComputed;
}

export interface WPSermon {
  id: number;
  title: string;
  slug: string;
  link: string;
  featured_image: string;
  sermon_data: WPSermonData;
}

export interface WPSeriesData {
  image_url: string;
  hero_image_url: string;
  state: 'en_curso' | 'completada' | string;
  dates: string;
  latest_sermon_id: number | null;
}

export interface WPSeries {
  id: number;
  name: string;
  slug: string;
  description: string;
  link: string;
  count: number;
  series_data: WPSeriesData;
}

/** Respuesta de /series/:slug/sermons — incluye metadatos de la serie + array de sermones */
export interface WPSeriesWithSermons {
  series: WPSeries;
  sermons: WPSermon[];
}

/** Meta-campos del CPT gtc_evento */
export interface WPEventData {
  start_date: string;       // "2026-05-10"
  start_time: string;       // "09:00" | ""
  end_date: string;
  end_time: string;
  all_day: boolean;
  format: 'presencial' | 'online' | 'híbrido' | string;
  location_name: string;
  address: string;
  online_url: string;
  short_location_note: string;
  event_type: string;       // "culto" | "conferencia" | etc.
  event_status: 'confirmado' | 'cancelado' | 'postergado' | string;
  featured: boolean;
  computed: {
    has_started: boolean;
    has_finished: boolean;
    is_upcoming: boolean;
  };
}

export interface WPEvent {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_image_url: string | null; // inyectado por el proxy o _embedded
  gtc_evento_data: WPEventData;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
  };
}

/** Estructura de un Post (Artículos) de WordPress */
export interface WPPost {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  author: number;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
    'author'?: Array<{ name: string; avatar_urls?: Record<string, string> }>;
    'wp:term'?: Array<Array<{ name: string; slug: string; taxonomy: string }>>;
  };
}
