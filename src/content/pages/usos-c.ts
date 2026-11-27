// Casos de uso 09–11 · texto literal de las fichas del cliente (docs/casos-de-uso/), EN traducido.
import { G, type Page, type PageDoc } from "./types";
import { usos, usoSlug, usoPdf, nextUsos, USOS_BASE } from "../usos";

const U = (slug: string) => usos.find((u) => u.slug === slug)!;
const crumb = { es: { label: "Casos de uso", slug: USOS_BASE }, en: { label: "Use cases", slug: USOS_BASE } };
const LABELS: [string, string, string, string] = ["NappAI Voice", "NappAI", "XOne", "XOneCode"];

/** Campos comunes de cada ficha (grupo, miga, relacionados, SEO y hero). */
const base = (slug: string, lang: "es" | "en", title: string, accent: string): Omit<PageDoc, "blocks"> => {
  const u = U(slug);
  const es = lang === "es";
  return {
    group: G.usos,
    crumb: crumb[lang],
    related: nextUsos(slug, lang),
    relatedTitle: es ? { title: "Otros casos", accent: "de uso" } : { title: "More", accent: "use cases" },
    seo: { title: `${u[lang].name} · ${es ? "Caso de uso" : "Use case"} | XOne`, description: u[lang].lead },
    hero: { title, accent, lead: u[lang].lead, labels: LABELS, secondary: { label: es ? "Descargar ficha PDF" : "Download PDF sheet", href: usoPdf(u) } },
  };
};

const S09 = "recepcion-logistica-fuera-de-horario";
const S10 = "atencion-conectada-en-tienda";
const S11 = "seguimiento-asistencial-domiciliario";

