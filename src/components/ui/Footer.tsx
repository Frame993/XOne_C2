import type { ReactNode } from "react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { cn } from "./utils";
import { FullLine } from "../fx/GridLines";
import { DotMatrix } from "../fx/DotMatrix";
import { t } from "../../i18n";

export type FooterLink = { label: string; href: string; external?: boolean };
export type FooterColumn = { title: string; links: FooterLink[] };
export type FooterProps = {
  /** Frase de cierre de marca (titular + parte en acento). */
  statement: { title: string; accent?: string };
  cta?: FooterLink;
  contact?: { title: string; phone?: string; email?: string; address?: string[] };
  columns: FooterColumn[];
  /** Celdas de la barra legal (copyright, enlaces legales, idioma…). */
  legal: ReactNode[];
};

const cellHead = "flex h-12 items-center px-7 type-overline text-fg-muted";

/** Pie en tres bandas sobre la retícula de la página: marca + contacto, enlaces en filas, barra legal en celdas. */
export function Footer({ statement, cta, contact, columns, legal }: FooterProps) {
  const rows = Math.max(...columns.map((c) => c.links.length));
  return (
    <footer className="relative bg-(--xo-footer-bg)">
      {/* línea de frontera a todo el ancho; cae en la misma fila que la línea inferior de la sección anterior (nunca 2px) */}
      <FullLine position="top" />
      <div className="xo-container xo-rails p-0">
        {/* 1 · marca (izquierda) + contacto (derecha) */}
        {/* una sola celda: sin separador vertical entre marca y contacto */}
        <div className="xo-cells border-b-0">
          <div className="grid lg:grid-cols-[1.15fr_1fr]">
          <div className="relative flex min-h-80 flex-col gap-6 overflow-hidden p-7 md:p-10">
            <Logo className="relative h-7 self-start" />
            <p className="relative max-w-md text-balance text-fg type-title-sm">
              {statement.title}{statement.accent && <> <span className="text-fg-accent-display">{statement.accent}</span></>}
            </p>
            {cta && <Button href={cta.href} iconRight="arrow" className="relative self-start">{cta.label}</Button>}
            {/* arte de caracteres al pie del bloque de marca, desvanecido hacia arriba */}
            <DotMatrix mode="field" className="right-0 bottom-0 hidden h-40 w-[55%] opacity-70 [mask-image:linear-gradient(0deg,black,transparent),linear-gradient(90deg,transparent,black_40%)] [mask-composite:intersect] md:block" />
          </div>
          {/* contacto: un solo bloque, alineado a la derecha en escritorio */}
          {contact && (
            <div className="flex flex-col justify-center gap-6 p-7 md:p-10 lg:items-end lg:text-right">
              <p className="type-overline text-fg-muted">{contact.title}</p>
              <div className="flex flex-col gap-4 type-body lg:items-end">
                {contact.phone && <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-3 self-start text-fg transition-colors hover:text-fg-accent lg:flex-row-reverse lg:self-end"><Icon name="phone" size={16} className="text-fg-muted" />{contact.phone}</a>}
                {contact.email && <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-3 self-start text-fg transition-colors hover:text-fg-accent lg:flex-row-reverse lg:self-end"><Icon name="mail" size={16} className="text-fg-muted" />{contact.email}</a>}
                {contact.address && <address className="flex gap-3 not-italic text-fg-secondary lg:flex-row-reverse"><Icon name="pin" size={16} className="mt-1 shrink-0 text-fg-muted" /><span>{contact.address.map((l) => <span key={l} className="block">{l}</span>)}</span></address>}
              </div>
            </div>
          )}
          </div>
        </div>

        {/* 2 · enlaces: cada enlace es una fila de la rejilla */}
        <nav aria-label={t("Pie de página", "Footer")} className="xo-cells grid-cols-2 border-t border-line-faint border-b-0 lg:grid-cols-4">
          {columns.map((c) => (
            <div key={c.title} className="flex flex-col">
              <h2 className={cn(cellHead, "border-b border-line-faint px-5 font-semibold text-(--xo-footer-heading-fg) sm:px-7")}>{c.title}</h2>
              <ul className="flex flex-col">
                {c.links.map((l) => (
                  <li key={l.href} className="border-b border-line-faint">
                    <a href={l.href} {...(l.external ? { target: "_blank", rel: "noopener" } : {})} className="group flex min-h-12 items-center justify-between gap-3 px-5 py-2 type-body-sm sm:px-7 text-(--xo-footer-link-fg) transition-colors duration-(--xo-duration-base) hover:bg-surface hover:text-(--xo-footer-link-fg-hover)">
                      <span>{l.label}</span>
                      <Icon name={l.external ? "external" : "arrow"} size={14} className="shrink-0 -translate-x-1 text-fg-accent opacity-0 transition-[opacity,translate] duration-(--xo-duration-base) group-hover:translate-x-0 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
                {/* filas vacías: todas las columnas terminan a la misma altura */}
                {Array.from({ length: rows - c.links.length }, (_, i) => <li key={`vacía-${i}`} aria-hidden className="hidden h-12 border-b border-line-faint lg:block" />)}
              </ul>
            </div>
          ))}
        </nav>

        {/* 3 · barra legal en celdas */}
        {/* la primera celda ocupa dos columnas (copyright + avisos) → la barra se alinea con las columnas de enlaces */}
        <div className="xo-cells grid-cols-2 border-t border-line-faint lg:grid-cols-4">
          {legal.map((cell, i) => <div key={i} className={cn("flex min-h-14 flex-wrap items-center gap-x-6 gap-y-1 px-5 py-3 sm:px-7 type-body-sm text-fg-muted", i === 0 && "col-span-2")}>{cell}</div>)}
        </div>
      </div>
    </footer>
  );
}
