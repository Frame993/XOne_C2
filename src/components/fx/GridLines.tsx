import type { CSSProperties, ReactNode } from "react";
import { cn } from "../ui/utils";

/**
 * Sistema de rejilla de página (estudiado en firecrawl.dev y reinterpretado):
 *  - PageRails: raíles verticales fijos en los bordes del contenedor, toda la altura de la página.
 *  - FullLine: línea horizontal que cruza todo el viewport en cada límite de sección.
 *  - Connector: nodo cóncavo de 21px donde una FullLine cruza un raíl (las "uniones" de la rejilla).
 *  - FrameSection: sección enmarcada (hero, CTA) = contenedor + 1 columna exterior por lado (1314px).
 * Reglas: toda frontera de sección es FullLine + Connectors en los raíles; las celdas de contenido son
 * cuadradas (xo-cells); las celdas decorativas (GridCanvas) llevan esquinas redondeadas.
 */

/*
 * Posiciones de la rejilla redondeadas a píxel entero: si el ancho libre (viewport − contenedor) es impar
 * —p. ej. con barra de scroll visible— un centrado con 50% / translate(-50%) deja cada línea de 1px en medio
 * píxel y el navegador la pinta como 2px grises. Por eso contenedor, raíles y marco usan round(down, …, 1px)
 * (igual que .xo-container en theme.css) y los nodos se centran en el MEDIO de la línea (+/−0.5px), no en su borde.
 */
const CW = "min(100% - 2 * var(--xo-size-gutter), var(--xo-size-container))";
const L = "round(down, max(var(--xo-size-gutter), (100% - var(--xo-size-container)) / 2), 1px)";
const FL = "round(down, (100% - var(--xo-size-container) - 202px) / 2, 1px)";
const RAIL = `calc(${L} + 0.5px)`;
const RAIL_R = `calc(${L} + ${CW} - 0.5px)`;
const MID = `calc(${L} + ${CW} / 2 - 0.5px)`;
const FRAME = `calc(${FL} + 0.5px)`;
const FRAME_R = `calc(${FL} + var(--xo-size-container) + 202px - 0.5px)`;
export const RAILS = { left: RAIL, right: RAIL_R, mid: MID, frameLeft: FRAME, frameRight: FRAME_R, containerLeft: L, frameEdge: FL };

/**
 * Nodo de unión: cruz de 1px con esquinas interiores cóncavas (radio 6px), en el color de las líneas.
 * Se usa SÓLO donde una FullLine cruza un raíl, el marco o la división central de un GridSpacer y
 * ambos lados del cruce son fondo neutro. Nunca sobre bloques de color, ni dentro de celdas, ni suelto.
 */
export function Connector({ className, style, half }: { className?: string; style?: CSSProperties; half?: "top" | "bottom" }) {
  const clip = half === "bottom" ? "inset(50% 0 0 0)" : half === "top" ? "inset(0 0 50% 0)" : undefined;
  return (
    <svg aria-hidden viewBox="0 0 21 21" className={cn("pointer-events-none absolute z-[3] size-[21px] -translate-x-1/2 -translate-y-1/2 text-line-faint", className)} style={{ clipPath: clip, ...style }}>
      <path fill="currentColor" d="M10 0h1v4.5A6 6 0 0 0 16.5 10H21v1h-4.5A6 6 0 0 0 11 16.5V21h-1v-4.5A6 6 0 0 0 4.5 11H0v-1h4.5A6 6 0 0 0 10 4.5z" />
    </svg>
  );
}

/** Línea horizontal a todo el ancho + uniones en los raíles (y en el marco exterior si `frame`). */
export function FullLine({ position = "bottom", frame = false, center = false, centerHalf, nodes = true }: { position?: "top" | "bottom"; frame?: boolean; center?: boolean; centerHalf?: "top" | "bottom"; nodes?: boolean }) {
  // Convención única: toda línea de frontera ocupa la fila de píxel JUSTO ENCIMA del límite ([T−1, T]).
  // Así la línea inferior de una sección y la superior de la siguiente caen en la misma fila y nunca suman 2px.
  const y = position === "top" ? "-0.5px" : "calc(100% - 0.5px)";
  return (
    <>
      <span aria-hidden className="pointer-events-none absolute left-1/2 z-[2] h-px w-screen -translate-x-1/2 bg-line-faint" style={{ top: position === "top" ? -1 : undefined, bottom: position === "bottom" ? 0 : undefined }} />
      {nodes && <Connector style={{ top: y, left: RAIL }} />}
      {nodes && <Connector style={{ top: y, left: RAIL_R }} />}
      {nodes && center && <Connector half={centerHalf} className="hidden lg:block" style={{ top: y, left: MID }} />}
      {nodes && frame && (
        <>
          <Connector className="hidden lg:block" style={{ top: y, left: FRAME }} />
          <Connector className="hidden lg:block" style={{ top: y, left: FRAME_R }} />
        </>
      )}
    </>
  );
}

/** Raíles fijos del contenedor (siempre visibles, por detrás del contenido). */
export function PageRails() {
  return <div aria-hidden className="pointer-events-none fixed inset-y-0 z-0 border-x border-line-faint" style={{ left: L, width: CW }} />;
}

/** Líneas verticales del marco exterior (contenedor + 101px por lado) para bandas que no son FrameSection (anuncio, header). */
export function FrameRails() {
  return <div aria-hidden className="pointer-events-none absolute inset-y-0 hidden w-[calc(var(--xo-size-container)+202px)] border-x border-line-faint lg:block" style={{ left: FL }} />;
}

/** Sección enmarcada a 1314px con columnas exteriores, líneas a todo el ancho arriba/abajo y etiquetas de esquina. */
export function FrameSection({ children, labels, className, label, style, background }: { children: ReactNode; labels?: [string, string, string, string]; className?: string; label?: string; style?: CSSProperties; background?: ReactNode }) {
  return (
    <section aria-label={label} className={cn("relative", className)} style={style}>
      {/* marco exterior (contenedor + 101px por lado) */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 hidden w-[calc(var(--xo-size-container)+202px)] border-x border-line-faint lg:block" style={{ left: FL }}>
        {background}
        {labels && (
          <div className="type-overline text-fg-muted">
            <span className="absolute top-3 left-3 flex items-center gap-1.5"><i className="size-1 bg-accent" />{labels[0]}</span>
            <span className="absolute top-3 right-3 flex items-center gap-1.5"><i className="size-1 bg-accent" />{labels[1]}</span>
            <span className="absolute bottom-3 left-3 flex items-center gap-1.5"><i className="size-1 bg-accent" />{labels[2]}</span>
            <span className="absolute right-3 bottom-3 flex items-center gap-1.5"><i className="size-1 bg-accent" />{labels[3]}</span>
          </div>
        )}
      </div>
      <FullLine position="top" frame />
      <FullLine position="bottom" frame />
      {children}
    </section>
  );
}
