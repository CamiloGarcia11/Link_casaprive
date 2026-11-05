"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { ShareButton } from "@/components/ShareButton";
import { LinkCard } from "@/components/LinkCard";
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
      {/* Luces Ambientales de Alta Costura (Ambient Breathing Glows) */}
      <div
        className="pointer-events-none fixed -top-36 left-1/2 -translate-x-1/2 w-[540px] h-[540px] rounded-full bg-gradient-to-b from-luxury-burgundy/10 via-luxury-champagne/12 to-transparent blur-3xl -z-10 animate-ambient-breathe"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed top-1/2 -right-32 w-80 h-80 rounded-full bg-luxury-champagne/15 blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed -bottom-28 -left-32 w-80 h-80 rounded-full bg-luxury-burgundy/8 blur-3xl -z-10"
        aria-hidden="true"
      />

      {/* Contenedor Central Ergonómico Mobile-First */}
      <div className="w-full max-w-md mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-10 flex flex-col justify-between flex-1 relative z-10">
        {/* Barra Superior con Distintivo de Marca y Botón de Compartir */}
        <div className="w-full flex items-center justify-between mb-5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/75 border border-luxury-border/80 text-[11px] font-medium tracking-editorial uppercase text-luxury-muted backdrop-blur-md shadow-subtle select-none">
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
          {/* Cabecera / Header de Casa Privé (Heredado de Encargos_Julieth) */}
          <motion.header
            variants={itemVariants}
            className="flex flex-col items-center text-center mb-6 w-full"
          >
            {/* Monograma CP con Reflejo de Espejo Exclusivo */}
            <div className="relative mb-3 group select-none">
              <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full p-1 bg-gradient-to-b from-white via-luxury-card to-luxury-border shadow-luxury-card flex items-center justify-center">
                <div className="relative w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center p-3 border border-luxury-border/50">
                  <Image
                    src="/brand/logo-cp-icon.png"
                    alt="Casa Privé Monograma"
                    width={72}
                    height={72}
                    priority
                    className="object-contain w-full h-full select-none group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Reflejo de Espejo Exclusivo sobre la silueta del icono */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none select-none logo-icon-mirror-sheen"
                  />
                </div>
              </div>
            </div>

            {/* Titular de la Firma con Reflejo Tipográfico (text-mirror-sheen) */}
            <div className="relative inline-block text-center mb-1">
              <h1 className="font-cinzel text-[26px] sm:text-[30px] font-bold tracking-cinzel uppercase text-luxury-black block leading-tight">
                CASA PRIVÉ
              </h1>
              <span
                aria-hidden="true"
                className="font-cinzel text-[26px] sm:text-[30px] font-bold tracking-cinzel uppercase leading-tight block absolute inset-0 text-mirror-sheen pointer-events-none select-none"
              >
                CASA PRIVÉ
              </span>
            </div>

            {/* Eslogan Oficial (Exacto de Encargos_Julieth) */}
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

          {/* Lista de Enlaces Oficiales */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3.5 w-full"
          >
            {/* 1. Botón Destacado: Sitio Web Oficial (CTA Principal de Pasarela) */}
            <LinkCard
              title="Sitio Web Oficial | Catálogo Exclusivo"
              subtitle="Colección de alta gama & entrega inmediata"
              url="https://casaprive.lat/"
              isFeatured={true}
              badge="Boutique Oficial"
              icon={<LuxuryBoutiqueIcon className="w-5 h-5 text-luxury-cream" />}
            />

            {/* 2. WhatsApp: Atención Personalizada */}
            <LinkCard
              title="Atención personalizada por WhatsApp"
              subtitle="Asesoría VIP, pedidos y encargos directos"
              url="https://wa.me/message/ALDOQRCRCY56B1"
              icon={<WhatsAppIcon className="w-5 h-5 text-[#25D366] group-hover:text-luxury-cream" />}
            />

            {/* 3. Instagram */}
            <LinkCard
              title="Síguenos en Instagram (@casaprive__)"
              subtitle="Pasarela, lanzamientos y estilo de vida"
              url="https://www.instagram.com/casaprive__?rpxt=MTgxcG9wMXRzeXp5cQ=="
              icon={<InstagramIcon className="w-5 h-5 text-luxury-burgundy group-hover:text-luxury-cream" />}
            />

            {/* 4. TikTok */}
            <LinkCard
              title="Descubre más en TikTok (@casaprive___)"
              subtitle="Detalles exclusivos, unboxing & novedades"
              url="https://www.tiktok.com/@casaprive___?_r=1&_t=ZS-9B8gpVz45Uj"
              icon={<TikTokIcon className="w-5 h-5 text-luxury-black group-hover:text-luxury-cream" />}
            />
          </motion.div>
        </motion.div>

        {/* Footer de Alta Gama */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 pt-5 border-t border-luxury-border/60 text-center flex flex-col items-center gap-2.5"
        >
          <div className="flex items-center gap-2 text-[11px] font-cinzel tracking-widest text-luxury-muted uppercase font-medium">
            <span>CASA PRIVÉ</span>
            <span className="text-luxury-champagne font-bold">•</span>
            <span>EL PRIVILEGIO DE ELEGIR</span>
          </div>

          <p className="text-[11px] text-luxury-muted/80 tracking-wide font-sans">
            © 2026 Casa Privé. Todos los derechos reservados.
          </p>

          {/* Botón de Visión Web (100% Mobile Friendly & Touch-Optimized) */}
          <motion.a
            href="https://visionwebcl.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="mt-2 group relative inline-flex items-center justify-center gap-2 px-4.5 py-3 min-h-[48px] rounded-full bg-white/85 hover:bg-white text-luxury-black border border-luxury-border/80 hover:border-luxury-burgundy/40 shadow-subtle hover:shadow-luxury-hover backdrop-blur-md transition-all duration-300 text-xs font-medium touch-manipulation select-none active:bg-luxury-cream-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-burgundy/40"
            aria-label="Sitio desarrollado por Visión Web"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-luxury-muted group-hover:text-luxury-black transition-colors">
              Sitio desarrollado por{" "}
              <strong className="font-semibold text-luxury-burgundy group-hover:underline">
                Visión Web
              </strong>
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-luxury-burgundy transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.footer>
      </div>
    </main>
  );
}
