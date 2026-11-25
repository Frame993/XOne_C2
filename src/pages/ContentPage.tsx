import { Fragment, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { Button, CardLead, Icon, Logo, Section, SectionHeading, SectionIndex, cn, type IconName } from "../components/ui";
import { AIShowcase, DotMatrix, SCENES, type SceneName, FrameSection, FullLine, GRID_STEP, GridCanvas, GridSpacer, Reveal } from "../components/fx";
import { CTA, SiteLayout } from "../components/layout/SiteLayout";
import { Heading } from "../components/layout/Heading";
import * as C from "../content/xone";
import type { Block, PageDoc, PageLink } from "../content/pages/types";
import { currentSlug, link, t } from "../i18n";
import { Contact, Doc, Logos, Testimonials } from "./blocks/Extra";
import { NewsArticle, NewsList } from "./blocks/News";
import { ImgOrPlaceholder } from "../components/ui";


const resolve = (l: PageLink) => l.href ?? link(l.slug ?? "");
const isExternal = (href: string) => /^https?:/.test(href);
const pad = (n: number) => String(n).padStart(2, "0");

/** Panel de escena animada: alto fijo, a sangre, separado por línea. */
function Scene({ name, className }: { name: SceneName; className?: string }) {
  const S = SCENES[name];
  return <div className={cn("h-60 border-t border-line-faint bg-bg-subtle", className)}><S /></div>;
}

function MoreLink({ to, className }: { to: PageLink; className?: string }) {
  const href = resolve(to);
  return (
    <a href={href} {...(isExternal(href) && !href.includes("xone.es") ? { target: "_blank", rel: "noopener" } : {})} className={cn("group inline-flex items-center gap-1 self-start type-label text-link hover:underline", className)}>
      {to.label}
      <Icon name="chevron" size={14} className="transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

/* ---------- Hero ---------- */

function PageHero({ doc, group }: { doc: PageDoc; group: string }) {
  const h = doc.hero;
  const content = useRef<HTMLDivElement>(null);
  const [minH, setMinH] = useState<number | undefined>();
  // altura ajustada a filas completas de la rejilla (igual que el hero de la home)
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
    <FrameSection label={t("Presentación", "Introduction")} className="border-b border-line-faint lg:border-b-0" style={{ minHeight: minH }} labels={h.labels ?? ["MXDP", "Native", "Offline", "Low-code"]} background={<GridCanvas centerCols={9} className="h-full" />}>
      <div className="xo-container xo-rails relative lg:border-x-0">
        <div ref={content} className="relative flex flex-col items-center gap-8 px-5 pt-14 pb-14 text-center lg:mx-auto lg:max-w-[909px] lg:px-10 lg:pt-[calc(101px+48px)] lg:pb-28">
          <Reveal>
            <nav aria-label={t("Migas de pan", "Breadcrumb")}>
              <ol className="inline-flex items-center gap-2 rounded-pill border border-line bg-surface px-3 py-1 type-overline text-fg-muted shadow-xs">
                <li><a href={link("")} className="hover:text-fg">{t("Inicio", "Home")}</a></li>
                <li aria-hidden className="size-1 bg-accent" />
                {doc.crumb ? (
                  <li><a href={resolve(doc.crumb)} className="hover:text-fg">{doc.crumb.label}</a></li>
                ) : (
                  <li aria-current="page" className="text-fg-secondary">{group}</li>
                )}
              </ol>
            </nav>
          </Reveal>
          <Reveal delay={1}><SectionHeading as="h1" title={h.title} accent={h.accent} subtitle={h.lead} /></Reveal>
          <Reveal delay={2} className="relative flex w-full justify-center">
            {/* el mismo arte de caracteres que el hero de la home, por detrás de las acciones y contenido en el bloque central */}
            <DotMatrix mode="field" className="top-1/2 -inset-x-8 hidden h-[220px] -translate-y-[38%] lg:block" />
            <div className="relative z-10 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
              {h.primary !== false && <Button href={C.contact.cta.href} size="lg" iconRight="arrow">{C.contact.cta.label}</Button>}
              {h.secondary && <Button href={resolve(h.secondary)} size="lg" variant={h.primary === false ? "primary" : "ghost"} iconRight={h.primary === false ? "arrow" : undefined}>{h.secondary.label}</Button>}
            </div>
          </Reveal>
        </div>
      </div>
    </FrameSection>
  );
}

/* ---------- Bloques ---------- */

/** Ficha del proyecto: datos clave bajo el hero. */
function Facts({ b }: { b: Extract<Block, { type: "facts" }> }) {
  const n = b.items.length;
  return (
    <div className="relative">
      <FullLine position="bottom" />
      <Section>
        <dl className={cn("xo-cells grid-cols-1 sm:grid-cols-2", n === 3 && "lg:grid-cols-3", n >= 4 && "lg:grid-cols-4")}>
          {b.items.map((f, i) => (
            <Reveal key={f.label} delay={i % 4} className="flex flex-col gap-2 p-7 md:p-8">
              <dt className="type-overline text-fg-muted">{f.label}</dt>
              <dd className="text-pretty type-heading text-fg">{f.value}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>
    </div>
  );
}

function Intro({ b }: { b: Extract<Block, { type: "intro" }> }) {
  return (
    <div className="relative">
      <FullLine position="bottom" />
      <Section className="grid lg:grid-cols-2">
        <Reveal className="xo-curvy relative overflow-hidden border-b border-line-faint p-7 md:p-10 lg:border-r lg:border-b-0 lg:py-16">
          <p className="relative max-w-xl text-balance text-fg type-title-sm">
            {b.lead}{b.accent && <> <span className="text-fg-accent-display">{b.accent}</span></>}
          </p>
        </Reveal>
        <Reveal delay={1} className="xo-curvy flex flex-col gap-4 p-7 md:p-10 lg:py-16">
          {b.text?.map((p, i) => <p key={i} className={cn("text-pretty", i === 0 ? "type-lead text-fg-secondary" : "type-body text-fg-muted")}>{p}</p>)}
          {b.link && <MoreLink to={b.link} className="mt-2" />}
          {b.visual && <Scene name={b.visual} className="-mx-7 -mb-7 mt-4 md:-mx-10 md:-mb-10 lg:-mb-16 lg:mt-auto lg:h-64" />}
        </Reveal>
      </Section>
    </div>
  );
}

function Cells({ b }: { b: Extract<Block, { type: "cells" }> }) {
  const cols = b.cols ?? 2;
  return (
    <ul className={cn("xo-cells", cols === 2 && "md:grid-cols-2", cols === 3 && "md:grid-cols-2 lg:grid-cols-3", cols === 4 && "sm:grid-cols-2 lg:grid-cols-4")}>
      {b.items.map((it, i) => (
        <Reveal as="li" key={it.label} delay={i % cols} className="flex flex-col">
          <div className={cn("flex flex-1 flex-col gap-5 p-7", cols === 4 ? "md:p-8" : "md:p-10")}>
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 type-overline text-fg-muted">
              {it.icon && <span className="inline-flex size-6 items-center justify-center rounded-sm border border-accent-border bg-accent-subtle text-accent-subtle-fg"><Icon name={it.icon} size={14} /></span>}
              {it.label}
            </span>
            <span aria-hidden className="font-mono text-xs text-fg-muted">{pad(i + 1)}</span>
          </div>
          {/* el tamaño del texto acompaña al ancho de la celda: grande sólo a 2 columnas */}
          {it.lead ? <CardLead lead={it.lead} className={cols === 2 ? "type-body md:type-lead" : "type-body"}>{it.text}</CardLead> : <p className={cn("type-body text-fg-secondary", cols === 2 && "md:type-lead")}>{it.text}</p>}
          {it.more?.map((p, k) => <p key={k} className="type-body text-fg-muted">{p}</p>)}
          {it.link && <MoreLink to={it.link} className="mt-auto pt-2" />}
          </div>
          {it.visual && <Scene name={it.visual} />}
        </Reveal>
      ))}
      {/* celdas vacías para completar la última fila en escritorio (la rejilla nunca queda a medias) */}
      {Array.from({ length: (cols - (b.items.length % cols)) % cols }, (_, k) => <li key={`vacía-${k}`} aria-hidden className={cols === 2 ? "hidden md:block" : "hidden lg:block"} />)}
    </ul>
  );
}

function Rows({ b }: { b: Extract<Block, { type: "rows" }> }) {
  return (
    <ol>
      {b.items.map((it, i) => (
        <li key={it.title} className="grid border-b border-line-faint lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
          <Reveal className="xo-curvy flex flex-col gap-3 p-7 md:px-10 md:pt-10 md:pb-6 lg:border-r lg:border-line-faint lg:pb-10">
            <span aria-hidden className="font-mono text-xs text-fg-accent">{pad(i + 1)}</span>
            <h3 className="text-balance text-fg type-heading">{it.title}</h3>
            {it.image && <ImgOrPlaceholder src={it.image.src} alt={it.image.alt} note={it.image.alt} className="mt-4 h-24 w-auto self-start rounded-md bg-white object-contain p-2" />}
          </Reveal>
          <Reveal delay={1} className="flex flex-col gap-4 px-7 pb-7 md:px-10 md:pb-10 lg:pt-10">
            {it.text.map((p, k) => <p key={k} className={cn("text-pretty", k === 0 ? "type-body text-fg md:type-lead" : "type-body text-fg-secondary")}>{p}</p>)}
            {it.list && (
              <ul className="grid gap-2 sm:grid-cols-2">
                {it.list.map((x) => <li key={x} className="flex items-start gap-2 type-body-sm text-fg-secondary"><i aria-hidden className="mt-2 size-1 shrink-0 bg-accent" />{x}</li>)}
              </ul>
            )}
            {it.note && <p className="border-l-2 border-accent pl-4 type-body font-medium text-fg">{it.note}</p>}
            {it.link && <MoreLink to={it.link} className="pt-1" />}
            {/* escena a sangre al pie de la columna ancha */}
            {it.visual && <Scene name={it.visual} className="-mx-7 -mb-7 mt-3 md:-mx-10 md:-mb-10 lg:h-64" />}
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

function Chips({ b }: { b: Extract<Block, { type: "chips" }> }) {
  const cols = b.cols ?? 3;
  return (
    <ul className={cn("xo-cells grid-cols-1 sm:grid-cols-2", cols === 3 && "lg:grid-cols-3", cols === 4 && "lg:grid-cols-4")}>
      {b.items.map((x, i) => (
        <Reveal as="li" key={x} delay={i % cols} className="flex items-center gap-3 p-6">
          <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-sm bg-accent-subtle font-mono text-xs text-accent-subtle-fg">{b.numbered ? pad(i + 1) : <Icon name="check" size={14} />}</span>
          <span className="type-label text-fg">{x}</span>
        </Reveal>
      ))}
      {/* celdas vacías para cerrar la última fila (2 columnas en sm, `cols` en lg) */}
      {Array.from({ length: (cols - (b.items.length % cols)) % cols }, (_, k) => <li key={`vacía-${k}`} aria-hidden className={cols === 2 ? "hidden sm:block" : "hidden lg:block"} />)}
      {b.items.length % 2 === 1 && cols !== 2 && <li aria-hidden className="hidden sm:block lg:hidden" />}
    </ul>
  );
}

function Diagram({ b }: { b: Extract<Block, { type: "diagram" }> }) {
  const Side = ({ s, align }: { s: { title: string; items: string[] }; align: "left" | "right" }) => (
    <Reveal className={cn("xo-curvy flex flex-col gap-4 p-7 md:p-8", align === "left" ? "border-b border-line-faint lg:border-r lg:border-b-0" : "border-t border-line-faint lg:border-l lg:border-t-0")}>
      <span className="type-overline text-fg-muted">{s.title}</span>
      <ul className="flex flex-col gap-2.5">
        {s.items.map((x) => <li key={x} className="flex items-center gap-2 type-body-sm text-fg-secondary"><i aria-hidden className="size-1 shrink-0 bg-accent" />{x}</li>)}
      </ul>
    </Reveal>
  );
  return (
    <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)_minmax(0,1fr)]">
      <Side s={b.left} align="left" />
      <div className="relative">
        <ul className="xo-cells h-full sm:grid-cols-2">
          {b.quadrants.map((q, i) => (
            <Reveal as="li" key={q.title} delay={i} className={cn("flex flex-col gap-4 p-7 md:p-8", i < 2 ? "sm:pb-16" : "sm:pt-16", i % 2 === 0 ? "sm:pr-16" : "sm:pl-16")}>
              <span className="inline-flex items-center gap-2 type-overline text-fg-accent"><span aria-hidden className="font-mono text-fg-muted">{pad(i + 1)}</span>{q.title}</span>
              <ul className="flex flex-wrap gap-2">
                {q.items.map((x) => <li key={x} className="rounded-pill border border-line bg-surface px-3 py-1 type-label-sm text-fg-secondary">{x}</li>)}
              </ul>
            </Reveal>
          ))}
        </ul>
        {/* núcleo: donde se cruzan los cuatro bloques */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 hidden size-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-pill border border-line bg-surface text-center shadow-float sm:flex">
          <Logo className="h-4 min-w-0" />
          <span className="type-micro text-fg-muted">{b.center}</span>
        </div>
      </div>
      <Side s={b.right} align="right" />
    </div>
  );
}

function Quote({ b }: { b: Extract<Block, { type: "quote" }> }) {
  return (
    <>
      <GridSpacer nodesBottom={false} />
      <div className="relative"><FullLine position="bottom" nodes={false} />
        <div className="xo-container xo-rails p-0">
          <figure className="relative overflow-hidden bg-(--xo-color-signal-bg) px-6 py-16 text-center text-(--xo-color-signal-fg) md:py-24">
            <DotMatrix mode="field" colorVar="--xo-color-neutral-0" cellW={10} cellH={14} className="top-0 left-0 hidden h-full w-[22%] opacity-50 [mask-image:linear-gradient(90deg,black,transparent)] lg:block" />
            <DotMatrix mode="field" colorVar="--xo-color-neutral-0" cellW={10} cellH={14} className="top-0 right-0 hidden h-full w-[22%] opacity-50 [mask-image:linear-gradient(270deg,black,transparent)] lg:block" />
            <blockquote className="relative mx-auto max-w-3xl text-balance type-title-sm md:type-title-md">{b.text}</blockquote>
            {b.source && <figcaption className="relative mt-6 type-overline text-(--xo-color-signal-fg)">{b.source}</figcaption>}
          </figure>
        </div>
      </div>
    </>
  );
}

/** Bloque con índice + cabecera + cuerpo. */
function Indexed({ n, total, b, afterColor, children }: { n: number; total: number; b: { index: string; eyebrow: string; title: string; accent?: string; subtitle?: string; anchor?: string }; afterColor: boolean; children: ReactNode }) {
  return (
    <>
      <GridSpacer nodesTop={!afterColor} />
      <SectionIndex n={n} total={total} label={b.index} />
      <Section id={b.anchor} label={b.eyebrow}>
        <Heading eyebrow={b.eyebrow} title={b.title} accent={b.accent} subtitle={b.subtitle} />
        {children}
      </Section>
    </>
  );
}

function Related({ n, total, group, own, head }: { n: number; total: number; group: number; own?: PageDoc["related"]; head?: PageDoc["relatedTitle"] }) {
  const menu = C.nav.menus[group];
  const items = own ? own.map((r) => ({ label: r.label, desc: r.desc, href: link(r.slug), icon: r.icon ?? "arrow" })) : menu.items.filter((it) => !it.href.endsWith(`/${currentSlug}/`));
  return (
    <>
      <GridSpacer />
      <SectionIndex n={n} total={total} label={menu.label} />
      <Section label={t("Sigue explorando", "Keep exploring")}>
        <Heading art="right" eyebrow={t("Sigue explorando", "Keep exploring")} title={head?.title ?? t("Más formas de", "More ways to")} accent={head?.accent ?? t("conocer XOne", "get to know XOne")} />
        <ul className="xo-cells sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal as="li" key={it.href} delay={i % 3}>
              <a href={it.href} className="group flex h-full items-start gap-4 p-7 transition-colors duration-(--xo-duration-base) hover:bg-surface">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-hover text-fg-secondary transition-colors group-hover:bg-accent-subtle group-hover:text-accent-subtle-fg"><Icon name={it.icon as IconName} size={18} /></span>
                <span className="flex flex-1 flex-col gap-1">
                  <span className="type-item text-fg">{it.label}</span>
                  <span className="type-body-sm text-fg-muted">{it.desc}</span>
                </span>
                <Icon name="arrow" size={16} className="mt-1 shrink-0 text-fg-muted transition-transform group-hover:translate-x-0.5 group-hover:text-fg-accent" />
              </a>
            </Reveal>
          ))}
          {/* cerrar la última fila (2 columnas en sm, 3 en lg) */}
          {Array.from({ length: (3 - (items.length % 3)) % 3 }, (_, k) => <li key={`vacía-${k}`} aria-hidden className="hidden lg:block" />)}
          {items.length % 2 === 1 && <li aria-hidden className="hidden sm:block lg:hidden" />}
        </ul>
      </Section>
    </>
  );
}

/* ---------- Página ---------- */

export function ContentPage({ doc }: { doc: PageDoc }) {
  const indexed = doc.blocks.filter((b) => "index" in b).length;
  const total = indexed + 1;
  let n = 0;
  return (
    <SiteLayout title={doc.seo.title} description={doc.seo.description}>
      <PageHero doc={doc} group={C.nav.menus[doc.group].label} />
      {doc.blocks.map((b, i) => {
        const afterColor = doc.blocks[i - 1]?.type === "quote";
        if (b.type === "intro") return <Intro key={i} b={b} />;
        if (b.type === "facts") return <Facts key={i} b={b} />;
        if (b.type === "doc") return <Doc key={i} b={b} />;
        if (b.type === "contact") return <Contact key={i} />;
        if (b.type === "article") return <NewsArticle key={i} slug={b.slug} />;
        if (b.type === "quote") return <Quote key={i} b={b} />;
        n++;
        const body = b.type === "news" ? <NewsList /> : b.type === "logos" ? <Logos b={b} /> : b.type === "testimonials" ? <Testimonials b={b} /> : b.type === "cells" ? <Cells b={b} /> : b.type === "rows" ? <Rows b={b} /> : b.type === "chips" ? <Chips b={b} /> : b.type === "showcase" ? <AIShowcase steps={b.steps} /> : <Diagram b={b} />;
        return <Fragment key={i}><Indexed n={n} total={total} b={b} afterColor={afterColor}>{body}</Indexed></Fragment>;
      })}
      <Related n={total} total={total} group={doc.group} own={doc.related} head={doc.relatedTitle} />
      {doc.cta !== false && <CTA />}
    </SiteLayout>
  );
}
