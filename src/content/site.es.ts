// Contenido REAL (español) extraído de https://xone.es (24-nov-2026). Ver CONTENT_MAP.md para el origen de cada bloque.
import type { IconName } from "../components/ui";
import { alternate, link } from "../i18n";

const X = "https://xone.es";

export const announcement = { text: "XOne obtiene la certificación ISO/IEC 27001", cta: "Leer la noticia", href: link("certificacion-iso-27001") };

/** Menús del header: los 6 grupos reales de xone.es (mismos enlaces). Las descripciones cortas son reescritura propia. */
export const nav = {
  menus: [
    { label: "Plataforma", caseIndex: 1, items: [
      { label: "Plataforma XOne", desc: "Qué es XOne y cómo funciona", href: link("que-es-xone"), icon: "layers" },
      { label: "Marketectura", desc: "La plataforma completa, de un vistazo", href: link("marketectura"), icon: "grid" },
      { label: "Herramientas de desarrollo", desc: "Cómo asiste XOne a los desarrolladores", href: link("como-asiste-xone-desarolladores"), icon: "code" },
      { label: "Servicios y soporte", desc: "Formación, consultoría, hosting y soporte", href: link("servicios-y-soporte"), icon: "headset" },
      { label: "Características XOne", desc: "Lo que nos hace únicos", href: link("que-nos-hace-unicos-xone"), icon: "badge" },
      { label: "Movilidad XOne", desc: "Cómo resolvemos la movilidad empresarial", href: link("como-resolvemos-la-movilidad"), icon: "phone" },
      { label: "DevOps", desc: "Integración y despliegue continuos", href: link("devops"), icon: "loop" },
    ] },
    { label: "Productos", caseIndex: 4, items: [
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
    { label: "Soluciones", caseIndex: 2, items: [
      { label: "Soluciones XOne", desc: "Apps para cada proceso de negocio", href: link("soluciones-xone"), icon: "briefcase" },
      { label: "Sectores", desc: "Los sectores en los que trabajamos", href: link("soluciones-xone#sectores"), icon: "map" },
      { label: "Casos de uso", desc: "Qué puedes movilizar con XOne", href: link("casos-de-uso-home"), icon: "doc" },
      { label: "Casos de éxito", desc: "Proyectos reales de nuestros clientes", href: link("casos-de-exito-xone"), icon: "award" },
      { label: "Kit Digital", desc: "Digitaliza tu empresa con el Kit Digital", href: link("kit-digital"), icon: "euro" },
    ] },
    { label: "Comunidad", caseIndex: 6, items: [
      { label: "Clientes", desc: "Empresas que confían en XOne", href: link("nuestros-clientes-xone"), icon: "users" },
      { label: "Socios estratégicos", desc: "Nuestras alianzas tecnológicas", href: link("socios-estrategicos-xone"), icon: "handshake" },
      { label: "Hazte partner", desc: "Únete a la red de partners XOne", href: link("hazte-partner-xone"), icon: "user-plus" },
      { label: "Programa de partners", desc: "Cómo funciona el programa", href: link("programadepartners"), icon: "badge" },
    ] },
    { label: "Recursos", caseIndex: 9, items: [
      { label: "Noticias", desc: "Novedades de XOne", href: link("noticias"), icon: "news" },
      { label: "Documentación XOne", desc: "Guías y documentación técnica", href: link("documentacionxone"), icon: "book" },
      { label: "Premios y reconocimientos", desc: "Gartner y otros reconocimientos", href: link("premios-y-reconocimientos"), icon: "award" },
      { label: "Colaboraciones I+D+i", desc: "Investigación e innovación", href: link("colaboraciones-id"), icon: "flask" },
    ] },
    { label: "Empresa", caseIndex: 0, items: [
      { label: "Sobre nosotros", desc: "Más de 20 años creando apps empresariales", href: link("sobre-nosotros"), icon: "building" },
      { label: "Certificaciones", desc: "ENS e ISO/IEC 27001", href: link("certificaciones"), icon: "shield" },
      { label: "Financiación europea", desc: "Proyectos cofinanciados por la UE", href: link("financiacion-europea"), icon: "euro" },
    ] },
  ],
  featured: { overline: "XOneCode · IA", title: "Tu agente de programación especializado en XOne.", href: link("xonecode") },
  stories: { label: "Casos de éxito", desc: "Proyectos reales de nuestros clientes", href: link("casos-de-exito-xone") },
  wiki: { label: "Wiki", href: "https://xoneisp.com/xonedocs/" },
  secondary: { label: "EN", href: alternate("en"), lang: "en", title: "English version" },
  cta: { label: "Contacto", href: link("contacto") },
};

export const hero = {
  eyebrow: "Plataforma de desarrollo multiexperiencia",
  title: "Acelera el desarrollo de",
  accent: "aplicaciones empresariales",
  subtitle: "Crea en poco tiempo apps móviles multiplataforma con el mismo código y en verdadero «real native»: seguras, integradas y siempre operativas.",
  primary: { label: "Conoce la plataforma", href: link("que-es-xone") },
  secondary: { label: "Habla con nosotros", href: link("contacto") },
  platforms: ["Android", "iOS", "Windows", "Web / PWA"],
  // sectores reales de /soluciones-xone/ (rotan en la tarjeta del hero)
  sectors: ["servicio técnico", "fuerza de ventas", "energía y utilities", "logística", "sanidad", "administración pública", "aseguradoras", "industria"],
  proof: [
    { value: "70 %", label: "menos tiempo de desarrollo" },
    { value: "ENS · ISO 27001", label: "seguridad certificada" },
  ],
};

export const clients = [
  ["Iberdrola", "iberdrola.png"], ["Telefónica", "telefonica.png"], ["Línea Directa", "linea-directa.png"], ["Navantia", "navantia.png"],
  ["Sacyr", "sacyr.png"], ["Calidad Pascual", "calidad-pascual.png"], ["Cofares", "cofares-recortado.png"], ["Alivia", "alivia.svg"],
  ["Magaiz", "magaiz-recortado.png"], ["Grupo Ruiz", "grupo-ruiz.png"], ["Siemens Gamesa", "siemens-gamesa.png"], ["Loomis", "loomis.png"],
  ["JCarrion", "jcarrion.png"], ["Orenes", "orenes.png"],
].map(([name, file]) => ({ name, src: `${X}/media/clientes/${file}` }));

export const pillars: { n: string; tag: string; icon: IconName; lead: string; text: string }[] = [
  { n: "01", tag: "Multiplataforma", icon: "layers", lead: "Un código, todas las plataformas.", text: "Escribe una vez y ejecuta en Android, iOS, Windows y web, en verdadero nativo." },
  { n: "02", tag: "Módulos de seguridad", icon: "shield", lead: "Seguridad de extremo a extremo.", text: "Seguridad integrada en todo el proceso y transferencia de información protegida." },
  { n: "03", tag: "Comunicaciones", icon: "signal", lead: "Siempre operativa.", text: "Comunicaciones inteligentes: las apps funcionan incluso sin cobertura." },
  { n: "04", tag: "Bus de integración", icon: "plug", lead: "Se integra con todo.", text: "Conecta con tus sistemas actuales sin modificarlos gracias al bus de integración." },
];

export const stats = [
  { value: "70 %", label: "menos tiempo desde que empieza el desarrollo hasta que la app funciona" },
  { value: "1", label: "código para Android, iOS, Windows y web" },
  { value: "+20", label: "años desarrollando apps empresariales" },
  { value: "2", label: "certificaciones de seguridad: ENS e ISO/IEC 27001" },
];

export const ai = {
  eyebrow: "XOne + IA",
  title: "La IA, en",
  accent: "cada paso",
  after: "de tus proyectos",
  subtitle: "Menos tiempo en lo repetitivo y más en lo que aporta valor: proyectos más rápidos, con más calidad y con un consumo de IA optimizado.",
  steps: [
    { title: "Diseño", text: "De la idea a la pantalla en mucho menos tiempo, con diseños generados y adaptados por la IA." },
    { title: "Análisis", text: "Requisitos y tareas claros desde el primer día, organizados en Autopilot." },
    { title: "Desarrollo", text: "Agentes que programan sobre tu proyecto XOne, lo prueban y lo despliegan." },
    { title: "Documentación", text: "Siempre al día, generada a la vez que el código." },
    { title: "Soporte", text: "Respuestas más rápidas y precisas para tus usuarios." },
  ],
  xonecode: {
    title: "XOneCode",
    text: "Tu agente de programación especializado en XOne, integrado con los mejores modelos de IA del mercado. Tú decides qué construir; XOneCode se encarga del cómo.",
    href: link("xonecode"),
    tabs: [
      { id: "tareas", label: "Sistema de tareas", text: "Envía tareas y los agentes las programan solos. Con Autopilot, nuestro gestor de proyectos integrado con el entorno de desarrollo." },
      { id: "mcp", label: "MCP y skills", text: "Programa en XOne desde el asistente de IA que prefieras, con skills que lo convierten en experto." },
      { id: "controles", label: "Nuevos controles", text: "Los frameworks de XOne incorporan controles para apps con diseños más modernos." },
    ],
    autonomous: { lead: "Tú descansas, XOneCode sigue produciendo.", text: "En modo autónomo, los agentes programan las tareas, las prueban y las dejan listas para que las revises a la vuelta." },
    screenshot: { src: `${X}/media/xonecode/xonecode-escritorio.webp`, alt: "Escritorio de XOneCode: proyectos, tareas de los agentes en marcha y dispositivos conectados" },
  },
};

export const products: { title: string; icon: IconName; text: string; href: string }[] = [
  { title: "Plataforma MXDP", icon: "layers", text: "Plataforma de desarrollo multiexperiencia que aplica inteligencia artificial y nuevas formas de interactuar con las apps móviles.", href: link("nueva-mxdp") },
  { title: "XOneCloud", icon: "cloud", text: "Enfoque multimodal para apps móviles nativas, con herramientas de desarrollo rápido y servicios de back-end móviles.", href: link("herramientas-rapidas-de-desarrollo-xonecloud") },
  { title: "Seguridad", icon: "shield", text: "Perímetros seguros de acceso a redes, aplicaciones, dispositivos y datos, establecidos, supervisados y mantenidos.", href: link("ciberseguridad") },
  { title: "Comunicaciones y réplica", icon: "refresh", text: "Sistema basado en machine learning: las apps funcionan con independencia de los enlaces de comunicación.", href: link("replica-de-datos-y-documentacion-xone") },
  { title: "Bus de integración", icon: "plug", text: "Interconecta con el sistema del cliente y da movilidad a prácticamente cualquier sistema con escasos recursos.", href: link("bus-integracion-esb-enterprise-service-bus") },
  { title: "XOne EMM", icon: "phone", text: "Gestión de movilidad empresarial para habilitar el uso de los dispositivos móviles de los empleados en la empresa.", href: link("gestion-de-movilidad-empresarial-xone") },
  { title: "Monitorización con IA", icon: "signal", text: "XOne Monitor comprueba las funciones del servidor y usa machine learning para predecir caídas de servicio y fallos.", href: link("sistema-de-monitorizacion-con-ia") },
  { title: "XOneAssist", icon: "chat", text: "Tutor virtual que da soporte a los desarrolladores, aumenta su productividad y reduce tiempo y coste.", href: link("xoneassist") },
  { title: "Actualizaciones", icon: "device", text: "XOne Live recibe las peticiones de los dispositivos, las valida y gestiona el envío de actualizaciones desde el servidor.", href: link("sistema-de-actualizaciones-xone") },
];

export const cases = [
  ["MiniTS", "Servicio de carsharing"], ["Iberdrola", "Asistencia técnica en subestaciones"], ["Gamesa", "Gestión operativa de fuerza de campo"],
  ["Sacyr", "Estacionamiento regulado"], ["Navantia", "Mantenimientos preventivos y correctivos"], ["Orenes", "Mantenimiento de máquinas de juego"],
  ["Loomis", "Gestión de bienes y mercancías"], ["Istobal", "Mantenimiento de estaciones de lavado"], ["JCarrion", "Gestión de transporte de mercancías"],
  ["Cofares", "Visión artificial móvil y realidad aumentada"], ["Ingeteam", "App de prevención de riesgos laborales"], ["Tubasa", "Pago del trayecto en el bus urbano"],
].map(([name, sector]) => ({ name, sector, href: link("casos-de-exito-xone") }));

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

export const services = [
  { title: "Formación y capacitación", lead: "Adaptado a tus necesidades.", text: "Formación a medida para usuarios y desarrolladores, con una curva de aprendizaje muy baja." },
  { title: "Consultoría", lead: "Aportamos valor a tu negocio.", text: "Acompañamiento desde el origen de la idea hasta la puesta a punto y su seguimiento." },
  { title: "Hosting", lead: "Tú eliges el hosting.", text: "En local, en la nube, VPS, compartido, dedicado o elástico: te ayudamos a decidir." },
  { title: "Diseño de apps", lead: "Tú nos dices qué necesitas.", text: "Apps fáciles de usar, intuitivas y siempre basadas en la imagen corporativa del cliente." },
  { title: "Mantenimiento", lead: "Correctivo y evolutivo.", text: "Respuesta ágil a errores, mejoras, actualizaciones y nuevas versiones." },
  { title: "Soporte", lead: "Atención multiidioma.", text: "Call center especializado, XOne Wiki, web de clientes y gestión avanzada de incidencias." },
];

// Preguntas redactadas por nosotros; las respuestas resumen textos reales de xone.es (ver REWRITES en CONTENT_MAP.md)
export const faq = [
  { q: "¿Qué es XOne?", a: "Una plataforma de desarrollo multiexperiencia para crear apps corporativas de movilidad en todos los dispositivos y sistemas operativos del mercado, de forma rápida, segura y eficaz." },
  { q: "¿En qué plataformas funcionan las apps?", a: "Android, iOS, Windows y web/PWA. Escribes el código una sola vez y lo ejecutas en todas, en verdadero nativo." },
  { q: "¿Las apps funcionan sin cobertura?", a: "Sí. El sistema de comunicaciones de XOne, basado en machine learning, permite que las apps sigan operativas aunque no haya enlace de comunicación." },
  { q: "¿Puedo integrarlo con mis sistemas actuales?", a: "Sí. El bus de integración XOne conecta tu app con cualquier sistema externo sin modificar tu sistema actual." },
  { q: "¿Qué certificaciones de seguridad tiene XOne?", a: "Esquema Nacional de Seguridad (ENS) en categoría media e ISO/IEC 27001:2022, ambas por entidad de certificación acreditada." },
  { q: "¿Cómo ayuda la IA en mis proyectos?", a: "XOne integra IA en diseño, análisis, desarrollo, documentación y soporte. XOneCode, su agente de programación, programa, prueba y deja listas las tareas que le envías." },
];

export const contact = {
  title: "¿Hablamos de tu",
  accent: "proyecto",
  subtitle: "Cuéntanos qué necesitas movilizar y te enseñamos cómo hacerlo con XOne.",
  cta: { label: "Contacta con XOne", href: link("contacto") },
  phone: "+34 924 207 371",
  email: "comercial@xone.es",
  address: ["Edificio PCTEX", "Avenida de Elvas, s/n", "06006 Badajoz, España"],
  cities: ["Badajoz", "Madrid", "Guadalajara", "Valencia", "Barcelona", "Bilbao", "Santander", "Jerez de la Frontera"],
};

export const footer = {
  tagline: "Plataforma de desarrollo multiexperiencia para apps empresariales.",
  columns: [
    { title: "Plataforma", links: [["Plataforma XOne", "que-es-xone"], ["Marketectura", "marketectura"], ["Herramientas de desarrollo", "como-asiste-xone-desarolladores"], ["Servicios y soporte", "servicios-y-soporte"], ["Características XOne", "que-nos-hace-unicos-xone"], ["Movilidad XOne", "como-resolvemos-la-movilidad"]] },
    { title: "Soluciones", links: [["Soluciones XOne", "soluciones-xone"], ["Sectores", "soluciones-xone/#sectores"], ["Casos de uso", "casos-de-uso-home"], ["Casos de éxito", "casos-de-exito-xone"], ["Kit Digital", "kit-digital"]] },
    { title: "Comunidad", links: [["Clientes", "nuestros-clientes-xone"], ["Socios estratégicos", "socios-estrategicos-xone"], ["Hazte partner", "hazte-partner-xone"], ["Programa de partners", "programadepartners"]] },
    { title: "Empresa", links: [["Sobre nosotros", "sobre-nosotros"], ["Certificaciones", "certificaciones"], ["Premios", "premios-y-reconocimientos"], ["Financiación europea", "financiacion-europea"], ["Noticias", "noticias"]] },
  ].map((c) => ({ title: c.title, links: c.links.map(([label, slug]) => ({ label, href: link(slug) })) })),
  legal: { company: "© 2026 Computer Global Software, S.L.", privacy: { label: "Aviso legal y privacidad", href: link("uso-de-cookies-y-politica-de-privacidad") } },
};
