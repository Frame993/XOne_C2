// Contenido REAL (español) extraído de https://xone.es (24-nov-2026). Ver CONTENT_MAP.md para el origen de cada bloque.
import type { IconName } from "../components/ui";
import { alternate, link } from "../i18n";
import type { NavMenu } from "../components/ui/Navbar";
import type { GroupKey } from "./pages/types";
import { CASES } from "./pages/casos";
import { usos, usoSlug } from "./usos";

const X = "https://xone.es";

// [PENDIENTE] fecha y enlace de inscripción del evento (de momento, a contacto). Se retira tras el evento.
export const announcement = { badge: "Evento", text: "Presentamos la nueva etapa de XOne en Valencia · Próximamente", cta: "Reservar plaza", href: link("contacto") };

/** Todos los grupos de páginas: los visibles en el menú y los antiguos (fuera del menú, pero con migas y relacionados). */
export const groups: Record<GroupKey | "casos-de-exito", NavMenu> = {
  soluciones: { label: "Soluciones", items: [
    { label: "ASDD", tag: "IA", desc: "Agent Self-Driven Development Platform", href: link("asdd"), icon: "sparkle" },
    { label: "XOne EMM", desc: "La solución de movilidad empresarial, base de ASDD", href: link("xone-emm"), icon: "phone" },
  ] },
  productos: { label: "Productos", items: [
    { label: "XOne", desc: "Ejecuta: la plataforma low-code de movilidad", href: link("que-es-xone"), icon: "layers" },
    { label: "XOneCode", desc: "Construye: agentes que programan la aplicación a medida", href: link("xonecode"), icon: "code" },
    { label: "NappAI", desc: "Decide y orquesta: el motor de agentes de IA propio", href: link("nappai"), icon: "cpu" },
    { label: "NappAI Voice", desc: "Conversa: agentes de voz que atienden y hacen llamadas", href: link("nappai-voice"), icon: "headset" },
  ] },
  "casos-de-uso": { label: "Casos de uso", items: usos.map((u) => ({ label: u.es.name, desc: u.es.sector, href: link(usoSlug(u)), icon: u.icon })) },
  "casos-de-exito": { label: "Casos de éxito", items: [
    { label: "Todos los casos de éxito", desc: "Proyectos reales de nuestros clientes", href: link("casos-de-exito-xone"), icon: "award" },
    ...CASES.map((c) => ({ label: c.name, desc: c.es.area, href: link(`casos-de-exito-xone/${c.slug}`), icon: c.icon })),
  ] },
  empresa: { label: "Empresa", items: [
    { label: "Sobre nosotros", desc: "Más de 20 años en operación de campo", href: link("sobre-nosotros"), icon: "building" },
    { label: "Clientes", desc: "Empresas que confían en XOne", href: link("nuestros-clientes-xone"), icon: "users" },
    { label: "Noticias", desc: "Novedades de XOne", href: link("noticias"), icon: "news" },
    { label: "Certificaciones", desc: "ENS e ISO/IEC 27001", href: link("certificaciones"), icon: "shield" },
    { label: "Financiación europea", desc: "Proyectos cofinanciados por la UE", href: link("financiacion-europea"), icon: "euro" },
  ] },
  "plataforma": { label: "Plataforma XOne", items: [
    { label: "Plataforma XOne", desc: "Qué es XOne y cómo funciona", href: link("que-es-xone"), icon: "layers" },
    { label: "Marketectura", desc: "La plataforma completa, de un vistazo", href: link("marketectura"), icon: "grid" },
    { label: "Herramientas de desarrollo", desc: "Cómo asiste XOne a los desarrolladores", href: link("como-asiste-xone-desarolladores"), icon: "code" },
    { label: "Servicios y soporte", desc: "Formación, consultoría, hosting y soporte", href: link("servicios-y-soporte"), icon: "headset" },
    { label: "Características XOne", desc: "Lo que nos hace únicos", href: link("que-nos-hace-unicos-xone"), icon: "badge" },
    { label: "Movilidad XOne", desc: "Cómo resolvemos la movilidad empresarial", href: link("como-resolvemos-la-movilidad"), icon: "phone" },
    { label: "DevOps", desc: "Integración y despliegue continuos", href: link("devops"), icon: "loop" },
  ] },
  "productos-xone": { label: "XOne EMM", items: [
    { label: "XOneCode", tag: "IA", desc: "Agente de programación con IA", href: link("xonecode"), icon: "cpu" },
    { label: "MXDP", desc: "Plataforma de desarrollo multiexperiencia", href: link("nueva-mxdp"), icon: "layers" },
    { label: "Desarrollo XOneCloud", desc: "Herramientas de desarrollo rápido", href: link("herramientas-rapidas-de-desarrollo-xonecloud"), icon: "cloud" },
    { label: "Réplica de datos y documental", desc: "Apps que funcionan sin cobertura", href: link("replica-de-datos-y-documentacion-xone"), icon: "refresh" },
    { label: "Seguridad", desc: "Protección de extremo a extremo", href: link("ciberseguridad"), icon: "shield" },
    { label: "Bus de integración", desc: "Microservicios para conectar tus sistemas", href: link("bus-integracion-esb-enterprise-service-bus"), icon: "plug" },
    { label: "Cloud – On premise", desc: "Despliega donde lo necesites", href: link("cloud-vs-on-premise-xone"), icon: "server" },
    { label: "Sistema de actualizaciones", desc: "Actualiza las apps desde el servidor", href: link("sistema-de-actualizaciones-xone"), icon: "download" },
    { label: "Multiplataforma", desc: "Android, iOS, Windows y web", href: link("multiplataforma-xone"), icon: "device" },
    { label: "Monitorización con IA", desc: "Anticipa caídas y fallos del servicio", href: link("sistema-de-monitorizacion-con-ia"), icon: "activity" },
    { label: "Notificaciones push", desc: "Avisos al instante en cada dispositivo", href: link("notificaciones-push-xone"), icon: "bell" },
    { label: "XOneAssist", desc: "Tutor virtual para desarrolladores", href: link("xoneassist"), icon: "chat" },
    { label: "EMM / MAM / MDM / BYOD", desc: "Gestión de la movilidad empresarial", href: link("gestion-de-movilidad-empresarial-xone"), icon: "lock" },
  ] },
  "soluciones-xone": { label: "Soluciones XOne", items: [
    { label: "Soluciones XOne", desc: "Apps para cada proceso de negocio", href: link("soluciones-xone"), icon: "briefcase" },
    { label: "Sectores", desc: "Los sectores en los que trabajamos", href: link("soluciones-xone#sectores"), icon: "map" },
    { label: "Casos de uso", desc: "Qué puedes movilizar con XOne", href: link("casos-de-uso-home"), icon: "doc" },
    { label: "Kit Digital", desc: "Digitaliza tu empresa con el Kit Digital", href: link("kit-digital"), icon: "euro" },
  ] },
  "recursos": { label: "Recursos", items: [
    { label: "Casos de éxito", desc: "Proyectos reales de nuestros clientes", href: link("casos-de-exito-xone"), icon: "award" },
    { label: "Noticias", desc: "Novedades de XOne", href: link("noticias"), icon: "news" },
    { label: "Documentación XOne", desc: "Guías y documentación técnica", href: link("documentacionxone"), icon: "book" },
    { label: "Premios y reconocimientos", desc: "Gartner y otros reconocimientos", href: link("premios-y-reconocimientos"), icon: "award" },
    { label: "Colaboraciones I+D+i", desc: "Investigación e innovación", href: link("colaboraciones-id"), icon: "flask" },
  ] },
  "comunidad": { label: "Comunidad", items: [
    { label: "Clientes", desc: "Empresas que confían en XOne", href: link("nuestros-clientes-xone"), icon: "users" },
    { label: "Socios estratégicos", desc: "Nuestras alianzas tecnológicas", href: link("socios-estrategicos-xone"), icon: "handshake" },
    { label: "Hazte partner", desc: "Únete a la red de partners XOne", href: link("hazte-partner-xone"), icon: "user-plus" },
    { label: "Programa de partners", desc: "Cómo funciona el programa", href: link("programadepartners"), icon: "badge" },
  ] },
};

