# XONE Design System v1

Sistema de diseño de la nueva web de XOne. Estructura, espaciado y jerarquía tomados de **firecrawl.dev** (valores medidos con `getComputedStyle`, ver §8); identidad, color y tipografía propios de XOne.

- Fuente de verdad: `scripts/build-tokens.mjs` → genera `tokens/tokens.json`, `src/styles/tokens.css` y `tokens/contrast-report.md` (`npm run tokens`).
- Tailwind v4: `src/styles/theme.css` (`@theme inline`). La paleta, radios, sombras y fuentes por defecto de Tailwind están **desactivadas**: sólo existen utilidades de tokens.
- Componentes: `src/components/ui/`. Styleguide: `/styleguide.html`. Homepage: `/`.

## 1. Principios

1. **Rejilla visible, contenido en celdas.** Contenedor de 1112px con raíles verticales y celdas separadas por líneas de 1px (`.xo-rails`, `.xo-cells`). Es el ritmo de la referencia.
2. **Técnico, no frío.** Etiquetas en mono (`[ 01 / 07 ] » PLATAFORMA`), datos concretos, frases cortas. El color cálido de la referencia se sustituye por el cian del logo.
3. **Un único acento.** El cian `#00AED9` es la única nota de color en titulares y CTA principal; el petróleo `#155D82` es el color de marca secundario (wordmark, banner, enlaces).
4. **Ángulos del logo.** Radios contenidos (6px botones, 12px tarjetas), iconos con trazo recto y uniones en inglete, chevrones `»` y la X del logo como separadores.
5. **Accesible por defecto.** Todos los pares de texto de los tokens cumplen WCAG AA en claro y oscuro; foco visible con `focus.ring`; `prefers-reduced-motion` anula animaciones.

## 2. Tokens — 3 capas

`primitive` (valores crudos) → `semantic` (intención, con modo oscuro en `$extensions["es.xone.modes"].dark`) → `component` (decisiones por componente, referencian sólo semánticos o primitivos de escala). En CSS todos llevan prefijo `--xo-`.

### 2.1 Color — primitivos

| Escala | Ancla | Origen |
|---|---|---|
| `cyan 50–950` | **500 = #00AED9** | Chevrón principal del logo (SVG) |
| `petrol 50–950` | **700 = #155D82** | Wordmark y chevrones secundarios del logo (SVG) |
| `neutral 0–975` | **900 = #18293E** | Color de texto de xone.es actual (continuidad); tono frío h≈252 |
| `green / amber / red 50–950` | 500 / 400 / 500 | Estados (decisión propia) |

Escalas generadas en OKLCH con luminosidad objetivo por paso y el color de marca fijado exacto en su ancla.

