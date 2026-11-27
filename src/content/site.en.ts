// REAL content (English) taken from https://xone.es/en/ (24-Nov-2026). Same shape as site.es.ts.
// Texts that do not exist on xone.es/en (menu descriptions, FAQ, testimonials, labels) are translated from site.es.ts — see CONTENT_MAP.md.
import type { IconName } from "../components/ui";
import { alternate, link } from "../i18n";
import type { NavMenu } from "../components/ui/Navbar";
import type { GroupKey } from "./pages/types";
import { CASES } from "./pages/casos";
import { usos, usoSlug } from "./usos";

const X = "https://xone.es";

// [PENDING] event date and registration link (contact page for now). Remove after the event.
export const announcement = { badge: "Event", text: "We present XOne's new chapter in Valencia · Coming soon", cta: "Book your place", href: link("contacto") };

/** Todos los grupos de páginas: los visibles en el menú y los antiguos (fuera del menú, pero con migas y relacionados). */
export const groups: Record<GroupKey | "casos-de-exito", NavMenu> = {
  soluciones: { label: "Solutions", items: [
    { label: "ASDD", tag: "AI", desc: "Agent Self-Driven Development Platform", href: link("asdd"), icon: "sparkle" },
    { label: "XOne EMM", desc: "The enterprise mobility solution, the foundation of ASDD", href: link("xone-emm"), icon: "phone" },
  ] },
  productos: { label: "Products", items: [
    { label: "XOne", desc: "Executes: the low-code mobility platform", href: link("que-es-xone"), icon: "layers" },
    { label: "XOneCode", desc: "Builds: agents that code the tailor-made application", href: link("xonecode"), icon: "code" },
    { label: "NappAI", desc: "Decides and orchestrates: our own AI agent engine", href: link("nappai"), icon: "cpu" },
    { label: "NappAI Voice", desc: "Converses: voice agents that take and make calls", href: link("nappai-voice"), icon: "headset" },
  ] },
  "casos-de-uso": { label: "Use cases", items: usos.map((u) => ({ label: u.en.name, desc: u.en.sector, href: link(usoSlug(u)), icon: u.icon })) },
  "casos-de-exito": { label: "Success stories", items: [
    { label: "All success stories", desc: "Real projects from our customers", href: link("casos-de-exito-xone"), icon: "award" },
    ...CASES.map((c) => ({ label: c.name, desc: c.en.area, href: link(`casos-de-exito-xone/${c.slug}`), icon: c.icon })),
  ] },
  empresa: { label: "Company", items: [
    { label: "About us", desc: "More than 20 years in field operations", href: link("sobre-nosotros"), icon: "building" },
    { label: "Customers", desc: "Companies that trust XOne", href: link("nuestros-clientes-xone"), icon: "users" },
    { label: "News", desc: "What's new at XOne", href: link("noticias"), icon: "news" },
    { label: "Certifications", desc: "ENS and ISO/IEC 27001", href: link("certificaciones"), icon: "shield" },
    { label: "European funding", desc: "Projects co-funded by the EU", href: link("financiacion-europea"), icon: "euro" },
  ] },
  "plataforma": { label: "XOne platform", items: [
    { label: "XOne platform", desc: "What XOne is and how it works", href: link("que-es-xone"), icon: "layers" },
    { label: "Marketecture", desc: "The whole platform at a glance", href: link("marketectura"), icon: "grid" },
    { label: "Development tools", desc: "How XOne supports developers", href: link("como-asiste-xone-desarolladores"), icon: "code" },
    { label: "Services and support", desc: "Training, consulting, hosting and support", href: link("servicios-y-soporte"), icon: "headset" },
    { label: "XOne features", desc: "What makes us unique", href: link("que-nos-hace-unicos-xone"), icon: "badge" },
    { label: "XOne mobility", desc: "How we solve enterprise mobility", href: link("como-resolvemos-la-movilidad"), icon: "phone" },
    { label: "DevOps", desc: "Continuous integration and delivery", href: link("devops"), icon: "loop" },
  ] },
  "productos-xone": { label: "XOne EMM", items: [
    { label: "XOneCode", tag: "AI", desc: "AI coding agent", href: link("xonecode"), icon: "cpu" },
    { label: "MXDP", desc: "Multiexperience development platform", href: link("nueva-mxdp"), icon: "layers" },
    { label: "XOneCloud development", desc: "Rapid development tools", href: link("herramientas-rapidas-de-desarrollo-xonecloud"), icon: "cloud" },
    { label: "Data and document replication", desc: "Apps that work without coverage", href: link("replica-de-datos-y-documentacion-xone"), icon: "refresh" },
    { label: "Security", desc: "End-to-end protection", href: link("ciberseguridad"), icon: "shield" },
    { label: "Integration bus", desc: "Microservices to connect your systems", href: link("bus-integracion-esb-enterprise-service-bus"), icon: "plug" },
    { label: "Cloud – On premises", desc: "Deploy wherever you need", href: link("cloud-vs-on-premise-xone"), icon: "server" },
    { label: "Update system", desc: "Update apps from the server", href: link("sistema-de-actualizaciones-xone"), icon: "download" },
    { label: "Cross-platform", desc: "Android, iOS, Windows and web", href: link("multiplataforma-xone"), icon: "device" },
    { label: "AI monitoring", desc: "Anticipate outages and service failures", href: link("sistema-de-monitorizacion-con-ia"), icon: "activity" },
    { label: "Push notifications", desc: "Instant alerts on every device", href: link("notificaciones-push-xone"), icon: "bell" },
    { label: "XOneAssist", desc: "Virtual tutor for developers", href: link("xoneassist"), icon: "chat" },
    { label: "EMM / MAM / MDM / BYOD", desc: "Enterprise mobility management", href: link("gestion-de-movilidad-empresarial-xone"), icon: "lock" },
  ] },
  "soluciones-xone": { label: "XOne solutions", items: [
    { label: "XOne solutions", desc: "Apps for every business process", href: link("soluciones-xone"), icon: "briefcase" },
    { label: "Sectors", desc: "The industries we work in", href: link("soluciones-xone#sectores"), icon: "map" },
    { label: "Use cases", desc: "What you can mobilize with XOne", href: link("casos-de-uso-home"), icon: "doc" },
    { label: "Kit Digital", desc: "Digitalize your company with Kit Digital", href: link("kit-digital"), icon: "euro" },
  ] },
  "recursos": { label: "Resources", items: [
    { label: "Success stories", desc: "Real projects from our customers", href: link("casos-de-exito-xone"), icon: "award" },
    { label: "News", desc: "What's new at XOne", href: link("noticias"), icon: "news" },
    { label: "XOne documentation", desc: "Guides and technical documentation", href: link("documentacionxone"), icon: "book" },
    { label: "Awards and recognition", desc: "Gartner and other recognitions", href: link("premios-y-reconocimientos"), icon: "award" },
    { label: "R&D&I collaborations", desc: "Research and innovation", href: link("colaboraciones-id"), icon: "flask" },
  ] },
  "comunidad": { label: "Community", items: [
    { label: "Customers", desc: "Companies that trust XOne", href: link("nuestros-clientes-xone"), icon: "users" },
    { label: "Strategic partners", desc: "Our technology alliances", href: link("socios-estrategicos-xone"), icon: "handshake" },
    { label: "Become a partner", desc: "Join the XOne partner network", href: link("hazte-partner-xone"), icon: "user-plus" },
    { label: "Partner program", desc: "How the program works", href: link("programadepartners"), icon: "badge" },
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
  featured: { overline: "ASDD · Agents", title: "Agents that understand your operation and build the solution it needs.", href: link("asdd") },
  stories: { label: "Success stories", desc: "Real projects from our customers", href: link("casos-de-exito-xone") },
  wiki: { label: "Wiki", href: "https://xoneisp.com/xonedocs/" },
  secondary: { label: "ES", href: alternate("es"), lang: "es", title: "Versión en español" },
  cta: { label: "Request a demo", href: link("contacto") },
};

export const hero = {
  // ASDD message: vision document v1 (Nov 2026), section 12.2
  eyebrow: "Agent Self-Driven Development Platform",
  title: "The platform where agents",
  accent: "move your operation forward",
  subtitle: "NappAI Voice listens, NappAI thinks, XOne executes and XOneCode builds and improves. You decide.",
  signature: "The experience you know, with the AI you need.",
  primary: { label: "Request a demo", href: link("contacto") },
  secondary: { label: "Discover ASDD", href: link("asdd") },
  cycle: ["Understand", "Build", "Operate", "Improve"] as [string, string, string, string],
  proof: [
    { value: "20+ years", label: "in field operations" },
    { value: "ENS · ISO 27001", label: "certified security" },
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
  ["MiniTS", "Carsharing service"], ["Iberdrola", "Technical assistance at substations"], ["Gamesa", "Field force operations management"],
  ["Sacyr", "Regulated parking"], ["Navantia", "Preventive and corrective maintenance"], ["Orenes", "Gaming machine maintenance"],
  ["Loomis", "Asset and goods management"], ["Istobal", "Car wash station maintenance"], ["JCarrion", "Freight transport management"],
  ["Cofares", "Mobile computer vision and augmented reality"], ["Ingeteam", "Occupational risk prevention app"], ["Tubasa", "City bus fare payment"],
].map(([name, sector]) => ({ name, sector, href: link(`casos-de-exito-xone/${CASE_SLUG[name]}`) }));

export const testimonials = [
  { quote: "Working with the XOne tool lets us approach mobility projects by focusing only on the customer's functional needs.", author: "Jordi Segura", company: "JSV" },
  { quote: "XOne successfully mobilized our sales force management in record time (15 days from the kick-off meeting to going live).", author: null, company: "Tervalis" },
  { quote: "Thanks to the XOne tool, we have reduced our technicians' message consumption by 85%.", author: null, company: "Fujitsu" },
  { quote: "It is essential to have a tool like XOne, which lets you manage and administer multiple devices remotely and efficiently.", author: "Sergio Castellar", company: "Pavapark" },
  { quote: "Thanks to XOne, the number of devices has grown by 50% and we now manage more than 600 devices to handle and resolve incidents.", author: null, company: "Multiasistencia" },
];

export const recognitions = [
  "ENS · medium category", "ISO/IEC 27001:2022", "Gartner · MXDP Magic Quadrant 2020 and 2021", "Movilforum Telefónica · best success story 2011 and 2012", "El Confidencial KPMG award",
];

export const contact = {
  // closing block on the Home and every page (vision document, section 12.11)
  title: "Start with",
  accent: "a use case",
  subtitle: "We'll show you how it works with your process.",
  cta: { label: "Request a demo", href: link("contacto") },
  phone: "+34 924 207 371",
  email: "comercial@xone.es",
  address: ["PCTEX Building", "Avenida de Elvas, s/n", "06006 Badajoz, Spain"],
  cities: ["Badajoz", "Madrid", "Guadalajara", "Valencia", "Barcelona", "Bilbao", "Santander", "Jerez de la Frontera"],
};

export const footer = {
  statement: { title: "The platform where agents", accent: "move your operation forward." },
  contactTitle: "Contact",
  columns: [
    { title: "Solutions", links: [["ASDD", "asdd"], ["XOne EMM", "xone-emm"], ["Use cases", "casos-de-uso-home"], ["Success stories", "casos-de-exito-xone"]] },
    { title: "Products", links: [["XOne", "que-es-xone"], ["XOneCode", "xonecode"], ["NappAI", "nappai"], ["NappAI Voice", "nappai-voice"]] },
    { title: "Company", links: [["About us", "sobre-nosotros"], ["Customers", "nuestros-clientes-xone"], ["News", "noticias"], ["Certifications", "certificaciones"], ["European funding", "financiacion-europea"]] },
    { title: "Resources", links: [["XOne documentation", "documentacionxone"], ["Become a partner", "hazte-partner-xone"], ["Contact", "contacto"]] },
  ].map((c) => ({ title: c.title, links: c.links.map(([label, slug]) => ({ label, href: link(slug) })) })),
  external: [{ label: "Wiki", href: "https://xoneisp.com/xonedocs/", external: true }, { label: "YouTube", href: "https://www.youtube.com/channel/UCTtjZK5AYJo3E3hRIu-4z2Q/videos", external: true }],
  top: "Back to top",
  legal: { company: "© 2026 Computer Global Software, S.L.", privacy: { label: "Legal notice, privacy and cookies", href: link("uso-de-cookies-y-politica-de-privacidad") } },
};

/** Home sections (vision document, section 12). Translation of the Spanish text. */
export const home = {
  what: {
    eyebrow: "What ASDD is", title: "More than 20 years of real operation,", accent: "now with agents",
    lead: "A platform where our own AI agents understand your process, develop the solution and make it work in the field.",
    text: "Agent Self-Driven Development Platform is XOne's products working as a single system, in which AI agents move the work forward on their own, within the rules set by the company.",
    not: "It is not a chatbot, not a generic AI tool, not “coding without coding” and not an operation without people.",
    link: { label: "Discover ASDD", href: link("asdd") },
  },
  cycle: {
    eyebrow: "The ASDD cycle", title: "Understand, build, operate and improve,", accent: "in a cycle driven by agents and led by people",
    steps: [
      { n: "01", tag: "Understand", icon: "search", who: "XOneCode", lead: "The agents analyse the business process.", text: "How the team works, what data is in the ERP, which rules apply, where time is lost.", decide: "Validates that the problem is well understood." },
      { n: "02", tag: "Build", icon: "code", who: "XOneCode on XOne", lead: "XOneCode generates the tailor-made application.", text: "On the XOne low-code platform: screens, flows, rules and integrations.", decide: "Reviews and approves what has been built before it goes live." },
      { n: "03", tag: "Operate", icon: "signal", who: "XOne, NappAI and NappAI Voice", lead: "The application works in the field, even without coverage.", text: "NappAI agents cross-check data and act (assign, notify, escalate) and NappAI Voice takes and makes calls.", decide: "Supervises exceptions and approves sensitive actions." },
      { n: "04", tag: "Improve", icon: "refresh", who: "NappAI and XOneCode", lead: "What happens in the operation flows back to the agents.", text: "They detect where the process gets stuck and propose changes to the solution.", decide: "Decides which changes are applied." },
    ] as { n: string; tag: string; icon: IconName; who: string; lead: string; text: string; decide: string }[],
    whoLabel: "Who acts", decideLabel: "What the person decides",
  },
  pieces: {
    eyebrow: "The four pieces", title: "NappAI Voice listens, NappAI thinks,", accent: "XOne executes and XOneCode builds and improves",
    items: [
      { title: "XOne", role: "Executes", icon: "layers", text: "The low-code mobility platform with more than 20 years in real operation: field apps that work without coverage and are integrated with the company's systems.", href: link("que-es-xone") },
      { title: "XOneCode", role: "Builds", icon: "code", text: "Agents that understand the business problem and code the tailor-made application in a short time, on XOne.", href: link("xonecode") },
      { title: "NappAI", role: "Decides and orchestrates", icon: "cpu", text: "Our own AI agent engine: it cross-checks data, applies rules, connects systems and acts.", href: link("nappai") },
      { title: "NappAI Voice", role: "Converses", icon: "headset", text: "Voice agents that take and make calls, understand what is agreed and turn it into actions.", href: link("nappai-voice") },
    ] as { title: string; role: string; icon: IconName; text: string; href: string }[],
  },
  loop: {
    eyebrow: "The closed loop", title: "From the conversation to the street,", accent: "and from the street to the conversation",
    subtitle: "What is agreed in a conversation is executed in the street, and what happens in the street goes back to the customer as a conversation.",
    items: [
      { tag: "From the conversation to the street", icon: "headset", text: "A customer calls to report a breakdown. The voice agent understands the problem, NappAI checks the ERP and proposes a technician and a time slot, and the order appears on the technician's phone with all the information." },
      { tag: "From the street to the conversation", icon: "map", text: "A delivery driver finds nobody at home and taps a button in the app. The voice agent calls the recipient, agrees an alternative and the route is updated." },
    ] as { tag: string; icon: IconName; text: string }[],
    note: "An event in the street triggering a conversation is only possible if the same platform is on the worker's phone. That is XOne's advantage over companies that only build bots.",
  },
  solutions: {
    eyebrow: "Two solutions", title: "Two solutions,", accent: "one platform",
    subtitle: "What already works keeps working, and now it can add agents. Each customer moves at the pace they want, starting with a specific use case.",
    items: [
      { tag: "Main message", title: "Agent Self-Driven Development Platform (ASDD)", text: "The new way of working with agents.", href: link("asdd"), cta: "Discover ASDD" },
      { tag: "The foundation", title: "XOne EMM", text: "The enterprise mobility solution XOne has been deploying for years, which brings together all the previous products. It is the foundation ASDD rests on.", href: link("xone-emm"), cta: "Discover XOne EMM" },
    ],
  },
  usos: { eyebrow: "Use cases", title: "Eleven solutions,", accent: "from the call to the street", cta: "See the use case", all: "See all use cases", allHref: link("casos-de-uso-home") },
  why: {
    eyebrow: "Why XOne", title: "What", accent: "sets us apart",
    items: [
      { lead: "More than 20 years in field operations.", text: "XOne's AI comes from knowing how a technician, a delivery driver or an inspector works. Certified staff and customers in production." },
      { lead: "Our own AI.", text: "XOneCode, NappAI and NappAI Voice are developed in-house within the XOne ecosystem, not a layer on top of someone else's service." },
      { lead: "The full cycle on one platform.", text: "Conversation, decision, field execution and software evolution, without gluing together tools from different vendors." },
      { lead: "Proven foundation.", text: "Apps that work without coverage, with photo, signature and geolocation, integrated with the company's systems." },
      { lead: "The person decides.", text: "Human approvals, rules the agents cannot skip, hand-off to a person when needed and a log of what each agent does." },
    ],
  },
  // [PENDING] event date and link; remove after the event
  event: { badge: "Coming soon", title: "We present XOne's new chapter in Valencia.", cta: { label: "Book your place", href: link("contacto") } },
  // FAQ: translation of the ES answers (docs/vision-asdd.md)
  faq: {
    eyebrow: "Before you start", title: "Frequently asked", accent: "questions", subtitle: "The essentials about ASDD and XOne.",
    items: [
      { q: "What is ASDD?", a: "Agent Self-Driven Development Platform: XOne's products working as a single system, in which AI agents move the work forward on their own, within the rules the company sets." },
      { q: "Is it a chatbot?", a: "No. ASDD is not a chatbot, not a generic AI tool, not \"programming without programming\" and not an operation without people. It is an enterprise platform where AI speeds things up and executes, and people lead." },
      { q: "Who makes the decisions?", a: "People decide. Human approvals, rules the agents cannot bypass, handover to a person and a log of what each agent does." },
      { q: "I already use XOne. What changes?", a: "What already works keeps working, and now it can add agents. XOne EMM brings together all the previous products and is the foundation ASDD builds on." },
      { q: "Does it work without coverage?", a: "Yes. Field apps work without coverage, with photo, signature and geolocation, integrated with the company's systems." },
      { q: "Does it connect to my systems?", a: "Yes. With the ERP, the CRM and the systems each customer already uses." },
      { q: "Which companies is it for?", a: "Companies with field operations: technical service and maintenance; distribution, delivery and logistics; energy, construction and industry; assistance, insurance and property management." },
    ],
  },
};
