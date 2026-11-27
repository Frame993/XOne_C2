// Tanda ASDD · Soluciones (ASDD, XOne EMM), productos nuevos (NappAI, NappAI Voice) y listado de casos de uso.
// Texto literal de docs/vision-asdd.md (documento de visión v1, nov-2026) y de las fichas de docs/casos-de-uso/. EN: traducción nuestra.
import { G, type Page } from "./types";
import { usos, usoSlug } from "../usos";
import { groups as gES } from "../site.es";
import { groups as gEN } from "../site.en";

/* ---------- Fragmentos compartidos (apartados del documento) ---------- */

const ciclo = {
  es: [
    { label: "1 · Entender", lead: "Los agentes analizan el proceso de negocio.", text: "Cómo trabaja el equipo, qué datos hay en el ERP, qué reglas se aplican, dónde se pierde tiempo. Actúa: XOneCode.", more: ["La persona valida que el problema está bien entendido."] },
    { label: "2 · Construir", lead: "XOneCode genera la aplicación a medida sobre la plataforma XOne low-code.", text: "Pantallas, flujos, reglas e integraciones. Actúa: XOneCode sobre XOne.", more: ["La persona revisa y aprueba lo construido antes de ponerlo en marcha."] },
    { label: "3 · Operar", lead: "La aplicación trabaja en la calle, también sin cobertura.", text: "Los agentes de NappAI cruzan datos y actúan (asignar, avisar, escalar) y NappAI Voice atiende y hace llamadas. Actúan: XOne, NappAI y NappAI Voice.", more: ["La persona supervisa las excepciones y aprueba las acciones sensibles."] },
    { label: "4 · Mejorar", lead: "Lo que ocurre en la operación vuelve a los agentes.", text: "Detectan dónde se atasca el proceso y proponen cambios en la solución. Actúan: NappAI y XOneCode.", more: ["La persona decide qué cambios se aplican."] },
  ],
  en: [
    { label: "1 · Understand", lead: "The agents analyse the business process.", text: "How the team works, what data is in the ERP, which rules apply, where time is lost. Who acts: XOneCode.", more: ["The person validates that the problem is well understood."] },
    { label: "2 · Build", lead: "XOneCode generates the tailor-made application on the XOne low-code platform.", text: "Screens, flows, rules and integrations. Who acts: XOneCode on XOne.", more: ["The person reviews and approves what has been built before it goes live."] },
    { label: "3 · Operate", lead: "The application works in the field, even without coverage.", text: "NappAI agents cross-check data and act (assign, notify, escalate) and NappAI Voice takes and makes calls. Who acts: XOne, NappAI and NappAI Voice.", more: ["The person supervises exceptions and approves sensitive actions."] },
    { label: "4 · Improve", lead: "What happens in the operation flows back to the agents.", text: "They detect where the process gets stuck and propose changes to the solution. Who acts: NappAI and XOneCode.", more: ["The person decides which changes are applied."] },
  ],
};

const piezas = {
  es: [
    { label: "Construye", icon: "code" as const, lead: "XOneCode.", text: "Agentes que entienden el problema de negocio y programan la aplicación a medida en poco tiempo, sobre XOne.", link: { label: "Conocer XOneCode", slug: "xonecode" } },
    { label: "Ejecuta", icon: "layers" as const, lead: "XOne.", text: "La plataforma low-code de movilidad con más de 20 años en operación real: apps de campo que funcionan sin cobertura e integradas con los sistemas de la empresa.", link: { label: "Conocer XOne", slug: "que-es-xone" } },
    { label: "Decide y orquesta", icon: "cpu" as const, lead: "NappAI.", text: "El motor de agentes de IA propio: cruza datos, aplica reglas, conecta sistemas y actúa.", link: { label: "Conocer NappAI", slug: "nappai" } },
    { label: "Conversa", icon: "headset" as const, lead: "NappAI Voice.", text: "Agentes de voz que atienden y hacen llamadas, entienden lo que se acuerda y lo convierten en acciones.", link: { label: "Conocer NappAI Voice", slug: "nappai-voice" } },
  ],
  en: [
    { label: "Builds", icon: "code" as const, lead: "XOneCode.", text: "Agents that understand the business problem and code the tailor-made application in a short time, on XOne.", link: { label: "Discover XOneCode", slug: "xonecode" } },
    { label: "Executes", icon: "layers" as const, lead: "XOne.", text: "The low-code mobility platform with more than 20 years in real operation: field apps that work without coverage and are integrated with the company's systems.", link: { label: "Discover XOne", slug: "que-es-xone" } },
    { label: "Decides and orchestrates", icon: "cpu" as const, lead: "NappAI.", text: "Our own AI agent engine: it cross-checks data, applies rules, connects systems and acts.", link: { label: "Discover NappAI", slug: "nappai" } },
    { label: "Converses", icon: "headset" as const, lead: "NappAI Voice.", text: "Voice agents that take and make calls, understand what is agreed and turn it into actions.", link: { label: "Discover NappAI Voice", slug: "nappai-voice" } },
  ],
};