export const usosC: Record<string, Page> = {
  /* ------------------------------------------------------------------ */
  /* 09 · Recepción logística fuera de horario                          */
  [usoSlug(U(S09))]: {
    es: {
      ...base(S09, "es", "Recepción logística", "fuera de horario"),
      blocks: [
        { type: "intro", lead: "Centros logísticos, fábricas a turnos y puertos secos" },
        {
          type: "cells", index: "Pasos", eyebrow: "Del interfono al muelle", title: "Cuatro pasos", accent: "sin papeles ni esperas", cols: 4,
          items: [
            { label: "01", lead: "Llega", text: "El conductor llama al interfono de la barrera." },
            { label: "02", lead: "Se identifica", text: "NappAI Voice pide la expedición y la matrícula." },
            { label: "03", lead: "Se comprueba", text: "NappAI verifica la entrega, la franja y el muelle libre." },
            { label: "04", lead: "Entra", text: "Acceso según tu política y aviso al vigilante en XOne." },
          ],
        },
        {
          type: "chips", index: "Asignación", eyebrow: "El muelle correcto", title: "Cada camión, al muelle", accent: "que le corresponde", cols: 3,
          subtitle: "NappAI cruza la expedición con el sistema de almacén, comprueba la franja autorizada y asigna un muelle libre. El conductor recibe la indicación por el interfono y el equipo del turno lo ve al momento.",
          text: "Estado de los muelles · Ejemplo · 03:12",
          items: ["Muelle 1 · Ocupado", "Muelle 2 · Libre", "Muelle 3 · Ocupado", "Muelle 4 · Asignado", "Muelle 5 · Libre"],
        },
        {
          type: "rows", index: "Seguridad", eyebrow: "Tu política de seguridad", title: "Tú decides cómo", accent: "se abre la barrera",
          subtitle: "Abrir un acceso es una decisión de seguridad física. La solución se adapta a la política de cada centro: apertura automática para entregas autorizadas o confirmación del vigilante.",
          items: [
            { title: "Apertura automática", text: [], list: [
              "1 · Conductor identificado · Expedición y matrícula comprobadas por NappAI.",
              "2 · Barrera abierta · La política permite abrir de forma automática para entregas autorizadas.",
              "3 · Vigilante avisado · Recibe en XOne el muelle y la tarea: verificar el precinto.",
            ] },
            { title: "Con confirmación del vigilante", text: [], list: [
              "1 · Conductor identificado · Expedición y matrícula comprobadas por NappAI.",
              "2 · Vigilante confirma · Recibe la solicitud en XOne y autoriza la apertura con un toque.",
              "3 · Barrera abierta · El camión entra al muelle asignado y el vigilante verifica el precinto.",
            ] },
          ],
        },
        {
          type: "cells", index: "Integración", eyebrow: "Lo que hay que conectar", title: "Un proyecto", accent: "con piezas físicas", cols: 4,
          subtitle: "Este caso combina nuestro software con el equipamiento de tu centro. Lo integramos contigo, con el proveedor que ya tienes o con un socio especializado.",
          items: [
            { label: "Interfono", text: "El punto de contacto con el conductor, conectado a NappAI Voice." },
            { label: "Cámaras de matrícula", text: "Lectura de matrícula como segunda comprobación." },
            { label: "Barrera y accesos", text: "Control de apertura según la política del centro." },
            { label: "Sistema de almacén", text: "Expediciones, franjas y estado de los muelles." },
          ],
        },
        {
          type: "cells", index: "Solución", eyebrow: "Nuestras piezas", title: "El turno de noche,", accent: "sin huecos", cols: 4,
          items: [
            { label: "NappAI Voice", text: "Atiende el interfono, pide expedición y matrícula, e indica el muelle al conductor." },
            { label: "NappAI", text: "Comprueba la entrega en el sistema, asigna muelle y aplica la política de acceso." },
            { label: "XOne", text: "Avisa al vigilante en ronda con el muelle y la tarea de verificación del precinto." },
            { label: "XOneCode", text: "Adapta flujos e integraciones al equipamiento y procedimientos de cada centro." },
          ],
        },
        {
          type: "chips", index: "Sectores", eyebrow: "Para quién", title: "Para quien recibe mercancía", accent: "a cualquier hora", cols: 4,
          items: ["Centros logísticos", "Fábricas con turnos continuos", "Puertos secos y plataformas", "Parques empresariales"],
          text: "Lo impulsa la dirección de logística o de seguridad, con sistemas como aliado para conectar el almacén y los accesos.",
        },
        {
          type: "cells", index: "Piloto", eyebrow: "Resultados", title: "Qué mediremos juntos", accent: "en tu piloto", cols: 3,
          subtitle: "No prometemos cifras antes de medir. Cada piloto define al empezar qué se mide y cómo. La apertura de accesos siempre sigue la política de seguridad de cada centro. El agente se identifica como asistente automático y puede pasar la comunicación al vigilante.",
          items: [
            { label: "Tiempo de espera de los camiones", text: "Desde la llegada a la barrera hasta el muelle." },
            { label: "Recepciones fuera de horario", text: "Entregas atendidas sin personal en la garita." },
            { label: "Incidencias de acceso", text: "Llegadas que requieren intervención del vigilante." },
          ],
        },
      ],
    },
    en: {
      ...base(S09, "en", "Out-of-hours", "logistics reception"),
      blocks: [
        { type: "intro", lead: "Logistics centres, shift-based factories and dry ports" },
        {
          type: "cells", index: "Steps", eyebrow: "From the intercom to the dock", title: "Four steps,", accent: "no paperwork, no waiting", cols: 4,
          items: [
            { label: "01", lead: "Arrives", text: "The driver calls the barrier intercom." },
            { label: "02", lead: "Identifies", text: "NappAI Voice asks for the shipment and the licence plate." },
            { label: "03", lead: "Gets checked", text: "NappAI verifies the delivery, the time slot and the free dock." },
            { label: "04", lead: "Enters", text: "Access according to your policy, and the guard is alerted in XOne." },
          ],
        },
        {
          type: "chips", index: "Allocation", eyebrow: "The right dock", title: "Every truck, to the dock", accent: "it belongs at", cols: 3,
          subtitle: "NappAI cross-checks the shipment with the warehouse system, checks the authorised time slot and assigns a free dock. The driver gets the directions over the intercom and the shift team sees it straight away.",
          text: "Dock status · Example · 03:12",
          items: ["Dock 1 · Occupied", "Dock 2 · Free", "Dock 3 · Occupied", "Dock 4 · Assigned", "Dock 5 · Free"],
        },
        {
          type: "rows", index: "Security", eyebrow: "Your security policy", title: "You decide how", accent: "the barrier opens",
          subtitle: "Opening an access point is a physical security decision. The solution adapts to each centre's policy: automatic opening for authorised deliveries, or confirmation by the guard.",
          items: [
            { title: "Automatic opening", text: [], list: [
              "1 · Driver identified · Shipment and licence plate checked by NappAI.",
              "2 · Barrier open · The policy allows automatic opening for authorised deliveries.",
              "3 · Guard alerted · Receives the dock and the task in XOne: check the seal.",
            ] },
            { title: "With the guard's confirmation", text: [], list: [
              "1 · Driver identified · Shipment and licence plate checked by NappAI.",
              "2 · Guard confirms · Receives the request in XOne and authorises the opening with one tap.",
              "3 · Barrier open · The truck enters the assigned dock and the guard checks the seal.",
            ] },
          ],
        },
        {
          type: "cells", index: "Integration", eyebrow: "What needs connecting", title: "A project", accent: "with physical parts", cols: 4,
          subtitle: "This case combines our software with your centre's equipment. We integrate it with you, with the supplier you already have or with a specialist partner.",
          items: [
            { label: "Intercom", text: "The point of contact with the driver, connected to NappAI Voice." },
            { label: "Licence plate cameras", text: "Plate reading as a second check." },
            { label: "Barrier and access points", text: "Opening control according to the centre's policy." },
            { label: "Warehouse system", text: "Shipments, time slots and dock status." },
          ],
        },
        {
          type: "cells", index: "Solution", eyebrow: "Our pieces", title: "The night shift,", accent: "with no gaps", cols: 4,
          items: [
            { label: "NappAI Voice", text: "Answers the intercom, asks for the shipment and licence plate, and tells the driver which dock to go to." },
            { label: "NappAI", text: "Checks the delivery in the system, assigns a dock and applies the access policy." },
            { label: "XOne", text: "Alerts the guard on patrol with the dock and the seal-check task." },
            { label: "XOneCode", text: "Adapts flows and integrations to each centre's equipment and procedures." },
          ],
        },
        {
          type: "chips", index: "Sectors", eyebrow: "Who it's for", title: "For those who receive goods", accent: "at any hour", cols: 4,
          items: ["Logistics centres", "Factories with continuous shifts", "Dry ports and hubs", "Business parks"],
          text: "It is driven by logistics or security management, with IT as an ally to connect the warehouse and the access points.",
        },
        {
          type: "cells", index: "Pilot", eyebrow: "Results", title: "What we'll measure together", accent: "in your pilot", cols: 3,
          subtitle: "We don't promise figures before measuring. Each pilot defines at the start what is measured and how. Opening access points always follows each centre's security policy. The agent identifies itself as an automated assistant and can hand the conversation over to the guard.",
          items: [
            { label: "Truck waiting time", text: "From arrival at the barrier to the dock." },
            { label: "Out-of-hours receptions", text: "Deliveries handled with no staff at the gatehouse." },
            { label: "Access incidents", text: "Arrivals that need the guard to step in." },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  /* 10 · Atención conectada en tienda                                  */
  [usoSlug(U(S10))]: {
    es: {
      ...base(S10, "es", "Atención conectada", "en tienda"),
      blocks: [
        { type: "intro", lead: "Retail, bricolaje, electrónica y concesionarios" },
        {
          type: "rows", index: "Escenas", eyebrow: "Dos escenas a la vez", title: "Lo que pasa al teléfono", accent: "y lo que pasa en la sala",
          subtitle: "Mientras el agente atiende la llamada, el equipo sigue con los clientes que tiene delante. Y cuando hace falta, recibe exactamente lo que tiene que preparar.",
          items: [
            { title: "Al teléfono", text: [], list: [
              "01 · Una llamada entra en la tienda. El cliente pregunta por un producto.",
              "02 · El agente responde al momento. NappAI Voice consulta el stock real.",
              "03 · Se reserva el artículo. El cliente recibe la confirmación.",
              "04 · El cliente llega a recoger. Su pedido le está esperando.",
            ] },
            { title: "En la sala", text: [], list: [
              "01 · El dependiente sigue atendiendo a quien tiene delante.",
              "02 · Nadie tiene que dejar la sala para coger el teléfono.",
              "03 · El dependiente recibe un aviso en su dispositivo XOne.",
              "04 · El producto ya está preparado en caja.",
            ] },
          ],
        },
        {
          type: "rows", index: "Preguntas", eyebrow: "Ponte en su lugar", title: "Pregunta", accent: "como un cliente",
          items: [
            { title: "¿Tenéis este abrigo en la talla M?", text: ["NappAI Voice · Consulta el stock real de la tienda y del almacén, y ofrece reservarlo.", "Aviso en XOne al equipo de sala · «Recogida en 30 minutos: abrigo azul, talla M. Sacar de almacén.»"] },
            { title: "¿Hasta qué hora abrís hoy?", text: ["NappAI Voice · Responde al momento con el horario de esa tienda, sin pasar la llamada.", "Aviso en XOne al equipo de sala · Sin aviso: la consulta se resuelve sola y el equipo sigue atendiendo en sala."] },
            { title: "¿Ha llegado ya mi pedido?", text: ["NappAI Voice · Busca el pedido, confirma que está en tienda y propone una hora de recogida.", "Aviso en XOne al equipo de sala · «El cliente del pedido 8812 pasa a las 18:00. Dejarlo preparado en caja.»"] },
            { title: "Quiero ver el coche esta tarde", text: ["NappAI Voice · Propone huecos disponibles y reserva la visita con un comercial.", "Aviso en XOne al equipo de sala · «Visita a las 17:30 para ver el modelo híbrido. Comercial asignado: tú.»"] },
          ],
        },
        {
          type: "cells", index: "Roles", eyebrow: "Control", title: "La tienda sigue siendo", accent: "de tu equipo", cols: 3,
          items: [
            { label: "La solución", text: "Atiende las llamadas, consulta el stock, reserva y avisa al equipo de sala." },
            { label: "El dependiente", text: "Prepara las recogidas, atiende en persona y recibe las llamadas que necesitan su criterio." },
            { label: "La empresa", text: "Define qué se puede reservar, durante cuánto tiempo y qué consultas pasan a una persona." },
          ],
        },
        {
          type: "cells", index: "Solución", eyebrow: "Nuestras piezas", title: "La tienda, conectada", accent: "de punta a punta", cols: 4,
          items: [
            { label: "NappAI Voice", text: "Atiende todas las llamadas a la tienda, también en las horas de más afluencia, y resuelve las consultas habituales." },
            { label: "NappAI", text: "Consulta stock, pedidos y agenda, y gestiona las reservas." },
            { label: "XOne", text: "Avisos priorizados en el dispositivo del dependiente." },
            { label: "XOneCode", text: "Adapta flujos, avisos e integraciones a cada cadena y formato de tienda." },
          ],
        },
        {
          type: "chips", index: "Sectores", eyebrow: "Para quién", title: "Para quien no quiere perder", accent: "una venta por un teléfono", cols: 4,
          items: ["Cadenas de moda", "Bricolaje", "Electrónica de consumo", "Concesionarios"],
          text: "Lo impulsa la dirección de tiendas o de experiencia de cliente, con sistemas como aliado para conectar el stock, los pedidos y la centralita.",
        },
        {
          type: "cells", index: "Piloto", eyebrow: "Resultados", title: "Qué mediremos juntos", accent: "en tu piloto", cols: 3,
          subtitle: "No prometemos cifras antes de medir. Cada piloto define al empezar qué se mide y cómo. Este caso necesita conocer el stock de cada tienda en tiempo real. Lo revisamos contigo antes de empezar. El agente se identifica como asistente automático y puede pasar la llamada a la tienda.",
          items: [
            { label: "Llamadas atendidas", text: "Qué parte de las llamadas a tienda recibe respuesta." },
            { label: "Reservas realizadas", text: "Productos reservados por teléfono." },
            { label: "Recogidas completadas", text: "Reservas que terminan en una visita a la tienda." },
          ],
        },
      ],
    },
    en: {
      ...base(S10, "en", "Connected", "in-store service"),
      blocks: [
        { type: "intro", lead: "Retail, DIY, electronics and car dealerships" },
        {
          type: "rows", index: "Scenes", eyebrow: "Two scenes at once", title: "What happens on the phone", accent: "and what happens on the floor",
          subtitle: "While the agent takes the call, the team carries on with the customers in front of them. And when needed, it receives exactly what it has to get ready.",
          items: [
            { title: "On the phone", text: [], list: [
              "01 · A call comes into the store. The customer asks about a product.",
              "02 · The agent answers straight away. NappAI Voice checks the real stock.",
              "03 · The item is reserved. The customer receives the confirmation.",
              "04 · The customer comes to pick it up. Their order is waiting for them.",
            ] },
            { title: "On the shop floor", text: [], list: [
              "01 · The sales assistant keeps serving the person in front of them.",
              "02 · Nobody has to leave the floor to pick up the phone.",
              "03 · The sales assistant gets an alert on their XOne device.",
              "04 · The product is already waiting at the till.",
            ] },
          ],
        },
        {
          type: "rows", index: "Questions", eyebrow: "Put yourself in their shoes", title: "Ask", accent: "like a customer",
          items: [
            { title: "Do you have this coat in size M?", text: ["NappAI Voice · Checks the real stock in the store and the warehouse, and offers to reserve it.", "XOne alert to the floor team · “Pickup in 30 minutes: blue coat, size M. Bring out from the stockroom.”"] },
            { title: "What time do you close today?", text: ["NappAI Voice · Answers straight away with that store's opening hours, without passing the call on.", "XOne alert to the floor team · No alert: the query resolves itself and the team keeps serving on the floor."] },
            { title: "Has my order arrived yet?", text: ["NappAI Voice · Looks up the order, confirms it is in the store and suggests a pickup time.", "XOne alert to the floor team · “The customer with order 8812 is coming at 18:00. Have it ready at the till.”"] },
            { title: "I'd like to see the car this afternoon", text: ["NappAI Voice · Offers available slots and books the visit with a salesperson.", "XOne alert to the floor team · “Visit at 17:30 to see the hybrid model. Assigned salesperson: you.”"] },
          ],
        },
        {
          type: "cells", index: "Roles", eyebrow: "Control", title: "The store still belongs", accent: "to your team", cols: 3,
          items: [
            { label: "The solution", text: "Answers calls, checks stock, makes reservations and alerts the floor team." },
            { label: "The sales assistant", text: "Prepares pickups, serves in person and takes the calls that need their judgement." },
            { label: "The company", text: "Defines what can be reserved, for how long, and which queries go to a person." },
          ],
        },
        {
          type: "cells", index: "Solution", eyebrow: "Our pieces", title: "The store, connected", accent: "end to end", cols: 4,
          items: [
            { label: "NappAI Voice", text: "Answers every call to the store, including at the busiest times, and resolves the usual queries." },
            { label: "NappAI", text: "Checks stock, orders and the calendar, and manages reservations." },
            { label: "XOne", text: "Prioritised alerts on the sales assistant's device." },
            { label: "XOneCode", text: "Adapts flows, alerts and integrations to each chain and store format." },
          ],
        },
        {
          type: "chips", index: "Sectors", eyebrow: "Who it's for", title: "For those who don't want to lose", accent: "a sale over a phone call", cols: 4,
          items: ["Fashion chains", "DIY", "Consumer electronics", "Car dealerships"],
          text: "It is driven by store or customer experience management, with IT as an ally to connect stock, orders and the switchboard.",
        },
        {
          type: "cells", index: "Pilot", eyebrow: "Results", title: "What we'll measure together", accent: "in your pilot", cols: 3,
          subtitle: "We don't promise figures before measuring. Each pilot defines at the start what is measured and how. This case needs to know each store's stock in real time. We review it with you before starting. The agent identifies itself as an automated assistant and can transfer the call to the store.",
          items: [
            { label: "Calls answered", text: "What share of calls to the store gets an answer." },
            { label: "Reservations made", text: "Products reserved by phone." },
            { label: "Pickups completed", text: "Reservations that end in a visit to the store." },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  /* 11 · Seguimiento asistencial domiciliario                          */
  [usoSlug(U(S11))]: {
    es: {
      ...base(S11, "es", "Seguimiento asistencial", "domiciliario"),
      blocks: [
        { type: "intro", lead: "Ayuda a domicilio, salud y servicios sociales" },
        {
          type: "cells", index: "Un día", eyebrow: "Un día de acompañamiento", title: "Cerca cada día,", accent: "presentes cuando hace falta", cols: 4,
          subtitle: "Un ejemplo de cómo se encadenan la llamada, el aviso, la visita y la tranquilidad de la familia.",
          items: [
            { label: "9:00", lead: "Una llamada de acompañamiento", text: "NappAI Voice saluda, conversa un rato y recuerda la medicación del día." },
            { label: "9:06", lead: "Algo no va como siempre", text: "Si la persona dice que se encuentra mal, se nota desorientada o no contesta tras dos intentos, NappAI avisa a la coordinación." },
            { label: "9:10", lead: "El auxiliar más cercano, en camino", text: "XOne le envía una visita prioritaria con el protocolo de actuación que define la entidad." },
            { label: "10:05", lead: "La familia, tranquila", text: "Cuando el auxiliar confirma en XOne que todo está bien, el agente llama a los familiares para informarles." },
          ],
        },
        {
          type: "rows", index: "Alcance", eyebrow: "Con los pies en el suelo", title: "Lo que hace", accent: "y lo que no hace",
          subtitle: "Un servicio de acompañamiento y coordinación, pensado para que los profesionales lleguen antes a quien les necesita.",
          items: [
            { title: "Lo que hace", text: [], list: [
              "Acompaña con una llamada diaria y recuerda la medicación",
              "Detecta que algo no va como siempre y avisa a la coordinación",
              "Envía al auxiliar más cercano con su protocolo",
              "Informa a la familia cuando todo está en orden",
            ] },
            { title: "Lo que no hace", text: [], list: [
              "No diagnostica ni da indicaciones médicas",
              "No sustituye a los profesionales sanitarios ni sociales",
              "No sustituye los servicios de emergencia",
              "No toma decisiones asistenciales: las toma el equipo",
            ] },
          ],
        },
        {
          type: "rows", index: "Protocolos", eyebrow: "Cada respuesta, su protocolo", title: "¿Qué pasa según", accent: "lo que responda?",
          subtitle: "Los protocolos los define siempre la entidad.",
          items: [
            { title: "«Muy bien, ya me la he tomado»", text: ["Lo que hace el agente · La llamada termina con normalidad. Queda registrada la toma de la medicación.", "Lo que pasa después · Seguimiento habitual. Nadie tiene que hacer nada."] },
            { title: "«Hoy me noto un poco mareada»", text: ["Lo que hace el agente · El agente la tranquiliza, le pregunta si necesita ayuda y no da indicaciones médicas.", "Lo que pasa después · Aviso a la coordinación y visita prioritaria del auxiliar con su protocolo."] },
            { title: "No contesta tras dos intentos", text: ["Lo que hace el agente · El agente vuelve a intentarlo según el protocolo de la entidad.", "Lo que pasa después · Aviso a la coordinación para comprobar que todo está bien."] },
            { title: "Señal de urgencia", text: ["Lo que hace el agente · El agente le indica que llame al 112 o le pone en contacto con una persona de inmediato.", "Lo que pasa después · La coordinación activa su protocolo de emergencia."] },
          ],
        },
        {
          type: "cells", index: "Datos", eyebrow: "Privacidad y confianza", title: "Datos especialmente protegidos,", accent: "tratados como tales", cols: 4,
          subtitle: "Este caso trabaja con información sensible. Por eso se diseña con cada entidad, con su delegado de protección de datos y dentro de su marco normativo.",
          items: [
            { label: "En tu infraestructura", text: "NappAI puede instalarse en los servidores de la entidad, con modelos propios." },
            { label: "Acceso restringido", text: "Cada profesional ve solo lo que necesita para su trabajo." },
            { label: "Consentimiento", text: "Las personas y sus familias saben quién llama y por qué." },
            { label: "Transparencia", text: "El agente se identifica como asistente automático en cada llamada." },
          ],
        },
        {
          type: "cells", index: "Solución", eyebrow: "Nuestras piezas", title: "Cuatro piezas al servicio", accent: "de las personas", cols: 4,
          items: [
            { label: "NappAI Voice", text: "La llamada diaria, con tono cálido y ritmo pausado." },
            { label: "NappAI", text: "Detecta que algo no va como siempre y activa el protocolo." },
            { label: "XOne", text: "La visita prioritaria en el móvil del auxiliar, con su protocolo." },
            { label: "XOneCode", text: "Adapta protocolos y pantallas a cada servicio y entidad." },
          ],
        },
        {
          type: "chips", index: "Sectores", eyebrow: "Para quién", title: "Para quien cuida de las personas", accent: "en su casa", cols: 4,
          items: ["Servicios de ayuda a domicilio", "Aseguradoras de salud", "Residencias y centros de día", "Administraciones públicas"],
          text: "Lo impulsa la dirección asistencial o la gerencia, junto con el área de protección de datos y sistemas.",
        },
        {
          type: "cells", index: "Piloto", eyebrow: "Resultados", title: "Qué mediremos juntos", accent: "en tu piloto", cols: 3,
          subtitle: "No prometemos cifras antes de medir. Cada piloto define al empezar qué se mide y cómo, con la aceptación de las personas como primer indicador. Servicio de acompañamiento y coordinación, sin función diagnóstica. Ante una urgencia, siempre se deriva al 112 o a una persona del equipo.",
          items: [
            { label: "Personas acompañadas cada día", text: "Usuarios con su llamada diaria realizada." },
            { label: "Tiempo de respuesta ante una alerta", text: "Desde el aviso hasta la llegada del auxiliar." },
            { label: "Aceptación del servicio", text: "Cómo valoran la llamada las personas y sus familias." },
          ],
        },
      ],
    },
    en: {
      ...base(S11, "en", "Home care", "follow-up"),
      blocks: [
        { type: "intro", lead: "Home help, health and social services" },
        {
          type: "cells", index: "A day", eyebrow: "A day of companionship", title: "Close every day,", accent: "there when it matters", cols: 4,
          subtitle: "An example of how the call, the alert, the visit and the family's peace of mind link together.",
          items: [
            { label: "9:00", lead: "A companionship call", text: "NappAI Voice says hello, chats for a while and reminds them of the day's medication." },
            { label: "9:06", lead: "Something is not as usual", text: "If the person says they feel unwell, seems disoriented or does not answer after two attempts, NappAI alerts the coordination team." },
            { label: "9:10", lead: "The nearest care worker, on the way", text: "XOne sends them a priority visit with the action protocol defined by the organisation." },
            { label: "10:05", lead: "The family, at ease", text: "When the care worker confirms in XOne that everything is fine, the agent calls the relatives to let them know." },
          ],
        },
        {
          type: "rows", index: "Scope", eyebrow: "Feet on the ground", title: "What it does", accent: "and what it doesn't",
          subtitle: "A companionship and coordination service, designed so that professionals reach those who need them sooner.",
          items: [
            { title: "What it does", text: [], list: [
              "Keeps people company with a daily call and reminds them of their medication",
              "Detects that something is not as usual and alerts the coordination team",
              "Sends the nearest care worker with their protocol",
              "Informs the family when everything is in order",
            ] },
            { title: "What it doesn't do", text: [], list: [
              "It does not diagnose or give medical advice",
              "It does not replace health or social care professionals",
              "It does not replace emergency services",
              "It does not make care decisions: the team does",
            ] },
          ],
        },
        {
          type: "rows", index: "Protocols", eyebrow: "Every answer, its protocol", title: "What happens depending", accent: "on the answer?",
          subtitle: "The protocols are always defined by the organisation.",
          items: [
            { title: "“Very well, I've already taken it”", text: ["What the agent does · The call ends normally. The medication intake is recorded.", "What happens next · Usual follow-up. Nobody has to do anything."] },
            { title: "“I feel a bit dizzy today”", text: ["What the agent does · The agent reassures her, asks if she needs help and gives no medical advice.", "What happens next · Alert to the coordination team and a priority visit from the care worker with their protocol."] },
            { title: "No answer after two attempts", text: ["What the agent does · The agent tries again according to the organisation's protocol.", "What happens next · Alert to the coordination team to check that everything is fine."] },
            { title: "Emergency signal", text: ["What the agent does · The agent tells them to call 112 or puts them in touch with a person immediately.", "What happens next · The coordination team activates its emergency protocol."] },
          ],
        },
        {
          type: "cells", index: "Data", eyebrow: "Privacy and trust", title: "Specially protected data,", accent: "treated as such", cols: 4,
          subtitle: "This case works with sensitive information. That is why it is designed with each organisation, with its data protection officer and within its regulatory framework.",
          items: [
            { label: "On your infrastructure", text: "NappAI can be installed on the organisation's servers, with its own models." },
            { label: "Restricted access", text: "Each professional sees only what they need for their work." },
            { label: "Consent", text: "People and their families know who is calling and why." },
            { label: "Transparency", text: "The agent identifies itself as an automated assistant on every call." },
          ],
        },
        {
          type: "cells", index: "Solution", eyebrow: "Our pieces", title: "Four pieces at the service", accent: "of people", cols: 4,
          items: [
            { label: "NappAI Voice", text: "The daily call, with a warm tone and an unhurried pace." },
            { label: "NappAI", text: "Detects that something is not as usual and triggers the protocol." },
            { label: "XOne", text: "The priority visit on the care worker's phone, with its protocol." },
            { label: "XOneCode", text: "Adapts protocols and screens to each service and organisation." },
          ],
        },
        {
          type: "chips", index: "Sectors", eyebrow: "Who it's for", title: "For those who care for people", accent: "in their own homes", cols: 4,
          items: ["Home help services", "Health insurers", "Care homes and day centres", "Public administrations"],
          text: "It is driven by care management or senior management, together with the data protection and IT departments.",
        },
        {
          type: "cells", index: "Pilot", eyebrow: "Results", title: "What we'll measure together", accent: "in your pilot", cols: 3,
          subtitle: "We don't promise figures before measuring. Each pilot defines at the start what is measured and how, with people's acceptance as the first indicator. A companionship and coordination service, with no diagnostic function. In an emergency, it is always referred to 112 or to a person on the team.",
          items: [
            { label: "People accompanied each day", text: "Users whose daily call has been made." },
            { label: "Response time to an alert", text: "From the alert to the care worker's arrival." },
            { label: "Service acceptance", text: "How people and their families rate the call." },
          ],
        },
      ],
    },
  },
};
