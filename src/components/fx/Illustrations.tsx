import { useEffect, useState } from "react";
import { cn } from "../ui/utils";
import { t } from "../../i18n";
import { Icon } from "../ui/Icon";
import { useInView, useReducedMotion } from "./hooks";

/**
 * Mini-escenas animadas para las celdas de "Por qué XOne".
 * Patrón de la referencia: el panel ocupa todo el ancho de la celda, con altura fija, pegado abajo y
 * separado del texto por una línea → todas las celdas de una fila alinean su ilustración.
 * Cada escena cuenta una historia en bucle (8–10 s) y se detiene fuera de pantalla o con reduced-motion.
 */

const panel = "relative h-full w-full overflow-hidden";
const VB = "0 0 560 240";

/** Paso de una secuencia en bucle; sólo avanza en pantalla y sin reduced-motion. */
function useLoop(steps: number, every: number) {
  const reduced = useReducedMotion();
  const [ref, inView] = useInView<HTMLDivElement>();
  const [step, setStep] = useState(reduced ? steps - 1 : 0);
  useEffect(() => {
    if (reduced || !inView) return;
    const id = setInterval(() => setStep((s) => (s + 1) % steps), every);
    return () => clearInterval(id);
  }, [reduced, inView, steps, every]);
  return [ref, step, reduced] as const;
}

const DotBg = () => <div aria-hidden className="xo-dot-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />;

/* ───────────── 01 · Un código, todas las plataformas ───────────── */
const TARGETS = [
  { label: "ANDROID", y: 46 },
  { label: "IOS", y: 96 },
  { label: "WINDOWS", y: 146 },
  { label: "WEB / PWA", y: 196 },
];
const curve = (y: number) => `M196 120 C 270 120, 280 ${y}, 360 ${y}`;

export function PlatformsIllo() {
  // 0–3: el paquete viaja a cada plataforma; 4–5: todas compiladas; luego se reinicia
  const [ref, step, reduced] = useLoop(6, 1100);
  const done = (k: number) => reduced || step > k;
  return (
    <div ref={ref} className={panel} aria-hidden>
      <DotBg />
      <svg viewBox={VB} className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid meet">
        {/* editor de código */}
        <g>
          <rect x="40" y="70" width="156" height="100" rx="10" fill="var(--xo-color-surface-default)" stroke="var(--xo-color-border-muted)" />
          <circle cx="54" cy="84" r="3" fill="var(--xo-color-border-loud)" /><circle cx="64" cy="84" r="3" fill="var(--xo-color-border-loud)" /><circle cx="74" cy="84" r="3" fill="var(--xo-color-border-loud)" />
          <text x="182" y="88" textAnchor="end" className="font-mono" fontSize="10" fill="var(--xo-color-text-muted)">app.xone</text>
          {[0, 1, 2, 3].map((k) => (
            <rect key={k} x={54 + (k % 2) * 12} y={102 + k * 14} height="6" rx="3" fill={k === 1 ? "var(--xo-color-fx-glyph)" : "var(--xo-color-border-loud)"} width={[96, 70, 84, 52][k]} className={cn(!reduced && "xo-type")} style={{ animationDelay: `${k * 160}ms` }} />
          ))}
        </g>
        {TARGETS.map((t, k) => (
          <g key={t.label}>
            <path d={curve(t.y)} fill="none" stroke={done(k) || step === k ? "var(--xo-color-fx-glyph)" : "var(--xo-color-border-loud)"} strokeWidth="1.25" strokeDasharray="4 4" className="xo-flow" style={{ transition: "stroke 300ms" }} />
            <g style={{ transition: "opacity 300ms" }}>
              <rect x="360" y={t.y - 16} width="150" height="32" rx="8" fill={done(k) ? "var(--xo-color-accent-subtle)" : "var(--xo-color-surface-default)"} stroke={done(k) ? "var(--xo-color-accent-border)" : "var(--xo-color-border-muted)"} style={{ transition: "fill 300ms, stroke 300ms" }} />
              <rect x="372" y={t.y - 7} width="10" height="14" rx="2" fill="none" stroke={done(k) ? "var(--xo-color-text-accent)" : "var(--xo-color-text-muted)"} />
              <text x="392" y={t.y + 4} className="font-mono" fontSize="10" letterSpacing="0.8" fill={done(k) ? "var(--xo-color-accent-subtle-fg)" : "var(--xo-color-text-muted)"}>{t.label}</text>
              {done(k) ? (
                <path d={`M488 ${t.y} l4 4 l8 -8`} fill="none" stroke="var(--xo-color-text-accent)" strokeWidth="1.75" />
              ) : (
                <circle cx="494" cy={t.y} r="3" fill={step === k ? "var(--xo-color-fx-glyph)" : "var(--xo-color-border-loud)"} className={step === k ? "xo-pulse" : ""} />
              )}
            </g>
          </g>
        ))}
        {!reduced && step < 4 && (
          <circle key={step} r="4.5" fill="var(--xo-color-fx-glyph)">
            <animateMotion dur="0.9s" fill="freeze" path={curve(TARGETS[step].y)} />
          </circle>
        )}
      </svg>
    </div>
  );
}

