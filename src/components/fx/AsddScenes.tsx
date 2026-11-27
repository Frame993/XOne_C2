import { useEffect, useState, type ReactNode } from "react";
import { cn } from "../ui/utils";
import { Icon, type IconName } from "../ui/Icon";
import { t } from "../../i18n";
import { useInView, useReducedMotion } from "./hooks";

/**
 * Escenas del ciclo ASDD y del bucle (Home). Reglas (docs/estudio-firecrawl.md):
 * - cada escena demuestra literalmente la frase de su tarjeta (textos del documento de visión);
 * - un solo vocabulario: ventana / móvil en alambre, filas, chips, barras; borde 1px `line`;
 * - radios fijos: marco 12px (rounded-lg) · todo lo de dentro 8px (rounded-md) · barras y puntos pill;
 * - texto sans en tamaño de interfaz (13px); mono sólo para contadores;
 * - un solo acento, sólo en lo que cambia;
 * - el marco va a sangre (se corta por abajo y se desvanece);
 * - una secuencia de estado al entrar en vista, reposo y repetición lenta; reduced-motion → estado final.
 */

/** Paso de una secuencia: avanza 0…n-1 cada `every` ms, se queda en el último `hold` pasos y vuelve a empezar. */
function useSequence(n: number, every = 750, hold = 6) {
  const reduced = useReducedMotion();
  const [ref, inView] = useInView<HTMLDivElement>();
  const [k, setK] = useState(0);
  useEffect(() => {
    if (reduced || !inView) return;
    setK(0);
    const id = setInterval(() => setK((s) => (s + 1) % (n + hold)), every);
    return () => clearInterval(id);
  }, [reduced, inView, n, every, hold]);
  return [ref, reduced ? n - 1 : Math.min(k, n - 1)] as const;
}

const tr = "transition-[color,background-color,border-color,opacity,transform,width] duration-300 ease-(--xo-easing-out)";
const label = "text-xs text-fg-muted";
const frame = "absolute rounded-t-lg border border-b-0 border-line bg-surface";

/** Lienzo de la escena: el marco entra desde arriba y se corta por abajo con un fundido. */
function Stage({ children }: { children: ReactNode }) {
  return <div aria-hidden className="relative h-full w-full overflow-hidden [mask-image:linear-gradient(180deg,black_78%,transparent)]">{children}</div>;
}

/** Ventana en alambre (3 puntos + título). */
function Win({ title, meta, className, children }: { title: string; meta?: ReactNode; className?: string; children: ReactNode }) {
  return (
    <div className={cn(frame, className)}>
      <div className="flex h-10 items-center gap-3 border-b border-line-faint px-4">
        <span className="flex gap-1.5">{[0, 1, 2].map((i) => <i key={i} className="size-2 rounded-pill bg-line" />)}</span>
        <span className={cn(label, "truncate")}>{title}</span>
        {meta && <span className="ml-auto hidden shrink-0 font-mono text-xs text-fg-muted sm:inline">{meta}</span>}
      </div>
      {children}
    </div>
  );
}

