// Lote 3 · Menú «Soluciones» (sin los casos de éxito, que están en casos.ts). Textos reales de xone.es/{slug}/ y /en/ (24-nov-2026).
// Reescrituras propias (titulares de sección, frases de apertura): ver CONTENT_MAP.md › «Páginas · lote 3».
import type { Page, PageDoc } from "./types";
import { CASES } from "./casos";

const PDF_KIT = "https://xone.es/media/SOLICITUDKITDIGITAL.pdf";
const ACELERA = "https://www.acelerapyme.gob.es/kit-digital";

/* Páginas del Kit Digital: miga de pan y «sigue explorando» comunes. */
const KIT = {
  es: [
    { label: "Kit Digital", desc: "Ayudas de hasta 12.000 € para digitalizar tu empresa", slug: "kit-digital", icon: "euro" as const },
    { label: "Sitio web y presencia en Internet", desc: "Hasta 2.000 € para tu página web", slug: "sitio-web-y-presencia-basica-en-internet", icon: "grid" as const },
    { label: "BI y analítica", desc: "Hasta 4.000 € para explotar tus datos", slug: "xone-agente-digitalizador-bi", icon: "activity" as const },
    { label: "Gestión de procesos", desc: "Hasta 6.000 € para automatizar tu negocio", slug: "xone-agente-digitalizador-procesos", icon: "loop" as const },
  ],
  en: [
    { label: "Kit Digital", desc: "Grants of up to €12,000 to digitalize your company", slug: "kit-digital", icon: "euro" as const },
    { label: "Website and online presence", desc: "Up to €2,000 for your website", slug: "sitio-web-y-presencia-basica-en-internet", icon: "grid" as const },
    { label: "BI and analytics", desc: "Up to €4,000 to make the most of your data", slug: "xone-agente-digitalizador-bi", icon: "activity" as const },
    { label: "Process management", desc: "Up to €6,000 to automate your business", slug: "xone-agente-digitalizador-procesos", icon: "loop" as const },
  ],
};
const kitRelated = (slug: string, lang: "es" | "en"): PageDoc["related"] => KIT[lang].filter((k) => k.slug !== slug);
const kitCrumb = { es: { label: "Kit Digital", slug: "kit-digital" }, en: { label: "Kit Digital", slug: "kit-digital" } };

/** Página de categoría del Kit Digital (misma estructura en las tres). */
function kitCategory(lang: "es" | "en", o: { slug: string; title: string; accent: string; lead: string; seoTitle: string; goal: string; amount: string; maxLabel: string; offerTitle: string; offerAccent: string; offer: string[]; visual?: "monitor" | "pipeline" }): PageDoc {
  const es = lang === "es";
  return {
    group: 2, crumb: kitCrumb[lang], related: kitRelated(o.slug, lang),
    seo: { title: `${o.seoTitle} | XOne`, description: o.lead },
    hero: { title: o.title, accent: o.accent, lead: o.lead, labels: ["Kit Digital", "Next Gen EU", es ? "Pymes" : "SMEs", es ? "Autónomos" : "Freelancers"], secondary: { label: es ? "Cómo solicitar el Kit Digital (PDF)" : "How to apply for the Kit Digital (PDF)", href: PDF_KIT } },
    blocks: [
      { type: "facts", items: [
        { label: es ? "Subvención" : "Grant", value: o.maxLabel },
        { label: es ? "Segmento I" : "Segment I", value: es ? "10 – 49 empleados · convocatoria abierta" : "10 – 49 employees · call open" },
        { label: es ? "Segmento II" : "Segment II", value: es ? "3 – 9 empleados · convocatoria abierta" : "3 – 9 employees · call open" },
        { label: es ? "Segmento III" : "Segment III", value: es ? "Autónomos con hasta 2 empleados · convocatoria abierta" : "Self-employed with up to 2 employees · call open" },
      ] },
      { type: "intro", visual: o.visual, lead: es ? "¿Qué es el" : "What is the", accent: "Kit Digital?", text: [es ? "El programa Kit Digital nace para apoyar la transformación digital de las pymes y microempresas a través de la adopción de soluciones digitales que aumentan su nivel de madurez digital." : "The Kit Digital program (the Spanish government's digitalization grant program) was created to support the digital transformation of SMEs and micro-businesses through the adoption of digital solutions that increase their level of digital maturity.", o.goal, o.amount], link: { label: es ? "Solicita información sobre el Kit Digital" : "Request information about the Kit Digital", slug: "contacto" } },
      { type: "chips", index: es ? "Oferta" : "Offer", eyebrow: es ? "Qué incluye" : "What's included", title: o.offerTitle, accent: o.offerAccent, cols: 3, items: o.offer },
    ],
  };
}

