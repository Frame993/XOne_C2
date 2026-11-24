import { useEffect, useRef } from "react";
import { cn } from "../ui/utils";
import { setupCanvas, useReducedMotion, useTokenColors, withAlpha } from "./hooks";

/**
 * Rejilla decorativa (hero, CTA). Construcción:
 *  - 13 columnas de 101px (contenedor + 1 columna exterior por lado) y sólo filas completas.
 *  - Columnas exteriores: una celda alta (ahí viven las etiquetas de esquina).
 *  - Zonas laterales: celdas de 1 o 2 filas de alto en patrón irregular y simétrico.
 *  - Bloque central fusionado donde vive el contenido.
 *  - Celdas redondeadas (radio 8) separadas por líneas de 1px; algunas se iluminan con un relleno tenue (sin símbolos).
 */
export const GLYPHS: string[][] = [
  ["111", "111", "111"],
  ["101", "010", "101"],
  ["1100", "1100", "0011", "0011"],
  ["10101", "00000", "10101", "00000", "10101"],
  ["0001", "0011", "0111", "1111"],
];

export const GRID_CELL = 100;
export const GRID_STEP = GRID_CELL + 1;

type Rect = { c: number; r: number; w: number; h: number; side: boolean };
type Lit = { i: number; t0: number; dur: number };

function layout(cols: number, rows: number, centerCols: number, topRows: number): Rect[] {
  const c0 = Math.floor((cols - centerCols) / 2);
  const rects: Rect[] = [];
  // columnas exteriores: una celda alta
  rects.push({ c: 0, r: 0, w: 1, h: rows, side: false }, { c: cols - 1, r: 0, w: 1, h: rows, side: false });
  // zonas laterales con alturas 1/2 deterministas y en espejo
  for (let c = 1; c < c0; c++) {
    let r = 0;
    let k = c * 7;
    while (r < rows) {
      const h = r + 1 < rows && (k++ * 5) % 3 === 0 ? 2 : 1;
      rects.push({ c, r, w: 1, h, side: true }, { c: cols - 1 - c, r, w: 1, h, side: true });
      r += h;
    }
  }
  // franja superior sobre el bloque central
  for (let r = 0; r < Math.min(topRows, rows); r++) for (let c = c0; c < c0 + centerCols; c++) rects.push({ c, r, w: 1, h: 1, side: true });
  if (rows > topRows) rects.push({ c: c0, r: topRows, w: centerCols, h: rows - topRows, side: false });
  return rects;
}

/**
 * mirror: cada celda se enciende a la vez que su simétrica (concepto "sincronización" del CTA).
 */
export function GridCanvas({ cols = 13, centerCols = 7, topRows = 1, lit: litCount = 8, mirror = false, className }: { cols?: number; centerCols?: number; topRows?: number; lit?: number; mirror?: boolean; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  const colors = useTokenColors(ref, { line: "--xo-color-border-faint", bg: "--xo-color-bg-base", dot: "--xo-color-border-loud", fill: "--xo-color-fx-cell" });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || !colors) return;
    let raf = 0;
    let { ctx, w, h } = setupCanvas(canvas);
    let R = Math.max(1, Math.floor(h / GRID_STEP));
    let rects = layout(cols, R, centerCols, topRows);
    const lits: Lit[] = [];
    const candidates = () => rects.map((r, i) => (r.side ? i : -1)).filter((i) => i >= 0);
    const spawn = (now: number, age = 0) => {
      const pool = candidates().filter((i) => !lits.some((l) => l.i === i));
      if (!pool.length) return;
      const i = pool[Math.floor(Math.random() * pool.length)];
      const lit: Lit = { i, t0: now - age, dur: 3500 + Math.random() * 3000 };
      lits.push(lit);
      if (mirror) {
        const q = rects[i];
        const m = rects.findIndex((o) => o.side && o.c === cols - 1 - q.c && o.r === q.r && o.h === q.h);
        if (m >= 0 && m !== i && !lits.some((l) => l.i === m)) lits.push({ ...lit, i: m, t0: lit.t0 + 450 });
      }
    };
    const rr = (x: number, y: number, cw: number, ch: number) => { ctx.beginPath(); ctx.roundRect(x, y, cw, ch, 8); };
    // Sin contorno exterior: las celdas llegan a los bordes del lienzo, porque el borde del marco (izq./der.) y las líneas de
    // frontera (arriba/abajo) ya pintan esas líneas; si el lienzo dibujara las suyas quedarían dos líneas de 1px pegadas (2px).
    // La última fila se alarga hasta la penúltima fila de píxeles: la última es la línea inferior de la sección.
    const box = (q: Rect) => { const y = q.r * GRID_STEP; return { x: q.c * GRID_STEP, y, cw: q.w * GRID_STEP - 1, ch: (q.r + q.h >= R ? h - 1 : (q.r + q.h) * GRID_STEP - 1) - y }; };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = colors.line;
      ctx.fillRect(0, 0, w, h);
      for (const q of rects) {
        const { x, y, cw, ch } = box(q);
        ctx.fillStyle = colors.bg; rr(x, y, cw, ch); ctx.fill();
        if (q.side) { ctx.fillStyle = colors.dot; for (let k = 0; k < q.h; k++) ctx.fillRect(x + cw / 2 - 1, y + k * GRID_STEP + GRID_CELL / 2 - 1, 2, 2); }
      }
      for (const l of lits) {
        const q = rects[l.i]; if (!q) continue;
        const a = Math.sin(Math.min(1, Math.max(0, (now - l.t0) / l.dur)) * Math.PI);
        const { x, y, cw, ch } = box(q);
        ctx.fillStyle = withAlpha(colors.fill, 0.06 * a * (q.h > 1 ? 0.55 : 1)); rr(x, y, cw, ch); ctx.fill();
      }
    };
    const tick = (now: number) => {
      for (let i = lits.length - 1; i >= 0; i--) if (now - lits[i].t0 > lits[i].dur) lits.splice(i, 1);
      if (lits.length < litCount * (mirror ? 2 : 1) && Math.random() < 0.04) spawn(now);
      draw(now);
      raf = requestAnimationFrame(tick);
    };
    const now = performance.now();
    for (let i = 0; i < Math.ceil(litCount * 0.7); i++) spawn(now, Math.random() * 3000);
    if (reduced) draw(now); else raf = requestAnimationFrame(tick);
    const ro = new ResizeObserver(() => { ({ ctx, w, h } = setupCanvas(canvas)); R = Math.max(1, Math.floor(h / GRID_STEP)); rects = layout(cols, R, centerCols, topRows); lits.length = 0; draw(performance.now()); });
    ro.observe(canvas);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [colors, reduced, cols, centerCols, topRows, litCount, mirror]);

  return <canvas ref={ref} aria-hidden className={cn("pointer-events-none block", className)} style={{ width: cols * GRID_STEP - 1 }} />;
}