/** Móvil en alambre. */
function Phone({ title, status, className, children }: { title: string; status?: ReactNode; className?: string; children: ReactNode }) {
  return (
    <div className={cn(frame, "w-40 p-3", className)}>
      <div className="mx-auto mb-3 h-1 w-10 rounded-pill bg-line" />
      <div className="mb-3 flex items-center justify-between gap-2"><span className={label}>{title}</span>{status}</div>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

const Bar = ({ w, on }: { w: string; on?: boolean }) => <i className={cn("block h-1 rounded-pill", tr, on ? "bg-accent" : "bg-line")} style={{ width: w }} />;
const Ghost = ({ className }: { className?: string }) => <i className={cn("block rounded-md border border-line-faint", className)} />;

function Chip({ on, icon, children }: { on?: boolean; icon?: IconName; children: ReactNode }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs", tr, on ? "border-accent-border bg-accent-subtle text-accent-subtle-fg" : "border-line text-fg-secondary")}>
      {icon && <Icon name={icon} size={12} />}{children}
    </span>
  );
}

function Btn({ on, children }: { on?: boolean; children: ReactNode }) {
  return <span className={cn("inline-flex items-center whitespace-nowrap rounded-md border px-3 py-1.5 text-xs", tr, on ? "border-accent bg-accent text-accent-fg" : "border-line text-fg-muted")}>{children}</span>;
}

/** Burbuja de conversación. */
function Bubble({ show = true, side = "l", on, children }: { show?: boolean; side?: "l" | "r"; on?: boolean; children: ReactNode }) {
  return (
    <p className={cn("max-w-[80%] rounded-md border px-3 py-2 text-sm", tr, side === "r" && "ml-auto", on ? "border-line text-fg" : "border-line-faint text-fg-secondary", show ? "opacity-100" : "translate-y-1 opacity-0")}>
      {children}
    </p>
  );
}

const inset = "inset-x-6 top-8 -bottom-2 md:inset-x-10";

/* ───────── 01 · Entender: los agentes analizan el proceso y marcan dónde se pierde tiempo ───────── */
const UNDERSTAND = t(["Cómo trabaja el equipo", "Datos del ERP", "Reglas que se aplican", "Dónde se pierde tiempo"], ["How the team works", "Data in the ERP", "Rules that apply", "Where time is lost"]);

export function UnderstandScene() {
  const [ref, k] = useSequence(6); // 0–3 analiza cada fila · 4 marca el hallazgo · 5 pide validación
  return (
    <div ref={ref} className="h-full">
      <Stage>
        <Win title={t("XOneCode · Análisis del proceso", "XOneCode · Process analysis")} meta={`${Math.min(k + 1, 4)}/4`} className={inset}>
          <ul className="p-2">
            {UNDERSTAND.map((l, i) => {
              const found = i === 3 && k >= 4, active = k === i, done = k > i;
              return (
                <li key={l} className={cn("flex h-10 items-center gap-4 rounded-md px-3 text-sm", tr, found ? "bg-accent-subtle" : active && "bg-hover")}>
                  <span className={cn("min-w-0 flex-1 truncate", tr, found ? "text-accent-subtle-fg" : done || active ? "text-fg" : "text-fg-muted")}>{l}</span>
                  <span className="hidden w-24 sm:block"><Bar w={done || active ? `${[70, 50, 85, 40][i]}%` : "0%"} on={found} /></span>
                  <Icon name="check" size={14} className={cn("shrink-0", tr, done ? (found ? "text-fg-accent" : "text-fg-muted") : "opacity-0")} />
                </li>
              );
            })}
          </ul>
          <div className="mx-2 flex items-center justify-between gap-3 border-t border-line-faint px-3 py-3">
            <span className={label}>{t("La persona", "The person")}</span>
            <Btn on={k >= 5}>{t("Validar", "Confirm")}</Btn>
          </div>
        </Win>
      </Stage>
    </div>
  );
}

/* ───────── 02 · Construir: XOneCode genera pantallas, flujos, reglas e integraciones; la persona aprueba ───────── */
const BUILD = t(["Pantallas", "Flujos", "Reglas", "Integraciones"], ["Screens", "Flows", "Rules", "Integrations"]);

export function BuildScene() {
  const [ref, k] = useSequence(6); // 0–3 construye cada parte · 4 lista · 5 aprobación
  return (
    <div ref={ref} className="h-full">
      <Stage>
        <Win title={t("XOneCode · App a medida sobre XOne", "XOneCode · Custom app on XOne")} className={inset}>
          <div className="flex">
            <div className="min-w-0 flex-1 p-2">
              <ul>
                {BUILD.map((l, i) => {
                  const done = k > i, active = k === i;
                  return (
                    <li key={l} className={cn("flex h-10 items-center gap-4 rounded-md px-3 text-sm", tr, active && "bg-hover")}>
                      <span className={cn("w-24 shrink-0", tr, done || active ? "text-fg" : "text-fg-muted")}>{l}</span>
                      <span className="h-1 min-w-0 flex-1 overflow-hidden rounded-pill bg-line"><i className={cn("block h-full rounded-pill", tr, active ? "bg-accent" : "bg-fg-muted")} style={{ width: done ? "100%" : active ? "55%" : "0%" }} /></span>
                      <Icon name="check" size={14} className={cn("shrink-0 text-fg-muted", tr, !done && "opacity-0")} />
                    </li>
                  );
                })}
              </ul>
              <div className="mt-1 flex items-center justify-between gap-3 border-t border-line-faint px-3 py-3">
                <span className={label}>{t("La persona", "The person")}</span>
                <Btn on={k >= 5}>{t("Aprobar", "Approve")}</Btn>
              </div>
            </div>
            {/* la app que va apareciendo, bloque a bloque */}
            <div className="hidden w-44 shrink-0 border-l border-line-faint p-4 sm:block">
              <div className="flex flex-col gap-2 rounded-md border border-line p-3">
                <Bar w="45%" />
                <Ghost className={cn("h-12", tr, k >= 0 ? "opacity-100" : "opacity-0")} />
                <span className={cn("flex gap-2", tr, k >= 1 ? "opacity-100" : "opacity-0")}><Ghost className="h-7 flex-1" /><Ghost className="h-7 flex-1" /></span>
                <Ghost className={cn("h-7", tr, k >= 2 ? "opacity-100" : "opacity-0")} />
                <i className={cn("block h-7 rounded-md border", tr, k >= 3 ? "opacity-100" : "opacity-0", k >= 5 ? "border-accent-border bg-accent-subtle" : "border-line-faint")} />
              </div>
            </div>
          </div>
        </Win>
      </Stage>
    </div>
  );
}

/* ───────── 03 · Operar: en la calle, sin cobertura; NappAI asigna, avisa y escala; NappAI Voice llama ───────── */
const ACTIONS = t(["Asignar", "Avisar", "Escalar"], ["Assign", "Notify", "Escalate"]);

export function OperateScene() {
  const [ref, k] = useSequence(6); // 0 orden · 1–3 acciones · 4 llamada · 5 excepción a la persona
  return (
    <div ref={ref} className="h-full">
      <Stage>
        <Phone title={t("Técnico", "Technician")} status={<Icon name="signal" size={14} className="text-fg-muted" />} className="top-8 -bottom-2 left-6 hidden sm:block md:left-10">
          <div className="rounded-md border border-line p-3">
            <span className="text-xs text-fg">{t("Orden", "Order")}</span>
            <div className="mt-2 flex flex-col gap-1.5"><Bar w="85%" /><Bar w="60%" /></div>
          </div>
          <span className="text-xs text-fg-muted">{t("Sin cobertura", "No coverage")}</span>
          <Ghost className="h-8" />
          <Ghost className="h-8" />
        </Phone>
        <div className="absolute top-8 right-6 left-6 flex flex-col gap-5 sm:left-54 md:right-10 md:left-58">
          <div className="flex flex-col gap-2">
            <span className={label}>NappAI</span>
            <div className="flex flex-wrap gap-2">{ACTIONS.map((a, i) => <Chip key={a} on={k === i + 1}>{a}</Chip>)}</div>
          </div>
          <div className="flex flex-col gap-2">
            <span className={label}>NappAI Voice</span>
            <span className="self-start"><Chip on={k === 4} icon="phone">{t("Llamada", "Call")}</Chip></span>
          </div>
          <div className="flex flex-col gap-2">
            <span className={label}>{t("La persona", "The person")}</span>
            <span className="self-start"><Btn on={k >= 5}>{t("Supervisar excepción", "Review exception")}</Btn></span>
          </div>
        </div>
      </Stage>
    </div>
  );
}

/* ───────── 04 · Mejorar: lo que pasa vuelve a los agentes; detectan el atasco y proponen un cambio; la persona decide ───────── */
const QUEUES = [[2, 2, 2, 2, 2], [1, 2, 3, 4, 6], [2, 1, 2, 1, 1], [1, 1, 1, 2, 1]]; // el paso 2 se va llenando

export function ImproveScene() {
  const [ref, k] = useSequence(6); // 0–3 llegan datos · 4 atasco · 5 cambio propuesto
  return (
    <div ref={ref} className="h-full">
      <Stage>
        <Win title={t("NappAI · Operación", "NappAI · Operations")} className={inset}>
          <div className="grid grid-cols-4 gap-2 p-3">
            {QUEUES.map((q, i) => {
              const n = q[Math.min(k, 4)], jam = i === 1 && k >= 4;
              return (
                <div key={i} className={cn("flex h-24 flex-col justify-between rounded-md border p-2.5", tr, jam ? "border-accent-border bg-accent-subtle" : "border-line-faint")}>
                  <span className={cn("text-xs", jam ? "text-accent-subtle-fg" : "text-fg-muted")}>{t("Paso", "Step")} {i + 1}</span>
                  <div className="flex flex-wrap-reverse gap-1">{Array.from({ length: 6 }, (_, j) => <i key={j} className={cn("size-2 rounded-pill", tr, j < n ? (jam ? "bg-accent" : "bg-fg-muted") : "opacity-0")} />)}</div>
                </div>
              );
            })}
          </div>
          <div className={cn("mx-3 flex min-h-12 items-center justify-between gap-3 rounded-md border px-3 py-2", tr, k >= 5 ? "border-line" : "border-dashed border-line-faint")}>
            <span className={cn("min-w-0 truncate text-sm text-fg", tr, k >= 5 ? "opacity-100" : "opacity-0")}>{t("XOneCode propone un cambio en el paso 2", "XOneCode proposes a change to step 2")}</span>
            <span className={cn("flex shrink-0 gap-2", tr, k >= 5 ? "opacity-100" : "opacity-0")}><Btn>{t("Descartar", "Dismiss")}</Btn><Btn on>{t("Aplicar", "Apply")}</Btn></span>
          </div>
        </Win>
      </Stage>
    </div>
  );
}

/* ───────── Bucle A · de la conversación a la calle ───────── */
export function CallToStreetScene() {
  const [ref, k] = useSequence(5); // 0 llamada · 1 entiende · 2 ERP · 3 técnico y franja · 4 orden en el móvil
  return (
    <div ref={ref} className="h-full">
      <Stage>
        <Win title={t("NappAI Voice · Llamada", "NappAI Voice · Call")} className="top-8 right-52 -bottom-2 left-6 md:right-auto md:left-10 md:w-[54%]">
          <div className="flex flex-col gap-2.5 p-4">
            <Bubble>{t("Aviso de una avería", "A fault is reported")}</Bubble>
            <Bubble side="r" show={k >= 1} on>{t("El agente entiende el problema", "The agent understands the problem")}</Bubble>
            <div className={cn("flex flex-wrap gap-2", tr, k >= 2 ? "opacity-100" : "opacity-0")}>
              <Chip on={k === 2}>{t("NappAI consulta el ERP", "NappAI checks the ERP")}</Chip>
              <Chip on={k === 3}>{t("Técnico y franja", "Technician and slot")}</Chip>
            </div>
          </div>
        </Win>
        <Phone title={t("Técnico", "Technician")} className="top-8 right-6 -bottom-2 md:right-10">
          <div className={cn("rounded-md border p-3", tr, k >= 4 ? "border-accent-border bg-accent-subtle" : "border-dashed border-line-faint")}>
            <span className={cn("text-xs", tr, k >= 4 ? "text-accent-subtle-fg" : "text-transparent")}>{t("Orden nueva", "New order")}</span>
            <div className={cn("mt-2 flex flex-col gap-1.5", tr, k >= 4 ? "opacity-100" : "opacity-0")}><Bar w="85%" /><Bar w="60%" /><Bar w="40%" /></div>
          </div>
          <Ghost className="h-8" />
        </Phone>
      </Stage>
    </div>
  );
}

/* ───────── Bucle B · de la calle a la conversación ───────── */
export function StreetToCallScene() {
  const [ref, k] = useSequence(5); // 0 botón · 1 llamada · 2 alternativa · 3–4 ruta actualizada
  return (
    <div ref={ref} className="h-full">
      <Stage>
        <Phone title={t("Repartidor", "Driver")} className="top-8 -bottom-2 left-6 md:left-10">
          <Btn on={k === 0}>{t("Nadie en casa", "Nobody home")}</Btn>
          <span className={label}>{t("Ruta", "Route")}</span>
          {[t("Parada actual", "Current stop"), t("Siguiente", "Next")].map((s, i) => (
            <span key={s} className={cn("flex items-center justify-between rounded-md border px-2.5 py-1.5 text-xs", tr, i === 0 && k >= 3 ? "border-accent-border bg-accent-subtle text-accent-subtle-fg" : "border-line-faint text-fg-muted")}>
              {s}{i === 0 && k >= 3 && <Icon name="refresh" size={12} />}
            </span>
          ))}
        </Phone>
        <Win title={t("NappAI Voice · Llamada", "NappAI Voice · Call")} className="top-8 right-6 -bottom-2 left-52 md:right-10 md:left-auto md:w-[54%]">
          <div className="flex flex-col gap-2.5 p-4">
            <Bubble show={k >= 1} on>{t("El agente llama al destinatario", "The agent calls the recipient")}</Bubble>
            <Bubble side="r" show={k >= 2}>{t("Acuerdan una alternativa", "They agree an alternative")}</Bubble>
            <span className={cn("self-start", tr, k >= 3 ? "opacity-100" : "opacity-0")}><Chip on icon="map">{t("Ruta actualizada", "Route updated")}</Chip></span>
          </div>
        </Win>
      </Stage>
    </div>
  );
}

export const ASDD_SCENES = { understand: UnderstandScene, build: BuildScene, operate: OperateScene, improve: ImproveScene, callToStreet: CallToStreetScene, streetToCall: StreetToCallScene };
