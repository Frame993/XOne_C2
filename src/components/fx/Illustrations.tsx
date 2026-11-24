import { useEffect, useState } from "react";
import { cn } from "../ui/utils";
import { Icon } from "../ui/Icon";
import { useInView, useReducedMotion } from "./hooks";

/** Mini-ilustraciones animadas para las celdas (equivalentes a las de la referencia, con contenido XONE). */

const frame = "relative h-48 overflow-hidden rounded-lg border border-line-faint bg-surface shadow-xs";

/** 01 · Un código → cuatro plataformas. Líneas discontinuas con flujo y chips que se activan en secuencia. */
export function PlatformsIllo() {
  const [i, setI] = useActiveIndex(4, 1400);
  const chips = ["Android", "iOS", "Windows", "Web / PWA"];
  return (
    <div className={frame} aria-hidden>
      <div className="xo-dot-grid absolute inset-0 opacity-50" />
      <svg viewBox="0 0 400 192" className="absolute inset-0 size-full" preserveAspectRatio="none">
        {[38, 78, 116, 154].map((y, k) => (
          <path key={y} d={`M150 96 C 200 96, 210 ${y}, 260 ${y}`} fill="none" stroke={k === i ? "var(--xo-color-fx-glyph)" : "var(--xo-color-border-loud)"} strokeWidth="1.25" strokeDasharray="4 4" className="xo-flow" />
        ))}
      </svg>
      <div className="absolute top-1/2 left-[14%] flex -translate-y-1/2 items-center gap-2 rounded-md border border-line bg-surface px-3 py-2 font-mono text-xs text-fg shadow-card">
        <Icon name="code" className="text-fg-accent" /> app.xone
      </div>
      <ul className="absolute top-0 right-[6%] flex h-full flex-col justify-center gap-2">
        {chips.map((c, k) => (
          <li key={c} onMouseEnter={() => setI(k)} className={cn("flex items-center gap-1.5 rounded-sm border px-2 py-1 font-mono text-2xs uppercase tracking-caps transition-colors duration-(--xo-duration-slow)", k === i ? "border-accent-border bg-accent-subtle text-accent-subtle-fg" : "border-line-faint bg-surface text-fg-muted")}>
            <span className={cn("size-1.5 rounded-pill", k === i ? "bg-accent" : "bg-line-loud")} />{c}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** 02 · Seguridad: anillos concéntricos girando lentamente alrededor de un escudo. */
export function SecurityIllo() {
  return (
    <div className={frame} aria-hidden>
      <div className="absolute inset-0 flex items-center justify-center">
        {[176, 128, 84].map((s, k) => (
          <span key={s} className={cn("absolute rounded-pill border border-dashed", k === 2 ? "border-accent-border" : "border-line")} style={{ width: s, height: s, animation: `xo-orbit ${k % 2 ? "var(--xo-duration-orbit)" : "calc(var(--xo-duration-orbit) * 0.6)"} linear infinite ${k % 2 ? "reverse" : ""}` }}>
            <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-pill bg-accent" />
          </span>
        ))}
        <span className="relative z-10 inline-flex size-12 items-center justify-center rounded-lg border border-accent-border bg-accent-subtle text-accent-subtle-fg shadow-card"><Icon name="shield" size={22} /></span>
      </div>
      <span className="absolute top-3 left-3 rounded-xs border border-line-faint bg-surface px-1.5 py-0.5 font-mono text-2xs text-fg-muted">ENS</span>
      <span className="absolute right-3 bottom-3 rounded-xs border border-line-faint bg-surface px-1.5 py-0.5 font-mono text-2xs text-fg-muted">ISO 27001</span>
    </div>
  );
}

/** 03 · Siempre operativa: la app sigue funcionando sin cobertura y sincroniza al volver. */
export function OfflineIllo() {
  const states = [
    { label: "Sin cobertura", tone: "warning", icon: "signal" as const, progress: 0 },
    { label: "Trabajando en local", tone: "neutral", icon: "device" as const, progress: 0 },
    { label: "Sincronizando", tone: "brand", icon: "refresh" as const, progress: 1 },
    { label: "Al día", tone: "success", icon: "check" as const, progress: 1 },
  ];
  const [i] = useActiveIndex(states.length, 1800);
  const s = states[i];
  const tone = { warning: "bg-warning-bg text-warning", neutral: "bg-hover text-fg-secondary", brand: "bg-accent-subtle text-accent-subtle-fg", success: "bg-success-bg text-success" }[s.tone];
  return (
    <div className={cn(frame, "flex items-center justify-center")} aria-hidden>
      <div className="xo-dot-grid absolute inset-0 opacity-50" />
      <div className="relative w-56 rounded-lg border border-line bg-surface p-3 shadow-card">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-2xs uppercase tracking-caps text-fg-muted">Orden de trabajo</span>
          <span key={s.label} className={cn("inline-flex animate-fade-in-up items-center gap-1 rounded-pill px-2 py-0.5 text-2xs font-semibold", tone)}><Icon name={s.icon} size={11} />{s.label}</span>
        </div>
        {[0.9, 0.7, 0.8].map((w, k) => <div key={k} className="mb-2 h-2 rounded-xs bg-hover" style={{ width: `${w * 100}%` }} />)}
        <div className="mt-3 h-1 overflow-hidden rounded-pill bg-hover">
          <div className="h-full origin-left rounded-pill bg-accent transition-transform duration-(--xo-duration-slower)" style={{ transform: `scaleX(${s.progress})` }} />
        </div>
      </div>
    </div>
  );
}

/** 04 · Bus de integración: paquetes que viajan de tus sistemas a la app a través de XOne. */
export function IntegrationIllo() {
  return (
    <div className={frame} aria-hidden>
      <div className="xo-dot-grid absolute inset-0 opacity-50" />
      <svg viewBox="0 0 400 192" className="absolute inset-0 size-full" preserveAspectRatio="none">
        {[56, 96, 136].map((y) => <path key={y} d={`M96 ${y} C 150 ${y}, 150 96, 188 96`} fill="none" stroke="var(--xo-color-border-loud)" strokeDasharray="4 4" className="xo-flow" />)}
        <path d="M232 96 H 300" fill="none" stroke="var(--xo-color-fx-glyph)" strokeDasharray="4 4" className="xo-flow" />
        {[56, 96, 136].map((y, k) => (
          <circle key={y} r="3" fill="var(--xo-color-fx-glyph)">
            <animateMotion dur="2.4s" begin={`${k * 0.8}s`} repeatCount="indefinite" path={`M96 ${y} C 150 ${y}, 150 96, 188 96 H 300`} />
          </circle>
        ))}
      </svg>
      <div className="absolute top-0 left-[5%] flex h-full flex-col justify-center gap-3">
        {["ERP", "CRM", "BD"].map((t) => <span key={t} className="w-16 rounded-sm border border-line bg-surface py-1 text-center font-mono text-2xs text-fg-muted">{t}</span>)}
      </div>
      <span className="absolute top-1/2 left-1/2 inline-flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-accent-border bg-surface shadow-card">
        <svg viewBox="15.78 0 20.1 23.67" className="h-5"><polygon fill="var(--xo-color-brand-symbol)" points="22.53 0 15.78 0 22.48 11.84 15.78 23.67 22.53 23.67 29.18 11.84 22.53 0" /><polygon fill="var(--xo-color-brand-wordmark)" points="35.88 0 29.13 0 26.97 3.83 30.33 9.8 35.88 0" /><polygon fill="var(--xo-color-brand-wordmark)" points="26.97 19.84 29.13 23.67 35.88 23.67 30.33 13.87 26.97 19.84" /></svg>
      </span>
      <span className="absolute top-1/2 right-[6%] inline-flex -translate-y-1/2 items-center gap-1.5 rounded-sm border border-line bg-surface px-2 py-1 font-mono text-2xs text-fg"><Icon name="phone" size={12} />App</span>
    </div>
  );
}

/** Índice activo que rota solo (se para con reduced-motion o fuera de pantalla). */
export function useActiveIndex(n: number, every: number) {
  const [i, setI] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setI((x) => (x + 1) % n), every);
    return () => clearInterval(id);
  }, [n, every, reduced]);
  return [i, setI] as const;
}

/** Pasos con barra de progreso que avanza sola (patrón "use cases" de la referencia). */
export function AutoSteps({ steps, every = 4000 }: { steps: { title: string; text: string }[]; every?: number }) {
  const reduced = useReducedMotion();
  const [ref, inView] = useInView<HTMLOListElement>();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (reduced || paused || !inView) return;
    const id = setTimeout(() => setI((x) => (x + 1) % steps.length), every);
    return () => clearTimeout(id);
  }, [i, reduced, paused, inView, every, steps.length]);
  return (
    <ol ref={ref} className="xo-cells sm:grid-cols-2 lg:grid-cols-5" onMouseLeave={() => setPaused(false)}>
      {steps.map((s, k) => {
        const active = k === i;
        return (
          <li key={s.title} className="relative sm:last:col-span-2 lg:last:col-span-1">
            <button type="button" onClick={() => setI(k)} onMouseEnter={() => { setI(k); setPaused(true); }} onFocus={() => { setI(k); setPaused(true); }} aria-current={active ? "step" : undefined}
              className={cn("relative flex h-full w-full flex-col gap-3 p-6 text-left transition-colors duration-(--xo-duration-base)", active ? "bg-surface" : "hover:bg-surface")}>
              <span className="absolute inset-x-0 top-0 h-0.5 overflow-hidden bg-line-faint">
                {active && <span key={`${i}-${paused}`} className={cn("block h-full origin-left bg-accent", !reduced && !paused && "xo-progress")} style={{ animationDuration: `${every}ms` }} />}
              </span>
              <span className={cn("font-mono text-xs transition-colors", active ? "text-fg-accent" : "text-fg-muted")}>{String(k + 1).padStart(2, "0")}</span>
              <span className="text-base font-semibold text-fg">{s.title}</span>
              <span className="text-md text-fg-muted">{s.text}</span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
