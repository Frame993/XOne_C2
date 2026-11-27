// Lote 4 · Menús «Comunidad» y «Empresa», contacto y textos legales. Textos reales de xone.es/{slug}/ y /en/ (24-nov-2026).
// Los textos legales y la política de seguridad son literales y viven en src/content/docs/*.md.
// Reescrituras propias (titulares de sección): ver CONTENT_MAP.md › «Páginas · lote 4».
import { G, type Page, type PageDoc } from "./types";
import legalEs from "../docs/legal.es.md?raw";
import legalEn from "../docs/legal.en.md?raw";
import policyEs from "../docs/politica-seguridad.es.md?raw";
import policyEn from "../docs/politica-seguridad.en.md?raw";

const M = (f: string) => `https://xone.es/media/${f}`;
const logos = (list: [string, string][]) => list.map(([name, file]) => ({ name, src: M(file) }));

const CLIENTS = logos([
  ["AUSSA", "AUSSA.jpg"], ["Café Templo", "cafe-templo.jpg"], ["Calidad Pascual", "calidad-pascual.jpg"], ["Cobra", "cobra-1.jpg"],
  ["Coren", "coren.jpg"], ["Cristian Lay", "Cristian-Lay.jpg"], ["Emplark", "emplark.jpg"], ["Eurogrúas", "eurogruas-2.jpg"],
  ["Iberdrola", "iberdrola-1.jpg"], ["Istobal", "istobal-1.jpg"], ["Maset", "maset.jpg"], ["Navantia", "navantia-1.jpg"],
  ["Orenes", "orenes-1.jpg"], ["Pavasal", "pavasal.jpg"], ["Sacyr", "sacyr.jpg"], ["Telefónica", "telefonica.jpg"],
  ["Vectalia", "Imagenlogovectalia.png"], ["Grupo Godó", "Imagenlogogrupogodo.png"], ["Orona", "Imagenlogoorona.png"], ["Cofares", "clientes/cofares.png"],
  ["FCC", "Imagenlogofcc.png"], ["Sidetours", "Imagenlogosidetours.png"], ["Alivia", "clientes/alivia.svg"], ["Magaiz", "clientes/magaiz.png"],
]);
const ALLIES = logos([
  ["Apple", "Apple.png"], ["BlackBerry", "Blackberry.png"], ["Brother", "Brother.png"], ["Google", "Google.png"],
  ["Indra", "Indra.png"], ["Intermec", "Intermec.png"], ["Itos", "Itos.png"], ["KPMG", "KPMG.png"],
  ["Microsoft", "Microsoft.png"], ["Telefónica", "Telefonica.png"], ["Zebra", "Zebra.png"],
]);
const PARTNERS = logos([
  ["Ayesa", "partners/ayesa.png"], ["Napptilus", "partners/napptilus.svg"], ["A5SYS", "A5SYS.png"], ["Alcazar Mobile", "AlcazarMobile.png"],
  ["Alten", "Alten.png"], ["Antinoo", "Antinoo.png"], ["Cobser", "cobser.jpg"], ["Fraile y Blanco", "FraileyBlanco.png"],
  ["GTK", "GTK.png"], ["JSV", "JSV.png"], ["Zebra", "ImagenZEBRA.png"], ["MSOFT", "MSOFT.png"],
  ["Visual Engineering", "VISUALENGINEERING.png"], ["Telefónica", "Telefonica.png"], ["Warnier", "Warnier.png"], ["Zocius", "ZOCIUS.png"],
]);

const partnerCrumb = { es: { label: "Hazte partner", slug: "hazte-partner-xone" }, en: { label: "Become a partner", slug: "hazte-partner-xone" } };

/** Opiniones (textos completos de xone.es/comentarios-clientes). */
const QUOTES = {
  es: [
    { company: "JSV", author: "Jordi Segura", headline: "«Trabajar con la herramienta XOne nos permite afrontar los proyectos de movilidad centrándonos tan solo en las necesidades funcionales del cliente».", quote: "«Los clientes valoran muy positivamente que su proveedor de soluciones de movilidad les garantice la inversión realizada, ya que si hay cualquier cambio de dispositivo o versión, es transparente para ellos, por muy compleja que sea la aplicación, cosa que ninguna otra plataforma permite realizar. Las múltiples soluciones que hemos desarrollado estos años con XOne, junto con una idónea metodología de trabajo, hacen que nuestros clientes nos vean como parte de su organización y no como un vendedor de apps»." },
    { company: "Pavapark", author: "Sergio Castellar", headline: "«XOne ha supuesto un importante cambio tecnológico en nuestros procesos».", quote: "«La implantación de la plataforma XOne ha mejorado nuestro sistema productivo en las distintas explotaciones de estacionamiento regulado y ha supuesto un cambio tecnológico en nuestro sistema de gestión de denuncias. En definitiva, consideramos que es imprescindible contar con una herramienta como XOne, que permite gestionar y administrar de forma remota y eficaz múltiples dispositivos»." },
    { company: "Multiasistencia", headline: "«Esperamos que la implantación de XOne en otros países tenga el mismo éxito que en España».", quote: "«Gracias a XOne se ha aumentado el 50% de los dispositivos y ya contamos con más de 600 dispositivos para gestionar y resolver las incidencias en los hogares de todos nuestros asegurados en España. En breve se va a exportar el modelo a Francia, con el fin de optimizar la gestión de tareas de peritaje llevadas a cabo por todos nuestros agentes en territorio galo, lo cual esperamos que tenga el mismo éxito que en España»." },
    { company: "Tervalis", headline: "«XOne ha resuelto satisfactoriamente la movilización de la gestión de nuestra fuerza de ventas en un tiempo récord».", quote: "«XOne ha resuelto satisfactoriamente la movilización de la gestión de nuestra fuerza de ventas en un tiempo récord (15 días desde la reunión inicial hasta la puesta en producción). La herramienta es tan útil que hemos decidido emplearla para nuevos desarrollos en un futuro próximo, con el propósito de optimizar y gestionar de forma personalizada los procesos de toda nuestra red comercial»." },
    { company: "Fujitsu", headline: "«Gracias a XOne hemos logrado disminuir el 85% del consumo de mensajes de nuestros operarios».", quote: "«Gracias a la herramienta XOne, hemos conseguido disminuir el 85% del consumo de mensajes de nuestros operarios, y ya se ha replicado el funcionamiento de la aplicación en Francia. El resultado obtenido gracias a la plataforma XOne ha sido una aplicación móvil que permite gestionar y optimizar la agenda de nuestros técnicos de mantenimiento de forma eficaz, así como informar al instante de las actuaciones llevadas a cabo»." },
  ],
  en: [
    { company: "JSV", author: "Jordi Segura", headline: "“Working with the XOne tool lets us tackle mobility projects by focusing solely on the customer's functional needs.”", quote: "“Customers greatly value having their mobility solutions provider safeguard the investment they have made, because any change of device or version is transparent to them, however complex the application may be, something no other platform makes possible. The many solutions we have developed over these years with XOne, together with a sound working methodology, mean that our customers see us as part of their organization rather than as an app vendor.”" },
    { company: "Pavapark", author: "Sergio Castellar", headline: "“XOne has brought a major technological change to our processes.”", quote: "“Implementing the XOne platform has improved our production system across our various regulated parking operations and has brought a technological change to our parking ticket management system. In short, we consider it essential to have a tool like XOne, which makes it possible to manage and administer multiple devices remotely and effectively.”" },
    { company: "Multiasistencia", headline: "“We hope that rolling out XOne in other countries will be as successful as it has been in Spain.”", quote: "“Thanks to XOne, the number of devices has increased by 50% and we now have more than 600 devices to manage and resolve incidents in the homes of all our policyholders in Spain. The model will soon be exported to France, in order to optimize the management of claims assessment tasks carried out by all our agents in French territory, which we hope will be as successful as it has been in Spain.”" },
    { company: "Tervalis", headline: "“XOne has successfully mobilized the management of our sales force in record time.”", quote: "“XOne has successfully mobilized the management of our sales force in record time (15 days from the initial meeting to going live). The tool is so useful that we have decided to use it for new developments in the near future, with the aim of optimizing and managing the processes of our entire sales network in a customized way.”" },
    { company: "Fujitsu", headline: "“Thanks to XOne, we have reduced our field technicians' message usage by 85%.”", quote: "“Thanks to the XOne tool, we have managed to reduce our field technicians' message usage by 85%, and the application's operation has already been replicated in France. The result achieved with the XOne platform has been a mobile application that makes it possible to effectively manage and optimize the schedule of our maintenance technicians, as well as to report instantly on the work carried out.”" },
  ],
};

