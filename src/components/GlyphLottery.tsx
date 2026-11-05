"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GlyphLotteryProps {
  text: string;
  className?: string;
  reelLength?: number;
  duration?: number;
  stagger?: number;
  charset?: string;
  onClick?: () => void;
}

const DEFAULT_CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function GlyphLottery({
  text = "CASA PRIVÉ",
  className = "",
  reelLength = 16,
  duration = 1.1,
  stagger = 0.065,
  charset = DEFAULT_CHARSET,
}: GlyphLotteryProps) {
  const [spinKey, setSpinKey] = useState(0);
  const [lockedIndices, setLockedIndices] = useState<Set<number>>(new Set());
  const [allLocked, setAllLocked] = useState(false);

  // Generar tiras de glifos para cada carácter
  const reels = useMemo(() => {
    return text.split("").map((char) => {
      if (char === " ") return null;

      const items: string[] = [];
      for (let i = 0; i < reelLength - 1; i++) {
        const randomChar = charset[Math.floor(Math.random() * charset.length)];
        items.push(randomChar);
      }
      items.push(char); // El último carácter es el destino real
      return items;
    });
  }, [text, reelLength, charset, spinKey]);

  // Manejar el bloqueo secuencial de cada carrete
  const triggerSpin = useCallback(() => {
    setLockedIndices(new Set());
    setAllLocked(false);
    setSpinKey((prev) => prev + 1);

    // Notificar el bloqueo secuencial de cada letra
    text.split("").forEach((char, index) => {
      if (char === " ") return;
      const lockTime = (duration + index * stagger) * 1000;
      setTimeout(() => {
        setLockedIndices((prev) => new Set([...prev, index]));
      }, lockTime - 120);
    });

    const totalTime = (duration + text.length * stagger + 0.3) * 1000;
    setTimeout(() => {
      setAllLocked(true);
    }, totalTime);
  }, [text, duration, stagger]);

  useEffect(() => {
    triggerSpin();
  }, [triggerSpin]);

  return (
    <div
      role="heading"
      aria-level={1}
      aria-label={text}
      onClick={triggerSpin}
      title="Toca para girar de nuevo"
      className={`relative inline-flex items-center justify-center select-none cursor-pointer touch-manipulation active:scale-[0.98] transition-transform ${className}`}
    >
      {/* Contenedor de carretes tipo slot machine */}
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

          const isLocked = lockedIndices.has(index);

          return (
            <span
              key={`char-${index}-${spinKey}`}
              className="relative inline-block h-[1.18em] overflow-hidden leading-none align-middle"
              style={{ width: "auto" }}
            >
              <motion.span
                initial={{ y: "0%" }}
                animate={{ y: `-${((reel.length - 1) / reel.length) * 100}%` }}
                transition={{
                  duration: duration + index * stagger,
                  ease: [0.16, 0.9, 0.22, 1], // Curva de desaceleración tipo slot machine
                }}
                className="flex flex-col items-center"
              >
                {reel.map((glyph, gIndex) => {
                  const isTarget = gIndex === reel.length - 1;
                  return (
                    <span
                      key={gIndex}
                      className={`h-[1.18em] flex items-center justify-center leading-none transition-colors duration-200 ${
                        isTarget && isLocked
                          ? "text-luxury-burgundy"
                          : "text-luxury-burgundy/60"
                      }`}
                    >
                      {glyph}
                    </span>
                  );
                })}
              </motion.span>

              {/* Destello sutil dorado/champagne al momento de encajar el carrete */}
              {isLocked && !allLocked && (
                <motion.span
                  initial={{ opacity: 0.8, scale: 1.15 }}
                  animate={{ opacity: 0, scale: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 pointer-events-none text-luxury-champagne font-bold flex items-center justify-center leading-none"
                >
                  {char}
                </motion.span>
              )}
            </span>
          );
        })}
      </span>

      {/* Capa de Reflejo Espejo Exclusivo (text-mirror-sheen) cuando todos los carretes están bloqueados */}
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
