import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

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
    <html lang="es" className={`${cinzel.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-luxury-bg text-luxury-black font-sans antialiased selection:bg-luxury-burgundy selection:text-luxury-cream">
        {children}
      </body>
    </html>
  );
}