/** «Hazte partner» y su formulario comparten estructura. */
function becomePartner(lang: "es" | "en", form: boolean): PageDoc {
  const es = lang === "es";
  const why = es
    ? (form
      ? ["Porque somos líderes del mercado", "Porque somos expertos en tecnologías de movilidad y desarrollos multiexperiencia", "Porque ofrecemos soluciones de calidad y alta productividad a todos los niveles", "Porque priorizamos las tecnologías móviles que tendrán un gran impacto en las organizaciones", "Porque nuestra tecnología es flexible y adaptable", "Porque revolucionamos el mercado"]
      : ["Por ser líderes del mercado", "Por ser expertos en movilidad y multiexperiencia", "Por ofrecer soluciones de calidad y alta productividad", "Porque XOne es flexible y adaptable", "Por revolucionar el mercado", "Por priorizar la movilidad, que tendrá un alto impacto en las empresas", "Por poner a disposición de nuestros Partners las mejores herramientas"])
    : (form
      ? ["Because we are market leaders", "Because we are experts in mobility technologies and multiexperience development", "Because we offer high-quality, high-productivity solutions at every level", "Because we prioritize the mobile technologies that will have a major impact on organizations", "Because our technology is flexible and adaptable", "Because we are revolutionizing the market"]
      : ["Because we are market leaders", "Because we are experts in mobility and multiexperience", "Because we offer high-quality, high-productivity solutions", "Because XOne is flexible and adaptable", "Because we are revolutionizing the market", "Because we prioritize mobility, which will have a major impact on companies", "Because we provide our Partners with the best tools"]);
  return {
    group: G.comunidad,
    ...(form ? { crumb: partnerCrumb[lang] } : {}),
    seo: form
      ? { title: es ? "Por qué hacerse partner de XOne | XOne" : "Why become an XOne partner | XOne", description: es ? "Somos líderes del mercado y expertos en tecnologías de movilidad y desarrollos multiexperiencia. Descubre por qué hacerte Partner de XOne." : "We are market leaders and experts in mobility technologies and multiexperience development. Find out why you should become an XOne Partner." }
      : { title: es ? "Hazte partner de XOne | XOne" : "Become an XOne partner | XOne", description: es ? "Si quieres formar parte de XOne, ofrecer tus servicios con condiciones que beneficien a todos y ganar visibilidad en tu canal de ventas, contacta con nosotros." : "If you want to join XOne, offer your services on terms that benefit everyone and gain visibility in your sales channel, get in touch with us." },
    hero: form
      ? { title: es ? "Por qué hacerse" : "Why become an", accent: es ? "partner de XOne" : "XOne partner", lead: es ? "Somos líderes del mercado y expertos en tecnologías de movilidad y desarrollos multiexperiencia. Descubre por qué hacerte Partner de XOne." : "We are market leaders and experts in mobility technologies and multiexperience development. Find out why you should become an XOne Partner.", labels: ["Partners", "ISV", es ? "Canal" : "Channel", "MXDP"], secondary: { label: es ? "Programa de partners" : "Partner program", slug: "programadepartners" } }
      : { title: es ? "Hazte partner" : "Become an", accent: es ? "de XOne" : "XOne partner", lead: es ? "Si quieres formar parte de XOne, ofrecer tus servicios con condiciones que beneficien a todos y ganar visibilidad en tu canal de ventas, contacta con nosotros." : "If you want to join XOne, offer your services on terms that benefit everyone and gain visibility in your sales channel, get in touch with us.", labels: ["Partners", "ISV", es ? "Canal" : "Channel", "MXDP"], secondary: { label: es ? "Programa de partners" : "Partner program", slug: "programadepartners" } },
    blocks: [
      form
        ? { type: "intro", visual: "integration", lead: es ? "Un ecosistema que te acompaña" : "An ecosystem that supports you", accent: es ? "en todo el ciclo de vida." : "across the whole lifecycle.", text: [es ? "Ser Partner de XOne ofrecerá a los proveedores y desarrolladores de software independientes una amplia gama de beneficios y oportunidades para brindarles asistencia durante todo el ciclo de vida del producto, desde la planificación y el desarrollo hasta la comercialización y venta de sus aplicaciones." : "Being an XOne Partner will give independent software vendors and developers a wide range of benefits and opportunities, with support throughout the entire product lifecycle, from planning and development to the marketing and sale of their applications.", es ? "Para solicitar tu incorporación al programa de Partners, escríbenos a comercial@xone.es o visita nuestra página de contacto." : "To apply to join the Partner program, email us at comercial@xone.es or visit our contact page."], link: { label: es ? "Solicitar la incorporación" : "Apply to join", slug: "contacto" } }
        : { type: "intro", visual: "integration", lead: es ? "Aunar fuerzas para crear" : "Joining forces to build", accent: es ? "beneficios mutuos." : "mutual benefits.", text: [es ? "Uno de los objetivos estratégicos de XOne es aunar fuerzas entre empresas y organismos en el marco de un proyecto multidisciplinar, ya que establecer una relación con otras empresas nos aporta beneficios mutuos." : "One of XOne's strategic goals is to join forces with companies and organizations within a multidisciplinary project, since building relationships with other companies brings mutual benefits.", es ? "Nuestros Partners actúan en calidad de vendedores y, como tales, están autorizados a distribuir y comercializar los productos de la tecnología XOne entre sus clientes, así como a ofertar el soporte, formación, mantenimiento y los servicios de consultoría adicionales que estos soliciten." : "Our Partners act as resellers and, as such, are authorized to distribute and market XOne technology products to their customers, as well as to offer the additional support, training, maintenance and consulting services they request."], link: { label: es ? "Ver el programa de partners" : "See the partner program", slug: "programadepartners" } },
      { type: "chips", index: es ? "Ventajas" : "Advantages", eyebrow: es ? "¿Por qué ser Partner?" : "Why join?", title: es ? "Tecnología, mercado" : "Technology, market", accent: es ? "y las mejores herramientas" : "and the best tools", cols: form ? 3 : 4, numbered: true, items: why },
      ...(form ? [] : [
        { type: "quote" as const, text: es ? "¿Quieres ser Partner de XOne? Escríbenos a comercial@xone.es o visita nuestra página de contacto." : "Want to become an XOne Partner? Write to us at comercial@xone.es or visit our contact page." },
        { type: "logos" as const, index: es ? "Red" : "Network", eyebrow: es ? "Partners XOne" : "XOne Partners", title: es ? "Empresas que ya" : "Companies already", accent: es ? "forman parte" : "on board", cols: 4 as const, items: PARTNERS },
      ]),
    ],
  };
}

