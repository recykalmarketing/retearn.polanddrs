"use client";

import { useEffect, useRef, type RefObject } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";

const FRAME_COUNT = 102;
const framePath = (i: number) => `/videos/rvm-frames/frame_${String(i).padStart(4, "0")}.webp`;

export function RvmScrollFrames({ containerRef }: { containerRef: RefObject<HTMLElement> }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const loadedRef = useRef<Set<number>>(new Set());
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    let cancelled = false;
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new window.Image();
      img.onload = img.onerror = () => {
        if (!cancelled) loadedRef.current.add(i);
      };
      img.src = framePath(i);
    }
    return () => {
      cancelled = true;
    };
  }, []);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (reduce || !imgRef.current) return;
    const idx = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(latest)));
    // Hold on the last frame that actually finished loading instead of
    // flashing a blank image while the network catches up.
    if (loadedRef.current.has(idx)) {
      imgRef.current.src = framePath(idx);
    }
  });

  return (
    <img
      ref={imgRef}
      src={framePath(0)}
      alt="Retearn compact reverse vending machine, rotating product view"
      className="rvm-scroll-image"
    />
  );
}
