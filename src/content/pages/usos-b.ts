// Casos de uso 05–08 · texto literal de las fichas del cliente (docs/casos-de-uso/), EN traducido.
import { G, type Block, type Page, type PageDoc } from "./types";
import { usos, usoSlug, usoPdf, nextUsos, USOS_BASE } from "../usos";

const U = (slug: string) => usos.find((u) => u.slug === slug)!;
const crumb = { es: { label: "Casos de uso", slug: USOS_BASE }, en: { label: "Use cases", slug: USOS_BASE } };
const LABELS: [string, string, string, string] = ["NappAI Voice", "NappAI", "XOne", "XOneCode"];

/** Monta la PageDoc común de un caso de uso; solo cambian el titular (con acento) y los bloques. */
const doc = (slug: string, lang: "es" | "en", hero: { title: string; accent: string }, blocks: Block[]): PageDoc => {
  const u = U(slug);
  const es = lang === "es";
  return {
    group: G.usos,
    crumb: crumb[lang],
    related: nextUsos(slug, lang),
    relatedTitle: es ? { title: "Otros casos", accent: "de uso" } : { title: "More", accent: "use cases" },
    seo: { title: `${u[lang].name} · ${es ? "Caso de uso" : "Use case"} | XOne`, description: u[lang].lead },
    hero: { ...hero, lead: u[lang].lead, labels: LABELS, secondary: { label: es ? "Descargar ficha PDF" : "Download PDF sheet", href: usoPdf(u) } },
    blocks,
  };
};

const S05 = "gestion-activa-de-riesgos-laborales";
const S06 = "gestion-de-cobros-integrada-en-ruta";
const S07 = "reactivacion-de-clientes-con-entrega-en-ruta";
const S08 = "atencion-de-incidencias-24-7-en-inmuebles";