export const empresa: Record<string, Page> = {
  /* ------------------------------------------------------------------ */
  "nuestros-clientes-xone": {
    es: {
      group: G.comunidad,
      seo: { title: "Nuestros clientes | XOne", description: "La base de nuestros clientes la forman corporaciones y entidades de diferentes sectores, a las que ofrecemos un enfoque práctico y un impacto real." },
      hero: { title: "Nuestros", accent: "clientes", lead: "La base de nuestros clientes la forman corporaciones y entidades de diferentes sectores, a las que ofrecemos un enfoque práctico y un impacto real.", labels: ["Energía", "Industria", "Servicios", "Transporte"], secondary: { label: "Ver casos de éxito", slug: "casos-de-exito-xone" } },
      blocks: [
        { type: "intro", lead: "Ellos ya", accent: "confían en nosotros.", text: ["Lo más importante para nosotros como empresa comprometida es ofrecerles una amplia experiencia funcional y un enfoque práctico para desarrollar capacidades y generar un impacto real en sus negocios.", "Al mantener el diálogo con nuestros clientes, trabajamos de manera constante para desarrollar e implementar las mejores soluciones a sus necesidades."], link: { label: "Lee sus opiniones", slug: "comentarios-clientes" } },
        { type: "logos", index: "Empresas", eyebrow: "Clientes XOne", title: "Corporaciones de", accent: "todos los sectores", cols: 6, items: CLIENTS },
      ],
    },
    en: {
      group: G.comunidad,
      seo: { title: "Our clients | XOne", description: "Our client base is made up of corporations and organizations from different sectors, to whom we offer a practical approach and real impact." },
      hero: { title: "Our", accent: "clients", lead: "Our client base is made up of corporations and organizations from different sectors, to whom we offer a practical approach and real impact.", labels: ["Energy", "Industry", "Services", "Transport"], secondary: { label: "See success stories", slug: "casos-de-exito-xone" } },
      blocks: [
        { type: "intro", lead: "They already", accent: "trust us.", text: ["What matters most to us as a committed company is offering them broad functional experience and a practical approach to build capabilities and generate real impact on their businesses.", "By maintaining an ongoing dialogue with our clients, we work constantly to develop and implement the best solutions for their needs."], link: { label: "Read what they say", slug: "comentarios-clientes" } },
        { type: "logos", index: "Companies", eyebrow: "XOne clients", title: "Corporations from", accent: "every sector", cols: 6, items: CLIENTS },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  "comentarios-clientes": {
    es: {
      group: G.comunidad,
      seo: { title: "Opiniones de nuestros clientes | XOne", description: "Opiniones de clientes de XOne: trabajar con la herramienta XOne permite afrontar los proyectos de movilidad centrándose solo en las necesidades del cliente." },
      hero: { title: "Opiniones de", accent: "nuestros clientes", lead: "Opiniones de clientes de XOne: trabajar con la herramienta XOne permite afrontar los proyectos de movilidad centrándose solo en las necesidades del cliente.", labels: ["JSV", "Pavapark", "Tervalis", "Fujitsu"], secondary: { label: "Conoce a nuestros clientes", slug: "nuestros-clientes-xone" } },
      blocks: [
        { type: "testimonials", index: "Testimonios", eyebrow: "En sus palabras", title: "Lo que dicen", accent: "quienes trabajan con XOne", items: QUOTES.es },
      ],
    },
    en: {
      group: G.comunidad,
      seo: { title: "What our customers say | XOne", description: "XOne customer reviews: working with the XOne tool lets teams tackle mobility projects by focusing solely on the customer's needs." },
      hero: { title: "What our", accent: "customers say", lead: "XOne customer reviews: working with the XOne tool lets teams tackle mobility projects by focusing solely on the customer's needs.", labels: ["JSV", "Pavapark", "Tervalis", "Fujitsu"], secondary: { label: "Meet our customers", slug: "nuestros-clientes-xone" } },
      blocks: [
        { type: "testimonials", index: "Testimonials", eyebrow: "In their words", title: "What people working", accent: "with XOne say", items: QUOTES.en },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  "socios-estrategicos-xone": {
    es: {
      group: G.comunidad,
      seo: { title: "Socios estratégicos y entidades colaboradoras | XOne", description: "En XOne estrechamos lazos para crear las mejores soluciones posibles, compartiendo objetivos y con el compromiso de mantenernos a la vanguardia tecnológica." },
      hero: { title: "Socios estratégicos y", accent: "entidades colaboradoras", lead: "En XOne estrechamos lazos para crear las mejores soluciones posibles, compartiendo objetivos y con el compromiso de mantenernos a la vanguardia tecnológica.", labels: ["Alianzas", "Tecnología", "Comunicaciones", "Hardware"], secondary: { label: "Hazte partner", slug: "hazte-partner-xone" } },
      blocks: [
        { type: "intro", lead: "Todos salimos ganando…", accent: "y nuestros clientes en primer lugar.", text: ["Con liderazgo de mercado en las comunicaciones y en tecnología, y con un compromiso profundo con la transformación digital, estas alianzas aumentan el valor para nuestros clientes.", "Para crear un producto de calidad es necesario dedicar un gran esfuerzo; por eso en XOne estrechamos lazos para crear las mejores soluciones posibles, involucrando procesos, compartiendo objetivos y con el fuerte compromiso de mantenernos a la vanguardia del sector tecnológico y empresarial."] },
        { type: "logos", index: "Alianzas", eyebrow: "Socios y colaboradores", title: "Líderes en tecnología", accent: "y comunicaciones", cols: 4, items: ALLIES },
      ],
    },
    en: {
      group: G.comunidad,
      seo: { title: "Strategic partners and collaborating organizations | XOne", description: "At XOne we build close ties to create the best possible solutions, sharing goals and committed to staying at the technological forefront." },
      hero: { title: "Strategic partners and", accent: "collaborating organizations", lead: "At XOne we build close ties to create the best possible solutions, sharing goals and committed to staying at the technological forefront.", labels: ["Alliances", "Technology", "Telecoms", "Hardware"], secondary: { label: "Become a partner", slug: "hazte-partner-xone" } },
      blocks: [
        { type: "intro", lead: "Everyone wins…", accent: "and our customers first.", text: ["With market leadership in communications and technology, and a deep commitment to digital transformation, these alliances increase value for our customers.", "Creating a quality product requires great effort; that is why at XOne we build close ties to create the best possible solutions, involving processes, sharing goals and with a strong commitment to staying at the forefront of the technology and business sector."] },
        { type: "logos", index: "Alliances", eyebrow: "Partners and collaborators", title: "Leaders in technology", accent: "and communications", cols: 4, items: ALLIES },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  partners: {
    es: {
      group: G.comunidad,
      seo: { title: "Partners de XOne | XOne", description: "Nuestros Partners están autorizados a distribuir y comercializar la tecnología XOne entre sus clientes, y ofertar soporte, formación y consultoría." },
      hero: { title: "Partners", accent: "de XOne", lead: "Nuestros Partners están autorizados a distribuir y comercializar la tecnología XOne entre sus clientes, y ofertar soporte, formación y consultoría.", labels: ["Canal", "Soporte", "Formación", "Consultoría"], secondary: { label: "Hazte partner", slug: "hazte-partner-xone" } },
      blocks: [
        { type: "intro", lead: "Una red consolidada que", accent: "complementa nuestro conocimiento.", text: ["Nuestros Partners actúan en calidad de vendedores y, como tales, están autorizados a distribuir y comercializar los productos de la tecnología XOne entre sus clientes, así como a ofertar el soporte, formación, mantenimiento y los servicios de consultoría adicionales que estos soliciten.", "Si quieres formar parte de XOne, ofrecer tus servicios con unas condiciones que beneficien a todos y tener mayor visibilidad en tu canal de ventas, ¡contacta con nosotros!"], link: { label: "Contacta con nosotros", slug: "contacto" } },
        { type: "logos", index: "Red", eyebrow: "Partners XOne", title: "Empresas que distribuyen", accent: "tecnología XOne", cols: 4, items: PARTNERS },
      ],
    },
    en: {
      group: G.comunidad,
      seo: { title: "XOne Partners | XOne", description: "Our Partners are authorized to distribute and market XOne technology to their customers and to offer support, training and consulting." },
      hero: { title: "XOne", accent: "Partners", lead: "Our Partners are authorized to distribute and market XOne technology to their customers and to offer support, training and consulting.", labels: ["Channel", "Support", "Training", "Consulting"], secondary: { label: "Become a partner", slug: "hazte-partner-xone" } },
      blocks: [
        { type: "intro", lead: "An established network that", accent: "complements our expertise.", text: ["Our Partners act as resellers and, as such, are authorized to distribute and market XOne technology products to their customers, as well as to offer the additional support, training, maintenance and consulting services those customers request.", "If you want to be part of XOne, offer your services under conditions that benefit everyone and gain greater visibility in your sales channel, contact us!"], link: { label: "Contact us", slug: "contacto" } },
        { type: "logos", index: "Network", eyebrow: "XOne Partners", title: "Companies distributing", accent: "XOne technology", cols: 4, items: PARTNERS },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  "hazte-partner-xone": { es: becomePartner("es", false), en: becomePartner("en", false) },
  "hazte-partner-formulario": { es: becomePartner("es", true), en: becomePartner("en", true) },

  /* ------------------------------------------------------------------ */
  programadepartners: {
    es: {
      group: G.comunidad,
      seo: { title: "Programa de partners | XOne", description: "Si buscas un modelo de negocio rentable, atractivo y con múltiples oportunidades de crecimiento, únete a nuestro ecosistema de Partners y conoce XOne." },
      hero: { title: "Programa", accent: "de partners", lead: "Si buscas un modelo de negocio rentable, atractivo y con múltiples oportunidades de crecimiento, únete a nuestro ecosistema de Partners y conoce XOne.", labels: ["Canal", "Formación", "Soporte", "DevOps"], secondary: { label: "Hazte partner", slug: "hazte-partner-formulario" } },
      blocks: [
        {
          type: "cells", index: "Ecosistema", eyebrow: "La movilidad al alcance de todos", title: "Si nuestro Partner evoluciona,", accent: "nosotros también", cols: 4,
          items: [
            { label: "Compromiso", icon: "handshake", text: "Trabajamos con nuestros Partners para ofrecerles las mejores soluciones corporativas de movilidad y los desarrollos multiexperiencia que demanda el mercado." },
            { label: "Calidad", icon: "badge", text: "Nuestros socios de canal son una extensión de nuestra competencia empresarial y desempeñan un papel fundamental en nuestras actividades y estrategias de mercado." },
            { label: "Soporte", icon: "headset", text: "Un programa integral, flexible y valioso para capacitar a nuestros Partners y optimizar sus ventas, con soporte personalizado a nivel de desarrollador y de usuario." },
            { label: "Diferenciación", icon: "sparkle", text: "El nivel más alto de experiencia para afrontar las necesidades cambiantes del sector y ser un referente para sus propios clientes frente a la competencia." },
          ],
        },
        { type: "chips", index: "Requisitos", eyebrow: "Competencias de nuestros Partners", title: "Una política de canal", accent: "alineada con XOne", cols: 2, subtitle: "Nuestros Partners deberán elaborar, diseñar y gestionar una política de canal acorde a la estrategia definida por XOne y atender a los microcanales de sus territorios.", items: ["Desarrollar e implantar las soluciones XOne entre sus clientes", "Desarrollar en su canal una red de distribución de XOne", "Capacitar a comerciales y técnicos en XOne", "Dedicar como mínimo 2 técnicos programadores formados en XOne"] },
        {
          type: "cells", index: "Oferta", eyebrow: "Juntos somos mejores", title: "Qué ofrecemos", accent: "a nuestros Partners", cols: 4, subtitle: "Con nuestro soporte integral de ventas y capacitación técnica, resolverás los desafíos de tus clientes y les darás una mejor experiencia, de forma más rápida y eficaz.",
          items: [
            { label: "Diseño profesional", icon: "layers", text: "Diseñadores expertos para nuevas soluciones o actualizaciones, con los que los desarrolladores alcanzan el más alto nivel en el diseño y modelado de apps XOne." },
            { label: "Implementación", icon: "download", text: "Instalación física de las soluciones, soporte y resolución básica de problemas, con un plan de seguimiento para asegurar el éxito." },
            { label: "Soporte a todos los niveles", icon: "headset", text: "Asesoramiento y asistencia técnica integral, con competencias probadas para la mejor experiencia del Partner y de sus clientes." },
            { label: "Planificación estratégica", icon: "map", text: "Te asistimos en todo momento en la definición de las estrategias óptimas para las necesidades de tu canal de clientes." },
            { label: "Multiexperiencia", icon: "sparkle", text: "Las últimas tecnologías y servicios que tu negocio exige, con tecnologías emergentes como IA, IoT o wearables." },
            { label: "Canal de ventas", icon: "briefcase", text: "Proveedores locales con experiencia probada y herramientas de comunicación: logotipos, material publicitario, casos de éxito, documentación y campañas." },
            { label: "Metodologías ágiles", icon: "loop", text: "Te ayudamos a incorporar DevOps para habilitar la entrega, el despliegue y la supervisión continua de las apps móviles.", link: { label: "Metodología DevOps", slug: "devops" } },
            { label: "Presencia internacional", icon: "map", text: "Una expansión internacional que nos acerca a clientes y Partners, estén donde estén, para lograr más crecimiento, competitividad y diversificación." },
          ],
        },
        { type: "chips", index: "Formación", eyebrow: "Plan de capacitación y consultoría", title: "Te acompañamos en tu", accent: "especialización", cols: 3, subtitle: "Detección de necesidades, asesoramiento, informes de evaluación, seguimiento y calidad.", items: ["Formación a desarrolladores", "Formación a usuarios", "Formación comercial y funcional", "Material corporativo", "Recursos y herramientas"] },
        {
          type: "rows", index: "Recursos", eyebrow: "Herramientas de soporte", title: "Siempre hay alguien", accent: "al otro lado",
          items: [
            { title: "Call center permanente", text: ["Personal técnico cualificado con tecnología de alto nivel y un sistema de VoIP con tiempos de respuesta inmediatos y multiidioma."] },
            { title: "Software Factory XOne", text: ["Una fábrica de software especializada en la tecnología XOne a la que cualquier Partner puede recurrir si no tiene personal técnico cualificado o cuando lo considere oportuno."] },
            { title: "Wiki, kit de formación y web de clientes", text: ["Resuelve tus dudas en la XOne Wiki, aprende todo lo relacionado con XOne con nuestro kit de formación o visita nuestra página web de clientes."], link: { label: "Abrir la XOne Wiki", href: "https://xoneisp.com/xonedocs/" } },
          ],
        },
        { type: "chips", index: "Selección", eyebrow: "Cómo elegimos a nuestros Partners", title: "Siete criterios", accent: "para crecer juntos", cols: 4, items: ["Nivel de facturación de la empresa", "Número de comerciales y técnicos", "Nivel de negocio de cada operación", "Implantación territorial", "Potencial de generación de nuevos clientes", "Conocimientos tecnológicos", "Solvencia económica"] },
        {
          type: "cells", index: "Condiciones", eyebrow: "Para empezar", title: "Entrada, soporte", accent: "y contacto", cols: 3,
          items: [
            { label: "Condiciones de entrada", icon: "doc", text: "Para ser Partner de XOne es necesario abonar un canon de entrada que incluye las herramientas de desarrollo necesarias y un curso remoto de la tecnología XOne.", link: { label: "Contáctanos", slug: "contacto" } },
            { label: "Modalidades de soporte", icon: "headset", text: "¿Cuánto quieres pagar? Tenemos el paquete de soporte que necesitas: elige la modalidad que más se ajuste a tus necesidades.", link: { label: "Ver las modalidades de soporte", slug: "modalidadessoporte" } },
            { label: "Háblanos, te escuchamos", icon: "chat", text: "Tenemos mucho que contarte. Conoce también a los Partners que ya forman parte de la red XOne.", link: { label: "Conoce a nuestros Partners", slug: "partners" } },
          ],
        },
      ],
    },
    en: {
      group: G.comunidad,
      seo: { title: "Partner program | XOne", description: "If you are looking for a profitable, attractive business model with many growth opportunities, join our Partner ecosystem and discover XOne." },
      hero: { title: "Partner", accent: "program", lead: "If you are looking for a profitable, attractive business model with many growth opportunities, join our Partner ecosystem and discover XOne.", labels: ["Channel", "Training", "Support", "DevOps"], secondary: { label: "Become a partner", slug: "hazte-partner-formulario" } },
      blocks: [
        {
          type: "cells", index: "Ecosystem", eyebrow: "Mobility within everyone's reach", title: "If our Partner grows,", accent: "so do we", cols: 4,
          items: [
            { label: "Commitment", icon: "handshake", text: "We work with our Partners to offer them the best enterprise mobility solutions and the multiexperience developments today's market demands." },
            { label: "Quality", icon: "badge", text: "Our channel partners are an extension of our business expertise and play a key role in our market activities and strategies." },
            { label: "Support", icon: "headset", text: "A comprehensive, flexible and valuable program to build our Partners' skills and optimize their sales, with personalized support at developer and user level." },
            { label: "Differentiation", icon: "sparkle", text: "The highest level of experience to meet the sector's changing needs and become a benchmark for their own customers against the competition." },
          ],
        },
        { type: "chips", index: "Requirements", eyebrow: "Our Partners' responsibilities", title: "A channel policy", accent: "aligned with XOne", cols: 2, subtitle: "Our Partners must draw up, design and manage a channel policy in line with the strategy defined by XOne and serve the micro-channels in their territories.", items: ["Develop and deploy XOne solutions for their customers", "Develop an XOne distribution network within their channel", "Train sales and technical staff in XOne", "Dedicate at least 2 programmers trained in XOne"] },
        {
          type: "cells", index: "Offer", eyebrow: "Together we are better", title: "What we offer", accent: "our Partners", cols: 4, subtitle: "With our comprehensive sales support and technical training, you will solve your customers' challenges and give them a better experience, faster and more effectively.",
          items: [
            { label: "Professional design", icon: "layers", text: "Expert designers for new solutions or updates, helping developers reach the highest level in designing and modeling XOne apps." },
            { label: "Implementation", icon: "download", text: "Physical installation of the solutions, support and basic troubleshooting, with a follow-up plan to ensure success." },
            { label: "Support at every level", icon: "headset", text: "Comprehensive advice and technical assistance, with proven skills for the best experience for Partners and their customers." },
            { label: "Strategic planning", icon: "map", text: "We help you at all times to define the best strategies for the needs of your customer channel." },
            { label: "Multiexperience", icon: "sparkle", text: "The latest technologies and services your business demands, with emerging technologies such as AI, IoT and wearables." },
            { label: "Sales channel", icon: "briefcase", text: "Local providers with proven experience and communication tools: logos, advertising material, success stories, documentation and campaigns." },
            { label: "Agile methodologies", icon: "loop", text: "We help you adopt DevOps to enable continuous delivery, deployment and monitoring of mobile apps.", link: { label: "DevOps methodology", slug: "devops" } },
            { label: "International presence", icon: "map", text: "An international expansion that brings us closer to customers and Partners, wherever they are, for more growth, competitiveness and diversification." },
          ],
        },
        { type: "chips", index: "Training", eyebrow: "Training and consulting plan", title: "We support your", accent: "specialization", cols: 3, subtitle: "Needs assessment, advice, evaluation reports, follow-up and quality.", items: ["Developer training", "User training", "Sales and functional training", "Corporate material", "Resources and tools"] },
        {
          type: "rows", index: "Resources", eyebrow: "Support tools", title: "There is always someone", accent: "on the other end",
          items: [
            { title: "Permanent call center", text: ["Qualified technical staff with high-end technology and a VoIP system offering immediate response times in multiple languages."] },
            { title: "XOne Software Factory", text: ["A software factory specialized in XOne technology that any Partner can turn to if they do not have qualified technical staff or whenever they see fit."] },
            { title: "Wiki, training kit and customer website", text: ["Resolve your questions in the XOne Wiki, learn everything about XOne with our training kit or visit our customer website."], link: { label: "Open the XOne Wiki", href: "https://xoneisp.com/xonedocs/" } },
          ],
        },
        { type: "chips", index: "Selection", eyebrow: "How we choose our Partners", title: "Seven criteria", accent: "to grow together", cols: 4, items: ["Company revenue level", "Number of sales and technical staff", "Business volume of each operation", "Territorial presence", "Potential to generate new customers", "Technological knowledge", "Financial solvency"] },
        {
          type: "cells", index: "Conditions", eyebrow: "Getting started", title: "Entry, support", accent: "and contact", cols: 3,
          items: [
            { label: "Entry conditions", icon: "doc", text: "To become an XOne Partner, an entry fee must be paid, which includes the necessary development tools and a remote course on XOne technology.", link: { label: "Contact us", slug: "contacto" } },
            { label: "Support plans", icon: "headset", text: "How much do you want to pay? We have the support package you need: choose the plan that best fits your needs.", link: { label: "See the support plans", slug: "modalidadessoporte" } },
            { label: "Talk to us, we're listening", icon: "chat", text: "We have a lot to tell you. Meet the Partners who are already part of the XOne network.", link: { label: "Meet our Partners", slug: "partners" } },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  "sobre-nosotros": {
    es: {
      group: G.empresa,
      seo: { title: "Sobre nosotros | XOne", description: "XOne es una empresa española dedicada al desarrollo de apps nativas de movilidad a medida, optimizadas según los más altos estándares internacionales." },
      hero: { title: "Sobre", accent: "nosotros", lead: "XOne es una empresa española dedicada al desarrollo de apps nativas de movilidad a medida, optimizadas según los más altos estándares internacionales.", labels: ["+20 años", "Badajoz", "I+D+i", "Internacional"], secondary: { label: "Certificaciones", slug: "certificaciones" } },
      blocks: [
        { type: "intro", visual: "platforms", lead: "Soluciones que extienden cualquier empresa,", accent: "en cualquier lugar.", text: ["Nos hemos especializado en el desarrollo de soluciones tecnológicas de vanguardia y estamos altamente comprometidos con la modernización innovadora de los procesos de negocio de nuestros clientes.", "Ofrecemos soluciones que permiten extender la funcionalidad de cualquier empresa, en cualquier lugar, independientemente del hardware en el que se ejecuten. XOne es una empresa española, constituida por un equipo profesional y emprendedor."] },
        {
          type: "rows", index: "Equipo", eyebrow: "Quiénes somos", title: "Más de 20 años", accent: "de experiencia",
          items: [
            { title: "Staff XOne", text: ["Nuestra plantilla se compone de analistas y programadores, así como de personal técnico y comercial, altamente cualificado en el desarrollo de soluciones y herramientas de alto nivel tecnológico.", "Los integrantes de XOne aportan una carrera profesional de más de 20 años basada en la experiencia, en la formación y en el aprendizaje continuo, que garantiza su adaptación a los nuevos entornos y permite ofrecer a los clientes la mejor opción a la hora de abordar un proyecto de movilidad."] },
            { title: "Nuestra misión", text: ["Crear valor y ayudar al crecimiento mediante soluciones y servicios innovadores en el campo de las TIC, contribuyendo a la evolución, eficacia y productividad de nuestros clientes, promoviendo el talento, la integridad y el trabajo en equipo, con el objetivo de ser un referente tecnológico.", "Nuestra estrategia va dirigida a mejorar los procesos de nuestros clientes mediante un completo portfolio de servicios y soluciones de ingeniería. Nuestra expertise en proyectos de gran complejidad técnica nos diferencia de nuestros competidores."], note: "Más de 20 años de experiencia en el mercado nos convierten en la primera plataforma multiexperiencia." },
            { title: "Nuestra visión", text: ["Nuestra visión y nuestros valores impulsan el éxito y el espíritu de la empresa, y nos ayudan a tomar decisiones estratégicas, asignar recursos y ofrecer las mejores soluciones."], list: ["Comprender el negocio y las necesidades de nuestros clientes", "Satisfacer las necesidades de nuestros clientes", "Ampliar la rentabilidad de las empresas", "Entregar productos y servicios competitivos y de calidad", "Mejora continua mediante inversión en I+D+i", "Sondear el mercado TI en busca de tecnologías emergentes", "Seguir siendo referencia en el sector de la movilidad", "Ampliar nuestro canal de distribución", "Alcanzar una mayor expansión internacional"] },
          ],
        },
        {
          type: "cells", index: "Cultura", eyebrow: "Nuestros valores", title: "Los pilares que marcan", accent: "nuestro carácter", cols: 4, subtitle: "Mantenerlos vivos requiere enfoque, esfuerzo y dedicación continuos para lograr el éxito de nuestros clientes, empleados y comunidad.",
          items: [
            { label: "Fiabilidad", icon: "check", text: "Todas nuestras soluciones funcionan, son robustas y están altamente probadas." },
            { label: "Compromiso", icon: "handshake", text: "Comprometidos en dar lo mejor de nosotros y ofrecer una atención excepcional a nuestros clientes." },
            { label: "Innovación", icon: "sparkle", text: "Siempre en movimiento, adaptándonos a los tiempos y a las exigencias de nuestros clientes." },
            { label: "Liderazgo", icon: "award", text: "Una propuesta de valor competitiva y de calidad." },
          ],
        },
        {
          type: "cells", index: "Presencia", eyebrow: "Dónde estamos", title: "Cerca de nuestros clientes,", accent: "estén donde estén", cols: 3,
          items: [
            { label: "Central", icon: "building", lead: "Badajoz.", text: "Edificio PCTEX, Avda. de La Investigación s/n, 06006 Badajoz (España). Tel.: +34 924 207371 · comercial@xone.es" },
            { label: "Delegaciones en España", icon: "pin", text: "Barcelona, Bilbao, Jerez de la Frontera, Madrid y Valencia." },
            { label: "Presencia internacional", icon: "map", text: "Europa, América del Norte, América Latina, Oriente Medio y África, y Asia-Pacífico: en todas las regiones en las que nuestros clientes participan activamente." },
          ],
        },
        { type: "quote", text: "La diversidad de personas e ideas inspira la innovación. Si te apasiona el complejo mundo de la tecnología, tenemos una oferta para ti.", source: "Trabaja con nosotros · comercial@xone.es" },
      ],
    },
    en: {
      group: G.empresa,
      seo: { title: "About us | XOne", description: "XOne is a Spanish company dedicated to developing custom native mobility apps, optimized to the highest international standards." },
      hero: { title: "About", accent: "us", lead: "XOne is a Spanish company dedicated to developing custom native mobility apps, optimized to the highest international standards.", labels: ["20+ years", "Badajoz", "R&D&I", "International"], secondary: { label: "Certifications", slug: "certificaciones" } },
      blocks: [
        { type: "intro", visual: "platforms", lead: "Solutions that extend any company,", accent: "anywhere.", text: ["We specialize in developing cutting-edge technology solutions and are deeply committed to the innovative modernization of our clients' business processes.", "We offer solutions that extend the functionality of any company, anywhere, regardless of the hardware they run on. XOne is a Spanish company, made up of a professional and entrepreneurial team."] },
        {
          type: "rows", index: "Team", eyebrow: "Who we are", title: "More than 20 years", accent: "of experience",
          items: [
            { title: "XOne staff", text: ["Our team is made up of analysts and programmers, as well as technical and sales staff, highly qualified in developing solutions and tools with a high technological level.", "XOne's team members bring a professional career of more than 20 years based on experience, training and continuous learning, which ensures they adapt to new environments and allows us to offer clients the best option when tackling a mobility project."] },
            { title: "Our mission", text: ["To create value and help growth through innovative ICT solutions and services, contributing to the evolution, efficiency and productivity of our clients, while promoting talent, integrity and teamwork, with the aim of being a technology benchmark.", "Our strategy is aimed at improving our clients' processes through a complete portfolio of engineering services and solutions. Our expertise in technically complex projects sets us apart from our competitors."], note: "More than 20 years of experience in the market make us the first multiexperience platform." },
            { title: "Our vision", text: ["Our vision and values drive the success and spirit of the company, and help us make strategic decisions, allocate resources and deliver the best solutions."], list: ["Understanding our clients' business and needs", "Meeting our clients' needs", "Increasing companies' profitability", "Delivering competitive, high-quality products and services", "Continuous improvement through investment in R&D&I", "Scanning the IT market for emerging technologies", "Remaining a benchmark in the mobility sector", "Expanding our distribution channel", "Achieving greater international expansion"] },
          ],
        },
        {
          type: "cells", index: "Culture", eyebrow: "Our values", title: "The pillars that shape", accent: "our character", cols: 4, subtitle: "Keeping them alive requires continuous focus, effort and dedication to achieve the success of our clients, employees and community.",
          items: [
            { label: "Reliability", icon: "check", text: "All our solutions work, are robust and are thoroughly tested." },
            { label: "Commitment", icon: "handshake", text: "Committed to giving our best and providing exceptional service to our clients." },
            { label: "Innovation", icon: "sparkle", text: "Always on the move, adapting to the times and to our clients' demands." },
            { label: "Leadership", icon: "award", text: "A competitive, high-quality value proposition." },
          ],
        },
        {
          type: "cells", index: "Presence", eyebrow: "Where we are", title: "Close to our clients,", accent: "wherever they are", cols: 3,
          items: [
            { label: "Headquarters", icon: "building", lead: "Badajoz.", text: "Edificio PCTEX, Avda. de La Investigación s/n, 06006 Badajoz (Spain). Tel.: +34 924 207371 · comercial@xone.es" },
            { label: "Offices in Spain", icon: "pin", text: "Barcelona, Bilbao, Jerez de la Frontera, Madrid and Valencia." },
            { label: "International presence", icon: "map", text: "Europe, North America, Latin America, the Middle East and Africa, and Asia-Pacific: in all the regions where our clients are active." },
          ],
        },
        { type: "quote", text: "Diversity of people and ideas inspires innovation. If you are passionate about the complex world of technology, we have an opening for you.", source: "Work with us · comercial@xone.es" },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  certificaciones: {
    es: {
      group: G.empresa,
      seo: { title: "Certificaciones: ENS e ISO/IEC 27001 | XOne", description: "XOne está certificada conforme al Esquema Nacional de Seguridad (ENS), categoría media, y a la norma ISO/IEC 27001:2022 por entidad de certificación acreditada." },
      hero: { title: "Certificaciones", accent: "de seguridad", lead: "XOne está certificada conforme al Esquema Nacional de Seguridad (ENS), categoría media, y a la norma ISO/IEC 27001:2022 por entidad de certificación acreditada.", labels: ["ENS", "ISO 27001", "ACCM", "ENAC"], secondary: { label: "Ver ciberseguridad", slug: "ciberseguridad" } },
      blocks: [
        { type: "intro", visual: "security", lead: "La seguridad de la información es", accent: "un requisito de negocio, no un añadido.", text: ["En XOne (COMPUTER GLOBAL SOFTWARE, S.L.), el sistema de información que da soporte a nuestro servicio de desarrollo y edición de aplicaciones móviles está certificado conforme al Esquema Nacional de Seguridad (ENS) y a la norma ISO/IEC 27001:2022, ambos por entidad de certificación acreditada."] },
        {
          type: "rows", index: "Certificados", eyebrow: "Auditados y conformes", title: "Dos certificaciones,", accent: "un mismo compromiso",
          items: [
            { title: "Esquema Nacional de Seguridad (ENS) · RD 311/2022", image: { src: M("logo-ens-conformidad-categoria-media.png"), alt: "Certificación de Conformidad con el Esquema Nacional de Seguridad - Categoría MEDIA - RD 311/2022" }, text: ["COMPUTER GLOBAL SOFTWARE, S.L. dispone del Certificado de Conformidad con el Esquema Nacional de Seguridad en categoría MEDIA, tras ser auditados y encontrados conformes con las exigencias del Real Decreto 311/2022, de 3 de mayo, por el que se regula el Esquema Nacional de Seguridad."], list: ["Número de certificado: ENS_2.026.126", "Categoría: MEDIA — nivel MEDIO en las cinco dimensiones (Disponibilidad, Integridad, Confidencialidad, Autenticidad y Trazabilidad), con 64 medidas de seguridad implantadas", "Alcance: sistema de información que da soporte al servicio de desarrollo y edición de aplicaciones móviles", "Emplazamiento: Edificio PCTEX, Avenida de Elvas, Campus Universitario, Badajoz — con CPD propio", "Declaración de aplicabilidad: versión 1.1, de 11/02/2026", "Entidad de certificación: ACCM, acreditada por ENAC", "Fecha de concesión: 9 de agosto de 2026", "Válido hasta: 9 de agosto de 2028"], note: "Distintivo de conformidad publicado conforme al artículo 38 del Real Decreto 311/2022.", link: { label: "Consultar el certificado ENS (PDF)", href: M("certificado-ens-rd-311-2022-computer-global-software.pdf") } },
            { title: "ISO/IEC 27001:2022 · Seguridad de la información", image: { src: M("logo-iso-27001-accm.jpg"), alt: "Certificado ISO 27001 Seguridad de la Información - ACCM" }, text: ["COMPUTER GLOBAL SOFTWARE, S.L. dispone de un Sistema de Gestión de la Seguridad de la Información, Ciberseguridad y Protección de la Privacidad certificado conforme a la norma ISO/IEC 27001:2022."], list: ["Código de registro: SI-623926", "Norma: ISO/IEC 27001:2022", "Alcance: Sistema de Gestión de la Seguridad de la Información que da soporte a los servicios de desarrollo y edición de aplicaciones móviles", "Emplazamiento: Avda. de Elvas, s/n — 06006 Badajoz", "Entidad de certificación: ACCM — Agencia para la Certificación de la Calidad y el Medio Ambiente", "Primera emisión y emisión vigente: 10/04/2026", "Válido hasta: 09/04/2029"], link: { label: "Consultar el certificado ISO/IEC 27001 (PDF)", href: M("certificado-iso-27001-computer-global-software.pdf") } },
          ],
        },
        { type: "doc", md: "## Política de Seguridad de la Información\n" + policyEs },
      ],
    },
    en: {
      group: G.empresa,
      seo: { title: "Certifications: ENS and ISO/IEC 27001 | XOne", description: "XOne is certified under Spain's National Security Framework (ENS), medium category, and ISO/IEC 27001:2022 by an accredited certification body." },
      hero: { title: "Security", accent: "certifications", lead: "XOne is certified under Spain's National Security Framework (ENS), medium category, and ISO/IEC 27001:2022 by an accredited certification body.", labels: ["ENS", "ISO 27001", "ACCM", "ENAC"], secondary: { label: "See cybersecurity", slug: "ciberseguridad" } },
      blocks: [
        { type: "intro", visual: "security", lead: "Information security is", accent: "a business requirement, not an add-on.", text: ["At XOne (COMPUTER GLOBAL SOFTWARE, S.L.), the information system that supports our mobile application development and publishing service is certified under the Esquema Nacional de Seguridad (ENS), Spain's National Security Framework, and the ISO/IEC 27001:2022 standard, both by an accredited certification body."] },
        {
          type: "rows", index: "Certificates", eyebrow: "Audited and compliant", title: "Two certifications,", accent: "one commitment",
          items: [
            { title: "Esquema Nacional de Seguridad (ENS) · Royal Decree 311/2022", image: { src: M("logo-ens-conformidad-categoria-media.png"), alt: "Certification of Conformity with the Esquema Nacional de Seguridad - MEDIUM category - Royal Decree 311/2022" }, text: ["COMPUTER GLOBAL SOFTWARE, S.L. holds the Certificate of Conformity with the Esquema Nacional de Seguridad in the MEDIUM category, having been audited and found compliant with the requirements of Royal Decree (Real Decreto) 311/2022, of May 3, which regulates the Esquema Nacional de Seguridad."], list: ["Certificate number: ENS_2.026.126", "Category: MEDIUM — MEDIUM level in all five dimensions (Availability, Integrity, Confidentiality, Authenticity and Traceability), with 64 security measures implemented", "Scope: information system supporting the mobile application development and publishing service", "Location: PCTEX building, Avenida de Elvas, Campus Universitario, Badajoz — with its own data center", "Statement of applicability: version 1.1, dated February 11, 2026", "Certification body: ACCM, accredited by ENAC (Spain's National Accreditation Body)", "Date granted: August 9, 2026", "Valid until: August 9, 2028"], note: "Conformity badge published in accordance with Article 38 of Royal Decree 311/2022.", link: { label: "View the ENS certificate (PDF)", href: M("certificado-ens-rd-311-2022-computer-global-software.pdf") } },
            { title: "ISO/IEC 27001:2022 · Information security", image: { src: M("logo-iso-27001-accm.jpg"), alt: "ISO 27001 Information Security certificate - ACCM" }, text: ["COMPUTER GLOBAL SOFTWARE, S.L. has an Information Security, Cybersecurity and Privacy Protection Management System certified under the ISO/IEC 27001:2022 standard."], list: ["Registration code: SI-623926", "Standard: ISO/IEC 27001:2022", "Scope: Information Security Management System supporting mobile application development and publishing services", "Location: Avda. de Elvas, s/n — 06006 Badajoz", "Certification body: ACCM — Agencia para la Certificación de la Calidad y el Medio Ambiente", "First and current issue: April 10, 2026", "Valid until: April 9, 2029"], link: { label: "View the ISO/IEC 27001 certificate (PDF)", href: M("certificado-iso-27001-computer-global-software.pdf") } },
          ],
        },
        { type: "doc", md: "## Information Security Policy\n" + policyEn },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  "financiacion-europea": {
    es: {
      group: G.empresa,
      seo: { title: "Financiación europea | XOne", description: "COMPUTER GLOBAL SOFTWARE, S.L. ha sido beneficiaria de una ayuda del programa CONSOLIDAPYME para implantar y certificar el Esquema Nacional de Seguridad." },
      hero: { title: "Financiación", accent: "europea", lead: "COMPUTER GLOBAL SOFTWARE, S.L. ha sido beneficiaria de una ayuda del programa CONSOLIDAPYME para implantar y certificar el Esquema Nacional de Seguridad.", labels: ["FEDER", "CONSOLIDAPYME", "Extremadura", "ENS"], secondary: { label: "Ver certificaciones", slug: "certificaciones" } },
      blocks: [
        { type: "facts", items: [
          { label: "Programa", value: "CONSOLIDAPYME" },
          { label: "Inversión subvencionable", value: "7.575 €" },
          { label: "Subvención concedida", value: "4.800 €" },
          { label: "Intensidad de la ayuda", value: "80 % de la inversión" },
        ] },
        { type: "intro", lead: "Consolidación y crecimiento de la", accent: "pyme extremeña.", text: ["COMPUTER GLOBAL SOFTWARE, S.L. ha sido beneficiaria de una ayuda en el marco del programa CONSOLIDAPYME, destinado a impulsar la consolidación y el crecimiento de la pyme extremeña mediante la mejora de su competitividad. Esta actuación cuenta con la financiación de la Junta de Extremadura y la cofinanciación de la Unión Europea a través del Fondo Europeo de Desarrollo Regional (FEDER).", "El proyecto subvencionado tiene como finalidad la implantación y certificación del Esquema Nacional de Seguridad en la empresa."], link: { label: "Ver la certificación ENS", slug: "certificaciones" } },
        { type: "logos", index: "Cofinanciación", eyebrow: "Junta de Extremadura y FEDER", title: "Proyecto cofinanciado por", accent: "la Unión Europea", cols: 3, color: true, items: [{ name: "Junta de Extremadura", src: M("logo_ecfp.webp") }, { name: "Unión Europea · Fondo Europeo de Desarrollo Regional", src: M("UE.png") }] },
      ],
    },
    en: {
      group: G.empresa,
      seo: { title: "European funding | XOne", description: "COMPUTER GLOBAL SOFTWARE, S.L. received a CONSOLIDAPYME grant to implement and certify Spain's Esquema Nacional de Seguridad." },
      hero: { title: "European", accent: "funding", lead: "COMPUTER GLOBAL SOFTWARE, S.L. received a CONSOLIDAPYME grant to implement and certify Spain's Esquema Nacional de Seguridad.", labels: ["ERDF", "CONSOLIDAPYME", "Extremadura", "ENS"], secondary: { label: "See certifications", slug: "certificaciones" } },
      blocks: [
        { type: "facts", items: [
          { label: "Program", value: "CONSOLIDAPYME" },
          { label: "Eligible investment", value: "€7,575" },
          { label: "Grant awarded", value: "€4,800" },
          { label: "Aid intensity", value: "80% of the investment" },
        ] },
        { type: "intro", lead: "Consolidation and growth of", accent: "SMEs in Extremadura.", text: ["COMPUTER GLOBAL SOFTWARE, S.L. has received a grant under the CONSOLIDAPYME program, aimed at promoting the consolidation and growth of SMEs in Extremadura by improving their competitiveness. This action is funded by the Junta de Extremadura (the regional government of Extremadura) and co-funded by the European Union through the European Regional Development Fund (ERDF, FEDER in Spanish).", "The purpose of the subsidized project is to implement and certify the Esquema Nacional de Seguridad (ENS, Spain's National Security Framework) in the company."], link: { label: "See the ENS certification", slug: "certificaciones" } },
        { type: "logos", index: "Co-funding", eyebrow: "Junta de Extremadura and ERDF", title: "Project co-funded by", accent: "the European Union", cols: 3, color: true, items: [{ name: "Junta de Extremadura", src: M("logo_ecfp.webp") }, { name: "European Union · European Regional Development Fund", src: M("UE.png") }] },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  contacto: {
    es: {
      group: G.empresa, cta: false,
      seo: { title: "Contacto | XOne", description: "Cuéntanos qué necesitas y te ayudamos a llevarlo a la movilidad empresarial." },
      hero: { title: "Hablemos de", accent: "tu proyecto", lead: "Cuéntanos qué necesitas y te ayudamos a llevarlo a la movilidad empresarial.", labels: ["Email", "Teléfono", "Badajoz", "España"], primary: false, secondary: { label: "comercial@xone.es", href: "mailto:comercial@xone.es" } },
      blocks: [{ type: "contact" }],
    },
    en: {
      group: G.empresa, cta: false,
      seo: { title: "Contact | XOne", description: "Tell us what you need and we will help you take it to enterprise mobility." },
      hero: { title: "Let's talk about", accent: "your project", lead: "Tell us what you need and we will help you take it to enterprise mobility.", labels: ["Email", "Phone", "Badajoz", "Spain"], primary: false, secondary: { label: "comercial@xone.es", href: "mailto:comercial@xone.es" } },
      blocks: [{ type: "contact" }],
    },
  },

  /* ------------------------------------------------------------------ */
  "uso-de-cookies-y-politica-de-privacidad": {
    es: {
      group: G.empresa,
      seo: { title: "Aviso legal, cookies y privacidad | XOne", description: "Aviso legal, política de cookies y política de privacidad de XOne (COMPUTER GLOBAL SOFTWARE SL) y de XOne MDM, en cumplimiento de la LSSICE." },
      hero: { title: "Aviso legal,", accent: "cookies y privacidad", lead: "Aviso legal, política de cookies y política de privacidad de XOne (COMPUTER GLOBAL SOFTWARE SL) y de XOne MDM, en cumplimiento de la LSSICE.", labels: ["LSSICE", "RGPD", "LOPDGDD", "Sin cookies"] },
      blocks: [{ type: "doc", md: legalEs }],
    },
    en: {
      group: G.empresa,
      seo: { title: "Legal notice, cookies and privacy | XOne", description: "Legal notice, cookie policy and privacy policy of XOne (COMPUTER GLOBAL SOFTWARE SL) and XOne MDM, in compliance with the LSSICE." },
      hero: { title: "Legal notice,", accent: "cookies and privacy", lead: "Legal notice, cookie policy and privacy policy of XOne (COMPUTER GLOBAL SOFTWARE SL) and XOne MDM, in compliance with the LSSICE.", labels: ["LSSICE", "GDPR", "LOPDGDD", "No cookies"] },
      blocks: [{ type: "doc", md: legalEn, note: "This is an English translation provided for convenience. In case of discrepancy, the Spanish version prevails." }],
    },
  },
};
