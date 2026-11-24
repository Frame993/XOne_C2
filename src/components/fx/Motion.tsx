import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "../ui/utils";
import { useInView, useReducedMotion } from "./hooks";

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

/** Marca de intersección de rejilla: estrella de 4 puntas en cian dentro de un anillo. */
export function Spark({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <span aria-hidden style={style} className={cn("pointer-events-none absolute z-10 inline-flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-pill border border-line-faint bg-bg", className)}>
      <svg viewBox="0 0 16 16" className="size-4 animate-[xo-twinkle_var(--xo-duration-ambient)_var(--xo-easing-in-out)_infinite]"><path d="M8 0l1.6 6.4L16 8l-6.4 1.6L8 16l-1.6-6.4L0 8l6.4-1.6z" fill="var(--xo-color-fx-glyph)" /></svg>
    </span>
  );
}

/** Fila separadora de rejilla vacía entre secciones, con cruces en las intersecciones. */
export function GridSpacer({ split = true }: { split?: boolean }) {
  return (
    <div aria-hidden className="xo-container xo-rails relative grid h-16 border-b border-line-faint md:h-24 md:grid-cols-2">
      {split && <div className="hidden border-r border-line-faint md:block" />}
      <Cross className="top-full left-0" />
      <Cross className="top-full left-full" />
      {split && <Cross className="top-full left-1/2 hidden md:block" />}
    </div>
  );
}

export function Cross({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 11 11" className={cn("pointer-events-none absolute z-10 size-[11px] -translate-x-1/2 -translate-y-1/2 text-line-loud", className)}>
      <path d="M5.5 0v11M0 5.5h11" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
