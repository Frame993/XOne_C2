# xone-web

Web de XOne con el mensaje **ASDD (Agent Self-Driven Development Platform)**: React 19 + TypeScript + Tailwind v4 + Vite. Bilingüe (ES en `/slug/`, EN en `/en/slug/`), solo tema oscuro, con su propio design system.

```bash
npm install
npm run dev          # http://localhost:5173  (Home en /, styleguide en /styleguide.html)
npm run build        # tokens + comprobación de tipos + build (debe terminar sin errores)
npm run tokens       # regenera los tokens desde scripts/build-tokens.mjs
```

## Por dónde empezar

| Si vas a… | Lee |
|---|---|
| Crear o cambiar una página, una sección de la Home o una escena animada | [docs/GUIA-DESARROLLO.md](docs/GUIA-DESARROLLO.md) |
| Hacer una pieza de marketing (presentación, post, email, banner, folleto) o escribir textos | [docs/GUIA-MARCA.md](docs/GUIA-MARCA.md) |
| Consultar colores, tipografía, rejilla, componentes y reglas visuales | [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) y el styleguide (`/styleguide.html`) |
| Saber de dónde sale cada texto y qué está pendiente del cliente | [CONTENT_MAP.md](CONTENT_MAP.md) |
| Ver qué páginas existen y cuáles faltan | [PAGES.md](PAGES.md) |
| Entender el mensaje de marca (fuente original del cliente) | [docs/vision-asdd.md](docs/vision-asdd.md) y las fichas de [docs/casos-de-uso/](docs/casos-de-uso/) |
| Saber por qué las ilustraciones son como son | [docs/estudio-firecrawl.md](docs/estudio-firecrawl.md) |
| Trabajar con un agente de IA (Claude Code) | [CLAUDE.md](CLAUDE.md) y la skill `.claude/skills/xone-voz/` |

## Tres reglas que no se negocian

1. **No se inventa contenido.** Todo texto sale del documento de visión, de las fichas de casos de uso o de xone.es. Si falta, se marca `[PENDIENTE]` en `CONTENT_MAP.md` y se pregunta al cliente.
2. **El estilo no se cambia por página.** Colores, tipografía, radios y rejilla salen de los tokens y componentes; nada de valores sueltos.
3. **ES y EN dicen lo mismo.** Cada página tiene las dos versiones con la misma estructura; el inglés es traducción, no otro mensaje.

## Estructura

| Qué | Dónde |
|---|---|
| Rutas (Home, páginas, noticias, 404) | `src/index.tsx`, `src/i18n.ts` |
| Home | `src/pages/Home.tsx` (contenido en `src/content/site.es.ts` / `site.en.ts` → `home`) |
| Plantilla de páginas | `src/pages/ContentPage.tsx` + `src/pages/blocks/` |
| Contenido de páginas | `src/content/pages/*.ts` (registro en `index.ts` y `slugs.ts`) |
| Casos de uso (catálogo) | `src/content/usos.ts` · PDF en `public/casos-de-uso/` |
| Noticias | `src/content/news/` (`meta.ts` + markdown `es/` y `en/`) |
| Menú, pie, contacto, textos globales | `src/content/site.es.ts` y `site.en.ts` |
| Componentes base | `src/components/ui/` |
| Rejilla, animaciones y escenas | `src/components/fx/` |
| Tokens | `scripts/build-tokens.mjs` → `tokens/tokens.json`, `src/styles/tokens.css` · Tailwind: `src/styles/theme.css` |
| Logo | `public/brand/` |
| Auditoría con Playwright | `scripts/audit.mjs` (ver la guía de desarrollo) |

## Despliegue

Sitio estático (`dist/`). `public/_redirects` envía todas las rutas a `index.html`, que resuelve la página en el navegador. Los enlaces a páginas que aún no existen aquí apuntan a xone.es (ver `BUILT_SLUGS` en `src/content/pages/slugs.ts`).
