"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function AmbientLogoBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Partículas ultra-ligeras con aceleración por GPU (máxima fluidez en móviles)
  const particles = useMemo(
    () => [
      { id: 1, left: "12%", size: 2.5, delay: 0, duration: 16, color: "bg-luxury-burgundy/30" },
      { id: 2, left: "32%", size: 2, delay: 3, duration: 18, color: "bg-luxury-champagne/35" },
      { id: 3, left: "55%", size: 2, delay: 6, duration: 20, color: "bg-luxury-burgundy/25" },
      { id: 4, left: "75%", size: 2.5, delay: 1, duration: 17, color: "bg-luxury-champagne/35" },
      { id: 5, left: "90%", size: 2, delay: 4, duration: 19, color: "bg-luxury-burgundy/20" },
    ],
    []
  );

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center select-none"
      style={{ contain: "strict" }}
      aria-hidden="true"
    >
      {/* 1. Iluminación Ambiental Optimizada con Gradientes Radiales Nativos (Cero consumo de GPU) */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[480px] h-[480px] rounded-full pointer-events-none opacity-80"
        style={{
          background: "radial-gradient(circle, rgba(103, 38, 46, 0.08) 0%, rgba(201, 175, 150, 0.04) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 -right-28 w-[360px] h-[360px] rounded-full pointer-events-none opacity-70"
        style={{
          background: "radial-gradient(circle, rgba(201, 175, 150, 0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-28 -left-28 w-[380px] h-[380px] rounded-full pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(78, 29, 35, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* 2. Marca de Agua Dinámica: Ligera, fluida y sin saltos */}
      {mounted && (
        <div className="relative flex items-center justify-center w-[270px] h-[270px] sm:w-[360px] sm:h-[360px]">
          {/* Halo Radial Sutil */}
          <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.45] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full pointer-events-none -z-10"
            style={{
              background: "radial-gradient(circle, rgba(103, 38, 46, 0.09) 0%, rgba(201, 175, 150, 0.06) 40%, transparent 70%)",
              willChange: "opacity",
            }}
          />

          {/* Monograma Oficial Casa Privé con Respiración a 60 FPS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.015, 0.055],
              scale: [0.95, 1.03],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="relative w-full h-full flex items-center justify-center"
            style={{ willChange: "transform, opacity" }}
          >
            <Image
              src="/brand/logo-cp-burgundy.png"
              alt="Casa Privé Logo Watermark"
              width={360}
              height={360}
              className="w-full h-full object-contain select-none"
            />
          </motion.div>
        </div>
      )}

      {/* 3. Micro-Partículas de Seda Flotante */}
      {particles.map((p) => (
        <span
          key={p.id}
          className={`absolute rounded-full animate-particle pointer-events-none ${p.color}`}
          style={{
            left: p.left,
            bottom: "-20px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}
