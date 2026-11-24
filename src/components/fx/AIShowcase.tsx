import { useEffect, useState, type ReactNode } from "react";
import { cn } from "../ui/utils";
import { Icon, type IconName } from "../ui/Icon";
import { useInView, useReducedMotion } from "./hooks";
import { t } from "../../i18n";

/**
 * "La IA en cada paso" — patrón "use cases" de la referencia:
 *  - columna izquierda con las pestañas SIEMPRE visibles (icono, título, descripción); la activa se tiñe,
 *    lleva borde de acento con progreso;
 *  - a la derecha una demo con contenido concreto (no esqueletos grises): estado, tabla con contadores
 *    que suben y un panel flotante que se va escribiendo;
 *  - debajo de la demo, una franja con XOneCode.
 * Los textos y cifras de las demos son ilustrativos (ver CONTENT_MAP.md).
 */

type Demo = {
  status: string;
  rows: [string, number, string?][];
  panelTitle: string;
  panel: { title: string; meta: string }[];
};

const DEMOS: Demo[] = t<Demo[]>([
  {
    status: "Generando pantalla",
    rows: [["Pantallas", 3], ["Componentes", 18], ["Variantes de diseño", 4], ["Adaptado a la marca", 100, "%"]],
    panelTitle: "Orden de trabajo con mapa y firma",
    panel: [
      { title: "Cabecera · Orden #2481", meta: "componente" },
      { title: "Mapa de ubicación", meta: "componente" },
      { title: "Firma del cliente", meta: "componente" },
    ],
  },
  {
    status: "Organizando en Autopilot",
    rows: [["Requisitos", 12], ["Tareas creadas", 34], ["Historias de usuario", 8], ["Dependencias", 5]],
    panelTitle: "Requisitos del proyecto",
    panel: [
      { title: "Acceso con biometría", meta: "T-101 · en curso" },
      { title: "Fotos de la avería", meta: "T-102 · pendiente" },
      { title: "Modo sin cobertura", meta: "T-103 · pendiente" },
    ],
  },
  {
    status: "Agentes trabajando",
    rows: [["Tareas programadas", 7], ["Pruebas superadas", 42], ["Despliegues", 3], ["Revisiones pendientes", 2]],
    panelTitle: "Registro del agente",
    panel: [
      { title: "Leyendo el proyecto XOne", meta: "MCP" },
      { title: "Programando la tarea T-103", meta: "skills" },
      { title: "Pruebas en verde · desplegado", meta: "entorno de pruebas" },
    ],
  },
  {
    status: "Documentando",
    rows: [["Funciones documentadas", 56], ["Pantallas", 14], ["Diagramas", 6], ["Al día", 100, "%"]],
    panelTitle: "crearOrden()",
    panel: [
      { title: "Crea una orden de trabajo", meta: "descripción" },
      { title: "cliente, ubicación, técnico", meta: "parámetros" },
      { title: "Orden con estado «Pendiente»", meta: "resultado" },
    ],
  },
  {
    status: "Atendiendo consultas",
    rows: [["Consultas atendidas", 128], ["Resueltas sin escalar", 91, "%"], ["Idiomas", 3], ["Abiertas", 4]],
    panelTitle: "¿Cómo reasigno una orden?",
    panel: [
      { title: "Abre la orden y pulsa «Reasignar»", meta: "paso 1" },
      { title: "Elige el técnico disponible", meta: "paso 2" },
      { title: "El técnico recibe un aviso", meta: "paso 3" },
    ],
  },
], [
  {
    status: "Generating screen",
    rows: [["Screens", 3], ["Components", 18], ["Design variants", 4], ["On brand", 100, "%"]],
    panelTitle: "Work order with map and signature",
    panel: [
      { title: "Header · Order #2481", meta: "component" },
      { title: "Location map", meta: "component" },
      { title: "Customer signature", meta: "component" },
    ],
  },
  {
    status: "Organizing in Autopilot",
    rows: [["Requirements", 12], ["Tasks created", 34], ["User stories", 8], ["Dependencies", 5]],
    panelTitle: "Project requirements",
    panel: [
      { title: "Biometric sign-in", meta: "T-101 · in progress" },
      { title: "Photos of the fault", meta: "T-102 · pending" },
      { title: "Offline mode", meta: "T-103 · pending" },
    ],
  },
  {
    status: "Agents at work",
    rows: [["Tasks coded", 7], ["Tests passed", 42], ["Deployments", 3], ["Pending reviews", 2]],
    panelTitle: "Agent log",
    panel: [
      { title: "Reading the XOne project", meta: "MCP" },
      { title: "Coding task T-103", meta: "skills" },
      { title: "Tests green · deployed", meta: "test environment" },
    ],
  },
  {
    status: "Documenting",
    rows: [["Functions documented", 56], ["Screens", 14], ["Diagrams", 6], ["Up to date", 100, "%"]],
    panelTitle: "createOrder()",
    panel: [
      { title: "Creates a work order", meta: "description" },
      { title: "customer, location, technician", meta: "parameters" },
      { title: "Order with “Pending” status", meta: "result" },
    ],
  },
  {
    status: "Answering questions",
    rows: [["Questions answered", 128], ["Solved without escalation", 91, "%"], ["Languages", 3], ["Open", 4]],
    panelTitle: "How do I reassign an order?",
    panel: [
      { title: "Open the order and tap “Reassign”", meta: "step 1" },
      { title: "Choose an available technician", meta: "step 2" },
      { title: "The technician gets a notification", meta: "step 3" },
    ],
  },
]);

