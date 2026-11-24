import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Badge, Button, CardLead, Icon, Section, SectionHeading, SectionIndex, cn } from "../components/ui";
import { CTA, SiteLayout } from "../components/layout/SiteLayout";
import { Heading } from "../components/layout/Heading";
import { link, t } from "../i18n";
import * as C from "../content/xone";
import { AIShowcase, CountUp, DotMatrix, FrameSection, FullLine, GRID_STEP, GridCanvas, useReducedMotion, GridSpacer, IntegrationIllo, Marquee, OfflineIllo, PlatformsIllo, Reveal, Scramble, SecurityIllo } from "../components/fx";

const TOTAL = 7;

function ImgOrPlaceholder({ src, alt, className, note }: { src: string; alt: string; className?: string; note: string }) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <div role="img" aria-label={alt} className={cn("xo-dot-grid flex items-center justify-center bg-surface-sunken p-6 text-center type-overline text-fg-muted", className)}>
        {t("imagen", "image")}: {note}
      </div>
    );
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} />;
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
        <span className="sr-only">{t("Sectores", "Sectors")}: {sectors.join(", ")}</span>
        <span aria-hidden className="truncate text-fg-secondary">{t("Movilizamos", "We mobilize")} <span className="xo-caret text-fg">{typed}</span></span>
      </div>
      <div className="flex items-center justify-between gap-3 rounded-lg bg-bg-subtle p-1.5">
        <ul className="flex min-w-0 gap-1 overflow-x-auto" aria-label={t("Plataformas", "Platforms")}>
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
      label={t("Presentación", "Introduction")}
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
            <ImgOrPlaceholder src={c.src} alt={c.name} note={c.name} className="h-8 w-auto max-w-32 object-contain opacity-70 grayscale transition-[opacity,filter] duration-(--xo-duration-base) group-hover:opacity-100 group-hover:grayscale-0 dark:invert" />
            <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-(--xo-duration-slow) ease-(--xo-easing-out) group-hover:scale-x-100" />
          </div>
        ))}
      </Marquee>
    </Section></div>
  );
}

