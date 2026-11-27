import { useEffect, useMemo, useState } from "react";
import { Icon, ImgOrPlaceholder, Prose, Section, cn } from "../../components/ui";
import { FullLine } from "../../components/fx";
import { NEWS, type NewsMeta } from "../../content/news/meta";
import { link, locale, t } from "../../i18n";
import { G, type PageDoc } from "../../content/pages/types";

/* Cuerpos de las noticias: un chunk por fichero, sólo se carga el que se abre. */
const BODIES = import.meta.glob<string>("../../content/news/*/*.md", { query: "?raw", import: "default" });

const IMG = (f: string) => `https://xone.es/media/${f}`;
export const newsBySlug = (slug: string) => NEWS.find((n) => n.slug === slug);
export const newsTitle = (n: NewsMeta) => n[locale];
export const formatDate = (iso: string) => new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(iso + "T00:00:00Z"));

/** Noticias del listado en el idioma actual: de cada par sólo se muestra la entrada publicada en ese idioma. */
export function listed() {
  return NEWS.filter((n) => !n.pair || (n.orig ?? "es") === locale);
}

/** Fichero del cuerpo: los pares guardan su texto con el nombre de la entrada en español. */
const bodyKey = (n: NewsMeta) => `../../content/news/${locale}/${n.orig === "en" && n.pair ? n.pair : n.body ?? n.slug}.md`;

/* ---------- Tarjeta ---------- */
function Card({ n, big = false }: { n: NewsMeta; big?: boolean }) {
  const href = link(n.slug);
  const external = /^https?:/.test(href);
  return (
    <a href={href} className={cn("group flex h-full flex-col transition-colors duration-(--xo-duration-base) hover:bg-surface", big && "lg:grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]")}>
      <div className={cn("relative overflow-hidden border-b border-line-faint bg-surface-sunken", big ? "aspect-[16/9] lg:aspect-auto lg:h-full lg:border-r lg:border-b-0" : "aspect-[16/9]")}>
        {n.image ? (
          <ImgOrPlaceholder src={IMG(n.image)} alt="" note={newsTitle(n)} className="size-full object-cover transition-transform duration-(--xo-duration-slower) ease-(--xo-easing-out) group-hover:scale-[1.03]" />
        ) : (
          <div aria-hidden className="xo-dot-grid flex size-full items-center justify-center">
            <span className="font-mono text-xs tracking-widest text-fg-muted">XONE · {n.date.slice(0, 4)}</span>
          </div>
        )}
      </div>
      <div className={cn("flex flex-1 flex-col gap-3 p-6", big && "md:p-10 lg:justify-center")}>
        <span className="flex items-center gap-2 type-overline text-fg-muted">
          {big && <span className="rounded-pill bg-accent-subtle px-2 py-0.5 text-accent-subtle-fg">{t("Lo último", "Latest")}</span>}
          <time dateTime={n.date}>{formatDate(n.date)}</time>
        </span>
        <span className={cn("text-balance text-fg group-hover:text-fg-accent", big ? "type-title-sm" : "type-item")}>{newsTitle(n)}</span>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 type-body-sm font-medium text-fg-accent">
          {t("Leer la noticia", "Read the story")}
          <Icon name={external ? "external" : "arrow"} size={14} className="transition-transform group-hover:translate-x-0.5" />
          {external && <span className="sr-only">{t("(en xone.es)", "(on xone.es)")}</span>}
        </span>
      </div>
    </a>
  );
}

