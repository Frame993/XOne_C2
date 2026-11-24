# XONE Design System v1

Sistema de diseño de la nueva web de XOne. Estructura, espaciado y jerarquía tomados de **firecrawl.dev** (valores medidos con `getComputedStyle`, ver §8); identidad, color y tipografía propios de XOne.

- Fuente de verdad: `scripts/build-tokens.mjs` → genera `tokens/tokens.json`, `src/styles/tokens.css` y `tokens/contrast-report.md` (`npm run tokens`).
- Tailwind v4: `src/styles/theme.css` (`@theme inline`). La paleta, radios, sombras y fuentes por defecto de Tailwind están **desactivadas**: sólo existen utilidades de tokens.
- Componentes: `src/components/ui/`. Styleguide: `/styleguide.html`. Homepage: `/`.

## 1. Principios

1. **Rejilla visible, contenido en celdas.** Contenedor de 1112px con raíles verticales y celdas separadas por líneas de 1px (`.xo-rails`, `.xo-cells`). Es el ritmo de la referencia.
2. **Técnico, no frío.** Etiquetas en mono (`[ 01 / 07 ] » PLATAFORMA`), datos concretos, frases cortas. El color cálido de la referencia se sustituye por el cian del logo.
3. **Un único acento sobre grises puros.** El cian `#00AED9` es la única nota de color (titulares, CTA, enlaces, glifos, SignalBand). El petróleo `#155D82` queda sólo en el wordmark del logo.
4. **Ángulos del logo.** Radios contenidos (6px botones, 12px tarjetas), iconos con trazo recto y uniones en inglete, chevrones `»` y la X del logo como separadores.
5. **Accesible por defecto.** Todos los pares de texto de los tokens cumplen WCAG AA en claro y oscuro; foco visible con `focus.ring`; `prefers-reduced-motion` anula animaciones.

## 2. Tokens — 3 capas

`primitive` (valores crudos) → `semantic` (intención, con modo oscuro en `$extensions["es.xone.modes"].dark`) → `component` (decisiones por componente, referencian sólo semánticos o primitivos de escala). En CSS todos llevan prefijo `--xo-`.

### 2.1 Color — primitivos

| Escala | Ancla | Origen |
|---|---|---|
| `cyan 50–950` | **500 = #00AED9** | Chevrón principal del logo (SVG) |
| `petrol 50–950` | **700 = #155D82** | Wordmark y chevrones secundarios del logo (SVG) |
| `neutral 0–975` | **900 = #262626** | **v2:** grises puros (croma 0) como la referencia; el cian es la única nota de color |
| `cyan-alpha / ink-alpha / white-alpha` | 4…72 % | Tintes, halos y bordes sobre cualquier superficie |
| `green / amber / red 50–950` | 500 / 400 / 500 | Estados (decisión propia) |

Escalas generadas en OKLCH con luminosidad objetivo por paso y el color de marca fijado exacto en su ancla. En pantallas P3 el cian 300–700 gana +25 % de croma (misma luminosidad → mismo contraste). Auditoría y motivos del cambio: `docs/PALETTE_AUDIT.md`.

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

**Familias.** Plus Jakarta Sans (variable 400–600, continuidad con xone.es; geométrica como el wordmark) para todo el texto · Geist Mono sólo para etiquetas técnicas, índices y código. Autoalojadas con `@fontsource`. Para piezas fuera de la web: Google Fonts, mismas familias.

**Pesos (sólo 3).** 400 lectura · 500 interfaz (botones, navegación, pestañas, badges, enlaces) · 600 titulares y énfasis. Nunca 700/800, nunca cursiva salvo citas.

**Roles.** Fuente única de verdad: `scripts/build-tokens.mjs` → `tokens.json › typography`, `tokens/type-roles.json`, variables `--xo-type-*` y utilidades Tailwind `type-*`. **No usar tamaños/pesos sueltos** (`text-lg`, `font-bold`…).

