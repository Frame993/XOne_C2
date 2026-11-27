import { useLayoutEffect, useRef, useState } from "react";
import { Button, Icon, SectionHeading, SectionIndex } from "../components/ui";
import { SiteLayout } from "../components/layout/SiteLayout";
import { DotMatrix, FrameSection, GRID_STEP, GridCanvas, GridSpacer, Reveal } from "../components/fx";
import * as C from "../content/xone";

/**
 * Página del evento de Valencia. La portada sigue el mismo patrón que los heros de la web (Home y ContentPage):
 * FrameSection + GridCanvas de 9 columnas centrales, píldora arriba, titular con acento, arte de caracteres
 * por detrás de la acción y altura ajustada a filas completas. El azul de señal (`accent-solid`) es lo que la
 * distingue: punto y píldora «Próximamente» y el arte de caracteres en acento.
 * Sin contenido del evento aún: solo «Próximamente» (fecha y enlace [PENDIENTE] en CONTENT_MAP.md).
 */
function EventHero() {
  const e = C.eventPage;
  const content = useRef<HTMLDivElement>(null);
  const [minH, setMinH] = useState<number | undefined>();
  // igual que los demás heros: la altura se ajusta a filas completas de la rejilla
  useLayoutEffect(() => {
    const el = content.current;
    if (!el) return;
    const fit = () => {
      if (window.innerWidth < 996) return setMinH(undefined);
      setMinH(Math.ceil((el.scrollHeight - 1) / GRID_STEP) * GRID_STEP + 1);
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <FrameSection label={e.eyebrow} className="border-b border-line-faint lg:border-b-0" style={{ minHeight: minH }} labels={C.hero.cycle} background={<GridCanvas centerCols={9} className="h-full" />}>
      <div className="xo-container xo-rails relative lg:border-x-0">
        <div ref={content} className="relative flex flex-col items-center gap-8 px-5 pt-14 pb-14 text-center lg:mx-auto lg:max-w-[909px] lg:px-10 lg:pt-[calc(101px+48px)] lg:pb-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-pill border border-line bg-surface px-3 py-1 type-overline text-fg-muted shadow-xs">
              <i aria-hidden className="size-1 bg-accent" />{e.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={1}><SectionHeading as="h1" title={e.title} accent={e.accent} subtitle={e.topic} /></Reveal>
          <Reveal delay={2} className="relative flex w-full justify-center">
            {/* el mismo arte de caracteres que los demás heros */}
            <DotMatrix mode="field" className="top-1/2 -inset-x-8 hidden h-[220px] -translate-y-[38%] lg:block" />
            <span className="relative z-10 inline-flex h-12 items-center gap-2.5 rounded-md bg-(--xo-color-accent-solid) px-6 type-label text-(--xo-color-accent-solid-fg) shadow-accent">
              <i aria-hidden className="size-1.5 rounded-pill bg-current xo-pulse" />{e.badge}
            </span>
          </Reveal>
        </div>
      </div>
    </FrameSection>
  );
}

export function EventPage() {
  const e = C.eventPage;
  return (
    <SiteLayout title={e.seo.title} description={e.seo.description} announcement={false}>
      <EventHero />

      {/* mientras tanto */}
      <GridSpacer />
      <SectionIndex label={e.meanwhile.eyebrow} />
      <section aria-label={e.meanwhile.eyebrow} className="relative">
        <div className="xo-container xo-rails">
          <div className="xo-curvy px-5 py-16 md:px-10 md:py-20">
            <SectionHeading title={e.meanwhile.title} accent={e.meanwhile.accent} />
          </div>
          <ul className="xo-cells border-t border-line-faint md:grid-cols-3">
            {e.links.map((l, i) => (
              <li key={l.href}>
                <Reveal delay={i} className="h-full">
                  <a href={l.href} className="group flex h-full flex-col gap-3 p-7 transition-colors duration-(--xo-duration-base) hover:bg-hover md:p-10">
                    <span className="type-item text-fg">{l.label}</span>
                    <span className="flex-1 type-body-sm text-fg-muted">{l.text}</span>
                    <Icon name="arrow" size={16} className="mt-4 text-fg-accent transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="xo-curvy px-5 py-10 text-center type-body-sm text-fg-muted">
            {e.mail} <Button href={`mailto:${C.contact.email}`} variant="link">{C.contact.email}</Button>
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