/** Menú del header (documento de visión, apartado 12.1): Soluciones · Productos · Casos de uso · Casos de éxito · Empresa. */
export const nav = {
  menus: [
    { ...groups.soluciones, caseIndex: 1 },
    { ...groups.productos, caseIndex: 4 },
    groups["casos-de-uso"],
    groups["casos-de-exito"],
    { ...groups.empresa, caseIndex: 0 },
  ] as NavMenu[],
  featured: { overline: "ASDD · Agentes", title: "Agentes que entienden tu operación y construyen la solución que necesita.", href: link("asdd") },
  stories: { label: "Casos de éxito", desc: "Proyectos reales de nuestros clientes", href: link("casos-de-exito-xone") },
  wiki: { label: "Wiki", href: "https://xoneisp.com/xonedocs/" },
  secondary: { label: "EN", href: alternate("en"), lang: "en", title: "English version" },
  cta: { label: "Solicitar una demo", href: link("contacto") },
};

export const hero = {
  // Mensaje ASDD: documento de visión v1 (nov-2026), apartado 12.2
  eyebrow: "Agent Self-Driven Development Platform",
  // titular alternativo 3 del apartado 12.2 + frase del apartado 5 (más corto, en línea con la competencia: H1 de 4–9 palabras)
  title: "La plataforma donde los agentes",
  accent: "hacen avanzar tu operación",
  subtitle: "NappAI Voice escucha, NappAI piensa, XOne ejecuta y XOneCode construye y mejora. Tú decides.",
  signature: "La experiencia que conoces, con la IA que necesitas.",
  primary: { label: "Solicitar una demo", href: link("contacto") },
  secondary: { label: "Descubrir ASDD", href: link("asdd") },
  // el ciclo ASDD, en las cuatro esquinas del marco del hero
  cycle: ["Entender", "Construir", "Operar", "Mejorar"] as [string, string, string, string],
  proof: [
    { value: "+20 años", label: "en operación de campo" },
    { value: "ENS · ISO 27001", label: "seguridad certificada" },
  ],
};

