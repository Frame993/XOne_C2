# Guía de desarrollo

Cómo añadir y cambiar páginas, secciones y animaciones sin romper la coherencia de la web. Para colores, tipografía y componentes, ver [DESIGN_SYSTEM.md](../DESIGN_SYSTEM.md); para textos y mensaje, [GUIA-MARCA.md](GUIA-MARCA.md).

---

## 1. Cómo funciona la web

- **Una sola app** (`index.html` → `src/index.tsx`). La URL decide qué se pinta:
  - `/` y `/en/` → `Home`.
  - `/slug/` y `/en/slug/` → `ContentPage` con la página de `PAGES[slug]`, o una noticia si el slug está en `BUILT_NEWS`.
  - Cualquier otra → `NotFound`.
- **Idioma** (`src/i18n.ts`):
  - `locale` sale de la URL.
  - `t("es", "en")` elige el texto.
  - `link(slug)` construye la ruta en el idioma actual.
  - `alternate(lang)` da la misma página en el otro idioma.
- **Enlaces a páginas que aún no existen.** `link()` comprueba `BUILT_SLUGS` (`src/content/pages/slugs.ts`). Si el slug no está ahí, el enlace va a xone.es. Por eso **cada página nueva se registra en `slugs.ts`**, o sus enlaces seguirán saliendo a la web antigua.
- **Tema.** La web va solo en oscuro (`<html data-theme="dark">` en `index.html`). No hay que escribir estilos «dark:»: los tokens ya resuelven el color.

## 2. Añadir una página de contenido

Las páginas no se programan: se **describen** con datos y la plantilla (`ContentPage`) las pinta.

1. **Elegir el archivo** en `src/content/pages/`:
   - `asdd.ts`: soluciones y productos ASDD.
   - `usos-a.ts`, `usos-b.ts`, `usos-c.ts`: fichas de casos de uso.
   - `casos.ts`: casos de éxito.
   - `empresa.ts`, `recursos.ts`…: el resto.

   Si es una familia nueva, crea un archivo y añádelo a `PAGES` en `index.ts`.
2. **Escribir la página** con la forma `Page = { es: PageDoc, en: PageDoc }` (tipos en `types.ts`):

```ts
import { G, type Page } from "./types";

export const misPaginas: Record<string, Page> = {
  "mi-pagina": {
    es: {
      group: G.soluciones,                       // grupo del menú: miga de pan y «Sigue explorando»
      seo: { title: "Título | XOne", description: "Una frase para buscadores." },
      hero: { title: "Titular de la", accent: "página", lead: "Entrada de una o dos frases.", secondary: { label: "Ver casos de uso", slug: "casos-de-uso-home" } },
      blocks: [
        { type: "intro", lead: "Frase grande de apertura.", text: ["Párrafo."] },
        { type: "cells", index: "Ventajas", eyebrow: "Por qué", title: "Lo que", accent: "cambia", cols: 3, items: [
          { label: "Etiqueta", icon: "shield", lead: "Frase destacada.", text: "Texto de apoyo." },
        ] },
      ],
    },
    en: { /* la misma estructura, traducida */ },
  },
};
```

3. **Registrar el slug** en `BUILT_SLUGS` (`slugs.ts`). En desarrollo, la consola avisa si `slugs.ts` y `PAGES` no coinciden.
4. **Si la página va en el menú**, añádela al grupo correspondiente en `groups` de `site.es.ts` **y** de `site.en.ts`. El menú visible es `nav.menus`; los grupos antiguos siguen existiendo para las migas de pan aunque no se vean.
5. **Probarla** en `http://localhost:5173/mi-pagina/` y `/en/mi-pagina/`, y pasar la verificación del §8.

### Bloques disponibles

Están definidos en `types.ts` y documentados visualmente en DESIGN_SYSTEM.md, en «Páginas de contenido».

| Bloque | Para qué |
|---|---|
| `intro` | Apertura a dos columnas. Admite escena (`visual`). |
| `cells` | Rejilla de 2, 3 o 4 celdas: etiqueta, **frase destacada**, texto. Lo más usado. |
| `rows` | Contenido largo: título a la izquierda, párrafos, lista y nota a la derecha. |
| `chips` | Lista corta; `numbered` para pasos. |
| `facts` | Banda de datos clave bajo el hero (fichas). |
| `logos` | Muro de logotipos. |
| `testimonials` | Opiniones completas. |
| `quote` | Una cita sobre la banda de color; una por página como máximo. |
| `doc`, `news`, `article`, `contact`, `diagram`, `showcase` | Casos especiales: legal, noticias, contacto, marketectura y demo de IA. |