| Rol | Utilidad | Tamaño / interlineado | Peso | Tracking | Uso |
|---|---|---|---|---|---|
| hero | `type-hero` | 64 / 68 | 600 | −0.02em | Sólo portadas; 1 por pieza |
| title | `type-title` | 52 / 56 | 600 | −0.02em | H1/H2 de sección (desktop) |
| title-md | `type-title-md` | 40 / 44 | 600 | −0.02em | H1/H2 tablet, titular de CTA, cifras grandes |
| title-sm | `type-title-sm` | 32 / 38 | 600 | −0.02em | H1/H2 móvil |
| heading | `type-heading` | 24 / 32 | 600 | −0.01em | H3 de bloque o tarjeta grande |
| item | `type-item` | 16 / 24 | 600 | 0 | Título de celda, paso, producto, pregunta |
| lead | `type-lead` | 20 / 28 | 400 | −0.01em | Subtítulos y párrafos destacados (`CardLead`: arranque en 600) |
| body | `type-body` | 16 / 24 | 400 | 0 | Texto corrido |
| body-sm | `type-body-sm` | 14 / 20 | 400 | 0 | Texto secundario, descripciones, pie |
| label | `type-label` | 14 / 20 | 500 | 0 | Botones, nav, pestañas, enlaces de acción |
| label-sm | `type-label-sm` | 12 / 16 | 500 | 0 | Badges, chips, metadatos |
| overline | `type-overline` | 12 / 16 mono | 400 | +0.08em · MAYÚS. | Eyebrows, índices, etiquetas técnicas (con viñeta píxel) |
| micro | `type-micro` | 10 / 12 mono | 400 | +0.08em · MAYÚS. | Sólo dentro de ilustraciones (nunca texto esencial) |
| code | `type-code` | 14 / 22 mono | 400 | 0 | Código y valores técnicos |

**Índice, eyebrow y titular nunca repiten palabras.** Cada uno tiene un trabajo distinto:
- **Índice** (`SectionIndex`): categoría de navegación, 1–2 palabras (Ventajas, Productos, Clientes, Servicios, FAQ).
- **Eyebrow**: el ángulo o promesa de la sección (Módulos de la plataforma, Casos de éxito, Acompañamiento experto, Antes de empezar).
- **Titular**: el mensaje. Si el eyebrow ya dice "Casos de éxito", el titular no vuelve a decirlo.

| Sección | Índice | Eyebrow | Titular |
|---|---|---|---|
| 01 | Ventajas | Por qué XOne | Una plataforma, experiencias ilimitadas |
| 02 | Cómo funciona | XOne + IA | La IA, en cada paso de tus proyectos |
| 03 | Productos | Módulos de la plataforma | Todo lo que necesitas para movilizar tu negocio |
| 04 | Clientes | Casos de éxito | Movilidad real en sectores exigentes |
| 05 | Comunidad | Testimonios | Lo que dicen nuestros clientes |
| 06 | Servicios | Acompañamiento experto | De la implantación simple a la solución a medida |
| CTA | — | Contacto | ¿Hablamos de tu proyecto? |
| 07 | FAQ | Antes de empezar | Preguntas frecuentes |

**Titulares responsive:** `type-title-sm md:type-title-md lg:type-title` (32 → 40 → 52). Subtítulo: `type-body md:type-lead`.

**Reglas de composición (web y piezas)**
1. Máximo 3 niveles por pieza: un titular, un texto, una etiqueta. El salto mínimo entre niveles es de 1,25×.
2. Una sola palabra o fragmento de acento por titular (`text.accent-display`), siempre en el mismo peso que el titular.
3. Longitud de línea: 45–75 caracteres en texto; titulares ≤ 3 líneas (`text-balance`).
4. Mono sólo en mayúsculas para etiquetas (overline/micro) o en código; nunca para párrafos ni titulares.
5. Tamaño mínimo legible: 14px en web (12px sólo etiquetas), 24px en social 1080, 9pt en impresión.
6. Contraste: texto sobre fondo según `tokens/contrast-report.md` (AA). Sobre la SignalBand, siempre blanco.

**Escalas para marketing** (`tokens.json › marketing`, mismo peso/tracking que los roles web)