function WhyXOne() {
  return (
    <>
      <GridSpacer />
      <SectionIndex n={1} total={TOTAL} label={t("Ventajas", "Advantages")} />
      <Section id="plataforma" label={t("Por qué XOne", "Why XOne")}>
        <Heading eyebrow={t("Por qué XOne", "Why XOne")} title={t("Una plataforma,", "One platform,")} accent={t("experiencias ilimitadas", "unlimited experiences")} subtitle={t("Todo lo necesario para crear, desplegar y mantener apps corporativas en una sola plataforma.", "Everything you need to build, deploy and maintain corporate apps on a single platform.")} />
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
      <SectionIndex n={2} total={TOTAL} label={t("Cómo funciona", "How it works")} />
      <Section id="ia" label={t("XOne + IA", "XOne + AI")}>
        <Heading eyebrow={a.eyebrow} title={a.title} accent={a.accent} after={a.after} subtitle={a.subtitle} />
        <AIShowcase
          steps={a.steps}
          footer={
            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:gap-6 md:px-8">
              <span className="inline-flex h-14 shrink-0 items-center gap-2 self-start rounded-md border border-line bg-surface px-4 font-semibold text-fg shadow-xs"><Icon name="code" className="text-fg-accent" />{xc.title}</span>
              <div className="flex flex-col gap-2">
                <p className="type-body-sm text-fg-secondary">{xc.text}</p>
                <a href={xc.href} className="inline-flex items-center gap-1 self-start type-label text-link hover:underline">{t("Conoce XOneCode", "Discover XOneCode")}<Icon name="chevron" size={14} /></a>
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
      <SectionIndex n={3} total={TOTAL} label={t("Productos", "Products")} />
      <Section id="productos" label={t("Productos", "Products")}>
        <Heading eyebrow={t("Módulos de la plataforma", "Platform modules")} title={t("Todo lo que necesitas para", "Everything you need to")} accent={t("movilizar tu negocio", "mobilize your business")} />
        <ul className="xo-cells md:grid-cols-3">
          {C.products.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i % 3}>
              <a href={p.href} className="group flex h-full flex-col gap-4 p-7 transition-colors duration-(--xo-duration-base) hover:bg-surface">
                <span className="inline-flex size-9 items-center justify-center rounded-md bg-hover text-fg-secondary transition-colors group-hover:bg-accent-subtle group-hover:text-accent-subtle-fg"><Icon name={p.icon} size={18} /></span>
                <h3 className="type-item text-fg">{p.title}</h3>
                <p className="flex-1 type-body-sm text-fg-muted">{p.text}</p>
                <span className="inline-flex items-center gap-1 type-label text-link">{t("Saber más", "Learn more")}<Icon name="chevron" size={14} className="transition-transform group-hover:translate-x-0.5" /></span>
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
      <SectionIndex n={4} total={TOTAL} label={t("Clientes", "Customers")} />
      <Section id="casos" label={t("Casos de éxito", "Success stories")}>
        <Heading eyebrow={t("Casos de éxito", "Success stories")} title={t("Movilidad real en", "Real mobility in")} accent={t("sectores exigentes", "demanding sectors")} subtitle={t("Carsharing, subestaciones eléctricas, fuerza de campo, estacionamiento regulado, mantenimiento, transporte, distribución farmacéutica y prevención de riesgos.", "Carsharing, electrical substations, field forces, regulated parking, maintenance, transport, pharmaceutical distribution and risk prevention.")} />
        <ul className="xo-cells grid-cols-2 lg:grid-cols-4">
          {C.cases.map((c, i) => (
            <Reveal as="li" key={c.name} delay={i % 4}>
              <a href={c.href} className="group relative flex h-full flex-col gap-1 p-6 transition-colors hover:bg-surface">
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-(--xo-duration-slow) ease-(--xo-easing-out) group-hover:scale-x-100" />
                <span className="type-item text-fg">{c.name}</span>
                <span className="type-body-sm text-fg-muted">{c.sector}</span>
                <span className="mt-3 inline-flex items-center gap-1 type-overline text-fg-muted group-hover:text-link">{t("Ver caso", "View story")}<Icon name="arrow" size={12} className="transition-transform group-hover:translate-x-0.5" /></span>
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
        <section aria-label={t("XOne en cifras", "XOne in numbers")} className="relative overflow-hidden bg-(--xo-color-signal-bg) text-(--xo-color-signal-fg)">
          {/* arte de caracteres sólo en los laterales, con máscara hacia el centro: nunca pasa por detrás del texto */}
          <DotMatrix mode="field" colorVar="--xo-color-neutral-0" cellW={10} cellH={14} className="top-0 left-0 hidden h-[62%] w-[26%] opacity-60 [mask-image:linear-gradient(90deg,black,transparent)] lg:block" />
          <DotMatrix mode="field" colorVar="--xo-color-neutral-0" cellW={10} cellH={14} className="top-0 right-0 hidden h-[62%] w-[26%] opacity-60 [mask-image:linear-gradient(270deg,black,transparent)] lg:block" />
          <div className="relative z-10 flex flex-col items-center gap-5 px-5 py-16 text-center md:py-24">
            <span className="inline-flex items-center gap-2 rounded-pill border border-(--xo-color-white-alpha-40) px-3 py-1 type-overline">{t("XOne en cifras", "XOne in numbers")}</span>
            <h2 className="max-w-2xl text-balance type-title-sm md:type-title-md lg:type-title">{t("La plataforma más utilizada y avalada por los expertos", "The most widely used platform, endorsed by the experts")}</h2>
            <p className="max-w-prose type-lead text-(--xo-color-signal-fg)">{t("Más de 20 años incorporando nuevas herramientas, servicios y tecnologías.", "More than 20 years adding new tools, services and technologies.")}</p>
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
      <SectionIndex n={5} total={TOTAL} label={t("Comunidad", "Community")} />
      <Section label={t("Opiniones de clientes", "Customer reviews")}>
        <Heading eyebrow={t("Testimonios", "Testimonials")} title={t("Lo que dicen", "What our")} accent={t("nuestros clientes", "customers say")} />
        <Marquee label={t("Testimonios de clientes", "Customer testimonials")} duration={80} className="border-b border-line-faint">
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
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label={t("Certificaciones y reconocimientos", "Certifications and recognition")}>
            {C.recognitions.map((r) => <li key={r}><Badge variant="mono" className="whitespace-normal! text-center">{r}</Badge></li>)}
          </ul>
          <Button href={link("comentarios-clientes")} variant="link" iconRight="chevron">{t("Más opiniones de clientes", "More customer reviews")}</Button>
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
      <SectionIndex n={6} total={TOTAL} label={t("Servicios", "Services")} />
      <Section id="servicios" label={t("Servicios profesionales", "Professional services")}>
        <Heading eyebrow={t("Acompañamiento experto", "Expert guidance")} title={t("De la implantación simple a la", "From simple rollouts to")} accent={t("solución a medida", "custom solutions")} subtitle={t("Un equipo cualificado con más de 20 años de experiencia en el desarrollo de apps.", "A qualified team with more than 20 years of experience in app development.")} />
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

function FAQ() {
  return (
    <>
      <GridSpacer />
      <SectionIndex n={7} total={TOTAL} label="FAQ" />
      <Section id="faq" label={t("Preguntas frecuentes", "Frequently asked questions")} className="grid lg:grid-cols-[1fr_1.6fr]">
        <div className="xo-curvy border-b border-line-faint px-7 py-16 lg:border-r">
          <SectionHeading align="left" eyebrow={t("Antes de empezar", "Before you start")} title={t("Preguntas", "Frequently asked")} accent={t("frecuentes", "questions")} subtitle={t("Lo esencial sobre la plataforma XOne.", "The essentials about the XOne platform.")} />
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
    <SiteLayout title={t("XOne · Plataforma de desarrollo multiexperiencia", "XOne · Multiexperience development platform")} description={C.hero.subtitle}>
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
    </SiteLayout>
  );
}
