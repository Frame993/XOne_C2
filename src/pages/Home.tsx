import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Badge, Button, CardLead, Icon, IconTile, ImgOrPlaceholder, Section, SectionHeading, SectionIndex, cn } from "../components/ui";
import { CTA, SiteLayout } from "../components/layout/SiteLayout";
import { Heading } from "../components/layout/Heading";
import { ASDD_SCENES } from "../components/fx/AsddScenes";
import { link, locale, t } from "../i18n";
import { usos, usoSlug } from "../content/usos";
import * as C from "../content/xone";
import { DotMatrix, FrameSection, FullLine, GRID_STEP, GridCanvas, useReducedMotion, GridSpacer, Marquee, Reveal } from "../components/fx";

const TOTAL = 10;

/** Tarjeta interactiva del hero: escribe los 11 casos de uso y recorre el ciclo ASDD (Entender · Construir · Operar · Mejorar). */
function HeroConsole() {
  const sectors = usos.map((u) => u[locale].name);
  const [typed, setTyped] = useState(sectors[0]);
  const [platform, setPlatform] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    let i = 0, ch = sectors[0].length, deleting = false, wait = 0;
    const id = setInterval(() => {
      if (wait > 0) { wait--; return; }
      const word = sectors[i];
      if (!deleting) { ch++; if (ch >= word.length) { ch = word.length; deleting = true; wait = 28; } }
      else { ch--; if (ch <= 0) { deleting = false; i = (i + 1) % sectors.length; ch = 0; setPlatform((p) => (p + 1) % C.hero.cycle.length); } }
      setTyped(sectors[i].slice(0, ch));
    }, 55);
    return () => clearInterval(id);
  }, [reduced, sectors]);
  return (
    <div className="w-full max-w-xl rounded-xl bg-surface p-2 text-left shadow-float">
      <div className="flex h-12 items-center gap-3 px-3 text-base">
        <Icon name="search" className="shrink-0 text-fg-muted" />
        <span className="sr-only">{t("Casos de uso", "Use cases")}: {sectors.join(", ")}</span>
        <span aria-hidden className="truncate text-fg-secondary">{t("Caso de uso ·", "Use case ·")} <span className="xo-caret text-fg">{typed}</span></span>
      </div>
      <div className="flex items-center justify-between gap-3 rounded-lg bg-bg-subtle p-1.5">
        <ul className="flex min-w-0 gap-1 overflow-x-auto" aria-label={t("Ciclo ASDD", "ASDD cycle")}>
          {C.hero.cycle.map((p, i) => (
            <li key={p}>
              <button type="button" onClick={() => setPlatform(i)} aria-pressed={i === platform}
                className={cn("inline-flex h-8 items-center gap-1.5 rounded-md px-3 type-overline whitespace-nowrap transition-colors duration-(--xo-duration-base)", i === platform ? "bg-surface text-fg shadow-xs" : "text-fg-muted hover:text-fg")}>
                <span aria-hidden className={cn("size-1.5 rounded-pill", i === platform ? "bg-accent" : "bg-line-loud")} />{p}
              </button>
            </li>
          ))}
        </ul>
        <Button href={C.hero.secondary.href} size="sm" iconRight="arrow" aria-label={C.hero.secondary.label} className="shrink-0 px-2.5!"><span className="sr-only">{C.hero.secondary.label}</span></Button>
      </div>
    </div>
  );
}

