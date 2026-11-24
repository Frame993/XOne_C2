import { useEffect, useRef } from "react";
import { cn } from "../ui/utils";
import { GLYPHS } from "./GridCanvas";
import { setupCanvas, useInView, useReducedMotion, useTokenColors, withAlpha } from "./hooks";

/**
 * Campo de glifos de píxel: la abstracción propia de XONE fuera de la rejilla del hero/CTA.
 * Retícula de celdas invisibles con un punto tenue en el centro; algunas celdas "se encienden"
 * y su glifo se compone píxel a píxel (barrido), se mantiene y se apaga.
 *  - fade: "left" | "right" | "none" — atenúa hacia el centro para no competir con el texto.
 *  - colorVar: token del color de glifo (en la banda de señal se usa blanco).
 */
type Lit = { c: number; r: number; g: number; t0: number; dur: number; order: number[] };

export function GlyphField({ className, cell = 40, px = 4, lit: litCount = 6, fade = "none", colorVar = "--xo-color-fx-glyph", dotVar = "--xo-color-border-loud" }: { className?: string; cell?: number; px?: number; lit?: number; fade?: "left" | "right" | "none"; colorVar?: string; dotVar?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const [wrap, inView] = useInView<HTMLDivElement>();
  const reduced = useReducedMotion();
  const colors = useTokenColors(ref, { glyph: colorVar, dot: dotVar });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || !colors) return;
    let { ctx, w, h } = setupCanvas(canvas);
    let cols = Math.max(1, Math.floor(w / cell)), rows = Math.max(1, Math.floor(h / cell));
    let ox = (w - cols * cell) / 2, oy = (h - rows * cell) / 2;
    let raf = 0;
    const lits: Lit[] = [];
    const weight = (c: number) => (fade === "left" ? 1 - c / cols : fade === "right" ? (c + 1) / cols : 1);

    const spawn = (now: number, age = 0) => {
      for (let tries = 0; tries < 20; tries++) {
        const c = Math.floor(Math.random() * cols), r = Math.floor(Math.random() * rows);
        if (Math.random() > weight(c) || lits.some((l) => Math.abs(l.c - c) < 2 && Math.abs(l.r - r) < 2)) continue;
        const g = Math.floor(Math.random() * GLYPHS.length);
        const n = GLYPHS[g].length * GLYPHS[g][0].length;
        lits.push({ c, r, g, t0: now - age, dur: 2600 + Math.random() * 2600, order: [...Array(n).keys()].sort(() => Math.random() - 0.5) });
        return;
      }
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, w, h);
      for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
        ctx.fillStyle = withAlpha(colors.dot, 0.7 * weight(c));
        ctx.fillRect(ox + c * cell + cell / 2 - 1, oy + r * cell + cell / 2 - 1, 2, 2);
      }
      for (const l of lits) {
        const p = Math.min(1, Math.max(0, (now - l.t0) / l.dur));
        // 0–0.3 se compone, 0.3–0.75 se mantiene, 0.75–1 se apaga
        const built = reduced ? 1 : Math.min(1, p / 0.3);
        const a = (p < 0.75 ? 1 : 1 - (p - 0.75) / 0.25) * weight(l.c);
        const g = GLYPHS[l.g], gw = g[0].length * px, gh = g.length * px;
        const x0 = ox + l.c * cell + (cell - gw) / 2, y0 = oy + l.r * cell + (cell - gh) / 2;
        ctx.fillStyle = withAlpha(colors.glyph, 0.85 * a);
        const shown = Math.ceil(built * l.order.length);
        for (let k = 0; k < shown; k++) {
          const idx = l.order[k], ry = Math.floor(idx / g[0].length), rx = idx % g[0].length;
          if (g[ry][rx] === "1") ctx.fillRect(x0 + rx * px, y0 + ry * px, px - 1, px - 1);
        }
      }
    };
    const tick = (now: number) => {
      for (let i = lits.length - 1; i >= 0; i--) if (now - lits[i].t0 > lits[i].dur) lits.splice(i, 1);
      if (lits.length < litCount && Math.random() < 0.05) spawn(now);
      draw(now);
      raf = requestAnimationFrame(tick);
    };
    const now = performance.now();
    for (let i = 0; i < litCount; i++) spawn(now, reduced ? 1000 : Math.random() * 2000);
    if (reduced || !inView) draw(now + (reduced ? 0 : 0)); else raf = requestAnimationFrame(tick);
    const ro = new ResizeObserver(() => { ({ ctx, w, h } = setupCanvas(canvas)); cols = Math.max(1, Math.floor(w / cell)); rows = Math.max(1, Math.floor(h / cell)); ox = (w - cols * cell) / 2; oy = (h - rows * cell) / 2; lits.length = 0; for (let i = 0; i < litCount; i++) spawn(performance.now(), 1000); draw(performance.now()); });
    ro.observe(canvas);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [colors, reduced, inView, cell, px, litCount, fade]);

  return (
    <div ref={wrap} aria-hidden className={cn("pointer-events-none absolute", className)}>
      <canvas ref={ref} className="size-full" />
    </div>
  );
}
