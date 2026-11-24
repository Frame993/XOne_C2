# Homepage XOne — mapa de contenido, pendientes y reescrituras

Todo el contenido sale de xone.es (consultado el 24-nov-2026). Imágenes y logos se enlazan desde xone.es (`https://xone.es/media/...`); si no cargan se muestra un placeholder con la descripción.

## 1. Mapa: de xone.es a cada sección

| # | Sección (estructura firecrawl) | Contenido | Origen en xone.es |
|---|---|---|---|
| — | Banner de anuncio | "XOne obtiene la certificación ISO/IEC 27001" | Home → Últimas noticias (30-jun-2026) · /certificacion-iso-27001/ |
| — | Navbar | Plataforma, Productos, Soluciones, Casos de éxito, Noticias, Empresa, EN, Contacto | Menú principal |
| Hero | eyebrow, H1, subtítulo, 2 CTA, tarjeta interactiva (sectores que rotan + plataformas + CTA), 70 %, ENS · ISO 27001 | Home (hero) · sectores de /soluciones-xone/ |
| Logos | 14 clientes en marquee | Home → "Empresas que confían en XOne" |
| 01 | Por qué XOne: 4 pilares + 4 cifras | Home → "Una plataforma, experiencias ilimitadas" y bloque de cifras |
| 02 | Cómo funciona: 5 pasos IA + XOneCode (3 tabs) + modo autónomo | Home → "XOne + IA" y "XOneCode" |
| 03 | Productos: 9 tarjetas con enlace | Home → "Todo lo que necesitas para movilizar tu negocio" |
| 04 | Casos de éxito: 12 casos | /casos-de-exito-xone/ |
| 05 | Opiniones: 3 testimonios + certificaciones/premios | /comentarios-clientes/, /certificaciones/, /premios-y-reconocimientos/ |
| 06 | Servicios (hueco de *pricing*) + CTA "¿Hablamos de tu proyecto?" con contacto | /servicios-y-soporte/ y bloque de contacto del pie |
| 07 | FAQ: 6 preguntas | /que-es-xone/, /certificaciones/, home (IA) |
| — | Footer: 4 columnas, ciudades, legal | Pie de xone.es |

## 2. [PENDIENTE]

- **[PENDIENTE] Snippet de código real de XOneCode** (MCP o envío de tarea a Autopilot). La sección 02 ya no muestra código; XOneCode aparece como franja bajo la demo.
- **[PENDIENTE] Validar las cifras de las demos de IA**: son ilustrativas (no son métricas de XOne).
- **[PENDIENTE] Pricing.** xone.es no publica precios. Propuesta: **omitir pricing** y mantener la sección de Servicios en su lugar (ya montada).
- **[PENDIENTE] Logos de clientes en SVG/monocromo**: hoy son PNG de distintos tamaños; se muestran en gris con `grayscale`. Para modo oscuro se usa `invert`, que no es fiable con todos.
- **[PENDIENTE] Migrar los logos de clientes** a `public/` en lugar de enlazarlos a xone.es. (El hero ya no usa imágenes de la plataforma, por decisión de diseño.)
- **[PENDIENTE] Avatares/fotos de los autores** de testimonios (se usa la inicial de la empresa). 3 de los 5 testimonios no tienen persona firmante en xone.es.
- **[PENDIENTE] Enlaces a cada caso de éxito**: todos apuntan a /casos-de-exito-xone/ porque no se extrajeron las URLs individuales.
- **[PENDIENTE] URL del Wiki** (aparece en el menú de xone.es; no incluido).
- **[PENDIENTE] Versión EN** del contenido (el botón EN enlaza a xone.es/en/).

## 3. Textos reescritos o adaptados

