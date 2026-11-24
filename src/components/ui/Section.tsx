import type { ReactNode } from "react";
import { cn } from "./utils";
import { Connector, FullLine, RAILS } from "../fx/GridLines";

/** Índice de sección: 01 / 07 » ETIQUETA. Decorativo: aria-hidden. */
export function SectionIndex({ n, total, label }: { n: number; total: number; label: string }) {
  const pad = (x: number) => String(x).padStart(2, "0");
  return (
    <div className="relative" aria-hidden="true">
      <FullLine position="bottom" center centerHalf="top" />
      <span className="pointer-events-none absolute inset-x-0 top-0 z-[3] hidden lg:block"><Connector half="bottom" style={{ top: -0.5, left: RAILS.mid }} /></span>
      <div className="xo-container xo-rails grid lg:grid-cols-2">
        <div className="xo-curvy flex items-center gap-3 py-6 pr-7 pl-7 type-overline lg:py-[45px] lg:border-r lg:border-line-faint">
          <span className="absolute top-1/2 left-0 h-4 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-accent" />
          <span className="text-fg-accent">{pad(n)}</span>
          <span className="text-fg-muted">/ {pad(total)}</span>
          <span className="text-fg-muted">»</span>
          <span className="text-fg-muted">{label}</span>
        </div>
        <div className="xo-curvy hidden lg:block" />
      </div>
    </div>
  );
}

/** Eyebrow con los chevrones del logo en lugar de las barras "//" de la referencia. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-pill border border-line bg-surface px-3 py-1 type-overline text-fg-secondary shadow-xs", className)}>
      <svg aria-hidden viewBox="15.78 0 20.1 23.67" className="h-2.5 w-auto"><polygon fill="var(--xo-color-brand-symbol)" points="22.53 0 15.78 0 22.48 11.84 15.78 23.67 22.53 23.67 29.18 11.84 22.53 0" /><polygon fill="var(--xo-color-brand-wordmark)" points="35.88 0 29.13 0 26.97 3.83 30.33 9.8 35.88 0" /><polygon fill="var(--xo-color-brand-wordmark)" points="26.97 19.84 29.13 23.67 35.88 23.67 30.33 13.87 26.97 19.84" /></svg>
      {children}
    </span>
  );
}

/** Titular de sección: `accent` es la palabra resaltada en color de marca. */
export function SectionHeading({ eyebrow, title, accent, after, subtitle, align = "center", as: H = "h2", className }: { eyebrow?: string; title: string; accent?: string; after?: string; subtitle?: ReactNode; align?: "center" | "left"; as?: "h1" | "h2"; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-4", align === "center" ? "items-center text-center" : "items-start", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <H className="text-balance text-fg type-title-sm md:type-title-md lg:type-title">
        {title}
        {accent && <> <span className="text-fg-accent-display">{accent}</span></>}
        {after && <> {after}</>}
      </H>
      {subtitle && <p className={cn("max-w-prose text-pretty text-fg-secondary type-body md:type-lead", align === "center" && "mx-auto")}>{subtitle}</p>}
    </div>
  );
}

export function Section({ id, children, className, label }: { id?: string; children: ReactNode; className?: string; label?: string }) {
  return (
    <section id={id} aria-label={label} className={cn("xo-container xo-rails", className)}>
      {children}
    </section>
  );
}
