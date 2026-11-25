// Lote 5 · Menú «Recursos» (el listado de noticias y cada noticia tienen plantilla propia: src/pages/News.tsx).
// Textos reales de xone.es/{slug}/ y /en/ (25-nov-2026). Titulares de sección propios: ver CONTENT_MAP.md › «Páginas · lote 5».
import type { Page } from "./types";

const M = (f: string) => `https://xone.es/media/${f}`;
const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

type Deck = { icon: import("../../components/ui/Icon").IconName; es: [string, string, string]; en: [string, string, string]; file?: string; slug?: string };
/** Presentaciones: [título, frase, texto del enlace]. */
const DECKS: Deck[] = [
  { icon: "layers", file: "folletoXOne.pdf", es: ["XOne", "Conoce todas las ventajas de la plataforma.", "Ver la presentación de XOne (PDF)"], en: ["XOne", "Discover all the advantages of the platform.", "View the XOne presentation (PDF)"] },
  { icon: "sparkle", file: "XOne-b.pdf", es: ["Multiexperiencia", "La primera plataforma multiexperiencia del mercado.", "Ver la presentación de multiexperiencia (PDF)"], en: ["Multiexperience", "The first multiexperience platform on the market.", "View the multiexperience presentation (PDF)"] },
  { icon: "briefcase", file: "XOneSoluciones.pdf", es: ["Soluciones XOne", "Soluciones adaptadas a cada tipo de negocio y sector.", "Ver la presentación de soluciones (PDF)"], en: ["XOne solutions", "Solutions tailored to each type of business and sector.", "View the solutions presentation (PDF)"] },
  { icon: "award", file: "XONEPORTFOLIO.pdf", es: ["Portfolio XOne", "El Portfolio XOne presenta la calidad de nuestra plataforma.", "Ver el portfolio (PDF)"], en: ["XOne portfolio", "The XOne Portfolio showcases the quality of our platform.", "View the portfolio (PDF)"] },
  { icon: "grid", file: "XONE.pdf", es: ["Plataforma de desarrollo", "Conoce los aspectos globales de la plataforma XOne.", "Ver la presentación de la plataforma (PDF)"], en: ["Development platform", "Learn about the overall aspects of the XOne platform.", "View the platform presentation (PDF)"] },
  { icon: "device", file: "XOneEMM.pdf", es: ["XOne EMM", "Conoce el gestor de movilidad empresarial más completo del mercado.", "Ver la presentación de XOne EMM (PDF)"], en: ["XOne EMM", "Discover the most complete enterprise mobility manager on the market.", "View the XOne EMM presentation (PDF)"] },
  { icon: "cpu", file: "XOnecapacidadestecnicas.pdf", es: ["Capacidades técnicas", "Herramientas, módulos y procesos que simplifican la gestión operativa diaria.", "Ver la presentación de capacidades técnicas (PDF)"], en: ["Technical capabilities", "Tools, modules and processes that simplify day-to-day operational management.", "View the technical capabilities presentation (PDF)"] },
  { icon: "code", file: "XOneProgramaci_n.pdf", es: ["Programación XOne", "Acelera la entrega de apps con las herramientas XOne.", "Ver la presentación de programación (PDF)"], en: ["XOne programming", "Speed up app delivery with XOne tools.", "View the programming presentation (PDF)"] },
  { icon: "shield", file: "XOneSeguridad-2.pdf", es: ["Seguridad", "XOne ofrece seguridad inteligente de extremo a extremo.", "Ver la presentación de seguridad (PDF)"], en: ["Security", "XOne offers intelligent end-to-end security.", "View the security presentation (PDF)"] },
  { icon: "headset", slug: "gsat", es: ["SAT Energía y Utilities: servicio técnico", "¿Necesitas gestionar con éxito la operativa de los servicios de campo? XOne tiene la solución que necesitas.", "Ver XOne SAT para servicio técnico"], en: ["Field service for energy and utilities: technical service", "Do you need to successfully manage your field service operations? XOne has the solution you need.", "View XOne SAT for technical service"] },
  { icon: "activity", slug: "isat", es: ["SAT Energía y Utilities: gestión de averías", "Conoce nuestras soluciones de captura de datos en campo abierto, en un sector en el que somos líderes.", "Ver XOne SAT para gestión de averías"], en: ["Field service for energy and utilities: fault management", "Discover our solutions for capturing data out in the field, a sector in which we are leaders.", "View XOne SAT for fault management"] },
  { icon: "chat", file: "XONEASSISTBRIEFINGes.pdf", es: ["XOneAssist", "Asistente virtual basado en programación aumentada y machine learning.", "Ver el insight de XOneAssist (PDF)"], en: ["XOneAssist", "Virtual assistant based on augmented programming and machine learning.", "View the XOneAssist insight (PDF)"] },
  { icon: "user-plus", file: "2XOneAseguradoras.pdf", es: ["Aseguradoras", "Revolucionamos la forma de operar de los peritos y agentes de campo.", "Ver la presentación para aseguradoras (PDF)"], en: ["Insurance companies", "We are revolutionizing the way loss adjusters and field agents work.", "View the presentation for insurance companies (PDF)"] },
  { icon: "pin", file: "MAPVIEWXONE.pdf", es: ["MapView", "Funcionalidad de información geolocalizada en tiempo real.", "Ver la presentación de MapView (PDF)"], en: ["MapView", "Real-time geolocated information feature.", "View the MapView presentation (PDF)"] },
  { icon: "map", file: "XOneGestordeRutas.pdf", es: ["Optimización de rutas", "Módulo para la gestión y planificación de rutas óptimas.", "Ver la presentación de optimización de rutas (PDF)"], en: ["Route optimization", "Module for managing and planning optimal routes.", "View the route optimization presentation (PDF)"] },
  { icon: "download", file: "XOneLogistica.pdf", es: ["Logística", "Conoce funcionalidades tan demandadas como la última milla de XOne.", "Ver la presentación de logística (PDF)"], en: ["Logistics", "Discover highly demanded features such as XOne's last mile.", "View the logistics presentation (PDF)"] },
  { icon: "users", file: "XOneFuerzadeVentas.pdf", es: ["Fuerza de ventas", "Módulo para gestionar de forma óptima toda la red comercial de tu empresa.", "Ver la presentación de fuerza de ventas (PDF)"], en: ["Sales force", "Module for optimally managing your company's entire sales network.", "View the sales force presentation (PDF)"] },
  { icon: "signal", file: "XOne.utilities.pdf", es: ["Energía y utilities", "Un cambio disruptivo para el sector energético, en el que somos líderes.", "Ver la presentación de energía y utilities (PDF)"], en: ["Energy and utilities", "A disruptive change for the energy sector, in which we are leaders.", "View the energy and utilities presentation (PDF)"] },
];
const decks = (lang: "es" | "en") => DECKS.map((d) => ({ label: d[lang][0], icon: d.icon, text: d[lang][1], link: d.file ? { label: d[lang][2], href: M(d.file) } : { label: d[lang][2], slug: d.slug } }));

