import type { Page } from "./types";
import { plataforma } from "./plataforma";
import { productos } from "./productos";
import { BUILT_SLUGS } from "./slugs";

/** Todas las páginas de contenido por slug (se amplía en cada lote). */
export const PAGES: Record<string, Page> = { ...plataforma, ...productos };

// cada slug construido debe tener su página y viceversa
if (import.meta.env.DEV) {
  const keys = Object.keys(PAGES);
  const missing = BUILT_SLUGS.filter((s) => !keys.includes(s));
  const extra = keys.filter((s) => !BUILT_SLUGS.includes(s));
  if (missing.length || extra.length) console.warn("[páginas] slugs.ts y PAGES no coinciden", { missing, extra });
}
