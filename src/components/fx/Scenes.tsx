import { useEffect, useLayoutEffect, useRef, useState, type ComponentType, type CSSProperties } from "react";
import { cn } from "../ui/utils";
import { t } from "../../i18n";
import { Icon } from "../ui/Icon";
import { useInView, useReducedMotion } from "./hooks";
import { DotBg, IntegrationIllo, OfflineIllo, PlatformsIllo, SecurityIllo, VB, panel, useLoop } from "./Illustrations";

/**
 * Escenas animadas que EXPLICAN un concepto de página (push, actualizaciones, DMZ, DevOps…).
 * Mismas reglas que las ilustraciones de la home: viewBox 560×240, sólo tokens, aria-hidden,
 * bucle que se para fuera de pantalla y estado final estático con reduced-motion.
 */

const C = {
  surf: "var(--xo-color-surface-default)",
  sunk: "var(--xo-color-surface-sunken)",
  line: "var(--xo-color-border-muted)",
  loud: "var(--xo-color-border-loud)",
  glyph: "var(--xo-color-fx-glyph)",
  acc: "var(--xo-color-accent-subtle)",
  accB: "var(--xo-color-accent-border)",
  accT: "var(--xo-color-text-accent)",
  accFg: "var(--xo-color-accent-subtle-fg)",
  muted: "var(--xo-color-text-muted)",
  sec: "var(--xo-color-text-secondary)",
  ok: "var(--xo-color-success-fg)",
  okBg: "var(--xo-color-success-bg)",
  bad: "var(--xo-color-danger-fg)",
  badBg: "var(--xo-color-danger-bg)",
  warn: "var(--xo-color-warning-fg)",
  warnBg: "var(--xo-color-warning-bg)",
};
const ease = "cubic-bezier(0.22,1,0.36,1)";
const mono = { className: "font-mono", fontSize: 10, letterSpacing: 0.8 } as const;

/** Paquete que recorre una ruta una vez (se reinicia al cambiar `k`). */
const Packet = ({ k, d, dur = 0.8, color = C.glyph }: { k: string | number; d: string; dur?: number; color?: string }) => (
  <circle key={k} r="4" fill={color}>
    <animateMotion dur={`${dur}s`} fill="freeze" path={d} />
  </circle>
);

/** Pastilla de estado con texto (SVG). */
function Pill({ x, y, w, text, tone = "muted" }: { x: number; y: number; w: number; text: string; tone?: "muted" | "ok" | "bad" | "warn" | "acc" }) {
  const map = { muted: [C.sunk, C.muted], ok: [C.okBg, C.ok], bad: [C.badBg, C.bad], warn: [C.warnBg, C.warn], acc: [C.acc, C.accFg] } as const;
  const [bg, fg] = map[tone];
  return (
    <g style={{ transition: "opacity 300ms" }}>
      <rect x={x} y={y} width={w} height="20" rx="10" fill={bg} style={{ transition: "fill 300ms" }} />
      <text x={x + w / 2} y={y + 13.5} textAnchor="middle" {...mono} fontSize="9.5" fill={fg} fontWeight="600">{text}</text>
    </g>
  );
}

/* ───────────── Notificaciones push: eventos → servidor push → dispositivo ───────────── */
const PUSH_SRC = [
  { y: 56, label: t("ALARMAS", "ALARMS"), msg: t("Alarma: stock bajo", "Alarm: low stock") },
  { y: 120, label: t("EVENTOS", "EVENTS"), msg: t("Nueva orden asignada", "New order assigned") },
  { y: 184, label: t("RÉPLICA", "REPLICA"), msg: t("Datos actualizados", "Data updated") },
];
const pushPath = (y: number) => `M140 ${y} C 190 ${y}, 190 120, 236 120 H 366`;