const VIDEOS: { id: string; es: string; en: string; long?: string }[] = [
  { id: "HEXqdvZ6N_o", es: "Cómo hacer una app con XOne (I)", en: "How to build an app with XOne (I)" },
  { id: "YSv2Mml8WMs", es: "Cómo hacer una app con XOne (II)", en: "How to build an app with XOne (II)" },
  { id: "bcAwrumeTMs", es: "Tendencias", en: "Trends" },
  { id: "6wqNw-PNVRk", es: "XOne de un vistazo", en: "XOne at a glance" },
  { id: "5FjnG3r0oSE", es: "Gartner MQ 2020", en: "Gartner MQ 2020" },
  { id: "BxoDYlSgORA", es: "Get Started XOne", en: "Get Started XOne" },
];
const CHANNEL = "https://www.youtube.com/channel/UCTtjZK5AYJo3E3hRIu-4z2Q/videos";
const videos = (lang: "es" | "en") => [
  ...VIDEOS.map((v, i) => ({ label: lang === "es" ? `Vídeo ${i + 1}` : `Video ${i + 1}`, icon: "external" as const, text: v[lang], link: { label: lang === "es" ? "Ver en YouTube" : "Watch on YouTube", href: YT(v.id) } })),
  { label: "YouTube", icon: "external" as const, text: lang === "es" ? "Más vídeos y tutoriales en el canal de XOne." : "More videos and tutorials on the XOne channel.", link: { label: lang === "es" ? "Canal de XOne en YouTube" : "XOne YouTube channel", href: CHANNEL } },
];

