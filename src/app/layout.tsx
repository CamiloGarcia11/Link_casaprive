import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#67262E",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://casaprive.lat"),
  title: "Casa Privé | Enlaces Oficiales & Catálogo Exclusivo",
  description:
    "El Privilegio de Elegir. Accede a nuestra boutique oficial, catálogo exclusivo de piezas de alta gama por encargo y canales de atención personalizada.",
  keywords: [
    "Casa Privé",
    "El Privilegio de Elegir",
    "Encargos de lujo",
    "Personal Shopper",
    "Boutique de lujo",
    "Louis Vuitton",
    "Gucci",
    "Moda exclusiva",
  ],
  authors: [{ name: "Casa Privé" }],
  creator: "Casa Privé",
  publisher: "Casa Privé",
  icons: {
    icon: [
      { url: "/brand/logo-cp-icon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/brand/logo-cp-icon.png",
    apple: "/brand/logo-cp-icon.png",
  },
  openGraph: {
    title: "Casa Privé | Enlaces Oficiales & Catálogo Exclusivo",
    description:
      "El Privilegio de Elegir. Accede a nuestra tienda oficial, atención directa por WhatsApp y redes sociales.",
    url: "https://casaprive.lat",
    siteName: "Casa Privé",
    locale: "es_LA",
    type: "website",
    images: [
      {
        url: "/brand/logo-cp-plum.jpg",
        width: 1200,
        height: 630,
        alt: "Casa Privé - El Privilegio de Elegir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa Privé | Enlaces Oficiales",
    description: "El Privilegio de Elegir. Catálogo exclusivo y atención personalizada.",
    images: ["/brand/logo-cp-plum.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-luxury-bg text-luxury-black font-sans antialiased selection:bg-luxury-burgundy selection:text-luxury-cream">
        {children}
      </body>
    </html>
  );
}
