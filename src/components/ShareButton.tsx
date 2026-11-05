"use client";

import React, { useState } from "react";
import { Share2, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Casa Privé | Enlaces Oficiales",
      text: "Casa Privé • El Privilegio de Elegir. Catálogo exclusivo de piezas de alta gama.",
      url: typeof window !== "undefined" ? window.location.href : "https://casaprive.lat",
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
      }
    }

    // Fallback: Portapapeles
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2400);
      }
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={handleShare}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Compartir perfil de Casa Privé"
        className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-white/80 backdrop-blur-md border border-luxury-border/80 text-luxury-charcoal hover:text-luxury-burgundy hover:border-luxury-burgundy/40 shadow-subtle hover:shadow-luxury-hover transition-all duration-200 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-burgundy/40"
      >
        <Share2 className="w-4.5 h-4.5 transition-transform group-hover:rotate-12 duration-200" />
      </motion.button>

      {/* Notificación Toast Flotante */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.94 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4.5 py-2.5 rounded-full bg-luxury-black/95 text-luxury-cream text-xs font-medium tracking-wide shadow-2xl border border-luxury-champagne/40 backdrop-blur-md select-none"
          >
            <div className="w-4 h-4 rounded-full bg-luxury-burgundy flex items-center justify-center text-luxury-cream shrink-0">
              <Check className="w-2.5 h-2.5 stroke-[2.5]" />
            </div>
            <span>Enlace copiado al portapapeles</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
