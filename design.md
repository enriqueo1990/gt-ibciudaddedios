# Documentación de Diseño - Iglesia Bíblica Ciudad de Dios (IBCD)

Este documento sirve como guía técnica y de estilo para mantener la coherencia visual en todo el sitio web de la Iglesia Bíblica Ciudad de Dios. El enfoque principal es un diseño **Editorial Minimalista** y **Moderno-Conservador**.

## 1. Paleta de Colores

El sitio utiliza una paleta sobria y de alto contraste, apoyándose fuertemente en la escala de grises (Slate) con un único color de acento vibrante que representa la identidad de la iglesia.

### Color de Acento (Marca)
*   **IBCD Blue**: `#0072BC` (`ibcd-blue` en Tailwind). Se usa con moderación para elementos interactivos, estados *hover*, íconos clave y etiquetas ("eyebrows").

### Escala de Grises (Slate)
*   **Fondos Principales**: 
    *   Blanco (`#FFFFFF` / `bg-white`): Fondo principal para la mayoría de las secciones (Nosotros, Galería).
    *   Slate 50 (`bg-slate-50`): Fondo secundario para crear contraste suave (Sermones, Eventos).
    *   Slate 950 (`bg-slate-950`): Fondo oscuro para secciones de alto impacto (Hero, Contacto).
*   **Texto**:
    *   Slate 900 (`text-slate-900`): Títulos y texto principal sobre fondos claros.
    *   Slate 500 (`text-slate-500`): Párrafos y cuerpo de texto general.
    *   Slate 400 (`text-slate-400`): Metadatos, fechas, ubicaciones y texto secundario.
    *   Blanco (`text-white`): Texto sobre fondos oscuros (Hero, Contacto, superposiciones de imágenes).

## 2. Tipografía

El diseño tipográfico busca un equilibrio entre la elegancia clásica (Serif) y la legibilidad moderna (Sans-serif).

*   **Fuente Principal (Títulos)**: `Instrument Serif` (`font-serif`).
    *   *Uso*: Exclusivamente para encabezados (`h1`, `h2`, `h3`, `h4`).
    *   *Estilo característico*: Se combina frecuentemente con texto en cursiva (`italic`) dentro del mismo título para dar énfasis y un toque editorial (ej. "Existimos para *la gloria de Dios*").
*   **Fuente Secundaria (Cuerpo)**: `Inter` (`font-sans`).
    *   *Uso*: Párrafos, botones, navegación, metadatos.
    *   *Estilo característico*: Para etiquetas pequeñas ("eyebrows") se usa un tamaño muy pequeño (`text-[10px]` o `text-xs`), en mayúsculas (`uppercase`), con un espaciado de letras muy amplio (`tracking-widest` o `tracking-[0.3em]`) y peso fuerte (`font-bold` o `font-medium`).

## 3. Componentes Visuales

### Botones y Llamados a la Acción (CTAs)
*   **Estilo Editorial**: En lugar de botones sólidos tradicionales, usamos enlaces de texto acompañados de un ícono dentro de un círculo delicado con borde fino. Al hacer *hover*, el círculo cambia sutilmente de color (ej. sección Hero y Creencias).
*   **Interacciones**: Los enlaces de texto simples suelen tener un efecto de cambio de color al azul de la marca (`hover:text-ibcd-blue`) y transiciones suaves (`transition-colors`).

### Tarjetas (Cards)
*   **Eventos**: Diseño ultra-plano. Se utiliza un contenedor padre con fondo gris (`bg-slate-200`) y un `gap-px` (1 pixel) con tarjetas hijas en blanco (`bg-white`). Esto crea un borde de 1px perfecto y minimalista entre las tarjetas.
*   **Sermones**: Diseño dividido (50% imagen, 50% texto) sin bordes redondeados, manteniendo la estética de revista impresa.

### Imágenes y Galería
*   **Efecto Grayscale**: Por defecto, muchas imágenes (Hero, Pastor, Galería) se muestran en escala de grises (`grayscale`) o con opacidad reducida.
*   **Interacción**: Al pasar el cursor (`group-hover`), las imágenes recuperan su color original (`grayscale-0`), opacidad completa y tienen un ligero zoom (`scale-105`) con una transición lenta (`duration-700` o `duration-1000`).
*   **Galería**: Utiliza un layout tipo "Masonry" nativo de CSS (`columns-1 md:columns-2 lg:columns-3`) para un flujo orgánico de las fotografías.

### Navegación
*   **Comportamiento**: Transparente en la parte superior (sobre el Hero oscuro) con texto blanco. Al hacer scroll, el fondo se vuelve blanco, el texto oscuro y se añade una sombra sutil. El logotipo SVG inteligente se adapta a estos cambios de color.

## 4. Layout y Espaciado

El sitio se caracteriza por un diseño espacioso que permite que el contenido "respire".

*   **Contenedor Principal**: `.container-custom` limita el ancho máximo a `1200px` y centra el contenido, asegurando que no se vea desproporcionado en pantallas ultra anchas. Tiene un padding lateral generoso (`px-6 md:px-12`).
*   **Márgenes Verticales (Paddings)**: Se utilizan paddings verticales muy amplios para separar las secciones, típicamente `py-24` (96px) o `py-32` (128px), lo que refuerza la estética editorial.
*   **Bordes**: Se usan bordes muy sutiles (`border-slate-100`) para separar secciones claras cuando es necesario (ej. Footer, Creencias).

## 5. Guía de Estilo (Reglas Generales para Nuevas Páginas)

Si vas a crear una nueva página o sección, sigue estas reglas estrictas:

1.  **No uses bordes redondeados pronunciados**: Mantén los bordes rectos o con un redondeo mínimo (`rounded-sm` = 2px) para conservar la seriedad y el estilo de revista.
2.  **Respeta el espacio en blanco**: No amontones el contenido. Usa `gap-12`, `gap-16` o `gap-20` entre columnas y `mb-12` o `mb-16` debajo de los títulos de sección.
3.  **Usa el "Eyebrow" para contexto**: Antes de un título principal (H2), coloca una pequeña etiqueta en mayúsculas y espaciada para dar contexto (ej. "SERIE: ROMANOS" o "FUNDAMENTO").
4.  **Animaciones sutiles**: Todas las animaciones deben ser suaves y no intrusivas. Usa `motion/react` para apariciones (`fade-in`, `slide-up`) con duraciones de `0.8s` a `1s`.
5.  **Contraste de Tipografías**: Nunca uses la fuente Serif (`Instrument Serif`) para párrafos largos; resérvala estrictamente para títulos.
6.  **Imágenes sobrias**: Prefiere fotografías documentales, sinceras y de alta calidad. Aplica el efecto de escala de grises por defecto si la imagen compite demasiado con el texto.