Reglas de los bloques:
- **Índice, eyebrow y título no repiten palabras.** El índice es la categoría (1–2 palabras), el eyebrow el ángulo y el título el mensaje.
- **Una sola palabra o fragmento de acento** por titular (`accent`).
- **En las celdas**, el arranque va en `lead` (se pinta en negrita) y el resto en `text`. Es el patrón «**Frase.** continuación en gris».
- **Iconos:** solo los de `src/components/ui/Icon.tsx`. Si falta uno, se añade ahí con el mismo trazo.

### Opciones de página
- `hero.primary: false`: quita el botón de contacto del hero.
- `cta: false`: quita el cierre.
- `crumb`: página madre en la miga de pan.
- `related` y `relatedTitle`: «Sigue explorando» propio.

## 3. Añadir un caso de uso

1. **Ficha y PDF:** los originales van en `docs/casos-de-uso/` y el PDF público en `public/casos-de-uso/`.
2. **Catálogo:** añadir la entrada en `src/content/usos.ts` con `n`, `slug`, `icon`, `pdf` y `es`/`en` (`name`, `sector`, `lead`). El listado, el menú, la Home y los «siguientes» se alimentan de aquí.
3. **Página:** crearla en `usos-a.ts`, `usos-b.ts` o `usos-c.ts`, siguiendo el mismo orden de bloques que las demás:
   - reto;
   - cómo lo resolvemos;
   - el cambio;
   - control;
   - piezas;
   - para quién;
   - qué mediremos.
4. **Slug:** registrar `casos-de-uso-home/<slug>` en `slugs.ts`.

## 4. Noticias

`src/content/news/meta.ts` lista todas las noticias. Para publicar una:
- crear `es/<slug>.md` y `en/<slug>.md`;
- marcarla `built: true` en `meta.ts`.

Las noticias históricas no se reescriben.

## 5. Secciones de la Home

`src/pages/Home.tsx` es una lista de secciones que siguen siempre la misma anatomía:

```tsx
<GridSpacer />                                         // fila vacía entre secciones
<SectionIndex n={3} total={TOTAL} label="Categoría" /> // fila «03 / 10 » CATEGORÍA»
<Section id="ancla" label="Nombre accesible">
  <Heading eyebrow="Ángulo" title="El mensaje" accent="en cian" subtitle="Una frase." />
  <div className="xo-cells md:grid-cols-2"> … celdas … </div>
</Section>
```

- **Numeración:** si añades o quitas una sección numerada, actualiza `TOTAL` y la numeración de todas las secciones.
- **Textos:** van en `home` de `site.es.ts` y `site.en.ts`, nunca escritos en el TSX, salvo etiquetas cortas con `t()`.
- **Celdas:** `xo-cells` dibuja la rejilla de 1 px y `Reveal` hace la entrada al aparecer.
- **Tarjetas en filas:** cuando las partes de las tarjetas de una misma fila deben alinearse (texto, datos, escena), usa `md:grid md:grid-rows-subgrid md:row-span-N`, como en la sección del ciclo.

Patrones de la Home que puedes reutilizar:

| Patrón | Dónde verlo | Cuándo usarlo |
|---|---|---|
| Tarjeta con **icono en caja + título + `CardLead`** y filas «etiqueta \| valor» | `Cycle` | Explicar un paso, con quién actúa y qué decide la persona |
| **Cita destacada que rota** con lista y progreso | `Testimonials` | Contenido equivalente que se compara (opiniones, casos) |
| **Logos que aparecen en reposo** (aleatorio, sin tocarse, con descanso) | `Cases` → `useLogoFlips` | Rejillas de clientes o partners |
| **FAQ** en desplegables `<details>` | `FAQ` | Dudas frecuentes; respuestas con fuente |
| **Banda de color** (SignalBand) | `EventBand` | Un anuncio temporal; una por página |