function Hero() {
  const h = C.hero;
  const content = useRef<HTMLDivElement>(null);
  const [minH, setMinH] = useState<number | undefined>();
  // la altura del hero se ajusta a filas completas de la rejilla → nunca queda una fila cortada
  useLayoutEffect(() => {
    const el = content.current;
    if (!el) return;
    const fit = () => {
      if (window.innerWidth < 996) return setMinH(undefined);
      const natural = el.scrollHeight;
      setMinH(Math.ceil((natural - 1) / GRID_STEP) * GRID_STEP + 1);
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <FrameSection
      label={t("Presentación", "Introduction")}
      className="border-b border-line-faint lg:border-b-0"
      style={{ minHeight: minH }}
      labels={h.cycle}
      background={
        <>
          <GridCanvas centerCols={9} className="h-full" />
        </>
      }
    >
      <div className="xo-container xo-rails relative lg:border-x-0">
        <div ref={content} className="relative flex flex-col items-center gap-8 px-5 pt-16 pb-16 text-center lg:mx-auto lg:max-w-[909px] lg:px-10 lg:pt-[calc(101px+56px)] lg:pb-24">
          <Reveal><SectionHeading as="h1" eyebrow={h.eyebrow} title={h.title} accent={h.accent} subtitle={h.subtitle} /></Reveal>
          <Reveal delay={2} className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Button href={h.primary.href} size="lg" iconRight="arrow">{h.primary.label}</Button>
            <Button href={h.secondary.href} size="lg" variant="ghost">{h.secondary.label}</Button>
          </Reveal>
          <Reveal delay={2} as="p" className="type-body-sm text-fg-muted">{h.signature}</Reveal>
          <Reveal delay={3} className="relative flex w-full justify-center">
            {/* arte de caracteres (el mismo "field" de las cabeceras) por detrás del input, contenido en el bloque central */}
            <DotMatrix mode="field" className="top-1/2 -inset-x-8 hidden h-[260px] -translate-y-[46%] lg:block" />
            <div className="relative z-10 flex w-full justify-center"><HeroConsole /></div>
          </Reveal>
          <Reveal as="ul" delay={4} className="flex flex-wrap justify-center gap-x-6 gap-y-2 lg:mt-14" aria-label={t("Datos clave", "Key facts")}>
            {h.proof.map((p) => (
              <li key={p.value} className="flex items-baseline gap-2 type-body-sm text-fg-muted"><strong className="font-semibold text-fg-accent">{p.value}</strong>{p.label}</li>
            ))}
          </Reveal>
        </div>
      </div>
    </FrameSection>
  );
}

function Logos() {
  return (
    <div className="relative"><FullLine position="bottom" />
    <Section label={t("Clientes", "Customers")} className="grid lg:grid-cols-[240px_1fr]">
      <p className="xo-curvy flex items-center justify-center border-b border-line-faint p-6 text-center type-body-sm text-fg-secondary lg:justify-start lg:border-r lg:border-b-0 lg:text-left">
        <span>{t("Empresas que", "Companies that")} <strong className="font-semibold text-fg-accent">{t("confían en XOne", "trust XOne")}</strong></span>
      </p>
      <Marquee label={t("Logotipos de clientes", "Customer logos")} duration={70} className="xo-curvy">
        {C.clients.map((c) => (
          <div key={c.name} className="group relative flex h-24 w-44 shrink-0 items-center justify-center border-r border-line-faint px-6">
            <ImgOrPlaceholder src={c.src} alt={c.name} note={c.name} className="h-8 w-auto max-w-32 object-contain opacity-70 grayscale transition-[opacity,filter] duration-(--xo-duration-base) group-hover:opacity-100 dark:invert" />
            <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-(--xo-duration-slow) ease-(--xo-easing-out) group-hover:scale-x-100" />
          </div>
        ))}
      </Marquee>
    </Section></div>
  );
}

/** 12.3 · Qué es ASDD: frase grande a la izquierda, párrafo y enlace a la derecha. */
function WhatIsASDD() {
  const w = C.home.what;
  return (
    <>
      <GridSpacer />
      <SectionIndex n={1} total={TOTAL} label={w.eyebrow} />
      <Section id="asdd" label={w.eyebrow} className="grid lg:grid-cols-2">
        <Reveal className="xo-curvy relative overflow-hidden border-b border-line-faint p-7 md:p-10 lg:border-r lg:border-b-0 lg:py-16">
          <p className="mb-6 type-overline text-fg-muted">{w.eyebrow}</p>
          <p className="relative max-w-xl text-balance text-fg type-title-sm">{w.lead}</p>
        </Reveal>
        <Reveal delay={1} className="xo-curvy flex flex-col gap-4 p-7 md:p-10 lg:py-16">
          <p className="text-pretty type-lead text-fg-secondary">{w.title} <span className="text-fg-accent-display">{w.accent}</span>.</p>
          <p className="text-pretty type-body text-fg-muted">{w.text}</p>
          <p className="text-pretty type-body text-fg-muted">{w.not}</p>
          <a href={w.link.href} className="mt-2 inline-flex items-center gap-1 self-start type-label text-link hover:underline">{w.link.label}<Icon name="chevron" size={14} /></a>
        </Reveal>
      </Section>
    </>
  );
}

/** 12.4 · El ciclo en cuatro momentos (celdas numeradas, con escena de cada momento). */
const CYCLE_SCENES = [ASDD_SCENES.understand, ASDD_SCENES.build, ASDD_SCENES.operate, ASDD_SCENES.improve];
function Cycle() {
  const c = C.home.cycle;
  return (
    <>
      <GridSpacer />
      <SectionIndex n={2} total={TOTAL} label={c.eyebrow} />
      <Section id="ciclo" label={c.eyebrow}>
        <Heading eyebrow={c.eyebrow} title={c.title} accent={c.accent} />
        {/* 2 × 2, como la antigua «Por qué XOne»: cada tarjeta ocupa 3 filas de la rejilla (subgrid) → texto, «quién actúa / qué decide» y escena quedan alineados en toda la fila */}
        <div className="xo-cells md:grid-cols-2">
          {c.steps.map((p, i) => {
            const Scene = CYCLE_SCENES[i];
            return (
              <Reveal key={p.n} delay={i % 2} className="flex flex-col md:row-span-3 md:grid md:grid-rows-subgrid md:gap-0">
                <div className="flex flex-col gap-6 p-8 md:p-10">
                  <div className="flex items-center gap-3">
                    <IconTile icon={p.icon} />
                    <span className="type-label text-fg">{p.tag}</span>
                    <span aria-hidden className="ml-auto font-mono text-xs text-fg-muted">{p.n}</span>
                  </div>
                  <CardLead lead={p.lead}>{p.text}</CardLead>
                </div>
                {/* quién actúa / qué decide: dos filas alineadas (etiqueta | valor) */}
                <dl className="border-t border-line-faint px-8 md:px-10">
                  {[[c.whoLabel, p.who], [c.decideLabel, p.decide]].map(([k, v]) => (
                    <div key={k} className="grid gap-1 border-b border-line-faint py-4 type-body-sm last:border-b-0 sm:grid-cols-[11rem_1fr] sm:gap-6">
                      <dt className="text-fg-muted">{k}</dt><dd className="text-fg">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="h-80 border-t border-line-faint"><Scene /></div>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}

/** 12.5 · Las cuatro piezas (rejilla de tarjetas enlazadas). */
function Pieces() {
  const p = C.home.pieces;
  return (
    <>
      <GridSpacer />
      <SectionIndex n={3} total={TOTAL} label={p.eyebrow} />
      <Section id="piezas" label={p.eyebrow}>
        <Heading eyebrow={p.eyebrow} title={p.title} accent={p.accent} />
        <ul className="xo-cells md:grid-cols-2 lg:grid-cols-4">
          {p.items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={i}>
              <a href={it.href} className="group flex h-full flex-col gap-4 p-7 transition-colors duration-(--xo-duration-base) hover:bg-surface">
                <IconTile icon={it.icon} size="md" tone="neutral" className="group-hover:border-accent-border group-hover:bg-accent-subtle group-hover:text-accent-subtle-fg" />
                <span className="type-overline text-fg-accent">{it.role}</span>
                <h3 className="type-item text-fg">{it.title}</h3>
                <p className="flex-1 type-body-sm text-fg-muted">{it.text}</p>
                <span className="inline-flex items-center gap-1 type-label text-link">{t("Conocer", "Discover")} {it.title}<Icon name="chevron" size={14} className="transition-transform group-hover:translate-x-0.5" /></span>
              </a>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}

/** 12.6 · El bucle en los dos sentidos. */
const LOOP_SCENES = [ASDD_SCENES.callToStreet, ASDD_SCENES.streetToCall];
function Loop() {
  const l = C.home.loop;
  return (
    <>
      <GridSpacer />
      <SectionIndex n={4} total={TOTAL} label={l.eyebrow} />
      <Section id="bucle" label={l.eyebrow}>
        <Heading eyebrow={l.eyebrow} title={l.title} accent={l.accent} subtitle={l.subtitle} />
        <div className="xo-cells md:grid-cols-2">
          {l.items.map((it, i) => {
            const Scene = LOOP_SCENES[i];
            return (
              <Reveal key={it.tag} delay={i} className="flex flex-col">
                <div className="flex flex-1 flex-col gap-6 p-8 md:p-10">
                  <div className="flex items-center gap-3"><IconTile icon={it.icon} /><span className="type-label text-fg">{it.tag}</span></div>
                  <p className="type-body text-fg-secondary">{it.text}</p>
                </div>
                <div className="h-72 border-t border-line-faint"><Scene /></div>
              </Reveal>
            );
          })}
        </div>
        <p className="border-b border-line-faint px-7 py-6 text-center type-body-sm text-fg-muted md:px-10">{l.note}</p>
      </Section>
    </>
  );
}

/** 12.7 · Dos soluciones, lado a lado. */
function Solutions() {
  const s = C.home.solutions;
  return (
    <>
      <GridSpacer />
      <SectionIndex n={5} total={TOTAL} label={s.eyebrow} />
      <Section id="soluciones" label={s.eyebrow}>
        <Heading eyebrow={s.eyebrow} title={s.title} accent={s.accent} subtitle={s.subtitle} />
        <div className="xo-cells md:grid-cols-2">
          {s.items.map((it, i) => (
            <Reveal key={it.title} delay={i}>
              <a href={it.href} className={cn("group flex h-full flex-col gap-4 p-7 transition-colors duration-(--xo-duration-base) md:p-10", i === 0 ? "bg-(--xo-color-signal-bg) text-(--xo-color-signal-fg) hover:bg-(--xo-color-signal-surface)" : "hover:bg-surface")}>
                <span className={cn("type-overline", i === 0 ? "" : "text-fg-muted")}>{it.tag}</span>
                <h3 className={cn("text-balance type-title-sm", i === 0 ? "" : "text-fg")}>{it.title}</h3>
                <p className={cn("flex-1 type-body", i === 0 ? "" : "text-fg-secondary")}>{it.text}</p>
                <span className={cn("inline-flex items-center gap-1 type-label", i === 0 ? "" : "text-link")}>{it.cta}<Icon name="arrow" size={14} className="transition-transform group-hover:translate-x-0.5" /></span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

/** 12.8 · Los 11 casos de uso. */
function UseCases() {
  const u = C.home.usos;
  return (
    <>
      <GridSpacer />
      <SectionIndex n={6} total={TOTAL} label={u.eyebrow} />
      <Section id="casos-de-uso" label={u.eyebrow}>
        <Heading eyebrow={u.eyebrow} title={u.title} accent={u.accent} />
        <ul className="xo-cells md:grid-cols-2 lg:grid-cols-3">
          {usos.map((x, i) => (
            <Reveal as="li" key={x.slug} delay={i % 3}>
              <a href={link(usoSlug(x))} className="group relative flex h-full flex-col gap-3 p-7 transition-colors hover:bg-surface">
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-(--xo-duration-slow) ease-(--xo-easing-out) group-hover:scale-x-100" />
                <span className="flex items-center justify-between type-overline text-fg-muted"><span className="inline-flex items-center gap-2"><Icon name={x.icon} size={14} />{x[locale].sector}</span><span aria-hidden className="font-mono text-xs">{x.n}</span></span>
                <span className="type-item text-fg">{x[locale].name}</span>
                <span className="flex-1 type-body-sm text-fg-muted">{x[locale].lead}</span>
                <span className="mt-2 inline-flex items-center gap-1 type-overline text-fg-muted group-hover:text-link">{u.cta}<Icon name="arrow" size={12} className="transition-transform group-hover:translate-x-0.5" /></span>
              </a>
            </Reveal>
          ))}
          <li>
            <a href={u.allHref} className="group flex h-full min-h-40 items-center justify-center gap-2 p-7 type-label text-link transition-colors hover:bg-surface">{u.all}<Icon name="arrow" size={14} className="transition-transform group-hover:translate-x-0.5" /></a>
          </li>
        </ul>
      </Section>
    </>
  );
}

/** 12.9 · Por qué XOne: los cinco diferenciales. */
function WhyXOne() {
  const w = C.home.why;
  return (
    <>
      <GridSpacer />
      <SectionIndex n={7} total={TOTAL} label={w.eyebrow} />
      <Section id="por-que-xone" label={w.eyebrow}>
        <Heading eyebrow={w.eyebrow} title={w.title} accent={w.accent} />
        <ol className="xo-cells md:grid-cols-2 lg:grid-cols-3">
          {w.items.map((it, i) => (
            <Reveal as="li" key={it.lead} delay={i % 3} className="flex flex-col gap-4 p-7 md:p-10">
              <span aria-hidden className="font-mono text-xs text-fg-muted">0{i + 1}</span>
              <CardLead lead={it.lead}>{it.text}</CardLead>
            </Reveal>
          ))}
          <li>
            <a href={C.home.what.link.href} className="group flex h-full min-h-40 items-center justify-center gap-2 p-7 type-label text-link transition-colors hover:bg-surface">{C.home.what.link.label}<Icon name="arrow" size={14} className="transition-transform group-hover:translate-x-0.5" /></a>
          </li>
        </ol>
      </Section>
    </>
  );
}

/** Logos de los casos de éxito: los que tenemos en la cinta de clientes (Gamesa = Siemens Gamesa). */
const CASE_LOGO: Record<string, string | undefined> = Object.fromEntries(C.clients.map((c) => [c.name === "Siemens Gamesa" ? "Gamesa" : c.name, c.src]));

/** En reposo, cada cierto tiempo una tarjeta al azar muestra el logo de su empresa (hasta tres a la vez y nunca juntas, con fundido cruzado lento). Se para al pasar el ratón, fuera de pantalla y con reduced-motion. */
function useLogoFlips(names: string[]) {
  const reduced = useReducedMotion();
  const [shown, setShown] = useState<string[]>([]);
  const [idle, setIdle] = useState(true);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.25 });
    io.observe(el); return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (reduced || !idle || !inView) { setShown([]); return; }
    const pool = names.filter((n) => CASE_LOGO[n]);
    const cols = window.matchMedia("(min-width: 64rem)").matches ? 4 : 2; // columnas de la rejilla (lg:grid-cols-4 / grid-cols-2)
    // dos tarjetas «se tocan» si están juntas en horizontal, vertical o diagonal
    const touch = (x: string, y: string) => {
      const i = names.indexOf(x), j = names.indexOf(y);
      return Math.abs((i % cols) - (j % cols)) <= 1 && Math.abs(Math.floor(i / cols) - Math.floor(j / cols)) <= 1;
    };
    const timers: number[] = [];
    const lastSeen: Record<string, number> = {}; // cuándo terminó de mostrarse cada logo
    const COOLDOWN = 14000; // una tarjeta no repite hasta pasado este tiempo
    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const tick = () => setShown((cur) => {
      if (cur.length >= 3) return cur;
      const now = Date.now();
      const free = pool.filter((n) => !cur.includes(n) && !cur.some((c) => touch(c, n)) && now - (lastSeen[n] ?? 0) > COOLDOWN);
      const pick = free[Math.floor(Math.random() * free.length)];
      if (!pick) return cur;
      timers.push(window.setTimeout(() => { lastSeen[pick] = Date.now(); setShown((c) => c.filter((n) => n !== pick)); }, rand(3500, 5500)));
      return [...cur, pick];
    });
    // ritmo irregular: el siguiente intento llega entre 1,2 y 3 s después
    let next = 0;
    const loop = () => { tick(); next = window.setTimeout(loop, rand(1200, 3000)); };
    next = window.setTimeout(loop, rand(600, 1500));
    return () => { clearTimeout(next); timers.forEach(clearTimeout); };
  }, [reduced, idle, inView, names]);
  return { ref, shown, bind: { onMouseEnter: () => setIdle(false), onMouseLeave: () => setIdle(true), onFocus: () => setIdle(false), onBlur: () => setIdle(true) } };
}

const CASE_NAMES = C.cases.map((c) => c.name);

function Cases() {
  const { ref, shown, bind } = useLogoFlips(CASE_NAMES);
  return (
    <>
      <GridSpacer />
      <SectionIndex n={8} total={TOTAL} label={t("Clientes", "Customers")} />
      <Section id="casos" label={t("Casos de éxito", "Success stories")}>
        <Heading eyebrow={t("Casos de éxito", "Success stories")} title={t("Clientes", "Customers")} accent={t("en producción", "in production")} subtitle={t("Carsharing, subestaciones eléctricas, fuerza de campo, estacionamiento regulado, mantenimiento, transporte, distribución farmacéutica y prevención de riesgos.", "Carsharing, electrical substations, field forces, regulated parking, maintenance, transport, pharmaceutical distribution and risk prevention.")} />
        <ul ref={ref} {...bind} className="xo-cells grid-cols-2 lg:grid-cols-4">
          {C.cases.map((c, i) => {
            const logo = CASE_LOGO[c.name], on = shown.includes(c.name);
            return (
              <Reveal as="li" key={c.name} delay={i % 4}>
                <a href={c.href} className="group relative flex h-full flex-col gap-1 overflow-hidden p-6 transition-colors hover:bg-surface">
                  <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-(--xo-duration-slow) ease-(--xo-easing-out) group-hover:scale-x-100" />
                  <span className={cn("flex flex-col gap-1 transition-[opacity,filter] duration-1000 ease-(--xo-easing-in-out)", on ? "opacity-0 blur-[2px]" : "opacity-100 blur-0")}>
                    <span className="type-item text-fg">{c.name}</span>
                    <span className="type-body-sm text-fg-muted">{c.sector}</span>
                    <span className="mt-3 inline-flex items-center gap-1 type-overline text-fg-muted group-hover:text-link">{t("Ver caso", "View story")}<Icon name="arrow" size={12} className="transition-transform group-hover:translate-x-0.5" /></span>
                  </span>
                  {/* logo de la empresa, sólo en reposo */}
                  {logo && (
                    <span aria-hidden className={cn("pointer-events-none absolute inset-0 flex items-center justify-center transition-[opacity,filter] duration-1000 ease-(--xo-easing-in-out)", on ? "opacity-100 blur-0 delay-300" : "opacity-0 blur-[2px]")}>
                      <img src={logo} alt="" loading="lazy" className="h-8 w-auto max-w-[55%] object-contain opacity-60 grayscale dark:invert" />
                    </span>
                  )}
                </a>
              </Reveal>
            );
          })}
        </ul>
      </Section>
    </>
  );
}

/** 12.10 · Bloque del evento (temporal) sobre la banda de señal. */
function EventBand() {
  const e = C.home.event;
  return (
    <>
      <GridSpacer nodesBottom={false} />
      <div className="relative"><FullLine position="bottom" nodes={false} /><div className="xo-container xo-rails p-0">
        <section aria-label={e.title} className="relative overflow-hidden bg-(--xo-color-signal-bg) text-(--xo-color-signal-fg)">
          {/* arte de caracteres sólo en los laterales, con máscara hacia el centro: nunca pasa por detrás del texto */}
          <DotMatrix mode="field" colorVar="--xo-color-neutral-0" cellW={10} cellH={14} className="top-0 left-0 hidden h-full w-[26%] opacity-60 [mask-image:linear-gradient(90deg,black,transparent)] lg:block" />
          <DotMatrix mode="field" colorVar="--xo-color-neutral-0" cellW={10} cellH={14} className="top-0 right-0 hidden h-full w-[26%] opacity-60 [mask-image:linear-gradient(270deg,black,transparent)] lg:block" />
          <div className="relative z-10 flex flex-col items-center gap-5 px-5 py-16 text-center md:py-24">
            <span className="inline-flex items-center gap-2 rounded-pill border border-(--xo-color-white-alpha-40) px-3 py-1 type-overline">{e.badge}</span>
            <h2 className="max-w-2xl text-balance type-title-sm md:type-title-md lg:type-title">{e.title}</h2>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Button href={e.cta.href} size="lg" variant="outline" iconRight="arrow" className="border-transparent! bg-(--xo-color-neutral-0)! text-(--xo-color-neutral-900)! hover:bg-(--xo-color-cyan-50)!">{e.cta.label}</Button>
            </div>
          </div>
        </section>
      </div></div>
    </>
  );
}

const QUOTE_MS = 8000;

/** Opiniones: una cita destacada que rota sola + lista de empresas (con progreso). Clic para elegir; pausa al pasar el ratón o fuera de pantalla. */
function Testimonials() {
  const items = C.testimonials;
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 });
    io.observe(el); return () => io.disconnect();
  }, []);
  const playing = !reduced && !paused && inView;
  useEffect(() => {
    if (!playing) return;
    const id = setTimeout(() => setI((n) => (n + 1) % items.length), QUOTE_MS);
    return () => clearTimeout(id);
  }, [playing, i, items.length]);
  const q = items[i];
  return (
    <>
      <GridSpacer />
      <SectionIndex n={9} total={TOTAL} label={t("Opiniones", "Reviews")} />
      <Section label={t("Opiniones de clientes", "Customer reviews")}>
        <Heading eyebrow={t("Testimonios", "Testimonials")} title={t("Lo que dicen", "What our")} accent={t("nuestros clientes", "customers say")} />
        <div ref={ref} className="xo-cells lg:grid-cols-[1.7fr_1fr]" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {/* cita destacada */}
          <figure className="relative flex min-h-96 flex-col justify-between gap-10 overflow-hidden p-8 md:p-12">
            <DotMatrix mode="field" className="right-0 bottom-0 hidden h-48 w-1/2 opacity-50 [mask-image:linear-gradient(0deg,black,transparent),linear-gradient(90deg,transparent,black_50%)] [mask-composite:intersect] md:block" />
            <svg aria-hidden viewBox="0 0 32 24" className="relative h-8 w-11 self-start text-fg-accent-display" fill="currentColor"><path d="M0 24V14.4Q0 7.2 3.6 3.6 7.2 0 13.2 0v4.8q-3.6 0-5.4 2.1T6 12h7.2v12zm18.8 0V14.4q0-7.2 3.6-10.8Q26 0 32 0v4.8q-3.6 0-5.4 2.1T24.8 12H32v12z" /></svg>
            <blockquote key={i} aria-live="polite" className="relative max-w-3xl text-balance text-fg type-title-sm xo-fade-in">{q.quote}</blockquote>
            <figcaption key={`c${i}`} className="relative flex items-center gap-4 xo-fade-in">
              <span aria-hidden className="inline-flex size-12 shrink-0 items-center justify-center rounded-lg border border-accent-border bg-accent-subtle type-label text-accent-subtle-fg">{q.company[0]}</span>
              <span className="flex flex-col"><span className="type-label text-fg">{q.company}</span>{q.author && <span className="type-body-sm text-fg-muted">{q.author}</span>}</span>
              <span aria-hidden className="ml-auto font-mono text-xs text-fg-muted">{String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
            </figcaption>
          </figure>
          {/* empresas: cada fila elige su cita; la activa muestra el progreso hasta la siguiente */}
          <ul className="flex flex-col" aria-label={t("Elegir testimonio", "Choose a testimonial")}>
            {items.map((it, k) => (
              <li key={it.company} className="flex-1 border-b border-line-faint last:border-b-0">
                <button type="button" onClick={() => setI(k)} aria-pressed={k === i} className={cn("group relative flex h-full min-h-16 w-full items-center gap-4 px-7 text-left transition-colors duration-(--xo-duration-base)", k === i ? "bg-surface" : "hover:bg-surface")}>
                  <span aria-hidden className={cn("absolute inset-y-0 left-0 w-0.5 transition-colors", k === i ? "bg-accent" : "bg-transparent")} />
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className={cn("type-label transition-colors", k === i ? "text-fg" : "text-fg-secondary group-hover:text-fg")}>{it.company}</span>
                    {it.author && <span className="truncate type-body-sm text-fg-muted">{it.author}</span>}
                  </span>
                  <Icon name="arrow" size={14} className={cn("shrink-0 transition-[opacity,translate]", k === i ? "text-fg-accent opacity-100" : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100")} />
                  {k === i && !reduced && (
                    <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-line-faint">
                      <span key={i} className="xo-progress block h-full origin-left bg-accent" style={{ animationDuration: `${QUOTE_MS}ms`, animationPlayState: playing ? "running" : "paused" }} />
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center gap-4 border-b border-line-faint px-5 py-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label={t("Certificaciones y reconocimientos", "Certifications and recognition")}>
            {C.recognitions.map((r) => <li key={r}><Badge variant="mono" className="whitespace-normal! text-center">{r}</Badge></li>)}
          </ul>
          <Button href={link("comentarios-clientes")} variant="link" iconRight="chevron">{t("Más opiniones de clientes", "More customer reviews")}</Button>
        </div>
      </Section>
    </>
  );
}

/** Preguntas frecuentes: entre el cierre y el pie (respuestas del documento de visión). */
function FAQ() {
  const f = C.home.faq;
  return (
    <>
      <GridSpacer />
      <SectionIndex n={10} total={TOTAL} label="FAQ" />
      <Section id="faq" label={`${f.title} ${f.accent}`} className="grid lg:grid-cols-[1fr_1.6fr]">
        <div className="border-b border-line-faint px-7 py-16 lg:border-r">
          <SectionHeading align="left" eyebrow={f.eyebrow} title={f.title} accent={f.accent} subtitle={f.subtitle} />
          <div className="relative mt-10 hidden h-64 lg:block"><DotMatrix mode="blob" className="inset-0" /></div>
        </div>
        <div className="border-b border-line-faint">
          {f.items.map((it) => (
            <details key={it.q} className="group border-b border-line-faint last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-7 py-5 type-item text-fg hover:bg-surface [&::-webkit-details-marker]:hidden">
                {it.q}
                <Icon name="plus" className="shrink-0 text-fg-muted transition-transform duration-(--xo-duration-base) group-open:rotate-45" />
              </summary>
              <p className="px-7 pb-6 type-body text-fg-secondary">{it.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}

export function Home() {
  return (
    <SiteLayout title="XOne · Agent Self-Driven Development Platform" description={C.hero.subtitle}>
      <Hero />
      <Logos />
      <WhatIsASDD />
      <Cycle />
      <Pieces />
      <Loop />
      <Solutions />
      <UseCases />
      <EventBand />
      <WhyXOne />
      <Cases />
      <Testimonials />
      <CTA />
      <FAQ />
    </SiteLayout>
  );
}
