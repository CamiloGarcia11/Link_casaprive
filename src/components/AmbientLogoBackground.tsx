"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function AmbientLogoBackground() {
  // Partículas sutiles de polvo de seda y brillo de alta costura
  const particles = useMemo(
    () => [
      { id: 1, left: "10%", size: 2.5, delay: 0, duration: 16, color: "bg-luxury-burgundy/30" },
      { id: 2, left: "24%", size: 2, delay: 4, duration: 19, color: "bg-luxury-champagne/35" },
      { id: 3, left: "38%", size: 2.5, delay: 2, duration: 17, color: "bg-luxury-burgundy/25" },
      { id: 4, left: "54%", size: 2, delay: 7, duration: 21, color: "bg-luxury-champagne/40" },
      { id: 5, left: "70%", size: 3, delay: 1, duration: 18, color: "bg-luxury-burgundy/30" },
      { id: 6, left: "86%", size: 2, delay: 5, duration: 20, color: "bg-luxury-champagne/35" },
      { id: 7, left: "18%", size: 2.5, delay: 9, duration: 22, color: "bg-luxury-burgundy/20" },
      { id: 8, left: "80%", size: 2, delay: 11, duration: 18, color: "bg-luxury-champagne/30" },
    ],
    []
  );

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center select-none"
      aria-hidden="true"
    >
      {/* 1. Iluminación Ambiental Atmosférica (Acento Borgoña & Champagne) */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[580px] h-[580px] rounded-full bg-gradient-to-b from-luxury-burgundy/12 via-luxury-burgundy/6 to-transparent blur-[110px] animate-orb-1" />
      <div className="absolute top-1/3 -right-36 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-luxury-champagne/18 via-luxury-champagne/8 to-transparent blur-[100px] animate-orb-2" />
      <div
        className="absolute -bottom-36 -left-36 w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-luxury-burgundy-dark/10 via-luxury-burgundy/6 to-transparent blur-[110px] animate-orb-1"
        style={{ animationDelay: "-6s" }}
      />

      {/* 2. Marca de Agua Animada del Logo Oficial (Breathing / Fade In-Out con Framer Motion) */}
      <div className="relative flex items-center justify-center w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[580px] md:h-[580px]">
        {/* Halo Radial del Color de Acento que respira en sincronía */}
        <motion.div
          animate={{
            opacity: [0.25, 0.65],
            scale: [0.9, 1.08],
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute -inset-10 rounded-full bg-gradient-to-tr from-luxury-burgundy/15 via-luxury-champagne/18 to-transparent blur-3xl pointer-events-none -z-10"
        />

        {/* Monograma Oficial Casa Privé con Animación Continua a 60 FPS */}
        <motion.div
          animate={{
            opacity: [0.015, 0.065],
            scale: [0.92, 1.05],
          }}
          transition={{
            duration: 7.5,
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
            width={580}
            height={580}
            priority
            className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(103,38,46,0.06)] select-none"
          />
        </motion.div>
      </div>

      {/* 3. Micro-Partículas de Seda Flotante (Dinámica Sutil sin Distracción) */}
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
          }}
        />
      ))}
    </div>
  );
}