| Formato | Hero | Title | Heading | Lead | Body | Overline | Margen |
|---|---|---|---|---|---|---|---|
| Social 1080×1080 / 1080×1350 | 96/100 | 64/68 | 40/48 | 32/42 | 26/36 | 20/24 | 80 |
| Slides 1920×1080 | 120/124 | 80/86 | 48/56 | 36/48 | 28/40 | 22/28 | 120 |
| Banner / ads | 48/52 | 32/36 | 24/30 | 18/24 | 14/20 | 11/14 | 24 |
| Email 600px | 40/44 | 32/38 | 22/28 | 18/26 | 16/24 | 12/16 | 32 |
| Impresión A4 (pt) | 48/52 | 32/36 | 18/22 | 13/18 | 10/14 | 7.5/10 | 54pt |

Plantilla mental de una pieza: overline mono con viñeta cian → titular (title/hero) con una palabra en cian → lead → CTA en `label`. Fondo neutro `#F9F9F9` o la SignalBand `#007E9E` con texto blanco; nunca texto blanco sobre `#00AED9`.

### 2.4 Espacio, layout, radios, sombras, motion

- **Espaciado** (px): 0 2 4 6 8 10 12 16 20 24 28 32 40 48 64 96 → `space.*`. En Tailwind, la escala por defecto de 4px coincide (`p-7` = 28px).
- **Layout**: contenedor `min(100% − 32px, 1112px)`, nav 64px, prosa máx. 552px. Breakpoints: 390 / 576 / 768 / 996 / 1200 (los de la referencia).
- **Radios**: xs 4 · sm 6 (botón) · md 8 (input) · lg 12 (card, code) · xl 16 · pill 999 (badge, tabs). La referencia usa 8/10/16; los bajamos un paso por el carácter anguloso del logo.
- **Sombras**: `xs`, `card`, `float`, `accent` (botón primario, con brillo interior), `inset`. Estructura multicapa copiada de la referencia, teñida con #18293E / cian.
- **Motion**: instant 50ms (nav) · fast 100ms (scale) · base 200ms (color) · slow 400ms · slower 500ms (entrada). Easing `standard` = ease; `out` = cubic-bezier(.22,1,.36,1) para entradas.

## 2.5 Sistema de rejilla de página

Estudiado en el DOM de firecrawl.dev (raíles fijos `border-x` del contenedor a toda la altura, divisores `w-screen` en cada frontera, nodos de unión de 21px en cada cruce, marco de 1314px en hero/CTA, celdas `curvy-rect` con esquinas cóncavas). Reglas XONE (`src/components/fx/GridLines.tsx`):

| Regla | Pieza |
|---|---|
| Los bordes del contenedor (1112px) son **raíles fijos** a toda la altura de la página | `PageRails` |
| **Toda frontera de sección** es una línea a todo el viewport, nunca sólo dentro del contenedor | `FullLine` |
| Donde una `FullLine` cruza un raíl, el marco o la división central de un `GridSpacer` hay un **nodo de unión** (cruz de 1px con esquinas cóncavas, color de línea) | `Connector` |
| Entre secciones (medido en la referencia): **fila vacía de un solo bloque** 92px móvil / 140px desktop + **fila índice** partida en 2 columnas (py 24/45px → 106px), con la barra de acento sobre el raíl izquierdo y media unión en la división central | `GridSpacer`, `SectionIndex` |
| Cabecera de sección: padding vertical 48 / 88 / 143px (móvil / tablet / desktop) | `Heading` |
| **Esquinas curvy**: todo bloque delimitado por líneas (filas, celdas, cabeceras, pie) lleva en sus 4 esquinas una cuña del color de línea con radio 6px; donde se tocan bloques, las cuñas forman la unión cóncava | `.xo-curvy`, `.xo-cells > *` |
| Las `FullLine` siempre cuelgan de un padre a **ancho completo** (nunca dentro del contenedor), para que los nodos caigan en los raíles | — |
| Hero y CTA son **secciones enmarcadas**: contenedor + 1 columna exterior por lado (13 × 101px = 1314px), etiquetas mono en las esquinas exteriores | `FrameSection` |
| Celdas **decorativas**: redondeadas (radio 8), columnas exteriores como una celda alta, zonas laterales con celdas de 1–2 filas (patrón irregular simétrico), bloque central fusionado, sólo filas completas | `GridCanvas` |
| Celdas **de contenido**: cuadradas, separadas por 1px | `.xo-cells` |
| Bloques de color (SignalBand) viven **dentro** del contenedor, entre raíles | — |

