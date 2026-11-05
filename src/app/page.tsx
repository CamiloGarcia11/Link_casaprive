"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { ShareButton } from "@/components/ShareButton";
import { LinkCard } from "@/components/LinkCard";
import { AmbientLogoBackground } from "@/components/AmbientLogoBackground";
import { GlyphLottery } from "@/components/GlyphLottery";
import {
  WhatsAppIcon,
  InstagramIcon,
  TikTokIcon,
  LuxuryBoutiqueIcon,
} from "@/components/Icons";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Home() {
  return (
    <main className="relative min-h-[100svh] w-full flex flex-col items-center justify-between overflow-x-hidden bg-luxury-bg">
      {/* Fondo Dinámico de Marca de Agua Animada (AmbientLogoBackground con Framer Motion) */}
      <AmbientLogoBackground />

      {/* Contenedor Central Ergonómico Mobile-First */}
      <div className="w-full max-w-md mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-10 flex flex-col justify-between flex-1 relative z-10">
        {/* Barra Superior con Distintivo de Marca y Botón de Compartir */}
        <div className="w-full flex items-center justify-between mb-5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-luxury-burgundy/25 text-[11px] font-medium tracking-editorial uppercase text-luxury-burgundy backdrop-blur-md shadow-subtle select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-luxury-burgundy animate-pulse" />
            Canales Oficiales Verificados
          </div>
          <ShareButton />
        </div>

        {/* Contenido Principal con Animaciones Escalonadas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          {/* Cabecera / Header de Casa Privé (Con el color Borgoña de la marca como protagonista) */}
          <motion.header
            variants={itemVariants}
            className="flex flex-col items-center text-center mb-6 w-full"
          >
            {/* Monograma CP Libre de Círculos, Puro Estilo Maison de Lujo */}
            <div className="relative mb-3.5 group select-none flex items-center justify-center">
              {/* Resplandor tenue ambiental detrás del monograma */}
              <div
                className="absolute w-24 h-24 rounded-full bg-gradient-to-tr from-luxury-burgundy/15 via-luxury-champagne/20 to-transparent blur-xl pointer-events-none -z-10"
                aria-hidden="true"
              />

              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                {/* Monograma CP en Borgoña Puro (#67262E) */}
                <Image
                  src="/brand/logo-cp-burgundy.png"
                  alt="Casa Privé Monograma Borgoña"
                  width={80}
                  height={80}
                  priority
                  className="object-contain w-full h-full select-none group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_2px_8px_rgba(103,38,46,0.12)]"
                />
                {/* Reflejo de Espejo Exclusivo sobre la silueta del monograma */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none select-none logo-icon-mirror-sheen"
                />
              </div>
            </div>

            {/* Titular de la Firma con Efecto Glyph Lottery (React Bits) en Color Borgoña */}
            <div className="relative inline-block text-center mb-1">
              <GlyphLottery
                text="CASA PRIVÉ"
                className="font-cinzel text-[26px] sm:text-[30px] font-bold tracking-cinzel uppercase text-luxury-burgundy block leading-tight"
                duration={1.05}
                stagger={0.065}
                reelLength={16}
              />
            </div>

            {/* Eslogan Oficial en Borgoña */}
            <div className="inline-flex items-center gap-1.5 text-[8.5px] sm:text-[9.5px] uppercase tracking-luxury-wide text-luxury-burgundy font-sans font-bold select-none mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-luxury-burgundy shrink-0" />
              <span>EL PRIVILEGIO DE ELEGIR</span>
            </div>

            {/* Subtítulo Sofisticado */}
            <p className="font-sans text-xs sm:text-[13px] tracking-wide text-luxury-muted max-w-[320px] leading-relaxed">
              Exclusividad y estilo a tu alcance
              <span className="mx-2 text-luxury-champagne font-bold">•</span>
              Enlaces Oficiales
            </p>
          </motion.header>

          {/* Lista de Enlaces Oficiales (Todos los logos/iconos en color Borgoña) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3.5 w-full"
          >
            {/* 1. Botón Destacado: Sitio Web Oficial (CTA Principal en Borgoña de Pasarela) */}
            <LinkCard
              title="Sitio Web Oficial | Catálogo Exclusivo"
              subtitle="Colección de alta gama & entrega inmediata"
              url="https://casaprive.lat/"
              isFeatured={true}
              badge="Boutique Oficial"
              icon={<LuxuryBoutiqueIcon className="w-5 h-5 text-luxury-cream" />}
            />

            {/* 2. WhatsApp: Logotipo en Borgoña de la Marca */}
            <LinkCard
              title="Atención personalizada por WhatsApp"
              subtitle="Asesoría VIP, pedidos y encargos directos"
              url="https://wa.me/message/ALDOQRCRCY56B1"
              icon={
                <WhatsAppIcon className="w-5 h-5 text-luxury-burgundy group-hover:text-luxury-cream transition-colors duration-300" />
              }
            />

            {/* 3. Instagram: Logotipo en Borgoña de la Marca */}
            <LinkCard
              title="Síguenos en Instagram (@casaprive__)"
              subtitle="Pasarela, lanzamientos y estilo de vida"
              url="https://www.instagram.com/casaprive__?rpxt=MTgxcG9wMXRzeXp5cQ=="
              icon={
                <InstagramIcon className="w-5 h-5 text-luxury-burgundy group-hover:text-luxury-cream transition-colors duration-300" />
              }
            />

            {/* 4. TikTok: Logotipo en Borgoña de la Marca */}
            <LinkCard
              title="Descubre más en TikTok (@casaprive___)"
              subtitle="Detalles exclusivos, unboxing & novedades"
              url="https://www.tiktok.com/@casaprive___?_r=1&_t=ZS-9B8gpVz45Uj"
              icon={
                <TikTokIcon className="w-5 h-5 text-luxury-burgundy group-hover:text-luxury-cream transition-colors duration-300" />
              }
            />
          </motion.div>
        </motion.div>

        {/* Footer de Alta Gama con Borgoña Sutil */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 pt-5 border-t border-luxury-burgundy/20 text-center flex flex-col items-center gap-2.5"
        >
          <div className="flex items-center gap-2 text-[11px] font-cinzel tracking-widest text-luxury-burgundy uppercase font-semibold">
            <span>CASA PRIVÉ</span>
            <span className="text-luxury-champagne font-bold">•</span>
            <span>EL PRIVILEGIO DE ELEGIR</span>
          </div>

          <p className="text-[11px] text-luxury-muted/80 tracking-wide font-sans">
            © 2026 Casa Privé. Todos los derechos reservados.
          </p>

          {/* Botón de Visión Web: Discreto, elegante y proporcionado */}
          <motion.a
            href="https://visionwebcl.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="mt-1 group inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-white/70 hover:bg-white text-luxury-muted hover:text-luxury-black border border-luxury-border/60 hover:border-luxury-burgundy/40 transition-all duration-200 text-[10.5px] font-sans tracking-tight shadow-[0_1px_2px_rgba(0,0,0,0.03)] touch-manipulation select-none"
            aria-label="Sitio desarrollado por Visión Web"
          >
            <span>
              Sitio desarrollado por{" "}
              <strong className="font-semibold text-luxury-black group-hover:text-luxury-burgundy transition-colors">
                Visión Web
              </strong>
            </span>
            <ArrowUpRight className="w-3 h-3 text-luxury-muted group-hover:text-luxury-burgundy transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.footer>
      </div>
    </main>
  );
}
