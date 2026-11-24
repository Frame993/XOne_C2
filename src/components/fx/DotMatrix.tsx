import { useEffect, useRef } from "react";
import { cn } from "../ui/utils";
import { setupCanvas, useInView, useReducedMotion, useTokenColors, withAlpha } from "./hooks";

/**
 * Arte de caracteres animado y abstracto (equivalente al ASCII "illuminate" de la referencia). Modos:
 *  - "blob":   masa orgánica que respira, para acompañar titulares.
 *  - "field":  campo ondulado tenue para fondos.
 *  - "fountain": dos fuentes de puntos que suben (CTA).
 */
const CHARS = " .·:-=+x*#";
export function DotMatrix({ mode = "field", className, cellW = 9, cellH = 12, fps = 12, colorVar = "--xo-color-fx-matrix" }: { mode?: "blob" | "field" | "fountain"; className?: string; cellW?: number; cellH?: number; fps?: number; colorVar?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const [wrap, inView] = useInView<HTMLDivElement>();
  const reduced = useReducedMotion();
  const colors = useTokenColors(ref, { ink: colorVar, accent: "--xo-color-fx-glyph" });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || !colors) return;
    let { ctx, w, h } = setupCanvas(canvas);
    let cols = Math.floor(w / cellW), rows = Math.floor(h / cellH);
    let raf = 0, last = 0;
    const font = `${cellH - 2}px 'Geist Mono', ui-monospace, monospace`;

    const intensity = (cx: number, cy: number, t: number) => {
      const u = cx / cols, v = cy / rows;
      if (mode === "blob") {
        // masa abstracta: distancia a un centro que se deforma con el tiempo
        const dx = (u - 0.5) * 2, dy = (v - 0.5) * 2;
        const ang = Math.atan2(dy, dx);
        const r = Math.hypot(dx, dy);
        const edge = 0.72 + 0.12 * Math.sin(ang * 3 + t * 0.7) + 0.08 * Math.sin(ang * 5 - t * 0.5);
        if (r > edge) return 0;
        const sweep = 0.5 + 0.5 * Math.sin((u + v) * 6 - t * 1.2);
        return (1 - r / edge) * 0.6 + 0.4 * sweep * (1 - r / edge);
      }
      if (mode === "fountain") {
        // montículo de puntos que "burbujea" desde abajo (como los de la CTA de la referencia)
        const d = Math.abs(u - 0.5) * 2;
        const peak = 0.85 * (1 - d * d);
        const up = 1 - v;
        if (up > peak) return 0;
        const n = Math.sin(cx * 12.9898 + cy * 78.233) * 43758.5453;
        const rnd = n - Math.floor(n);
        const flicker = 0.5 + 0.5 * Math.sin(t * 3 + rnd * 20);
        const density = 1 - up / Math.max(peak, 0.01);
        return rnd < 0.35 + 0.5 * density ? (0.35 + 0.65 * density) * flicker : 0;
      }
      const wave = Math.sin(u * 9 + t * 0.8) * Math.cos(v * 7 - t * 0.6) + Math.sin((u + v) * 5 + t * 0.4);
      const edge = Math.min(1, Math.min(u, 1 - u) * 6) * Math.min(1, Math.min(v, 1 - v) * 6);
      return Math.max(0, (wave + 0.6) / 2.6) * edge;
    };

    const draw = (now: number) => {
      const t = now / 1000;
      ctx.clearRect(0, 0, w, h);
      ctx.font = font;
      ctx.textBaseline = "top";
      for (let cy = 0; cy < rows; cy++) {
        for (let cx = 0; cx < cols; cx++) {
          const i = intensity(cx, cy, t);
          if (i < 0.08) continue;
          const ch = CHARS[Math.min(CHARS.length - 1, Math.floor(i * CHARS.length))];
          const hot = mode !== "field" && i > 0.85;
          ctx.fillStyle = withAlpha(hot ? colors.accent : colors.ink, hot ? 0.9 : 0.25 + i * 0.6);
          if (mode === "fountain") ctx.fillRect(cx * cellW + cellW / 2 - 1, cy * cellH + cellH / 2 - 1, 2, 2);
          else ctx.fillText(ch, cx * cellW, cy * cellH);
        }
      }
    };

    const loop = (now: number) => {
      if (now - last > 1000 / fps) { draw(now); last = now; }
      raf = requestAnimationFrame(loop);
    };
    draw(performance.now());
    if (!reduced && inView) raf = requestAnimationFrame(loop);

    const ro = new ResizeObserver(() => { ({ ctx, w, h } = setupCanvas(canvas)); cols = Math.floor(w / cellW); rows = Math.floor(h / cellH); draw(performance.now()); });
    ro.observe(canvas);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [colors, reduced, inView, mode, cellW, cellH, fps]);

  return (
    <div ref={wrap} aria-hidden className={cn("pointer-events-none absolute", className)}>
      <canvas ref={ref} className="size-full" />
    </div>
  );
}