## 6. Escenas animadas (ilustraciones)

Hay dos familias. **Para cualquier escena nueva, sigue las reglas de la nueva**, que son las de [estudio-firecrawl.md](estudio-firecrawl.md).

| Familia | Archivo | Uso |
|---|---|---|
| **Escenas ASDD** (nuevo estándar) | `src/components/fx/AsddScenes.tsx` | Ciclo y bucle de la Home |
| Escenas SVG antiguas | `src/components/fx/Scenes.tsx`, `Illustrations.tsx` | Páginas interiores, con `visual: "nombre"` en el contenido |

Reglas del estándar:

1. **Una escena demuestra una frase.** Antes de dibujar, escribe «se ve que X pasa a Y». Los textos de dentro salen del contenido de la tarjeta.
2. **Vocabulario fijo:**
   - **Piezas:** `Win` (ventana en alambre), `Phone`, filas, `Chip`, `Btn`, `Bar`, `Bubble`. No uses nodos, buses ni ondas.
   - **Radios:** marco 12 px (`rounded-lg`) y todo lo de dentro 8 px (`rounded-md`); solo las barras y los puntos van en `pill`.
   - **Texto:** sans 12–14 px. Mono solo para contadores (`4/4`).
3. **Color:** gris de línea y texto, más **un** acento solo en lo que cambia. Sin verde ni ámbar.
4. **A sangre:** el marco toca el borde de la celda y se corta por abajo con fundido (`Stage`).
5. **Movimiento:** `useSequence(n)` avanza un paso cada ~750 ms al entrar en pantalla, se queda quieto y repite despacio. Transiciones de 300 ms. Con `prefers-reduced-motion`, se muestra el estado final.
6. **Móvil:** si no cabe, se oculta la pieza secundaria (`hidden sm:block`) en vez de apretar.

## 7. Convenciones de código

- **Estilos:**
  - Solo utilidades de tokens (`bg-surface`, `text-fg-muted`, `border-line-faint`, `type-*`). Nada de hex, `text-lg` ni `font-bold`.
  - La paleta por defecto de Tailwind está desactivada.
  - Tipografía siempre con roles: `type-title`, `type-body`, `type-label`, etc.
- **Iconos en caja:** siempre `IconTile`, que es cuadrado y no se deforma. No crees cajas de icono a mano.
- **Etiquetas de sección:**
  - `Eyebrow` (píldora, sin logo) para el ángulo.
  - `SectionIndex` para la fila índice. Sin `n`, muestra solo la etiqueta, como en el pie.
- **Claves de listas en React:** usa `` `${i}-${texto}` `` cuando el texto pueda repetirse (diálogos, etiquetas).
- **Accesibilidad:**
  - Las animaciones van con `aria-hidden`.
  - Los botones e iconos necesitan nombre accesible.
  - Las imágenes llevan `alt`; vacío si son decorativas.
- **Logos de clientes:** en gris (`grayscale` + `dark:invert`). **No se recuperan los colores al pasar el ratón**: con la inversión, los colores de marca salen mal.
- **Comentarios:** en español y explicando el porqué.

## 8. Verificación antes de subir

1. `npm run build` termina sin errores. Incluye la comprobación de tipos.
2. Revisión visual en escritorio (1440 px) y móvil (390 px), en ES y EN.
3. **Auditoría automática** con `scripts/audit.mjs`. Recorre todas las páginas enlazadas desde `/` y `/en/` y comprueba:
   - errores de consola y de JavaScript;
   - peticiones fallidas e imágenes rotas;
   - enlaces que llevan a la 404;
   - desbordes horizontales en móvil;
   - número de `h1`, `alt`, nombres accesibles, IDs duplicados, descripción e idioma.

   ```bash
   npm i -D playwright && npx playwright install chromium   # una sola vez
   npm run dev                                              # en otra terminal
   node scripts/audit.mjs http://localhost:5173
   ```

   El resultado debe ser «0 problemas».
4. **Voz:** si has cambiado textos, pasa el barrido de términos prohibidos de [GUIA-MARCA.md](GUIA-MARCA.md#7-comprobación-rápida).
5. **Pendientes:** si algo queda pendiente del cliente, anótalo en `CONTENT_MAP.md` como `[PENDIENTE]`.
