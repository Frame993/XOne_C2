import type { ReactNode } from "react";
import { Logo } from "./Logo";
import { Connector, RAILS } from "../fx/GridLines";
import { t } from "../../i18n";

export type FooterColumn = { title: string; links: { label: string; href: string }[] };

export function Footer({ tagline, columns, aside, legal }: { tagline: string; columns: FooterColumn[]; aside?: ReactNode; legal: ReactNode }) {
  return (
    <footer className="relative bg-(--xo-footer-bg)">{/* sin border-t: la línea de frontera la pone la sección anterior (evita la línea doble) */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0"><Connector style={{ left: RAILS.left, top: -0.5 }} /><Connector style={{ left: RAILS.right, top: -0.5 }} /></div>
      <div className="xo-container xo-rails">
        <div className="grid gap-0 lg:grid-cols-[1fr_2fr]">
          <div className="xo-curvy flex flex-col gap-6 border-b border-line-faint p-7 lg:border-r lg:border-b-0">
            <Logo className="h-7 self-start" />
            <p className="max-w-xs type-lead text-fg-secondary">{tagline}</p>
            {aside}
          </div>
          <nav aria-label={t("Pie de página", "Footer")} className="xo-cells grid-cols-2 border-b-0 md:grid-cols-4">
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
