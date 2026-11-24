import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Badge, Button, Card, CardLead, CodeBlock, Eyebrow, Footer, Icon, Navbar, Section, SectionHeading, SectionIndex, Tabs, cn } from "../components/ui";
import * as C from "../content/xone";
import { AIShowcase, AutoSteps, CountUp, DotMatrix, FrameSection, FullLine, GRID_STEP, GridCanvas, PageRails, useReducedMotion, GridSpacer, IntegrationIllo, Marquee, OfflineIllo, PlatformsIllo, Reveal, Scramble, SecurityIllo } from "../components/fx";

const TOTAL = 7;

function ImgOrPlaceholder({ src, alt, className, note }: { src: string; alt: string; className?: string; note: string }) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <div role="img" aria-label={alt} className={cn("xo-dot-grid flex items-center justify-center bg-surface-sunken p-6 text-center type-overline text-fg-muted", className)}>
        imagen: {note}
      </div>
    );
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} />;
}

function Announcement() {
  return (
    <div className="relative">
      <FullLine position="bottom" />
      <div className="xo-container xo-rails px-3 py-3">
      <a href={C.announcement.href} className="flex min-h-10 flex-wrap items-center justify-center gap-x-2 rounded-md bg-(--xo-color-accent-solid) px-4 py-2 text-center type-body-sm text-(--xo-color-accent-solid-fg) transition-colors duration-(--xo-duration-base) hover:bg-(--xo-color-accent-solid-hover)">
        <span className="inline-flex h-5 items-center rounded-pill bg-(--xo-color-ink-alpha-40) px-2 type-label-sm">Nuevo</span>
        {C.announcement.text}
        <span className="inline-flex items-center gap-1 font-medium underline underline-offset-4">{C.announcement.cta}<Icon name="arrow" size={14} /></span>
      </a>
      </div>
    </div>
  );
}

