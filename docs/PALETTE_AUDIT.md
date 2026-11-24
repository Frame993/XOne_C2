# Auditoría de paleta · v1 → v2 (24-nov-2026)

## Cómo trabaja el color firecrawl.dev (medido en la home con getComputedStyle)

| Hallazgo | Dato medido |
|---|---|
| Neutros **sin tono** (croma 0) | fondo `#F9F9F9`, superficie `#FFF`, bordes `#EDEDED / #E8E8E8 / #E6E6E6`, tinta `#262626` |
| Jerarquía de texto por **alfa de una sola tinta** | 100 % (16 % del texto), 72 %, 64 % (25 % del texto), 56/48/32 % para lo terciario |
| **Un único acento** muy saturado | "heat" `#FA5D19` en display-p3; sólo el 2,3 % del texto, pero en titulares, CTA, enlaces y glifos |
| Escala **alfa del acento** | heat-4/8/12/16/20/24/40/48/90/100 → tintes, halos, bordes sobre cualquier superficie |
| Un gran **bloque de acento** a todo el ancho | la banda naranja con arte ASCII y cifras (≈ 39 % del área pintada con fondo) |
| Acentos extra sólo para ilustración | amethyst, bluetron, crimson, forest, honey — nunca en UI |
| Banner superior = acento | naranja con texto blanco |
| Colores en **display-p3** | todos los tokens están en `color(display-p3 …)` |

## Qué fallaba en v1 (por qué no tenía el mismo impacto)

1. **Neutros teñidos de azul** (h≈252, `#18293E` como tinta). Fondo, texto, bordes y acento eran todos azulados → el cian no destacaba: todo era "de la misma familia".
2. **Dos colores de marca compitiendo**: el petróleo aparecía en banner, enlaces, sombras y botón secundario, robando protagonismo al cian.
3. **Cian apagado** donde importa: para cumplir AA se usaron tonos oscuros (#006E8B en texto) sin compensar la saturación.
4. **Sin escala alfa**: tintes y hovers eran sólidos → menos riqueza sobre superficies distintas.
5. **Sin momento de acento a gran escala**: la banda de contacto era oscura; no había un bloque cian que marcara el ritmo.

## Decisiones v2

| Cambio | v1 | v2 |
|---|---|---|
| Neutros | fríos, h 252, tinta #18293E | **puros** (= referencia): #F9F9F9 · #EDEDED · #6B6B6B · #616161 · #262626 · oscuro #0A0A0A |
| Texto secundario / muted | sólidos azulados | tinta #262626 al 72 % / ~64 % resuelta a sólido (#616161 / #6B6B6B), ambos AA |
| Acento | cian (texto #006E8B) | cian como **única** nota de color; enlaces y keywords en cian; **+25 % de croma en pantallas P3** |
| Escalas alfa | — | `cyan-alpha-*`, `ink-alpha-*`, `white-alpha-*` (4…72) |
| Petróleo | banner, enlaces, botón secundario, sombras | **sólo** wordmark del logo |
| Botón secundario | petróleo | tinta (#262626) con texto blanco |
| Banner | petróleo | acento (`accent.solid` + blanco, 4.69:1) |
| Gran bloque de acento | — | **SignalBand** dentro de la rejilla (como la referencia, no full width), con filas separadoras arriba y abajo: fondo `accent.solid` #007E9E (cian vivo en P3) con **texto blanco** (4.69:1), cifras sobre `cyan.700` (5.83:1), botón blanco + botón contorno; arte de puntos sólo en los laterales con máscara hacia el centro |
| CTA final | banda oscura | clara y centrada con fuentes de puntos cian (patrón "Ready to build?") |
| Rejilla del hero | celdas teñidas de petróleo | celdas en tinta al 6 % (como la referencia) |
| Sombras | navy | negro neutro |
| Strings de código | verde | ámbar (contraste cálido con el cian) |

## Lo que mantenemos distinto a la referencia (a propósito)

- **AA en todo el texto.** La referencia pone blanco sobre naranja (3.16:1) y enlaces de 13px en naranja (≈3:1). Nosotros: botón `#007E9E` + blanco (4.69:1), texto de acento `cyan.700` (5.6:1), palabra de titular `cyan.600` (3.7:1, sólo ≥24px).
- En la SignalBand el texto es **blanco**: para cumplir AA el fondo es `#007E9E` (un paso más oscuro que el cian del logo #00AED9, que con blanco daría 2.6:1).

Informe de contraste completo: `tokens/contrast-report.md`. Comparativa visual: `docs/screenshots/compare-palette-v1-v2.png`.