const bucle = {
  es: [
    { title: "De la conversación a la calle", text: ["Un cliente llama para avisar de una avería. El agente de voz entiende el problema, NappAI consulta el ERP y propone técnico y franja, y la orden aparece en el móvil del técnico con toda la información."] },
    { title: "De la calle a la conversación", text: ["Un repartidor no encuentra a nadie en casa y pulsa un botón en la app. El agente de voz llama al destinatario, acuerda una alternativa y la ruta se actualiza."], note: "El segundo sentido es el más difícil de copiar: casi todo el mercado de voz trabaja con llamadas que entran. Que un hecho en la calle desencadene una conversación solo es posible si la misma plataforma está en el móvil del trabajador. Esa es la ventaja de XOne frente a las empresas que solo hacen bots." },
  ],
  en: [
    { title: "From the conversation to the street", text: ["A customer calls to report a breakdown. The voice agent understands the problem, NappAI checks the ERP and proposes a technician and a time slot, and the order appears on the technician's phone with all the information."] },
    { title: "From the street to the conversation", text: ["A delivery driver finds nobody at home and taps a button in the app. The voice agent calls the recipient, agrees an alternative and the route is updated."], note: "The second direction is the hardest to copy: almost the whole voice market works with inbound calls. An event in the street triggering a conversation is only possible if the same platform is on the worker's phone. That is XOne's advantage over companies that only build bots." },
  ],
};

const diferenciales = {
  es: [
    { label: "01", icon: "award" as const, lead: "Más de 20 años en operación de campo.", text: "La IA de XOne nace de conocer cómo trabaja un técnico, un repartidor o un inspector. Personal certificado y clientes en producción." },
    { label: "02", icon: "cpu" as const, lead: "IA propia.", text: "XOneCode, NappAI y NappAI Voice son desarrollos propios del ecosistema XOne, no una capa encima de un servicio ajeno." },
    { label: "03", icon: "loop" as const, lead: "El ciclo completo en una plataforma.", text: "Conversación, decisión, ejecución en campo y evolución del software, sin pegar herramientas de distintos proveedores." },
    { label: "04", icon: "signal" as const, lead: "Base probada.", text: "Apps que funcionan sin cobertura, con foto, firma y geolocalización, integradas con los sistemas de la empresa." },
    { label: "05", icon: "users" as const, lead: "La persona decide.", text: "Aprobaciones humanas, reglas que los agentes no pueden saltarse, traspaso a una persona cuando hace falta y registro de lo que hace cada agente." },
  ],
  en: [
    { label: "01", icon: "award" as const, lead: "More than 20 years in field operations.", text: "XOne's AI comes from knowing how a technician, a delivery driver or an inspector works. Certified staff and customers in production." },
    { label: "02", icon: "cpu" as const, lead: "Our own AI.", text: "XOneCode, NappAI and NappAI Voice are developed in-house within the XOne ecosystem, not a layer on top of someone else's service." },
    { label: "03", icon: "loop" as const, lead: "The full cycle on one platform.", text: "Conversation, decision, field execution and software evolution, without gluing together tools from different vendors." },
    { label: "04", icon: "signal" as const, lead: "Proven foundation.", text: "Apps that work without coverage, with photo, signature and geolocation, integrated with the company's systems." },
    { label: "05", icon: "users" as const, lead: "The person decides.", text: "Human approvals, rules the agents cannot skip, hand-off to a person when needed and a log of what each agent does." },
  ],
};

const paraQuien = {
  es: ["Servicio técnico y mantenimiento (SAT, climatización, ascensores, utilities, telecomunicaciones)", "Distribución, reparto y logística", "Energía, obra e industria (incluida la prevención de riesgos laborales)", "Asistencia, seguros y gestión de inmuebles", "Retail y atención asistencial domiciliaria"],
  en: ["Technical service and maintenance (after-sales, HVAC, lifts, utilities, telecommunications)", "Distribution, delivery and logistics", "Energy, construction and industry (including occupational risk prevention)", "Assistance, insurance and property management", "Retail and home care"],
};

