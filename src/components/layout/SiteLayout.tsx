import { useEffect, type ReactNode } from "react";
import { Button, Eyebrow, Footer, Icon, Navbar } from "../ui";
import { FrameRails, FrameSection, FullLine, GRID_STEP, GridCanvas, GridSpacer, PageRails } from "../fx";
import * as C from "../../content/xone";
import { alternate, link, locale, t } from "../../i18n";

/** Etiquetas <head> por página: título, descripción, idioma y alternativas hreflang. */
function useHead(title: string, description?: string) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = title;
    const set = (sel: string, make: () => HTMLElement, attr: string, value: string) => {
      let el = document.head.querySelector(sel) as HTMLElement | null;
      if (!el) { el = make(); document.head.appendChild(el); }
      el.setAttribute(attr, value);
    };
    if (description) set('meta[name="description"]', () => Object.assign(document.createElement("meta"), { name: "description" }), "content", description);
    for (const l of ["es", "en"] as const) {
      const href = alternate(l);
      if (!href.startsWith("/")) continue;
      set(`link[rel="alternate"][hreflang="${l}"]`, () => Object.assign(document.createElement("link"), { rel: "alternate", hreflang: l }), "href", href);
    }
  }, [title, description]);
}

function Announcement() {
  return (
    <div className="relative">
      <FrameRails />
      <FullLine position="bottom" frame />
      <div className="xo-container xo-rails px-3 py-3">
        <a href={C.announcement.href} className="flex min-h-10 flex-wrap items-center justify-center gap-x-2 rounded-md bg-(--xo-color-accent-solid) px-4 py-2 text-center type-body-sm text-(--xo-color-accent-solid-fg) transition-colors duration-(--xo-duration-base) hover:bg-(--xo-color-accent-solid-hover)">
          <span className="inline-flex h-5 items-center rounded-pill bg-(--xo-color-ink-alpha-40) px-2 type-label-sm">{t("Nuevo", "New")}</span>
          {C.announcement.text}
          <span className="inline-flex items-center gap-1 font-medium underline underline-offset-4">{C.announcement.cta}<Icon name="arrow" size={14} /></span>
        </a>
      </div>
    </div>
  );
}

function CTAContent() {
  const k = C.contact;
  return (
    <div className="relative mx-auto flex h-full max-w-[505px] flex-col items-center justify-center gap-5 px-6 text-center">
      <Eyebrow>{t("Contacto", "Contact")}</Eyebrow>
      <h2 className="text-fg type-title-sm md:type-title-md">{k.title} <span className="text-fg-accent-display">{k.accent}</span>?</h2>
      <p className="type-body text-fg-secondary">{k.subtitle}</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button href={k.cta.href} iconRight="arrow">{k.cta.label}</Button>
        <Button href={link("casos-de-exito-xone")} variant="ghost">{t("Ver casos de éxito", "See success stories")}</Button>
      </div>
      <a href={`mailto:${k.email}`} className="inline-flex items-center gap-1 type-body-sm text-fg-muted hover:text-fg">{t("o escríbenos a", "or email us at")} {k.email}<Icon name="chevron" size={14} /></a>
    </div>
  );
}

/** CTA final enmarcado (concepto «sincronización»: celdas que se encienden en espejo). */
export function CTA() {
  return (
    <>
      <GridSpacer />
      <FrameSection label={t("Contacto", "Contact")} labels={["Android", "iOS", "Windows", "Web"]} style={{ height: 4 * GRID_STEP + 1 }} className="hidden lg:block" background={<GridCanvas centerCols={5} topRows={0} lit={3} mirror className="h-full" />}>
        <CTAContent />
      </FrameSection>
      <section aria-label={t("Contacto", "Contact")} className="relative lg:hidden">
        <FullLine position="top" />
        <FullLine position="bottom" />
        <div className="xo-container xo-rails px-5 py-16"><CTAContent /></div>
      </section>
    </>
  );
}

/** Marco común de todas las páginas: anuncio, header, contenido y footer. */
export function SiteLayout({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  useHead(title, description);
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-surface focus:p-3">{t("Saltar al contenido", "Skip to content")}</a>
      <PageRails />
      <Announcement />
      <Navbar menus={C.nav.menus} cta={C.nav.cta} secondary={C.nav.secondary} wiki={C.nav.wiki} featured={C.nav.featured} stories={C.nav.stories} cases={C.cases} />
      <main id="main">{children}</main>
      <Footer
        tagline={C.footer.tagline}
        columns={C.footer.columns}
        aside={
          <div className="flex flex-col gap-2 type-body-sm text-fg-muted">
            <span className="type-overline">{t("Presentes en", "Present in")}</span>
            <span>{C.contact.cities.join(" · ")}</span>
          </div>
        }
        legal={
          <>
            <span>{C.footer.legal.company}</span>
            <span className="flex flex-wrap gap-4">
              <a href={C.footer.legal.privacy.href} className="hover:text-fg">{C.footer.legal.privacy.label}</a>
              <a href={`mailto:${C.contact.email}`} className="hover:text-fg">{C.contact.email}</a>
            </span>
          </>
        }
      />
    </>
  );
}
