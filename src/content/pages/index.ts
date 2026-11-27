import type { Page } from "./types";
import { plataforma } from "./plataforma";
import { productos } from "./productos";
import { soluciones } from "./soluciones";
import { casos } from "./casos";
import { empresa } from "./empresa";
import { recursos } from "./recursos";
import { asdd } from "./asdd";
import { usosA } from "./usos-a";
import { usosB } from "./usos-b";
import { usosC } from "./usos-c";
import { BUILT_SLUGS, SPECIAL_SLUGS } from "./slugs";
import { BUILT_NEWS } from "../news/meta";

/** Todas las páginas de contenido por slug (se amplía en cada lote). */
export const PAGES: Record<string, Page> = { ...plataforma, ...productos, ...soluciones, ...casos, ...empresa, ...recursos, ...asdd, ...usosA, ...usosB, ...usosC };

// cada slug construido debe tener su página y viceversa
if (import.meta.env.DEV) {
  const keys = Object.keys(PAGES);
  const missing = BUILT_SLUGS.filter((s) => !keys.includes(s) && !BUILT_NEWS.includes(s) && !SPECIAL_SLUGS.includes(s));
  const extra = keys.filter((s) => !BUILT_SLUGS.includes(s));
  if (missing.length || extra.length) console.warn("[páginas] slugs.ts y PAGES no coinciden", { missing, extra });
}