/* ───────────── 02 · Seguridad de extremo a extremo ───────────── */
const POINTS = [
  { a: 35, r: 92 }, { a: 140, r: 64 }, { a: 220, r: 92 }, { a: 300, r: 44 }, { a: 80, r: 44 },
];
const LOG = t(["Sesión autenticada", "Datos cifrados en tránsito", "Dispositivo verificado", "Acceso auditado"], ["Session authenticated", "Data encrypted in transit", "Device verified", "Access audited"]);

export function SecurityIllo() {
  const [ref, step, reduced] = useLoop(LOG.length, 1500);
  return (
    <div ref={ref} className={panel} aria-hidden>
      <DotBg />
      {/* radar */}
      <div className="absolute top-1/2 left-[30%] size-52 -translate-x-1/2 -translate-y-1/2">
        {[1, 0.7, 0.42].map((f) => (
          <span key={f} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-pill border border-dashed border-line" style={{ width: `${f * 100}%`, height: `${f * 100}%` }} />
        ))}
        {!reduced && <span className="absolute inset-0 rounded-pill bg-[conic-gradient(from_0deg,transparent_0deg,var(--xo-color-cyan-alpha-24)_60deg,transparent_62deg)] animate-[xo-orbit_4s_linear_infinite]" />}
        {POINTS.map((p, k) => (
          <span key={k} className="absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-pill bg-accent xo-blip"
            style={{ left: `calc(50% + ${Math.cos((p.a - 90) * Math.PI / 180) * p.r}px)`, top: `calc(50% + ${Math.sin((p.a - 90) * Math.PI / 180) * p.r}px)`, animationDelay: `${(p.a / 360) * 4}s` }} />
        ))}
        <span className="absolute top-1/2 left-1/2 inline-flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-accent-border bg-accent-subtle text-accent-subtle-fg shadow-card"><Icon name="shield" size={22} /></span>
      </div>
      {/* registro */}
      <ul className="absolute top-1/2 right-[6%] flex w-[42%] -translate-y-1/2 flex-col gap-2">
        {LOG.map((l, k) => {
          const on = reduced || k <= step;
          return (
            <li key={l} className={cn("flex items-center gap-2 rounded-md border bg-surface px-3 py-2 text-xs transition-all duration-(--xo-duration-slow)", on ? "translate-x-0 border-line opacity-100" : "translate-x-2 border-line-faint opacity-30", k === step && !reduced && "border-accent-border shadow-xs")}>
              <span className={cn("inline-flex size-4 shrink-0 items-center justify-center rounded-pill", on ? "bg-success-bg text-success" : "bg-hover text-fg-muted")}><Icon name="check" size={10} /></span>
              <span className="truncate text-fg-secondary">{l}</span>
            </li>
          );
        })}
      </ul>
      <span className="absolute bottom-3 left-3 flex items-center gap-1.5 font-mono text-2xs text-fg-muted"><i className="size-1 bg-accent" />ENS · ISO 27001</span>
    </div>
  );
}

/* ───────────── 03 · Siempre operativa ───────────── */
// 0 online · 1 cae la cobertura · 2–4 cambios en cola · 5 vuelve la cobertura · 6–8 sincroniza · 9 al día
const QUEUE = t(["Parte de trabajo", "Fotos de la avería", "Firma del cliente"], ["Work report", "Photos of the fault", "Customer signature"]);