export const soluciones: Record<string, Page> = {
  /* ------------------------------------------------------------------ */
  "soluciones-xone": {
    es: {
      group: 2,
      seo: { title: "Soluciones XOne: apps para cada sector y proceso de negocio | XOne", description: "XOne es una plataforma multisectorial y muy versátil que puede optimizar los procesos operativos de cualquier tipo de empresa o negocio." },
      hero: { title: "Soluciones", accent: "XOne", lead: "XOne es una plataforma multisectorial y muy versátil que puede optimizar los procesos operativos de cualquier tipo de empresa o negocio.", labels: ["B2B", "B2C", "B2E", "IA · IoT"], secondary: { label: "Ver casos de éxito", slug: "casos-de-exito-xone" } },
      blocks: [
        { type: "intro", visual: "platforms", lead: "Cada sector se enfrenta a", accent: "escenarios de movilidad específicos.", text: ["Nuestra oferta comercial pretende dar respuesta a las necesidades de nuestros clientes y reforzar así su posicionamiento competitivo. Por eso XOne ofrece un valor tangible en soluciones B2B, B2C y B2E de diversos sectores.", "El alto grado de especialización de las soluciones XOne proporciona una oferta integrada con una amplia experiencia funcional y un enfoque práctico para generar un impacto real en las empresas que necesitan movilizar cualquier proceso, mejorar la productividad y optimizar los costes."] },
        { type: "quote", text: "Automatización de tareas, robótica y control en tiempo real de los procesos, con las infinitas posibilidades de las tecnologías emergentes como la IA o el IoT.", source: "Últimas tecnologías de vanguardia" },
        { type: "chips", anchor: "sectores", index: "Mercados", eyebrow: "Sectores", title: "Movilidad para", accent: "cualquier industria", cols: 3, items: ["Servicio técnico", "Fuerza de ventas", "Energía y utilities", "Automoción", "Aseguradoras", "Sanidad", "Servicios financieros", "Calidad", "Logística", "Administración pública", "Vías públicas", "Industria", "Soluciones B2C"] },
        {
          type: "cells", index: "Clientes", eyebrow: "Casos de éxito", title: "Proyectos reales,", accent: "resultados medibles", cols: 3,
          items: CASES.slice(0, 6).map((c) => ({ label: c.name, icon: c.icon, lead: c.es.area + ".", text: c.es.summary, link: { label: "Ver el caso", slug: `casos-de-exito-xone/${c.slug}` } })),
        },
      ],
    },
    en: {
      group: 2,
      seo: { title: "XOne solutions: apps for every sector and business process | XOne", description: "XOne is a highly versatile, multi-sector platform that can optimize the operational processes of any type of company or business." },
      hero: { title: "XOne", accent: "solutions", lead: "XOne is a highly versatile, multi-sector platform that can optimize the operational processes of any type of company or business.", labels: ["B2B", "B2C", "B2E", "AI · IoT"], secondary: { label: "See success stories", slug: "casos-de-exito-xone" } },
      blocks: [
        { type: "intro", visual: "platforms", lead: "Each sector faces", accent: "specific mobility scenarios.", text: ["Our commercial offering aims to meet our clients' needs and thereby strengthen their competitive position. That is why XOne delivers tangible value in B2B, B2C and B2E solutions across a range of sectors.", "The high degree of specialization of XOne solutions provides an integrated offering with broad functional experience and a practical approach to generating real impact in companies that need to mobilize any process, improve productivity and optimize costs."] },
        { type: "quote", text: "Task automation, robotics and real-time process control, with the endless possibilities of emerging technologies such as AI and IoT.", source: "The latest cutting-edge technologies" },
        { type: "chips", anchor: "sectores", index: "Markets", eyebrow: "Sectors", title: "Mobility for", accent: "any industry", cols: 3, items: ["Technical service", "Sales force", "Energy and utilities", "Automotive", "Insurance", "Healthcare", "Financial services", "Quality", "Logistics", "Public administration", "Public roads", "Industry", "B2C solutions"] },
        {
          type: "cells", index: "Customers", eyebrow: "Success stories", title: "Real projects,", accent: "measurable results", cols: 3,
          items: CASES.slice(0, 6).map((c) => ({ label: c.name, icon: c.icon, lead: c.en.area + ".", text: c.en.summary, link: { label: "See the story", slug: `casos-de-exito-xone/${c.slug}` } })),
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  "casos-de-uso-home": {
    es: {
      group: 2,
      seo: { title: "Casos de uso de XOne: movilidad inteligente con IA | XOne", description: "Las apps XOne dotadas con IA solucionan necesidades reales de los usuarios con soluciones móviles innovadoras, robustas y seguras que ahorran costes operativos." },
      hero: { title: "Casos de uso", accent: "de XOne", lead: "Las apps XOne dotadas con IA solucionan necesidades reales de los usuarios con soluciones móviles innovadoras, robustas y seguras que ahorran costes operativos.", labels: ["Energía", "Logística", "Seguros", "Ventas"], secondary: { label: "Ver casos de éxito", slug: "casos-de-exito-xone" } },
      blocks: [
        { type: "intro", lead: "La movilidad inteligente", accent: "cambia la forma de trabajar.", text: ["Las apps XOne dotadas con IA solucionan los problemas y necesidades reales de los usuarios, aportando soluciones móviles innovadoras altamente probadas, robustas y seguras que optimizan la productividad y ahorran costes operativos."] },
        {
          type: "rows", index: "Sectores", eyebrow: "Qué puedes movilizar", title: "Nueve escenarios", accent: "resueltos con XOne",
          items: [
            { title: "Optimiza los procesos operativos impulsados con IA", visual: "offline", text: ["La complejidad de servicios y usuarios del sector energético hace necesario llevar procesos operativos a los dispositivos móviles para mejorar la eficacia, dotar de herramientas a las brigadas de campo y resolver uno de sus grandes problemas: la falta de conectividad en muchas zonas, que supone una pérdida importante de productividad.", "Un cambio disruptivo en el que empleados y clientes adoptan una nueva forma de interactuar, con la eficiencia y la productividad como protagonistas."], list: ["Asistencia online con sistemas expertos", "Interacción con nodos IoT", "Seguimiento preventivo de variables biométricas", "Interfaces de RA para asistencia en campo", "Mapas de calor cartográficos", "Predicción meteorológica con machine learning"], link: { label: "Caso de éxito: Iberdrola", slug: "casos-de-exito-xone/iberdrola" } },
            { title: "Carsharing, la movilidad móvil", text: ["XOne se suma al carsharing, que permite alquilar vehículos eléctricos por minutos: con una aplicación sencilla es posible localizar el vehículo en un mapa, alquilarlo, arrancarlo, pagar y disfrutar… todo al alcance de tu mano."], link: { label: "Caso de éxito: MiniTS", slug: "casos-de-exito-xone/minits" } },
            { title: "Asistencia online con sistemas expertos y machine learning", text: ["La diversidad de procesos en campo y el nivel de subcontratación del sector energético hacen fundamental centralizar, digitalizar y agilizar todos los procesos operativos.", "Las soluciones de XOne se centran en estimar y aumentar la vida útil restante, y en mejorar la calidad del mantenimiento de los aerogeneradores, con impacto directo en el coste, la calidad y la seguridad de las instalaciones eólicas."], list: ["Guiado por voz del operario", "Checklists sobre el plano del aerogenerador", "Control de incidencias por mapa", "RA integrada con el aerogenerador", "Gestión de material con OCR", "Incidencias con vídeo e imágenes", "Informes gráficos", "EMM en entornos de trabajo", "Estimación de vida útil de materiales", "Planificación inteligente", "Comunicación en streaming", "Pulseras de actividad y alertas de riesgos"], link: { label: "Caso de éxito: Gamesa", slug: "casos-de-exito-xone/gamesa" } },
            { title: "Servicios técnicos flexibles, adaptados y personalizados", text: ["Para el sector naval, apps a medida que gestionan con eficacia todas las fases de las órdenes de trabajo de los distintos mantenimientos que los técnicos realizan en sus flotas.", "Un servicio técnico que mejora la calidad de las actuaciones y facilita la resolución de incidencias en un sector muy descentralizado."], link: { label: "Caso de éxito: Navantia", slug: "casos-de-exito-xone/navantia" } },
            { title: "Gestión, visibilidad y control de entregas y recogidas", text: ["Numerosas empresas especializadas en la creación de flujo de efectivo eficiente ponen en manos de XOne la seguridad de sus procesos: apps que gestionan el transporte de fondos y valores con la máxima eficiencia y calidad operativa."], link: { label: "Caso de éxito: Loomis", slug: "casos-de-exito-xone/loomis" } },
            { title: "Reducir los procesos manuales en logística con IoT", text: ["Somos especialistas en el control y la gestión de flotas: soluciones para mantenerlas conectadas en todo momento y gestionar en tiempo real la carga, la descarga y la localización de los vehículos interconectados.", "Soluciones intuitivas y con todo incluido que permiten a las empresas transportistas ser más productivas y atender a más clientes."], link: { label: "Caso de éxito: JCarrion", slug: "casos-de-exito-xone/jcarrion" } },
            { title: "Optimización de tareas de valoración y peritaje", text: ["Para las aseguradoras, herramientas de ayuda al peritaje que resuelven todas las fases del proceso en una sola aplicación, con control visual para cuantificar los daños y los datos disponibles con o sin cobertura.", "Se reducen el coste medio y los tiempos de tramitación, con un alto incremento de la satisfacción de usuarios y clientes finales."] },
            { title: "Dinamiza y aumenta las ventas", text: ["Apps para la fuerza de ventas que movilizan toda la red comercial: planificador de visitas, CRM con catálogo de productos, pedidos, control de gastos, clientes potenciales, optimización de rutas, GPS y mapas, para que los comerciales cierren más ventas."], link: { label: "Caso de éxito: Grupo Orenes", slug: "casos-de-exito-xone/orenes" } },
            { title: "Soluciones móviles que gestionan mejor las vías públicas", text: ["Soluciones modulares para el estacionamiento regulado de las grandes ciudades que movilizan también las sanciones, las incidencias en la vía pública, las grúas o la localización de vehículos, optimizando la labor de todos los agentes que intervienen."], link: { label: "Caso de éxito: Sacyr", slug: "casos-de-exito-xone/sacyr" } },
          ],
        },
      ],
    },
    en: {
      group: 2,
      seo: { title: "XOne use cases: smart mobility powered by AI | XOne", description: "AI-powered XOne apps meet real user needs with innovative, robust and secure mobile solutions that cut operating costs." },
      hero: { title: "XOne", accent: "use cases", lead: "AI-powered XOne apps meet real user needs with innovative, robust and secure mobile solutions that cut operating costs.", labels: ["Energy", "Logistics", "Insurance", "Sales"], secondary: { label: "See success stories", slug: "casos-de-exito-xone" } },
      blocks: [
        { type: "intro", lead: "Smart mobility", accent: "changes the way we work.", text: ["AI-powered XOne apps solve users' real problems and needs, delivering highly proven, robust and secure innovative mobile solutions that optimize productivity and cut operating costs."] },
        {
          type: "rows", index: "Sectors", eyebrow: "What you can mobilize", title: "Nine scenarios", accent: "solved with XOne",
          items: [
            { title: "Optimize operational processes powered by AI", visual: "offline", text: ["The complexity of services and users in the energy sector makes it necessary to bring operational processes onto mobile devices to improve efficiency, equip field crews and solve one of its main problems: the lack of connectivity in many areas, which means a significant loss of productivity.", "A disruptive change in which employees and customers adopt a new way of interacting, with efficiency and productivity taking center stage."], list: ["Online assistance through expert systems", "Interaction with IoT nodes", "Preventive monitoring of biometric variables", "AR interfaces for field assistance", "Cartographic heat maps", "Weather forecasting with machine learning"], link: { label: "Success story: Iberdrola", slug: "casos-de-exito-xone/iberdrola" } },
            { title: "Carsharing, mobile mobility", text: ["XOne embraces carsharing, which lets you rent electric vehicles by the minute: with a simple app you can locate the vehicle on a map, rent it, start it, pay and enjoy… all at your fingertips."], link: { label: "Success story: MiniTS", slug: "casos-de-exito-xone/minits" } },
            { title: "Online assistance through expert systems with machine learning", text: ["The diversity of field processes and the level of subcontracting in the energy sector make it essential to centralize, digitize and streamline every operational process.", "XOne's solutions focus on estimating and extending remaining useful life, and on improving the quality of wind turbine maintenance, with a direct impact on the cost, quality and safety of wind farms."], list: ["Voice guidance for operators", "Checklists on the wind turbine plan", "Map-based incident control", "AR integrated with the wind turbine", "Material management with OCR", "Incidents with video and images", "Graphical reports", "EMM in work environments", "Remaining useful life estimation", "Smart planning", "Streaming communication", "Activity bands and risk alerts"], link: { label: "Success story: Gamesa", slug: "casos-de-exito-xone/gamesa" } },
            { title: "Flexible, tailored and personalized technical services", text: ["For the naval sector, custom apps that efficiently manage every phase of the work orders arising from the different types of maintenance technicians carry out on their fleets.", "A technical service that improves the quality of interventions and makes it easier to resolve incidents in a highly decentralized sector."], link: { label: "Success story: Navantia", slug: "casos-de-exito-xone/navantia" } },
            { title: "Management, visibility and control of deliveries and pickups", text: ["Many companies specializing in creating efficient cash flow entrust the security of their processes to XOne: apps that manage the transport of cash and valuables with maximum efficiency and operational quality."], link: { label: "Success story: Loomis", slug: "casos-de-exito-xone/loomis" } },
            { title: "Reducing manual processes in logistics with IoT", text: ["We specialize in fleet control and management: solutions that keep fleets connected at all times and manage loading, unloading and the location of interconnected vehicles in real time.", "Intuitive, all-inclusive solutions that let transport companies be more productive and serve more customers."], link: { label: "Success story: JCarrion", slug: "casos-de-exito-xone/jcarrion" } },
            { title: "Optimizing appraisal and loss assessment tasks", text: ["For insurers, loss assessment support tools that handle every phase of the process in a single app, with visual control for quantifying damage and data available with or without coverage.", "Average cost and processing times are reduced, with a substantial increase in the satisfaction of users and end customers."] },
            { title: "Energize and increase sales", text: ["Sales force apps that mobilize the entire sales network: visit planner, CRM with product catalog, orders, expense control, prospects, route optimization, GPS and maps, so that sales reps close more sales."], link: { label: "Success story: Grupo Orenes", slug: "casos-de-exito-xone/orenes" } },
            { title: "Mobile solutions that better manage public roads", text: ["Modular solutions for regulated parking in large cities that also mobilize fines, incidents on public roads, tow trucks and vehicle location, optimizing the work of every agent involved."], link: { label: "Success story: Sacyr", slug: "casos-de-exito-xone/sacyr" } },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  "casos-de-exito-xone": {
    es: {
      group: 2,
      seo: { title: "Casos de éxito de XOne | XOne", description: "Casos de éxito de XOne en carsharing, subestaciones eléctricas, fuerza de campo, estacionamiento regulado, mantenimiento, transporte, distribución farmacéutica y prevención de riesgos." },
      hero: { title: "Casos", accent: "de éxito", lead: "Casos de éxito de XOne en carsharing, subestaciones eléctricas, fuerza de campo, estacionamiento regulado, mantenimiento, transporte, distribución farmacéutica y prevención de riesgos.", labels: ["Energía", "Transporte", "Industria", "Servicios"], secondary: { label: "Ver casos de uso", slug: "casos-de-uso-home" } },
      blocks: [
        {
          type: "cells", index: "Proyectos", eyebrow: "Doce clientes", title: "Movilidad que ya funciona", accent: "en grandes empresas", cols: 3,
          items: CASES.map((c) => ({ label: c.name, icon: c.icon, lead: c.es.area + ".", text: c.es.summary, link: { label: "Ver el caso", slug: `casos-de-exito-xone/${c.slug}` } })),
        },
      ],
    },
    en: {
      group: 2,
      seo: { title: "XOne success stories | XOne", description: "XOne success stories in carsharing, electrical substations, field force, regulated parking, maintenance, transport, pharmaceutical distribution and risk prevention." },
      hero: { title: "Success", accent: "stories", lead: "XOne success stories in carsharing, electrical substations, field force, regulated parking, maintenance, transport, pharmaceutical distribution and risk prevention.", labels: ["Energy", "Transport", "Industry", "Services"], secondary: { label: "See use cases", slug: "casos-de-uso-home" } },
      blocks: [
        {
          type: "cells", index: "Projects", eyebrow: "Twelve customers", title: "Mobility already at work", accent: "in large companies", cols: 3,
          items: CASES.map((c) => ({ label: c.name, icon: c.icon, lead: c.en.area + ".", text: c.en.summary, link: { label: "See the story", slug: `casos-de-exito-xone/${c.slug}` } })),
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  "kit-digital": {
    es: {
      group: 2, related: kitRelated("kit-digital", "es"),
      seo: { title: "Ayudas del Kit Digital: XOne, agente digitalizador | XOne", description: "Si necesitas modernizar tu negocio y cumples los requisitos del programa Kit Digital, XOne puede ser tu agente digitalizador en cada fase de tu proyecto." },
      hero: { title: "Ayudas del", accent: "Kit Digital", lead: "Si necesitas modernizar tu negocio y cumples los requisitos del programa Kit Digital, XOne puede ser tu agente digitalizador en cada fase de tu proyecto.", labels: ["Kit Digital", "Next Gen EU", "Pymes", "Autónomos"], secondary: { label: "Cómo solicitar el Kit Digital (PDF)", href: PDF_KIT } },
      blocks: [
        { type: "intro", lead: "¿Tienes menos de 50 empleados?", accent: "Consigue hasta 12.000 €.", text: ["XOne te ofrece las soluciones que necesitas para digitalizar tu empresa, 100 % financiadas por los fondos Next Generation EU.", "Si necesitas adaptar tu negocio a la nueva ola digital y cumples los requisitos del programa, no esperes más: consigue la subvención y nosotros seremos tu agente digitalizador en cada una de las fases de tu proyecto. Comprueba los requisitos y regístrate en Acelera pyme."], link: { label: "Más información en Acelera pyme", href: ACELERA } },
        {
          type: "cells", index: "Bono Digital", eyebrow: "Segmentos", title: "Cuánto puedes conseguir", accent: "según tu plantilla", cols: 3, subtitle: "Selecciona el segmento al que perteneces y elige la solución de digitalización que mejor se adapte a tus necesidades.",
          items: [
            { label: "Segmento I", icon: "building", lead: "Hasta 12.000 €.", text: "Empresas de 10 a 50 empleados." },
            { label: "Segmento II", icon: "users", lead: "Hasta 6.000 €.", text: "Empresas de 3 a 9 empleados." },
            { label: "Segmento III", icon: "user-plus", lead: "Hasta 2.000 €.", text: "Autónomos y empresas de 0 a 2 empleados." },
          ],
        },
        {
          type: "cells", index: "Catálogo", eyebrow: "Soluciones XOne", title: "Cómo podemos ayudarte", accent: "con el Kit Digital", cols: 3,
          items: [
            { label: "Gestión de clientes", icon: "users", lead: "Todas las áreas de la empresa en un único lugar.", text: "Una gestión más eficiente, con más control y trazabilidad de los procesos operativos, y automatización integral o departamental, totalmente a medida.", more: ["Bono máximo: 4.000 € · desde 1.995 €"] },
            { label: "BI y analítica", icon: "activity", lead: "Tus datos, tu mejor asesor.", text: "Análisis de datos con visualizaciones interactivas: informes y paneles rápidos y visuales, con consultores especializados en cada etapa.", more: ["Bono máximo: 4.000 € · desde 1.495 €"], link: { label: "Ver la categoría", slug: "xone-agente-digitalizador-bi" } },
            { label: "Gestión de procesos", icon: "loop", lead: "Todo desde una única plataforma.", text: "Digitaliza y automatiza inventario, finanzas, facturación, control de costes, compras o RR. HH., con una vista panorámica y actualizada de la organización.", more: ["Bono máximo: 6.000 € · desde 495 €"], link: { label: "Ver la categoría", slug: "xone-agente-digitalizador-procesos" } },
            { label: "Oficina virtual", icon: "cloud", lead: "Tu empresa, en la nube.", text: "Gestión colaborativa del personal, recursos compartidos, flujos de trabajo personalizados y almacenamiento de archivos, en cualquier momento y lugar.", more: ["Bono máximo: 12.000 € · desde 250 €/usuario"] },
            { label: "Comunicaciones seguras", icon: "lock", lead: "Redes privadas protegidas.", text: "SSL, cifrado de extremo a extremo, logs de conexión, controles de acceso y actualizaciones de seguridad, desde cualquier dispositivo móvil.", more: ["Bono máximo: 6.000 € · desde 125 €/usuario"] },
            { label: "Sitio web", icon: "grid", lead: "Presencia básica en Internet.", text: "Dominio, hosting, web responsive y accesible, autogestionable y con SEO básico.", more: ["Hasta 2.000 € de subvención"], link: { label: "Ver la categoría", slug: "sitio-web-y-presencia-basica-en-internet" } },
          ],
        },
        {
          type: "cells", index: "Experiencia", eyebrow: "Más de 20 años", title: "Flexibles, a medida", accent: "e integrables", cols: 3,
          items: [
            { label: "Flexibles", icon: "layers", text: "Soluciones modulares que se combinan de forma fluida para lograr un proyecto móvil de éxito." },
            { label: "Personalizadas", icon: "sparkle", text: "Apps 100 % a medida en diseño, funcionalidad y operatividad, adaptadas a las necesidades del cliente." },
            { label: "Integrables", icon: "plug", text: "Compatibles con cualquier sistema del cliente y aptas para cualquier dispositivo móvil del mercado." },
          ],
        },
        {
          type: "cells", index: "Servicio", eyebrow: "Para cualquier empresa", title: "Adaptamos tu negocio", accent: "al mundo digital", cols: 4,
          items: [
            { label: "Acompañamiento", icon: "handshake", text: "Nuestros expertos te guían en el diseño y la ejecución del plan de digitalización, en cada fase del proyecto." },
            { label: "Implementación", icon: "download", text: "Implantación y puesta en marcha personalizadas, con la solución totalmente adaptada a tu negocio." },
            { label: "Soporte", icon: "headset", text: "Incidencias, mantenimiento, actualización, operatividad y hosting de la solución, en todo momento." },
            { label: "Integración", icon: "plug", text: "El bus de integración de XOne conecta con cualquier sistema: bases de datos, ERP, CRM o servicios web." },
          ],
        },
      ],
    },
    en: {
      group: 2, related: kitRelated("kit-digital", "en"),
      seo: { title: "Kit Digital grants: XOne, digitalizing agent | XOne", description: "If you need to modernize your business and meet the Kit Digital program requirements, XOne can be your digitalizing agent at every stage of your project." },
      hero: { title: "Kit Digital", accent: "grants", lead: "If you need to modernize your business and meet the Kit Digital program requirements, XOne can be your digitalizing agent at every stage of your project.", labels: ["Kit Digital", "Next Gen EU", "SMEs", "Freelancers"], secondary: { label: "How to apply for the Kit Digital (PDF)", href: PDF_KIT } },
      blocks: [
        { type: "intro", lead: "Do you have fewer than 50 employees?", accent: "Get up to €12,000.", text: ["XOne offers you the solutions you need to digitalize your company, 100% funded by Next Generation EU funds.", "If you need to adapt your business to the new digital wave and you meet the requirements of the Kit Digital program (the Spanish government's digitalization grant program), don't wait any longer: get the grant and we will be your digitalizing agent at every stage of your project. Check the requirements and register on Acelera pyme."], link: { label: "More information on Acelera pyme", href: ACELERA } },
        {
          type: "cells", index: "Bono Digital", eyebrow: "Segments", title: "How much you can get", accent: "based on your headcount", cols: 3, subtitle: "Select the segment you belong to and choose the digitalization solution that best suits your needs.",
          items: [
            { label: "Segment I", icon: "building", lead: "Up to €12,000.", text: "Companies with 10 to 50 employees." },
            { label: "Segment II", icon: "users", lead: "Up to €6,000.", text: "Companies with 3 to 9 employees." },
            { label: "Segment III", icon: "user-plus", lead: "Up to €2,000.", text: "Self-employed and companies with 0 to 2 employees." },
          ],
        },
        {
          type: "cells", index: "Catalog", eyebrow: "XOne solutions", title: "How we can help you", accent: "with the Kit Digital", cols: 3,
          items: [
            { label: "Customer management", icon: "users", lead: "Every area of the company in one place.", text: "More efficient management, with greater control and traceability of operational processes, and comprehensive or departmental automation, fully tailor-made.", more: ["Maximum voucher: €4,000 · from €1,995"] },
            { label: "BI and analytics", icon: "activity", lead: "Your data, your best advisor.", text: "Data analysis with interactive visualizations: quick, visual reports and dashboards, with specialized consultants at every stage.", more: ["Maximum voucher: €4,000 · from €1,495"], link: { label: "See the category", slug: "xone-agente-digitalizador-bi" } },
            { label: "Process management", icon: "loop", lead: "Everything from a single platform.", text: "Digitalize and automate inventory, finance, invoicing, cost control, purchasing or HR, with an up-to-date panoramic view of the organization.", more: ["Maximum voucher: €6,000 · from €495"], link: { label: "See the category", slug: "xone-agente-digitalizador-procesos" } },
            { label: "Virtual office", icon: "cloud", lead: "Your company, in the cloud.", text: "Collaborative staff management, shared resources, custom workflows and file storage, anytime and anywhere.", more: ["Maximum voucher: €12,000 · from €250/user"] },
            { label: "Secure communications", icon: "lock", lead: "Protected private networks.", text: "SSL, end-to-end encryption, connection logs, access controls and security updates, from any mobile device.", more: ["Maximum voucher: €6,000 · from €125/user"] },
            { label: "Website", icon: "grid", lead: "Basic online presence.", text: "Domain, hosting, a responsive and accessible website, self-managed and with basic SEO.", more: ["Grants of up to €2,000"], link: { label: "See the category", slug: "sitio-web-y-presencia-basica-en-internet" } },
          ],
        },
        {
          type: "cells", index: "Experience", eyebrow: "More than 20 years", title: "Flexible, tailor-made", accent: "and integrable", cols: 3,
          items: [
            { label: "Flexible", icon: "layers", text: "Modular solutions that combine seamlessly to deliver a successful mobile project." },
            { label: "Custom", icon: "sparkle", text: "Apps 100% tailor-made in design, functionality and operation, adapted to the client's needs." },
            { label: "Integrable", icon: "plug", text: "Compatible with any client system and suitable for any mobile device on the market." },
          ],
        },
        {
          type: "cells", index: "Service", eyebrow: "For any company", title: "We adapt your business", accent: "to the digital world", cols: 4,
          items: [
            { label: "Guidance", icon: "handshake", text: "Our experts guide you in designing and executing the digitalization plan, at every stage of the project." },
            { label: "Implementation", icon: "download", text: "Personalized deployment and start-up, with the solution fully adapted to your business." },
            { label: "Support", icon: "headset", text: "Incidents, maintenance, updates, operation and hosting of the solution, at all times." },
            { label: "Integration", icon: "plug", text: "XOne's integration bus connects with any system: databases, ERP, CRM or web services." },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  "sitio-web-y-presencia-basica-en-internet": {
    es: kitCategory("es", { slug: "sitio-web-y-presencia-basica-en-internet", title: "Kit Digital: sitio web", accent: "y presencia básica en Internet", seoTitle: "Kit Digital: sitio web y presencia básica en Internet", lead: "En la categoría Sitio Web y Presencia Básica en Internet del Kit Digital, el objetivo es que las empresas tengan una página web para ganar visibilidad.", goal: "En la categoría de Sitio Web y Presencia Básica en Internet, el objetivo es que las empresas beneficiarias puedan tener una página web para obtener visibilidad en Internet.", amount: "Consigue hasta 2.000 € de ayuda en forma de subvención.", maxLabel: "Hasta 2.000 €", offerTitle: "Tu web, lista", offerAccent: "para que te encuentren", offer: ["Dominio", "Hosting", "Web responsive", "Accesibilidad (WCAG 2.1)", "Autogestionable", "SEO básico", "Y mucho más…"] }),
    en: kitCategory("en", { slug: "sitio-web-y-presencia-basica-en-internet", title: "Kit Digital: website", accent: "and basic online presence", seoTitle: "Kit Digital: website and basic online presence", lead: "In the Kit Digital Website and Basic Online Presence category, the goal is for companies to have a website to gain online visibility.", goal: "In the Website and Basic Online Presence category, the goal is for beneficiary companies to have a website to gain visibility on the Internet.", amount: "Get up to €2,000 in aid in the form of a grant.", maxLabel: "Up to €2,000", offerTitle: "Your website, ready", offerAccent: "to be found", offer: ["Domain", "Hosting", "Responsive website", "Accessibility (WCAG 2.1)", "Self-managed", "Basic SEO", "And much more…"] }),
  },
  "xone-agente-digitalizador-bi": {
    es: kitCategory("es", { slug: "xone-agente-digitalizador-bi", visual: "monitor", title: "Kit Digital:", accent: "BI y analítica", seoTitle: "Kit Digital: BI y analítica", lead: "En la categoría BI y Analítica del Kit Digital, el objetivo es desarrollar soluciones de explotación de datos que faciliten y mejoren la toma de decisiones.", goal: "En la categoría de BI y Analítica, el objetivo es desarrollar soluciones de explotación de datos para las empresas que faciliten y mejoren el proceso de toma de decisiones.", amount: "Consigue hasta 4.000 € de ayuda en forma de subvención.", maxLabel: "Hasta 4.000 €", offerTitle: "Informes y datos", offerAccent: "para decidir mejor", offer: ["Cuadro de mando (dashboard)", "Gráficas y analíticas", "Informes personalizados por KPI", "Gestión de datos (data management)", "Minería de datos (data mining)", "Apps de data discovery", "Y mucho más…"] }),
    en: kitCategory("en", { slug: "xone-agente-digitalizador-bi", visual: "monitor", title: "Kit Digital:", accent: "BI and analytics", seoTitle: "Kit Digital: BI and analytics", lead: "In the Kit Digital BI and Analytics category, the goal is to develop data exploitation solutions that facilitate and improve decision-making.", goal: "In the BI and Analytics category, the goal is to develop data exploitation solutions for companies that facilitate and improve the decision-making process.", amount: "Get up to €4,000 in aid in the form of a grant.", maxLabel: "Up to €4,000", offerTitle: "Reports and data", offerAccent: "for better decisions", offer: ["Dashboard", "Charts and analytics", "Custom KPI reports", "Data management", "Data mining", "Data discovery apps", "And much more…"] }),
  },
  "xone-agente-digitalizador-procesos": {
    es: kitCategory("es", { slug: "xone-agente-digitalizador-procesos", visual: "pipeline", title: "Kit Digital:", accent: "gestión de procesos", seoTitle: "Kit Digital: gestión de procesos", lead: "En la categoría Gestión de Procesos del Kit Digital, el objetivo es digitalizar o automatizar procesos de negocio operativos o productivos de las empresas.", goal: "En la categoría de Gestión de Procesos, el objetivo es digitalizar y/o automatizar procesos de negocio relacionados con los aspectos operativos o productivos de las empresas beneficiarias.", amount: "Entre 2.000 € y 6.000 € de subvención según el segmento.", maxLabel: "Hasta 6.000 €", offerTitle: "Tu negocio,", offerAccent: "automatizado", offer: ["Automatizar los procesos de tu negocio", "Movilizar los fichajes y la jornada laboral", "Optimizar las rutas de entregas y recogidas", "Mejorar la reputación digital y el posicionamiento", "Optimizar la gestión de las órdenes de trabajo", "Automatización de proyectos", "Soluciones paperless (eTicket)", "Control de la huella de carbono", "Y mucho más…"] }),
    en: kitCategory("en", { slug: "xone-agente-digitalizador-procesos", visual: "pipeline", title: "Kit Digital:", accent: "process management", seoTitle: "Kit Digital: process management", lead: "In the Kit Digital Process Management category, the goal is to digitize or automate companies' operational or production business processes.", goal: "In the Process Management category, the goal is to digitize and/or automate business processes related to the operational or production aspects of the beneficiary companies.", amount: "Between €2,000 and €6,000 in grants depending on the segment.", maxLabel: "Up to €6,000", offerTitle: "Your business,", offerAccent: "automated", offer: ["Automate your business processes", "Mobilize clock-ins and the working day", "Optimize delivery and pickup routes", "Improve digital reputation and positioning", "Optimize work order management", "Project automation", "Paperless solutions (eTicket)", "Carbon footprint control", "And much more…"] }),
  },

  /* ------------------------------------------------------------------ */
  gsat: {
    es: {
      group: 2,
      seo: { title: "XOne SAT para servicio técnico | XOne", description: "XOne SAT permite gestionar el proceso completo de una OT, mejora las actuaciones técnicas y ofrece en todo momento un servicio de respuesta inmediato." },
      hero: { title: "XOne SAT para", accent: "servicio técnico", lead: "XOne SAT permite gestionar el proceso completo de una OT, mejora las actuaciones técnicas y ofrece en todo momento un servicio de respuesta inmediato.", labels: ["XOne SAT", "OT", "Offline", "Wearables"], secondary: { label: "XOne SAT para averías", slug: "isat" } },
      blocks: [
        { type: "intro", visual: "offline", lead: "XOne SAT es la clave para", accent: "tus soluciones energéticas.", text: ["Innovación y experiencia para optimizar tu servicio técnico. Una app nativa multiexperiencia que garantiza más productividad, menos costes, más satisfacción, más calidad y más eficiencia.", "Gestionamos con éxito tu proyecto para que seas líder del sector."] },
        { type: "chips", index: "Tecnología", eyebrow: "La más avanzada del sector", title: "Una solución innovadora,", accent: "lista para integrarse", cols: 3, items: ["Integración con cualquier sistema", "Desarrollo a medida del cliente", "Comunicación offline-online", "Seguridad de extremo a extremo", "Administración remota de dispositivos"] },
        { type: "chips", index: "Operativa", eyebrow: "Funcionalidades", title: "Todo el ciclo de una OT,", accent: "en el móvil del técnico", cols: 4, subtitle: "Un servicio de respuesta inmediato, adaptado a las necesidades específicas del cliente.", items: ["Apertura de OT", "Detalle de la intervención", "Actualización push de OT", "Visualización cartográfica", "Presencias en parques", "Finalización de la OT", "Gestión de paradas técnicas", "Introducción del checklist", "Fotografías", "Documentos técnicos", "Generación de vídeo", "Replanificación de OT", "Aprobación de OT", "Historial de intervenciones", "Gestión de artículos", "Stock de repuestos", "Solicitud de materiales", "Control de tiempos", "Compatibilidad con wearables", "Seguimiento de constantes vitales", "Operativa guiada por voz", "Realidad aumentada"] },
        { type: "quote", text: "Con XOne no existen los límites.", source: "XOne SAT" },
      ],
    },
    en: {
      group: 2,
      seo: { title: "XOne SAT for technical service | XOne", description: "XOne SAT manages the complete work order process, improves technical interventions and provides an immediate-response service at all times." },
      hero: { title: "XOne SAT for", accent: "technical service", lead: "XOne SAT manages the complete work order process, improves technical interventions and provides an immediate-response service at all times.", labels: ["XOne SAT", "WO", "Offline", "Wearables"], secondary: { label: "XOne SAT for faults", slug: "isat" } },
      blocks: [
        { type: "intro", visual: "offline", lead: "XOne SAT is the key to", accent: "your energy solutions.", text: ["Innovation and experience to optimize your technical service. A native multiexperience app that ensures more productivity, lower costs, more satisfaction, more quality and more efficiency.", "We successfully manage your project so that you can lead your sector."] },
        { type: "chips", index: "Technology", eyebrow: "The most advanced in the sector", title: "An innovative solution,", accent: "ready to integrate", cols: 3, items: ["Integration with any system", "Development tailored to the client", "Offline-online communication", "End-to-end security", "Remote device administration"] },
        { type: "chips", index: "Operations", eyebrow: "Features", title: "The whole WO cycle,", accent: "on the technician's phone", cols: 4, subtitle: "An immediate-response service, adapted to the client's specific needs.", items: ["WO opening", "Intervention details", "Push WO updates", "Map view", "On-site presence at farms", "WO completion", "Technical shutdown management", "Checklist entry", "Photographs", "Technical documents", "Video generation", "WO rescheduling", "WO approval", "Intervention history", "Item management", "Spare parts stock", "Material requests", "Time tracking", "Wearable compatibility", "Vital signs monitoring", "Voice-guided operations", "Augmented reality"] },
        { type: "quote", text: "Limits don't exist with XOne.", source: "XOne SAT" },
      ],
    },
  },
  isat: {
    es: {
      group: 2,
      seo: { title: "XOne SAT para gestión de averías | XOne", description: "XOne SAT permite gestionar el proceso completo de una avería: los técnicos conocen en tiempo real las incidencias y tienen en su móvil toda la información." },
      hero: { title: "XOne SAT para", accent: "gestión de averías", lead: "XOne SAT permite gestionar el proceso completo de una avería: los técnicos conocen en tiempo real las incidencias y tienen en su móvil toda la información.", labels: ["XOne SAT", "BT · MT", "Push", "RA"], secondary: { label: "XOne SAT para servicio técnico", slug: "gsat" } },
      blocks: [
        { type: "intro", visual: "push", lead: "XOne SAT es la clave para", accent: "tus soluciones energéticas.", text: ["Innovación y experiencia para movilizar la gestión de incidencias y órdenes de trabajo. Una app nativa multiexperiencia que garantiza más productividad, menos costes, más satisfacción, más calidad y más eficiencia.", "Gestionamos con éxito tu proyecto para que seas líder del mercado."] },
        { type: "chips", index: "Tecnología", eyebrow: "La más avanzada del sector", title: "Una solución innovadora,", accent: "lista para integrarse", cols: 3, items: ["Integración con cualquier sistema", "Desarrollo a medida del cliente", "Comunicación offline-online", "Seguridad de extremo a extremo", "Administración remota de dispositivos"] },
        { type: "chips", index: "Averías", eyebrow: "Funcionalidades", title: "Cada incidencia, del aviso", accent: "a la resolución", cols: 4, subtitle: "Los técnicos conocen en tiempo real las incidencias en las instalaciones del cliente y tienen en su terminal toda la información para gestionarlas de forma rápida y eficaz.", items: ["Averías de BT y MT", "Detalle de la intervención", "Análisis térmico de componentes", "Actualización push", "Asignación por proximidad", "Supervisión del centro de control", "Finalización de la avería", "Replanteo", "Elementos de la red", "Fotografías", "Documentos técnicos", "Visita previa a descargos", "Descargos con y sin tensión", "Gestión de cuadrillas", "Retenes", "Generación de vídeo", "Visor de diagrama eléctrico", "Compatibilidad con wearables", "Seguimiento de constantes vitales", "Operativa guiada por voz", "Realidad aumentada"] },
        { type: "quote", text: "Con XOne no existen los límites.", source: "XOne SAT" },
      ],
    },
    en: {
      group: 2,
      seo: { title: "XOne SAT for fault management | XOne", description: "XOne SAT manages the complete fault process: technicians see incidents in real time and have all the information they need on their mobile device." },
      hero: { title: "XOne SAT for", accent: "fault management", lead: "XOne SAT manages the complete fault process: technicians see incidents in real time and have all the information they need on their mobile device.", labels: ["XOne SAT", "LV · MV", "Push", "AR"], secondary: { label: "XOne SAT for technical service", slug: "gsat" } },
      blocks: [
        { type: "intro", visual: "push", lead: "XOne SAT is the key to", accent: "your energy solutions.", text: ["Innovation and experience to mobilize the management of incidents and work orders. A native multiexperience app that guarantees more productivity, lower costs, more satisfaction, more quality and more efficiency.", "We successfully manage your project so that you become a market leader."] },
        { type: "chips", index: "Technology", eyebrow: "The most advanced in the sector", title: "An innovative solution,", accent: "ready to integrate", cols: 3, items: ["Integration with any system", "Custom development for the client", "Offline-online communication", "End-to-end security", "Remote device administration"] },
        { type: "chips", index: "Faults", eyebrow: "Features", title: "Every incident, from alert", accent: "to resolution", cols: 4, subtitle: "Technicians find out in real time about incidents at the client's facilities and have on their device all the information needed to manage them quickly and effectively.", items: ["LV and MV faults", "Intervention details", "Thermal analysis of components", "Push updates", "Assignment by proximity", "Control center supervision", "Fault closure", "Site layout", "Network elements", "Photographs", "Technical documents", "Pre-clearance visit", "Clearances with and without voltage", "Crew management", "On-call teams", "Video generation", "Electrical diagram viewer", "Wearable compatibility", "Vital signs monitoring", "Voice-guided operations", "Augmented reality"] },
        { type: "quote", text: "Limits don't exist with XOne.", source: "XOne SAT" },
      ],
    },
  },
};