/** Lo que dice cada ficha de NappAI / NappAI Voice («Nuestras piezas»). */
const enFichas: Record<"nappai" | "voice", Record<string, { es: string; en: string }>> = {
  nappai: {
    "gestion-inteligente-de-avisos": { es: "Nuestro motor de IA: se conecta al ERP, aplica las reglas y orquesta los sistemas.", en: "Our AI engine: it connects to the ERP, applies the rules and orchestrates the systems." },
    "parte-por-voz-en-campo": { es: "Extrae los datos, rellena el parte, actualiza el inventario y valida los requisitos.", en: "It extracts the data, fills in the report, updates the inventory and validates the requirements." },
    "atencion-inmediata-de-siniestros": { es: "Consulta la póliza, ordena la información y propone clasificación y proveedor.", en: "It checks the policy, organises the information and proposes a classification and a provider." },
    "recuperacion-de-entregas-fallidas": { es: "Comprueba el envío, decide qué opciones ofrecer y actualiza el punto de entrega.", en: "It checks the shipment, decides which options to offer and updates the delivery point." },
    "gestion-activa-de-riesgos-laborales": { es: "Gravedad y responsable, plazos y avisos, y decide cuándo escalar.", en: "Severity and owner, deadlines and reminders, and it decides when to escalate." },
    "gestion-de-cobros-integrada-en-ruta": { es: "Detecta los recibos devueltos y prepara las opciones autorizadas para cada cliente.", en: "It detects returned bills and prepares the authorised options for each customer." },
    "reactivacion-de-clientes-con-entrega-en-ruta": { es: "Analiza el historial, detecta a los clientes inactivos y prepara la propuesta con margen y stock.", en: "It analyses the history, detects inactive customers and prepares the offer with margin and stock." },
    "atencion-de-incidencias-24-7-en-inmuebles": { es: "Consulta reservas y protocolos, genera accesos temporales seguros y elige al técnico o la contrata.", en: "It checks bookings and protocols, generates secure temporary access and chooses the technician or contractor." },
    "recepcion-logistica-fuera-de-horario": { es: "Comprueba la entrega en el sistema, asigna muelle y aplica la política de acceso.", en: "It checks the delivery in the system, assigns a dock and applies the access policy." },
    "atencion-conectada-en-tienda": { es: "Consulta stock, pedidos y agenda, y gestiona las reservas.", en: "It checks stock, orders and the calendar, and manages reservations." },
    "seguimiento-asistencial-domiciliario": { es: "Detecta que algo no va como siempre y activa el protocolo.", en: "It detects that something is not as usual and triggers the protocol." },
  },
  voice: {
    "gestion-inteligente-de-avisos": { es: "Atiende y hace las llamadas, entiende la avería y actúa durante la conversación.", en: "It takes and makes the calls, understands the breakdown and acts during the conversation." },
    "parte-por-voz-en-campo": { es: "Convierte la voz en texto y separa la voz del técnico del ruido de alrededor.", en: "It turns speech into text and separates the technician's voice from the surrounding noise." },
    "atencion-inmediata-de-siniestros": { es: "Responde al momento, localiza al asegurado y le guía para enviar las fotos.", en: "It answers at once, locates the policyholder and guides them to send the photos." },
    "recuperacion-de-entregas-fallidas": { es: "Llama al destinatario, se identifica, ofrece alternativas y graba su autorización.", en: "It calls the recipient, identifies itself, offers alternatives and records their authorisation." },
    "gestion-activa-de-riesgos-laborales": { es: "Descripción por voz y llamada al responsable.", en: "Voice description and a call to the person in charge." },
    "gestion-de-cobros-integrada-en-ruta": { es: "Llama, escucha, propone y cierra un acuerdo concreto con el cliente.", en: "It calls, listens, proposes and closes a specific agreement with the customer." },
    "reactivacion-de-clientes-con-entrega-en-ruta": { es: "Llama con naturalidad comercial, presenta la propuesta y cierra el pedido.", en: "It calls with a natural sales manner, presents the offer and closes the order." },
    "atencion-de-incidencias-24-7-en-inmuebles": { es: "Atiende a cualquier hora, verifica la reserva y guía al huésped o inquilino en una solución rápida.", en: "It answers at any hour, verifies the booking and guides the guest or tenant through a quick fix." },
    "recepcion-logistica-fuera-de-horario": { es: "Atiende el interfono, pide expedición y matrícula, e indica el muelle al conductor.", en: "It answers the intercom, asks for the shipment and number plate, and tells the driver which dock to use." },
    "atencion-conectada-en-tienda": { es: "Atiende todas las llamadas a la tienda, también en las horas de más afluencia, y resuelve las consultas habituales.", en: "It answers every call to the store, including at the busiest hours, and resolves the usual questions." },
    "seguimiento-asistencial-domiciliario": { es: "La llamada diaria, con tono cálido y ritmo pausado.", en: "The daily call, with a warm tone and an unhurried pace." },
  },
};

