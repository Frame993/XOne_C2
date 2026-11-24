import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "../ui/utils";
import { useInView, useReducedMotion } from "./hooks";
import { FullLine } from "./GridLines";

/** Aparición al hacer scroll (fade-in-up). `delay` en pasos de 80ms para escalonar celdas. */
export function Reveal({ as: Tag = "div", delay = 0, className, children, ...rest }: { as?: ElementType; delay?: number; className?: string; children: ReactNode } & Record<string, unknown>) {
  const [ref, inView] = useInView<HTMLElement>({ once: true });
  return (
    <Tag ref={ref} data-reveal={inView ? "in" : "out"} style={{ "--xo-reveal-delay": `${delay * 80}ms` } as CSSProperties} className={className} {...rest}>
      {children}
    </Tag>
  );
}

/** Cuenta hasta el valor al entrar en pantalla. Mantiene prefijos/sufijos ("+20", "70 %"). */
export function CountUp({ value, duration = 1200 }: { value: string; duration?: number }) {
  const m = value.match(/^(\D*)(\d+)(.*)$/);
  const [ref, inView] = useInView<HTMLSpanElement>({ once: true });
  const reduced = useReducedMotion();
  const target = m ? parseInt(m[2], 10) : 0;
  const [n, setN] = useState(reduced || !m ? target : 0);
  useEffect(() => {
    if (!m || !inView || reduced) { setN(target); return; }
    let raf = 0;
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduced, target]);
  if (!m) return <span>{value}</span>;
  return (
    <span ref={ref}>
      <span className="sr-only">{value}</span>
      <span aria-hidden>{m[1]}{n}{m[3]}</span>
    </span>
  );
}

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/\\<>=+*#";

/** Texto que rota entre palabras con efecto "scramble" (como "Scraping…" de la referencia). */
export function Scramble({ words, interval = 2600, className }: { words: string[]; interval?: number; className?: string }) {
  const reduced = useReducedMotion();
  const [text, setText] = useState(words[0]);
  const idx = useRef(0);
  useEffect(() => {
    if (reduced || words.length < 2) return;
    let raf = 0;
    const id = setInterval(() => {
      idx.current = (idx.current + 1) % words.length;
      const target = words[idx.current];
      const t0 = performance.now();
      const run = (now: number) => {
        const p = Math.min(1, (now - t0) / 600);
        const keep = Math.floor(target.length * p);
        setText(target.slice(0, keep) + [...target.slice(keep)].map((c) => (c === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)])).join(""));
        if (p < 1) raf = requestAnimationFrame(run);
      };
      raf = requestAnimationFrame(run);
    }, interval);
    return () => { clearInterval(id); cancelAnimationFrame(raf); };
  }, [words, interval, reduced]);
  return (
    <span className={cn("inline-block font-mono", className)}>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden>{text}</span>
    </span>
  );
}

/** Marquee horizontal genérico; duplica el contenido y se pausa al pasar el ratón. */
export function Marquee({ children, duration = 60, className, label }: { children: ReactNode; duration?: number; className?: string; label: string }) {
  return (
    <div className={cn("relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]", className)} role="region" aria-label={label}>
      <div className="xo-marquee flex w-max" style={{ animationDuration: `${duration}s` }}>
        <div className="flex">{children}</div>
        <div className="flex" aria-hidden>{children}</div>
      </div>
    </div>
  );
}

/** Fila separadora entre secciones (medida en la referencia: 92px móvil / 140px desktop), un solo bloque con esquinas curvy. */
export function GridSpacer({ nodesTop = true, nodesBottom = true }: { nodesTop?: boolean; nodesBottom?: boolean }) {
  return (
    <div aria-hidden className="relative">
      <FullLine position="top" nodes={nodesTop} />
      <FullLine position="bottom" nodes={nodesBottom} />
      <div className="xo-container xo-rails xo-curvy h-[92px] lg:h-[140px]" />
    </div>
  );
}
