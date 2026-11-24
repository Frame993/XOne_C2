# xone-web

Nueva web de XOne: design system + styleguide + homepage de prueba (React 19 + TypeScript + Tailwind v4 + Vite).

```bash
npm install
npm run dev          # homepage en /, styleguide en /styleguide.html
npm run tokens       # regenera tokens desde scripts/build-tokens.mjs
npm run build
```

| Entregable | Ruta |
|---|---|
| Tokens W3C (primitive → semantic → component) | `tokens/tokens.json` |
| Variables CSS claro/oscuro | `src/styles/tokens.css` (generado) |
| Tailwind v4 `@theme` | `src/styles/theme.css` |
| Componentes base | `src/components/ui/` |
| Documentación | `DESIGN_SYSTEM.md` |
| Styleguide | `styleguide.html` → `src/pages/Styleguide.tsx` |
| Homepage | `index.html` → `src/pages/Home.tsx`, contenido en `src/content/xone.ts` |
| Mapa de contenido, [PENDIENTE], reescrituras | `CONTENT_MAP.md` |
| Informe WCAG | `tokens/contrast-report.md` |
| Capturas de referencia | `docs/reference/` (las del resultado, en `docs/screenshots/`, no se versionan) |
| Logo | `public/brand/` |