### Nodos: dónde sí y dónde no

| ✅ Sí | ❌ No |
|---|---|
| Cruce de `FullLine` con los raíles del contenedor | Sobre bloques de color (SignalBand, banner): las líneas que tocan un bloque usan `nodes={false}` |
| Cruce con el marco exterior de `FrameSection` (≥996px) | Dentro de celdas o encima de contenido |
| Cruce con la división central de un `GridSpacer` (≥768px) | Como decoración suelta (estrellas, destellos, cruces flotantes) |

### Lenguaje propio (para distanciarnos de la referencia)

- **Sin** estrellas/destellos, sin cruces cóncavas, sin etiquetas entre corchetes `[ … ]` ni barras `//`.
- La unidad gráfica de XONE es el **píxel cuadrado**: viñeta de etiquetas mono (4px cian: `▪ MXDP`), glifos de píxel en celdas, puntos de las animaciones. Los nodos de unión son la única pieza de "unión" de líneas.
- Etiquetas técnicas: mono en mayúsculas con viñeta píxel cian (`Badge variant="mono"`, etiquetas de esquina de `FrameSection`, lenguaje del `CodeBlock`).

## 2.6 Motion y rejillas (FX)

Medido en firecrawl.dev: canvas de celdas en el hero, arte ASCII con `illuminate` (7s), anillos con `spin` 32s, indicadores con resorte `linear()` de 750ms, barras que crecen (`scaleY`/`scaleX`), texto "scramble", marquee de logos en celdas con subrayado de acento, filas separadoras de rejilla con cruces, y fade-in-up al hacer scroll. Versión XONE (`src/components/fx/`):

| Pieza | Qué hace | Tokens |
|---|---|---|
| `GridCanvas` | Rejilla de celdas de 100px (radio 8, 1px de separación) **contenida**: contenedor + 1 columna por lado (13 × 101 = 1314px, como la referencia), sólo filas completas (el hero ajusta su altura a múltiplos de 101px) y bloque central fusionado donde va el contenido. Sólo ≥996px. Celdas laterales que se iluminan y glifos abstractos | `fx.cell`, `fx.glyph`, `border.*` |
| `DotMatrix` | Arte de caracteres animado y abstracto (` .·:-=+x*#`): `blob` (masa orgánica que respira junto a titulares y en FAQ), `field` (onda tenue; en la banda de señal en blanco y con máscara hacia el centro). 12–16 fps, se pausa fuera de pantalla. **Es el único recurso animado junto a titulares**: nada de glifos de píxel ni símbolos en las rejillas | `fx.matrix` |
| — | **No usar la X del logo animada**: el motion es siempre abstracto; el logo sólo aparece estático | |
| `GridSpacer` | Fila vacía entre secciones con `FullLine` arriba/abajo y uniones | `border.faint` |
| CTA · `GridCanvas mirror` | Sincronización: las celdas laterales se iluminan con un relleno tenue, en espejo a ambos lados. **Sin glifos ni símbolos** | `fx.cell` |
| `Reveal` | Fade-in-up al entrar en pantalla, escalonado 80ms por celda | `duration.slower`, `easing.out` |
| `CountUp` | Cifras que cuentan al aparecer (70 %, +20…) | — |
| `Scramble` | Etiquetas mono que rotan con efecto scramble | — |
| `Marquee` | Logos y testimonios en celdas, pausa al hover | — |
| `AutoSteps` | Pasos con barra de progreso que avanza sola (pausa con hover/foco) | `easing.standard` |
| `AIShowcase` | Patrón "use cases" de la referencia: pestañas verticales de 300px siempre visibles (icono, título, descripción; la activa tintada con progreso vertical en el borde) + demo con contenido concreto (estado con puntos animados, tabla con contadores que suben, panel flotante que se escribe) + franja inferior con XOneCode | `accent-subtle`, `shadow.float` |
| `HeroConsole` | Tarjeta del hero: escribe "Movilizamos <sector>", selector de plataformas y botón a contacto. Sin imágenes de producto | `shadow.float` |
| Ilustraciones | Panel de **alto fijo (240px), a sangre y pegado abajo** de la celda, separado del texto por una línea → alineado en toda la fila aunque el texto ocupe más o menos líneas. Escenas en bucle: `PlatformsIllo` (un paquete viaja del editor a cada plataforma, que queda "compilada"), `SecurityIllo` (radar con barrido + registro de eventos que se valida), `OfflineIllo` (cae la cobertura, los cambios se encolan y se envían al volver), `IntegrationIllo` (eventos de ERP/CRM/BD pasan por el bus y aparecen en la app). Se pausan fuera de pantalla | tokens semánticos |
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
| `Navbar` | `menus` (grupos con icono, título y descripción), `featured` (XOneCode), `stories` + `cases` (caso de éxito por menú), `wiki`, `secondary` (EN), `cta`, toggle de tema | Escritorio: panel a ancho de contenedor en 3 columnas (2 de enlaces + «Destacado»), se abre al pasar el ratón (90 ms) o con clic/Enter, Esc cierra y devuelve el foco al disparador, velo sobre la página. Móvil (<996px): acordeón a pantalla completa con bloqueo de scroll | `navbar.*`, `signal.*` |
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