/** Tarjeta interactiva del hero (equivalente a la "consola" de la referencia), sin imágenes de producto. */
function HeroConsole() {
  const sectors = C.hero.sectors;
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
      else { ch--; if (ch <= 0) { deleting = false; i = (i + 1) % sectors.length; ch = 0; setPlatform((p) => (p + 1) % C.hero.platforms.length); } }
      setTyped(sectors[i].slice(0, ch));
    }, 55);
    return () => clearInterval(id);
  }, [reduced, sectors]);
  return (
    <div className="w-full max-w-xl rounded-xl bg-surface p-2 text-left shadow-float">
      <div className="flex h-12 items-center gap-3 px-3 text-base">
        <Icon name="search" className="shrink-0 text-fg-muted" />
        <span className="sr-only">Sectores: {sectors.join(", ")}</span>
        <span aria-hidden className="truncate text-fg-secondary">Movilizamos <span className="xo-caret text-fg">{typed}</span></span>
      </div>
      <div className="flex items-center justify-between gap-3 rounded-lg bg-bg-subtle p-1.5">
        <ul className="flex min-w-0 gap-1 overflow-x-auto" aria-label="Plataformas">
          {C.hero.platforms.map((p, i) => (
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
      label="Presentación"
      className="border-b border-line-faint lg:border-b-0"
      style={{ minHeight: minH }}
      labels={["MXDP", "Native", "Offline", "Low-code"]}
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
          <Reveal delay={3} className="relative flex w-full justify-center">
            {/* arte de caracteres (el mismo "field" de las cabeceras) por detrás del input, contenido en el bloque central */}
            <DotMatrix mode="field" className="top-1/2 -inset-x-8 hidden h-[260px] -translate-y-[46%] lg:block" />
            <div className="relative z-10 flex w-full justify-center"><HeroConsole /></div>
          </Reveal>
          <Reveal as="ul" delay={4} className="flex flex-wrap justify-center gap-x-6 gap-y-2 lg:mt-14" aria-label="Datos clave">
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
    <Section label="Clientes" className="grid lg:grid-cols-[240px_1fr]">
      <p className="xo-curvy flex items-center justify-center border-b border-line-faint p-6 text-center type-body-sm text-fg-secondary lg:justify-start lg:border-r lg:border-b-0 lg:text-left">
        <span>Empresas que <strong className="font-semibold text-fg-accent">confían en XOne</strong></span>
      </p>
      <Marquee label="Logotipos de clientes" duration={70} className="xo-curvy">
        {C.clients.map((c) => (
          <div key={c.name} className="group relative flex h-24 w-44 shrink-0 items-center justify-center border-r border-line-faint px-6">
            <ImgOrPlaceholder src={c.src} alt={c.name} note={c.name} className="h-8 w-auto max-w-32 object-contain opacity-70 grayscale transition-[opacity,filter] duration-(--xo-duration-base) group-hover:opacity-100 group-hover:grayscale-0 dark:invert" />
            <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-(--xo-duration-slow) ease-(--xo-easing-out) group-hover:scale-x-100" />
          </div>
        ))}
      </Marquee>
    </Section></div>
  );
}

function Heading(props: Parameters<typeof SectionHeading>[0] & { art?: "left" | "right" | "both" }) {
  const { art = "both", ...rest } = props;
  return (
    <div className="xo-curvy overflow-hidden border-b border-line-faint px-5 py-12 md:py-[88px] lg:py-[143px]">
      {(art === "left" || art === "both") && <DotMatrix mode="blob" className="top-1/2 left-0 hidden h-60 w-64 -translate-y-1/2 lg:block" />}
      {(art === "right" || art === "both") && <DotMatrix mode="field" className="top-0 right-0 hidden h-full w-[30%] lg:block" />}
      <Reveal className="relative"><SectionHeading {...rest} /></Reveal>
    </div>
  );
}

function WhyXOne() {
  return (
    <>
      <GridSpacer />
      <SectionIndex n={1} total={TOTAL} label="Ventajas" />
      <Section id="plataforma" label="Por qué XOne">
        <Heading eyebrow="Por qué XOne" title="Una plataforma," accent="experiencias ilimitadas" subtitle="Todo lo necesario para crear, desplegar y mantener apps corporativas en una sola plataforma." />
        <div className="xo-cells md:grid-cols-2">
          {C.pillars.map((p, i) => (
            <Reveal key={p.n} delay={i} className="flex flex-col">
              <div className="flex flex-1 flex-col gap-5 p-7 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 type-overline text-fg-muted"><span className="inline-flex size-6 items-center justify-center rounded-sm border border-accent-border bg-accent-subtle text-accent-subtle-fg"><Icon name={p.icon} size={14} /></span>{p.tag}</span>
                  <span aria-hidden className="font-mono text-xs text-fg-muted">{p.n}</span>
                </div>
                <CardLead lead={p.lead}>{p.text}</CardLead>
              </div>
              {/* panel de ilustración: alto fijo, a sangre y pegado abajo → alineado en toda la fila */}
              <div className="h-60 border-t border-line-faint bg-bg-subtle">
                {[<PlatformsIllo key="a" />, <SecurityIllo key="b" />, <OfflineIllo key="c" />, <IntegrationIllo key="d" />][i]}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

function HowItWorks() {
  const a = C.ai;
  const xc = a.xonecode;
  return (
    <>
      <GridSpacer />
      <SectionIndex n={2} total={TOTAL} label="Cómo funciona" />
      <Section id="ia" label="XOne + IA">
        <Heading eyebrow={a.eyebrow} title={a.title} accent={a.accent} after={a.after} subtitle={a.subtitle} />
        <AIShowcase
          steps={a.steps}
          footer={
            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:gap-6 md:px-8">
              <span className="inline-flex h-14 shrink-0 items-center gap-2 self-start rounded-md border border-line bg-surface px-4 font-semibold text-fg shadow-xs"><Icon name="code" className="text-fg-accent" />{xc.title}</span>
              <div className="flex flex-col gap-2">
                <p className="type-body-sm text-fg-secondary">{xc.text}</p>
                <a href={xc.href} className="inline-flex items-center gap-1 self-start type-label text-link hover:underline">Conoce XOneCode<Icon name="chevron" size={14} /></a>
              </div>
            </div>
          }
        />
      </Section>
    </>
  );
}

function Products() {
  return (
    <>
      <GridSpacer />
      <SectionIndex n={3} total={TOTAL} label="Productos" />
      <Section id="productos" label="Productos">
        <Heading eyebrow="Módulos de la plataforma" title="Todo lo que necesitas para" accent="movilizar tu negocio" />
        <ul className="xo-cells md:grid-cols-3">
          {C.products.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i % 3}>
              <a href={p.href} className="group flex h-full flex-col gap-4 p-7 transition-colors duration-(--xo-duration-base) hover:bg-surface">
                <span className="inline-flex size-9 items-center justify-center rounded-md bg-hover text-fg-secondary transition-colors group-hover:bg-accent-subtle group-hover:text-accent-subtle-fg"><Icon name={p.icon} size={18} /></span>
                <h3 className="type-item text-fg">{p.title}</h3>
                <p className="flex-1 type-body-sm text-fg-muted">{p.text}</p>
                <span className="inline-flex items-center gap-1 type-label text-link">Saber más<Icon name="chevron" size={14} className="transition-transform group-hover:translate-x-0.5" /></span>
              </a>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}

function Cases() {
  return (
    <>
      <GridSpacer />
      <SectionIndex n={4} total={TOTAL} label="Clientes" />
      <Section id="casos" label="Casos de éxito">
        <Heading eyebrow="Casos de éxito" title="Movilidad real en" accent="sectores exigentes" subtitle="Carsharing, subestaciones eléctricas, fuerza de campo, estacionamiento regulado, mantenimiento, transporte, distribución farmacéutica y prevención de riesgos." />
        <ul className="xo-cells grid-cols-2 lg:grid-cols-4">
          {C.cases.map((c, i) => (
            <Reveal as="li" key={c.name} delay={i % 4}>
              <a href={c.href} className="group relative flex h-full flex-col gap-1 p-6 transition-colors hover:bg-surface">
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-(--xo-duration-slow) ease-(--xo-easing-out) group-hover:scale-x-100" />
                <span className="type-item text-fg">{c.name}</span>
                <span className="type-body-sm text-fg-muted">{c.sector}</span>
                <span className="mt-3 inline-flex items-center gap-1 type-overline text-fg-muted group-hover:text-link">Ver caso<Icon name="arrow" size={12} className="transition-transform group-hover:translate-x-0.5" /></span>
              </a>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}

/** Banda "señal": el gran bloque de acento (equivalente al bloque naranja de la referencia), contenido en la rejilla. */
function SignalBand() {
  return (
    <>
      <GridSpacer nodesBottom={false} />
      <div className="relative"><FullLine position="bottom" nodes={false} /><div className="xo-container xo-rails p-0">
        <section aria-label="XOne en cifras" className="relative overflow-hidden bg-(--xo-color-signal-bg) text-(--xo-color-signal-fg)">
          {/* arte de caracteres sólo en los laterales, con máscara hacia el centro: nunca pasa por detrás del texto */}
          <DotMatrix mode="field" colorVar="--xo-color-neutral-0" cellW={10} cellH={14} className="top-0 left-0 hidden h-[62%] w-[26%] opacity-60 [mask-image:linear-gradient(90deg,black,transparent)] lg:block" />
          <DotMatrix mode="field" colorVar="--xo-color-neutral-0" cellW={10} cellH={14} className="top-0 right-0 hidden h-[62%] w-[26%] opacity-60 [mask-image:linear-gradient(270deg,black,transparent)] lg:block" />
          <div className="relative z-10 flex flex-col items-center gap-5 px-5 py-16 text-center md:py-24">
            <span className="inline-flex items-center gap-2 rounded-pill border border-(--xo-color-white-alpha-40) px-3 py-1 type-overline">XOne en cifras</span>
            <h2 className="max-w-2xl text-balance type-title-sm md:type-title-md lg:type-title">La plataforma más utilizada y avalada por los expertos</h2>
            <p className="max-w-prose type-lead text-(--xo-color-signal-fg)">Más de 20 años incorporando nuevas herramientas, servicios y tecnologías.</p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Button href={C.contact.cta.href} size="lg" variant="outline" iconRight="arrow" className="border-transparent! bg-(--xo-color-neutral-0)! text-(--xo-color-neutral-900)! hover:bg-(--xo-color-cyan-50)!">{C.contact.cta.label}</Button>
              <Button href={C.hero.primary.href} size="lg" variant="ghost" className="border border-(--xo-color-white-alpha-40) bg-transparent! text-(--xo-color-signal-fg)! hover:bg-(--xo-color-white-alpha-16)!">{C.hero.primary.label}</Button>
            </div>
          </div>
          <dl className="relative z-10 grid grid-cols-2 bg-(--xo-color-signal-surface) lg:grid-cols-4">
            {C.stats.map((s, i) => (
              <Reveal key={s.value} delay={i} className={cn("flex flex-col gap-2 border-(--xo-color-white-alpha-16) p-7", i % 2 === 0 && "border-r", i < 2 && "border-b lg:border-b-0", i === 1 && "lg:border-r", i === 2 && "lg:border-r")}>
                <dd className="order-first type-title-sm md:type-title-md"><CountUp value={s.value} /></dd>
                <dt className="type-body-sm text-(--xo-color-signal-fg-muted)">{s.label}</dt>
              </Reveal>
            ))}
          </dl>
        </section>
      </div></div>
    </>
  );
}

function Testimonials() {
  return (
    <>
      <GridSpacer nodesTop={false} />
      <SectionIndex n={5} total={TOTAL} label="Comunidad" />
      <Section label="Opiniones de clientes">
        <Heading eyebrow="Testimonios" title="Lo que dicen" accent="nuestros clientes" />
        <Marquee label="Testimonios de clientes" duration={80} className="border-b border-line-faint">
          {C.testimonials.map((t) => (
            <figure key={t.company} className="flex w-80 shrink-0 flex-col justify-between gap-8 border-r border-line-faint p-7 md:w-96">
              <blockquote className="type-body text-fg">«{t.quote}»</blockquote>
              <figcaption className="flex items-center gap-3">
                <span aria-hidden className="inline-flex size-9 items-center justify-center rounded-pill bg-accent-subtle font-semibold text-accent-subtle-fg">{t.company[0]}</span>
                <span className="type-body-sm"><span className="block font-semibold text-fg">{t.company}</span>{t.author && <span className="text-fg-muted">{t.author}</span>}</span>
              </figcaption>
            </figure>
          ))}
        </Marquee>
        <div className="flex flex-col items-center gap-4 border-b border-line-faint px-5 py-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Certificaciones y reconocimientos">
            {C.recognitions.map((r) => <li key={r}><Badge variant="mono" className="whitespace-normal! text-center">{r}</Badge></li>)}
          </ul>
          <Button href="https://xone.es/comentarios-clientes/" variant="link" iconRight="chevron">Más opiniones de clientes</Button>
        </div>
      </Section>
    </>
  );
}

function Services() {
  const k = C.contact;
  return (
    <>
      <GridSpacer />
      <SectionIndex n={6} total={TOTAL} label="Servicios" />
      <Section id="servicios" label="Servicios profesionales">
        <Heading eyebrow="Acompañamiento experto" title="De la implantación simple a la" accent="solución a medida" subtitle="Un equipo cualificado con más de 20 años de experiencia en el desarrollo de apps." />
        <ul className="xo-cells md:grid-cols-2 lg:grid-cols-3">
          {C.services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i % 3} className="flex flex-col gap-3 p-7">
              <span className="type-overline text-fg-muted">{s.title}</span>
              <CardLead lead={s.lead} className="type-body">{s.text}</CardLead>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}

/** CTA final: sección enmarcada como la del hero. Concepto propio: sincronización — las celdas se encienden en espejo a ambos lados (sólo el relleno tenue de la celda, sin símbolos). */
function CTA() {
  const k = C.contact;
  return (
    <>
      <GridSpacer />
      <FrameSection
        label="Contacto"
        labels={["Android", "iOS", "Windows", "Web"]}
        style={{ height: 4 * GRID_STEP + 1 }}
        className="hidden lg:block"
        background={
          <>
            <GridCanvas centerCols={5} topRows={0} lit={3} mirror className="h-full" />
          </>
        }
      >
        <CTAContent k={k} />
      </FrameSection>
      {/* móvil / tablet: sin marco */}
      <section aria-label="Contacto" className="relative lg:hidden">
        <FullLine position="top" />
        <FullLine position="bottom" />
        <div className="xo-container xo-rails px-5 py-16"><CTAContent k={k} /></div>
      </section>
    </>
  );
}

function CTAContent({ k }: { k: typeof C.contact }) {
  return (
    <div className="relative mx-auto flex h-full max-w-[505px] flex-col items-center justify-center gap-5 px-6 text-center">
      <Eyebrow>Contacto</Eyebrow>
      <h2 className="text-fg type-title-sm md:type-title-md">{k.title} <span className="text-fg-accent-display">{k.accent}</span>?</h2>
      <p className="type-body text-fg-secondary">{k.subtitle}</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button href={k.cta.href} iconRight="arrow">{k.cta.label}</Button>
        <Button href="#casos" variant="ghost">Ver casos de éxito</Button>
      </div>
      <a href={`mailto:${k.email}`} className="inline-flex items-center gap-1 type-body-sm text-fg-muted hover:text-fg">o escríbenos a {k.email}<Icon name="chevron" size={14} /></a>
    </div>
  );
}

function FAQ() {
  return (
    <>
      <GridSpacer />
      <SectionIndex n={7} total={TOTAL} label="FAQ" />
      <Section id="faq" label="Preguntas frecuentes" className="grid lg:grid-cols-[1fr_1.6fr]">
        <div className="xo-curvy border-b border-line-faint px-7 py-16 lg:border-r">
          <SectionHeading align="left" eyebrow="Antes de empezar" title="Preguntas" accent="frecuentes" subtitle="Lo esencial sobre la plataforma XOne." />
          <div className="relative mt-10 hidden h-64 lg:block"><DotMatrix mode="blob" className="inset-0" /></div>
        </div>
        <div className="xo-curvy border-b border-line-faint">
          {C.faq.map((f) => (
            <details key={f.q} className="group border-b border-line-faint last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-7 py-5 type-item text-fg hover:bg-surface [&::-webkit-details-marker]:hidden">
                {f.q}
                <Icon name="plus" className="shrink-0 text-fg-muted transition-transform duration-(--xo-duration-base) group-open:rotate-45" />
              </summary>
              <p className="px-7 pb-6 type-body text-fg-secondary">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}

export function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-surface focus:p-3">Saltar al contenido</a>
      <PageRails />
      <Announcement />
      <Navbar links={C.nav.links} cta={C.nav.cta} secondary={C.nav.secondary} />
      <main id="main">
        <Hero />
        <Logos />
        <WhyXOne />
        <HowItWorks />
        <Products />
        <Cases />
        <SignalBand />
        <Testimonials />
        <Services />
        <CTA />
        <FAQ />
      </main>
      <Footer
        tagline={C.footer.tagline}
        columns={C.footer.columns}
        aside={
          <div className="flex flex-col gap-2 type-body-sm text-fg-muted">
            <span className="type-overline">Presentes en</span>
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