export const recursos: Record<string, Page> = {
  /* ------------------------------------------------------------------ */
  documentacionxone: {
    es: {
      group: 4,
      seo: { title: "Presentaciones y vídeos de XOne | XOne", description: "Echa un vistazo a nuestras presentaciones sobre soluciones, programación, funcionalidades, seguridad y capacidades técnicas de la plataforma XOne." },
      hero: { title: "Presentaciones y", accent: "vídeos de XOne", lead: "Echa un vistazo a nuestras presentaciones sobre soluciones, programación, funcionalidades, seguridad y capacidades técnicas de la plataforma XOne.", labels: ["PDF", "Vídeos", "Tutoriales", "Wiki"], secondary: { label: "Abrir la XOne Wiki", href: "https://xoneisp.com/xonedocs/" } },
      blocks: [
        { type: "intro", lead: "XOne te ayuda a", accent: "alcanzar tus objetivos.", text: ["Con nuestras presentaciones podrás conocer más a fondo la plataforma: nuestras soluciones, todo lo relativo a la programación XOne, funcionalidades que te sorprenderán, los módulos de seguridad que hacen de XOne una de las plataformas más fiables y seguras, sus capacidades técnicas y la operativa en diversos sectores.", "Y comprueba por qué somos líderes. ¡No te vayas sin conocer XOneAssist, nuestro asistente virtual basado en programación aumentada y aprendizaje continuo!"], link: { label: "Funcionalidades de XOne", slug: "requisitos-funcionalidades-xone" } },
        { type: "cells", index: "Descargas", eyebrow: "Presentaciones", title: "Toda la plataforma,", accent: "en documentos", cols: 3, items: decks("es") },
        { type: "cells", index: "Vídeos", eyebrow: "Tutoriales", title: "De la idea al proyecto,", accent: "paso a paso", cols: 3, subtitle: "Te explicamos paso a paso cómo puedes convertir tu idea en proyecto, de forma rápida y fácil.", items: videos("es") },
      ],
    },
    en: {
      group: 4,
      seo: { title: "XOne presentations and videos | XOne", description: "Take a look at our presentations on the solutions, programming, features, security and technical capabilities of the XOne platform." },
      hero: { title: "XOne presentations", accent: "and videos", lead: "Take a look at our presentations on the solutions, programming, features, security and technical capabilities of the XOne platform.", labels: ["PDF", "Videos", "Tutorials", "Wiki"], secondary: { label: "Open the XOne Wiki", href: "https://xoneisp.com/xonedocs/" } },
      blocks: [
        { type: "intro", lead: "XOne helps you", accent: "achieve your goals.", text: ["Our presentations will help you get to know the platform in greater depth: our solutions, everything related to XOne programming, features that will surprise you, the security modules that make XOne one of the most reliable and secure platforms, its technical capabilities and its operations in various sectors.", "And see why we are leaders. Don't leave without getting to know XOneAssist, our virtual assistant based on augmented programming and continuous learning!"], link: { label: "XOne features", slug: "requisitos-funcionalidades-xone" } },
        { type: "cells", index: "Downloads", eyebrow: "Presentations", title: "The whole platform,", accent: "in documents", cols: 3, items: decks("en") },
        { type: "cells", index: "Videos", eyebrow: "Tutorials", title: "From idea to project,", accent: "step by step", cols: 3, subtitle: "We explain step by step how you can turn your idea into a project, quickly and easily.", items: videos("en") },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  "premios-y-reconocimientos": {
    es: {
      group: 4,
      seo: { title: "Premios y reconocimientos | XOne", description: "La constante evolución de XOne ha permitido incorporar nuevas herramientas, servicios y tecnologías que la han hecho una de las plataformas mejor valoradas." },
      hero: { title: "Premios y", accent: "reconocimientos", lead: "La constante evolución de XOne ha permitido incorporar nuevas herramientas, servicios y tecnologías que la han hecho una de las plataformas mejor valoradas.", labels: ["Gartner", "Movilforum", "KPMG", "AEXIT"], secondary: { label: "Ver noticias", slug: "noticias" } },
      blocks: [
        { type: "intro", visual: "platforms", lead: "La plataforma más utilizada y", accent: "avalada por los expertos.", text: ["La calidad y fiabilidad de nuestras soluciones.", "La constante evolución de XOne ha permitido adaptar a lo largo de más de 20 años nuevas herramientas, desarrollos, servicios y tecnologías que han hecho posible que sea una de las plataformas mejor valoradas del mundo."] },
        {
          type: "rows", index: "Palmarés", eyebrow: "Premios a nuestras soluciones", title: "Más de una década", accent: "de reconocimientos",
          items: [
            { title: "Gartner", text: ["Los análisis de la consultora Gartner son una referencia internacional en el ecosistema tecnológico."], list: ["Cuadrante Mágico de Gartner de MXDP, 2020", "Reconocimiento mundial como uno de los mejores proveedores de desarrollos low-code, 2020", "Cuadrante Mágico de Gartner de MXDP, 2021"], link: { label: "XOne en el Cuadrante Mágico 2021", slug: "xone-en-el-top-ten-de-soluciones-multiexperiencia-otra-vez" } },
            { title: "Movilforum de Telefónica", text: ["Dos años consecutivos con el mejor caso de éxito del programa Movilforum de Telefónica."], list: ["Mejor caso de éxito 2011, con la app para Grupo Orenes", "Mejor caso de éxito 2012, con la app para Línea Directa Aseguradora"] },
            { title: "Premios empresariales", text: ["Reconocimientos a las buenas prácticas, la innovación y la visión de la movilidad."], list: ["Premio El Confidencial KPMG a las Mejores Prácticas Empresariales", "Premio Sacyr a la Visión Innovadora de la movilidad", "Premio a la Iniciativa Empresarial más innovadora de Extremadura, otorgado por AEXIT (Asociación Extremeña de Ingenieros de Telecomunicación)"] },
          ],
        },
      ],
    },
    en: {
      group: 4,
      seo: { title: "Awards and recognition | XOne", description: "XOne's constant evolution has brought in new tools, services and technologies that have made it one of the most highly rated platforms." },
      hero: { title: "Awards and", accent: "recognition", lead: "XOne's constant evolution has brought in new tools, services and technologies that have made it one of the most highly rated platforms.", labels: ["Gartner", "Movilforum", "KPMG", "AEXIT"], secondary: { label: "See news", slug: "noticias" } },
      blocks: [
        { type: "intro", visual: "platforms", lead: "The most widely used platform,", accent: "endorsed by the experts.", text: ["The quality and reliability of our solutions.", "Over more than 20 years, XOne's constant evolution has allowed it to adopt new tools, developments, services and technologies that have made it one of the most highly rated platforms in the world."] },
        {
          type: "rows", index: "Track record", eyebrow: "Awards for our solutions", title: "More than a decade", accent: "of recognition",
          items: [
            { title: "Gartner", text: ["Gartner's analyses are an international benchmark in the technology ecosystem."], list: ["Gartner Magic Quadrant for MXDP, 2020", "Worldwide recognition as one of the best low-code development providers, 2020", "Gartner Magic Quadrant for MXDP, 2021"], link: { label: "XOne in the 2021 Magic Quadrant", slug: "xone-en-el-top-ten-de-soluciones-multiexperiencia-otra-vez" } },
            { title: "Telefónica Movilforum", text: ["Two years in a row with the best success story in Telefónica's Movilforum program."], list: ["Best success story 2011, with the app for Grupo Orenes", "Best success story 2012, with the app for Línea Directa Aseguradora"] },
            { title: "Business awards", text: ["Recognition for good practices, innovation and a vision of mobility."], list: ["El Confidencial KPMG Award for Best Business Practices", "Sacyr Award for Innovative Vision in mobility", "Award for the most innovative Business Initiative in Extremadura, granted by AEXIT (the Extremadura Association of Telecommunication Engineers)"] },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  "colaboraciones-id": {
    es: {
      group: 4,
      seo: { title: "Colaboraciones I+D+i | XOne", description: "Proyecto MAS4WIN: investigación de las condiciones de operación y vida útil en la energía eólica mediante un sistema predictivo basado en digitalización." },
      hero: { title: "Colaboraciones", accent: "I+D+i", lead: "Proyecto MAS4WIN: investigación de las condiciones de operación y vida útil en la energía eólica mediante un sistema predictivo basado en digitalización.", labels: ["MAS4WIN", "Ingeteam", "FEDER", "Eólica"], secondary: { label: "Ver el documento del proyecto (PDF)", href: M("Publicidad-WEB_v1.pdf") } },
      blocks: [
        {
          type: "rows", index: "Proyectos", eyebrow: "Investigación aplicada", title: "Innovación que nace", accent: "de colaborar",
          items: [
            { title: "Proyecto MAS4WIN", visual: "monitor", text: ["Investigación de las condiciones de operación y vida útil en el ámbito de la energía eólica, mediante un sistema predictivo basado en nuevas tecnologías de digitalización.", "Un proyecto de colaboración con Ingeteam, cofinanciado con fondos FEDER, para crear un nuevo concepto de mantenimiento: aumentar y estimar la vida útil de los equipos e investigar la realidad aumentada en los servicios avanzados de operación, mantenimiento y diagnóstico."], list: ["Ingeteam Power Technology", "KAAM Innovación y Tecnología", "Servicios y Desarrollos Grupo Vermon"], link: { label: "Ver el documento del proyecto MAS4WIN (PDF)", href: M("Publicidad-WEB_v1.pdf") } },
          ],
        },
      ],
      related: [
        { label: "Sistema predictivo MAS4WIN", desc: "La noticia del proyecto", slug: "mas4win", icon: "news" },
        { label: "Caso de éxito: Ingeteam", desc: "Prevención de riesgos laborales", slug: "casos-de-exito-xone/ingeteam", icon: "award" },
        { label: "Noticias", desc: "Novedades de XOne", slug: "noticias", icon: "news" },
      ],
    },
    en: {
      group: 4,
      seo: { title: "R&D&I collaborations | XOne", description: "MAS4WIN project: research into operating conditions and service life in wind energy using a predictive system based on digitalization." },
      hero: { title: "R&D&I", accent: "collaborations", lead: "MAS4WIN project: research into operating conditions and service life in wind energy using a predictive system based on digitalization.", labels: ["MAS4WIN", "Ingeteam", "ERDF", "Wind"], secondary: { label: "View the project document (PDF)", href: M("Publicidad-WEB_v1.pdf") } },
      blocks: [
        {
          type: "rows", index: "Projects", eyebrow: "Applied research", title: "Innovation born", accent: "from collaboration",
          items: [
            { title: "MAS4WIN project", visual: "monitor", text: ["Research into operating conditions and service life in the field of wind energy, using a predictive system based on new digitalization technologies.", "A collaborative project with Ingeteam, co-funded with ERDF funds, to create a new maintenance concept: extending and estimating equipment service life and researching augmented reality for advanced operation, maintenance and diagnostic services."], list: ["Ingeteam Power Technology", "KAAM Innovación y Tecnología", "Servicios y Desarrollos Grupo Vermon"], link: { label: "View the MAS4WIN project document (PDF)", href: M("Publicidad-WEB_v1.pdf") } },
          ],
        },
      ],
      related: [
        { label: "MAS4WIN predictive system", desc: "The project news", slug: "mas4win", icon: "news" },
        { label: "Success story: Ingeteam", desc: "Occupational risk prevention", slug: "casos-de-exito-xone/ingeteam", icon: "award" },
        { label: "News", desc: "XOne updates", slug: "noticias", icon: "news" },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  noticias: {
    es: {
      group: 4,
      seo: { title: "Noticias | XOne", description: "Novedades, eventos, reconocimientos y casos de éxito de XOne." },
      hero: { title: "Noticias", accent: "de XOne", lead: "Novedades, eventos, reconocimientos y casos de éxito de XOne.", labels: ["Eventos", "Gartner", "Clientes", "I+D+i"], secondary: { label: "Premios y reconocimientos", slug: "premios-y-reconocimientos" } },
      blocks: [{ type: "news", index: "Archivo", eyebrow: "Todas las noticias", title: "Más de siete años", accent: "contando XOne" }],
    },
    en: {
      group: 4,
      seo: { title: "News | XOne", description: "XOne news, events, recognition and success stories." },
      hero: { title: "XOne", accent: "news", lead: "XOne news, events, recognition and success stories.", labels: ["Events", "Gartner", "Customers", "R&D&I"], secondary: { label: "Awards and recognition", slug: "premios-y-reconocimientos" } },
      blocks: [{ type: "news", index: "Archive", eyebrow: "All the news", title: "More than seven years", accent: "of XOne stories" }],
    },
  },
};
