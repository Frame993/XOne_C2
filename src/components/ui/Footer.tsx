import type { ReactNode } from "react";
import { Logo } from "./Logo";
import { Connector } from "../fx/GridLines";

export type FooterColumn = { title: string; links: { label: string; href: string }[] };

export function Footer({ tagline, columns, aside, legal }: { tagline: string; columns: FooterColumn[]; aside?: ReactNode; legal: ReactNode }) {
  return (
    <footer className="relative border-t border-(--xo-footer-border) bg-(--xo-footer-bg)">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0"><Connector style={{ left: "max(var(--xo-size-gutter), calc(50% - var(--xo-size-container) / 2))", top: -1 }} /><Connector style={{ left: "calc(100% - max(var(--xo-size-gutter), calc(50% - var(--xo-size-container) / 2)))", top: -1 }} /></div>
      <div className="xo-container xo-rails">
        <div className="grid gap-0 lg:grid-cols-[1fr_2fr]">
          <div className="xo-curvy flex flex-col gap-6 border-b border-line-faint p-7 lg:border-r lg:border-b-0">
            <Logo className="h-7 self-start" />
            <p className="max-w-xs type-lead text-fg-secondary">{tagline}</p>
            {aside}
          </div>
          <nav aria-label="Pie de página" className="xo-cells grid-cols-2 border-b-0 md:grid-cols-4">
            {columns.map((c) => (
              <div key={c.title}>
                <h2 className="px-7 pt-7 pb-3 type-label font-semibold text-(--xo-footer-heading-fg)">{c.title}</h2>
                <ul className="pb-5">
                  {c.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="block px-7 py-1.5 type-body-sm text-(--xo-footer-link-fg) transition-colors duration-(--xo-duration-base) hover:text-(--xo-footer-link-fg-hover)">{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="xo-curvy flex flex-col gap-3 border-t border-line-faint px-7 py-5 type-body-sm text-fg-muted md:flex-row md:items-center md:justify-between">{legal}</div>
      </div>
    </footer>
  );
}
