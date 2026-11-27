# Estudio · ilustraciones y animaciones de firecrawl.dev (nov-2026)

Análisis hecho con Playwright sobre https://www.firecrawl.dev (1440 px, DPR 2): capturas por secciones, varios fotogramas por ilustración, inventario de SVG (`querySelectorAll("svg")`), animaciones activas (`document.getAnimations()`) y `@keyframes`. Objetivo: entender por qué sus visuales se ven profesionales y por qué los nuestros (escenas de `Scenes.tsx`) no. **No se copia nada**: se extraen principios.

## 1. Lo que hay (datos)

| Medida | Firecrawl | XOne (Home) |
|---|---|---|
| SVG en la página | 947, pero el 54 % son cruces «+» de 11×11 en las intersecciones de la retícula y el resto iconos de 16–24 px | 5 escenas grandes (311–555 px) |
| SVG grandes (> 120 px) | 7, y casi todos son 1–2 `path` (marcos, arcos) | 5, con 18–37 elementos cada una |
| Grosores de trazo | **1,25 px** (149 usos); 1 px de forma residual | 1 / 1,5 / 1,75 / 2 px mezclados en la misma escena |
| Colores en ilustraciones | 1 gris (con 3 opacidades) + 1 acento (naranja) | gris, cian, verde («Servicios estables»), blanco |
| Animaciones en marcha a la vez | 13 en toda la página | 20 solo en la Home |
| Tipos de animación ambiental | rotación lenta (30–32 s, lineal), opacidad 0,55→0,95 (7 s), marquesina | parpadeo 1 s, trazo discontinuo 1,2 s, anillo 0,8 s, pulso 1,2 s, todas en bucle |
| Transiciones de estado | 200–400 ms, una sola por ilustración | varias simultáneas y continuas |
| Arte de caracteres | `<pre>`/canvas **en el color de acento**, con significado: es «el dato que se procesa» (relleno de la barra 96 %, la llama, el documento que se parsea) | DotMatrix gris colocado detrás de los titulares como decoración; en «El ciclo ASDD» pasa por detrás de la palabra «personas» |

Tipografía (Firecrawl): H1/H2 52/56 px, peso 500, tracking −0,01 em · cuerpo 16/24 · etiquetas 14/20 normales (no mono, no mayúsculas) · mono (Geist Mono) 12–14 px **solo dentro de la ilustración** (código, URL, «10,489 tokens»).

## 2. Cómo componen una ilustración

1. **La ilustración demuestra la frase que tiene encima, literalmente.**
   - «Only the content that matters. No navs, footers, or ads» → una lista `<nav> <h1> <ads> <p> <footer>`: las filas de navegación, anuncios y pie se apagan y las de `h1` y `p` se encienden. El contador pasa de 10,489 a 2,788 tokens.
   - «Industry-leading reliability, 96 %» → tres barras: la suya llena y en naranja, las otras vacías.
   - «Blazingly fast» → una tabla de URLs con los ms.

   No hay ninguna ilustración genérica reutilizada.
2. **Está hecha con la propia interfaz del producto, en alambre.** Ventana de navegador (3 puntos + URL), filas de tabla, barras, chips y código. Son rectángulos con radio, líneas de 1,25 px y texto mono pequeño. No hay iconografía abstracta (nodos, buses, ondas).
3. **Va a sangre: pegada al borde de la celda.** La ilustración ocupa la mitad inferior de la tarjeta sin padding exterior y se recorta contra los bordes o se desvanece con una máscara. Se lee como «una ventana al producto», no como un dibujo centrado en una caja.
4. **Un solo acento por ilustración.** Todo es gris de línea. El naranja marca **solo el elemento que cambia** (la fila activa, la barra ganadora, el contador).
5. **Hay una animación de estado y luego reposo.** Al entrar en pantalla o al pasar el ratón ocurre un cambio (apagar filas, llenar la barra, cambiar el contador) en 200–400 ms y la ilustración se queda quieta. Lo único que se mueve siempre es ambiental y muy lento: giros de 30 s y opacidad de 7 s.
6. **Tarjeta = etiqueta + frase + enlace + ilustración.** La etiqueta es un icono de 16 px con texto normal de 14 px. La frase es «**Negrita.** continuación en gris» en una sola frase de 16–18 px. El enlace va en acento con un chevron. Después viene la ilustración a sangre.
7. **La retícula es la estructura, no la decoración.** Usa líneas de 1 px con cruces en las intersecciones y numeración `[ 01 / 07 ] · MAIN FEATURES` por sección (lo mismo que nuestro SectionIndex y los conectores: **eso ya lo hacemos bien**).

## 3. Diagnóstico de nuestras escenas (Home, sección «El ciclo ASDD» y «El bucle»)