export const clients = [
  ["Iberdrola", "iberdrola.png"], ["Telefónica", "telefonica.png"], ["Línea Directa", "linea-directa.png"], ["Navantia", "navantia.png"],
  ["Sacyr", "sacyr.png"], ["Calidad Pascual", "calidad-pascual.png"], ["Cofares", "cofares-recortado.png"], ["Alivia", "alivia.svg"],
  ["Magaiz", "magaiz-recortado.png"], ["Grupo Ruiz", "grupo-ruiz.png"], ["Siemens Gamesa", "siemens-gamesa.png"], ["Loomis", "loomis.png"],
  ["JCarrion", "jcarrion.png"], ["Orenes", "orenes.png"],
].map(([name, file]) => ({ name, src: `${X}/media/clientes/${file}` }));

const CASE_SLUG: Record<string, string> = {"MiniTS": "minits", "Iberdrola": "iberdrola", "Gamesa": "gamesa", "Sacyr": "sacyr", "Navantia": "navantia", "Orenes": "orenes", "Loomis": "loomis", "Istobal": "istobal", "JCarrion": "jcarrion", "Cofares": "cofares", "Ingeteam": "ingeteam", "Tubasa": "tubasa-buskme"};

export const cases = [
  ["MiniTS", "Servicio de carsharing"], ["Iberdrola", "Asistencia técnica en subestaciones"], ["Gamesa", "Gestión operativa de fuerza de campo"],
  ["Sacyr", "Estacionamiento regulado"], ["Navantia", "Mantenimientos preventivos y correctivos"], ["Orenes", "Mantenimiento de máquinas de juego"],
  ["Loomis", "Gestión de bienes y mercancías"], ["Istobal", "Mantenimiento de estaciones de lavado"], ["JCarrion", "Gestión de transporte de mercancías"],
  ["Cofares", "Visión artificial móvil y realidad aumentada"], ["Ingeteam", "App de prevención de riesgos laborales"], ["Tubasa", "Pago del trayecto en el bus urbano"],
].map(([name, sector]) => ({ name, sector, href: link(`casos-de-exito-xone/${CASE_SLUG[name]}`) }));