export function PushIllo() {
  const [ref, step, reduced] = useLoop(6, 1500);
  const active = step % 3;
  return (
    <div ref={ref} className={panel} aria-hidden>
      <DotBg />
      <svg viewBox={VB} className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid meet">
        {PUSH_SRC.map((s, k) => {
          const on = !reduced && k === active;
          return (
            <g key={s.label}>
              <path d={`M140 ${s.y} C 190 ${s.y}, 190 120, 236 120`} fill="none" stroke={on ? C.glyph : C.loud} strokeDasharray="4 4" className="xo-flow" style={{ transition: "stroke 300ms" }} />
              <rect x="40" y={s.y - 15} width="100" height="30" rx="8" fill={on ? C.acc : C.surf} stroke={on ? C.accB : C.line} style={{ transition: "fill 300ms, stroke 300ms" }} />
              <text x="90" y={s.y + 4} textAnchor="middle" {...mono} fill={on ? C.accFg : C.muted}>{s.label}</text>
            </g>
          );
        })}
        <path d="M280 120 H 366" fill="none" stroke={C.glyph} strokeDasharray="4 4" className="xo-flow" />
        {/* servidor push */}
        <rect x="236" y="98" width="44" height="44" rx="12" fill={C.surf} stroke={C.accB} />
        <path d="M250 124v-6a8 8 0 0 1 16 0v6l3 4h-22z M255 131a3 3 0 0 0 6 0" fill="none" stroke={C.glyph} strokeWidth="1.75" strokeLinejoin="round" />
        <text x="258" y="164" textAnchor="middle" {...mono} fill={C.muted}>PUSH</text>
        {!reduced && <Packet k={step} d={pushPath(PUSH_SRC[active].y)} dur={0.9} />}
        {/* dispositivo */}
        <rect x="366" y="16" width="168" height="208" rx="18" fill={C.surf} stroke={C.line} />
        <rect x="430" y="24" width="40" height="5" rx="2.5" fill={C.loud} />
        {[0, 1, 2, 3].map((j) => {
          const id = (step - j + 6) % 6;
          const src = PUSH_SRC[id % 3];
          return (
            <g key={id} style={{ transform: `translateY(${40 + j * 46}px)`, opacity: [1, 0.9, 0.7, 0][j], transition: `transform 500ms ${ease} 850ms, opacity 400ms 850ms` }}>
              <g className={j === 0 && !reduced ? "animate-fade-in-up" : undefined} style={{ animationDelay: "850ms", animationFillMode: "both" }}>
              <rect x="376" y="0" width="148" height="38" rx="9" fill={j === 0 ? C.acc : C.sunk} stroke={j === 0 ? C.accB : "none"} />
              <circle cx="389" cy="13" r="4" fill={j === 0 ? C.glyph : C.loud} />
              <text x="399" y="16.5" fontSize="9.5" fill={C.sec}>{src.msg}</text>
              <text x="389" y="30" {...mono} fontSize="8.5" fill={C.muted}>{j === 0 ? t("AHORA", "NOW") : t(`HACE ${j} MIN`, `${j} MIN AGO`)}</text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ───────────── XOne Live: actualizaciones sólo a dispositivos registrados ───────────── */
const DEVICES = [
  { y: 48, id: "A1F7", reg: true },
  { y: 96, id: "C09E", reg: true },
  { y: 144, id: "—", reg: false },
  { y: 192, id: "D44B", reg: true },
];
const updPath = (y: number) => `M172 120 C 260 120, 270 ${y}, 360 ${y}`;

export function UpdateIllo() {
  const [ref, step, reduced] = useLoop(10, 800);
  const sending = !reduced && step < 8 && step % 2 === 0 ? step / 2 : -1;
  return (
    <div ref={ref} className={panel} aria-hidden>
      <DotBg />
      <svg viewBox={VB} className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid meet">
        <rect x="40" y="76" width="132" height="88" rx="12" fill={C.surf} stroke={C.accB} />
        <text x="56" y="100" {...mono} fill={C.muted}>XONE LIVE</text>
        <rect x="56" y="112" width="52" height="20" rx="10" fill={C.acc} />
        <text x="82" y="125.5" textAnchor="middle" {...mono} fill={C.accFg} fontWeight="600">v2.4</text>
        <rect x="56" y="142" width="80" height="4" rx="2" fill={C.line} />
        {DEVICES.map((d, k) => {
          const done = reduced || step >= k * 2 + 1;
          const denied = done && !d.reg;
          return (
            <g key={d.y}>
              <path d={updPath(d.y)} fill="none" stroke={sending === k ? (d.reg ? C.glyph : C.bad) : C.loud} strokeDasharray="4 4" className="xo-flow" style={{ transition: "stroke 300ms" }} />
              <rect x="360" y={d.y - 17} width="160" height="34" rx="9" fill={done && d.reg ? C.acc : C.surf} stroke={denied ? C.bad : done ? C.accB : C.line} style={{ transition: "fill 300ms, stroke 300ms" }} />
              <rect x="372" y={d.y - 8} width="10" height="16" rx="2.5" fill="none" stroke={C.muted} />
              <text x="392" y={d.y + 4} {...mono} fill={C.sec}>{d.reg ? `ID ${d.id}` : t("SIN ALTA", "UNREGISTERED")}</text>
              {denied ? (
                <path d={`M494 ${d.y - 5} l10 10 m0 -10 l-10 10`} stroke={C.bad} strokeWidth="1.75" />
              ) : (
                <text x="508" y={d.y + 4} textAnchor="end" {...mono} fontWeight="600" fill={done ? C.accT : C.muted}>{done ? "v2.4" : "v2.3"}</text>
              )}
            </g>
          );
        })}
        {sending >= 0 && <Packet k={step} d={updPath(DEVICES[sending].y)} color={DEVICES[sending].reg ? C.glyph : C.bad} />}
        <g style={{ opacity: reduced || step >= 5 ? 1 : 0, transition: "opacity 300ms" }}>
          <Pill x={52} y={186} w={108} tone="bad" text={t("ACCESO DENEGADO", "ACCESS DENIED")} />
        </g>
      </svg>
    </div>
  );
}

/* ───────────── Monitorización con IA: tendencia → predicción → reinicio ───────────── */
const BASE = [150, 156, 148, 152, 146, 150, 144, 149, 147, 151, 145, 150, 148];
const RISE = [150, 156, 148, 152, 146, 150, 144, 149, 140, 128, 116, 104, 94];
const X0 = 40, DX = 28; // 13 puntos → 40…376
const toPath = (v: number[]) => v.map((y, i) => `${i ? "L" : "M"}${X0 + i * DX} ${y}`).join(" ");
const SERVICES = ["API", t("RÉPLICA", "REPLICA"), "PUSH"];

export function MonitorIllo() {
  const [ref, step, reduced] = useLoop(8, 1200);
  const s = reduced ? 6 : step;
  const values = s >= 3 && s <= 5 ? RISE : BASE.map((_, i) => BASE[(i + s) % BASE.length]);
  const d = toPath(values);
  const state = s < 3 ? "ok" : s === 3 ? "trend" : s === 4 ? "predict" : s === 5 ? "restart" : "ok";
  const badge = { ok: { tone: "ok" as const, text: t("SERVICIOS ESTABLES", "SERVICES STABLE") }, trend: { tone: "warn" as const, text: t("TENDENCIA ANÓMALA", "ANOMALOUS TREND") }, predict: { tone: "warn" as const, text: t("FALLO PREVISTO · 15 MIN", "FAILURE IN 15 MIN") }, restart: { tone: "acc" as const, text: t("REINICIO AUTOMÁTICO", "AUTO RESTART") } }[state];
  return (
    <div ref={ref} className={panel} aria-hidden>
      <DotBg />
      <svg viewBox={VB} className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid meet">
        {[80, 120, 160, 200].map((y) => <line key={y} x1="40" x2="400" y1={y} y2={y} stroke={C.line} strokeWidth="1" opacity="0.6" />)}
        <line x1="40" x2="400" y1="70" y2="70" stroke={C.bad} strokeDasharray="3 5" opacity="0.7" />
        <text x="40" y="62" {...mono} fontSize="9" fill={C.muted}>{t("UMBRAL", "THRESHOLD")}</text>
        <path d={d} style={{ d: `path("${d}")`, transition: `d 700ms ${ease}` } as CSSProperties} fill="none" stroke={C.glyph} strokeWidth="2" strokeLinejoin="round" />
        <path d="M376 94 L 404 70" fill="none" stroke={C.warn} strokeWidth="1.75" strokeDasharray="4 4" className="xo-flow" style={{ opacity: state === "predict" ? 1 : 0, transition: "opacity 300ms" }} />
        <circle cx="404" cy="70" r="5" fill="none" stroke={C.warn} strokeWidth="1.5" style={{ opacity: state === "predict" ? 1 : 0, transition: "opacity 300ms" }} />
        <circle cx={X0 + 12 * DX} cy={values[12]} r="4" fill={C.glyph} style={{ transition: `cy 700ms ${ease}` }} />
        <g key={state} className={reduced ? undefined : "animate-fade-in-up"}><Pill x={150} y={208} w={150} tone={badge.tone} text={badge.text} /></g>
        {/* servicios */}
        <rect x="424" y="40" width="108" height="160" rx="12" fill={C.surf} stroke={C.line} />
        {SERVICES.map((name, k) => {
          const st = k !== 1 ? "ok" : state;
          const color = st === "ok" ? C.ok : st === "restart" ? C.accT : C.warn;
          return (
            <g key={name}>
              <circle cx="442" cy={72 + k * 30} r="4" fill={color} className={st === "restart" && !reduced ? "xo-pulse" : undefined} style={{ transition: "fill 300ms" }} />
              <text x="454" y={76 + k * 30} {...mono} fill={C.sec}>{name}</text>
            </g>
          );
        })}
        <line x1="436" x2="520" y1="158" y2="158" stroke={C.line} />
        <g style={{ opacity: s >= 5 ? 1 : 0.35, transition: "opacity 300ms" }}>
          <rect x="438" y="170" width="16" height="12" rx="2" fill="none" stroke={s >= 5 ? C.accT : C.muted} />
          <path d="M438 171 l8 6 l8 -6" fill="none" stroke={s >= 5 ? C.accT : C.muted} />
          <text x="462" y="180" {...mono} fontSize="9" fill={C.muted}>{t("AVISO", "ALERT")}</text>
        </g>
      </svg>
    </div>
  );
}

/* ───────────── DevOps: bucle continuo (∞) con la etapa activa sincronizada ───────────── */
const LOOP_D = "M280 120 C 330 46, 452 46, 452 120 C 452 194, 330 194, 280 120 C 230 46, 108 46, 108 120 C 108 194, 230 194, 280 120 Z";
const STAGES = t(["Publicar", "Desplegar", "Operar", "Monitorizar", "Planificar", "Programar", "Compilar", "Probar"], ["Release", "Deploy", "Operate", "Monitor", "Plan", "Code", "Build", "Test"]);
const LOOP_DUR = 9.6;
/** Posición de cada etapa en el recorrido (fracción): 4 por lóbulo, lejos del cruce central. */
const STAGE_F = [0.09, 0.19, 0.31, 0.41, 0.59, 0.69, 0.81, 0.91];

export function PipelineIllo() {
  const reduced = useReducedMotion();
  const [ref, inView] = useInView<HTMLDivElement>();
  const svg = useRef<SVGSVGElement>(null);
  const path = useRef<SVGPathElement>(null);
  const [pts, setPts] = useState<{ x: number; y: number; lx: number; ly: number }[]>([]);
  const [active, setActive] = useState(-1);
  useLayoutEffect(() => {
    const p = path.current;
    if (!p) return;
    const L = p.getTotalLength();
    setPts(STAGE_F.map((f) => {
      const { x, y } = p.getPointAtLength(L * f);
      return { x, y, lx: x, ly: y < 120 ? y - 20 : y + 20 };
    }));
  }, []);
  useEffect(() => {
    if (reduced || !inView) return;
    const id = setInterval(() => {
      const s = svg.current;
      if (!s) return;
      const f = (s.getCurrentTime() % LOOP_DUR) / LOOP_DUR;
      // etapa más cercana al punto que recorre el bucle (distancia circular)
      let best = 0, bd = 2;
      STAGE_F.forEach((g, k) => { const d = Math.min(Math.abs(f - g), 1 - Math.abs(f - g)); if (d < bd) { bd = d; best = k; } });
      setActive(best);
    }, 120);
    return () => clearInterval(id);
  }, [reduced, inView]);
  return (
    <div ref={ref} className={panel} aria-hidden>
      <DotBg />
      <svg ref={svg} viewBox={VB} className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid meet">
        <path ref={path} d={LOOP_D} fill="none" stroke={C.loud} strokeWidth="1.25" strokeDasharray="4 4" className="xo-flow" />
        {pts.map((p, k) => {
          const on = k === active;
          const w = STAGES[k].length * 5.7 + 14;
          return (
            <g key={k}>
              <circle cx={p.x} cy={p.y} r="3" fill={on ? C.glyph : C.loud} style={{ transition: "fill 200ms" }} />
              <rect x={p.lx - w / 2} y={p.ly - 10} width={w} height="20" rx="10" fill={on ? C.acc : C.surf} stroke={on ? C.accB : C.line} style={{ transition: "fill 200ms, stroke 200ms" }} />
              <text x={p.lx} y={p.ly + 3.5} textAnchor="middle" {...mono} fontSize="8.5" letterSpacing="0.4" fill={on ? C.accFg : C.muted} style={{ textTransform: "uppercase" }}>{STAGES[k]}</text>
            </g>
          );
        })}
        <rect x="262" y="110" width="36" height="20" rx="10" fill={C.surf} stroke={C.accB} />
        <text x="280" y="123.5" textAnchor="middle" {...mono} fontSize="9" fill={C.accT} fontWeight="600">CI/CD</text>
        {!reduced && (
          <circle r="5" fill={C.glyph}>
            <animateMotion dur={`${LOOP_DUR}s`} repeatCount="indefinite" path={LOOP_D} />
          </circle>
        )}
      </svg>
    </div>
  );
}

/* ───────────── Broker DMZ: lo legítimo pasa, lo demás se queda fuera ───────────── */
const brokerIn = (y: number) => `M148 ${y} C 196 ${y}, 196 124, 240 124`;
const brokerOut = "M320 124 C 364 124, 364 88, 412 88";

export function BrokerIllo() {
  const [ref, step, reduced] = useLoop(6, 900);
  const s = reduced ? 5 : step;
  const blocked = s >= 4;
  const zone = (x: number, w: number, label: string) => (
    <g>
      <rect x={x} y="22" width={w} height="196" rx="12" fill="none" stroke={C.line} strokeDasharray="2 4" />
      <text x={x + 12} y="40" {...mono} fontSize="9" fill={C.muted}>{label}</text>
    </g>
  );
  return (
    <div ref={ref} className={panel} aria-hidden>
      <DotBg />
      <svg viewBox={VB} className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid meet">
        {zone(16, 160, "INTERNET")}
        {zone(196, 168, "DMZ")}
        {zone(384, 160, t("RED INTERNA", "INTERNAL"))}
        {/* orígenes */}
        {[{ y: 88, l: "APP", bad: false }, { y: 160, l: "???", bad: true }].map((o) => (
          <g key={o.y}>
            <path d={brokerIn(o.y)} fill="none" stroke={o.bad && blocked ? C.bad : C.loud} strokeDasharray="4 4" className="xo-flow" style={{ transition: "stroke 300ms" }} />
            <rect x="48" y={o.y - 16} width="100" height="32" rx="8" fill={C.surf} stroke={o.bad && s >= 3 ? C.bad : C.line} style={{ transition: "stroke 300ms" }} />
            <text x="98" y={o.y + 4} textAnchor="middle" {...mono} fill={o.bad && s >= 3 ? C.bad : C.muted}>{o.l}</text>
          </g>
        ))}
        <path d={brokerOut} fill="none" stroke={s >= 1 && s <= 2 ? C.glyph : C.loud} strokeDasharray="4 4" className="xo-flow" />
        <path d="M320 124 C 364 124, 364 160, 412 160" fill="none" stroke={C.loud} strokeDasharray="4 4" className="xo-flow" />
        {/* broker */}
        <rect x="240" y="96" width="80" height="56" rx="12" fill={blocked ? C.badBg : C.surf} stroke={blocked ? C.bad : C.accB} style={{ transition: "fill 300ms, stroke 300ms" }} />
        <path d="M280 106 l11 4 v7 c0 7 -5 11 -11 13 c-6 -2 -11 -6 -11 -13 v-7 z" fill="none" stroke={blocked ? C.bad : C.glyph} strokeWidth="1.6" strokeLinejoin="round" />
        <text x="280" y="144" textAnchor="middle" {...mono} fontSize="9" fill={blocked ? C.bad : C.accT}>BROKER</text>
        {/* destinos */}
        {[{ y: 88, l: "ERP" }, { y: 160, l: t("BD", "DB") }].map((d, k) => (
          <g key={d.y}>
            <rect x="412" y={d.y - 16} width="100" height="32" rx="8" fill={k === 0 && s === 2 ? C.acc : C.surf} stroke={k === 0 && s === 2 ? C.accB : C.line} style={{ transition: "fill 300ms, stroke 300ms" }} />
            <text x="462" y={d.y + 4} textAnchor="middle" {...mono} fill={C.muted}>{d.l}</text>
          </g>
        ))}
        {!reduced && s === 0 && <Packet k="a" d={brokerIn(88)} />}
        {!reduced && s === 1 && <Packet k="b" d={brokerOut} />}
        {!reduced && s === 3 && <Packet k="c" d={brokerIn(160)} color={C.bad} />}
        <g key={blocked ? "x" : "ok"} className={reduced ? undefined : "animate-fade-in-up"}>
          <Pill x={214} y={176} w={132} tone={blocked ? "bad" : "ok"} text={blocked ? t("INTENTO BLOQUEADO", "ATTEMPT BLOCKED") : t("PETICIÓN VALIDADA", "REQUEST VALIDATED")} />
        </g>
      </svg>
    </div>
  );
}

/* ───────────── Cloud vs on-premise ───────────── */
export function OnPremIllo() {
  const reduced = useReducedMotion();
  const rows = [60, 120, 180];
  const into = (y: number) => `M110 ${y} C 160 ${y}, 170 120, 214 120 H 270`;
  return (
    <div className={panel} aria-hidden>
      <DotBg />
      <svg viewBox={VB} className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid meet">
        <rect x="214" y="20" width="320" height="200" rx="16" fill="none" stroke={C.accB} strokeDasharray="5 5" />
        <text x="230" y="40" {...mono} fontSize="9" fill={C.accT}>{t("TU INFRAESTRUCTURA", "YOUR INFRASTRUCTURE")}</text>
        {rows.map((y, k) => (
          <g key={y}>
            <path d={into(y)} fill="none" stroke={C.loud} strokeDasharray="4 4" className="xo-flow" />
            <rect x="72" y={y - 18} width="38" height="36" rx="6" fill={C.surf} stroke={C.line} />
            <rect x="80" y={y - 10} width="22" height="14" rx="2" fill={C.sunk} />
            {!reduced && (
              <circle r="3.5" fill={C.glyph}>
                <animateMotion dur="2.4s" begin={`${k * 0.8}s`} repeatCount="indefinite" path={into(y)} />
              </circle>
            )}
          </g>
        ))}
        {/* puerta */}
        <rect x="204" y="104" width="20" height="32" rx="5" fill={C.surf} stroke={C.accB} />
        <rect x="209" y="118" width="10" height="9" rx="1.5" fill="none" stroke={C.glyph} strokeWidth="1.4" />
        <path d="M211 118 v-3 a3 3 0 0 1 6 0 v3" fill="none" stroke={C.glyph} strokeWidth="1.4" />
        {/* rack */}
        <rect x="270" y="56" width="96" height="128" rx="10" fill={C.surf} stroke={C.line} />
        {[0, 1, 2, 3].map((u) => (
          <g key={u}>
            <rect x="280" y={66 + u * 28} width="76" height="20" rx="4" fill={C.sunk} />
            <rect x="290" y={74 + u * 28} width="30" height="4" rx="2" fill={C.loud} />
            <circle cx="344" cy={76 + u * 28} r="3" fill={C.glyph} className={reduced ? undefined : "xo-pulse"} style={{ animationDelay: `${u * 0.3}s` }} />
          </g>
        ))}
        {[{ y: 84, l: "ERP" }, { y: 156, l: "CRM" }].map((d) => (
          <g key={d.y}>
            <path d={`M366 120 C 396 120, 396 ${d.y}, 420 ${d.y}`} fill="none" stroke={C.loud} strokeDasharray="4 4" className="xo-flow" />
            <rect x="420" y={d.y - 15} width="92" height="30" rx="8" fill={C.surf} stroke={C.line} />
            <text x="466" y={d.y + 4} textAnchor="middle" {...mono} fill={C.muted}>{d.l}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

const LOAD = [0, 1, 2, 3, 3, 2, 1, 0];
const USERS = ["120", "800", "2.400", "6.000"];

export function CloudIllo() {
  const [ref, step, reduced] = useLoop(LOAD.length, 1100);
  const level = reduced ? 2 : LOAD[step];
  return (
    <div ref={ref} className={panel} aria-hidden>
      <DotBg />
      <svg viewBox={VB} className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid meet">
        {/* demanda */}
        <rect x="28" y="56" width="132" height="128" rx="12" fill={C.surf} stroke={C.line} />
        <text x="44" y="80" {...mono} fontSize="9" fill={C.muted}>{t("USUARIOS", "USERS")}</text>
        <text x="44" y="110" className="font-mono" fontSize="22" fontWeight="600" fill={C.sec}>{USERS[level]}</text>
        {[0, 1, 2, 3].map((k) => (
          <rect key={k} x={44 + k * 24} y={160 - (k + 1) * 9} width="16" height={(k + 1) * 9} rx="2" fill={k <= level ? C.glyph : C.line} style={{ transition: "fill 400ms" }} />
        ))}
        <path d="M160 120 H 214" fill="none" stroke={C.glyph} strokeDasharray="4 4" className="xo-flow" />
        {/* nube gestionada */}
        <rect x="214" y="28" width="318" height="184" rx="18" fill="none" stroke={C.accB} strokeDasharray="5 5" />
        <text x="230" y="48" {...mono} fontSize="9" fill={C.accT}>XONE CLOUD · SAAS</text>
        {[0, 1, 2, 3].map((k) => {
          const on = k <= level;
          return (
            <g key={k} style={{ opacity: on ? 1 : 0.25, transform: on ? "none" : "translateY(6px)", transition: `opacity 400ms, transform 500ms ${ease}` }}>
              <rect x={234 + k * 72} y="78" width="60" height="84" rx="10" fill={on ? C.acc : C.surf} stroke={on ? C.accB : C.line} strokeDasharray={on ? undefined : "3 3"} />
              <rect x={244 + k * 72} y="92" width="40" height="4" rx="2" fill={on ? C.accT : C.line} />
              <rect x={244 + k * 72} y="102" width="28" height="4" rx="2" fill={C.line} />
              <circle cx={264 + k * 72} cy="140" r="4" fill={on ? C.glyph : C.line} />
            </g>
          );
        })}
        <text x="234" y="194" {...mono} fontSize="9" fill={C.muted}>{t(`${level + 1} INSTANCIAS · AUTOESCALADO`, `${level + 1} INSTANCES · AUTO-SCALING`)}</text>
      </svg>
    </div>
  );
}

/* ───────────── EMM: consola de dispositivos (bloqueo remoto + actualización) ───────────── */
const FLEET = ["TPV-01", "TPV-02", "PDA-07", "TAB-12", "PDA-03", "TAB-05"];

export function FleetIllo() {
  const [ref, step, reduced] = useLoop(10, 900);
  const s = reduced ? 9 : step;
  const LOST = 3;
  return (
    <div ref={ref} className={cn(panel, "flex items-center justify-center")} aria-hidden>
      <DotBg />
      <div className="relative w-[min(90%,420px)] rounded-xl border border-line bg-surface p-3 shadow-card">
        <div className="mb-2.5 flex items-center justify-between px-1">
          <span className="font-mono text-2xs tracking-wider text-fg-muted">XONE MANAGER</span>
          <span className={cn("inline-flex items-center gap-1 rounded-pill border px-2 py-0.5 text-2xs font-semibold transition-colors duration-(--xo-duration-base)", s === 2 ? "border-accent-border bg-accent-subtle text-accent-subtle-fg" : "border-line-faint text-fg-muted")}>
            <Icon name="lock" size={10} />{t("Bloquear", "Lock")}
          </span>
        </div>
        <ul className="grid grid-cols-3 gap-1.5">
          {FLEET.map((name, k) => {
            const lost = k === LOST && s >= 1;
            const locked = k === LOST && s >= 3;
            const updated = k !== LOST && s >= 4 && (k < LOST ? k : k - 1) < s - 3;
            return (
              <li key={name} className={cn("flex flex-col gap-1.5 rounded-md border px-2 py-1.5 transition-colors duration-(--xo-duration-slow)", locked ? "border-danger bg-danger-bg" : lost ? "border-warning bg-warning-bg" : updated ? "border-accent-border bg-accent-subtle" : "border-line-faint")}>
                <span className="flex items-center justify-between">
                  <span className="font-mono text-2xs text-fg-secondary">{name}</span>
                  {locked ? <Icon name="lock" size={10} className="text-danger" /> : <i className={cn("size-1.5 rounded-pill", lost ? "bg-warning xo-pulse" : "bg-success")} />}
                </span>
                <span className="h-1 overflow-hidden rounded-pill bg-line-faint"><i className="block h-full bg-fg-muted" style={{ width: `${[82, 64, 45, 30, 91, 70][k]}%` }} /></span>
                <span className={cn("font-mono text-2xs", locked ? "text-danger" : lost ? "text-warning" : updated ? "text-fg-accent" : "text-fg-muted")}>
                  {locked ? t("Bloqueado", "Locked") : lost ? t("Fuera de zona", "Out of zone") : updated ? "v2.4 ✓" : "v2.3"}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/* ───────────── XOneCode: tú defines, los agentes desarrollan ───────────── */
const AGENTS = t(["Interfaz", "Lógica", "Pruebas"], ["Interface", "Logic", "Tests"]);

export function AgentsIllo() {
  const [ref, step, reduced] = useLoop(10, 700);
  const s = reduced ? 9 : step;
  const prog = (i: number) => Math.max(0, Math.min(1, (s - i * 1.5) / 4));
  const ready = s >= 8;
  return (
    <div ref={ref} className={cn(panel, "flex items-center justify-center gap-4 px-4")} aria-hidden>
      <DotBg />
      <div className="relative w-[44%] max-w-[200px] rounded-lg border border-line bg-surface p-3 shadow-card">
        <span className="font-mono text-2xs tracking-wider text-fg-muted">{t("REQUISITO", "REQUIREMENT")}</span>
        <p className="mt-1.5 text-xs leading-snug text-fg-secondary">{t("Parte de inspección con fotos y firma, también sin conexión.", "Inspection report with photos and signature, offline too.")}</p>
      </div>
      <div className="relative flex w-[50%] max-w-[240px] flex-col gap-2">
        {AGENTS.map((a, i) => {
          const p = prog(i);
          return (
            <div key={a} className={cn("rounded-md border bg-surface px-3 py-2 transition-colors duration-(--xo-duration-base)", p > 0 && p < 1 ? "border-accent-border" : "border-line-faint")}>
              <div className="mb-1.5 flex items-center justify-between text-2xs">
                <span className="font-mono tracking-wider text-fg-muted">{t("AGENTE", "AGENT")} · {a.toUpperCase()}</span>
                {p >= 1 ? <Icon name="check" size={11} className="text-success" /> : p > 0 ? <i className="size-1.5 rounded-pill bg-accent xo-pulse" /> : null}
              </div>
              <span className="block h-1 overflow-hidden rounded-pill bg-line-faint"><i className="block h-full bg-accent transition-[width] duration-700" style={{ width: `${p * 100}%` }} /></span>
            </div>
          );
        })}
        <span className={cn("inline-flex items-center gap-1 self-start rounded-pill bg-success-bg px-2 py-0.5 text-2xs font-semibold text-success transition-opacity duration-(--xo-duration-base)", ready ? "opacity-100" : "opacity-0")}>
          <Icon name="check" size={10} />{t("Listo para revisar", "Ready for review")}
        </span>
      </div>
    </div>
  );
}

/* ───────────── XOneAssist: programación en lenguaje natural ───────────── */
export function ChatIllo() {
  const [ref, step, reduced] = useLoop(9, 800);
  const s = reduced ? 8 : step;
  const lines = Math.max(0, Math.min(4, s - 2));
  return (
    <div ref={ref} className={cn(panel, "flex items-center justify-center")} aria-hidden>
      <DotBg />
      <div className="relative flex w-[min(86%,380px)] flex-col gap-2.5">
        <p className={cn("max-w-[80%] self-end rounded-lg rounded-br-xs bg-(--xo-button-primary-bg) px-3 py-2 text-xs text-(--xo-button-primary-fg) transition-all duration-(--xo-duration-slow)", s >= 1 ? "opacity-100" : "translate-y-1 opacity-0")}>
          {t("Crea una lista de clientes filtrada por ciudad", "Create a customer list filtered by city")}
        </p>
        <div className={cn("w-[78%] rounded-lg rounded-bl-xs border border-line bg-surface p-3 shadow-card transition-opacity duration-(--xo-duration-base)", s >= 2 ? "opacity-100" : "opacity-0")}>
          <span className="mb-2 flex items-center gap-1.5 font-mono text-2xs tracking-wider text-fg-muted"><Icon name="sparkle" size={11} className="text-fg-accent" />XONEASSIST</span>
          {s === 2 && !reduced ? (
            <span className="flex gap-1">{[0, 1, 2].map((k) => <i key={k} className="size-1.5 rounded-pill bg-fg-muted xo-pulse" style={{ animationDelay: `${k * 0.15}s` }} />)}</span>
          ) : (
            <span className="flex flex-col gap-1.5 rounded-md bg-surface-sunken p-2">
              {[[18, 52], [30, 40], [30, 58], [18, 24]].map(([x, w], k) => (
                <i key={k} className={cn("block h-1.5 rounded-pill transition-opacity duration-(--xo-duration-base)", k === 0 || k === 3 ? "bg-accent" : "bg-line-loud", k < lines ? "opacity-100" : "opacity-0")} style={{ marginLeft: `${x - 18}px`, width: `${w}%` }} />
              ))}
            </span>
          )}
          <span className={cn("mt-2 inline-flex items-center gap-1 text-2xs font-semibold text-success transition-opacity duration-(--xo-duration-base)", s >= 7 ? "opacity-100" : "opacity-0")}><Icon name="check" size={10} />{t("Vista generada", "View generated")}</span>
        </div>
      </div>
    </div>
  );
}

/* ───────────── XOneAssist: análisis de sentimiento ───────────── */
const MOODS = [
  { msg: t("La sincronización no me funciona…", "Sync isn't working for me…"), label: t("Frustración", "Frustration"), a: -58, tone: "bad" as const },
  { msg: t("Vale, lo reviso ahora", "OK, checking it now"), label: t("Neutral", "Neutral"), a: 0, tone: "muted" as const },
  { msg: t("¡Perfecto, ya funciona!", "Perfect, it works now!"), label: t("Satisfacción", "Satisfaction"), a: 58, tone: "ok" as const },
];
const arc = (a0: number, a1: number, r = 78) => {
  const p = (a: number) => [280 + r * Math.sin((a * Math.PI) / 180), 178 - r * Math.cos((a * Math.PI) / 180)];
  const [x0, y0] = p(a0), [x1, y1] = p(a1);
  return `M${x0} ${y0} A ${r} ${r} 0 0 1 ${x1} ${y1}`;
};

export function SentimentIllo() {
  const [ref, step, reduced] = useLoop(MOODS.length, 2200);
  const m = MOODS[reduced ? 2 : step];
  return (
    <div ref={ref} className={panel} aria-hidden>
      <DotBg />
      <svg viewBox={VB} className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid meet">
        <path d={arc(-80, -30)} fill="none" stroke={C.bad} strokeWidth="6" strokeLinecap="round" opacity="0.8" />
        <path d={arc(-22, 22)} fill="none" stroke={C.loud} strokeWidth="6" strokeLinecap="round" />
        <path d={arc(30, 80)} fill="none" stroke={C.ok} strokeWidth="6" strokeLinecap="round" opacity="0.8" />
        <g style={{ transform: `rotate(${m.a}deg)`, transformOrigin: "280px 178px", transition: `transform 900ms ${ease}` }}>
          <line x1="280" y1="178" x2="280" y2="116" stroke={C.glyph} strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <circle cx="280" cy="178" r="7" fill={C.surf} stroke={C.glyph} strokeWidth="2" />
        <g key={m.label} className={reduced ? undefined : "animate-fade-in-up"}>
          <Pill x={220} y={200} w={120} tone={m.tone} text={m.label.toUpperCase()} />
          <rect x="150" y="24" width="260" height="34" rx="12" fill={C.surf} stroke={C.line} />
          <text x="280" y="45" textAnchor="middle" fontSize="11.5" fill={C.sec}>{m.msg}</text>
        </g>
      </svg>
    </div>
  );
}

/* ───────────── Carsharing: localizar, abrir, conducir y pagar desde el móvil ───────────── */
const CAR_PATH = [[70, 184], [70, 104], [190, 104], [190, 56], [312, 56]] as const;

export function CarshareIllo() {
  const [ref, step, reduced] = useLoop(9, 1000);
  const s = reduced ? 8 : step;
  const pos = CAR_PATH[Math.max(0, Math.min(4, s - 2))];
  const phase = s < 2 ? "find" : s === 2 ? "open" : s < 7 ? "drive" : s === 7 ? "pay" : "paid";
  const screen = {
    find: { t: t("Vehículo a 200 m", "Vehicle 200 m away"), b: t("RESERVAR", "BOOK"), tone: "acc" as const },
    open: { t: t("Abriendo por Bluetooth", "Unlocking via Bluetooth"), b: t("ABIERTO", "UNLOCKED"), tone: "ok" as const },
    drive: { t: t(`En marcha · ${s - 2} min`, `Driving · ${s - 2} min`), b: t("EN USO", "IN USE"), tone: "acc" as const },
    pay: { t: t("Aparcado en zona", "Parked in zone"), b: t("PAGAR 3,40 €", "PAY €3.40"), tone: "warn" as const },
    paid: { t: t("Trayecto de 4 min", "4-min trip"), b: t("PAGADO", "PAID"), tone: "ok" as const },
  }[phase];
  return (
    <div ref={ref} className={panel} aria-hidden>
      <DotBg />
      <svg viewBox={VB} className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid meet">
        {/* plano: manzanas */}
        {[[96, 124, 76, 44], [96, 30, 76, 56], [214, 78, 120, 56], [214, 150, 120, 60], [24, 30, 30, 132]].map(([x, y, w, h], k) => (
          <rect key={k} x={x} y={y} width={w} height={h} rx="6" fill={C.surf} stroke={C.line} strokeDasharray="3 3" />
        ))}
        <path d={`M${CAR_PATH.map((p) => p.join(" ")).join(" L")}`} fill="none" stroke={C.loud} strokeWidth="1.5" strokeDasharray="4 4" className="xo-flow" />
        <circle cx="312" cy="56" r="7" fill="none" stroke={C.accB} strokeDasharray="2 3" />
        <g style={{ transform: `translate(${pos[0]}px, ${pos[1]}px)`, transition: `transform 950ms linear` }}>
          {phase === "find" && !reduced && <circle r="16" fill="none" stroke={C.glyph} className="xo-ring" />}
          <rect x="-11" y="-8" width="22" height="16" rx="5" fill={phase === "drive" ? C.glyph : C.surf} stroke={C.glyph} strokeWidth="1.5" style={{ transition: "fill 300ms" }} />
          <rect x="-6" y="-4" width="12" height="5" rx="1.5" fill={phase === "drive" ? C.surf : C.acc} />
        </g>
        {/* móvil */}
        <rect x="380" y="22" width="148" height="196" rx="18" fill={C.surf} stroke={C.line} />
        <rect x="434" y="30" width="40" height="5" rx="2.5" fill={C.loud} />
        <text x="396" y="62" {...mono} fontSize="9" fill={C.muted}>MINITS · EV-07</text>
        <g style={{ opacity: phase === "open" ? 1 : 0.9 }}>
          <circle cx="454" cy="118" r="30" fill={phase === "open" || phase === "paid" ? C.okBg : C.acc} stroke={phase === "open" || phase === "paid" ? C.ok : C.accB} style={{ transition: "fill 300ms, stroke 300ms" }} />
          <rect x="444" y="116" width="20" height="16" rx="3" fill="none" stroke={phase === "open" || phase === "paid" ? C.ok : C.accT} strokeWidth="1.75" />
          <path d={phase === "find" ? "M448 116 v-5 a6 6 0 0 1 12 0 v5" : "M448 116 v-5 a6 6 0 0 1 12 0"} fill="none" stroke={phase === "open" || phase === "paid" ? C.ok : C.accT} strokeWidth="1.75" />
        </g>
        <g key={phase} className={reduced ? undefined : "animate-fade-in-up"}>
          <text x="454" y="170" textAnchor="middle" fontSize="10.5" fill={C.sec}>{screen.t}</text>
          <Pill x={394} y={184} w={120} tone={screen.tone} text={screen.b} />
        </g>
      </svg>
    </div>
  );
}

/* ───────────── Visión artificial: un barrido lee todo el lote ───────────── */
export function ScanIllo() {
  const [ref, step, reduced] = useLoop(8, 650);
  const cols = reduced ? 4 : Math.min(step, 4);
  const lineX = 120 + Math.min(step, 4) * 80;
  const done = cols >= 4;
  return (
    <div ref={ref} className={panel} aria-hidden>
      <DotBg />
      <svg viewBox={VB} className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid meet">
        {/* visor de cámara */}
        {[[96, 24, 1, 1], [464, 24, -1, 1], [96, 196, 1, -1], [464, 196, -1, -1]].map(([x, y, dx, dy], k) => (
          <path key={k} d={`M${x} ${y + 18 * dy} V${y} H${x + 18 * dx}`} fill="none" stroke={C.glyph} strokeWidth="2" />
        ))}
        <line x1="112" x2="448" y1="118" y2="118" stroke={C.line} />
        <line x1="112" x2="448" y1="190" y2="190" stroke={C.line} />
        {[0, 1].map((r) => [0, 1, 2, 3].map((c) => {
          const on = c < cols;
          const x = 128 + c * 80, y = 70 + r * 72;
          return (
            <g key={`${r}${c}`}>
              <rect x={x} y={y} width="56" height="46" rx="5" fill={on ? C.acc : C.surf} stroke={on ? C.accB : C.line} style={{ transition: "fill 250ms, stroke 250ms" }} />
              {[0, 3, 5, 9, 11, 15, 18, 21, 25, 28, 31].map((bx, k) => <rect key={k} x={x + 10 + bx} y={y + 22} width={k % 3 ? 1.5 : 2.5} height="14" fill={on ? C.accT : C.loud} />)}
              <g style={{ opacity: on ? 1 : 0, transform: on ? "none" : "translateY(4px)", transition: `opacity 250ms, transform 300ms ${ease}` }}>
                <rect x={x + 8} y={y - 14} width="40" height="16" rx="8" fill={C.surf} stroke={C.accB} />
                <path d={`M${x + 15} ${y - 6} l3 3 l5 -6`} fill="none" stroke={C.ok} strokeWidth="1.5" />
                <text x={x + 27} y={y - 2.5} {...mono} fontSize="8" fill={C.accT}>{`×${[12, 4, 8, 2, 6, 10, 3, 5][r * 4 + c]}`}</text>
              </g>
            </g>
          );
        }))}
        {!reduced && !done && <rect x="-1" y="40" width="2" height="156" fill={C.glyph} opacity="0.9" style={{ transform: `translateX(${lineX}px)`, transition: "transform 600ms linear" }} />}
        <g key={done ? "d" : "s"} className={reduced ? undefined : "animate-fade-in-up"}>
          <Pill x={206} y={210} w={148} tone={done ? "ok" : "acc"} text={done ? t("8/8 · UN SOLO BARRIDO", "8/8 · ONE SWEEP") : t(`LEYENDO · ${cols * 2}/8`, `READING · ${cols * 2}/8`)} />
        </g>
      </svg>
    </div>
  );
}

/* ───────────── Rutas de transporte: la orden avanza parada a parada ───────────── */
// Ruta de reparto: el mapa (izquierda) y la orden de carga (derecha) van en zonas separadas → nunca se solapan.
const STOPS = [[28, 176], [92, 104], [156, 152], [220, 72], [284, 124]] as const;
const STOP_NAMES = t(["Carga · Almacén", "Cliente A", "Cliente B", "Cliente C", "Descarga final"], ["Loading · Warehouse", "Customer A", "Customer B", "Customer C", "Final unloading"]);
const ROUTE_D = `M${STOPS.map((p) => p.join(" ")).join(" L")}`;

export function RouteIllo() {
  const [ref, step, reduced] = useLoop(8, 1100);
  // at = paradas completadas (0…5); la parada «at» es la que está en curso
  const at = reduced ? STOPS.length : Math.min(step, STOPS.length);
  const reached = Math.min(at, STOPS.length - 1);
  const done = `M${STOPS.slice(0, reached + 1).map((p) => p.join(" ")).join(" L")}`;
  return (
    <div ref={ref} className={cn(panel, "flex items-center gap-3 p-3")} aria-hidden>
      <DotBg />
      <div className="relative h-full min-w-0 flex-1">
        <svg viewBox="0 0 312 248" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid meet">
          <path d={ROUTE_D} fill="none" stroke={C.loud} strokeWidth="1.5" strokeDasharray="4 4" />
          <path d={done} fill="none" stroke={C.glyph} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {STOPS.map(([sx, sy], k) => (
            <g key={k}>
              {k === at && <circle cx={sx} cy={sy} r="15" fill="none" stroke={C.glyph} strokeOpacity="0.5" className="xo-pulse" />}
              <circle cx={sx} cy={sy} r="9" fill={k <= at ? C.acc : C.surf} stroke={k <= at ? C.accB : C.line} style={{ transition: "fill 300ms, stroke 300ms" }} />
              {k < at ? <path d={`M${sx - 4} ${sy} l3 3 l5 -6`} fill="none" stroke={C.ok} strokeWidth="1.5" /> : <circle cx={sx} cy={sy} r="2.5" fill={k === at ? C.glyph : C.loud} />}
            </g>
          ))}
        </svg>
      </div>
      <ul className="relative flex w-[40%] max-w-52 shrink-0 flex-col gap-1 rounded-lg border border-line bg-surface p-2 shadow-card">
        <li className="mb-0.5 flex items-center justify-between px-1 font-mono text-2xs tracking-wider text-fg-muted"><span>{t("ORDEN DE CARGA", "LOADING ORDER")}</span><span>{at}/{STOPS.length}</span></li>
        {STOP_NAMES.map((n, k) => (
          <li key={n} className={cn("flex items-center justify-between gap-2 rounded-sm px-1.5 py-0.5 text-2xs transition-colors duration-(--xo-duration-base)", k === at ? "bg-accent-subtle text-accent-subtle-fg" : k < at ? "text-fg-secondary" : "text-fg-muted")}>
            <span className="truncate">{n}</span>
            {k < at ? <Icon name="check" size={10} className="shrink-0 text-success" /> : k === at ? <i className="size-1.5 shrink-0 rounded-pill bg-accent xo-pulse" /> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Registro de escenas que el contenido puede pedir por nombre. */
export const SCENES = {
  platforms: PlatformsIllo,
  security: SecurityIllo,
  offline: OfflineIllo,
  integration: IntegrationIllo,
  push: PushIllo,
  update: UpdateIllo,
  monitor: MonitorIllo,
  pipeline: PipelineIllo,
  broker: BrokerIllo,
  onprem: OnPremIllo,
  cloud: CloudIllo,
  fleet: FleetIllo,
  agents: AgentsIllo,
  chat: ChatIllo,
  sentiment: SentimentIllo,
  carshare: CarshareIllo,
  scan: ScanIllo,
  route: RouteIllo,
} satisfies Record<string, ComponentType>;
export type SceneName = keyof typeof SCENES;
