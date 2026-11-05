# Sistema de Diseño y Reglas de Estilo • Casa Privé

## 1. Paleta de Colores
```css
/* Primarios y Fondos */
--luxury-bg: #FAF8F5;          /* Marfil seda cálido */
--luxury-card: #F6ECD1;        /* Almond vainilla suave */
--luxury-card-warm: #FAF8F2;   /* Blush marfil cálido */
--luxury-white: #FFFFFF;       /* Blanco puro seda */

/* Insignia y Acentos */
--luxury-burgundy: #67262E;    /* Vinotinto pasarela Casa Privé */
--luxury-burgundy-light: #7E2F39; /* Tono hover */
--luxury-burgundy-dark: #4E1D23;  /* Tono profundo */
--luxury-champagne: #C9AF96;   /* Champagne / camel cálido */
--luxury-gold: #C9AF96;

/* Textos y Bordes */
--luxury-black: #23181A;       /* Negro espresso profundo */
--luxury-charcoal: #313332;    /* Carbón de la firma */
--luxury-muted: #625D5A;       /* Taupe cálido */
--luxury-border: #E8DEC8;      /* Borde sutil */
--luxury-border-dark: #D5C4AC; /* Borde de contraste */
```

## 2. Tipografía y Escala
- **Headings & Marca:** `font-cinzel` (Cinzel, serif)
- **Acentos Editoriales:** `font-cormorant` (Cormorant Garamond, serif)
- **Interfaz y Lectura:** `font-sans` (Plus Jakarta Sans, sans-serif)

## 3. Micro-Interacciones Obligatorias
- **Botones y Enlaces:**
  - `min-height: 56px` en móvil para garantizar el área táctil ergonómica.
  - Curvas de animación con física de resortes (`spring` con `stiffness: 400`, `damping: 25`).
  - Efectos visuales de superficie: bordes de 1px con matices de la paleta, sombras multicapa difusas.
  - CTA Principal con destello reflectante diagonal periódico (`animate-shimmer`).
  - Todos los botones deben tener `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-burgundy/40`.

## 4. Estándares Técnicos
- Compatible con **Cloudflare Pages Static Export** (`out/`).
- Optimizado para móviles con `touch-manipulation` y `select-none`.
- Totalmente accesible y con soporte OpenGraph / Twitter Cards.