### Header y menús

- **Estructura**: los 6 grupos reales de xone.es (Plataforma, Productos, Soluciones, Comunidad, Recursos, Empresa) con los mismos enlaces. A la derecha: Wiki (enlace externo, desde `xl`), EN, tema y Contacto.
- **Panel**: ocupa el ancho del contenedor, bajo el header. Columna 1–2: etiqueta del grupo y filas de enlaces en 2 columnas (icono 18px `fg-muted` → `fg-accent` al pasar, título `type-label`, descripción `type-body-sm fg-muted`, padding 16/28). Columna 3 «Destacado»: tarjeta de señal (cian, texto blanco) para XOneCode, un caso de éxito distinto en cada menú y el enlace a todos los casos.
- **Lámina**: el panel es una lámina a todo el ancho de la ventana que prolonga la retícula de la página (mismas columnas y líneas, sin sombra ni tarjeta flotante) y termina con una fila vacía de 48px. Tokens: `menu.bg` (en claro el mismo fondo que la página, neutral-50; en oscuro un escalón por encima, neutral-950), `menu.border`, `menu.hover` (tinta al 4 % / neutral-900) y `menu.scrim` (tinta al 40 % / negro al 72 %). En claro la separación la da el velo; en oscuro, la lámina más clara y el velo denso. El disparador activo usa `overlay.press`.
- **Dinámica** (medida en la referencia con Playwright): intención de hover ~90 ms; la lámina se despliega como una cortina (altura 0 → contenido) en 480 ms `cubic-bezier(0.22,1,0.36,1)` mientras el velo funde en 250 ms; al pasar a otro menú la lámina sigue abierta, el contenido cambia al instante y sólo se anima la altura; al salir se recoge en 200 ms (ease-in) tras 180 ms de margen. Filas: fondo y color del icono en 200 ms. Con `prefers-reduced-motion` no hay transiciones, y la lámina cerrada es `inert` (sus enlaces no reciben foco).
- **Regla técnica**: el fondo translúcido con `backdrop-filter` va en una capa hija del header, nunca en el `<header>`, porque convertiría al header en bloque contenedor de los hijos `fixed` (velo y menú móvil).


### Precisión de la rejilla (líneas de 1px)