| Dónde | Original | Cambio |
|---|---|---|
| Hero, subtítulo | "Crea en poco tiempo aplicaciones móviles…" | "aplicaciones" → "apps" para acortar |
| Banner | Titular de noticia "Certificación ISO 27001" | "XOne obtiene la certificación ISO/IEC 27001" |
| 01 · pilares | Títulos y textos | Se unen como "Título. texto" (formato CardLead) |
| 01 · cifra "2" | "…ENS (Esquema Nacional de Seguridad) e ISO/IEC 27001" | Sin el desarrollo de la sigla |
| 02 · subtítulo | Párrafo "XOne ha integrado la IA en todos los niveles…" | Resumido a una frase |
| 02 · modo autónomo | "Envía las tareas y desconecta. En modo autónomo…" | Resumido |
| 03 · productos | 9 descripciones | Recortadas a una o dos líneas; sin cambiar los hechos |
| 04 · titular | "Casos de éxito" | **Nuevo**: "Movilidad real en sectores exigentes" (subtítulo sí es original) |
| 04 · Istobal, Tubasa | "…estaciones de lavado de vehículos", "App de pago del trayecto…" | Acortados |
| 05 · titular | "Opiniones de nuestros clientes" | "Lo que dicen nuestros clientes" |
| 05 · testimonio Pavapark | Cita larga | Se usa sólo su última frase |
| 05 · Multiasistencia | Cita larga | Primera frase |
| 06 · titular/subtítulo | "Servicios profesionales" + intro | **Nuevo**: "De la implantación simple a la solución a medida"; subtítulo resumido |
| 06 · servicios | 6 bloques largos | Resumidos a una frase cada uno |
| 07 · FAQ | No existe en xone.es | **Preguntas redactadas por nosotros**; respuestas resumen textos reales |
| Footer · tagline | — | **Nuevo**: "Plataforma de desarrollo multiexperiencia para apps empresariales." |
| Hero · `[ 1 código · 4 plataformas ]`, `[ REAL NATIVE ]`, `[ MXDP ]` | — | Etiquetas decorativas nuevas, derivadas de términos de la web |

### Textos ilustrativos dentro de las animaciones (validar)

La tarjeta del hero escribe "Movilizamos …" + sector (texto nuestro; los sectores son reales). Las mini-ilustraciones usan etiquetas genéricas que **no son datos**: "app.xone"; registro de seguridad "Sesión autenticada / Datos cifrados en tránsito / Dispositivo verificado / Acceso auditado"; cola offline "Parte de trabajo / Fotos de la avería / Firma del cliente" con estados "Sin cobertura / Sincronizando / Al día / en cola / enviado / Sin cambios pendientes"; sistemas "ERP / CRM / BD", "BUS"; demos de IA (estados "Generando pantalla / Organizando en Autopilot / Agentes trabajando / Documentando / Atendiendo consultas", **cifras de las tablas** como 18 componentes, 34 tareas, 42 pruebas, 128 consultas… y paneles "Orden de trabajo con mapa y firma", T-101…, "crearOrden()", "¿Cómo reasigno una orden?"), y las etiquetas `[ REAL NATIVE ]`, `[ MULTIPLATAFORMA ]`, `[ OFFLINE FIRST ]`, `[ MXDP ]`. Los nombres de los pilares (Multiplataforma, Módulos de seguridad, Comunicaciones, Bus de integración) salen de /que-es-xone/.

### Etiquetas de sección (índice / eyebrow) — redactadas por nosotros

Ventajas · Por qué XOne · Módulos de la plataforma · Clientes · Casos de éxito · Comunidad · Testimonios · Acompañamiento experto · Contacto · Antes de empezar. Regla: índice, eyebrow y titular nunca repiten palabras (DESIGN_SYSTEM §2.3).

## 4. Componentes o tokens que faltaron o hubo que forzar

- **Faltaron (creados aparte):** `SectionIndex`, `Eyebrow`, `SectionHeading`, `Section`, `Icon`, `Logo`, `ThemeToggle`, utilidades `.xo-cells` / `.xo-rails` / `.xo-dot-grid` / `.xo-marquee`.
- **Sin componente propio:** FAQ (`<details>` estilado en la página) → conviene un `Accordion`. Testimonio y tarjeta de estadística están compuestos en la página → candidatos a `Testimonial` y `Stat`.
- **Tokens añadidos en la 2ª pasada (motion):** `accent.solid*` (botón con texto blanco), `fx.*`, `easing.spring`, `duration.spring/ambient/orbit`, `shadow.accent-hover`, `tabs.indicator-transition`, paso primitivo `cyan.650`.
- **Tokens añadidos durante el montaje:** `text.accent-display` (el cian de texto normal quedaba apagado en titulares), `brand.wordmark` y `brand.symbol` (logo por tema).
- **Valores forzados:** `active:scale-[0.98]` en Button; máscaras con degradado en hero y marquee; `aspect-[16/9]` del hero; opacidad 60/40 % de la trama de puntos; `max-w-32` y `h-8` de logos de clientes; `grid-cols-[240px_1fr]` de la fila de logos y `[1fr_1.6fr]` del FAQ. Tamaños de iconos (14/16/18/20) pasados como props.
- **Banda de contacto oscura:** se resuelve con `data-theme="dark"` en un subárbol (los tokens de componente se redeclaran por tema para que funcione).