const ICONS: IconName[] = ["layers", "doc", "code", "doc", "chat"];

function useCount(target: number, run: boolean, duration = 1400) {
  const reduced = useReducedMotion();
  const [n, setN] = useState(reduced ? target : 0);
  useEffect(() => {
    if (reduced) { setN(target); return; }
    if (!run) return;
    setN(0);
    let raf = 0;
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration, reduced]);
  return n;
}

function useStepper(max: number, run: boolean, every: number, key: unknown) {
  const reduced = useReducedMotion();
  const [n, setN] = useState(reduced ? max : 0);
  useEffect(() => {
    if (reduced) { setN(max); return; }
    if (!run) return;
    setN(0);
    const id = setInterval(() => setN((x) => (x >= max ? x : x + 1)), every);
    return () => clearInterval(id);
  }, [max, run, every, reduced, key]);
  return n;
}

function Row({ label, value, unit, run }: { label: string; value: number; unit?: string; run: boolean }) {
  const n = useCount(value, run);
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-line-faint px-6 py-4 last:border-b-0">
      <span className="type-body-sm text-fg-secondary">{label}</span>
      <span className="font-mono type-body-sm tabular-nums text-fg">{n.toLocaleString(t("es-ES", "en-GB"))}{unit ? ` ${unit}` : ""}</span>
    </div>
  );
}

function DemoView({ demo, run }: { demo: Demo; run: boolean }) {
  const chars = useStepper(demo.panelTitle.length, run, 40, demo);
  const shown = useStepper(3, run, 700, demo);
  return (
    <div className="relative grid h-full grid-cols-1 xl:grid-cols-[1fr_320px]">
      <div className="flex flex-col xl:border-r xl:border-line-faint">
        <div className="flex items-center gap-3 border-b border-line-faint px-6 py-4">
          <span className="relative inline-flex size-2.5"><span className="absolute inset-0 rounded-pill bg-accent opacity-60 motion-safe:animate-ping" /><span className="relative size-2.5 rounded-pill bg-accent" /></span>
          <span className="type-body-sm font-semibold text-fg">{demo.status}<span className="xo-dots" /></span>
        </div>
        {demo.rows.map(([l, v, u]) => <Row key={l} label={l} value={v} unit={u} run={run} />)}
      </div>
      <div className="relative hidden bg-bg-subtle p-5 xl:block">
        <div className="flex flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-float">
          <div className="flex items-center gap-2 border-b border-line-faint px-4 py-3 type-body-sm">
            <Icon name="search" className="shrink-0 text-fg-muted" />
            <span className="truncate text-fg">{demo.panelTitle.slice(0, chars)}<span className="xo-caret" /></span>
          </div>
          <ul className="flex flex-col">
            {demo.panel.map((p, k) => (
              <li key={p.title} className={cn("flex flex-col gap-1 border-b border-line-faint px-4 py-3.5 transition-all duration-(--xo-duration-slow) last:border-b-0", k < shown ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0")}>
                <span className="type-body-sm font-semibold text-fg">{p.title}</span>
                <span className="flex items-center gap-1.5 type-micro text-fg-muted"><i className="size-1 bg-accent" />{p.meta}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function AIShowcase({ steps, footer, every = 7000 }: { steps: { title: string; text: string }[]; footer?: ReactNode; every?: number }) {
  const reduced = useReducedMotion();
  const [ref, inView] = useInView<HTMLDivElement>();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (reduced || paused || !inView) return;
    const id = setTimeout(() => setI((x) => (x + 1) % steps.length), every);
    return () => clearTimeout(id);
  }, [i, reduced, paused, inView, every, steps.length]);

  return (
    <div ref={ref} className="grid lg:grid-cols-[300px_1fr]">
      <div role="tablist" aria-orientation="vertical" aria-label={t("Pasos", "Steps")} className="xo-curvy flex flex-col border-b border-line-faint lg:border-r" onMouseLeave={() => setPaused(false)}>
        {steps.map((s, k) => {
          const active = k === i;
          return (
            <button key={s.title} type="button" role="tab" aria-selected={active} onClick={() => { setI(k); setPaused(true); }} onFocus={() => { setI(k); setPaused(true); }}
              className={cn("relative flex flex-1 flex-col gap-2 border-b border-line-faint px-6 py-6 text-left transition-colors duration-(--xo-duration-base) last:border-b-0", active ? "bg-accent-subtle" : "hover:bg-surface")}>
              <span className="absolute inset-y-0 left-0 w-0.5">
                {active && <span key={`${i}-${paused}`} className={cn("block size-full origin-top bg-accent", !reduced && !paused && inView && "xo-progress-y")} style={{ animationDuration: `${every}ms` }} />}
              </span>
              <span className={cn("flex items-center gap-2 type-item", active ? "text-fg-accent" : "text-fg")}><Icon name={ICONS[k]} size={16} />{s.title}</span>
              <span className="type-body-sm text-fg-muted">{s.text}</span>
            </button>
          );
        })}
      </div>
      <div className="flex min-w-0 flex-col">
        <div className="xo-curvy relative min-h-[380px] flex-1 border-b border-line-faint" role="tabpanel" aria-label={steps[i].title}>
          <div key={i} className="h-full animate-fade-in-up"><DemoView demo={DEMOS[i]} run={inView} /></div>
        </div>
        {footer && <div className="xo-curvy border-b border-line-faint">{footer}</div>}
      </div>
    </div>
  );
}
