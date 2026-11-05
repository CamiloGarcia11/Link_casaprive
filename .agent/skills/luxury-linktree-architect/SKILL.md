---
name: luxury-linktree-architect
description: Senior UI/UX & Frontend Architecture Skill specialized in ultra-luxury high-fashion digital experiences (Casa Privé).
---

# Luxury Linktree Architect • Casa Privé

Esta Skill gobierna y audita todos los aspectos visuales, interactivos y de rendimiento de la experiencia "Link in Bio" de alta gama para **Casa Privé**.

---

## 1. Fundamentos de Identidad Visual (Heredados de `Encargos_Julieth`)

### Paleta Hexadecimal de Alta Costura
- **Vinotinto Insignia (Burgundy):** `#67262E`
  - Hover / Acento Claro: `#7E2F39`
  - Profundo / Sombra: `#4E1D23`
- **Fondo Primario (Silk Ivory):** `#FAF8F5` (Fondo marfil cálido de seda)
- **Fondo de Tarjetas (Almond Warm / Vainilla):** `#F6ECD1` / `#FAF8F2`
- **Superficie Pura (White Silk):** `#FFFFFF`
- **Acento Champagne / Oro Suave:** `#C9AF96`
- **Texto Principal (Negro Espresso):** `#23181A`
- **Texto Atenuado (Taupe Cálido):** `#625D5A`
- **Bordes Finos Arquitectónicos:**
  - Borde Sutil: `#E8DEC8`
  - Borde Definido: `#D5C4AC`
  - Borde con Brillo Dorado: `rgba(201, 175, 150, 0.45)`

### Tipografía y Jerarquía
- **Titulares Principales & Monogramas:** `Cinzel`, serif imperial.
  - `font-cinzel`, `tracking-cinzel` (`0.15em`), pesos 600 y 700.
- **Detalles Editoriales y Acentos:** `Cormorant Garamond`, serif de pasarela.
- **Cuerpo, Subtítulos y Botones:** `Plus Jakarta Sans`, sans-serif geométrica y legible.
  - Tracking sutil (`-0.01em` a `0.02em`), pesos 400, 500 y 600.

---

## 2. Reglas de Oro de UI/UX y Micro-Interacciones

1. **Prohibición de estilos planos por defecto:**
   - Ningún botón puede ser un bloque plano genérico.
   - Todo botón interactivo debe contar con:
     - Superficie *glassmorphism* con `backdrop-blur-md` o gradiente sutil.
     - Borde fino (`border border-luxury-border/80` o gradiente metálico).
     - Sombra multicapa (`shadow-luxury-card`, `shadow-luxury-hover`, `shadow-pill`).
     - Feedback físico con `framer-motion`: `whileHover={{ y: -2, scale: 1.012 }}`, `whileTap={{ scale: 0.98 }}` con curvas `spring` (`stiffness: 400, damping: 25`).
     - Estados `focus-visible` accesibles con anillo vinotinto suave (`focus-visible:ring-2 focus-visible:ring-luxury-burgundy/40`).

2. **Jerarquía Visual del CTA Principal:**
   - El botón del **Sitio Web Oficial (`casaprive.lat`)** debe tener prominencia indiscutible:
     - Fondo con gradiente vinotinto de pasarela (`#67262E` a `#7E2F39`).
     - Efecto *shimmer* animado (barrido diagonal periódico de luz blanca/dorada translúcida cada 4 segundos).
     - Borde champagne reflectante.
     - Resplandor difuminado de fondo (*ambient glow*).

3. **Atmósfera y Fondo:**
   - No usar fondos blancos fríos.
   - La página debe respirar con esferas de luz radial tenue (vinotinto `#67262E` al 6-8% y champagne `#C9AF96` al 10-15%) con `blur-3xl`.
   - Efecto de reflejo espejo (*text-mirror-sheen* y *logo-icon-mirror-sheen*) sobre el monograma y título.

4. **Experiencia Mobile-First Impecable:**
   - Altura mínima de botón en móvil: **56px** (`min-h-[56px]`), permitiendo pulsación táctil inmediata y cómoda.
   - Contenedor central acotado a `max-w-md` para pantallas móviles y tablets.
   - Prevención absoluta de desbordamiento horizontal (`overflow-x-hidden`).
   - Botón de compartir nativo (`navigator.share`) con *fallback* al portapapeles y notificación *toast* flotante animada.

---

## 3. Compatibilidad con Cloudflare Pages
- Compilación estática pura (`output: 'export'`) en `next.config.mjs`.
- `images: { unoptimized: true }` para evitar dependencias del runtime Node.js en la CDN.
- Cero APIs exclusivas de servidor en tiempo de ejecución.