export const testimonials = [
  { quote: "Trabajar con la herramienta XOne nos permite afrontar los proyectos de movilidad centrándonos tan solo en las necesidades funcionales del cliente.", author: "Jordi Segura", company: "JSV" },
  { quote: "XOne ha resuelto satisfactoriamente la movilización de la gestión de nuestra fuerza de ventas en un tiempo récord (15 días desde la reunión inicial hasta la puesta en producción).", author: null, company: "Tervalis" },
  { quote: "Gracias a la herramienta XOne, hemos conseguido disminuir el 85% del consumo de mensajes de nuestros operarios.", author: null, company: "Fujitsu" },
  { quote: "Es imprescindible contar con una herramienta como XOne, que permite gestionar y administrar de forma remota y eficaz múltiples dispositivos.", author: "Sergio Castellar", company: "Pavapark" },
  { quote: "Gracias a XOne se ha aumentado el 50% de los dispositivos y ya contamos con más de 600 dispositivos para gestionar y resolver las incidencias.", author: null, company: "Multiasistencia" },
];

export const recognitions = [
  "ENS · categoría media", "ISO/IEC 27001:2022", "Gartner · Cuadrante Mágico MXDP 2020 y 2021", "Movilforum Telefónica · mejor caso de éxito 2011 y 2012", "Premio El Confidencial KPMG",
];

export const contact = {
  // cierre de la Home y de todas las páginas (documento de visión, apartado 12.11)
  title: "Empieza por",
  accent: "un caso de uso",
  subtitle: "Te enseñamos cómo funciona con tu proceso.",
  cta: { label: "Solicitar una demo", href: link("contacto") },
  phone: "+34 924 207 371",
  email: "comercial@xone.es",
  address: ["Edificio PCTEX", "Avenida de Elvas, s/n", "06006 Badajoz, España"],
  cities: ["Badajoz", "Madrid", "Guadalajara", "Valencia", "Barcelona", "Bilbao", "Santander", "Jerez de la Frontera"],
};

export const footer = {
  // cierre de marca: titular del hero (documento de visión, apartado 12.2)
  statement: { title: "La plataforma donde los agentes", accent: "hacen avanzar tu operación." },
  contactTitle: "Contacto",
  columns: [
    { title: "Soluciones", links: [["ASDD", "asdd"], ["XOne EMM", "xone-emm"], ["Casos de uso", "casos-de-uso-home"], ["Casos de éxito", "casos-de-exito-xone"]] },
    { title: "Productos", links: [["XOne", "que-es-xone"], ["XOneCode", "xonecode"], ["NappAI", "nappai"], ["NappAI Voice", "nappai-voice"]] },
    { title: "Empresa", links: [["Sobre nosotros", "sobre-nosotros"], ["Clientes", "nuestros-clientes-xone"], ["Noticias", "noticias"], ["Certificaciones", "certificaciones"], ["Financiación europea", "financiacion-europea"]] },
    { title: "Recursos", links: [["Documentación XOne", "documentacionxone"], ["Hazte partner", "hazte-partner-xone"], ["Contacto", "contacto"]] },
  ].map((c) => ({ title: c.title, links: c.links.map(([label, slug]) => ({ label, href: link(slug) })) })),
  external: [{ label: "Wiki", href: "https://xoneisp.com/xonedocs/", external: true }, { label: "YouTube", href: "https://www.youtube.com/channel/UCTtjZK5AYJo3E3hRIu-4z2Q/videos", external: true }],
  top: "Volver arriba",
  legal: { company: "© 2026 Computer Global Software, S.L.", privacy: { label: "Aviso legal, privacidad y cookies", href: link("uso-de-cookies-y-politica-de-privacidad") } },
};