/* ---------- Listado ---------- */
export function NewsList() {
  const all = listed();
  const years = useMemo(() => [...new Set(all.map((n) => n.date.slice(0, 4)))], [all]);
  const [year, setYear] = useState<string | null>(null);
  const [featured, ...rest] = all;
  const shown = (year ? all.filter((n) => n.date.startsWith(year)) : rest);
  return (
    <>
      {!year && <div className="border-b border-line-faint"><Card n={featured} big /></div>}
      <div role="group" aria-label={t("Filtrar por año", "Filter by year")} className="flex flex-wrap items-center gap-2 border-b border-line-faint px-6 py-4 md:px-10">
        <span className="mr-2 type-overline text-fg-muted">{t("Año", "Year")}</span>
        {[null, ...years].map((y) => (
          <button key={y ?? "all"} type="button" aria-pressed={year === y} onClick={() => setYear(y)}
            className={cn("rounded-pill border px-3 py-1 font-mono text-xs transition-colors", year === y ? "border-accent-border bg-accent-subtle text-accent-subtle-fg" : "border-line text-fg-secondary hover:bg-hover")}>
            {y ?? t("Todas", "All")}
          </button>
        ))}
        <span className="ml-auto type-body-sm text-fg-muted" aria-live="polite">{t(`${shown.length + (year ? 0 : 1)} noticias`, `${shown.length + (year ? 0 : 1)} stories`)}</span>
      </div>
      <ul className="xo-cells sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((n) => <li key={n.slug}><Card n={n} /></li>)}
        {Array.from({ length: (3 - (shown.length % 3)) % 3 }, (_, k) => <li key={`vacía-${k}`} aria-hidden className="hidden lg:block" />)}
        {shown.length % 2 === 1 && <li aria-hidden className="hidden sm:block lg:hidden" />}
      </ul>
    </>
  );
}

/* ---------- Noticia ---------- */
export function NewsArticle({ slug }: { slug: string }) {
  const n = newsBySlug(slug)!;
  const [md, setMd] = useState<string | null>(null);
  useEffect(() => {
    const load = BODIES[bodyKey(n)];
    if (load) load().then(setMd);
    else setMd("");
  }, [n]);
  // portada sólo si el cuerpo no trae ya esa misma imagen (xone.es guarda la versión «-og» para redes y otra en el texto)
  const base = n.image?.replace(/-og(?=\.)/, "").replace(/\.[a-z]+$/i, "");
  const cover = n.image && md !== null && !md.includes(`/${base}.`) ? IMG(n.image) : null;
  const more = listed().filter((x) => x.built && x.slug !== slug && x.slug !== n.pair).slice(0, 4);
  return (
    <div className="relative">
      <FullLine position="bottom" />
      <Section className="grid lg:grid-cols-[minmax(0,1fr)_320px]">
        <article lang={locale} className="xo-curvy flex flex-col gap-6 p-7 md:p-10 lg:border-r lg:border-line-faint lg:py-14">
          {cover && <img src={cover} alt="" className="h-auto w-full max-w-2xl rounded-lg border border-line" />}
          {md === null ? (
            <div aria-busy className="flex flex-col gap-3">{[90, 75, 82, 60].map((w) => <span key={w} className="h-4 animate-pulse rounded-pill bg-surface-sunken" style={{ width: `${w}%` }} />)}</div>
          ) : (
            <Prose md={md} className="max-w-3xl" />
          )}
        </article>
        <aside className="xo-curvy flex flex-col">
          <div className="sticky top-24 flex flex-col gap-4 p-7">
            <span className="type-overline text-fg-muted">{t("Más noticias", "More news")}</span>
            <ul className="flex flex-col">
              {more.map((x) => (
                <li key={x.slug} className="border-t border-line-faint first:border-t-0">
                  <a href={link(x.slug)} className="group flex flex-col gap-1 py-3">
                    <time dateTime={x.date} className="font-mono text-2xs text-fg-muted">{formatDate(x.date)}</time>
                    <span className="type-body-sm font-medium text-fg group-hover:text-fg-accent">{newsTitle(x)}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a href={link("noticias")} className="inline-flex items-center gap-1.5 type-body-sm font-medium text-fg-accent">{t("Todas las noticias", "All news")}<Icon name="arrow" size={14} /></a>
          </div>
        </aside>
      </Section>
    </div>
  );
}


/** Página de una noticia montada con la plantilla común (hero + cuerpo + sigue explorando + CTA). */
export function articleDoc(slug: string): PageDoc {
  const n = newsBySlug(slug)!;
  const title = newsTitle(n);
  return {
    group: G.recursos,
    crumb: { label: t("Noticias", "News"), slug: "noticias" },
    seo: { title: `${title} | XOne`, description: `${formatDate(n.date)} · ${title}` },
    hero: { title, lead: formatDate(n.date), labels: [t("Noticias", "News"), n.date.slice(0, 4), "XOne", t("Archivo", "Archive")], secondary: { label: t("Todas las noticias", "All news"), slug: "noticias" } },
    blocks: [{ type: "article", slug }],
  };
}
