// Contenido del sitio en el idioma de la página (español en la raíz, inglés bajo /en/).
// Los textos viven en site.es.ts y site.en.ts, con la misma forma.
import { locale } from "../i18n";
import * as es from "./site.es";
import * as en from "./site.en";

const C: typeof es = locale === "en" ? en : es;

export const { announcement, groups, nav, hero, clients, cases, testimonials, recognitions, contact, footer, home } = C;
