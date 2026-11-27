# Homepage XOne — mapa de contenido, pendientes y reescrituras

Todo el contenido sale de xone.es (consultado el 24-nov-2026). Imágenes y logos se enlazan desde xone.es (`https://xone.es/media/...`); si no cargan se muestra un placeholder con la descripción.

## 0. Nuevo mensaje ASDD (nov-2026)
Fuentes: documento de visión [docs/vision-asdd.md](docs/vision-asdd.md) y las 11 fichas de [docs/casos-de-uso/](docs/casos-de-uso/). Reglas de voz: skill `.claude/skills/xone-voz/`. **No se inventa texto**: todo lo nuevo es literal de esas fuentes (el EN es traducción nuestra).

**Hecho (tanda 2):**
- Menú del apartado 12.1: Soluciones (ASDD, XOne EMM) · Productos (XOne, XOneCode, NappAI, NappAI Voice) · Casos de uso (11) · Casos de éxito · Empresa. CTA del header: «Solicitar una demo».
- Páginas antiguas fuera del menú pero vivas (migas y relacionados vía `groups`): Plataforma, los productos antiguos (ahora agrupados bajo «XOne EMM», y enlazados desde `/xone-emm/`), Soluciones XOne (Kit Digital, GSAT, iSAT…), Comunidad y Recursos.
- Páginas nuevas: `/asdd/`, `/xone-emm/`, `/nappai/`, `/nappai-voice/`, `/casos-de-uso-home/` (reescrito) y 11 fichas en `/casos-de-uso-home/<slug>/` con su PDF (`public/casos-de-uso/`).
- Home rehecha con el apartado 12 (hero, qué es, ciclo, piezas, bucle, dos soluciones, casos de uso, por qué XOne, evento, cierre). Se mantienen logos, casos de éxito y opiniones. Fuera: pilares multiplataforma, pasos de IA, rejilla de productos, banda «70 %», servicios y FAQ.
- «NappAI Voz» (fichas) → «NappAI Voice» (documento) en toda la web.
- Hero acortado tras revisar a la competencia (OutSystems, Mendix, Praxedo, Retell, ServiceTitan: titulares de 4–9 palabras, subtítulo de una frase): titular alternativo 3 del apartado 12.2 («La plataforma donde los agentes hacen avanzar tu operación») + frase del apartado 5 como subtítulo. La barra superior pasa a anunciar el evento de Valencia (como OutSystems con su World Tour).

**[PENDIENTE] — preguntas para el cliente:**
- Evento de Valencia: fecha y enlace. «Reservar plaza» lleva de momento a /contacto/.
- Paso «Mejorar» del ciclo: validar con producto (aviso del propio documento, apartado 4).
- NappAI en infraestructura propia del cliente y modelos de IA: «a validar con producto» → no publicado.
- Qué otros productos de la suite NappAI se nombran (apartado 5).
- «NappAI Voz» vs «NappAI Voice»: confirmar el nombre en español.
- Páginas antiguas con el mensaje anterior («multiexperiencia», «MXDP», cifras): Plataforma (`plataforma.ts`), productos de XOne EMM (`productos.ts`), Soluciones XOne, Sobre nosotros (`empresa.ts`) y noticias. No se han reescrito porque no hay texto nuevo: ¿se mantienen, se reescriben o se retiran?
- Opiniones de la Home con cifras («85 %», «50 %») y el reconocimiento «Gartner · Cuadrante Mágico MXDP»: son citas y premios reales; confirmar si se mantienen.
- Fichas 07 y 08: sus títulos de sección «Elige tu sector y mira cómo funciona» / «Elige una incidencia y mira qué pasa» venían de piezas interactivas; en la web son estáticas.

## 1. Mapa: de xone.es a cada sección