### 2.2 Color — semánticos

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `bg.base` | neutral.25 | neutral.975 | Fondo de página (fc: #F9F9F9) |
| `bg.subtle` | neutral.50 | neutral.950 | Paneles secundarios |
| `surface.default / raised` | neutral.0 | neutral.950 / 900 | Tarjetas, inputs |
| `surface.sunken` | neutral.50 | neutral.975 | Cabeceras de code block, disabled |
| `text.primary` | neutral.900 | neutral.50 | Texto principal (14.2:1) |
| `text.secondary` | neutral.700 | neutral.200 | Subtítulos (fc: 72 % alfa) |
| `text.muted` | neutral.600 | neutral.400 | Texto de apoyo, labels mono (6.0:1) |
| `text.decorative` | neutral.300 | neutral.700 | **Sólo no-texto**: puntos, separadores ornamentales |
| `text.accent` | cyan.700 | cyan.400 | Acento en texto normal (5.6:1) |
| `text.accent-display` | cyan.600 | cyan.400 | Palabra destacada en titulares ≥24px (3.7:1, texto grande) |
| `text.link` | petrol.700 | cyan.300 | Enlaces |
| `border.faint / muted / loud` | neutral.100/150/200 | neutral.900/800/700 | Líneas de rejilla, bordes, inputs |
| `accent.default / hover / active` | cyan.500/400/600 | igual | CTA principal |
| `accent.fg` | neutral.950 | neutral.950 | Texto oscuro sobre cian 500 (6.9:1), para chips/indicadores |
| `accent.solid / -hover / -active` | cyan.650 `#007E9E` / 700 / 800 | igual | **Fondo del botón primario con texto blanco** |
| `accent.solid-fg` | blanco | blanco | Texto del botón primario (4.69:1 ✅ AA) |
| `fx.cell / fx.glyph / fx.matrix` | petrol.700 / cyan.500 / petrol.300 | cyan.300 / cyan.400 / petrol.700 | Rejilla animada, glifos, arte de caracteres |
| `accent.subtle / subtle-fg / border` | cyan.50/800/200 | cyan.950/200/800 | Badges, tarjeta highlight, iconos |
| `brand.secondary / -hover / -fg` | petrol.700/800, blanco | petrol.400/300, neutral.950 | Botón secundario, banner |
| `brand.wordmark / symbol` | petrol.700 / cyan.500 | blanco / cyan.500 | Logo |
| `overlay.hover / press` | neutral.100/150 | neutral.900/800 | Botón ghost, hovers |
| `focus.ring` | cyan.600 | cyan.400 | Outline de foco (3.7:1 ≥ 3) |
| `success/warning/danger.fg/bg` | 700/800/700 sobre 50 | 300 sobre 950 | Estados |
| `code.*` | — | — | Code block (fg, keyword, string, comment, line-number) |

Informe completo: `tokens/contrast-report.md` (33 pares, todos ✅).

### 2.3 Tipografía

| | Valor | Motivo |
|---|---|---|
| Sans | **Plus Jakarta Sans** (variable 400–700) | Ya la usa xone.es (continuidad); geométrica, encaja con el "ONE" del logo |
| Mono | **Geist Mono** 400/500 | Sustituye a Space Mono de xone.es; misma función que GeistMono en la referencia |
| Escala | 10/12 · 12/16 · 13/20 · 14/20 · 16/24 · 20/28 · 24/32 · 32/38 · 40/44 · 52/56 | Medida en firecrawl.dev (32/38 añadido) |
| Pesos | 400 regular · 450 book (UI) · 500 · 600 titulares/botones · 700 | fc usa 500 en titulares; subimos a 600 para acercarnos al 800 de xone.es sin perder sobriedad |
| Tracking | titulares −0.02em · cuerpo 0 · mono caps +0.08em | fc: −0.01em |

Alternativas valoradas: Geist (más cercana a la referencia, pierde continuidad) e Inter (neutra, sin carácter). Elegida Plus Jakarta Sans. Fuentes autoalojadas con `@fontsource` (sin dependencias de Google en runtime).

### 2.4 Espacio, layout, radios, sombras, motion

- **Espaciado** (px): 0 2 4 6 8 10 12 16 20 24 28 32 40 48 64 96 → `space.*`. En Tailwind, la escala por defecto de 4px coincide (`p-7` = 28px).
- **Layout**: contenedor `min(100% − 32px, 1112px)`, nav 64px, prosa máx. 552px. Breakpoints: 390 / 576 / 768 / 996 / 1200 (los de la referencia).
- **Radios**: xs 4 · sm 6 (botón) · md 8 (input) · lg 12 (card, code) · xl 16 · pill 999 (badge, tabs). La referencia usa 8/10/16; los bajamos un paso por el carácter anguloso del logo.
- **Sombras**: `xs`, `card`, `float`, `accent` (botón primario, con brillo interior), `inset`. Estructura multicapa copiada de la referencia, teñida con #18293E / cian.
- **Motion**: instant 50ms (nav) · fast 100ms (scale) · base 200ms (color) · slow 400ms · slower 500ms (entrada). Easing `standard` = ease; `out` = cubic-bezier(.22,1,.36,1) para entradas.

## 2.5 Motion y rejillas (FX)

Medido en firecrawl.dev: canvas de celdas en el hero, arte ASCII con `illuminate` (7s), anillos con `spin` 32s, indicadores con resorte `linear()` de 750ms, barras que crecen (`scaleY`/`scaleX`), texto "scramble", marquee de logos en celdas con subrayado de acento, filas separadoras de rejilla con cruces, y fade-in-up al hacer scroll. Versión XONE (`src/components/fx/`):

| Pieza | Qué hace | Tokens |
|---|---|---|
| `GridCanvas` | Rejilla de celdas de 100px (radio 8, 1px de separación) **contenida**: contenedor + 1 columna por lado (13 × 101 = 1314px, como la referencia), sólo filas completas (el hero ajusta su altura a múltiplos de 101px) y bloque central fusionado donde va el contenido. Sólo ≥996px. Celdas laterales que se iluminan y glifos abstractos | `fx.cell`, `fx.glyph`, `border.*` |
| `DotMatrix` | Arte de caracteres animado y abstracto: `blob` (masa orgánica que respira junto a titulares), `field` (onda tenue), `fountain` (puntos que burbujean en la CTA). 12–16 fps, se pausa fuera de pantalla | `fx.matrix`, `fx.glyph` |
| — | **No usar la X del logo animada**: el motion es siempre abstracto; el logo sólo aparece estático | |
| `Spark` | Estrella de 4 puntas en anillo en intersecciones de la rejilla | `fx.glyph`, `duration.ambient` |
| `GridSpacer` + `Cross` | Fila vacía de rejilla entre secciones con cruces en las intersecciones | `border.faint/loud` |
| `Reveal` | Fade-in-up al entrar en pantalla, escalonado 80ms por celda | `duration.slower`, `easing.out` |
| `CountUp` | Cifras que cuentan al aparecer (70 %, +20…) | — |
| `Scramble` | Etiquetas mono que rotan con efecto scramble | — |
| `Marquee` | Logos y testimonios en celdas, pausa al hover | — |
| `AutoSteps` | Pasos con barra de progreso que avanza sola (pausa con hover/foco) | `easing.standard` |
| `HeroConsole` | Tarjeta del hero: escribe "Movilizamos <sector>", selector de plataformas y botón a contacto. Sin imágenes de producto | `shadow.float` |
| Ilustraciones | `PlatformsIllo`, `SecurityIllo`, `OfflineIllo`, `IntegrationIllo`: mini-UIs animadas dentro de las celdas | tokens semánticos |
| Tabs | Indicador que se desliza con resorte | `easing.spring`, `duration.spring` |
| Button primario | Sombra interior + halo que crece en hover, flecha que avanza | `shadow.accent(-hover)` |

Todo respeta `prefers-reduced-motion` (dibujo estático, sin rotación ni auto-avance).

## 3. Logo

- Archivos: `public/brand/xone-logo.svg` (claro), `xone-logo-on-dark.svg`, `xone-logo-mono-white.svg`, `xone-symbol.svg` (sólo la X; también favicon). Componente `<Logo />` cambia el wordmark con el tema.
- **Tamaño mínimo**: 96px de ancho (24px de alto). Por debajo, usar el símbolo (mín. 16px).
- **Área de seguridad**: ½ de la altura del logo por cada lado.
- Sobre claro: cian + petróleo. Sobre oscuro: cian + blanco. Monocromo blanco sólo sobre foto o color de marca.
- Carácter: geométrico y técnico — chevrones de corte recto que forman la X, wordmark de trazo fino redondeado. De ahí los radios contenidos y los iconos en inglete.

## 4. Componentes

| Componente | Variantes | Estados | Tokens |
|---|---|---|---|
| `Button` | primary · secondary · ghost · outline · link; sm 32 / md 40 / lg 48 | hover, active (scale .98), focus-visible, disabled, loading | `button.*` |
| `Badge` | neutral · brand · success · warning · danger · mono `[ … ]` | — (dot opcional) | `badge.*` |
| `Card` | default · raised · interactive · highlight · flat | hover/focus-within (interactive) | `card.*` |
| `Input` | con icono, label, hint | hover, focus (borde + halo), error (`aria-invalid`), disabled | `input.*` |
| `Tabs` | pill · underline | seleccionado, hover, foco; teclado ←/→/Home/End | `tabs.*` |
| `CodeBlock` | título, `[ .lang ]`, números de línea | copiar → "Copiado", foco en `<pre>` | `codeblock.*`, `code.*` |
| `Navbar` | enlaces, CTA, secundario, toggle de tema | menú móvil (<996px), Esc cierra | `navbar.*` |
| `Footer` | tagline, 4 columnas, aside, legal | hover enlaces | `footer.*` |
| extra: `SectionIndex`, `Eyebrow`, `SectionHeading`, `Section`, `Icon`, `Logo`, `ThemeToggle` | | | |

**Anatomía de sección** (patrón de la referencia): `SectionIndex` (fila mono 56px) → cabecera centrada (eyebrow + h2 con palabra de acento + subtítulo) con 64–96px de aire → rejilla `.xo-cells` de 2–5 columnas.

## 5. Do / Don't

| ✅ Do | ❌ Don't |
|---|---|
| Usar utilidades de tokens (`bg-surface`, `text-fg-muted`, `bg-(--xo-button-primary-bg)`) | Valores hex o px sueltos en componentes |
| Una sola palabra de acento por titular (`accent`) | Colorear frases enteras o mezclar cian y petróleo en un titular |
| `text.accent-display` sólo en ≥24px; `text.accent` en texto normal | Cian 500 como color de texto (2.4:1) |
| Botón primario: texto blanco sobre `accent.solid` (#007E9E, 4.69:1) | Texto blanco sobre cian 500 #00AED9 (2.6:1, como hoy en xone.es) |
| `text.decorative` para ornamentos sin texto | Usarlo para texto legible |
| Arranque en negrita + resto en `muted` (`CardLead`) | Títulos y cuerpo en tarjetas separados por defecto |
| `data-theme` en `<html>` o en un subárbol | Duplicar componentes para modo oscuro |

## 6. Uso

```bash
npm install
npm run dev        # http://localhost:5173  ·  /styleguide.html
npm run tokens     # regenera tokens.json / tokens.css / contrast-report.md
npm run build
```

## 7. Valores estimados o decididos por nosotros

- Escalas 50–950 (algoritmo OKLCH propio); colores de estado (verde/ámbar/rojo).
- Tipografía principal (decisión entre 3 candidatas), peso 600 en titulares, escala 32/38.
- Radios reducidos un paso respecto a la referencia; tinte de sombras.
- Modo oscuro completo: la home de la referencia es sólo clara; el oscuro se basa en sus variables `.dark` y en docs.firecrawl.dev.
- Altura de botones 32/40/48 (fc: 32/36) y de inputs 44px.
- Duración del marquee de logos (60s) y easing `out`.

## 8. Referencia medida en firecrawl.dev (24-nov-2026)

- Fondo `#F9F9F9` (display-p3 .976), superficie `#FFF`, texto `#262626`, secundario 72 % alfa, muted 64 %, bordes `#EDEDED / #E8E8E8 / #E6E6E6`, acento "heat" `#FA5D19`.
- Fuentes: Suisse (400/450/500/600/700), GeistMono, Roboto Mono. h1/h2 52/56 500 −0.52px; h3 40/44; card 20/28 −0.1px; cuerpo 16/24; UI 14/20 450; mono 12/16.
- Gaps más usados 16/8/10/12/4; paddings 20/28/64/24/32; contenedor `min(100% − 32px, 1112px)`.
- Radios 999 (207 usos), 8, 10, 6, 16, 20. Sombra de tarjeta y botón multicapa (ver `shadow.card`, `shadow.accent`).
- Transiciones 0.2s ease (240 usos), 0.15s, 0.4s; botón: `0.2s, scale 0.1s, box-shadow 0.1s`.
- Breakpoints 390 / 576 / 768 / 996 / 1200; `prefers-reduced-motion` respetado.
- Capturas: `docs/reference/`.