| Escena | Qué dice la frase | Qué enseña el dibujo | Problema |
|---|---|---|---|
| Entender | Los agentes analizan el proceso: equipo, datos del ERP, reglas, dónde se pierde tiempo | ERP/CRM/BD → BUS → móvil | Es la escena de **integración**, no de entender. Nada se «analiza». |
| Construir | XOneCode genera la app: pantallas, flujos, reglas, integraciones | Requisito → 3 barras de «agente» | Es la que más se acerca, pero no aparece la app construida ni la aprobación de la persona. |
| Operar | La app trabaja en la calle, también sin cobertura; NappAI asigna, avisa, escala; Voice llama | Ruta con 5 paradas + lista «orden de carga» | Es una ruta de reparto genérica; faltan «sin cobertura», la acción del agente y la llamada. |
| Mejorar | Lo que ocurre vuelve a los agentes; detectan atascos y proponen cambios | Gráfica con umbral + API/Réplica/Push + «Servicios estables» en verde | Es **monitorización de infraestructura**. Mete un color (verde) que no es del sistema. |
| Bucle (2 sentidos) | Conversación → calle / calle → conversación | Las mismas escenas de integración y ruta | Se repite lo que ya se vio en el ciclo, así que no cuenta el bucle. |

Problemas transversales:
- **Mezcla de lenguajes visuales** en una misma escena: curvas discontinuas, líneas de puntos, anillos, pastillas, maqueta de móvil y retícula de puntos de fondo.
- **Movimiento continuo y simultáneo**: todo parpadea, pulsa o corre a la vez. Nada «ocurre», así que el ojo no sabe qué mirar.
- **Dibujo pequeño centrado en una caja** (`h-60`, fondo `bg-subtle`, con mucho vacío alrededor) en lugar de ilustración a sangre.
- **Exceso de mono en mayúsculas** fuera de la ilustración (ENTENDER, 01, QUIÉN ACTÚA, QUÉ DECIDE LA PERSONA): compite con el texto.
- **DotMatrix sin función**: manchas grises detrás de titulares y, a veces, detrás del texto.

## 4. Reglas para rehacerlas (sin cambiar tokens, retícula ni componentes base)

1. **Una escena = una frase.** Antes de dibujar, escribir qué demuestra: «se ve que X pasa a Y». Si la escena no demuestra la frase, no va.
2. **Vocabulario único:** marco de app o ventana, filas, chips, barras y texto mono de 11–12 px. Nada de nodos, buses ni ondas.
3. **Trazo único:** 1 px `--line` (no hay grosores distintos en la misma escena). Radios de los tokens.
4. **Color:** gris de línea y texto, más **un** acento (`accent`) solo en lo que cambia. Sin verde ni ámbar.
5. **A sangre:** la ilustración toca los bordes de su celda; recorte con `mask-image` hacia el borde.
6. **Animación:** una secuencia de estado al entrar en vista (pasos de 300–400 ms, ease-out). Luego reposo y, como mucho, una repetición cada 6–8 s. Ambiente solo con opacidad lenta. Con `prefers-reduced-motion`, el estado final.
7. **DotMatrix con significado:** solo donde represente datos que se procesan, en el color de acento y dentro de la ilustración. No detrás de titulares.
8. **Etiquetas fuera de la ilustración:** icono + texto normal (no mono mayúsculas). Mono solo dentro del dibujo.

## 5. Propuesta escena a escena (texto solo del documento de visión, apdo. 4 y 6)

| Escena | Estado inicial → final (lo que se anima) |
|---|---|
| Entender | Ficha del proceso con filas «Equipo · Datos ERP · Reglas · Tiempo perdido». Las filas se escanean una a una y la de «Tiempo perdido» queda marcada en acento. Al final aparece el chip «Validar · persona». |
| Construir | Requisito (texto) → la maqueta de la app se va montando por bloques: Pantallas, Flujos, Reglas, Integraciones. Al final se enciende el botón «Aprobar» (la persona revisa y aprueba). |
| Operar | Móvil del técnico con el indicador «Sin cobertura». Entra la orden y se encienden los chips Asignar → Avisar → Escalar; una línea de llamada de NappAI Voice. Al final aparece «Excepción → persona». |
| Mejorar | Flujo de 4 pasos con contadores. En uno se acumulan elementos (el atasco, en acento) y aparece la tarjeta «Cambio propuesto», con «Aplicar» y «Descartar» (la persona decide). |
| Bucle | Dos columnas. Izquierda: transcripción de la llamada → la orden aparece en el móvil. Derecha: botón en la app «Nadie en casa» → llamada → la ruta se actualiza. Las dos usan el mismo marco, en sentidos opuestos. |

Capturas de referencia: scratchpad de la sesión (`shot/fc/`), no se versionan.
