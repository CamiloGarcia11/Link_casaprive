"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";

interface GlyphLotteryProps {
  text: string;
  className?: string;
  reelLength?: number;
  duration?: number;
  stagger?: number;
  charset?: string;
}

const DEFAULT_CHARSET = "CASA PRIVÉ0123456789";

export function GlyphLottery({
  text = "CASA PRIVÉ",
  className = "",
  reelLength = 8,
  duration = 0.95,
  stagger = 0.05,
  charset = DEFAULT_CHARSET,
}: GlyphLotteryProps) {
  const [spinKey, setSpinKey] = useState(0);
  const [allLocked, setAllLocked] = useState(false);

  // Pre-calcular tiras de carretes compactas y eficientes (8 glifos por letra)
  const reels = useMemo(() => {
    return text.split("").map((char) => {
      if (char === " ") return null;

      const items: string[] = [];
      for (let i = 0; i < reelLength - 1; i++) {
        const randomChar = charset[Math.floor(Math.random() * charset.length)];
        items.push(randomChar);
      }
      items.push(char); // Letra de destino
      return items;
    });
  }, [text, reelLength, charset, spinKey]);

  const triggerSpin = useCallback(() => {
    setAllLocked(false);
    setSpinKey((prev) => prev + 1);

    // Un único temporizador para el final de la animación (cero re-renders intermedios)
    const totalTime = (duration + text.length * stagger + 0.15) * 1000;
    const timer = setTimeout(() => {
      setAllLocked(true);
    }, totalTime);

    return () => clearTimeout(timer);
  }, [text.length, duration, stagger]);

  useEffect(() => {
    const cleanup = triggerSpin();
    return cleanup;
  }, [triggerSpin]);

  return (
    <div
      role="heading"
      aria-level={1}
      aria-label={text}
      onClick={triggerSpin}
      title="Toca para girar"
      className={`relative inline-flex items-center justify-center select-none cursor-pointer touch-manipulation active:scale-[0.98] transition-transform ${className}`}
      style={{ contain: "layout paint" }}
    >
      {/* Contenedor de carretes con aceleración por hardware */}
      <span className="relative inline-flex items-center justify-center overflow-hidden">
        {text.split("").map((char, index) => {
          if (char === " ") {
            return (
              <span key={`space-${index}`} className="inline-block w-[0.28em]">
                &nbsp;
              </span>
            );
          }

          const reel = reels[index];
          if (!reel) return null;

          return (
            <span
              key={`char-${index}-${spinKey}`}
              className="relative inline-block h-[1.18em] overflow-hidden leading-none align-middle"
            >
              <motion.span
                initial={{ y: "0%" }}
                animate={{ y: `-${((reel.length - 1) / reel.length) * 100}%` }}
                transition={{
                  duration: duration + index * stagger,
                  ease: [0.16, 0.9, 0.22, 1], // Desaceleración suave tipo slot machine
                }}
                className="flex flex-col items-center"
                style={{ willChange: "transform" }}
              >
                {reel.map((glyph, gIndex) => (
                  <span
                    key={gIndex}
                    className="h-[1.18em] flex items-center justify-center leading-none text-luxury-burgundy"
                  >
                    {glyph}
                  </span>
                ))}
              </motion.span>
            </span>
          );
        })}
      </span>

      {/* Capa de Reflejo Espejo Exclusivo activada al completar el giro */}
      {allLocked && (
        <span
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none text-mirror-sheen text-center flex items-center justify-center leading-none"
        >
          {text}
        </span>
      )}
    </div>
  );
}