| # | Sección (estructura firecrawl) | Contenido | Origen en xone.es |
|---|---|---|---|
| — | Banner de anuncio | "XOne obtiene la certificación ISO/IEC 27001" | Home → Últimas noticias (30-jun-2026) · /certificacion-iso-27001/ |
| — | Navbar | 6 menús reales de xone.es (36 enlaces) + Wiki, EN y Contacto. Destacado: XOneCode y un caso de éxito por menú | Menú principal. **Reescritura**: las descripciones cortas de cada enlace son propias |
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


## Páginas · lote 1 (Plataforma) — ES y EN

Fuente: `xone.es/{slug}/` y `xone.es/en/{slug}/` (24-nov-2026). Todo el cuerpo de texto es real (algunos párrafos largos se han condensado sin cambiar el sentido).
**Reescrituras propias** (revisar):
- Índices, eyebrows y titulares de sección de las páginas (p. ej. «Diez piezas que trabajan como un solo sistema», «Cinco herramientas para crear apps nativas», «Ocho razones para elegir XOne», «Nueve claves de una plataforma pensada para programar», «Ocho principios que guían cada entrega»).
- Frases de apertura: `que-es-xone` («Del primer día de desarrollo a la app en funcionamiento, un 70 % menos de tiempo»), `servicios-y-soporte` («De la implantación simple a la solución a medida»), `marketectura` (segundo párrafo: «Alrededor de ellos, las soluciones móviles…»), `como-resolvemos-la-movilidad` (párrafo de apertura que enumera las nueve claves).
- Etiquetas cortas de las celdas (p. ej. «Comunicaciones inteligentes», «Herramientas low-code»).
- Marketectura: el diagrama de xone.es era una imagen; se ha rehecho como componente con las mismas etiquetas (traducidas al español en la versión ES).
- Bloque final «Sigue explorando · Más formas de conocer XOne» y página 404.

## Home en inglés (`/en/`)
Textos de `xone.es/en/` cuando existen. **Traducción propia**: descripciones del menú, FAQ, testimonios, lista de reconocimientos, servicios, textos de las demos animadas (AIShowcase, ilustraciones) y etiquetas de interfaz.


## Páginas · lote 2 (Productos) — ES y EN

Fuente: `xone.es/{slug}/` y `xone.es/en/{slug}/` (24-nov-2026). Cuerpo de texto real; en `ciberseguridad`, `gestion-de-movilidad-empresarial-xone`, `nueva-mxdp` y `bus-integracion-esb-enterprise-service-bus` los párrafos largos se han **condensado** (mismo contenido, menos texto por celda).
**Reescrituras propias** (revisar):
- Titulares, eyebrows e índices de sección (p. ej. «Un programador más, especializado en XOne», «Trece capacidades para cualquier canal», «Protección para redes, apps, dispositivos y datos», «Conecta tus sistemas sin tocarlos», «Doce funciones para actualizar sin fricción», «Siete trabajos que se hacen solos»).
- Frases de apertura: `xonecode` («Tú decides qué construir; XOneCode se encarga del cómo» es real), `ciberseguridad` («Acceso seguro… con un enfoque modular y receptivo»), `bus-integracion` («Movilidad para prácticamente cualquier sistema, con mínimos cambios»), `cloud-vs-on-premise` (real), `replica` («Una de las funcionalidades más importantes de XOne» es real).
- Títulos de fila en `replica-de-datos-y-documentacion-xone` («Copias locales de los datos», «Un servidor de réplica para todas tus apps»…) y etiquetas cortas de celda.
- Titular del hero de `ciberseguridad` («Ciberseguridad de extremo a extremo»), `multiplataforma-xone` («Multiplataforma: un solo código») y `xoneassist` («XOneAssist, tu tutor virtual»).
- `xonecode`: la demo animada «Del diseño al soporte, con IA» reutiliza la de la home con los cinco pasos reales.

## Páginas · lote 3 (Soluciones y casos de éxito) — ES y EN

Textos reales de xone.es y xone.es/en (24-nov-2026), condensados en los casos largos (Iberdrola, Gamesa, Sacyr, Orenes, Cofares, Istobal). Redactado por nosotros:

- Titulares de sección (índice / eyebrow / título) de todas las páginas, p. ej. «Proyecto · Reto y respuesta · Del desafío a la solución XOne».
- Fichas `facts` de cada caso: reordenan los datos clave del original (sistemas, integración, tiempos, dispositivos).
- Resúmenes de una línea de cada caso (`CASES` en `casos.ts`), para el listado y «Otros clientes que confían en XOne».
- Citas de cierre de Iberdrola, Navantia, Istobal e Ingeteam: frases del texto original convertidas en cita.
- `soluciones-xone`: la cita sobre tecnologías emergentes y el bloque de 6 casos de éxito.
- GSAT / iSAT: «Con XOne no existen los límites» traduce el «Limits don't exist with XOne» que xone.es muestra en inglés también en la versión española.
- Kit Digital: las tarjetas de soluciones resumen los textos originales; precios y bonos sin cambios. La tarjeta «Sitio web» no está en el listado original de la página (sí como subpágina).
- Las subpáginas del Kit Digital comparten estructura (`kitCategory`); su EN es el real de xone.es/en.

## Páginas · lote 4 (Comunidad, Empresa, contacto y legal) — ES y EN

Textos reales de xone.es y xone.es/en (24-nov-2026). Literales, sin tocar: aviso legal, cookies y privacidad (`src/content/docs/legal.*.md`), la Política de Seguridad de la Información (`politica-seguridad.*.md`), los datos de los certificados ENS e ISO/IEC 27001 y las opiniones de clientes. Redactado por nosotros:

- Titulares de sección (índice / eyebrow / título) y las frases grandes de apertura (`intro.lead`) de clientes, socios, partners, hazte partner, sobre nosotros, certificaciones y financiación.
- Financiación europea: la banda de datos (programa, inversión, subvención, 80 %) reordena las cifras del texto original.
- Programa de partners: las 8 tarjetas de «Qué ofrecemos» resumen los párrafos originales; requisitos, criterios y condiciones son literales.
- Sobre nosotros: la visión se presenta como lista resumida; «Trabaja con nosotros» pasa a cita con el correo de contacto.
- Logos: se omiten las imágenes de xone.es sin texto alternativo (no se sabe qué empresa son). Revisar si falta algún cliente.
- Contacto: formulario que sólo abre el programa de correo, como en xone.es («esta web no guarda ni envía ningún dato»), coherente con la política de privacidad.
- «Modalidades de soporte» enlaza a xone.es hasta que se construya en su lote.

## Páginas · lote 5a (Recursos + noticias 2021–2026) — ES y EN

- Documentación, premios y colaboraciones: textos reales de xone.es y /en/. Premios agrupados en tres filas (Gartner, Movilforum, premios empresariales) con los mismos 8 reconocimientos.
- Noticias: el cuerpo en español es literal (src/content/news/es). xone.es no tiene noticias en inglés salvo 9 entradas publicadas aparte en inglés (`pair` en meta.ts): se usa ese texto tal cual. **El resto de traducciones al inglés son nuestras** (src/content/news/en) y conviene revisarlas.
- Títulos en mayúsculas normalizados («BLOG TECNOLOGÍA 2022» → «Blog tecnología 2022», «DATA UPDATE» → «Data update»). Las entradas con título técnico en xone.es (`blognoticiadatos`, `blognews`, `blogherramientasxone`, `noticia-blog-ia`) llevan un título nuestro sacado de su contenido; se revisará al migrarlas.
- `tendencias-sat-blog` y la noticia de Gartner de 2021 tienen el mismo texto que otras entradas; comparten cuerpo (`body`).
- «Certificación ISO 27001»: en xone.es sólo es la imagen del certificado; añadimos un enlace a Certificaciones.
- Las noticias aún no migradas aparecen en el listado y enlazan a xone.es.
