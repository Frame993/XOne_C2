---
name: xone-voz
description: Línea de comunicación de XOne (mensaje ASDD, Agent Self-Driven Development Platform). Úsalo antes de escribir o cambiar cualquier texto de la web (src/content/**, Home.tsx, menú, pie, páginas nuevas) y para auditar si una página sigue el mensaje nuevo o arrastra el antiguo («multiexperiencia», «70 %», MXDP…). Trigger: «revisa el copy», «audita el mensaje», «¿esto suena a XOne?», «escribe el texto de…», o cualquier contenido nuevo que mande el cliente.
---

# Voz XOne · mensaje ASDD

Fuente de verdad: `docs/vision-asdd.md` (documento de visión v1, nov-2026) y las 11 fichas de `docs/casos-de-uso/`. Si algo no está ahí ni en el contenido actual de la web, **no se escribe**: se marca `[PENDIENTE]` en `CONTENT_MAP.md`.

## 1. La idea
XOne es la plataforma donde **agentes de IA propios** entienden la operación de una empresa, construyen la solución que necesita, la ponen a trabajar en la calle y la mejoran con el uso, **mientras las personas deciden**.

- Ciclo: **Entender → Construir → Operar → Mejorar**, «en un ciclo que mueven los agentes y dirigen las personas».
- Piezas: **NappAI Voice escucha, NappAI piensa, XOne ejecuta y XOneCode construye y mejora.**
- Bucle cerrado en dos sentidos: de la conversación a la calle y de la calle a la conversación.
- Dos soluciones: **ASDD** (mensaje principal) y **XOne EMM** (la base, agrupa los productos anteriores). «Lo que ya funciona sigue funcionando, y ahora puede sumar agentes.»

## 2. Tono
Directo, de oficio, seguro sin arrogancia. Como habla un director de operaciones con otro. Frases cortas. Ejemplos concretos de campo (técnico, repartidor, avería, furgoneta, sin cobertura).

## 3. Vocabulario

| Usar | Evitar |
|---|---|
| Agentes de IA propios, XOneCode, NappAI, NappAI Voice | «Nuestra IA» sin nombre, «la IA» genérica |
| Low-code, solución a medida, en poco tiempo | Zero code, sin programar, en minutos |
| Los agentes proponen y ejecutan; la persona decide | Sin humanos, 100 % autónomo, piloto automático |
| Bucle cerrado, de la conversación a la calle | Revolución, disrupción, el futuro ya está aquí |
| Más de 20 años de experiencia | 25 años, Multiexperiencia, MXDP como mensaje |
| Operación de campo, técnicos, repartidores | Usuarios finales, recursos |

Reglas extra:
- **Sin cifras de resultados** (nada de «70 % menos», «85 %»). Las fichas dicen «No prometemos cifras antes de medir».
- **NappAI Voice**, nunca «NappAI Voz» (también en español).
- Nombre completo de la propuesta: **Agent Self-Driven Development Platform (ASDD)**; no se traduce en EN ni en ES (se puede glosar como «plataforma de desarrollo autodirigido por agentes»).
- El paso «Mejorar» se describe solo con lo que dice el documento (está pendiente de validar con producto).
- ES y EN dicen lo mismo; el EN es traducción, no otro mensaje.

## 4. Auditoría (cómo revisar una página o todo el sitio)
1. Barrido de términos:
   ```bash
   grep -rniE "multiexperiencia|multiexperience|mxdp|70 ?%|85 ?%|25 años|sin programar|zero code|en minutos|piloto automático|100 ?% autónom|revoluci|disrup|usuarios finales|nappai voz" src/content src/pages
   ```
2. Leer la página entera: ¿cuenta el mensaje ASDD o el antiguo («acelera el desarrollo de apps», «real native», «multiplataforma» como idea principal)?
3. Entregar una tabla: `ubicación (archivo:línea) | problema | propuesta | fuente de la propuesta`. La fuente es obligatoria (apartado del documento o ficha); sin fuente → `[PENDIENTE]`.
4. Aplicar solo lo que tiene fuente. Lo demás va a `CONTENT_MAP.md` como pregunta para el cliente.

## 5. Dónde vive el texto
- Home y textos globales: `src/content/site.es.ts`, `src/content/site.en.ts`.
- Páginas: `src/content/pages/*.ts` (ES + EN con la misma forma).
- Noticias: `src/content/news/` (históricas: no se reescriben, solo se señalan).