export const usosB: Record<string, Page> = {
  /* ------------------------------------------------------------------ 05 */
  [usoSlug(U(S05))]: {
    es: doc(S05, "es", { title: "Gestión activa de", accent: "riesgos laborales" }, [
      { type: "intro", lead: U(S05).es.sector, text: [
        "La máquina vigila los plazos. Paralizar un trabajo es siempre una decisión humana.",
        "La solución propone gravedad y responsable, controla los plazos y escala cuando vencen.",
        "El técnico de prevención confirma la clasificación, valida los cierres y decide las medidas.",
        "La empresa define normas, plazos y responsables de cada obra o planta.",
      ] },
      { type: "cells", index: "Ciclo", eyebrow: "Ciclo de vida", title: "El ciclo de vida", accent: "de un riesgo", cols: 3,
        subtitle: "Si vence el plazo sin la foto de corrección, NappAI Voice llama al responsable de la subcontrata y el escalado queda registrado.",
        items: [
          { label: "01", lead: "Detectado", text: "El técnico lo fotografía y lo describe por voz." },
          { label: "02", lead: "Clasificado", text: "NappAI propone la gravedad; el técnico la confirma." },
          { label: "03", lead: "Asignado", text: "Orden al responsable, con plazo y foto obligatoria." },
          { label: "04", lead: "Corregido", text: "El responsable sube la foto de la corrección." },
          { label: "05", lead: "Verificado", text: "Prevención valida el cierre y queda registrado." },
        ] },
      { type: "rows", index: "Desenlaces", eyebrow: "Dos desenlaces", title: "¿Y si nadie corrige", accent: "el riesgo a tiempo?",
        subtitle: "Aquí está la diferencia con una app de inspección: el seguimiento no depende de que alguien se acuerde.",
        items: [
          { title: "Se corrige a tiempo", text: [], list: [
            "Detección · Riesgo detectado. Foto y descripción por voz desde XOne.",
            "Asignación · Orden enviada. El responsable recibe la orden con plazo y foto obligatoria.",
            "Dentro de plazo · Foto de corrección recibida. El encargado sube la foto desde su móvil.",
            "Cierre · Riesgo verificado. Prevención valida el cierre. Todo queda registrado.",
          ] },
          { title: "Vence el plazo", text: [], list: [
            "Detección · Riesgo detectado. Foto y descripción por voz desde XOne.",
            "Asignación · Orden enviada. El responsable recibe la orden con plazo y foto obligatoria.",
            "Plazo vencido · NappAI Voice llama al responsable. Le recuerda la orden pendiente y deja constancia de la llamada.",
            "Seguimiento · Prevención informada. El técnico decide los siguientes pasos con toda la trazabilidad.",
          ] },
        ] },
      { type: "rows", index: "Trazabilidad", eyebrow: "Trazabilidad", title: "Cada paso, con fecha,", accent: "autor y prueba",
        subtitle: "Sin papeles ni correos perdidos: cada riesgo deja un registro completo que se puede consultar en cualquier momento. Riesgo · Barandilla sin anclar · Planta 3 · Ejemplo",
        items: [
          { title: "09:12 · XOne", text: ["Detectado por el técnico de prevención, con foto y descripción"] },
          { title: "09:13 · NappAI", text: ["Gravedad alta propuesta y confirmada por el técnico"] },
          { title: "09:13 · XOne", text: ["Orden enviada a la subcontrata de estructuras con plazo"] },
          { title: "10:40 · XOne", text: ["Foto de corrección recibida del encargado"] },
          { title: "10:52 · Persona", text: ["Cierre verificado por prevención"] },
        ] },
      { type: "rows", index: "Piezas", eyebrow: "Nuestras piezas", title: "Quién hace qué", accent: "en cada fase",
        subtitle: "Cuatro piezas repartidas a lo largo del ciclo, sin huecos entre una fase y la siguiente.",
        items: [
          { title: "XOne", text: [], list: ["Detectar: Foto y descripción", "Asignar y seguir: Orden y foto de cierre"] },
          { title: "NappAI", text: [], list: ["Clasificar: Gravedad y responsable", "Asignar y seguir: Plazos y avisos", "Escalar: Decide cuándo escalar"] },
          { title: "NappAI Voice", text: [], list: ["Detectar: Descripción por voz", "Escalar: Llama al responsable"] },
          { title: "XOneCode", text: ["Adapta formularios, normas y flujos a cada obra o planta"] },
        ] },
      { type: "cells", index: "Para quién", eyebrow: "Para quién", title: "Para quien responde de la seguridad", accent: "en el terreno", cols: 4,
        subtitle: "Lo impulsa la dirección de prevención o de obra, con sistemas como aliado para conectar planos, contratas y responsables.",
        items: [
          { label: "Para quién", lead: "Construcción", text: "Obras con varias subcontratas trabajando a la vez." },
          { label: "Para quién", lead: "Ingeniería y proyectos", text: "Montajes y puestas en marcha con muchos agentes." },
          { label: "Para quién", lead: "Energía", text: "Parques eólicos y solares, subestaciones y redes." },
          { label: "Para quién", lead: "Industria", text: "Plantas con mantenimiento y contratas propias." },
        ] },
      { type: "cells", index: "Resultados", eyebrow: "Resultados", title: "Qué mediremos juntos", accent: "en tu piloto", cols: 3,
        subtitle: "No prometemos cifras antes de medir. Cada piloto define al empezar qué se mide y cómo. La solución aporta trazabilidad completa de cada riesgo y su corrección. El cumplimiento normativo sigue siendo responsabilidad de la empresa y de su servicio de prevención.",
        items: [
          { label: "Resultados", lead: "Tiempo de detección a corrección", text: "Cuánto tarda un riesgo en quedar corregido desde que se detecta." },
          { label: "Resultados", lead: "Riesgos cerrados dentro de plazo", text: "Qué parte de las órdenes se corrige antes de que venza el plazo." },
          { label: "Resultados", lead: "Escalados necesarios", text: "Cuántas veces hace falta escalar para que se actúe." },
        ] },
    ]),
    en: doc(S05, "en", { title: "Active occupational", accent: "risk management" }, [
      { type: "intro", lead: U(S05).en.sector, text: [
        "The machine watches the deadlines. Stopping a job is always a human decision.",
        "The solution proposes severity and owner, tracks deadlines and escalates when they pass.",
        "The prevention officer confirms the classification, validates closures and decides on the measures.",
        "The company sets the rules, deadlines and owners for each site or plant.",
      ] },
      { type: "cells", index: "Cycle", eyebrow: "Life cycle", title: "The life cycle", accent: "of a risk", cols: 3,
        subtitle: "If the deadline passes without the correction photo, NappAI Voice calls the subcontractor's manager and the escalation is logged.",
        items: [
          { label: "01", lead: "Detected", text: "The technician photographs it and describes it by voice." },
          { label: "02", lead: "Classified", text: "NappAI proposes the severity; the technician confirms it." },
          { label: "03", lead: "Assigned", text: "An order to the owner, with a deadline and a mandatory photo." },
          { label: "04", lead: "Corrected", text: "The owner uploads the photo of the correction." },
          { label: "05", lead: "Verified", text: "Prevention validates the closure and it is logged." },
        ] },
      { type: "rows", index: "Outcomes", eyebrow: "Two outcomes", title: "What if nobody corrects", accent: "the risk in time?",
        subtitle: "This is the difference from an inspection app: the follow-up does not depend on someone remembering.",
        items: [
          { title: "Corrected in time", text: [], list: [
            "Detection · Risk detected. Photo and voice description from XOne.",
            "Assignment · Order sent. The owner receives the order with a deadline and a mandatory photo.",
            "Within the deadline · Correction photo received. The foreman uploads the photo from their phone.",
            "Closure · Risk verified. Prevention validates the closure. Everything is logged.",
          ] },
          { title: "The deadline passes", text: [], list: [
            "Detection · Risk detected. Photo and voice description from XOne.",
            "Assignment · Order sent. The owner receives the order with a deadline and a mandatory photo.",
            "Deadline passed · NappAI Voice calls the owner. It reminds them of the pending order and logs the call.",
            "Follow-up · Prevention informed. The technician decides the next steps with full traceability.",
          ] },
        ] },
      { type: "rows", index: "Traceability", eyebrow: "Traceability", title: "Every step, with date,", accent: "author and evidence",
        subtitle: "No lost papers or emails: every risk leaves a complete record that can be checked at any time. Risk · Unanchored guardrail · Floor 3 · Example",
        items: [
          { title: "09:12 · XOne", text: ["Detected by the prevention officer, with photo and description"] },
          { title: "09:13 · NappAI", text: ["High severity proposed and confirmed by the technician"] },
          { title: "09:13 · XOne", text: ["Order sent to the structures subcontractor with a deadline"] },
          { title: "10:40 · XOne", text: ["Correction photo received from the foreman"] },
          { title: "10:52 · Person", text: ["Closure verified by prevention"] },
        ] },
      { type: "rows", index: "Pieces", eyebrow: "Our pieces", title: "Who does what", accent: "at each stage",
        subtitle: "Four pieces spread across the cycle, with no gaps between one stage and the next.",
        items: [
          { title: "XOne", text: [], list: ["Detect: Photo and description", "Assign and follow up: Order and closing photo"] },
          { title: "NappAI", text: [], list: ["Classify: Severity and owner", "Assign and follow up: Deadlines and alerts", "Escalate: Decides when to escalate"] },
          { title: "NappAI Voice", text: [], list: ["Detect: Voice description", "Escalate: Calls the owner"] },
          { title: "XOneCode", text: ["Adapts forms, rules and flows to each site or plant"] },
        ] },
      { type: "cells", index: "Who for", eyebrow: "Who it is for", title: "For those responsible for safety", accent: "on the ground", cols: 4,
        subtitle: "Driven by the head of prevention or of the site, with IT as an ally to connect plans, contractors and owners.",
        items: [
          { label: "Who it is for", lead: "Construction", text: "Sites with several subcontractors working at once." },
          { label: "Who it is for", lead: "Engineering and projects", text: "Assemblies and commissioning with many parties." },
          { label: "Who it is for", lead: "Energy", text: "Wind and solar farms, substations and grids." },
          { label: "Who it is for", lead: "Industry", text: "Plants with maintenance and their own contractors." },
        ] },
      { type: "cells", index: "Results", eyebrow: "Results", title: "What we will measure together", accent: "in your pilot", cols: 3,
        subtitle: "We do not promise figures before measuring. Each pilot defines at the outset what is measured and how. The solution provides full traceability of each risk and its correction. Regulatory compliance remains the responsibility of the company and its prevention service.",
        items: [
          { label: "Results", lead: "Time from detection to correction", text: "How long it takes for a risk to be corrected from the moment it is detected." },
          { label: "Results", lead: "Risks closed within the deadline", text: "What share of orders is corrected before the deadline passes." },
          { label: "Results", lead: "Escalations needed", text: "How many times escalation is needed for action to be taken." },
        ] },
    ]),
  },

  /* ------------------------------------------------------------------ 06 */
  [usoSlug(U(S06))]: {
    es: doc(S06, "es", { title: "Gestión de cobros", accent: "integrada en ruta" }, [
      { type: "intro", lead: U(S06).es.sector },
      { type: "rows", index: "Tono", eyebrow: "El tono lo es todo", title: "Una conversación que", accent: "cuida la relación",
        subtitle: "Un recibo devuelto no tiene por qué estropear años de relación comercial. El agente llama con tono cercano, ofrece soluciones y cierra un acuerdo concreto.",
        items: [
          { title: "Asistente", text: ["Buenos días, le llamo de parte de su distribuidor. Soy un asistente automático. ¿Hablo con el responsable del Restaurante Mar?"] },
          { title: "Cliente", text: ["Sí, soy yo. ¿Qué pasa?"] },
          { title: "Asistente", text: ["Nada grave. Tenemos un recibo del mes pasado que ha vuelto. Queríamos ayudarle a resolverlo de la forma que le venga mejor."] },
          { title: "Cliente", text: ["Uf, ha sido un mes complicado. ¿Puedo pagarlo mañana cuando venga el repartidor?"] },
          { title: "Asistente", text: ["Por supuesto. Lo anoto para el reparto de mañana y le dejamos la confirmación por escrito. ¡Gracias!"],
            note: "Se identifica como asistente automático · Propone, no presiona · Puede pasar la llamada a una persona" },
        ] },
      { type: "cells", index: "Reglas", eyebrow: "Reglas claras", title: "Solo lo que finanzas", accent: "ha autorizado", cols: 3,
        subtitle: "El agente no improvisa condiciones: ofrece únicamente las opciones que tu equipo financiero ha definido de antemano. Cualquier petición fuera de esos márgenes pasa a una persona del equipo financiero.",
        items: [
          { label: "Reglas claras", lead: "Pago en el próximo reparto", text: "El repartidor recoge el pago cuando ya pasa por allí." },
          { label: "Reglas claras", lead: "Aplazamiento corto", text: "Una nueva fecha dentro del margen que permite finanzas." },
          { label: "Reglas claras", lead: "Pago en dos plazos", text: "Un plan sencillo, siempre dentro de las condiciones aprobadas." },
        ] },
      { type: "rows", index: "Ruta", eyebrow: "Sin desvíos", title: "El cobro viaja", accent: "en la ruta de mañana",
        subtitle: "NappAI cruza la dirección del cliente con las rutas del día siguiente y añade una tarea de cobro en la parada que ya existía. El repartidor no negocia nada: ve el importe acordado y un botón para confirmar el cobro.",
        items: [
          { title: "08:30 · Bar Central", text: ["Entrega"] },
          { title: "09:10 · Cafetería Sol", text: ["Entrega"] },
          { title: "09:45 · Restaurante Mar", text: ["Entrega + cobro acordado"] },
          { title: "10:20 · Bar La Plaza", text: ["Entrega"] },
          { title: "11:05 · Hotel Norte", text: ["Entrega"] },
        ] },
      { type: "cells", index: "Control", eyebrow: "Control", title: "Cada uno decide", accent: "lo que le corresponde", cols: 3,
        items: [
          { label: "Control", lead: "Finanzas marca los márgenes", text: "Define qué opciones de pago se pueden ofrecer y a qué clientes." },
          { label: "Control", lead: "El cliente elige", text: "Decide entre las opciones disponibles. Si prefiere hablar con alguien, se le pasa la llamada." },
          { label: "Control", lead: "El repartidor confirma", text: "Recoge el pago acordado y lo confirma en XOne para desbloquear la entrega." },
        ] },
      { type: "cells", index: "Piezas", eyebrow: "Nuestras piezas", title: "Cada pieza,", accent: "en su momento", cols: 4,
        items: [
          { label: "Antes", lead: "NappAI", text: "Detecta los recibos devueltos y prepara las opciones autorizadas para cada cliente." },
          { label: "Durante", lead: "NappAI Voice", text: "Llama, escucha, propone y cierra un acuerdo concreto con el cliente." },
          { label: "Después", lead: "XOne", text: "Añade la parada de cobro a la ruta y registra la confirmación del repartidor." },
          { label: "Siempre", lead: "XOneCode", text: "Adapta reglas, rutas y pantallas a la operación de cada distribuidor." },
        ] },
      { type: "chips", index: "Para quién", eyebrow: "Para quién", title: "Para quien vende y reparte", accent: "a hostelería y comercio", cols: 3,
        items: ["Distribución de alimentación y bebidas", "Mayoristas", "Canal HORECA", "Pequeño comercio"],
        text: "Lo impulsan la dirección financiera y la dirección comercial, con sistemas como aliado para conectar el ERP y las rutas." },
      { type: "cells", index: "Resultados", eyebrow: "Resultados", title: "Qué mediremos juntos", accent: "en tu piloto", cols: 3,
        subtitle: "No prometemos cifras antes de medir. Cada piloto define al empezar qué se mide y cómo. El agente se identifica como asistente automático, avisa de la grabación y sigue las buenas prácticas de recobro. El cobro en ruta se apoya en un procedimiento interno definido por cada empresa.",
        items: [
          { label: "Resultados", lead: "Tiempo medio de cobro", text: "Cuánto tarda en cobrarse una factura vencida." },
          { label: "Resultados", lead: "Pedidos desbloqueados", text: "Clientes que vuelven a pedir tras resolver su recibo." },
          { label: "Resultados", lead: "Visitas en balde", text: "Paradas de cobro que no se resuelven." },
        ] },
    ]),
    en: doc(S06, "en", { title: "Collections built", accent: "into the route" }, [
      { type: "intro", lead: U(S06).en.sector },
      { type: "rows", index: "Tone", eyebrow: "Tone is everything", title: "A conversation that", accent: "looks after the relationship",
        subtitle: "A returned direct debit does not have to spoil years of business relationship. The agent calls in a friendly tone, offers solutions and closes a specific agreement.",
        items: [
          { title: "Assistant", text: ["Good morning, I'm calling on behalf of your distributor. I'm an automated assistant. Am I speaking with the manager of Restaurante Mar?"] },
          { title: "Customer", text: ["Yes, that's me. What's going on?"] },
          { title: "Assistant", text: ["Nothing serious. We have a direct debit from last month that was returned. We'd like to help you sort it out in whatever way suits you best."] },
          { title: "Customer", text: ["Ugh, it's been a tough month. Can I pay it tomorrow when the driver comes?"] },
          { title: "Assistant", text: ["Of course. I'll note it down for tomorrow's delivery and we'll leave you the confirmation in writing. Thank you!"],
            note: "Identifies itself as an automated assistant · Proposes, does not pressure · Can transfer the call to a person" },
        ] },
      { type: "cells", index: "Rules", eyebrow: "Clear rules", title: "Only what finance", accent: "has authorised", cols: 3,
        subtitle: "The agent does not improvise terms: it only offers the options your finance team has defined in advance. Any request outside those limits goes to a person on the finance team.",
        items: [
          { label: "Clear rules", lead: "Payment on the next delivery", text: "The driver collects the payment when already passing by." },
          { label: "Clear rules", lead: "Short deferral", text: "A new date within the margin finance allows." },
          { label: "Clear rules", lead: "Payment in two instalments", text: "A simple plan, always within the approved terms." },
        ] },
      { type: "rows", index: "Route", eyebrow: "No detours", title: "The payment travels", accent: "on tomorrow's route",
        subtitle: "NappAI matches the customer's address with the next day's routes and adds a collection task at the stop that already existed. The driver negotiates nothing: they see the agreed amount and a button to confirm the payment.",
        items: [
          { title: "08:30 · Bar Central", text: ["Delivery"] },
          { title: "09:10 · Cafetería Sol", text: ["Delivery"] },
          { title: "09:45 · Restaurante Mar", text: ["Delivery + agreed payment"] },
          { title: "10:20 · Bar La Plaza", text: ["Delivery"] },
          { title: "11:05 · Hotel Norte", text: ["Delivery"] },
        ] },
      { type: "cells", index: "Control", eyebrow: "Control", title: "Everyone decides", accent: "what is theirs to decide", cols: 3,
        items: [
          { label: "Control", lead: "Finance sets the limits", text: "Defines which payment options can be offered and to which customers." },
          { label: "Control", lead: "The customer chooses", text: "Decides between the available options. If they prefer to talk to someone, the call is transferred." },
          { label: "Control", lead: "The driver confirms", text: "Collects the agreed payment and confirms it in XOne to unlock the delivery." },
        ] },
      { type: "cells", index: "Pieces", eyebrow: "Our pieces", title: "Each piece,", accent: "at its moment", cols: 4,
        items: [
          { label: "Before", lead: "NappAI", text: "Detects returned direct debits and prepares the authorised options for each customer." },
          { label: "During", lead: "NappAI Voice", text: "Calls, listens, proposes and closes a specific agreement with the customer." },
          { label: "After", lead: "XOne", text: "Adds the collection stop to the route and logs the driver's confirmation." },
          { label: "Always", lead: "XOneCode", text: "Adapts rules, routes and screens to each distributor's operation." },
        ] },
      { type: "chips", index: "Who for", eyebrow: "Who it is for", title: "For those who sell and deliver", accent: "to hospitality and retail", cols: 3,
        items: ["Food and beverage distribution", "Wholesalers", "HORECA channel", "Small retail"],
        text: "Driven by finance and sales management, with IT as an ally to connect the ERP and the routes." },
      { type: "cells", index: "Results", eyebrow: "Results", title: "What we will measure together", accent: "in your pilot", cols: 3,
        subtitle: "We do not promise figures before measuring. Each pilot defines at the outset what is measured and how. The agent identifies itself as an automated assistant, gives notice of the recording and follows good debt-collection practice. On-route collection relies on an internal procedure defined by each company.",
        items: [
          { label: "Results", lead: "Average collection time", text: "How long it takes to collect an overdue invoice." },
          { label: "Results", lead: "Orders unblocked", text: "Customers who order again after settling their debit." },
          { label: "Results", lead: "Wasted visits", text: "Collection stops that are not resolved." },
        ] },
    ]),
  },

  /* ------------------------------------------------------------------ 07 */
  [usoSlug(U(S07))]: {
    es: doc(S07, "es", { title: "Reactivación de clientes", accent: "con entrega en ruta" }, [
      { type: "intro", lead: U(S07).es.sector },
      { type: "cells", index: "Pasos", eyebrow: "Del dato al pedido", title: "Cuatro pasos para despertar", accent: "una cartera dormida", cols: 4,
        subtitle: "Cada paso estrecha el foco: de toda tu cartera a un pedido concreto, en la puerta de tu cliente.",
        items: [
          { label: "01", lead: "Detecta", text: "Clientes que han dejado de comprar, según su historial." },
          { label: "02", lead: "Prepara", text: "Una propuesta según su historial, el margen y el stock." },
          { label: "03", lead: "Llama", text: "Una conversación comercial natural que cierra el pedido." },
          { label: "04", lead: "Entrega", text: "El pedido entra en la ruta del día siguiente." },
        ] },
      { type: "rows", index: "Sectores", eyebrow: "Tres sectores, tres ejemplos", title: "Elige tu sector y", accent: "mira cómo funciona",
        items: [
          { title: "Distribución farmacéutica", text: ["Farmacia del Puerto"], list: [
            "NappAI detecta: Sin pedidos de su línea de parafarmacia habitual",
            "NappAI Voice propone: Reposición de sus referencias habituales con stock disponible",
            "XOne entrega: Entrega en la ruta de la mañana siguiente",
          ] },
          { title: "Recambios de automoción", text: ["Taller Hermanos Ruiz"], list: [
            "NappAI detecta: Ha dejado de pedir filtros y frenos",
            "NappAI Voice propone: Su pedido habitual de recambios con las condiciones de su tarifa",
            "XOne entrega: Entrega con el preventista de la zona",
          ] },
          { title: "Gran consumo", text: ["Supermercado La Esquina"], list: [
            "NappAI detecta: Menos pedidos de bebidas este trimestre",
            "NappAI Voice propone: Surtido de temporada con producto de alta rotación",
            "XOne entrega: Entrega en la ruta del día siguiente",
          ] },
        ] },
      { type: "cells", index: "Control", eyebrow: "Control", title: "Dirección comercial aprueba,", accent: "la solución ejecuta", cols: 4,
        subtitle: "Nada sale a la calle sin el visto bueno de tu equipo. La solución trabaja dentro de las reglas comerciales que defines y el comercial de zona puede revisar cada campaña.",
        items: [
          { label: "Control", lead: "Reglas de las propuestas", text: "Márgenes, condiciones y productos que se pueden ofrecer." },
          { label: "Control", lead: "A quién se llama", text: "Clientes con relación comercial activa y que aceptan este contacto." },
          { label: "Control", lead: "Revisión antes de lanzar", text: "El comercial de zona puede ver y ajustar cada campaña." },
          { label: "Control", lead: "Siempre una persona disponible", text: "Si el cliente lo pide, la llamada pasa a su comercial." },
        ] },
      { type: "cells", index: "Piezas", eyebrow: "Nuestras piezas", title: "Cuatro piezas,", accent: "del dato a la puerta", cols: 4,
        items: [
          { label: "Nuestras piezas", lead: "NappAI", text: "Analiza el historial, detecta a los clientes inactivos y prepara la propuesta con margen y stock." },
          { label: "Nuestras piezas", lead: "NappAI Voice", text: "Llama con naturalidad comercial, presenta la propuesta y cierra el pedido." },
          { label: "Nuestras piezas", lead: "XOne", text: "El pedido entra en la ruta del preventista o del repartidor de la zona para entregarlo al día siguiente." },
          { label: "Nuestras piezas", lead: "XOneCode", text: "Adapta reglas, rutas y pantallas al modelo comercial de cada distribuidor." },
        ] },
      { type: "cells", index: "Para quién", eyebrow: "Para quién", title: "Para quien vive de la recurrencia", accent: "de sus clientes", cols: 3,
        subtitle: "Lo impulsa la dirección comercial, con sistemas como aliado para conectar el ERP, el CRM y las rutas.",
        items: [
          { label: "Para quién", lead: "Distribución farmacéutica", text: "Farmacias que espacian sus pedidos o reparten su compra." },
          { label: "Para quién", lead: "Recambios de automoción", text: "Talleres que dejan de pedir determinadas familias de producto." },
          { label: "Para quién", lead: "Gran consumo", text: "Comercios con pedidos irregulares o a la baja." },
        ] },
      { type: "cells", index: "Resultados", eyebrow: "Resultados", title: "Qué mediremos juntos", accent: "en tu piloto", cols: 3,
        subtitle: "No prometemos cifras antes de medir. Cada piloto define al empezar qué se mide y cómo. Las llamadas comerciales se hacen con base legal y a clientes con relación comercial activa. El agente se identifica como asistente automático y puede pasar la llamada al comercial.",
        items: [
          { label: "Resultados", lead: "Clientes reactivados", text: "Clientes inactivos que vuelven a hacer un pedido." },
          { label: "Resultados", lead: "Pedidos cerrados por llamada", text: "Llamadas que terminan en un pedido confirmado." },
          { label: "Resultados", lead: "Plazo de entrega", text: "Tiempo entre la llamada y el pedido entregado." },
        ] },
    ]),
    en: doc(S07, "en", { title: "Customer reactivation", accent: "with on-route delivery" }, [
      { type: "intro", lead: U(S07).en.sector },
      { type: "cells", index: "Steps", eyebrow: "From data to order", title: "Four steps to wake up", accent: "a dormant portfolio", cols: 4,
        subtitle: "Each step narrows the focus: from your whole portfolio to a specific order, at your customer's door.",
        items: [
          { label: "01", lead: "Detect", text: "Customers who have stopped buying, based on their history." },
          { label: "02", lead: "Prepare", text: "An offer based on their history, the margin and the stock." },
          { label: "03", lead: "Call", text: "A natural sales conversation that closes the order." },
          { label: "04", lead: "Deliver", text: "The order goes onto the next day's route." },
        ] },
      { type: "rows", index: "Sectors", eyebrow: "Three sectors, three examples", title: "Pick your sector and", accent: "see how it works",
        items: [
          { title: "Pharmaceutical distribution", text: ["Farmacia del Puerto"], list: [
            "NappAI detects: No orders from its usual parapharmacy line",
            "NappAI Voice proposes: Restocking its usual items with available stock",
            "XOne delivers: Delivery on the next morning's route",
          ] },
          { title: "Automotive spare parts", text: ["Taller Hermanos Ruiz"], list: [
            "NappAI detects: It has stopped ordering filters and brakes",
            "NappAI Voice proposes: Its usual spare parts order on its price-list terms",
            "XOne delivers: Delivery with the area's pre-sales rep",
          ] },
          { title: "Consumer goods", text: ["Supermercado La Esquina"], list: [
            "NappAI detects: Fewer drinks orders this quarter",
            "NappAI Voice proposes: A seasonal range with fast-moving products",
            "XOne delivers: Delivery on the next day's route",
          ] },
        ] },
      { type: "cells", index: "Control", eyebrow: "Control", title: "Sales management approves,", accent: "the solution executes", cols: 4,
        subtitle: "Nothing goes out without your team's approval. The solution works within the commercial rules you define, and the area sales rep can review each campaign.",
        items: [
          { label: "Control", lead: "Rules for the offers", text: "Margins, terms and products that can be offered." },
          { label: "Control", lead: "Who gets called", text: "Customers with an active business relationship who accept this contact." },
          { label: "Control", lead: "Review before launch", text: "The area sales rep can see and adjust each campaign." },
          { label: "Control", lead: "A person always available", text: "If the customer asks, the call goes to their sales rep." },
        ] },
      { type: "cells", index: "Pieces", eyebrow: "Our pieces", title: "Four pieces,", accent: "from data to the door", cols: 4,
        items: [
          { label: "Our pieces", lead: "NappAI", text: "Analyses the history, detects inactive customers and prepares the offer with margin and stock." },
          { label: "Our pieces", lead: "NappAI Voice", text: "Calls with a natural sales manner, presents the offer and closes the order." },
          { label: "Our pieces", lead: "XOne", text: "The order goes onto the route of the area's pre-sales rep or driver for delivery the next day." },
          { label: "Our pieces", lead: "XOneCode", text: "Adapts rules, routes and screens to each distributor's commercial model." },
        ] },
      { type: "cells", index: "Who for", eyebrow: "Who it is for", title: "For those who live on", accent: "repeat customers", cols: 3,
        subtitle: "Driven by sales management, with IT as an ally to connect the ERP, the CRM and the routes.",
        items: [
          { label: "Who it is for", lead: "Pharmaceutical distribution", text: "Pharmacies that space out their orders or split their purchases." },
          { label: "Who it is for", lead: "Automotive spare parts", text: "Workshops that stop ordering certain product families." },
          { label: "Who it is for", lead: "Consumer goods", text: "Shops with irregular or falling orders." },
        ] },
      { type: "cells", index: "Results", eyebrow: "Results", title: "What we will measure together", accent: "in your pilot", cols: 3,
        subtitle: "We do not promise figures before measuring. Each pilot defines at the outset what is measured and how. Sales calls are made on a legal basis and to customers with an active business relationship. The agent identifies itself as an automated assistant and can transfer the call to the sales rep.",
        items: [
          { label: "Results", lead: "Customers reactivated", text: "Inactive customers who place an order again." },
          { label: "Results", lead: "Orders closed per call", text: "Calls that end in a confirmed order." },
          { label: "Results", lead: "Delivery time", text: "Time between the call and the delivered order." },
        ] },
    ]),
  },

  /* ------------------------------------------------------------------ 08 */
  [usoSlug(U(S08))]: {
    es: doc(S08, "es", { title: "Atención de incidencias", accent: "24/7 en inmuebles" }, [
      { type: "intro", lead: U(S08).es.sector, text: ["Cuando todo el mundo duerme, la atención sigue"] },
      { type: "cells", index: "Noche", eyebrow: "Una noche cualquiera", title: "Una incidencia,", accent: "de principio a fin", cols: 3,
        subtitle: "Un ejemplo de cómo se resuelve una cerradura que no abre de madrugada, sin despertar a nadie del equipo de oficina.",
        items: [
          { label: "02:47", lead: "Llega la llamada", text: "Un huésped no puede entrar al apartamento. NappAI Voice atiende al instante." },
          { label: "02:48", lead: "Verificación y ayuda guiada", text: "El agente comprueba la reserva y le guía para reiniciar la cerradura." },
          { label: "02:52", lead: "Acceso temporal", text: "No funciona: tras verificar su identidad, NappAI genera un código temporal." },
          { label: "02:53", lead: "Técnico avisado", text: "XOne envía la orden de revisión al técnico de guardia." },
          { label: "09:10", lead: "Reparación y cierre", text: "El técnico revisa la cerradura, cierra con foto y el huésped recibe la confirmación." },
        ] },
      { type: "cells", index: "Caminos", eyebrow: "Dos caminos", title: "Resolver por teléfono", accent: "o enviar al técnico", cols: 2,
        subtitle: "El agente siempre intenta primero la solución más rápida. Si no basta, moviliza a la persona adecuada. NappAI Voice atiende y verifica la reserva.",
        items: [
          { label: "Se resuelve", lead: "Solución guiada por teléfono", text: "Reiniciar una cerradura, ajustar el termostato o rearmar el cuadro: el agente guía paso a paso y la incidencia queda registrada." },
          { label: "No se resuelve", lead: "Técnico de guardia en camino", text: "NappAI elige al técnico o la contrata según la avería y XOne le envía la orden con ubicación, acceso y lista de comprobación." },
        ] },
      { type: "rows", index: "Avería", eyebrow: "Según la avería", title: "Elige una incidencia", accent: "y mira qué pasa",
        subtitle: "Cada tipo de avería tiene su propio protocolo: lo que intenta el agente, quién sale si hace falta y qué revisa al llegar.",
        items: [
          { title: "Cerradura", text: [], list: [
            "Lo que intenta el agente: Le guía para reiniciar la cerradura electrónica y, si no abre, genera un acceso temporal.",
            "Si no se resuelve, sale: Técnico de cerraduras de guardia",
            "Lista de comprobación en XOne: Batería, conexión y registro de accesos",
          ] },
          { title: "Climatización", text: [], list: [
            "Lo que intenta el agente: Comprueba con el huésped el mando, el modo y el termostato.",
            "Si no se resuelve, sale: Técnico de climatización",
            "Lista de comprobación en XOne: Filtros, mando y unidad exterior",
          ] },
          { title: "Agua", text: [], list: [
            "Lo que intenta el agente: Le indica cómo cerrar la llave de paso para limitar daños.",
            "Si no se resuelve, sale: Fontanero de guardia",
            "Lista de comprobación en XOne: Origen de la fuga, llave de paso y daños",
          ] },
          { title: "Electricidad", text: [], list: [
            "Lo que intenta el agente: Le ayuda a revisar el cuadro eléctrico de forma segura.",
            "Si no se resuelve, sale: Electricista de guardia",
            "Lista de comprobación en XOne: Cuadro, diferenciales y puntos afectados",
          ] },
        ] },
      { type: "cells", index: "Seguridad", eyebrow: "Control y seguridad", title: "Rápido, pero con", accent: "todas las garantías", cols: 4,
        items: [
          { label: "Control y seguridad", lead: "Ningún acceso sin verificar la identidad", text: "Los accesos temporales solo se generan tras comprobar la reserva y la identidad de quien llama. Los casos dudosos pasan al responsable de guardia." },
          { label: "Control y seguridad", lead: "La solución", text: "Atiende, verifica, guía y moviliza al técnico adecuado." },
          { label: "Control y seguridad", lead: "El responsable de guardia", text: "Decide en los casos dudosos y en las incidencias graves." },
          { label: "Control y seguridad", lead: "La empresa", text: "Define protocolos, técnicos, contratas y niveles de verificación." },
        ] },
      { type: "cells", index: "Piezas", eyebrow: "Nuestras piezas", title: "Cuatro piezas", accent: "que no descansan", cols: 4,
        items: [
          { label: "Nuestras piezas", lead: "NappAI Voice", text: "Atiende a cualquier hora, verifica la reserva y guía al huésped o inquilino en una solución rápida." },
          { label: "Nuestras piezas", lead: "NappAI", text: "Consulta reservas y protocolos, genera accesos temporales seguros y elige al técnico o la contrata." },
          { label: "Nuestras piezas", lead: "XOne", text: "El técnico recibe ubicación, acceso y lista de comprobación, y cierra la incidencia con foto." },
          { label: "Nuestras piezas", lead: "XOneCode", text: "Adapta protocolos, pantallas e integraciones a cada cartera de inmuebles." },
        ] },
      { type: "chips", index: "Para quién", eyebrow: "Para quién", title: "Para quien gestiona inmuebles", accent: "que nunca cierran", cols: 3,
        items: ["Facility management", "Gestoras de apartamentos turísticos", "Colivings y residencias", "Hoteles sin recepción nocturna"],
        text: "Lo impulsa la dirección de operaciones o la gestión de activos, con sistemas como aliado para conectar reservas, cerraduras y contratas." },
      { type: "cells", index: "Resultados", eyebrow: "Resultados", title: "Qué mediremos juntos", accent: "en tu piloto", cols: 3,
        subtitle: "No prometemos cifras antes de medir. Cada piloto define al empezar qué se mide y cómo. El agente se identifica como asistente automático, avisa de la grabación y puede pasar la llamada al responsable de guardia en cualquier momento.",
        items: [
          { label: "Resultados", lead: "Incidencias resueltas por teléfono", text: "Las que se solucionan sin desplazar a nadie." },
          { label: "Resultados", lead: "Tiempo de respuesta nocturno", text: "Desde la llamada hasta la solución o la salida del técnico." },
          { label: "Resultados", lead: "Horas de guardia telefónica", text: "Tiempo que el equipo dedica a atender el teléfono de noche." },
        ] },
    ]),
    en: doc(S08, "en", { title: "24/7 incident handling", accent: "in properties" }, [
      { type: "intro", lead: U(S08).en.sector, text: ["When everyone is asleep, the service carries on"] },
      { type: "cells", index: "Night", eyebrow: "Any given night", title: "One incident,", accent: "from start to finish", cols: 3,
        subtitle: "An example of how a lock that will not open in the middle of the night gets resolved, without waking anyone on the office team.",
        items: [
          { label: "02:47", lead: "The call comes in", text: "A guest cannot get into the apartment. NappAI Voice answers instantly." },
          { label: "02:48", lead: "Verification and guided help", text: "The agent checks the booking and guides them to reset the lock." },
          { label: "02:52", lead: "Temporary access", text: "It does not work: after verifying their identity, NappAI generates a temporary code." },
          { label: "02:53", lead: "Technician notified", text: "XOne sends the inspection order to the on-call technician." },
          { label: "09:10", lead: "Repair and closure", text: "The technician checks the lock, closes with a photo and the guest receives the confirmation." },
        ] },
      { type: "cells", index: "Paths", eyebrow: "Two paths", title: "Solve it over the phone", accent: "or send the technician", cols: 2,
        subtitle: "The agent always tries the fastest solution first. If that is not enough, it mobilises the right person. NappAI Voice answers and verifies the booking.",
        items: [
          { label: "Resolved", lead: "Guided solution over the phone", text: "Resetting a lock, adjusting the thermostat or resetting the fuse box: the agent guides step by step and the incident is logged." },
          { label: "Not resolved", lead: "On-call technician on the way", text: "NappAI chooses the technician or contractor according to the fault, and XOne sends them the order with location, access and checklist." },
        ] },
      { type: "rows", index: "Fault", eyebrow: "Depending on the fault", title: "Pick an incident", accent: "and see what happens",
        subtitle: "Each type of fault has its own protocol: what the agent tries, who goes out if needed and what they check on arrival.",
        items: [
          { title: "Lock", text: [], list: [
            "What the agent tries: Guides them to reset the electronic lock and, if it does not open, generates temporary access.",
            "If not resolved, who goes out: On-call lock technician",
            "Checklist in XOne: Battery, connection and access log",
          ] },
          { title: "Heating and air conditioning", text: [], list: [
            "What the agent tries: Checks the remote, the mode and the thermostat with the guest.",
            "If not resolved, who goes out: HVAC technician",
            "Checklist in XOne: Filters, remote and outdoor unit",
          ] },
          { title: "Water", text: [], list: [
            "What the agent tries: Tells them how to close the stopcock to limit damage.",
            "If not resolved, who goes out: On-call plumber",
            "Checklist in XOne: Source of the leak, stopcock and damage",
          ] },
          { title: "Electricity", text: [], list: [
            "What the agent tries: Helps them check the fuse box safely.",
            "If not resolved, who goes out: On-call electrician",
            "Checklist in XOne: Fuse box, circuit breakers and affected points",
          ] },
        ] },
      { type: "cells", index: "Security", eyebrow: "Control and security", title: "Fast, but with", accent: "every safeguard", cols: 4,
        items: [
          { label: "Control and security", lead: "No access without verifying identity", text: "Temporary access is only generated after checking the booking and the caller's identity. Doubtful cases go to the on-call manager." },
          { label: "Control and security", lead: "The solution", text: "Answers, verifies, guides and mobilises the right technician." },
          { label: "Control and security", lead: "The on-call manager", text: "Decides on doubtful cases and serious incidents." },
          { label: "Control and security", lead: "The company", text: "Defines protocols, technicians, contractors and verification levels." },
        ] },
      { type: "cells", index: "Pieces", eyebrow: "Our pieces", title: "Four pieces", accent: "that never rest", cols: 4,
        items: [
          { label: "Our pieces", lead: "NappAI Voice", text: "Answers at any hour, verifies the booking and guides the guest or tenant through a quick fix." },
          { label: "Our pieces", lead: "NappAI", text: "Checks bookings and protocols, generates secure temporary access and chooses the technician or contractor." },
          { label: "Our pieces", lead: "XOne", text: "The technician receives location, access and checklist, and closes the incident with a photo." },
          { label: "Our pieces", lead: "XOneCode", text: "Adapts protocols, screens and integrations to each property portfolio." },
        ] },
      { type: "chips", index: "Who for", eyebrow: "Who it is for", title: "For those who manage properties", accent: "that never close", cols: 3,
        items: ["Facility management", "Holiday apartment managers", "Co-livings and residences", "Hotels without night reception"],
        text: "Driven by operations management or asset management, with IT as an ally to connect bookings, locks and contractors." },
      { type: "cells", index: "Results", eyebrow: "Results", title: "What we will measure together", accent: "in your pilot", cols: 3,
        subtitle: "We do not promise figures before measuring. Each pilot defines at the outset what is measured and how. The agent identifies itself as an automated assistant, gives notice of the recording and can transfer the call to the on-call manager at any time.",
        items: [
          { label: "Results", lead: "Incidents resolved over the phone", text: "Those solved without sending anyone out." },
          { label: "Results", lead: "Night-time response time", text: "From the call to the solution or the technician heading out." },
          { label: "Results", lead: "Phone on-call hours", text: "Time the team spends answering the phone at night." },
        ] },
    ]),
  },
};