const usosCells = (which: "nappai" | "voice", lang: "es" | "en") =>
  usos.map((u) => ({ label: u[lang].sector, icon: u.icon, lead: u[lang].name + ".", text: enFichas[which][u.slug][lang], link: { label: lang === "es" ? "Ver el caso de uso" : "See the use case", slug: usoSlug(u) } }));

const pieceRelated = (lang: "es" | "en") => piezas[lang].map((p) => ({ label: p.lead.replace(/\.$/, ""), desc: p.label, slug: p.link.slug, icon: p.icon }));

/* ---------- Páginas ---------- */

export const asdd: Record<string, Page> = {
  asdd: {
    es: {
      group: G.soluciones,
      seo: { title: "Agent Self-Driven Development Platform (ASDD) | XOne", description: "La plataforma donde agentes de IA propios entienden la operación de una empresa, construyen la solución que necesita, la ponen a trabajar en la calle y la mejoran con el uso, mientras las personas deciden." },
      hero: { title: "Agent Self-Driven", accent: "Development Platform", lead: "XOne pasa de ser una plataforma de movilidad a ser la plataforma donde agentes de IA propios entienden la operación de una empresa, construyen la solución que necesita, la ponen a trabajar en la calle y la mejoran con el uso, mientras las personas deciden.", labels: ["Entender", "Construir", "Operar", "Mejorar"] },
      blocks: [
        { type: "intro", lead: "Una plataforma donde agentes de IA propios entienden tu proceso, desarrollan la solución y la hacen funcionar en campo.", accent: "Más de 20 años de operación real, ahora con agentes.", text: ["Agent Self-Driven Development Platform es la combinación de los productos de XOne trabajando como un solo sistema, en el que los agentes de IA hacen avanzar el trabajo por sí mismos, dentro de las reglas que fija la empresa.", "ASDD no es un producto nuevo que haya que instalar: es la forma en que los productos de XOne trabajan juntos."] },
        { type: "cells", index: "El nombre", eyebrow: "Qué es ASDD", title: "Cuatro palabras,", accent: "una forma de trabajar", cols: 4, items: [
          { label: "Agent", lead: "Agentes de IA propios.", text: "El trabajo lo hacen agentes de IA propios de XOne: XOneCode, los agentes de NappAI y los agentes de voz de NappAI Voice." },
          { label: "Self-Driven", lead: "Hacen avanzar el trabajo.", text: "Los agentes no esperan a que alguien les dé cada orden: entienden el objetivo, proponen, ejecutan lo rutinario y avisan cuando algo necesita a una persona." },
          { label: "Development", lead: "Construyen y evolucionan aplicaciones.", text: "No solo se automatizan tareas: se construyen y evolucionan aplicaciones a medida de cada operación." },
          { label: "Platform", lead: "Sobre una base probada.", text: "Todo sucede sobre una misma base probada (XOne) con integraciones, seguridad y control, no sobre herramientas sueltas." },
        ] },
        { type: "chips", index: "Lo que no es", eyebrow: "Lo que ASDD no es", title: "La IA acelera y ejecuta,", accent: "las personas dirigen", cols: 4, text: "Es una plataforma de empresa en la que la IA acelera y ejecuta, y las personas dirigen.", items: ["No es un chatbot", "No es una herramienta de IA genérica", "No es «programar sin programar»", "No es una operación sin personas"] },
        { type: "cells", index: "Ciclo", eyebrow: "Cómo funciona", title: "Entender, construir, operar y mejorar,", accent: "en un ciclo que mueven los agentes y dirigen las personas", cols: 4, subtitle: "Es una secuencia real (cada paso alimenta al siguiente) y vuelve a empezar: por eso es un ciclo y no una lista.", items: ciclo.es },
        { type: "cells", index: "Piezas", eyebrow: "Las piezas de ASDD", title: "NappAI Voice escucha, NappAI piensa,", accent: "XOne ejecuta y XOneCode construye y mejora", cols: 4, subtitle: "Conexión con el ERP, el CRM y los sistemas que ya usa cada cliente.", items: piezas.es },
        { type: "rows", index: "Bucle", eyebrow: "El bucle cerrado", title: "Operaciones de bucle cerrado,", accent: "en los dos sentidos", subtitle: "Lo que se acuerda en una conversación se ejecuta en la calle, y lo que pasa en la calle vuelve al cliente en forma de conversación.", items: bucle.es },
        { type: "rows", index: "Cambio", eyebrow: "Qué cambia para el cliente", title: "Antes y", accent: "con ASDD", items: [
          { title: "Antes", text: [], list: ["Proyectos de software largos y rígidos.", "Aplicaciones que se quedan quietas tras la puesta en marcha.", "Personas haciendo de pegamento entre teléfono, oficina y calle.", "Llamadas perdidas fuera de horario o en picos.", "Datos que se consultan cuando alguien se acuerda.", "IA genérica que conversa pero no actúa."] },
          { title: "Con ASDD", text: [], list: ["Soluciones a medida que se construyen en poco tiempo y evolucionan.", "Una solución que propone mejoras a partir de lo que pasa en la operación.", "Agentes que conectan los tres y dejan a las personas para lo que aporta valor.", "Llamadas atendidas que generan acciones reales.", "Datos que disparan acciones según las reglas de la empresa.", "IA propia conectada a la ejecución en campo."] },
        ] },
        { type: "cells", index: "Diferencias", eyebrow: "Por qué XOne", title: "Lo que", accent: "nos diferencia", cols: 3, items: diferenciales.es },
        { type: "chips", index: "Para quién", eyebrow: "Para quién", title: "Empresas con personas trabajando", accent: "fuera de la oficina", cols: 3, text: "Perfiles que deciden: dirección de operaciones, dirección de servicio técnico, dirección de logística, dirección de sistemas y dirección general.", items: paraQuien.es },
      ],
      related: [{ label: "Casos de uso", desc: "Once soluciones reales con agentes", slug: "casos-de-uso-home", icon: "doc" }, ...pieceRelated("es").slice(0, 2)],
      relatedTitle: { title: "Empieza por", accent: "un caso de uso" },
    },
    en: {
      group: G.soluciones,
      seo: { title: "Agent Self-Driven Development Platform (ASDD) | XOne", description: "The platform where our own AI agents understand a company's operation, build the solution it needs, put it to work in the field and improve it with use, while people decide." },
      hero: { title: "Agent Self-Driven", accent: "Development Platform", lead: "XOne goes from being a mobility platform to being the platform where our own AI agents understand a company's operation, build the solution it needs, put it to work in the field and improve it with use, while people decide.", labels: ["Understand", "Build", "Operate", "Improve"] },
      blocks: [
        { type: "intro", lead: "A platform where our own AI agents understand your process, develop the solution and make it work in the field.", accent: "More than 20 years of real operation, now with agents.", text: ["Agent Self-Driven Development Platform is XOne's products working as a single system, in which AI agents move the work forward on their own, within the rules set by the company.", "ASDD is not a new product to install: it is the way XOne's products work together."] },
        { type: "cells", index: "The name", eyebrow: "What ASDD is", title: "Four words,", accent: "one way of working", cols: 4, items: [
          { label: "Agent", lead: "Our own AI agents.", text: "The work is done by XOne's own AI agents: XOneCode, NappAI agents and NappAI Voice voice agents." },
          { label: "Self-Driven", lead: "They move the work forward.", text: "The agents don't wait for someone to give every order: they understand the goal, propose, carry out the routine and flag when something needs a person." },
          { label: "Development", lead: "They build and evolve applications.", text: "It is not just about automating tasks: applications are built and evolved to fit each operation." },
          { label: "Platform", lead: "On a proven foundation.", text: "Everything happens on the same proven foundation (XOne) with integrations, security and control, not on loose tools." },
        ] },
        { type: "chips", index: "What it is not", eyebrow: "What ASDD is not", title: "AI speeds up and executes,", accent: "people lead", cols: 4, text: "It is an enterprise platform where AI speeds up and executes, and people lead.", items: ["It is not a chatbot", "It is not a generic AI tool", "It is not “coding without coding”", "It is not an operation without people"] },
        { type: "cells", index: "Cycle", eyebrow: "How it works", title: "Understand, build, operate and improve,", accent: "in a cycle driven by agents and led by people", cols: 4, subtitle: "It is a real sequence (each step feeds the next) and it starts again: that is why it is a cycle and not a list.", items: ciclo.en },
        { type: "cells", index: "Pieces", eyebrow: "The pieces of ASDD", title: "NappAI Voice listens, NappAI thinks,", accent: "XOne executes and XOneCode builds and improves", cols: 4, subtitle: "Connection with the ERP, the CRM and the systems each customer already uses.", items: piezas.en },
        { type: "rows", index: "Loop", eyebrow: "The closed loop", title: "Closed-loop operations,", accent: "in both directions", subtitle: "What is agreed in a conversation is executed in the street, and what happens in the street goes back to the customer as a conversation.", items: bucle.en },
        { type: "rows", index: "Change", eyebrow: "What changes for the customer", title: "Before and", accent: "with ASDD", items: [
          { title: "Before", text: [], list: ["Long, rigid software projects.", "Applications that stand still after go-live.", "People acting as glue between phone, office and street.", "Calls lost out of hours or at peaks.", "Data checked when someone remembers.", "Generic AI that talks but does not act."] },
          { title: "With ASDD", text: [], list: ["Tailor-made solutions built in a short time that keep evolving.", "A solution that proposes improvements based on what happens in the operation.", "Agents that connect all three and leave people for what adds value.", "Calls answered that trigger real actions.", "Data that triggers actions according to the company's rules.", "Our own AI connected to field execution."] },
        ] },
        { type: "cells", index: "Differences", eyebrow: "Why XOne", title: "What", accent: "sets us apart", cols: 3, items: diferenciales.en },
        { type: "chips", index: "Who it is for", eyebrow: "Who it is for", title: "Companies with people working", accent: "outside the office", cols: 3, text: "Decision-makers: heads of operations, technical service, logistics, IT and general management.", items: paraQuien.en },
      ],
      related: [{ label: "Use cases", desc: "Eleven real solutions with agents", slug: "casos-de-uso-home", icon: "doc" }, ...pieceRelated("en").slice(0, 2)],
      relatedTitle: { title: "Start with", accent: "a use case" },
    },
  },

  /* ------------------------------------------------------------------ */
  "xone-emm": {
    es: {
      group: G.soluciones,
      seo: { title: "XOne EMM: la solución de movilidad empresarial | XOne", description: "La solución de movilidad empresarial que XOne lleva años implantando, que agrupa todos los productos anteriores. Es la base sobre la que se apoya ASDD." },
      hero: { title: "XOne", accent: "EMM", lead: "La solución de movilidad empresarial que XOne lleva años implantando, que agrupa todos los productos anteriores. Es la base sobre la que se apoya ASDD.", labels: ["Movilidad", "Sin cobertura", "Integración", "Seguridad"], secondary: { label: "Descubrir ASDD", slug: "asdd" } },
      blocks: [
        { type: "intro", lead: "Lo que ya funciona sigue funcionando,", accent: "y ahora puede sumar agentes.", text: ["Cada cliente avanza al ritmo que quiere, empezando por un caso de uso concreto."], link: { label: "Ver los casos de uso", slug: "casos-de-uso-home" } },
        { type: "cells", index: "Plataforma", eyebrow: "La plataforma", title: "La plataforma", accent: "XOne", cols: 3, items: gES.plataforma.items.map((i) => ({ label: i.label, icon: i.icon as never, text: i.desc + ".", link: { label: "Ver", href: i.href } })) },
        { type: "cells", index: "Productos", eyebrow: "Los productos", title: "Todos los productos", accent: "de XOne EMM", cols: 3, items: gES["productos-xone"].items.map((i) => ({ label: i.label, icon: i.icon as never, text: i.desc + ".", link: { label: "Ver", href: i.href } })) },
      ],
    },
    en: {
      group: G.soluciones,
      seo: { title: "XOne EMM: the enterprise mobility solution | XOne", description: "The enterprise mobility solution XOne has been deploying for years, which brings together all the previous products. It is the foundation ASDD rests on." },
      hero: { title: "XOne", accent: "EMM", lead: "The enterprise mobility solution XOne has been deploying for years, which brings together all the previous products. It is the foundation ASDD rests on.", labels: ["Mobility", "Offline", "Integration", "Security"], secondary: { label: "Discover ASDD", slug: "asdd" } },
      blocks: [
        { type: "intro", lead: "What already works keeps working,", accent: "and now it can add agents.", text: ["Each customer moves at the pace they want, starting with a specific use case."], link: { label: "See the use cases", slug: "casos-de-uso-home" } },
        { type: "cells", index: "Platform", eyebrow: "The platform", title: "The XOne", accent: "platform", cols: 3, items: gEN.plataforma.items.map((i) => ({ label: i.label, icon: i.icon as never, text: i.desc + ".", link: { label: "See", href: i.href } })) },
        { type: "cells", index: "Products", eyebrow: "The products", title: "All the products", accent: "in XOne EMM", cols: 3, items: gEN["productos-xone"].items.map((i) => ({ label: i.label, icon: i.icon as never, text: i.desc + ".", link: { label: "See", href: i.href } })) },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  nappai: {
    es: {
      group: G.productos,
      seo: { title: "NappAI: el motor de agentes de IA propio | XOne", description: "NappAI decide y orquesta: cruza datos, aplica reglas, conecta sistemas y actúa." },
      hero: { title: "NappAI", accent: "decide y orquesta", lead: "El motor de agentes de IA propio: cruza datos, aplica reglas, conecta sistemas y actúa.", labels: ["Datos", "Reglas", "Sistemas", "Acción"], secondary: { label: "Descubrir ASDD", slug: "asdd" } },
      blocks: [
        { type: "intro", lead: "NappAI Voice escucha, NappAI piensa,", accent: "XOne ejecuta y XOneCode construye y mejora.", text: ["Los agentes de NappAI cruzan datos y actúan (asignar, avisar, escalar) mientras la aplicación trabaja en la calle.", "Lo que ocurre en la operación vuelve a los agentes, que detectan dónde se atasca el proceso y proponen cambios en la solución. La persona decide qué cambios se aplican."] },
        { type: "cells", index: "En la operación", eyebrow: "NappAI en los casos de uso", title: "Lo que hace NappAI", accent: "en cada solución", cols: 3, items: usosCells("nappai", "es") },
      ],
      related: pieceRelated("es").filter((r) => r.slug !== "nappai"), relatedTitle: { title: "Las otras", accent: "piezas de ASDD" },
    },
    en: {
      group: G.productos,
      seo: { title: "NappAI: our own AI agent engine | XOne", description: "NappAI decides and orchestrates: it cross-checks data, applies rules, connects systems and acts." },
      hero: { title: "NappAI", accent: "decides and orchestrates", lead: "Our own AI agent engine: it cross-checks data, applies rules, connects systems and acts.", labels: ["Data", "Rules", "Systems", "Action"], secondary: { label: "Discover ASDD", slug: "asdd" } },
      blocks: [
        { type: "intro", lead: "NappAI Voice listens, NappAI thinks,", accent: "XOne executes and XOneCode builds and improves.", text: ["NappAI agents cross-check data and act (assign, notify, escalate) while the application works in the field.", "What happens in the operation flows back to the agents, which detect where the process gets stuck and propose changes to the solution. The person decides which changes are applied."] },
        { type: "cells", index: "In operation", eyebrow: "NappAI in the use cases", title: "What NappAI does", accent: "in each solution", cols: 3, items: usosCells("nappai", "en") },
      ],
      related: pieceRelated("en").filter((r) => r.slug !== "nappai"), relatedTitle: { title: "The other", accent: "pieces of ASDD" },
    },
  },

  /* ------------------------------------------------------------------ */
  "nappai-voice": {
    es: {
      group: G.productos,
      seo: { title: "NappAI Voice: agentes de voz que actúan | XOne", description: "Agentes de voz que atienden y hacen llamadas, entienden lo que se acuerda y lo convierten en acciones." },
      hero: { title: "NappAI Voice", accent: "conversa", lead: "Agentes de voz que atienden y hacen llamadas, entienden lo que se acuerda y lo convierten en acciones.", labels: ["Atiende", "Llama", "Entiende", "Actúa"], secondary: { label: "Descubrir ASDD", slug: "asdd" } },
      blocks: [
        { type: "intro", lead: "De la calle a la conversación:", accent: "el sentido más difícil de copiar.", text: ["Casi todo el mercado de voz trabaja con llamadas que entran. Que un hecho en la calle desencadene una conversación solo es posible si la misma plataforma está en el móvil del trabajador.", "Un repartidor no encuentra a nadie en casa y pulsa un botón en la app. El agente de voz llama al destinatario, acuerda una alternativa y la ruta se actualiza."] },
        { type: "rows", index: "Bucle", eyebrow: "El bucle cerrado", title: "Lo que se acuerda por teléfono", accent: "se ejecuta en la calle", items: bucle.es },
        { type: "cells", index: "En la operación", eyebrow: "NappAI Voice en los casos de uso", title: "Lo que hace NappAI Voice", accent: "en cada solución", cols: 3, items: usosCells("voice", "es") },
      ],
      related: pieceRelated("es").filter((r) => r.slug !== "nappai-voice"), relatedTitle: { title: "Las otras", accent: "piezas de ASDD" },
    },
    en: {
      group: G.productos,
      seo: { title: "NappAI Voice: voice agents that act | XOne", description: "Voice agents that take and make calls, understand what is agreed and turn it into actions." },
      hero: { title: "NappAI Voice", accent: "converses", lead: "Voice agents that take and make calls, understand what is agreed and turn it into actions.", labels: ["Answers", "Calls", "Understands", "Acts"], secondary: { label: "Discover ASDD", slug: "asdd" } },
      blocks: [
        { type: "intro", lead: "From the street to the conversation:", accent: "the direction that is hardest to copy.", text: ["Almost the whole voice market works with inbound calls. An event in the street triggering a conversation is only possible if the same platform is on the worker's phone.", "A delivery driver finds nobody at home and taps a button in the app. The voice agent calls the recipient, agrees an alternative and the route is updated."] },
        { type: "rows", index: "Loop", eyebrow: "The closed loop", title: "What is agreed on the phone", accent: "is executed in the street", items: bucle.en },
        { type: "cells", index: "In operation", eyebrow: "NappAI Voice in the use cases", title: "What NappAI Voice does", accent: "in each solution", cols: 3, items: usosCells("voice", "en") },
      ],
      related: pieceRelated("en").filter((r) => r.slug !== "nappai-voice"), relatedTitle: { title: "The other", accent: "pieces of ASDD" },
    },
  },

  /* ------------------------------------------------------------------ */
  "casos-de-uso-home": {
    es: {
      group: G.usos,
      seo: { title: "Casos de uso: soluciones con agentes de IA | XOne", description: "Once soluciones en las que XOne, XOneCode, NappAI y NappAI Voice trabajan como un solo sistema: de la conversación a la calle y de la calle a la conversación." },
      hero: { title: "Casos", accent: "de uso", lead: "Empieza por un caso de uso. Te enseñamos cómo funciona con tu proceso.", labels: ["NappAI Voice", "NappAI", "XOne", "XOneCode"], secondary: { label: "Descubrir ASDD", slug: "asdd" } },
      blocks: [
        { type: "cells", index: "Soluciones", eyebrow: "Once casos de uso", title: "La llamada, la decisión", accent: "y la ejecución en campo", cols: 3, items: usos.map((u) => ({ label: `${u.n} · ${u.es.sector}`, icon: u.icon, lead: u.es.name + ".", text: u.es.lead, link: { label: "Ver el caso de uso", slug: usoSlug(u) } })) },
        { type: "chips", index: "Sectores", eyebrow: "Para quién", title: "Empresas con personas trabajando", accent: "fuera de la oficina", cols: 3, items: paraQuien.es },
      ],
      related: [{ label: "ASDD", desc: "Agent Self-Driven Development Platform", slug: "asdd", icon: "sparkle" }, { label: "Casos de éxito", desc: "Proyectos reales de nuestros clientes", slug: "casos-de-exito-xone", icon: "award" }, { label: "Contacto", desc: "Solicitar una demo", slug: "contacto", icon: "mail" }],
    },
    en: {
      group: G.usos,
      seo: { title: "Use cases: solutions with AI agents | XOne", description: "Eleven solutions in which XOne, XOneCode, NappAI and NappAI Voice work as a single system: from the conversation to the street and from the street to the conversation." },
      hero: { title: "Use", accent: "cases", lead: "Start with a use case. We'll show you how it works with your process.", labels: ["NappAI Voice", "NappAI", "XOne", "XOneCode"], secondary: { label: "Discover ASDD", slug: "asdd" } },
      blocks: [
        { type: "cells", index: "Solutions", eyebrow: "Eleven use cases", title: "The call, the decision", accent: "and field execution", cols: 3, items: usos.map((u) => ({ label: `${u.n} · ${u.en.sector}`, icon: u.icon, lead: u.en.name + ".", text: u.en.lead, link: { label: "See the use case", slug: usoSlug(u) } })) },
        { type: "chips", index: "Sectors", eyebrow: "Who it is for", title: "Companies with people working", accent: "outside the office", cols: 3, items: paraQuien.en },
      ],
      related: [{ label: "ASDD", desc: "Agent Self-Driven Development Platform", slug: "asdd", icon: "sparkle" }, { label: "Success stories", desc: "Real projects from our customers", slug: "casos-de-exito-xone", icon: "award" }, { label: "Contact", desc: "Request a demo", slug: "contacto", icon: "mail" }],
    },
  },
};