export function OfflineIllo() {
  const [ref, step, reduced] = useLoop(10, 900);
  const s = reduced ? 9 : step;
  const offline = s >= 1 && s <= 4;
  const queued = Math.min(3, Math.max(0, s - 1));
  const synced = s >= 6 ? Math.min(3, s - 5) : 0;
  const bars = offline ? 0 : s === 5 ? 2 : 4;
  const status = offline ? { t: t("Sin cobertura", "No coverage"), c: "bg-warning-bg text-warning" } : s >= 5 && s < 9 ? { t: t("Sincronizando", "Syncing"), c: "bg-accent-subtle text-accent-subtle-fg" } : { t: t("Al día", "Up to date"), c: "bg-success-bg text-success" };
  return (
    <div ref={ref} className={cn(panel, "flex items-center justify-center")} aria-hidden>
      <DotBg />
      <div className="relative w-[min(78%,340px)] rounded-xl border border-line bg-surface p-4 shadow-card">
        <div className="mb-3 flex items-center justify-between">
          <span className="flex items-end gap-0.5" title="cobertura">
            {[0, 1, 2, 3].map((k) => <i key={k} className={cn("w-1 rounded-xs transition-colors duration-(--xo-duration-slow)", k < bars ? "bg-accent" : "bg-line")} style={{ height: 4 + k * 3 }} />)}
          </span>
          <span key={status.t} className={cn("inline-flex animate-fade-in-up items-center gap-1 rounded-pill px-2 py-0.5 text-2xs font-semibold", status.c)}>{status.t}</span>
        </div>
        {s === 0 && <p className="absolute inset-x-4 top-[52px] flex items-center gap-1.5 text-xs text-fg-muted"><Icon name="check" size={12} className="text-success" />{t("Sin cambios pendientes", "No pending changes")}</p>}
        <ul className="flex flex-col gap-1.5">
          {QUEUE.map((q, k) => {
            const inQueue = k < queued || s >= 5;
            const ok = k < synced || s === 9;
            return (
              <li key={q} className={cn("flex items-center justify-between rounded-md border px-2.5 py-1.5 text-xs transition-all duration-(--xo-duration-slow)", inQueue ? "border-line-faint opacity-100" : "border-transparent opacity-0 -translate-y-1")}>
                <span className="text-fg-secondary">{q}</span>
                <span className={cn("inline-flex items-center gap-1 font-mono text-2xs", ok ? "text-success" : "text-fg-muted")}>
                  {ok ? <><Icon name="check" size={11} />{t("enviado", "sent")}</> : <><span className="size-1.5 rounded-pill bg-warning xo-pulse" />{t("en cola", "queued")}</>}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/* ───────────── 04 · Bus de integración ───────────── */
const SOURCES = [{ t: "ERP", y: 64 }, { t: "CRM", y: 120 }, { t: "BD", y: 176 }];
const busPath = (y: number) => `M120 ${y} C 190 ${y}, 200 120, 262 120 H 410`;

export function IntegrationIllo() {
  const [ref, step, reduced] = useLoop(60, 800);
  const rows = reduced ? 3 : 1 + (step % 3);
  return (
    <div ref={ref} className={panel} aria-hidden>
      <DotBg />
      <svg viewBox={VB} className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid meet">
        {SOURCES.map((s) => (
          <g key={s.t}>
            <path d={`M120 ${s.y} C 190 ${s.y}, 200 120, 262 120`} fill="none" stroke="var(--xo-color-border-loud)" strokeDasharray="4 4" className="xo-flow" />
            <rect x="40" y={s.y - 15} width="80" height="30" rx="8" fill="var(--xo-color-surface-default)" stroke="var(--xo-color-border-muted)" />
            <text x="80" y={s.y + 4} textAnchor="middle" className="font-mono" fontSize="10" fill="var(--xo-color-text-muted)">{s.t}</text>
          </g>
        ))}
        <path d="M298 120 H 410" fill="none" stroke="var(--xo-color-fx-glyph)" strokeDasharray="4 4" className="xo-flow" />
        {!reduced && SOURCES.map((s, k) => (
          <circle key={s.t} r="3.5" fill="var(--xo-color-fx-glyph)">
            <animateMotion dur="2.4s" begin={`${k * 0.8}s`} repeatCount="indefinite" path={busPath(s.y)} />
          </circle>
        ))}
        {/* hub */}
        <circle cx="280" cy="120" r="30" fill="none" stroke="var(--xo-color-accent-border)" className={cn(!reduced && "xo-ring")} />
        <rect x="258" y="98" width="44" height="44" rx="12" fill="var(--xo-color-surface-default)" stroke="var(--xo-color-accent-border)" />
        <path d="M270 114h20l-5-5M290 126h-20l5 5" fill="none" stroke="var(--xo-color-fx-glyph)" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
        <text x="280" y="170" textAnchor="middle" className="font-mono" fontSize="10" letterSpacing="0.8" fill="var(--xo-color-text-muted)">BUS</text>
        {/* app */}
        <rect x="410" y="52" width="112" height="136" rx="14" fill="var(--xo-color-surface-default)" stroke="var(--xo-color-border-muted)" />
        <rect x="448" y="60" width="36" height="4" rx="2" fill="var(--xo-color-border-loud)" />
        {[0, 1, 2].map((k) => (
          <g key={k} style={{ opacity: k < rows ? 1 : 0, transition: "opacity 400ms" }}>
            <rect x="422" y={78 + k * 34} width="88" height="26" rx="6" fill={k === rows - 1 && !reduced ? "var(--xo-color-accent-subtle)" : "var(--xo-color-surface-sunken)"} />
            <rect x="430" y={86 + k * 34} width={[44, 56, 36][k]} height="4" rx="2" fill="var(--xo-color-border-loud)" />
            <rect x="430" y={94 + k * 34} width={[28, 22, 40][k]} height="4" rx="2" fill="var(--xo-color-border-muted)" />
          </g>
        ))}
      </svg>
    </div>
  );
}

/** Índice activo que rota solo (se para con reduced-motion). */
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
              <span className="type-body-sm text-fg-muted">{s.text}</span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
