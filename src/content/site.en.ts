// REAL content (English) taken from https://xone.es/en/ (24-Nov-2026). Same shape as site.es.ts.
// Texts that do not exist on xone.es/en (menu descriptions, FAQ, testimonials, labels) are translated from site.es.ts — see CONTENT_MAP.md.
import type { IconName } from "../components/ui";
import { alternate, link } from "../i18n";

const X = "https://xone.es";

export const announcement = { text: "XOne achieves ISO/IEC 27001 certification", cta: "Read the news", href: link("certificacion-iso-27001") };

export const nav = {
  menus: [
    { label: "Platform", caseIndex: 1, items: [
      { label: "XOne platform", desc: "What XOne is and how it works", href: link("que-es-xone"), icon: "layers" },
      { label: "Marketecture", desc: "The whole platform at a glance", href: link("marketectura"), icon: "grid" },
      { label: "Development tools", desc: "How XOne supports developers", href: link("como-asiste-xone-desarolladores"), icon: "code" },
      { label: "Services and support", desc: "Training, consulting, hosting and support", href: link("servicios-y-soporte"), icon: "headset" },
      { label: "XOne features", desc: "What makes us unique", href: link("que-nos-hace-unicos-xone"), icon: "badge" },
      { label: "XOne mobility", desc: "How we solve enterprise mobility", href: link("como-resolvemos-la-movilidad"), icon: "phone" },
      { label: "DevOps", desc: "Continuous integration and delivery", href: link("devops"), icon: "loop" },
    ] },
    { label: "Products", caseIndex: 4, items: [
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
    { label: "Solutions", caseIndex: 2, items: [
      { label: "XOne solutions", desc: "Apps for every business process", href: link("soluciones-xone"), icon: "briefcase" },
      { label: "Sectors", desc: "The industries we work in", href: link("soluciones-xone#sectores"), icon: "map" },
      { label: "Use cases", desc: "What you can mobilize with XOne", href: link("casos-de-uso-home"), icon: "doc" },
      { label: "Success stories", desc: "Real projects from our customers", href: link("casos-de-exito-xone"), icon: "award" },
      { label: "Kit Digital", desc: "Digitalize your company with Kit Digital", href: link("kit-digital"), icon: "euro" },
    ] },
    { label: "Community", caseIndex: 6, items: [
      { label: "Customers", desc: "Companies that trust XOne", href: link("nuestros-clientes-xone"), icon: "users" },
      { label: "Strategic partners", desc: "Our technology alliances", href: link("socios-estrategicos-xone"), icon: "handshake" },
      { label: "Become a partner", desc: "Join the XOne partner network", href: link("hazte-partner-xone"), icon: "user-plus" },
      { label: "Partner program", desc: "How the program works", href: link("programadepartners"), icon: "badge" },
    ] },
    { label: "Resources", caseIndex: 9, items: [
      { label: "News", desc: "What's new at XOne", href: link("noticias"), icon: "news" },
      { label: "XOne documentation", desc: "Guides and technical documentation", href: link("documentacionxone"), icon: "book" },
      { label: "Awards and recognition", desc: "Gartner and other recognitions", href: link("premios-y-reconocimientos"), icon: "award" },
      { label: "R&D&I collaborations", desc: "Research and innovation", href: link("colaboraciones-id"), icon: "flask" },
    ] },
    { label: "Company", caseIndex: 0, items: [
      { label: "About us", desc: "More than 20 years building enterprise apps", href: link("sobre-nosotros"), icon: "building" },
      { label: "Certifications", desc: "ENS and ISO/IEC 27001", href: link("certificaciones"), icon: "shield" },
      { label: "European funding", desc: "Projects co-funded by the EU", href: link("financiacion-europea"), icon: "euro" },
    ] },
  ],
  featured: { overline: "XOneCode · AI", title: "Your coding agent specialized in XOne.", href: link("xonecode") },
  stories: { label: "Success stories", desc: "Real projects from our customers", href: link("casos-de-exito-xone") },
  wiki: { label: "Wiki", href: "https://xoneisp.com/xonedocs/" },
  secondary: { label: "ES", href: alternate("es"), lang: "es", title: "Versión en español" },
  cta: { label: "Contact", href: link("contacto") },
};

export const hero = {
  eyebrow: "Multiexperience development platform",
  title: "Speed up the development of",
  accent: "enterprise applications",
  subtitle: "Build cross-platform mobile apps in a short time from a single codebase, truly “real native”: secure, integrated and always operational.",
  primary: { label: "Discover the platform", href: link("que-es-xone") },
  secondary: { label: "Talk to us", href: link("contacto") },
  platforms: ["Android", "iOS", "Windows", "Web / PWA"],
  sectors: ["technical service", "sales force", "energy and utilities", "logistics", "healthcare", "public administration", "insurance", "industry"],
  proof: [
    { value: "70 %", label: "less development time" },
    { value: "ENS · ISO 27001", label: "certified security" },
  ],
};

export const clients = [
  ["Iberdrola", "iberdrola.png"], ["Telefónica", "telefonica.png"], ["Línea Directa", "linea-directa.png"], ["Navantia", "navantia.png"],
  ["Sacyr", "sacyr.png"], ["Calidad Pascual", "calidad-pascual.png"], ["Cofares", "cofares-recortado.png"], ["Alivia", "alivia.svg"],
  ["Magaiz", "magaiz-recortado.png"], ["Grupo Ruiz", "grupo-ruiz.png"], ["Siemens Gamesa", "siemens-gamesa.png"], ["Loomis", "loomis.png"],
  ["JCarrion", "jcarrion.png"], ["Orenes", "orenes.png"],
].map(([name, file]) => ({ name, src: `${X}/media/clientes/${file}` }));

export const pillars: { n: string; tag: string; icon: IconName; lead: string; text: string }[] = [
  { n: "01", tag: "Cross-platform", icon: "layers", lead: "One codebase, every platform.", text: "Write once and run on Android, iOS, Windows and the web, truly native." },
  { n: "02", tag: "Security modules", icon: "shield", lead: "End-to-end security.", text: "Security built into the whole process and protected data transfer." },
  { n: "03", tag: "Communications", icon: "signal", lead: "Always operational.", text: "Smart communications: apps keep working even without coverage." },
  { n: "04", tag: "Integration bus", icon: "plug", lead: "Integrates with everything.", text: "Connect to your existing systems without changing them, thanks to the integration bus." },
];

export const stats = [
  { value: "70 %", label: "less time from the start of development to a working app" },
  { value: "1", label: "codebase for Android, iOS, Windows and the web" },
  { value: "+20", label: "years building enterprise apps" },
  { value: "2", label: "security certifications: ENS and ISO/IEC 27001" },
];

export const ai = {
  eyebrow: "XOne + AI",
  title: "AI at",
  accent: "every step",
  after: "of your projects",
  subtitle: "Less time on repetitive work and more on what adds value: faster projects, with higher quality and optimized AI usage.",
  steps: [
    { title: "Design", text: "From idea to screen in far less time, with designs generated and adapted by AI." },
    { title: "Analysis", text: "Clear requirements and tasks from day one, organized in Autopilot." },
    { title: "Development", text: "Agents that code on your XOne project, test it and deploy it." },
    { title: "Documentation", text: "Always up to date, generated alongside the code." },
    { title: "Support", text: "Faster, more accurate answers for your users." },
  ],
  xonecode: {
    title: "XOneCode",
    text: "Your coding agent specialized in XOne, integrated with the best AI models on the market. You decide what to build; XOneCode takes care of how.",
    href: link("xonecode"),
    tabs: [
      { id: "tareas", label: "Task system", text: "Send tasks and the agents code them on their own. With Autopilot, our project manager built into the development environment." },
      { id: "mcp", label: "MCP and skills", text: "Code in XOne from the AI assistant you prefer, with skills that make it an expert." },
      { id: "controles", label: "New controls", text: "XOne frameworks include new controls for apps with more modern designs." },
    ],
    autonomous: { lead: "You rest, XOneCode keeps producing.", text: "In autonomous mode, the agents code your tasks, test them and leave them ready for you to review when you are back." },
    screenshot: { src: `${X}/media/xonecode/xonecode-escritorio.webp`, alt: "XOneCode desktop: projects, AI agent tasks in progress and connected devices" },
  },
};

export const products: { title: string; icon: IconName; text: string; href: string }[] = [
  { title: "MXDP platform", icon: "layers", text: "A multiexperience development platform that applies artificial intelligence and new ways of interacting with mobile apps.", href: link("nueva-mxdp") },
  { title: "XOneCloud", icon: "cloud", text: "A multimodal approach to native mobile apps, with rapid development tools and mobile back-end services.", href: link("herramientas-rapidas-de-desarrollo-xonecloud") },
  { title: "Security", icon: "shield", text: "Secure access perimeters for networks, applications, devices and data, established, monitored and maintained.", href: link("ciberseguridad") },
  { title: "Communications and replication", icon: "refresh", text: "A machine learning-based system: apps work independently of the availability of communication links.", href: link("replica-de-datos-y-documentacion-xone") },
  { title: "Integration bus", icon: "plug", text: "Connects with the customer's system and mobilizes virtually any system with minimal resources.", href: link("bus-integracion-esb-enterprise-service-bus") },
  { title: "XOne EMM", icon: "phone", text: "Enterprise mobility management to enable the use of employees' mobile devices in the company.", href: link("gestion-de-movilidad-empresarial-xone") },
  { title: "AI monitoring", icon: "signal", text: "XOne Monitor checks server functions and uses machine learning to predict service outages and failures.", href: link("sistema-de-monitorizacion-con-ia") },
  { title: "XOneAssist", icon: "chat", text: "A virtual tutor that supports developers, boosts their productivity and reduces time and cost.", href: link("xoneassist") },
  { title: "Updates", icon: "device", text: "XOne Live receives requests from devices, validates them and manages the delivery of updates from the server.", href: link("sistema-de-actualizaciones-xone") },
];

export const cases = [
  ["MiniTS", "Carsharing service"], ["Iberdrola", "Technical assistance at substations"], ["Gamesa", "Field force operations management"],
  ["Sacyr", "Regulated parking"], ["Navantia", "Preventive and corrective maintenance"], ["Orenes", "Gaming machine maintenance"],
  ["Loomis", "Asset and goods management"], ["Istobal", "Car wash station maintenance"], ["JCarrion", "Freight transport management"],
  ["Cofares", "Mobile computer vision and augmented reality"], ["Ingeteam", "Occupational risk prevention app"], ["Tubasa", "City bus fare payment"],
].map(([name, sector]) => ({ name, sector, href: link("casos-de-exito-xone") }));

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

export const services = [
  { title: "Training and upskilling", lead: "Tailored to your needs.", text: "Custom training for users and developers, with a very low learning curve." },
  { title: "Consulting", lead: "We add value to your business.", text: "Support from the origin of the idea through to fine-tuning and follow-up." },
  { title: "Hosting", lead: "You choose the hosting.", text: "On-premises, cloud, VPS, shared, dedicated or elastic: we help you decide." },
  { title: "App design", lead: "You tell us what you need.", text: "Easy-to-use, intuitive apps, always based on the customer's corporate identity." },
  { title: "Maintenance", lead: "Corrective and evolutionary.", text: "Swift response to errors, improvements, updates and new versions." },
  { title: "Support", lead: "Multilingual service.", text: "Specialized call center, XOne Wiki, customer website and advanced incident management." },
];

export const faq = [
  { q: "What is XOne?", a: "A multiexperience development platform for building corporate mobility apps on every device and operating system on the market, quickly, securely and effectively." },
  { q: "Which platforms do the apps run on?", a: "Android, iOS, Windows and web/PWA. You write the code once and run it on all of them, truly native." },
  { q: "Do the apps work without coverage?", a: "Yes. XOne's machine learning-based communications system keeps apps operational even when there is no communication link." },
  { q: "Can I integrate it with my current systems?", a: "Yes. The XOne integration bus connects your app with any external system without changing your current system." },
  { q: "Which security certifications does XOne hold?", a: "The Spanish National Security Framework (ENS) in the medium category and ISO/IEC 27001:2022, both issued by an accredited certification body." },
  { q: "How does AI help in my projects?", a: "XOne builds AI into design, analysis, development, documentation and support. XOneCode, its coding agent, codes, tests and finishes the tasks you send it." },
];

export const contact = {
  title: "Shall we talk about your",
  accent: "project",
  subtitle: "Tell us what you need to mobilize and we will show you how to do it with XOne.",
  cta: { label: "Contact XOne", href: link("contacto") },
  phone: "+34 924 207 371",
  email: "comercial@xone.es",
  address: ["PCTEX Building", "Avenida de Elvas, s/n", "06006 Badajoz, Spain"],
  cities: ["Badajoz", "Madrid", "Guadalajara", "Valencia", "Barcelona", "Bilbao", "Santander", "Jerez de la Frontera"],
};

export const footer = {
  tagline: "Multiexperience development platform for enterprise apps.",
  columns: [
    { title: "Platform", links: [["XOne platform", "que-es-xone"], ["Marketecture", "marketectura"], ["Development tools", "como-asiste-xone-desarolladores"], ["Services and support", "servicios-y-soporte"], ["XOne features", "que-nos-hace-unicos-xone"], ["XOne mobility", "como-resolvemos-la-movilidad"]] },
    { title: "Solutions", links: [["XOne solutions", "soluciones-xone"], ["Sectors", "soluciones-xone#sectores"], ["Use cases", "casos-de-uso-home"], ["Success stories", "casos-de-exito-xone"], ["Kit Digital", "kit-digital"]] },
    { title: "Community", links: [["Customers", "nuestros-clientes-xone"], ["Strategic partners", "socios-estrategicos-xone"], ["Become a partner", "hazte-partner-xone"], ["Partner program", "programadepartners"]] },
    { title: "Company", links: [["About us", "sobre-nosotros"], ["Certifications", "certificaciones"], ["Awards", "premios-y-reconocimientos"], ["European funding", "financiacion-europea"], ["News", "noticias"]] },
  ].map((c) => ({ title: c.title, links: c.links.map(([label, slug]) => ({ label, href: link(slug) })) })),
  legal: { company: "© 2026 Computer Global Software, S.L.", privacy: { label: "Legal notice and privacy", href: link("uso-de-cookies-y-politica-de-privacidad") } },
};
