import type { IconName } from "../../components/ui/Icon";
import type { SceneName } from "../../components/fx/Scenes";

/** Enlace de contenido: `slug` para páginas del sitio (se resuelve por idioma), `href` para externos. */
export type PageLink = { label: string; slug?: string; href?: string };

/**
 * Cabecera de un bloque con índice. Regla del sistema: el índice (barra «01 / 05 » …»), el eyebrow (píldora)
 * y el título no repiten palabras entre sí.
 */
type Head = { index: string; eyebrow: string; title: string; accent?: string; subtitle?: string; /** ancla (#id) para enlazar a esta sección */ anchor?: string };

export type Block =
  /** Declaración de apertura a dos columnas: frase grande a la izquierda, texto y enlace a la derecha. */
  | { type: "intro"; lead: string; accent?: string; text?: string[]; link?: PageLink; /** escena animada que explica el concepto (bajo el texto) */ visual?: SceneName }
  /** Rejilla de celdas al estilo «etiqueta + Frase destacada. texto» (2 o 3 columnas). */
  | (Head & { type: "cells"; cols?: 2 | 3 | 4; items: { label: string; icon?: IconName; lead?: string; text: string; more?: string[]; link?: PageLink; /** escena animada al pie de la celda (úsala en todas las celdas del bloque) */ visual?: SceneName }[] })
  /** Filas largas: título a la izquierda, párrafos a la derecha. */
  | (Head & { type: "rows"; items: { title: string; text: string[]; note?: string; list?: string[]; link?: PageLink; /** escena animada bajo el título */ visual?: SceneName; /** imagen (sello, distintivo) bajo el título */ image?: { src: string; alt: string } }[] })
  /** Lista corta en celdas con marca (capacidades, principios…). `numbered` numera en vez de marcar (pasos). */
  | (Head & { type: "chips"; cols?: 2 | 3 | 4; text?: string; numbered?: boolean; items: string[] })
  /** Ficha del proyecto: datos clave en una banda de celdas, sin índice (casos de éxito). */
  | { type: "facts"; items: { label: string; value: string }[] }
  /** Muro de logotipos (en gris salvo `color`, p. ej. logos de financiación que deben verse tal cual). */
  | (Head & { type: "logos"; cols?: 3 | 4 | 6; color?: boolean; items: { name: string; src: string }[] })
  /** Opiniones de clientes completas. */
  | (Head & { type: "testimonials"; items: { headline: string; quote: string; author?: string; company: string }[] })
  /** Documento largo en markdown mínimo (src/content/docs), con índice lateral. */
  | { type: "doc"; md: string; note?: string }
  /** Canales de contacto + formulario que prepara un correo. */
  | { type: "contact" }
  /** Listado de noticias con filtro por año. */
  | (Head & { type: "news" })
  /** Cuerpo de una noticia (src/content/news). */
  | { type: "article"; slug: string }
  /** Cita destacada sobre la banda de señal. */
  | { type: "quote"; text: string; source?: string }
  /** Demo animada «la IA en cada paso» (la de la home), con los pasos dados. */
  | (Head & { type: "showcase"; steps: { title: string; text: string }[] })
  /** Diagrama de la marketectura: 4 cuadrantes alrededor del núcleo, flanqueados por soluciones y sectores. */
  | (Head & { type: "diagram"; center: string; quadrants: { title: string; items: string[] }[]; left: { title: string; items: string[] }; right: { title: string; items: string[] } });

export type PageDoc = {
  /** Índice del grupo del menú al que pertenece (para miga de pan y «sigue explorando»). */
  group: number;
  seo: { title: string; description: string };
  hero: { title: string; accent?: string; lead: string; labels?: [string, string, string, string]; secondary?: PageLink; /** `false` quita el botón de contacto (p. ej. en la propia página de contacto) */ primary?: false };
  /** `false` quita el CTA final. */
  cta?: false;
  /** Página madre en la miga de pan (p. ej. «Casos de éxito» en cada caso). */
  crumb?: PageLink;
  /** «Sigue explorando» propio; por defecto, las hermanas del grupo del menú. */
  related?: { label: string; desc: string; slug: string; icon?: IconName }[];
  /** Titular propio para ese bloque. */
  relatedTitle?: { title: string; accent: string };
  blocks: Block[];
};

export type Page = { es: PageDoc; en: PageDoc };
