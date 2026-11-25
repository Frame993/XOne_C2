// Noticias de xone.es (61). Cuerpos en ./es/{slug}.md y ./en/{slug}.md, que sólo existen para las ya migradas (`built`).
// xone.es sólo publica noticias en español (algunas se publicaron también en inglés como entrada aparte: `pair`).
// Las traducciones al inglés son nuestras: ver CONTENT_MAP.md › «Noticias».

export type NewsMeta = {
  slug: string;
  date: string; // AAAA-MM-DD
  /** Imagen de portada (ruta de xone.es/media). */
  image?: string;
  es: string;
  en: string;
  /** Idioma en el que se publicó la entrada original (por defecto, español). */
  orig?: "es" | "en";
  /** Entrada equivalente en el otro idioma: cada listado muestra sólo la de su idioma y cada versión usa el texto original del par. */
  pair?: string;
  /** Usa el cuerpo de otra entrada (contenidos duplicados en xone.es con distinta URL). */
  body?: string;
  /** Ya migrada a esta web (tiene cuerpo en es/ y en/). */
  built?: boolean;
};

export const NEWS: NewsMeta[] = [
  { slug: "certificacion-iso-27001", date: "2026-06-30", image: "ISO-27001.jpg", es: "Certificación ISO 27001", en: "ISO 27001 certification", built: true },
  { slug: "tendencias-en-servicios-tecnicos", date: "2026-02-17", es: "Tendencias en servicios técnicos", en: "Trends in technical services", built: true },
  { slug: "xone-recomendada-por-gartner-como-uno-de-los-principales-proveedores-de-desarrollo-low-code", date: "2026-02-14", image: "citizen-development-low-code-software-1011x440.jpeg", es: "XOne recomendada por Gartner como uno de los principales proveedores de desarrollo low-code", en: "XOne recommended by Gartner as one of the leading low-code development providers", built: true },
  { slug: "subvencion-presto", date: "2025-02-14", image: "cartel-Fichajes-og.jpg", es: "Subvención Fichajes", en: "Clock-in software grant", built: true },
  { slug: "xone-ia", date: "2023-11-30", image: "XOneIA-og.jpg", es: "XOne IA", en: "XOne AI", built: true },
  { slug: "instrucciones-actualizacion-movilidad-i-de", date: "2023-10-26", image: "Logo_Iberdrola_2023.jpg", es: "Actualización movilidad. Instrucciones para dispositivos con aplicaciones de i-DE", en: "Mobility update: instructions for devices with i-DE apps", built: true },
  { slug: "mas4win", date: "2022-07-19", image: "Imagen369-og.jpg", es: "Sistema predictivo basado en nuevas tecnologías de digitalización", en: "A predictive system based on new digitalization technologies", built: true },
  { slug: "tendencias-sat-blog", date: "2021-11-30", image: "Imagen2-9-300x138.png", es: "Tendencias en los servicios técnicos", en: "Trends in technical services", body: "tendencias-en-servicios-tecnicos", built: true },
  { slug: "blog-tecnologia-2022", date: "2021-11-24", es: "Blog tecnología 2022", en: "Technology blog 2022", built: true },
  { slug: "data-update", date: "2021-11-02", es: "Data update", en: "Data update", built: true },
  { slug: "xone-la-transformacion-digital-en-el-servicio-de-asistencia-tecnica", date: "2021-11-02", image: "ImagenSAT6-og.jpg", es: "XOne: la transformación digital en el Servicio de Asistencia Técnica", en: "XOne: digital transformation in field service", built: true },
  { slug: "xone-presente-en-la-global-smart-grids-innovation-hub-de-iberdrola", date: "2021-10-15", image: "Imagen52-og.jpg", es: "XOne presente en el Global Smart Grids Innovation Hub de Iberdrola", en: "XOne at Iberdrola's Global Smart Grids Innovation Hub", built: true },
  { slug: "move-around-badajoz-app", date: "2021-09-27", image: "Imagentubasaxone-og.jpg", es: "App Muévete por Badajoz", en: "Move around Badajoz app", orig: "en", pair: "muevete-con-nosotros", built: true },
  { slug: "xone-en-el-top-ten-de-soluciones-multiexperiencia-otra-vez", date: "2021-09-27", image: "XOnestaff21-og.jpg", es: "XOne, en el top ten de soluciones multiexperiencia, otra vez", en: "XOne in the top ten of multiexperience solutions, again", built: true },
  { slug: "muevete-con-nosotros", date: "2021-09-15", image: "Imagentubasaxone-og.jpg", es: "Nos movemos contigo", en: "We move with you", pair: "move-around-badajoz-app", built: true },
  { slug: "xone-recomendada-por-gartner-como-proveedor-de-desarrollos-low-code", date: "2021-05-03", image: "citizen-development-low-code-software-1011x440.jpeg", es: "XOne, recomendada por Gartner como proveedor de desarrollos low-code", en: "XOne recommended by Gartner as a low-code development provider", body: "xone-recomendada-por-gartner-como-uno-de-los-principales-proveedores-de-desarrollo-low-code", built: true },
  { slug: "xone-20th-anniversary", date: "2021-04-12", image: "Imagen20years-og.jpg", es: "XOne cumple 20 años", en: "XOne 20th anniversary", orig: "en", pair: "xone-cumple-20-anos", built: true },
  { slug: "xone-cumple-20-anos", date: "2021-04-09", image: "MicrosoftTeams-image-1_2-og.jpg", es: "XOne cumple 20 años", en: "XOne turns 20", pair: "xone-20th-anniversary", built: true },
  { slug: "xone-in-the-worlds-top-multi-experience-mobile-app-development", date: "2020-10-06", image: "XOneMQGARTNER.jpg", es: "XOne, en el top mundial de desarrollo de apps móviles multiexperiencia", en: "XOne, in the world's top multi-experience mobile app development", orig: "en", pair: "xone-en-el-top-mundial-de-desarrollo-de-apps-moviles-multiexperiencia" },
  { slug: "xone-recognized-as-an-innovative-entity", date: "2020-10-05", image: "IMAGEN-CERTIFICADO-ENTIDAD-INNOVADORA-EN-BLOCKPCT1-1024x995-og.jpg", es: "XOne, reconocida como entidad innovadora", en: "XOne, recognized as an innovative entity", orig: "en", pair: "xone-reconocida-como-entidad-innovadora" },
  { slug: "noticia-blog-ia", date: "2020-08-05", es: "Cómo incorporar la inteligencia artificial en tu negocio", en: "How to bring artificial intelligence into your business" },
  { slug: "xone-en-el-top-mundial-de-desarrollo-de-apps-moviles-multiexperiencia", date: "2020-07-16", image: "XOneMQGARTNER.jpg", es: "XOne, en el top mundial de desarrollo de apps móviles multiexperiencia", en: "XOne, in the world's top multiexperience mobile app development", pair: "xone-in-the-worlds-top-multi-experience-mobile-app-development" },
  { slug: "xone-reconocida-como-entidad-innovadora", date: "2020-07-03", image: "IMAGEN-CERTIFICADO-ENTIDAD-INNOVADORA-EN-BLOCKPCT1-1024x995-og.jpg", es: "XOne, reconocida como entidad innovadora", en: "XOne, recognized as an innovative entity", pair: "xone-recognized-as-an-innovative-entity" },
  { slug: "digitalizacion-de-cementerios-y-tanatorios-con-realidad-aumentada", date: "2020-04-03", image: "cemetery-1543543_1280-og.jpg", es: "XOne al servicio de las startups", en: "XOne at the service of start-ups" },
  { slug: "xone-la-tecnologia-que-impulsa-tu-servicio-de-carsharing", date: "2020-03-09", image: "MINITS-og.jpg", es: "XOne, la tecnología que impulsa tu servicio de carsharing", en: "XOne, the technology that drives your carsharing service", pair: "xone-the-technology-that-drives-your-carsharing-service" },
  { slug: "xone-the-technology-that-drives-your-carsharing-service", date: "2020-03-09", image: "MINITS-og.jpg", es: "XOne, la tecnología que impulsa tu servicio de carsharing", en: "XOne, the technology that drives your carsharing service", orig: "en", pair: "xone-la-tecnologia-que-impulsa-tu-servicio-de-carsharing" },
  { slug: "insurance-revolution", date: "2019-12-05", image: "Imagen2-5-og.jpg", es: "Insurance Revolution", en: "Insurance Revolution" },
  { slug: "9256", date: "2019-10-14", image: "ImagenLOGISTICA-1-og.jpg", es: "XOne, la transformación inteligente del sector logístico", en: "XOne, the smart transformation of the logistics sector" },
  { slug: "xone-patrocinador-evento-insurance-revolution", date: "2019-10-14", image: "ImagenINSURANCE-og.jpg", es: "XOne patrocinador del evento Insurance Revolution", en: "XOne sponsors the Insurance Revolution event" },
  { slug: "xone-plataforma-mas-utilizada-de-espana", date: "2019-10-14", image: "Imagenequipoxone-og.jpg", es: "XOne, plataforma más utilizada de España", en: "XOne, the most widely used platform in Spain" },
  { slug: "xone-entre-las-plataformas-multiexperience-mas-importantes-del-mundo-segun-gartner", date: "2019-07-23", image: "GARTNERMQ-og.jpg", es: "XOne, entre las plataformas «multiexperience» más importantes del mundo, según Gartner", en: "XOne, among the world's most important multiexperience platforms, according to Gartner" },
  { slug: "la-tecnologia-es-un-filon-en-extremadura", date: "2019-07-15", image: "Imagennoticia-og.jpg", es: "La tecnología es un filón en Extremadura", en: "Technology is a gold mine in Extremadura" },
  { slug: "isat-app-corporativa-para-servicio-tecnico-de-istobal", date: "2019-06-18", image: "iSAT3-og.jpg", es: "iSAT, app corporativa para el servicio técnico de Istobal", en: "iSAT, the corporate app for Istobal's technical service" },
  { slug: "conferencia-de-crecimiento-tecnologico-e-innovacion-de-gartner-2019", date: "2019-06-14", image: "ImagenNew-og.jpg", es: "Conferencia de Gartner sobre Crecimiento Tecnológico e Innovación, Londres 2019", en: "Gartner Tech Growth and Innovation Conference, London 2019", pair: "gartner-tech-growth-and-innovation-conference-2019" },
  { slug: "la-tecnologia-movil-catalizador-del-desarrollo-empresarial-en-el-sector-energetico", date: "2019-06-14", image: "MESADEBATE-og.jpg", es: "La movilidad, catalizador del desarrollo empresarial en el sector energético", en: "Mobile tech, catalyst of business development in the energy and utilities sector", pair: "mobile-technology-catalyst-of-business-development-in-the-sector-of-energy-and-utilities" },
  { slug: "encuentro-tecnologico-transfronterizo", date: "2019-06-07", image: "4592e272-4861-4fad-965d-ba70b06c4c38.jpg", es: "Encuentro Tecnológico Transfronterizo", en: "Cross-border Technology Meeting" },
  { slug: "logistica-y-movilidad-empresarial-4-0", date: "2019-06-07", image: "d1803e93-1eb9-496d-92d5-527deed6bfce-og.jpg", es: "Logística y movilidad empresarial 4.0", en: "Logistics and enterprise mobility 4.0" },
  { slug: "gartner-tech-growth-and-innovation-conference-2019", date: "2019-05-28", image: "ImagenNew-og.jpg", es: "Conferencia de Gartner sobre Crecimiento Tecnológico e Innovación, Londres 2019", en: "Gartner Tech Growth and Innovation Conference 2019", orig: "en", pair: "conferencia-de-crecimiento-tecnologico-e-innovacion-de-gartner-2019" },
  { slug: "mobile-technology-catalyst-of-business-development-in-the-sector-of-energy-and-utilities", date: "2019-05-28", image: "MESADEBATE-og.jpg", es: "La movilidad, catalizador del desarrollo empresarial en el sector energético", en: "Mobile tech, catalyst of business development in the energy and utilities field", orig: "en", pair: "la-tecnologia-movil-catalizador-del-desarrollo-empresarial-en-el-sector-energetico" },
  { slug: "sacyrinnovativevision-2", date: "2019-05-20", image: "carsharing.jpg", es: "Carsharing: movilidad móvil", en: "Carsharing: mobile mobility", orig: "en", pair: "sacyrpremiomovilidad-2" },
  { slug: "sacyrpremiomovilidad-2", date: "2019-05-20", image: "carsharing-e1561549370260.jpg", es: "Carsharing: movilidad móvil", en: "Carsharing: mobile mobility", pair: "sacyrinnovativevision-2" },
  { slug: "blogdevops", date: "2019-04-05", es: "¿Qué se necesita para que un negocio crezca?", en: "What does it take for a business to grow?" },
  { slug: "blognoticiadatos", date: "2019-02-13", es: "La lucha por los datos", en: "The battle for data" },
  { slug: "sacyrpremiomovilidad", date: "2019-01-20", image: "sacyr-og.jpg", es: "Sacyr premia la visión innovadora de la movilidad", en: "Sacyr rewards an innovative vision of mobility" },
  { slug: "blogherramientasxone", date: "2019-01-11", es: "Herramientas para crear apps: sin código, low-code y multiplataforma", en: "App-building tools: no-code, low-code and cross-platform" },
  { slug: "futuromovilidad", date: "2019-01-11", es: "Tecnologías digitales", en: "Digital technologies" },
  { slug: "blognuevosretosxone", date: "2019-01-10", es: "Te contamos todas las novedades", en: "All the latest news" },
  { slug: "blognews", date: "2018-11-15", es: "Los beneficios de la IA", en: "The benefits of AI" },
  { slug: "gartner-symposium-itxpo-barcelona-2018-2", date: "2018-11-09", image: "GARTNERBARNA2-1024x768.jpg", es: "XOne asiste al Gartner Symposium/ITxpo Barcelona 2018", en: "XOne attends Gartner Symposium/ITxpo Barcelona 2018", pair: "gartner-symposium-itxpo-barcelona-2018-2-2" },
  { slug: "gartner-symposium-itxpo-barcelona-2018-2-2", date: "2018-11-09", image: "GARTNERBARNA2-1024x768.jpg", es: "XOne asiste al Gartner Symposium/ITxpo Barcelona 2018", en: "XOne attends Gartner Symposium/ITxpo Barcelona 2018", orig: "en", pair: "gartner-symposium-itxpo-barcelona-2018-2" },
  { slug: "adwen", date: "2018-10-19", image: "siemens-gamesa-1.jpg", es: "Adwen", en: "Adwen" },
  { slug: "gestion-de-incidencias-de-iberdrola", date: "2018-10-19", image: "IBERDROLA-1-b.jpg", es: "Gestión de incidencias de Iberdrola", en: "Iberdrola incident management" },
  { slug: "movilizacion-servicio-tecnico-de-navantia", date: "2018-10-19", image: "NAVANTIA.jpg", es: "Movilización del servicio técnico de Navantia", en: "Mobilizing Navantia's technical service" },
  { slug: "pavasal", date: "2018-10-19", image: "pavasal2.jpg", es: "Pavasal", en: "Pavasal" },
  { slug: "cruz-roja-apuesta-por-xone", date: "2018-10-18", image: "cruzroja3.jpg", es: "Cruz Roja apuesta por XOne", en: "Red Cross chooses XOne" },
  { slug: "entrega-de-maquinaria-a-clientes-de-euro-gruas", date: "2018-10-18", image: "eurogruas-1.jpg", es: "Entrega de maquinaria a clientes de Euro Grúas", en: "Machinery delivery to Euro Grúas customers" },
  { slug: "xone-presente-en-el-gartner-digital-workplace-summit-de-londres-2018", date: "2018-10-18", image: "gartner2-og.jpg", es: "XOne presente en el Gartner Digital Workplace Summit de Londres 2018", en: "XOne at the Gartner Digital Workplace Summit, London 2018" },
  { slug: "boid24", date: "2018-10-17", image: "boid24.jpg", es: "Boid24", en: "Boid24" },
  { slug: "gestion-de-movilidad-empresarial-emm", date: "2018-10-17", image: "emm-350x350.png", es: "Gestión de movilidad empresarial (EMM)", en: "Enterprise mobility management (EMM)" },
  { slug: "quierete-app-cruz-roja", date: "2018-10-17", image: "quierete2-og.jpg", es: "Quiérete", en: "Quiérete" },
  { slug: "vectalia-gestion-de-ora-servicio-de-estacionamiento-regulado", date: "2018-10-17", image: "vectalia2.png.jpg", es: "Vectalia: gestión de la ORA, servicio de estacionamiento regulado", en: "Vectalia: managing the ORA regulated parking service" },
];

/** Slugs de noticias ya migradas (rutas propias en esta web). */
export const BUILT_NEWS = NEWS.filter((n) => n.built).map((n) => n.slug);
