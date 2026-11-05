"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LinkCardProps {
  title: string;
  subtitle?: string;
  url: string;
  icon: React.ReactNode;
  isFeatured?: boolean;
  badge?: string;
}

export function LinkCard({
  title,
  subtitle,
  url,
  icon,
  isFeatured = false,
  badge,
}: LinkCardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2, scale: 1.012 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 26 }}
      className={cn(
        "group relative flex items-center justify-between w-full min-h-[60px] px-4 py-3.5 sm:px-5 sm:py-4 rounded-2xl transition-all duration-300 select-none touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-burgundy/40 focus-visible:ring-offset-2 focus-visible:ring-offset-luxury-bg",
        isFeatured
          ? "bg-gradient-to-r from-luxury-burgundy via-luxury-burgundy-light to-luxury-burgundy text-luxury-cream border border-luxury-champagne/45 shadow-pill animate-shimmer"
          : "bg-white/85 hover:bg-white text-luxury-black border border-luxury-border/80 hover:border-luxury-burgundy/35 shadow-luxury-card hover:shadow-luxury-hover backdrop-blur-md"
      )}
    >
      {/* Resplandor difuminado de fondo para el CTA principal */}
      {isFeatured && (
        <div
          className="absolute -inset-1 bg-gradient-to-r from-luxury-champagne/25 via-luxury-cream/15 to-luxury-champagne/25 rounded-2xl blur-md -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Izquierda: Icono representativo */}
      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-2">
        <div
          className={cn(
            "flex items-center justify-center shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl transition-all duration-300",
            isFeatured
              ? "bg-white/15 text-luxury-cream border border-white/25 group-hover:bg-white/25 shadow-inner"
              : "bg-luxury-cream-light text-luxury-burgundy border border-luxury-border/70 group-hover:bg-luxury-burgundy group-hover:text-luxury-cream group-hover:border-luxury-burgundy shadow-subtle"
          )}
        >
          {icon}
        </div>

        {/* Centro: Título, Badge y Subtítulo */}
        <div className="flex flex-col text-left truncate justify-center">
          {badge && (
            <span
              className={cn(
                "inline-flex items-center gap-1 text-[10px] font-cinzel tracking-widest uppercase mb-0.5 font-bold",
                isFeatured ? "text-luxury-champagne" : "text-luxury-burgundy"
              )}
            >
              <Sparkles className="w-2.5 h-2.5 text-luxury-champagne" />
              {badge}
            </span>
          )}
          <span
            className={cn(
              "text-[14px] sm:text-[15px] font-semibold tracking-tight truncate",
              isFeatured
                ? "text-luxury-cream font-medium"
                : "text-luxury-black group-hover:text-luxury-burgundy transition-colors"
            )}
          >
            {title}
          </span>
          {subtitle && (
            <span
              className={cn(
                "text-[11.5px] sm:text-xs tracking-normal truncate mt-0.5",
                isFeatured ? "text-luxury-cream/85" : "text-luxury-muted"
              )}
            >
              {subtitle}
            </span>
          )}
        </div>
      </div>

      {/* Derecha: Indicador de Flecha Sutil */}
      <div
        className={cn(
          "flex items-center justify-center shrink-0 w-8 h-8 rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
          isFeatured
            ? "text-luxury-cream/90 bg-white/15 border border-white/20"
            : "text-luxury-muted group-hover:text-luxury-burgundy group-hover:bg-luxury-cream-light border border-transparent group-hover:border-luxury-border/60"
        )}
      >
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </motion.a>
  );
}
