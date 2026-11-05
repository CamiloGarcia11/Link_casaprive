import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: "#FAF8F5",              // Fondo marfil seda cálido
          card: "#F6ECD1",            // Fondo suave de tarjetas (Almond / Vainilla cálido)
          "card-warm": "#FAF8F2",     // Marfil blush suave
          white: "#FFFFFF",           // Blanco puro
          black: "#23181A",           // Negro espresso profundo
          charcoal: "#313332",        // Carbón de la marca
          burgundy: "#67262E",        // Color insignia Casa Privé (Vinotinto de Pasarela #67262E)
          "burgundy-light": "#7E2F39",// Tono hover
          "burgundy-dark": "#4E1D23", // Tono profundo
          plum: "#67262E",            // Tono complementario borgoña cálido
          cream: "#F6ECD1",           // Crema cálido de la paleta
          "cream-light": "#F8F7E5",   // Seda marfil suave de la paleta
          "cream-dark": "#E2D3B3",
          stone: "#67262E",           // Acento principal unificado
          "stone-light": "#7E2F39",
          "stone-dark": "#4E1D23",
          champagne: "#C9AF96",       // Champagne / camel cálido de la paleta
          gold: "#C9AF96",
          border: "#E8DEC8",          // Borde sutil cálido
          "border-dark": "#D5C4AC",
          muted: "#625D5A",           // Texto atenuado taupe cálido
        },
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "Cinzel", "serif"],
        cormorant: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        serif: ["var(--font-cinzel)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "9999px",
        luxury: "1.25rem",
        "luxury-lg": "1.75rem",
      },
      letterSpacing: {
        widest: "0.2em",
        "ultra-wide": "0.25em",
        editorial: "0.14em",
        cinzel: "0.12em",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(103, 38, 46, 0.05), 0 1px 2px 0 rgba(103, 38, 46, 0.03)",
        "luxury-card": "0 10px 30px -10px rgba(103, 38, 46, 0.08), 0 4px 12px -2px rgba(103, 38, 46, 0.03)",
        "luxury-hover": "0 20px 40px -15px rgba(103, 38, 46, 0.16), 0 8px 20px -4px rgba(103, 38, 46, 0.06)",
        pill: "0 4px 14px 0 rgba(103, 38, 46, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
