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
  | (Head & { type: "rows"; items: { title: string; text: string[]; note?: string; list?: string[]; link?: PageLink; /** escena animada bajo el título */ visual?: SceneName }[] })
  /** Lista corta en celdas con marca (capacidades, principios…). */
  | (Head & { type: "chips"; cols?: 2 | 3 | 4; text?: string; items: string[] })
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
  hero: { title: string; accent?: string; lead: string; labels?: [string, string, string, string]; secondary?: PageLink };
  blocks: Block[];
};

export type Page = { es: PageDoc; en: PageDoc };