- **Nada centrado con 50 % / translate(-50%)**: contenedor, raíles, marco y nodos se colocan con `round(down, …, 1px)`. Si el ancho libre es impar (p. ej. con barra de scroll visible), un centrado al 50 % deja la línea en medio píxel y se ve de 2px gris. `.xo-container` usa ese margen redondeado y `RAILS` (GridLines) expone las posiciones: `left`, `right`, `mid`, `frameLeft`, `frameRight`.
- **Nodos centrados en el medio de la línea** (borde + 0,5px), no en su borde.
- **Una sola fila de píxel por frontera**: toda línea de frontera (`FullLine`) ocupa la fila justo encima del límite, así la línea inferior de una sección y la superior de la siguiente coinciden. Ningún bloque añade un `border-t` donde la sección anterior ya traza la línea (por eso el footer no lleva borde superior).
- **El lienzo de la rejilla (`GridCanvas`) no dibuja contorno exterior**: los bordes del marco y las líneas de frontera ya lo hacen.
- **Header**: igual que en la referencia, la rejilla cruza el anuncio y el header: línea a todo el ancho bajo el anuncio y bajo el header, raíles del contenedor y columnas exteriores del marco (`FrameRails`), con nodos en cada cruce.
- **Verificación**: auditoría con Playwright a 1425 px y 1440 px. Comprueba que no haya líneas paralelas a 1px de distancia (dobles), que no haya bordes en medio píxel y que cada nodo caiga exactamente en el centro de sus dos líneas. Resultado: 0 dobles y 84/84 nodos alineados.


## Páginas de contenido (plantilla)

`src/pages/ContentPage.tsx` pinta cualquier página a partir de su contenido (`src/content/pages/*.ts`):

| Pieza | Qué es | Uso |
|---|---|---|
| Hero | Marco de 1314px con rejilla y etiquetas de esquina, miga de pan en píldora, H1 con acento, entrada y 2 botones (Contacto + secundario) | Siempre |
| `intro` | Dos celdas: frase grande con acento a la izquierda, texto y enlace a la derecha | Apertura de la página |
| `cells` | Rejilla de celdas «etiqueta + **Frase destacada.** texto» (2, 3 o 4 columnas), con icono, número y enlace | Capacidades, servicios |
| `rows` | Filas: número y título a la izquierda, párrafos, lista, nota destacada y enlace a la derecha | Contenido largo |
| `chips` | Lista corta en celdas con marca | Capacidades, principios |
| `quote` | Cita sobre la banda de señal | Una por página como máximo |
| `diagram` | Cuatro cuadrantes alrededor del núcleo, con columnas laterales | Marketectura |
| Sigue explorando | Las otras páginas del mismo grupo del menú | Siempre, antes del CTA |
| CTA | El mismo CTA enmarcado de la home | Siempre |

Cada bloque con índice muestra la barra «NN / TT » ETIQUETA» y una cabecera; índice, eyebrow y título no repiten palabras.
**Idiomas**: español en `/slug/`, inglés en `/en/slug/` (`src/i18n.ts`: `t(es, en)`, `link(slug)`, `alternate(lang)`); el selector ES/EN lleva a la misma página en el otro idioma.

## Escenas animadas explicativas (`src/components/fx/Scenes.tsx`)

Ilustraciones vectoriales animadas que **explican** un concepto de la página (no decoran). El contenido las pide por nombre con `visual: SceneName`:

- `intro.visual` → panel a sangre bajo el texto de la columna derecha.
- `rows.items[].visual` → panel a sangre al pie de la columna ancha (texto), nunca en la columna estrecha del título.
- `cells.items[].visual` → panel al pie de la celda (ponlo en **todas** las celdas del bloque para que la fila alinee).

Registro `SCENES`: platforms, security, offline, integration (home) + push, update, monitor, pipeline, broker, onprem, cloud, fleet, agents, chat, sentiment.

Reglas: viewBox 560×240 · sólo tokens (`--xo-color-*`) · `aria-hidden` · textos con `t()` · bucle con `useLoop` (se para fuera de pantalla) · con reduced-motion muestran su estado final estático · nada de glifos/símbolos animados en rejillas · nunca combinar una animación CSS de `transform` con un `transform` posicionado en el mismo `<g>` (anidar dos grupos).
