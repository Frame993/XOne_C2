/**
 * Idiomas: español en la raíz (`/slug/`) e inglés bajo `/en/` (`/en/slug/`), los mismos slugs que xone.es.
 * La navegación es por enlaces normales (recarga completa), así que el idioma se fija al cargar la página.
 */
import { BUILT_SLUGS } from "./content/pages/slugs";

export type Locale = "es" | "en";

const pathname = typeof location !== "undefined" ? location.pathname : "/";
export const locale: Locale = /^\/en(\/|$)/.test(pathname) ? "en" : "es";

/** Texto según idioma: `t("Hola", "Hello")`. */
export const t = <T,>(es: T, en: T): T => (locale === "en" ? en : es);

/** Slug de la página actual, sin prefijo de idioma ni barras ("" en la home). */
export const currentSlug = pathname.replace(/^\/en(\/|$)/, "/").replace(/^\/+|\/+$/g, "");

const XONE = "https://xone.es";

/* Páginas ya construidas en esta web; el resto enlaza a xone.es hasta que llegue su lote. */
const built = new Set<string>(["", ...BUILT_SLUGS]);
export const isBuilt = (slug: string) => built.has(slug.split("#")[0].replace(/\/+$/, ""));

/** Enlace interno a una página por slug (con ancla opcional), en el idioma actual o en el indicado. */
export function link(slug: string, lang: Locale = locale): string {
  const [base, hash] = slug.split("#");
  const clean = base.replace(/^\/+|\/+$/g, "");
  const path = clean ? `/${clean}/` : "/";
  const prefixed = lang === "en" ? `/en${path === "/" ? "/" : path}` : path;
  const suffix = hash ? `#${hash}` : "";
  return isBuilt(clean) ? prefixed + suffix : `${XONE}${prefixed}${suffix}`;
}

/** La misma página en el otro idioma (para el selector ES/EN y los hreflang). */
export const alternate = (lang: Locale) => link(currentSlug, lang);