/** Secciones de la Home (documento de visión, apartado 12). Texto literal del documento. */
export const home = {
  what: {
    eyebrow: "Qué es ASDD", title: "Más de 20 años de operación real,", accent: "ahora con agentes",
    lead: "Una plataforma donde agentes de IA propios entienden tu proceso, desarrollan la solución y la hacen funcionar en campo.",
    text: "Agent Self-Driven Development Platform es la combinación de los productos de XOne trabajando como un solo sistema, en el que los agentes de IA hacen avanzar el trabajo por sí mismos, dentro de las reglas que fija la empresa.",
    not: "No es un chatbot, no es una herramienta de IA genérica, no es «programar sin programar» y no es una operación sin personas.",
    link: { label: "Descubrir ASDD", href: link("asdd") },
  },
  cycle: {
    eyebrow: "El ciclo ASDD", title: "Entender, construir, operar y mejorar,", accent: "en un ciclo que mueven los agentes y dirigen las personas",
    steps: [
      { n: "01", tag: "Entender", icon: "search", who: "XOneCode", lead: "Los agentes analizan el proceso de negocio.", text: "Cómo trabaja el equipo, qué datos hay en el ERP, qué reglas se aplican, dónde se pierde tiempo.", decide: "Valida que el problema está bien entendido." },
      { n: "02", tag: "Construir", icon: "code", who: "XOneCode sobre XOne", lead: "XOneCode genera la aplicación a medida.", text: "Sobre la plataforma XOne low-code: pantallas, flujos, reglas e integraciones.", decide: "Revisa y aprueba lo construido antes de ponerlo en marcha." },
      { n: "03", tag: "Operar", icon: "signal", who: "XOne, NappAI y NappAI Voice", lead: "La aplicación trabaja en la calle, también sin cobertura.", text: "Los agentes de NappAI cruzan datos y actúan (asignar, avisar, escalar) y NappAI Voice atiende y hace llamadas.", decide: "Supervisa las excepciones y aprueba las acciones sensibles." },
      { n: "04", tag: "Mejorar", icon: "refresh", who: "NappAI y XOneCode", lead: "Lo que ocurre en la operación vuelve a los agentes.", text: "Detectan dónde se atasca el proceso y proponen cambios en la solución.", decide: "Decide qué cambios se aplican." },
    ] as { n: string; tag: string; icon: IconName; who: string; lead: string; text: string; decide: string }[],
    whoLabel: "Quién actúa", decideLabel: "Qué decide la persona",
  },
  pieces: {
    eyebrow: "Las cuatro piezas", title: "NappAI Voice escucha, NappAI piensa,", accent: "XOne ejecuta y XOneCode construye y mejora",
    items: [
      { title: "XOne", role: "Ejecuta", icon: "layers", text: "La plataforma low-code de movilidad con más de 20 años en operación real: apps de campo que funcionan sin cobertura e integradas con los sistemas de la empresa.", href: link("que-es-xone") },
      { title: "XOneCode", role: "Construye", icon: "code", text: "Agentes que entienden el problema de negocio y programan la aplicación a medida en poco tiempo, sobre XOne.", href: link("xonecode") },
      { title: "NappAI", role: "Decide y orquesta", icon: "cpu", text: "El motor de agentes de IA propio: cruza datos, aplica reglas, conecta sistemas y actúa.", href: link("nappai") },
      { title: "NappAI Voice", role: "Conversa", icon: "headset", text: "Agentes de voz que atienden y hacen llamadas, entienden lo que se acuerda y lo convierten en acciones.", href: link("nappai-voice") },
    ] as { title: string; role: string; icon: IconName; text: string; href: string }[],
  },
  loop: {
    eyebrow: "El bucle cerrado", title: "De la conversación a la calle,", accent: "y de la calle a la conversación",
    subtitle: "Lo que se acuerda en una conversación se ejecuta en la calle, y lo que pasa en la calle vuelve al cliente en forma de conversación.",
    items: [
      { tag: "De la conversación a la calle", icon: "headset", text: "Un cliente llama para avisar de una avería. El agente de voz entiende el problema, NappAI consulta el ERP y propone técnico y franja, y la orden aparece en el móvil del técnico con toda la información." },
      { tag: "De la calle a la conversación", icon: "map", text: "Un repartidor no encuentra a nadie en casa y pulsa un botón en la app. El agente de voz llama al destinatario, acuerda una alternativa y la ruta se actualiza." },
    ] as { tag: string; icon: IconName; text: string }[],
    note: "Que un hecho en la calle desencadene una conversación solo es posible si la misma plataforma está en el móvil del trabajador. Esa es la ventaja de XOne frente a las empresas que solo hacen bots.",
  },
  solutions: {
    eyebrow: "Dos soluciones", title: "Dos soluciones,", accent: "una plataforma",
    subtitle: "Lo que ya funciona sigue funcionando, y ahora puede sumar agentes. Cada cliente avanza al ritmo que quiere, empezando por un caso de uso concreto.",
    items: [
      { tag: "Mensaje principal", title: "Agent Self-Driven Development Platform (ASDD)", text: "La nueva forma de trabajar con agentes.", href: link("asdd"), cta: "Descubrir ASDD" },
      { tag: "La base", title: "XOne EMM", text: "La solución de movilidad empresarial que XOne lleva años implantando, que agrupa todos los productos anteriores. Es la base sobre la que se apoya ASDD.", href: link("xone-emm"), cta: "Conocer XOne EMM" },
    ],
  },
  usos: { eyebrow: "Casos de uso", title: "Once soluciones,", accent: "de la llamada a la calle", cta: "Ver el caso de uso", all: "Ver todos los casos de uso", allHref: link("casos-de-uso-home") },
  why: {
    eyebrow: "Por qué XOne", title: "Lo que", accent: "nos diferencia",
    items: [
      { lead: "Más de 20 años en operación de campo.", text: "La IA de XOne nace de conocer cómo trabaja un técnico, un repartidor o un inspector. Personal certificado y clientes en producción." },
      { lead: "IA propia.", text: "XOneCode, NappAI y NappAI Voice son desarrollos propios del ecosistema XOne, no una capa encima de un servicio ajeno." },
      { lead: "El ciclo completo en una plataforma.", text: "Conversación, decisión, ejecución en campo y evolución del software, sin pegar herramientas de distintos proveedores." },
      { lead: "Base probada.", text: "Apps que funcionan sin cobertura, con foto, firma y geolocalización, integradas con los sistemas de la empresa." },
      { lead: "La persona decide.", text: "Aprobaciones humanas, reglas que los agentes no pueden saltarse, traspaso a una persona cuando hace falta y registro de lo que hace cada agente." },
    ],
  },
  // [PENDIENTE] fecha y enlace del evento; se retira tras el evento
  event: { badge: "Próximamente", title: "Presentamos la nueva etapa de XOne en Valencia.", cta: { label: "Reservar plaza", href: link("contacto") } },
  // FAQ: preguntas redactadas por nosotros; respuestas literales de docs/vision-asdd.md (apdo. entre corchetes)
  faq: {
    eyebrow: "Antes de empezar", title: "Preguntas", accent: "frecuentes", subtitle: "Lo esencial sobre ASDD y XOne.",
    items: [
      { q: "¿Qué es ASDD?", a: "Agent Self-Driven Development Platform: la combinación de los productos de XOne trabajando como un solo sistema, en el que los agentes de IA hacen avanzar el trabajo por sí mismos, dentro de las reglas que fija la empresa." }, // [3]
      { q: "¿Es un chatbot?", a: "No. ASDD no es un chatbot, no es una herramienta de IA genérica, no es «programar sin programar» y no es una operación sin personas. Es una plataforma de empresa en la que la IA acelera y ejecuta, y las personas dirigen." }, // [3]
      { q: "¿Quién toma las decisiones?", a: "La persona decide. Aprobaciones humanas, reglas que los agentes no pueden saltarse, traspaso a una persona y registro de lo que hace cada agente." }, // [8.5]
      { q: "Ya uso XOne. ¿Qué cambia?", a: "Lo que ya funciona sigue funcionando, y ahora puede sumar agentes. XOne EMM agrupa todos los productos anteriores y es la base sobre la que se apoya ASDD." }, // [10]
      { q: "¿Funciona sin cobertura?", a: "Sí. Las apps de campo funcionan sin cobertura, con foto, firma y geolocalización, integradas con los sistemas de la empresa." }, // [4, 8.4]
      { q: "¿Se conecta con mis sistemas?", a: "Sí. Con el ERP, el CRM y los sistemas que ya usa cada cliente." }, // [5]
      { q: "¿Para qué empresas es?", a: "Empresas con operaciones de campo: servicio técnico y mantenimiento; distribución, reparto y logística; energía, obra e industria; asistencia, seguros y gestión de inmuebles." }, // [9]
    ],
  },
};
