// Casos de uso 01–04 · texto literal de las fichas del cliente (docs/casos-de-uso/), EN traducido.
// Las secciones interactivas (pestañas, conmutadores, móvil simulado) se pasan a estático con todos sus textos.
import { G, type Page, type PageDoc } from "./types";
import { usos, usoSlug, usoPdf, nextUsos, USOS_BASE } from "../usos";

const U = (slug: string) => usos.find((u) => u.slug === slug)!;
const crumb = { es: { label: "Casos de uso", slug: USOS_BASE }, en: { label: "Use cases", slug: USOS_BASE } };
const LABELS: [string, string, string, string] = ["NappAI Voice", "NappAI", "XOne", "XOneCode"];

/** Lo común a todas las fichas: grupo, miga, «sigue explorando», SEO y hero. */
const base = (slug: string, lang: "es" | "en", title: string, accent: string): Omit<PageDoc, "blocks"> => {
  const u = U(slug);
  return {
    group: G.usos,
    crumb: crumb[lang],
    related: nextUsos(slug, lang),
    relatedTitle: lang === "es" ? { title: "Otros casos", accent: "de uso" } : { title: "More", accent: "use cases" },
    seo: { title: `${u[lang].name} · ${lang === "es" ? "Caso de uso" : "Use case"} | XOne`, description: u[lang].lead },
    hero: { title, accent, lead: u[lang].lead, labels: LABELS, secondary: { label: lang === "es" ? "Descargar ficha PDF" : "Download PDF sheet", href: usoPdf(u) } },
  };
};

const S1 = "gestion-inteligente-de-avisos";
const S2 = "parte-por-voz-en-campo";
const S3 = "atencion-inmediata-de-siniestros";
const S4 = "recuperacion-de-entregas-fallidas";

