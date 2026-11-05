# Casa Privé • Luxury Link in Bio

Aplicación web ultra-premium tipo "Link in Bio" para la marca de lujo **Casa Privé**, optimizada para máxima velocidad en el Edge de **Cloudflare Pages**.

---

## 🎨 Identidad Visual Heredada

- **Vinotinto Insignia (Burgundy):** `#67262E` (Light: `#7E2F39`, Dark: `#4E1D23`)
- **Fondo Marfil Seda (Background):** `#FAF8F5`
- **Marfil Blush / Tarjetas (Card Warm):** `#FAF8F2`
- **Almond / Crema Suave:** `#F6ECD1`
- **Acento Champagne / Camel:** `#C9AF96`
- **Negro Espresso Profundo (Texto Primario):** `#23181A`
- **Taupe Atenuado (Texto Muted):** `#625D5A`
- **Bordes de Lujo:** `#E8DEC8` / `#D5C4AC`
- **Tipografías:**
  - Títulos: `Cinzel` (Google Fonts, serif)
  - Editorial: `Cormorant Garamond` (Google Fonts, serif)
  - Interfaz y cuerpo: `Plus Jakarta Sans` (Google Fonts, sans-serif)

---

## 🚀 Despliegue en Cloudflare Pages

El proyecto está configurado con **Next.js Static Export** (`output: 'export'`), generando los archivos listos para CDN en la carpeta `out/`.

### Configuración en el panel de Cloudflare Pages:
1. Conecta tu repositorio de GitHub / GitLab a **Cloudflare Pages**.
2. **Framework preset:** `Next.js (Static HTML Export)` o `None`.
3. **Build command:** `npm run build`
4. **Build output directory:** `out`
5. **Node.js version:** `20+` o `22+` (variable de entorno `NODE_VERSION=20`).

---

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Compilar para producción (genera carpeta /out)
npm run build
```
