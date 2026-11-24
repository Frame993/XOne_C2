import { useEffect, useRef } from "react";
import { cn } from "../ui/utils";
import { setupCanvas, useReducedMotion, useTokenColors, withAlpha } from "./hooks";

/**
 * Rejilla animada del hero, con la misma construcción que la referencia:
 * - NO es full width: ocupa el contenedor + 1 columna a cada lado (13 × 101px = 1314px).
 * - Sólo filas completas: la altura se recorta a un múltiplo de la celda, así nunca queda una fila cortada.
 * - Bloque central fusionado (centerCols × filas tras la primera) donde vive el contenido del hero.
 * - Celdas laterales que se iluminan y glifos de píxel abstractos.
 */
const GLYPHS = [
  ["111", "111", "111"],
  ["101", "010", "101"],
  ["1100", "1100", "0011", "0011"],
  ["10101", "00000", "10101", "00000", "10101"],
  ["0001", "0011", "0111", "1111"],
];

export const GRID_CELL = 100;
export const GRID_STEP = GRID_CELL + 1;

type Lit = { c: number; r: number; t0: number; dur: number; glyph: number | null };

export function GridCanvas({ cols = 13, centerCols = 7, topRows = 1, className }: { cols?: number; centerCols?: number; topRows?: number; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  const colors = useTokenColors(ref, { line: "--xo-color-border-faint", bg: "--xo-color-bg-base", dot: "--xo-color-border-loud", fill: "--xo-color-fx-cell", glyph: "--xo-color-fx-glyph" });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || !colors) return;
    let raf = 0;
    let { ctx, w, h } = setupCanvas(canvas);
    const c0 = Math.floor((cols - centerCols) / 2); // primera columna del bloque central
    const rows = () => Math.max(1, Math.floor((h - 1) / GRID_STEP));
    const inCenter = (c: number, r: number) => r >= topRows && c >= c0 && c < c0 + centerCols;
    const lit: Lit[] = [];
    const spawn = (now: number, age = 0): Lit | null => {
      for (let tries = 0; tries < 20; tries++) {
        const c = Math.floor(Math.random() * cols), r = Math.floor(Math.random() * rows());
        if (!inCenter(c, r) && !lit.some((l) => l.c === c && l.r === r)) return { c, r, t0: now - age, dur: 3500 + Math.random() * 3000, glyph: Math.random() < 0.4 ? Math.floor(Math.random() * GLYPHS.length) : null };
      }
      return null;
    };
    const rr = (x: number, y: number, cw: number, ch: number) => { ctx.beginPath(); ctx.roundRect(x, y, cw, ch, 8); };

    const draw = (now: number) => {
      const R = rows();
      const gridH = R * GRID_STEP + 1;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = colors.line;
      ctx.fillRect(0, 0, cols * GRID_STEP + 1, gridH);
      for (let r = 0; r < R; r++) {
        for (let c = 0; c < cols; c++) {
          if (inCenter(c, r)) continue;
          const x = c * GRID_STEP + 1, y = r * GRID_STEP + 1;
          ctx.fillStyle = colors.bg; rr(x, y, GRID_CELL, GRID_CELL); ctx.fill();
          ctx.fillStyle = colors.dot; ctx.fillRect(x + GRID_CELL / 2 - 1, y + GRID_CELL / 2 - 1, 2, 2);
        }
      }
      // bloque central fusionado
      if (R > topRows) {
        ctx.fillStyle = colors.bg;
        rr(c0 * GRID_STEP + 1, topRows * GRID_STEP + 1, centerCols * GRID_STEP - 1, (R - topRows) * GRID_STEP - 1);
        ctx.fill();
      }
      for (const l of lit) {
        if (l.r >= R) continue;
        const a = Math.sin(Math.min(1, Math.max(0, (now - l.t0) / l.dur)) * Math.PI);
        const x = l.c * GRID_STEP + 1, y = l.r * GRID_STEP + 1;
        ctx.fillStyle = withAlpha(colors.fill, 0.06 * a); rr(x, y, GRID_CELL, GRID_CELL); ctx.fill();
        if (l.glyph !== null) {
          const g = GLYPHS[l.glyph], px = 4, gw = g[0].length * px, gh = g.length * px;
          ctx.fillStyle = withAlpha(colors.glyph, 0.5 * a);
          g.forEach((row, ry) => [...row].forEach((v, rx) => v === "1" && ctx.fillRect(x + (GRID_CELL - gw) / 2 + rx * px, y + (GRID_CELL - gh) / 2 + ry * px, px - 1, px - 1)));
        }
      }
    };

    const tick = (now: number) => {
      for (let i = lit.length - 1; i >= 0; i--) if (now - lit[i].t0 > lit[i].dur) lit.splice(i, 1);
      if (lit.length < 9 && Math.random() < 0.04) { const l = spawn(now); if (l) lit.push(l); }
      draw(now);
      raf = requestAnimationFrame(tick);
    };
    const now = performance.now();
    for (let i = 0; i < 7; i++) { const l = spawn(now, Math.random() * 3000); if (l) lit.push(l); }
    if (reduced) draw(now); else raf = requestAnimationFrame(tick);

    const ro = new ResizeObserver(() => { ({ ctx, w, h } = setupCanvas(canvas)); draw(performance.now()); });
    ro.observe(canvas);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [colors, reduced, cols, centerCols, topRows]);

  return <canvas ref={ref} aria-hidden className={cn("pointer-events-none block", className)} style={{ width: cols * GRID_STEP + 1 }} />;
}