export const usosA: Record<string, Page> = {
  /* ------------------------------------------------------------------ */
  /* 01 · Gestión inteligente de avisos                                  */
  /* ------------------------------------------------------------------ */
  [usoSlug(U(S1))]: {
    es: {
      ...base(S1, "es", "Gestión inteligente", "de avisos"),
      blocks: [
        { type: "intro", lead: U(S1).es.sector },
        {
          type: "cells", cols: 3, index: "El reto", eyebrow: "El reto", title: "Entre la llamada y el técnico,", accent: "demasiados pasos manuales",
          subtitle: "En la mayoría de servicios técnicos, el cuello de botella no está en la calle, sino en lo que ocurre antes de que el técnico salga.",
          items: [
            { label: "El reto", lead: "Picos de llamadas", text: "Cuando sube el volumen, los clientes esperan al teléfono y los operadores transcriben avisos a mano." },
            { label: "El reto", lead: "Coordinación manual", text: "Alguien tiene que entender la avería, mirar agendas, stock y rutas, y volver a llamar al cliente." },
            { label: "El reto", lead: "Visitas sin la pieza", text: "El técnico llega sin el repuesto adecuado o sin el historial del equipo, y hay que volver otro día." },
          ],
        },
        {
          type: "cells", cols: 4, index: "Cómo lo resolvemos", eyebrow: "Cómo lo resolvemos", title: "Un círculo completo,", accent: "de la llamada a la calle y de vuelta al cliente",
          subtitle: "Nuestras piezas trabajan como una sola solución: lo que se acuerda por teléfono se ejecuta en campo, y lo que pasa en campo vuelve al cliente.",
          items: [
            { label: "1 · NappAI Voice", lead: "Atiende el aviso", text: "Hace las preguntas de diagnóstico, descarta falsas alarmas y acuerda la franja horaria con el cliente." },
            { label: "2 · NappAI", lead: "Cruza los datos y decide", text: "Consulta el ERP, comprueba qué técnico tiene la pieza en la furgoneta y propone la asignación y la ruta." },
            { label: "3 · XOne", lead: "Ejecuta en campo", text: "El técnico recibe la orden con la ruta, el historial del equipo y la pieza confirmada, incluso sin cobertura." },
            { label: "4 · NappAI Voice", lead: "Cierra el círculo", text: "Cuando el técnico sale hacia el domicilio, el cliente recibe una llamada o un aviso automático." },
          ],
        },
        {
          type: "rows", index: "El cambio", eyebrow: "El cambio", title: "Lo que cambia", accent: "en tu operación",
          items: [
            { title: "Hoy", text: [], list: ["El aviso se apunta a mano y se reenvía", "Un coordinador cruza agendas, stock y rutas", "El cliente llama de nuevo para saber cuándo vienen", "El técnico descubre en casa del cliente lo que falta"] },
            { title: "Con la solución de XOne", text: [], list: ["El aviso entra con el diagnóstico hecho", "La asignación se propone con los datos de la empresa", "El cliente recibe el aviso de forma automática", "El técnico sale con la pieza y el historial"] },
          ],
        },
        {
          type: "rows", index: "Control", eyebrow: "Control", title: "La máquina propone.", accent: "Tu equipo decide.",
          subtitle: "La automatización se ocupa de lo rutinario y deja a las personas lo que de verdad necesita criterio.",
          items: [
            { title: "Lo que hace la solución", text: [], list: ["Atiende y diagnostica los avisos habituales", "Comprueba disponibilidad, stock y rutas", "Propone la asignación y avisa al cliente"] },
            { title: "Lo que decide tu equipo", text: [], list: ["El coordinador supervisa y resuelve las excepciones", "Cualquier llamada puede pasar a una persona, con el caso resumido", "Las reglas de asignación las define la empresa"] },
          ],
        },
        {
          type: "cells", cols: 4, index: "Nuestras piezas", eyebrow: "Nuestras piezas", title: "Cuatro piezas,", accent: "una sola solución",
          subtitle: "Cada empresa recibe la combinación que necesita, construida a la medida de su operación.",
          items: [
            { label: "Nuestras piezas", lead: "NappAI Voice", text: "Atiende y hace las llamadas, entiende la avería y actúa durante la conversación." },
            { label: "Nuestras piezas", lead: "NappAI", text: "Nuestro motor de IA: se conecta al ERP, aplica las reglas y orquesta los sistemas." },
            { label: "Nuestras piezas", lead: "XOne", text: "La app del técnico, con ruta, historial, fotos y firma, también sin cobertura." },
            { label: "Nuestras piezas", lead: "XOneCode", text: "Construye y adapta la solución a la operación de cada cliente en mucho menos tiempo." },
          ],
        },
        {
          type: "chips", cols: 3, index: "Para quién", eyebrow: "Para quién", title: "Pensado para operaciones", accent: "con técnicos en la calle",
          items: ["Servicio técnico", "Utilities: luz, gas y agua", "Telecomunicaciones", "Climatización", "Ascensores", "Seguridad"],
          text: "Quién lo impulsa: Dirección de operaciones o de servicio técnico. Con el área de sistemas como aliada para conectar la solución con el ERP y la centralita.",
        },
        {
          type: "cells", cols: 3, index: "Resultados", eyebrow: "Resultados", title: "Qué mediremos juntos", accent: "en tu piloto",
          subtitle: "No prometemos cifras antes de medir. Cada piloto define al empezar qué se mide y cómo, con datos de tu propia operación. El agente se identifica como asistente automático, avisa de la grabación y puede pasar la llamada a una persona en cualquier momento.",
          items: [
            { label: "Resultados", lead: "Tiempo del aviso a la asignación", text: "Cuánto tarda un aviso en llegar al técnico adecuado." },
            { label: "Resultados", lead: "Avisos resueltos sin intervención manual", text: "Qué parte de los avisos sigue el circuito completo." },
            { label: "Resultados", lead: "Visitas fallidas por falta de pieza", text: "Cuántas visitas hay que repetir por no llevar el repuesto." },
          ],
        },
      ],
    },
    en: {
      ...base(S1, "en", "Smart service request", "management"),
      blocks: [
        { type: "intro", lead: U(S1).en.sector },
        {
          type: "cells", cols: 3, index: "The challenge", eyebrow: "The challenge", title: "Between the call and the technician,", accent: "too many manual steps",
          subtitle: "In most technical services, the bottleneck is not on the street, but in what happens before the technician heads out.",
          items: [
            { label: "The challenge", lead: "Call peaks", text: "When volume rises, customers wait on the phone and operators transcribe requests by hand." },
            { label: "The challenge", lead: "Manual coordination", text: "Someone has to understand the fault, check schedules, stock and routes, and call the customer back." },
            { label: "The challenge", lead: "Visits without the part", text: "The technician arrives without the right spare part or without the equipment's history, and has to come back another day." },
          ],
        },
        {
          type: "cells", cols: 4, index: "How we solve it", eyebrow: "How we solve it", title: "A full circle,", accent: "from the call to the street and back to the customer",
          subtitle: "Our pieces work as a single solution: what is agreed over the phone is carried out in the field, and what happens in the field goes back to the customer.",
          items: [
            { label: "1 · NappAI Voice", lead: "Takes the request", text: "Asks the diagnostic questions, rules out false alarms and agrees the time slot with the customer." },
            { label: "2 · NappAI", lead: "Cross-checks the data and decides", text: "Checks the ERP, sees which technician has the part in the van and proposes the assignment and the route." },
            { label: "3 · XOne", lead: "Executes in the field", text: "The technician receives the order with the route, the equipment's history and the confirmed part, even without coverage." },
            { label: "4 · NappAI Voice", lead: "Closes the circle", text: "When the technician heads out to the customer's home, the customer gets a call or an automatic notice." },
          ],
        },
        {
          type: "rows", index: "The change", eyebrow: "The change", title: "What changes", accent: "in your operation",
          items: [
            { title: "Today", text: [], list: ["The request is noted down by hand and forwarded", "A coordinator cross-checks schedules, stock and routes", "The customer calls again to find out when they are coming", "The technician finds out at the customer's home what is missing"] },
            { title: "With the XOne solution", text: [], list: ["The request comes in with the diagnosis already done", "The assignment is proposed using the company's data", "The customer is notified automatically", "The technician heads out with the part and the history"] },
          ],
        },
        {
          type: "rows", index: "Control", eyebrow: "Control", title: "The machine proposes.", accent: "Your team decides.",
          subtitle: "Automation takes care of the routine and leaves to people what really needs judgement.",
          items: [
            { title: "What the solution does", text: [], list: ["Takes and diagnoses the usual requests", "Checks availability, stock and routes", "Proposes the assignment and notifies the customer"] },
            { title: "What your team decides", text: [], list: ["The coordinator supervises and resolves the exceptions", "Any call can be passed to a person, with the case summarized", "The company defines the assignment rules"] },
          ],
        },
        {
          type: "cells", cols: 4, index: "Our pieces", eyebrow: "Our pieces", title: "Four pieces,", accent: "a single solution",
          subtitle: "Each company gets the combination it needs, built to fit its operation.",
          items: [
            { label: "Our pieces", lead: "NappAI Voice", text: "Takes and makes calls, understands the fault and acts during the conversation." },
            { label: "Our pieces", lead: "NappAI", text: "Our AI engine: it connects to the ERP, applies the rules and orchestrates the systems." },
            { label: "Our pieces", lead: "XOne", text: "The technician's app, with route, history, photos and signature, also without coverage." },
            { label: "Our pieces", lead: "XOneCode", text: "Builds and adapts the solution to each customer's operation in much less time." },
          ],
        },
        {
          type: "chips", cols: 3, index: "Who it's for", eyebrow: "Who it's for", title: "Designed for operations", accent: "with technicians on the street",
          items: ["Technical service", "Utilities: electricity, gas and water", "Telecommunications", "HVAC", "Lifts", "Security"],
          text: "Who drives it: Operations or technical service management. With the IT department as an ally to connect the solution to the ERP and the switchboard.",
        },
        {
          type: "cells", cols: 3, index: "Results", eyebrow: "Results", title: "What we will measure together", accent: "in your pilot",
          subtitle: "We don't promise figures before measuring. Each pilot defines at the start what is measured and how, with data from your own operation. The agent identifies itself as an automated assistant, warns that the call is recorded and can pass the call to a person at any time.",
          items: [
            { label: "Results", lead: "Time from request to assignment", text: "How long a request takes to reach the right technician." },
            { label: "Results", lead: "Requests resolved without manual intervention", text: "What share of requests goes through the full circuit." },
            { label: "Results", lead: "Failed visits due to a missing part", text: "How many visits have to be repeated because the spare part wasn't on board." },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  /* 02 · Parte por voz en campo                                         */
  /* ------------------------------------------------------------------ */
  [usoSlug(U(S2))]: {
    es: {
      ...base(S2, "es", "Parte por voz", "en campo"),
      blocks: [
        { type: "intro", lead: U(S2).es.sector, text: ["Con guantes, en altura o junto a una máquina en marcha, teclear es lento y poco seguro. Por eso los partes acaban haciéndose al final del día, de memoria."] },
        {
          type: "rows", index: "Pruébalo con una frase", eyebrow: "Pruébalo con una frase", title: "Una frase dicha en voz alta.", accent: "Un parte completo.",
          items: [
            { title: "Mantenimiento industrial", text: ["El técnico dice: «Cambiada válvula de presión, lote 402, queda operativa»", "La solución entiende. Acción: Sustitución de pieza · Pieza: Válvula de presión · Lote: 402 · Estado del equipo: Operativo", "Y lo hace sola:"], list: ["Pieza descontada del inventario", "Parte generado y comprobado", "Foto de comprobación y firma"] },
            { title: "Inspección de calidad", text: ["El técnico dice: «Lote 118 revisado, tres cajas con golpes, el resto conforme»", "La solución entiende. Inspección: Control de lote · Lote: 118 · Incidencia: Tres cajas con golpes · Resultado: Conforme con incidencia", "Y lo hace sola:"], list: ["Incidencia registrada con trazabilidad", "Aviso al responsable de calidad", "Foto de las cajas afectadas"] },
            { title: "Almacén y logística", text: ["El técnico dice: «Pedido 5531 preparado, falta una unidad de la referencia A20»", "La solución entiende. Pedido: 5531 · Estado: Preparado parcialmente · Referencia: A20 · Faltante: Una unidad", "Y lo hace sola:"], list: ["Stock actualizado en el sistema", "Aviso a compras o reposición", "Confirmación del preparador"] },
          ],
        },
        {
          type: "cells", cols: 4, index: "Cómo funciona", eyebrow: "Cómo funciona", title: "Cuatro pasos,", accent: "sin soltar la herramienta",
          items: [
            { label: "01 · Técnico", lead: "Habla", text: "El técnico cuenta lo que ha hecho, con naturalidad y sin soltar la herramienta." },
            { label: "02 · NappAI Voice", lead: "Entiende", text: "NappAI Voice convierte la voz en texto y separa la voz del técnico del ruido de alrededor." },
            { label: "03 · NappAI", lead: "Completa", text: "NappAI extrae los datos, rellena el parte, descuenta la pieza y comprueba que cumple los requisitos." },
            { label: "04 · XOne", lead: "Confirma", text: "XOne enseña el resumen, pide la foto y la firma, y lo sincroniza aunque no haya cobertura." },
          ],
        },
        {
          type: "cells", cols: 4, index: "Un día de trabajo", eyebrow: "Un día de trabajo", title: "El mismo día,", accent: "de dos maneras",
          items: [
            { label: "8:00", lead: "Recoge las órdenes", text: "Revisa en la app lo que tiene que hacer." },
            { label: "10:30", lead: "Termina una reparación", text: "Con teclado: apunta en un papel la pieza y el lote para pasarlo después.", more: ["Con voz: dicta lo que ha hecho y el parte se rellena solo."] },
            { label: "13:00", lead: "Necesita una pieza", text: "Con teclado: no sabe si queda en el almacén hasta que llama.", more: ["Con voz: el inventario ya está al día con lo que se usó por la mañana."] },
            { label: "18:00", lead: "Cierra la jornada", text: "Con teclado: pasa todos los partes de memoria antes de irse.", more: ["Con voz: no queda nada pendiente: todo se cerró en el momento."] },
          ],
        },
        {
          type: "rows", index: "Control", eyebrow: "Control", title: "La solución escucha.", accent: "El técnico confirma.",
          items: [
            { title: "Lo que hace la solución", text: [], list: ["Transcribe lo que dice el técnico y extrae los datos", "Rellena el parte y descuenta la pieza del inventario", "Comprueba que el parte cumple los requisitos"] },
            { title: "Lo que decide el técnico", text: [], list: ["Revisa el resumen en pantalla y lo corrige si hace falta", "Confirma antes de cerrar, con la foto y la firma", "La empresa define qué datos son obligatorios"] },
          ],
        },
        {
          type: "cells", cols: 4, index: "Nuestras piezas", eyebrow: "Nuestras piezas", title: "Aquí, XOne lleva", accent: "la voz cantante",
          subtitle: "Es el caso más cercano al trabajo diario en campo: la app del técnico, ahora con voz.",
          items: [
            { label: "Protagonista", lead: "XOne", text: "La app del técnico: resumen del parte, foto, firma y sincronización aunque no haya cobertura." },
            { label: "Nuestras piezas", lead: "NappAI Voice", text: "Convierte la voz en texto y separa la voz del técnico del ruido de alrededor." },
            { label: "Nuestras piezas", lead: "NappAI", text: "Extrae los datos, rellena el parte, actualiza el inventario y valida los requisitos." },
            { label: "Nuestras piezas", lead: "XOneCode", text: "Adapta el formulario y las reglas de cada empresa en mucho menos tiempo." },
          ],
        },
        {
          type: "cells", cols: 4, index: "Para quién", eyebrow: "Para quién", title: "Para quien trabaja", accent: "con las manos ocupadas",
          subtitle: "Lo impulsa la dirección de operaciones o de mantenimiento, con sistemas como aliado para conectar el inventario y el ERP.",
          items: [
            { label: "Para quién", lead: "Mantenimiento industrial", text: "«Cambiado el rodamiento del motor 3, sin vibraciones.»" },
            { label: "Para quién", lead: "Inspección de calidad", text: "«Lote revisado, etiquetado correcto, dos unidades apartadas.»" },
            { label: "Para quién", lead: "Logística y almacén", text: "«Ubicación B4 vacía, repongo con el palé de entrada.»" },
            { label: "Para quién", lead: "Atención domiciliaria", text: "«Visita hecha, todo en orden, próxima el jueves.»" },
          ],
        },
        {
          type: "cells", cols: 3, index: "Resultados", eyebrow: "Resultados", title: "Qué mediremos juntos", accent: "en tu piloto",
          subtitle: "No prometemos cifras antes de medir: lo comprobamos con datos de tu propia operación. Cada planta suena distinto. Por eso validamos el dictado en tu entorno real antes de comprometer nada, y el técnico siempre puede revisar y corregir el texto antes de cerrar.",
          items: [
            { label: "Resultados", lead: "Tiempo de cierre de cada parte", text: "Desde que termina el trabajo hasta que el parte queda cerrado." },
            { label: "Resultados", lead: "Partes incompletos o con errores", text: "Cuántos partes hay que corregir o completar después." },
            { label: "Resultados", lead: "Tiempo administrativo al final del día", text: "Lo que dedica el técnico a pasar partes fuera del trabajo." },
          ],
        },
      ],
    },
    en: {
      ...base(S2, "en", "Voice work reports", "in the field"),
      blocks: [
        { type: "intro", lead: U(S2).en.sector, text: ["Wearing gloves, working at height or next to a running machine, typing is slow and unsafe. That's why reports end up being written at the end of the day, from memory."] },
        {
          type: "rows", index: "Try it with one sentence", eyebrow: "Try it with one sentence", title: "One sentence said out loud.", accent: "One complete report.",
          items: [
            { title: "Industrial maintenance", text: ["The technician says: “Pressure valve replaced, batch 402, back in operation”", "The solution understands. Action: Part replacement · Part: Pressure valve · Batch: 402 · Equipment status: Operational", "And does it on its own:"], list: ["Part deducted from inventory", "Report generated and checked", "Verification photo and signature"] },
            { title: "Quality inspection", text: ["The technician says: “Batch 118 checked, three boxes dented, the rest compliant”", "The solution understands. Inspection: Batch control · Batch: 118 · Issue: Three dented boxes · Result: Compliant with issue", "And does it on its own:"], list: ["Issue logged with traceability", "Alert to the quality manager", "Photo of the affected boxes"] },
            { title: "Warehouse and logistics", text: ["The technician says: “Order 5531 picked, one unit of item A20 missing”", "The solution understands. Order: 5531 · Status: Partially picked · Item: A20 · Missing: One unit", "And does it on its own:"], list: ["Stock updated in the system", "Alert to purchasing or replenishment", "Picker's confirmation"] },
          ],
        },
        {
          type: "cells", cols: 4, index: "How it works", eyebrow: "How it works", title: "Four steps,", accent: "without putting the tool down",
          items: [
            { label: "01 · Technician", lead: "Speaks", text: "The technician says what they have done, naturally and without putting the tool down." },
            { label: "02 · NappAI Voice", lead: "Understands", text: "NappAI Voice turns speech into text and separates the technician's voice from the surrounding noise." },
            { label: "03 · NappAI", lead: "Completes", text: "NappAI extracts the data, fills in the report, deducts the part and checks that it meets the requirements." },
            { label: "04 · XOne", lead: "Confirms", text: "XOne shows the summary, asks for the photo and the signature, and syncs it even when there's no coverage." },
          ],
        },
        {
          type: "cells", cols: 4, index: "A working day", eyebrow: "A working day", title: "The same day,", accent: "two ways",
          items: [
            { label: "8:00", lead: "Picks up the orders", text: "Checks in the app what they have to do." },
            { label: "10:30", lead: "Finishes a repair", text: "With a keyboard: writes the part and batch on paper to enter later.", more: ["With voice: dictates what they have done and the report fills itself in."] },
            { label: "13:00", lead: "Needs a part", text: "With a keyboard: doesn't know if there's any left in the warehouse until they call.", more: ["With voice: the inventory is already up to date with what was used in the morning."] },
            { label: "18:00", lead: "Wraps up the day", text: "With a keyboard: enters all the reports from memory before leaving.", more: ["With voice: nothing is left pending: everything was closed on the spot."] },
          ],
        },
        {
          type: "rows", index: "Control", eyebrow: "Control", title: "The solution listens.", accent: "The technician confirms.",
          items: [
            { title: "What the solution does", text: [], list: ["Transcribes what the technician says and extracts the data", "Fills in the report and deducts the part from inventory", "Checks that the report meets the requirements"] },
            { title: "What the technician decides", text: [], list: ["Reviews the on-screen summary and corrects it if needed", "Confirms before closing, with the photo and the signature", "The company defines which data are mandatory"] },
          ],
        },
        {
          type: "cells", cols: 4, index: "Our pieces", eyebrow: "Our pieces", title: "Here, XOne", accent: "takes the lead",
          subtitle: "It's the case closest to everyday field work: the technician's app, now with voice.",
          items: [
            { label: "Lead role", lead: "XOne", text: "The technician's app: report summary, photo, signature and sync even when there's no coverage." },
            { label: "Our pieces", lead: "NappAI Voice", text: "Turns speech into text and separates the technician's voice from the surrounding noise." },
            { label: "Our pieces", lead: "NappAI", text: "Extracts the data, fills in the report, updates the inventory and validates the requirements." },
            { label: "Our pieces", lead: "XOneCode", text: "Adapts each company's form and rules in much less time." },
          ],
        },
        {
          type: "cells", cols: 4, index: "Who it's for", eyebrow: "Who it's for", title: "For people who work", accent: "with their hands full",
          subtitle: "Driven by operations or maintenance management, with IT as an ally to connect the inventory and the ERP.",
          items: [
            { label: "Who it's for", lead: "Industrial maintenance", text: "“Motor 3 bearing replaced, no vibration.”" },
            { label: "Who it's for", lead: "Quality inspection", text: "“Batch checked, labelling correct, two units set aside.”" },
            { label: "Who it's for", lead: "Logistics and warehouse", text: "“Location B4 empty, restocking with the incoming pallet.”" },
            { label: "Who it's for", lead: "Home care", text: "“Visit done, all in order, next one on Thursday.”" },
          ],
        },
        {
          type: "cells", cols: 3, index: "Results", eyebrow: "Results", title: "What we will measure together", accent: "in your pilot",
          subtitle: "We don't promise figures before measuring: we check it with data from your own operation. Every plant sounds different. That's why we validate dictation in your real environment before committing to anything, and the technician can always review and correct the text before closing.",
          items: [
            { label: "Results", lead: "Time to close each report", text: "From the moment the job is finished until the report is closed." },
            { label: "Results", lead: "Incomplete or incorrect reports", text: "How many reports have to be corrected or completed afterwards." },
            { label: "Results", lead: "Admin time at the end of the day", text: "The time the technician spends entering reports outside the job." },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  /* 03 · Atención inmediata de siniestros                               */
  /* ------------------------------------------------------------------ */
  [usoSlug(U(S3))]: {
    es: {
      ...base(S3, "es", "Atención inmediata", "de siniestros"),
      blocks: [
        { type: "intro", lead: U(S3).es.sector },
        {
          type: "cells", cols: 4, index: "Dos miradas, un mismo caso", eyebrow: "Dos miradas, un mismo caso", title: "Mientras tu cliente se tranquiliza,", accent: "todo se pone en marcha",
          subtitle: "La misma llamada, vista desde los dos lados: lo que vive el asegurado y lo que hace la solución por dentro.",
          items: [
            { label: "01 · Atiende", lead: "Al instante, también en picos de llamadas.", text: "Lo que vive tu cliente: le atienden al momento, sin esperas, con un trato tranquilo y claro.", more: ["Lo que ocurre por dentro: NappAI Voice identifica al asegurado, le localiza y abre el expediente."] },
            { label: "02 · Recoge", lead: "Ubicación y fotos del daño por WhatsApp.", text: "Lo que vive tu cliente: envía las fotos desde su móvil, guiado por el agente paso a paso.", more: ["Lo que ocurre por dentro: NappAI ordena la información, consulta la póliza y propone una primera clasificación."] },
            { label: "03 · Valida", lead: "Una persona confirma la cobertura.", text: "Lo que vive tu cliente: recibe la confirmación de que su caso está en marcha.", more: ["Lo que ocurre por dentro: una persona del equipo revisa la propuesta y valida la cobertura."] },
            { label: "04 · Envía", lead: "El proveedor sale con toda la información.", text: "Lo que vive tu cliente: sabe quién va a ayudarle y le avisan cuando está cerca.", more: ["Lo que ocurre por dentro: XOne envía el servicio al gruista, cristalero o reparador, con fotos y ubicación."] },
          ],
        },
        {
          type: "chips", cols: 3, index: "Cuando más falta hace", eyebrow: "Cuando más falta hace", title: "Los picos de siniestros", accent: "no avisan",
          subtitle: "Un temporal o una operación salida multiplican las llamadas de golpe. La atención inmediata absorbe esos picos sin que nadie se quede esperando al teléfono.",
          items: ["Temporales y episodios de granizo", "Operaciones salida y puentes", "Noches y fines de semana"],
        },
        {
          type: "rows", index: "Control", eyebrow: "Control", title: "Rapidez en lo rutinario,", accent: "criterio en lo importante",
          items: [
            { title: "La cobertura la valida siempre una persona", text: ["La solución acelera todo lo demás: atiende, recoge, ordena y envía. Las decisiones con efecto sobre el asegurado se quedan en tu equipo."] },
            { title: "Lo que hace la solución", text: [], list: ["Atiende y localiza al asegurado", "Recoge las fotos y los datos del siniestro", "Propone clasificación y proveedor", "Envía el servicio y avisa al cliente"] },
            { title: "Lo que decide tu equipo", text: [], list: ["Valida la cobertura", "Valora el daño en los casos que lo requieren", "Atiende a quien pide hablar con una persona", "Define proveedores y reglas"] },
          ],
        },
        {
          type: "cells", cols: 4, index: "Nuestras piezas", eyebrow: "Nuestras piezas", title: "Una cadena", accent: "sin eslabones sueltos",
          subtitle: "Cada pieza recoge el trabajo de la anterior. El resultado es un solo flujo, de la llamada al proveedor.",
          items: [
            { label: "Atiende", lead: "NappAI Voice", text: "Responde al momento, localiza al asegurado y le guía para enviar las fotos." },
            { label: "Revisa", lead: "NappAI", text: "Consulta la póliza, ordena la información y propone clasificación y proveedor." },
            { label: "Ejecuta", lead: "XOne", text: "El proveedor recibe el servicio con ubicación, fotos y datos del cliente." },
            { label: "Adapta", lead: "XOneCode", text: "Ajusta flujos y pantallas a las coberturas y proveedores de cada compañía." },
          ],
        },
        {
          type: "rows", index: "Preguntas frecuentes", eyebrow: "Preguntas frecuentes", title: "Lo que nos preguntan", accent: "las compañías",
          items: [
            { title: "¿Y si el cliente prefiere hablar con una persona?", text: ["Puede pedirlo en cualquier momento. El agente le pasa la llamada a una persona del equipo con el caso ya resumido, para que no tenga que repetir nada."] },
            { title: "¿Quién decide la cobertura?", text: ["Siempre una persona. La solución recoge la información y propone una clasificación, pero la validación de la cobertura y la valoración del daño las hace tu equipo."] },
            { title: "¿El cliente tiene que instalar algo?", text: ["No. El agente le guía para enviar las fotos desde su móvil por WhatsApp."] },
            { title: "¿Se conecta con nuestros sistemas?", text: ["Sí. NappAI se integra con el sistema de pólizas y de gestión de proveedores de cada compañía, y puede instalarse en su propia infraestructura."] },
          ],
        },
        {
          type: "chips", cols: 3, index: "Para quién", eyebrow: "Para quién", title: "Para quien atiende a sus clientes", accent: "en su peor momento",
          items: ["Aseguradoras", "Asistencia en carretera", "Asistencia en el hogar", "Reparación de lunas", "Renting y flotas"],
          text: "Quién lo impulsa: Dirección de siniestros o de experiencia de cliente. Con sistemas como aliado para conectar pólizas, proveedores y centralita.",
        },
        {
          type: "cells", cols: 3, index: "Resultados", eyebrow: "Resultados", title: "Qué mediremos juntos", accent: "en tu piloto",
          subtitle: "No prometemos cifras antes de medir. Cada piloto define al empezar qué se mide y cómo. El agente se identifica como asistente automático, avisa de la grabación y puede pasar la llamada a una persona en cualquier momento.",
          items: [
            { label: "Resultados", lead: "Tiempo de espera en los picos", text: "Cuánto espera un asegurado hasta ser atendido cuando suben las llamadas." },
            { label: "Resultados", lead: "Tiempo hasta la salida del proveedor", text: "Desde la llamada hasta que el profesional está en camino." },
            { label: "Resultados", lead: "Servicios resueltos en la primera visita", text: "Cuántos se cierran sin volver, gracias a la información previa." },
          ],
        },
      ],
    },
    en: {
      ...base(S3, "en", "Immediate", "claims handling"),
      blocks: [
        { type: "intro", lead: U(S3).en.sector },
        {
          type: "cells", cols: 4, index: "Two views, one case", eyebrow: "Two views, one case", title: "While your customer calms down,", accent: "everything gets moving",
          subtitle: "The same call, seen from both sides: what the policyholder experiences and what the solution does behind the scenes.",
          items: [
            { label: "01 · Answers", lead: "Instantly, even at call peaks.", text: "What your customer experiences: they are answered at once, with no waiting, in a calm and clear way.", more: ["What happens behind the scenes: NappAI Voice identifies the policyholder, locates them and opens the claim file."] },
            { label: "02 · Collects", lead: "Location and photos of the damage via WhatsApp.", text: "What your customer experiences: they send the photos from their phone, guided step by step by the agent.", more: ["What happens behind the scenes: NappAI organizes the information, checks the policy and proposes an initial classification."] },
            { label: "03 · Validates", lead: "A person confirms the coverage.", text: "What your customer experiences: they get confirmation that their case is under way.", more: ["What happens behind the scenes: a team member reviews the proposal and validates the coverage."] },
            { label: "04 · Dispatches", lead: "The provider heads out with all the information.", text: "What your customer experiences: they know who is going to help them and are notified when help is close.", more: ["What happens behind the scenes: XOne sends the job to the tow truck driver, glazier or repairer, with photos and location."] },
          ],
        },
        {
          type: "chips", cols: 3, index: "When it's needed most", eyebrow: "When it's needed most", title: "Claim peaks", accent: "come without warning",
          subtitle: "A storm or a holiday getaway rush multiplies calls all at once. Immediate handling absorbs those peaks without anyone left waiting on the phone.",
          items: ["Storms and hail episodes", "Holiday getaways and long weekends", "Nights and weekends"],
        },
        {
          type: "rows", index: "Control", eyebrow: "Control", title: "Speed on the routine,", accent: "judgement on what matters",
          items: [
            { title: "Coverage is always validated by a person", text: ["The solution speeds up everything else: it answers, collects, organizes and dispatches. Decisions that affect the policyholder stay with your team."] },
            { title: "What the solution does", text: [], list: ["Answers and locates the policyholder", "Collects the photos and the claim details", "Proposes classification and provider", "Dispatches the job and notifies the customer"] },
            { title: "What your team decides", text: [], list: ["Validates the coverage", "Assesses the damage in the cases that require it", "Takes care of anyone who asks to speak to a person", "Defines providers and rules"] },
          ],
        },
        {
          type: "cells", cols: 4, index: "Our pieces", eyebrow: "Our pieces", title: "A chain", accent: "with no loose links",
          subtitle: "Each piece picks up the work of the one before. The result is a single flow, from the call to the provider.",
          items: [
            { label: "Answers", lead: "NappAI Voice", text: "Responds at once, locates the policyholder and guides them to send the photos." },
            { label: "Reviews", lead: "NappAI", text: "Checks the policy, organizes the information and proposes classification and provider." },
            { label: "Executes", lead: "XOne", text: "The provider receives the job with location, photos and customer details." },
            { label: "Adapts", lead: "XOneCode", text: "Tailors flows and screens to each company's coverages and providers." },
          ],
        },
        {
          type: "rows", index: "FAQ", eyebrow: "FAQ", title: "What insurers", accent: "ask us",
          items: [
            { title: "What if the customer prefers to speak to a person?", text: ["They can ask at any time. The agent passes the call to a team member with the case already summarized, so they don't have to repeat anything."] },
            { title: "Who decides on coverage?", text: ["Always a person. The solution collects the information and proposes a classification, but coverage validation and damage assessment are done by your team."] },
            { title: "Does the customer have to install anything?", text: ["No. The agent guides them to send the photos from their phone via WhatsApp."] },
            { title: "Does it connect to our systems?", text: ["Yes. NappAI integrates with each company's policy and provider management systems, and can be installed on its own infrastructure."] },
          ],
        },
        {
          type: "chips", cols: 3, index: "Who it's for", eyebrow: "Who it's for", title: "For those who look after their customers", accent: "at their worst moment",
          items: ["Insurers", "Roadside assistance", "Home assistance", "Windscreen repair", "Renting and fleets"],
          text: "Who drives it: Claims or customer experience management. With IT as an ally to connect policies, providers and the switchboard.",
        },
        {
          type: "cells", cols: 3, index: "Results", eyebrow: "Results", title: "What we will measure together", accent: "in your pilot",
          subtitle: "We don't promise figures before measuring. Each pilot defines at the start what is measured and how. The agent identifies itself as an automated assistant, warns that the call is recorded and can pass the call to a person at any time.",
          items: [
            { label: "Results", lead: "Waiting time at peaks", text: "How long a policyholder waits to be answered when calls go up." },
            { label: "Results", lead: "Time until the provider heads out", text: "From the call until the professional is on the way." },
            { label: "Results", lead: "Jobs resolved on the first visit", text: "How many are closed without coming back, thanks to the information gathered beforehand." },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  /* 04 · Recuperación de entregas fallidas                              */
  /* ------------------------------------------------------------------ */
  [usoSlug(U(S4))]: {
    es: {
      ...base(S4, "es", "Recuperación de", "entregas fallidas"),
      blocks: [
        { type: "intro", lead: U(S4).es.sector },
        {
          type: "cells", cols: 4, index: "El bucle al revés", eyebrow: "El bucle al revés", title: "Aquí no empieza una llamada:", accent: "empieza la calle",
          subtitle: "En la mayoría de soluciones de voz, todo arranca cuando alguien llama. En este caso es al revés: un hecho en la calle dispara la conversación, y la conversación vuelve a la calle convertida en una instrucción.",
          items: [
            { label: "1 · XOne", lead: "XOne detecta", text: "El repartidor marca que nadie abre la puerta." },
            { label: "2 · NappAI", lead: "NappAI decide", text: "Comprueba el envío y las alternativas autorizadas para esa dirección." },
            { label: "3 · NappAI Voice", lead: "NappAI Voice llama", text: "Habla con el destinatario y recoge su decisión." },
            { label: "4 · XOne", lead: "XOne ejecuta", text: "La app guía al repartidor hacia la nueva entrega." },
          ],
        },
        {
          type: "cells", cols: 3, index: "En tres escenas", eyebrow: "En tres escenas", title: "Lo que pasa en la puerta,", accent: "paso a paso",
          items: [
            { label: "Escena 1", lead: "El timbre no responde", text: "El repartidor llama a la puerta y no hay nadie. En lugar de dejar un aviso de ausencia, pulsa un botón en su app XOne." },
            { label: "Escena 2", lead: "El destinatario decide", text: "NappAI Voice le llama al momento, se identifica como asistente automático y le ofrece las alternativas que la empresa ha autorizado." },
            { label: "Escena 3", lead: "La entrega se resuelve", text: "La app del repartidor cambia sola a la opción elegida, recoge la firma de quien recibe y queda registrada la autorización del destinatario." },
          ],
        },
        {
          type: "rows", index: "Ponte en su lugar", eyebrow: "Ponte en su lugar", title: "Elige como destinatario", accent: "y mira la app del repartidor",
          subtitle: "Cada opción que autoriza la empresa cambia al momento lo que tiene que hacer el repartidor.",
          items: [
            { title: "En portería", text: ["«Perfecto, lo dejamos en la portería de su edificio.»", "Entregar en portería. Recoger la firma de quien recibe en portería."] },
            { title: "Con un vecino", text: ["«De acuerdo, lo dejamos con su vecino del segundo B.»", "Entregar al vecino del 2.º B. Confirmar el nombre y recoger su firma."] },
            { title: "Punto de recogida", text: ["«Le dejamos el envío en el punto de recogida de su calle.»", "Llevar al punto de recogida. El envío queda disponible en el punto más cercano."] },
            { title: "Otro día", text: ["«Sin problema, se lo llevamos el día que nos ha indicado.»", "Reprogramar la entrega. La nueva fecha entra en la ruta del día elegido."] },
          ],
        },
        {
          type: "cells", cols: 3, index: "Control", eyebrow: "Control", title: "Tres niveles de decisión,", accent: "cada uno en su sitio",
          items: [
            { label: "Reglas", lead: "La empresa define las opciones", text: "Solo se ofrecen las alternativas autorizadas para cada tipo de envío y dirección." },
            { label: "Decisión", lead: "El destinatario decide", text: "Elige entre esas opciones. Si no contesta, se sigue el procedimiento habitual." },
            { label: "Ejecución", lead: "El repartidor ejecuta", text: "Recibe la instrucción en su app y recoge la firma de quien recibe." },
          ],
        },
        {
          type: "cells", cols: 4, index: "Nuestras piezas", eyebrow: "Nuestras piezas", title: "Cuatro piezas para no volver", accent: "a la misma puerta",
          items: [
            { label: "Nuestras piezas", lead: "XOne", text: "Detecta la ausencia con un botón y guía al repartidor hacia la nueva entrega con firma." },
            { label: "Nuestras piezas", lead: "NappAI Voice", text: "Llama al destinatario, se identifica, ofrece alternativas y graba su autorización." },
            { label: "Nuestras piezas", lead: "NappAI", text: "Comprueba el envío, decide qué opciones ofrecer y actualiza el punto de entrega." },
            { label: "Nuestras piezas", lead: "XOneCode", text: "Adapta el flujo a cada tipo de envío, cliente y procedimiento de la empresa." },
          ],
        },
        {
          type: "cells", cols: 4, index: "Para quién", eyebrow: "Para quién", title: "Para quien reparte", accent: "a domicilio cada día",
          subtitle: "Lo impulsa la dirección de operaciones o de logística, con sistemas como aliado para conectar envíos y rutas.",
          items: [
            { label: "Para quién", lead: "Paquetería y mensajería", text: "Menos segundas entregas y menos avisos de ausencia." },
            { label: "Para quién", lead: "Operadores de última milla", text: "Rutas que se cierran en la primera visita." },
            { label: "Para quién", lead: "Comercio electrónico con reparto propio", text: "Una experiencia de entrega cuidada hasta el final." },
            { label: "Para quién", lead: "Reparto y servicios a domicilio", text: "Productos que necesitan una entrega en persona." },
          ],
        },
        {
          type: "cells", cols: 3, index: "Resultados", eyebrow: "Resultados", title: "Qué mediremos juntos", accent: "en tu piloto",
          subtitle: "No prometemos cifras antes de medir. Cada piloto define al empezar qué se mide y cómo. El agente se identifica como asistente automático, solo ofrece las opciones autorizadas por la empresa, deja grabada la decisión del destinatario y puede pasar la llamada a una persona.",
          items: [
            { label: "Resultados", lead: "Entregas fallidas", text: "Cuántas visitas terminan sin entregar el envío." },
            { label: "Resultados", lead: "Segundas entregas evitadas", text: "Cuántas veces no hace falta volver a la misma puerta." },
            { label: "Resultados", lead: "Tiempo por parada", text: "Lo que dura cada parada cuando no hay nadie en casa." },
          ],
        },
      ],
    },
    en: {
      ...base(S4, "en", "Failed delivery", "recovery"),
      blocks: [
        { type: "intro", lead: U(S4).en.sector },
        {
          type: "cells", cols: 4, index: "The loop in reverse", eyebrow: "The loop in reverse", title: "Here it doesn't start with a call:", accent: "it starts on the street",
          subtitle: "In most voice solutions, everything starts when someone calls. In this case it's the other way round: an event on the street triggers the conversation, and the conversation goes back to the street as an instruction.",
          items: [
            { label: "1 · XOne", lead: "XOne detects", text: "The driver flags that nobody is opening the door." },
            { label: "2 · NappAI", lead: "NappAI decides", text: "Checks the parcel and the alternatives authorized for that address." },
            { label: "3 · NappAI Voice", lead: "NappAI Voice calls", text: "Talks to the recipient and records their decision." },
            { label: "4 · XOne", lead: "XOne executes", text: "The app guides the driver to the new delivery." },
          ],
        },
        {
          type: "cells", cols: 3, index: "In three scenes", eyebrow: "In three scenes", title: "What happens at the door,", accent: "step by step",
          items: [
            { label: "Scene 1", lead: "Nobody answers the bell", text: "The driver knocks and nobody is home. Instead of leaving a missed-delivery card, they press a button in their XOne app." },
            { label: "Scene 2", lead: "The recipient decides", text: "NappAI Voice calls them right away, identifies itself as an automated assistant and offers the alternatives the company has authorized." },
            { label: "Scene 3", lead: "The delivery is resolved", text: "The driver's app switches on its own to the chosen option, collects the signature of whoever receives it and the recipient's authorization is recorded." },
          ],
        },
        {
          type: "rows", index: "Put yourself in their shoes", eyebrow: "Put yourself in their shoes", title: "Choose as the recipient", accent: "and watch the driver's app",
          subtitle: "Each option the company authorizes instantly changes what the driver has to do.",
          items: [
            { title: "With the concierge", text: ["“Perfect, we'll leave it with your building's concierge.”", "Deliver to the concierge. Collect the signature of whoever receives it at the concierge desk."] },
            { title: "With a neighbour", text: ["“All right, we'll leave it with your neighbour in 2B.”", "Deliver to the neighbour in 2B. Confirm their name and collect their signature."] },
            { title: "Pickup point", text: ["“We'll leave your parcel at the pickup point on your street.”", "Take to the pickup point. The parcel is available at the nearest point."] },
            { title: "Another day", text: ["“No problem, we'll bring it on the day you told us.”", "Reschedule the delivery. The new date goes into the route for the chosen day."] },
          ],
        },
        {
          type: "cells", cols: 3, index: "Control", eyebrow: "Control", title: "Three levels of decision,", accent: "each in its place",
          items: [
            { label: "Rules", lead: "The company defines the options", text: "Only the alternatives authorized for each type of parcel and address are offered." },
            { label: "Decision", lead: "The recipient decides", text: "They choose among those options. If they don't answer, the usual procedure is followed." },
            { label: "Execution", lead: "The driver executes", text: "They receive the instruction in their app and collect the signature of whoever receives it." },
          ],
        },
        {
          type: "cells", cols: 4, index: "Our pieces", eyebrow: "Our pieces", title: "Four pieces so you never go back", accent: "to the same door",
          items: [
            { label: "Our pieces", lead: "XOne", text: "Detects the absence with a button and guides the driver to the new delivery with signature." },
            { label: "Our pieces", lead: "NappAI Voice", text: "Calls the recipient, identifies itself, offers alternatives and records their authorization." },
            { label: "Our pieces", lead: "NappAI", text: "Checks the parcel, decides which options to offer and updates the delivery point." },
            { label: "Our pieces", lead: "XOneCode", text: "Adapts the flow to each type of parcel, customer and company procedure." },
          ],
        },
        {
          type: "cells", cols: 4, index: "Who it's for", eyebrow: "Who it's for", title: "For those who deliver", accent: "to homes every day",
          subtitle: "Driven by operations or logistics management, with IT as an ally to connect parcels and routes.",
          items: [
            { label: "Who it's for", lead: "Parcel and courier services", text: "Fewer second deliveries and fewer missed-delivery cards." },
            { label: "Who it's for", lead: "Last-mile operators", text: "Routes that close on the first visit." },
            { label: "Who it's for", lead: "E-commerce with its own delivery", text: "A delivery experience looked after to the very end." },
            { label: "Who it's for", lead: "Home delivery and services", text: "Products that need to be delivered in person." },
          ],
        },
        {
          type: "cells", cols: 3, index: "Results", eyebrow: "Results", title: "What we will measure together", accent: "in your pilot",
          subtitle: "We don't promise figures before measuring. Each pilot defines at the start what is measured and how. The agent identifies itself as an automated assistant, only offers the options authorized by the company, keeps a recording of the recipient's decision and can pass the call to a person.",
          items: [
            { label: "Results", lead: "Failed deliveries", text: "How many visits end without the parcel being delivered." },
            { label: "Results", lead: "Second deliveries avoided", text: "How many times there's no need to go back to the same door." },
            { label: "Results", lead: "Time per stop", text: "How long each stop takes when nobody is home." },
          ],
        },
      ],
    },
  },
};
