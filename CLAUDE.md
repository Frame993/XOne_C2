# CLAUDE.md

Web de XOne (mensaje ASDD) · React 19 + TS + Tailwind v4 + Vite · ES/EN · solo tema oscuro.

## Antes de tocar nada
- Visión general y mapa de documentación: `README.md`.
- Cómo se hacen páginas, secciones y escenas: `docs/GUIA-DESARROLLO.md`.
- Textos y mensaje: carga la skill `xone-voz` (`.claude/skills/xone-voz/`) y `docs/GUIA-MARCA.md`.
- Tokens, componentes y reglas visuales: `DESIGN_SYSTEM.md`.

## Reglas
1. **No inventar contenido.** Solo texto de `docs/vision-asdd.md`, `docs/casos-de-uso/` o xone.es. Lo que falte se anota como `[PENDIENTE]` en `CONTENT_MAP.md` y se pregunta.
2. **No cambiar el estilo** (tokens, colores, tipografía, rejilla) salvo que el usuario lo pida. Usa solo utilidades de tokens y roles `type-*`; nada de hex ni `text-lg`/`font-bold`.
3. **ES y EN con la misma estructura**; el EN es traducción.
4. **Página nueva** = contenido en `src/content/pages/*.ts` + slug en `slugs.ts` (si no, `link()` manda a xone.es) + grupo en `site.es.ts`/`site.en.ts` si va en el menú.
5. **Ilustraciones nuevas** siguen `AsddScenes.tsx`: una escena demuestra una frase, radios 12/8, un acento, a sangre, secuencia y reposo.
6. Iconos en caja → `IconTile`. Logos de clientes en gris, sin recuperar el color al pasar el ratón.

## Verificar
- `npm run build` sin errores.
- Capturas con Playwright a 1440 y 390 px de lo que cambies.
- `node scripts/audit.mjs http://localhost:<puerto>` → «0 problemas».

No hagas commit ni push sin que el usuario lo pida.
