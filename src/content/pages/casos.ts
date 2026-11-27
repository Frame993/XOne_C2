// Lote 3 · Casos de éxito. Textos reales de xone.es/casos-de-exito-xone/{caso}/ y su versión /en/ (24-nov-2026).
// Reescrituras propias (titulares de sección): ver CONTENT_MAP.md › «Páginas · lote 3».
import type { IconName } from "../../components/ui/Icon";
import { G, type Page, type PageDoc } from "./types";

const PDF = (f: string) => `https://xone.es/media/${f}`;
const LIST = "casos-de-exito-xone";

/** Ficha corta de cada caso: alimenta el listado y el «sigue explorando» de cada caso. */
export const CASES: { slug: string; name: string; icon: IconName; es: { area: string; summary: string }; en: { area: string; summary: string } }[] = [
  { slug: "minits", name: "MiniTS", icon: "map", es: { area: "Servicio de carsharing", summary: "Reserva, acceso al vehículo y facturación de un carsharing eléctrico, todo desde el móvil." }, en: { area: "Carsharing service", summary: "Booking, vehicle access and billing for an electric carsharing service, all from the phone." } },
  { slug: "iberdrola", name: "Iberdrola", icon: "activity", es: { area: "Asistencia técnica en subestaciones", summary: "Siete apps de mantenimiento e incidencias, más de 2.000 dispositivos y un 30 % de ahorro." }, en: { area: "Technical assistance at substations", summary: "Seven maintenance and incident apps, more than 2,000 devices and 30% savings." } },
  { slug: "gamesa", name: "Gamesa", icon: "loop", es: { area: "Gestión operativa de fuerza de campo", summary: "La operativa de los técnicos de parques eólicos, en tiempo real y en más de 3.600 dispositivos." }, en: { area: "Field force operations management", summary: "Wind farm technicians' operations, in real time and on more than 3,600 devices." } },
  { slug: "sacyr", name: "Sacyr", icon: "pin", es: { area: "Estacionamiento regulado", summary: "Sanciones, grúas y recaudación de parquímetros con dos apps de movilidad." }, en: { area: "Regulated parking", summary: "Fines, towing and parking meter collection with two mobility apps." } },
  { slug: "navantia", name: "Navantia", icon: "cpu", es: { area: "Mantenimientos preventivos y correctivos", summary: "Órdenes de trabajo del mantenimiento de sus astilleros, integradas con SAP R3." }, en: { area: "Preventive and corrective maintenance", summary: "Shipyard maintenance work orders, integrated with SAP R3." } },
  { slug: "orenes", name: "Orenes", icon: "headset", es: { area: "Mantenimiento de máquinas de juego", summary: "Comerciales, recaudadores y clientes, movilizados con tres apps." }, en: { area: "Gaming machine maintenance", summary: "Sales reps, collectors and customers, mobilized with three apps." } },
  { slug: "loomis", name: "Loomis", icon: "lock", es: { area: "Gestión de bienes y mercancías", summary: "Traslado de fondos y valores con datos sincronizados, también sin conexión." }, en: { area: "Management of assets and goods", summary: "Cash and valuables transport with synced data, offline too." } },
  { slug: "istobal", name: "Istobal", icon: "refresh", es: { area: "Mantenimiento de estaciones de lavado", summary: "Mantenimiento e incidencias de su red de centros de lavado con iSAT." }, en: { area: "Vehicle wash station maintenance", summary: "Maintenance and incidents across its wash center network with iSAT." } },
  { slug: "jcarrion", name: "JCarrion", icon: "briefcase", es: { area: "Gestión de transporte de mercancías", summary: "Órdenes de transporte, tareas y subtareas de su flota, integradas con SAP HANA." }, en: { area: "Freight transport management", summary: "Transport orders, tasks and subtasks for its fleet, integrated with SAP HANA." } },
  { slug: "cofares", name: "Cofares", icon: "search", es: { area: "Visión artificial móvil y realidad aumentada", summary: "Visión artificial, realidad aumentada e IA en su app de distribución farmacéutica." }, en: { area: "Mobile computer vision and augmented reality", summary: "Computer vision, AR and AI in its pharmaceutical distribution app." } },
  { slug: "ingeteam", name: "Ingeteam", icon: "shield", es: { area: "App de prevención de riesgos laborales", summary: "Mantenimiento de parques eólicos y prevención de riesgos laborales en una app." }, en: { area: "Occupational risk prevention app", summary: "Wind farm maintenance and occupational risk prevention in one app." } },
  { slug: "tubasa-buskme", name: "Tubasa", icon: "phone", es: { area: "App de pago del trayecto en el bus urbano", summary: "Pago, recargas y bus a demanda en Badajoz, desde el móvil." }, en: { area: "Urban bus fare payment app", summary: "Payments, top-ups and on-demand buses in Badajoz, from the phone." } },
];

/** Los tres casos siguientes (en bucle) como «sigue explorando». */
const nextCases = (slug: string, lang: "es" | "en"): NonNullable<PageDoc["related"]> => {
  const i = CASES.findIndex((c) => c.slug === slug);
  return [1, 2, 3].map((k) => CASES[(i + k) % CASES.length]).map((c) => ({ label: c.name, desc: c[lang].area, slug: `${LIST}/${c.slug}`, icon: c.icon }));
};
const crumb = { es: { label: "Casos de éxito", slug: LIST }, en: { label: "Success stories", slug: LIST } };

export const casos: Record<string, Page> = {
  /* ------------------------------------------------------------------ */
  [`${LIST}/minits`]: {
    es: {
      group: G.recursos, crumb: crumb.es, relatedTitle: { title: "Otros clientes", accent: "que confían en XOne" }, related: nextCases("minits", "es"),
      seo: { title: "Caso de éxito: app de carsharing eléctrico para MiniTS | XOne", description: "XOne desarrolló para MiniTS (Grupo Ruiz) una app móvil que gestiona todo el servicio de carsharing eléctrico: reserva, acceso al vehículo y facturación." },
      hero: { title: "App de carsharing eléctrico", accent: "para MiniTS", lead: "XOne desarrolló para MiniTS (Grupo Ruiz) una app móvil que gestiona todo el servicio de carsharing eléctrico: reserva, acceso al vehículo y facturación.", labels: ["MiniTS", "Carsharing", "Bluetooth", "OCR"], secondary: { label: "Descargar el caso en PDF", href: PDF("CASOUSOMINITS.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "Proyecto", value: "App de movilidad para vehículos compartidos" },
          { label: "Sistemas operativos", value: "Android e iOS" },
          { label: "Desarrollo", value: "6 semanas" },
          { label: "Flota", value: "Más de 50 vehículos con XOne" },
        ] },
        {
          type: "rows", index: "Proyecto", eyebrow: "Reto y respuesta", title: "Del desafío", accent: "a la solución XOne",
          items: [
            { title: "El desafío", text: ["Impulsar la movilidad eléctrica y descongestionar los accesos a las vías públicas con un servicio flexible de carsharing.", "Ante la necesidad creciente de descongestionar el tráfico en los centros urbanos y evitar problemas de aparcamiento, el Grupo Ruiz quería llevar el carsharing flexible a las ciudades más pequeñas. Necesitaba un instrumento inteligente para controlar una flota de medio centenar de vehículos 100 % eléctricos durante cortos periodos de tiempo, en la que todo el proceso —desde la reserva del coche y el acceso al vehículo hasta la facturación según el tiempo de uso y el kilometraje— se realizara a través de una aplicación móvil."] },
            { title: "La solución XOne", visual: "carshare", text: ["Una aplicación móvil que gestiona fácilmente el servicio de vehículos compartidos.", "Siguiendo las directrices del cliente, XOne desarrolló una aplicación de movilidad que gestiona todo el servicio de coche compartido desde el móvil, de manera que no se necesita llave para ponerlo en marcha ni para detenerlo. Su diseño es sencillo y ofrece una experiencia muy intuitiva.", "La usan los usuarios finales que quieren contratar un vehículo: lo reservan con la app y pagan por el uso que hacen de él, por tiempo o por kilometraje, con facturación a final de mes."] },
          ],
        },
        { type: "chips", index: "Uso", eyebrow: "Cómo funciona", title: "Siete pasos para", accent: "moverte por minutos", numbered: true, cols: 4, subtitle: "Usa y paga un vehículo el tiempo que lo utilices y aparca donde te venga mejor, dentro de las zonas establecidas. Una forma de desplazarse más económica y sostenible.", items: ["Descarga la app móvil", "Date de alta en la app", "Localiza tu vehículo más cercano", "Abre y cierra el vehículo con la app", "Conduce donde quieras", "Aparca donde mejor te venga", "Paga por el tiempo que lo uses"] },
        { type: "chips", index: "Tecnología", eyebrow: "Capacidades de la app", title: "Lo que hace posible", accent: "el servicio", cols: 3, items: ["Arranque y parada del vehículo por Bluetooth", "Interacción con el dispositivo de control del vehículo", "Fotografías y vídeos", "Captura de datos de geolocalización", "Control de tiempos", "Integración con métodos de control de pagos", "OCR", "Integración con OpenStreetMap", "Aplicación central para gestionar datos y cuentas de usuario"] },
      ],
    },
    en: {
      group: G.recursos, crumb: crumb.en, relatedTitle: { title: "Other customers", accent: "who trust XOne" }, related: nextCases("minits", "en"),
      seo: { title: "Success story: electric carsharing app for MiniTS | XOne", description: "XOne developed a mobile app for MiniTS (Grupo Ruiz) that manages the entire electric carsharing service: booking, vehicle access and billing." },
      hero: { title: "Electric carsharing app", accent: "for MiniTS", lead: "XOne developed a mobile app for MiniTS (Grupo Ruiz) that manages the entire electric carsharing service: booking, vehicle access and billing.", labels: ["MiniTS", "Carsharing", "Bluetooth", "OCR"], secondary: { label: "Download the case study (PDF)", href: PDF("CASOUSOMINITS.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "Project", value: "Mobility app for shared vehicles" },
          { label: "Operating systems", value: "Android and iOS" },
          { label: "Development", value: "6 weeks" },
          { label: "Fleet", value: "More than 50 vehicles with XOne" },
        ] },
        {
          type: "rows", index: "Project", eyebrow: "Challenge and response", title: "From the problem", accent: "to the XOne solution",
          items: [
            { title: "The challenge", text: ["Promoting electric mobility and easing congestion on public roads with a flexible carsharing service.", "Faced with the growing need to ease traffic congestion in city centers and avoid parking problems, Grupo Ruiz wanted to bring flexible carsharing to smaller cities. It needed an intelligent tool to manage a fleet of some fifty 100% electric vehicles for short periods of time, in which the entire process (from booking the car and accessing the vehicle to billing based on usage time and mileage) would be carried out through a mobile application."] },
            { title: "The XOne solution", visual: "carshare", text: ["A mobile application that easily manages the shared vehicle service.", "Following the customer's guidelines, XOne developed a mobility application that runs the whole car-sharing service from the phone, so no key is needed to start or stop the vehicle. Its design is simple and offers a very intuitive user experience.", "It is used by end users who want to rent a vehicle: they book it in advance through the app and pay according to their use of it, by time or by mileage, with billing at the end of the month."] },
          ],
        },
        { type: "chips", index: "Usage", eyebrow: "How it works", title: "Seven steps to", accent: "get around by the minute", numbered: true, cols: 4, subtitle: "Use a vehicle, pay for the time you use it and park wherever suits you best, within the designated areas. A more economical and sustainable way of getting around.", items: ["Download the mobile app", "Sign up in the app", "Find your nearest vehicle", "Unlock and lock the vehicle with the app", "Drive wherever you want", "Park wherever suits you best", "Pay for the time you use it"] },
        { type: "chips", index: "Technology", eyebrow: "App capabilities", title: "What makes", accent: "the service possible", cols: 3, items: ["Bluetooth vehicle start and stop", "Interaction with the vehicle's control device", "Photos and videos", "Geolocation data capture", "Time tracking", "Integration with payment control methods", "OCR", "Integration with OpenStreetMap", "Central application to manage user data and accounts"] },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  [`${LIST}/iberdrola`]: {
    es: {
      group: G.recursos, crumb: crumb.es, relatedTitle: { title: "Otros clientes", accent: "que confían en XOne" }, related: nextCases("iberdrola", "es"),
      seo: { title: "Caso de éxito: apps de mantenimiento e incidencias en subestaciones para Iberdrola | XOne", description: "Iberdrola movilizó con XOne sus procesos de mantenimiento e incidencias en subestaciones eléctricas: siete apps, más de 2.000 dispositivos y un 30 % de ahorro." },
      hero: { title: "Mantenimiento e incidencias en subestaciones", accent: "para Iberdrola", lead: "Iberdrola movilizó con XOne sus procesos de mantenimiento e incidencias en subestaciones eléctricas: siete apps, más de 2.000 dispositivos y un 30 % de ahorro.", labels: ["Iberdrola", "Oracle", "JIRA", "Offline"], secondary: { label: "Descargar el caso en PDF", href: PDF("CASODEUSOIBERDROLA-copia.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "Presencia", value: "Más de 70 países" },
          { label: "Dispositivos", value: "Más de 2.000 movilizados con XOne" },
          { label: "Integración", value: "Oracle" },
          { label: "Sistemas operativos", value: "Android, Windows y BlackBerry" },
        ] },
        {
          type: "rows", index: "Proyecto", eyebrow: "Reto y respuesta", title: "Del desafío", accent: "a la solución XOne",
          items: [
            { title: "El desafío", text: ["Implantar procesos operativos en dispositivos móviles para mejorar la eficacia y la descentralización del servicio.", "La gran complejidad de los servicios de Iberdrola Distribución hizo necesaria la implantación de procesos operativos en los dispositivos móviles, así como dotar de herramientas óptimas a las brigadas que operan en campo.", "La movilización empezó con las primeras aplicaciones sobre teléfonos BlackBerry. Con el declive de esa solución, el departamento de Sistemas de Control de Iberdrola optó por migrar su aplicación de gestión de incidencias a Android for Work, una solución empresarial abierta a múltiples fabricantes, soportada por Google."] },
            { title: "La solución XOne", visual: "fleet", text: ["Herramientas de movilidad dotadas de recursos de mantenimiento y desarrollo.", "XOne, el nuevo entorno de trabajo empresarial adoptado por Iberdrola, está formado por un catálogo de apps según el perfil del usuario o del dispositivo, con recursos móviles de mantenimiento y desarrollo habilitados con IA y una infraestructura de comunicaciones dedicada, integrada con JIRA.", "Las apps permiten atender en primera instancia las incidencias con los dispositivos, en un entorno securizado y con comunicaciones eficientes. Además, se puede trabajar sin cobertura en campo abierto, con el máximo nivel de seguridad y fiabilidad, sin perder ningún dato."] },
          ],
        },
        {
          type: "rows", index: "Catálogo", eyebrow: "Siete aplicaciones", title: "Una app para cada", accent: "proceso de la red",
          items: [
            { title: "Replanteos: gestión de renovaciones", text: ["Recoge información para el Sistema de Renovación de Instalaciones (SRI), que gestiona el despliegue de dispositivos y la renovación de instalaciones en explotación.", "Hereda la funcionalidad de WebSTAR y WebOCR, y se desarrolla con las herramientas de XOne sobre la infraestructura de SETOM (servidores Windows/Linux y base de datos Oracle)."], note: "Implantación: 4 semanas." },
            { title: "Medistel: incidencias de la red de distribución", text: ["Integrada con REPOS, gestiona las incidencias y los trabajos del sistema SPECTRUM. La usan tanto las brigadas UTD de Iberdrola como el personal de empresas contratistas."], list: ["Reasignación de incidencias", "Cierre de incidencias", "Asociar imágenes", "Declarar el ámbito real", "Baja tensión y actuaciones de media tensión", "Cierre del parte de operación (SAP)"], note: "Implantación: 10 semanas." },
            { title: "Envío seguro de fotografías", text: ["Complemento de otras aplicaciones móviles, programadas o no con XOne, que necesiten compartir fotografías de forma segura y confidencial con los sistemas de operación."], note: "Implantación: 1 semana." },
            { title: "Cuadro de mando de incidencias para directores", text: ["Muestra los datos resumidos de los centros de control y de las regiones de Iberdrola Distribución: incidencias en curso, clientes afectados y energía no suministrada."], note: "Implantación: 3 semanas." },
            { title: "Damage Assessment Tool: notificación de daños", text: ["Integrada con REPOS, permite notificar averías y daños en los activos de alta y media tensión. Acorta los tiempos y facilita la gestión de incidencias en el COD, sobre todo en situaciones de saturación."], note: "Implantación: 3 semanas." },
            { title: "Llamadas Mobile: registros de llamada", text: ["Complementa la herramienta web de Llamadas al COD y la interfaz con el Sistema de Información a Cliente (SIC): en campo se crean registros de llamada que el sistema convierte en una incidencia de baja tensión o asocia a una existente."], note: "Implantación: 3 semanas." },
            { title: "Descarga de imágenes de mapas de losetas", text: ["Aplicación Windows que descarga áreas de Google Maps con el zoom y el modo configurados, convirtiendo las coordenadas GPS en posiciones X,Y. Se utiliza en España y en EE. UU."], note: "Implantación: 1 semana." },
          ],
        },
        { type: "quote", text: "Un 30 % de ahorro al integrar la movilidad en los procesos diarios, con un trabajo mucho más ágil para los operarios de campo.", source: "Resultados · Iberdrola" },
        { type: "chips", index: "Resultados", eyebrow: "Capacidades", title: "Lo que aporta la solución", accent: "en el día a día", cols: 3, items: ["Supervisión del centro de control: averías, asignación e intervenciones", "Replanteos", "Retenes", "Introducción de elementos de la red", "Consulta de documentos técnicos", "Actualizaciones push", "Wearables y operativa guiada por voz", "Mapas de calor y análisis térmico por infrarrojos", "Fotografías y vídeos", "Visita previa de descargos y descargos con y sin tensión", "Visor de diagrama eléctrico", "Seguimiento de constantes vitales"] },
      ],
    },
    en: {
      group: G.recursos, crumb: crumb.en, relatedTitle: { title: "Other customers", accent: "who trust XOne" }, related: nextCases("iberdrola", "en"),
      seo: { title: "Success story: maintenance and incident apps for Iberdrola substations | XOne", description: "Iberdrola mobilized its substation maintenance and incident processes with XOne: seven apps, more than 2,000 devices and 30% savings." },
      hero: { title: "Substation maintenance and incidents", accent: "for Iberdrola", lead: "Iberdrola mobilized its substation maintenance and incident processes with XOne: seven apps, more than 2,000 devices and 30% savings.", labels: ["Iberdrola", "Oracle", "JIRA", "Offline"], secondary: { label: "Download the case study (PDF)", href: PDF("CASODEUSOIBERDROLA-copia.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "Presence", value: "More than 70 countries" },
          { label: "Devices", value: "More than 2,000 mobilized with XOne" },
          { label: "Integration", value: "Oracle" },
          { label: "Operating systems", value: "Android, Windows and BlackBerry" },
        ] },
        {
          type: "rows", index: "Project", eyebrow: "Challenge and response", title: "From the problem", accent: "to the XOne solution",
          items: [
            { title: "The challenge", text: ["Deploying operational processes on mobile devices to improve the efficiency and decentralization of the service.", "The great complexity of Iberdrola Distribución's services made it necessary to deploy operational processes on mobile devices, and to provide the crews working in the field with the best possible tools.", "The mobilization began with the first applications on BlackBerry phones. As that solution declined, Iberdrola's Control Systems department chose to migrate its incident management application to Android for Work, an enterprise solution open to multiple manufacturers, backed by Google."] },
            { title: "The XOne solution", visual: "fleet", text: ["Mobility tools equipped with maintenance and development resources.", "XOne, the new enterprise work environment adopted by Iberdrola, consists of a catalog of apps based on the user or device profile, with AI-enabled mobile maintenance and development resources and a dedicated communications infrastructure integrated with JIRA.", "The apps enable first-line handling of device incidents, in a secure environment with efficient communications. They also work without coverage in open country, with the highest level of security and reliability, so no data is lost."] },
          ],
        },
        {
          type: "rows", index: "Catalog", eyebrow: "Seven applications", title: "One app for each", accent: "network process",
          items: [
            { title: "Replanteos (site surveys): renewal management", text: ["Collects information for the Installation Renewal System (SRI), which manages device deployment and renewal work at facilities in operation.", "It inherits the functionality of WebSTAR and WebOCR, and is built with the XOne tools on SETOM's infrastructure (Windows/Linux servers and Oracle database)."], note: "Implementation: 4 weeks." },
            { title: "Medistel: distribution network incidents", text: ["Integrated with REPOS, it manages incidents and work orders from the SPECTRUM control system. It is used both by Iberdrola's UTD crews and by contractor staff."], list: ["Reassigning incidents", "Closing incidents", "Attaching images", "Declaring the actual scope", "Low voltage and medium-voltage interventions", "Closing the operation report (SAP)"], note: "Implementation: 10 weeks." },
            { title: "Secure photo sending", text: ["Complements other mobile applications, built with XOne or not, that need to share photographs securely and confidentially with operational systems."], note: "Implementation: 1 week." },
            { title: "Incident dashboard for directors", text: ["Displays summarized data on Iberdrola Distribución's control centers and regions: ongoing incidents, affected customers and energy not supplied."], note: "Implementation: 3 weeks." },
            { title: "Damage Assessment Tool: damage reporting", text: ["Integrated with REPOS, it lets authorized users report faults and damage to high- and medium-voltage assets. It shortens response times and makes incident management easier at the COD, especially when it is overloaded."], note: "Implementation: 3 weeks." },
            { title: "Llamadas Mobile: call records", text: ["Complements the Llamadas al COD web tool and the interface with the Customer Information System (SIC): field users create call records that the system turns into a new low-voltage incident or links to an existing one."], note: "Implementation: 3 weeks." },
            { title: "Map tile image download", text: ["A Windows application that downloads Google Maps areas with the configured zoom and mode, converting GPS coordinates into X,Y positions. It is used in Spain and the US."], note: "Implementation: 1 week." },
          ],
        },
        { type: "quote", text: "30% savings from integrating mobility into daily processes, with much smoother work for field operators.", source: "Results · Iberdrola" },
        { type: "chips", index: "Results", eyebrow: "Capabilities", title: "What the solution delivers", accent: "day to day", cols: 3, items: ["Control center supervision: faults, assignment and interventions", "Site surveys", "On-call crews", "Entry of network elements", "Access to technical documents", "Push updates", "Wearables and voice-guided operations", "Heat maps and infrared thermal analysis", "Photos and videos", "Pre-outage visits and outages with and without voltage", "Electrical diagram viewer", "Vital signs monitoring"] },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  [`${LIST}/gamesa`]: {
    es: {
      group: G.recursos, crumb: crumb.es, relatedTitle: { title: "Otros clientes", accent: "que confían en XOne" }, related: nextCases("gamesa", "es"),
      seo: { title: "Caso de éxito: movilización del trabajo de campo para Siemens Gamesa | XOne", description: "Siemens Gamesa gestiona, automatiza y monitoriza en tiempo real la operativa de sus técnicos de campo con XOne SAT, en más de 3.600 dispositivos." },
      hero: { title: "El trabajo de campo, movilizado", accent: "para Siemens Gamesa", lead: "Siemens Gamesa gestiona, automatiza y monitoriza en tiempo real la operativa de sus técnicos de campo con XOne SAT, en más de 3.600 dispositivos.", labels: ["Gamesa", "XOne SAT", "SAP", "OFSC"], secondary: { label: "Descargar el caso en PDF", href: PDF("CASOUSOGAMESA-1.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "Sistemas operativos", value: "Android, Windows e iOS" },
          { label: "Integración", value: "SAP y Oracle Field Service Cloud" },
          { label: "Desarrollo", value: "16 semanas" },
          { label: "Dispositivos", value: "Más de 3.600" },
        ] },
        {
          type: "rows", index: "Proyecto", eyebrow: "Reto y respuesta", title: "Del desafío", accent: "a la solución XOne",
          items: [
            { title: "El desafío", visual: "offline", text: ["Gestionar la operativa diaria de los trabajadores de campo, eliminando las barreras de conectividad.", "Siemens Gamesa, líder tecnológico mundial en energías renovables, buscaba una metodología que hiciera lo más eficiente posible la gestión de tareas de su plantilla de campo: menos tiempos de traslado y costes, más productividad del personal itinerante, respuestas más rápidas y usuarios más satisfechos.", "Uno de los principales problemas era la conexión de los dispositivos en campo: la falta de cobertura en muchas de las zonas en las que opera suponía una pérdida importante de productividad."] },
            { title: "La solución XOne", text: ["Gestiona, automatiza y monitoriza en tiempo real la operativa del trabajo de campo, de forma rápida y fácil para el usuario final.", "La solución automatiza, controla y gestiona todos los procesos del personal de mantenimiento de los parques eólicos, conectándolo con la empresa desde cualquier dispositivo, con seguridad mediante IDS y de forma transparente para el usuario. También gestiona el envío, el seguimiento y la recepción de las piezas para el montaje de los aerogeneradores.", "Las comunicaciones con la central son transparentes al usuario, que solo tiene que usar su aplicación. La plataforma trabaja en un entorno multiidioma e incluye un módulo de mantenimiento automático de la solución."] },
          ],
        },
        {
          type: "cells", index: "Funciones", eyebrow: "Qué aporta XOne SAT", title: "Cada fase de la operativa,", accent: "en una sola app", cols: 3,
          items: [
            { label: "Órdenes de trabajo", icon: "doc", text: "Aperturas, finalización, aprobación, replanificación y actualizaciones push." },
            { label: "Planificación", icon: "grid", text: "Generación de actividades, validación de usuarios (GACCESS), asignación optimizada, distribución en tiempo real y supervisión del centro de control." },
            { label: "Intervenciones", icon: "headset", text: "Detalle e historial, paradas técnicas, presencias en parques, control de tiempos y solicitud de materiales." },
            { label: "Averías", icon: "activity", text: "Averías de MT y BT, asignación por proximidad, seguimiento y finalización." },
            { label: "Descargos y cuadrillas", icon: "users", text: "Visita previa de descargos, descargos con y sin tensión, cuadrillas, retenes y replanteo." },
            { label: "Multiexperiencia", icon: "sparkle", text: "Wearables, operativa guiada por voz, machine learning para la vida útil de componentes, realidad aumentada, cámaras de infrarrojos e IoT." },
            { label: "Materiales", icon: "layers", text: "Visualización cartográfica, checklist, consulta y control de stocks, análisis térmicos y seguimiento de materiales." },
            { label: "Visualización", icon: "search", text: "Fotografías, documentos técnicos, generación de vídeo y visor de diagrama eléctrico." },
          ],
        },
      ],
    },
    en: {
      group: G.recursos, crumb: crumb.en, relatedTitle: { title: "Other customers", accent: "who trust XOne" }, related: nextCases("gamesa", "en"),
      seo: { title: "Success story: field work mobilization for Siemens Gamesa | XOne", description: "Siemens Gamesa manages, automates and monitors its field technicians' operations in real time with XOne SAT, on more than 3,600 devices." },
      hero: { title: "Field work, mobilized", accent: "for Siemens Gamesa", lead: "Siemens Gamesa manages, automates and monitors its field technicians' operations in real time with XOne SAT, on more than 3,600 devices.", labels: ["Gamesa", "XOne SAT", "SAP", "OFSC"], secondary: { label: "Download the case study (PDF)", href: PDF("CASOUSOGAMESA-1.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "Operating systems", value: "Android, Windows and iOS" },
          { label: "Integration", value: "SAP and Oracle Field Service Cloud" },
          { label: "Development", value: "16 weeks" },
          { label: "Devices", value: "More than 3,600" },
        ] },
        {
          type: "rows", index: "Project", eyebrow: "Challenge and response", title: "From the problem", accent: "to the XOne solution",
          items: [
            { title: "The challenge", visual: "offline", text: ["Managing the daily operations of field workers, eliminating connectivity barriers.", "Siemens Gamesa, a global technology leader in renewable energy, was looking for a methodology to make task management for its field workforce as efficient as possible: less travel time and cost, more productive mobile staff, faster responses and more satisfied users.", "One of the main problems was device connectivity in the field: the lack of coverage in many of the areas where it operates meant a significant loss of productivity."] },
            { title: "The XOne solution", text: ["Manage, automate and monitor field work operations in real time, quickly and easily for the end user.", "The solution automates, controls and manages every process of the wind farm maintenance staff, connecting them with the company from any device, secured through IDS and transparently for the user. It also manages the shipping, tracking and receipt of the parts needed to assemble the wind turbines.", "Communications with the central office are transparent to users, who only have to use their app. The platform works in a multilingual environment and includes an automatic maintenance module for the solution."] },
          ],
        },
        {
          type: "cells", index: "Features", eyebrow: "What XOne SAT delivers", title: "Every phase of operations,", accent: "in a single app", cols: 3,
          items: [
            { label: "Work orders", icon: "doc", text: "Opening, completion, approval, rescheduling and push updates." },
            { label: "Planning", icon: "grid", text: "Activity generation, user validation (GACCESS), optimized assignment, real-time distribution and control center supervision." },
            { label: "Interventions", icon: "headset", text: "Details and history, technical shutdowns, on-site presence at wind farms, time tracking and material requests." },
            { label: "Faults", icon: "activity", text: "MV and LV faults, assignment by proximity, tracking and closure." },
            { label: "Clearances and crews", icon: "users", text: "Pre-clearance visits, clearances with and without voltage, crews, on-call teams and site layout." },
            { label: "Multiexperience", icon: "sparkle", text: "Wearables, voice-guided operations, machine learning for component service life, augmented reality, infrared cameras and IoT." },
            { label: "Materials", icon: "layers", text: "Map visualization, checklists, stock inquiry and control, thermal analysis and material tracking." },
            { label: "Visualization", icon: "search", text: "Photographs, technical documents, video generation and electrical diagram viewer." },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  [`${LIST}/sacyr`]: {
    es: {
      group: G.recursos, crumb: crumb.es, relatedTitle: { title: "Otros clientes", accent: "que confían en XOne" }, related: nextCases("sacyr", "es"),
      seo: { title: "Caso de éxito: apps de gestión de zona azul y de rutas para Sacyr | XOne", description: "Sacyr movilizó con XOne la gestión del estacionamiento regulado (sanciones y grúas) y la recaudación de parquímetros con dos apps de movilidad." },
      hero: { title: "Zona azul y gestión de rutas", accent: "para Sacyr", lead: "Sacyr movilizó con XOne la gestión del estacionamiento regulado (sanciones y grúas) y la recaudación de parquímetros con dos apps de movilidad.", labels: ["Sacyr", "SQL Server", "Android", "Offline"], secondary: { label: "Descargar el caso en PDF", href: PDF("CASOUSOSACYR-1.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "Sistemas operativos", value: "Android" },
          { label: "Integración", value: "SQL Server y Web Service" },
          { label: "Desarrollo", value: "4 semanas" },
          { label: "Dispositivos", value: "Más de 200" },
        ] },
        {
          type: "rows", index: "Proyecto", eyebrow: "Reto y respuesta", title: "Del desafío", accent: "a la solución XOne",
          items: [
            { title: "El desafío", text: ["Control automático de las plazas de estacionamiento.", "Tras el notable incremento del parque de automóviles en las ciudades, Sacyr buscaba una nueva forma de gestión que le permitiera controlar automáticamente todas las plazas de aparcamiento y movilizar los procesos de las vías públicas: denuncias y multas, identificación de los vehículos retirados de la vía o gestión automatizada de rutas."] },
            { title: "La solución XOne", text: ["Una solución óptima para el guiado de plazas y la gestión de aparcamientos en las vías públicas, a la que siguió una segunda app para la gestión de rutas.", "El modelo exclusivo de integración de XOne incorpora la información rápidamente del dispositivo al sistema central de gestión municipal, sin intromisión entre ambos, con o sin cobertura. Además, garantiza comunicaciones seguras, ofrece una consola de administración remota de dispositivos y tiene cortos plazos de instalación."], list: ["Acortar los tiempos de respuesta", "Gestionar eficientemente los recursos humanos", "Facilitar la gestión al usuario", "Mejorar la calidad del servicio", "Ofrecer información al ciudadano"] },
          ],
        },
        {
          type: "rows", index: "Apps", eyebrow: "Dos soluciones móviles", title: "Sanciones, grúas", accent: "y recaudación",
          items: [
            { title: "App Gestión de Zona Azul", text: ["Una solución modular que moviliza la gestión de sanciones, el seguimiento técnico de las incidencias y las multas en la vía pública, en dos partes: la gestión de sanciones y la del servicio de grúas."], list: ["Estado de los operarios", "Asignación y aceptación de servicios", "Enganche con toma de matrícula", "Fotos y geolocalización del servicio", "Envíos y traspasos entre depósitos", "Gestión de vehículos abandonados", "Cobro con recibo municipal o tarjeta", "Mensajería entre central y dispositivos", "Firma digital e impresión de denuncias", "Botón de pánico y localización"] },
            { title: "App Gestión de Rutas", visual: "route", text: ["Solución móvil y web para tener más visibilidad, gestión y control de las tareas del personal que recauda el dinero depositado en los parquímetros. Para Android e iOS, desarrollada en 16 semanas."], list: ["Usuarios y grupos de usuarios", "Agenda y calendario de visitas", "Control de jornadas", "Gestión de incidencias y de rutas", "Inventario de parquímetros", "Geolocalización y delimitación de zonas", "Almacenes, piezas y stock", "Realización de partes"] },
          ],
        },
      ],
    },
    en: {
      group: G.recursos, crumb: crumb.en, relatedTitle: { title: "Other customers", accent: "who trust XOne" }, related: nextCases("sacyr", "en"),
      seo: { title: "Success story: blue zone parking and route management apps for Sacyr | XOne", description: "With XOne, Sacyr mobilized regulated parking management (fines and towing) and parking meter collection with two mobility apps." },
      hero: { title: "Blue zone parking and route management", accent: "for Sacyr", lead: "With XOne, Sacyr mobilized regulated parking management (fines and towing) and parking meter collection with two mobility apps.", labels: ["Sacyr", "SQL Server", "Android", "Offline"], secondary: { label: "Download the case study (PDF)", href: PDF("CASOUSOSACYR-1.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "Operating systems", value: "Android" },
          { label: "Integration", value: "SQL Server and Web Service" },
          { label: "Development", value: "4 weeks" },
          { label: "Devices", value: "More than 200" },
        ] },
        {
          type: "rows", index: "Project", eyebrow: "Challenge and response", title: "From the problem", accent: "to the XOne solution",
          items: [
            { title: "The challenge", text: ["Automatic control of parking spaces.", "Following a notable increase in the number of cars in cities, Sacyr was looking for a new management approach to automatically control all parking spaces and mobilize the processes on public roads: reports and fines, identifying vehicles towed from the street, and automated route management."] },
            { title: "The XOne solution", text: ["An optimal solution for space guidance and parking management on public roads, followed by a second app for route management.", "XOne's exclusive integration model quickly transfers information from the device to the central municipal management system, without interference between the two, with or without coverage. It also ensures secure communications, offers a remote device administration console and has short installation times."], list: ["Shorten response times", "Manage human resources efficiently", "Make management easier for the user", "Improve service quality", "Provide information to citizens"] },
          ],
        },
        {
          type: "rows", index: "Apps", eyebrow: "Two mobile solutions", title: "Fines, towing", accent: "and collection",
          items: [
            { title: "Blue Zone Management app", text: ["A modular solution that mobilizes penalty management, technical incident tracking and fines on public roads, in two parts: penalty management and tow service management."], list: ["Operator status", "Service assignment and acceptance", "Hook-up with license plate capture", "Service photos and geolocation", "Transfers to and between impound lots", "Abandoned vehicle management", "Payment by municipal receipt or card", "Messaging between control center and devices", "Digital signature and ticket printing", "Panic button and device location"] },
            { title: "Route Management app", visual: "route", text: ["A mobile and web solution for greater visibility, management and control of the tasks of the staff who collect the money deposited in parking meters. For Android and iOS, developed in 16 weeks."], list: ["Users and user groups", "Calendar and visit schedule", "Workday tracking", "Incident and route management", "Parking meter inventory", "Geolocation and zone delimitation", "Warehouses, parts and stock", "Work reports"] },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  [`${LIST}/navantia`]: {
    es: {
      group: G.recursos, crumb: crumb.es, relatedTitle: { title: "Otros clientes", accent: "que confían en XOne" }, related: nextCases("navantia", "es"),
      seo: { title: "Caso de éxito: servicio técnico de mantenimiento de astilleros para Navantia | XOne", description: "Con XOne, Navantia moviliza las órdenes de trabajo del mantenimiento preventivo y correctivo de sus astilleros, integradas con SAP R3." },
      hero: { title: "Mantenimiento de astilleros", accent: "para Navantia", lead: "Con XOne, Navantia moviliza las órdenes de trabajo del mantenimiento preventivo y correctivo de sus astilleros, integradas con SAP R3.", labels: ["Navantia", "SAP R3", "Windows", "Android"], secondary: { label: "Descargar el caso en PDF", href: PDF("CASOUSONAVANTIA-1.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "Sistemas operativos", value: "Windows y Android" },
          { label: "Integración", value: "SAP R3" },
          { label: "Desarrollo", value: "5 semanas" },
          { label: "Plantas", value: "Ferrol, Cádiz y Cartagena" },
        ] },
        {
          type: "rows", index: "Proyecto", eyebrow: "Reto y respuesta", title: "Del desafío", accent: "a la solución XOne",
          items: [
            { title: "El desafío", text: ["Gestionar los mantenimientos de sus astilleros en el mundo con un servicio flexible, adaptado y personalizado que reduzca los procesos manuales.", "Por la gran demanda a la que se enfrenta, el despliegue de sus servicios en astilleros de todo el mundo y su posición como referente internacional, Navantia necesitaba una aplicación a medida que gestionara con eficacia todas las fases de las órdenes de trabajo de los distintos mantenimientos que realizan sus técnicos en su extensa flota de naves."] },
            { title: "La solución XOne", text: ["Gestión óptima de mantenimientos preventivos y correctivos.", "La aplicación moviliza las labores de soporte de los técnicos de Navantia: las órdenes de trabajo de cada tarea de mantenimiento de la fabricación naval, además de inspecciones, averías, actualizaciones y demás actuaciones en sus plantas de montaje y ensamblaje.", "Ha agilizado los procesos y acortado los tiempos de respuesta y resolución de incidencias, con una gestión más eficiente del personal técnico. Navantia contrató además el módulo formativo de XOne para capacitar a sus técnicos y realizar desarrollos de forma interna."] },
          ],
        },
        { type: "chips", index: "Alcance", eyebrow: "Funcionalidades", title: "Una base genérica", accent: "que se amplía con módulos", cols: 3, items: ["Fotografía y vídeo", "Localización de dispositivos", "Gestión documental", "Gestión de avisos", "Firma en dispositivo", "Reasignación de tareas por prioridad"] },
        { type: "quote", text: "El proyecto ha sido elogiado y valorado positivamente por los directivos de Navantia al superar las expectativas de calidad requeridas inicialmente.", source: "Resultados · Navantia" },
        { type: "chips", index: "Resultados", eyebrow: "Logros", title: "Lo que ha conseguido", accent: "la aplicación", cols: 2, items: ["Gestionar de forma óptima la agenda de los técnicos", "Información y control de los materiales usados y solicitud de piezas", "Informar al instante de las actuaciones realizadas", "Control de los tiempos empleados en las actuaciones"] },
      ],
    },
    en: {
      group: G.recursos, crumb: crumb.en, relatedTitle: { title: "Other customers", accent: "who trust XOne" }, related: nextCases("navantia", "en"),
      seo: { title: "Success story: shipyard maintenance technical service for Navantia | XOne", description: "With XOne, Navantia mobilizes the work orders for preventive and corrective maintenance at its shipyards, integrated with SAP R3." },
      hero: { title: "Shipyard maintenance", accent: "for Navantia", lead: "With XOne, Navantia mobilizes the work orders for preventive and corrective maintenance at its shipyards, integrated with SAP R3.", labels: ["Navantia", "SAP R3", "Windows", "Android"], secondary: { label: "Download the case study (PDF)", href: PDF("CASOUSONAVANTIA-1.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "Operating systems", value: "Windows and Android" },
          { label: "Integration", value: "SAP R3" },
          { label: "Development", value: "5 weeks" },
          { label: "Plants", value: "Ferrol, Cádiz and Cartagena" },
        ] },
        {
          type: "rows", index: "Project", eyebrow: "Challenge and response", title: "From the problem", accent: "to the XOne solution",
          items: [
            { title: "The challenge", text: ["Successfully manage maintenance at its shipyards around the world, with a flexible, tailored and personalized service that reduces manual processes.", "Due to the high demand it faces, the deployment of its services at shipyards around the world and its position as an international benchmark, Navantia needed a custom application that would efficiently manage every phase of the work orders arising from the different types of maintenance its technicians carry out on its extensive fleet of vessels."] },
            { title: "The XOne solution", text: ["Optimal management of preventive and corrective maintenance.", "The application mobilizes the support work of Navantia's technicians: the work orders for each shipbuilding maintenance task, as well as inspections, breakdowns, upgrades and other actions at its assembly plants.", "It has streamlined processes and shortened incident response and resolution times, with more efficient management of technical staff. Navantia also contracted XOne's training module to train its technicians and carry out developments in-house."] },
          ],
        },
        { type: "chips", index: "Scope", eyebrow: "Features", title: "A generic base", accent: "extended with modules", cols: 3, items: ["Photography and video", "Device location", "Document management", "Notification management", "On-device signature", "Task reassignment by priority"] },
        { type: "quote", text: "The project has been praised and rated positively by Navantia's executives for exceeding the quality expectations initially required.", source: "Results · Navantia" },
        { type: "chips", index: "Results", eyebrow: "Achievements", title: "What the application", accent: "has delivered", cols: 2, items: ["Optimal management of technicians' schedules", "Information and control of materials used and parts requests", "Instant reporting of completed work", "Control of the time spent on each job"] },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  [`${LIST}/orenes`]: {
    es: {
      group: G.recursos, crumb: crumb.es, relatedTitle: { title: "Otros clientes", accent: "que confían en XOne" }, related: nextCases("orenes", "es"),
      seo: { title: "Caso de éxito: apps comerciales, de recaudación y de clientes para Grupo Orenes | XOne", description: "Con XOne, Grupo Orenes moviliza su red de comerciales, recaudadores y clientes con tres apps: E-Agenda, Recaudaciones y Orenes Grupo Clientes." },
      hero: { title: "Comerciales, recaudación y clientes", accent: "para Grupo Orenes", lead: "Con XOne, Grupo Orenes moviliza su red de comerciales, recaudadores y clientes con tres apps: E-Agenda, Recaudaciones y Orenes Grupo Clientes.", labels: ["Orenes", "SQL Server", "iOS", "Android"], secondary: { label: "Descargar el caso en PDF", href: PDF("CASOUSOORENES-1.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "Sistemas operativos", value: "Android e iOS" },
          { label: "Apps", value: "E-Agenda, Recaudaciones y Orenes Grupo Clientes" },
          { label: "Desarrollo", value: "12 semanas en total" },
          { label: "Dispositivos", value: "Más de 400" },
        ] },
        {
          type: "rows", index: "Proyecto", eyebrow: "Reto y respuesta", title: "Del desafío", accent: "a la solución XOne",
          items: [
            { title: "El desafío", text: ["Movilizar y gestionar la red de comerciales, recaudadores y clientes.", "El Grupo Orenes, uno de los principales referentes de la industria del juego y del ocio en España, necesitaba por su fuerte crecimiento una tecnología capaz de movilizar con éxito los procesos operativos de su fuerza de ventas, para la que el móvil se ha convertido en una herramienta imprescindible."] },
            { title: "La solución XOne", text: ["Tres aplicaciones móviles, una para cada perfil, desarrolladas con la Plataforma Multiexperiencia XOne según las necesidades del cliente."], list: ["E-Agenda, para el equipo comercial", "Recaudaciones, para los recaudadores", "Orenes Grupo Clientes, para los clientes"] },
          ],
        },
        { type: "quote", text: "XOne proporciona a las empresas la herramienta definitiva para sus datos de venta, con soluciones completas y totalmente personalizadas que permiten a los comerciales cerrar un mayor número de negociaciones." },
        { type: "chips", index: "Beneficios", eyebrow: "Qué consiguen las apps", title: "Equipos coordinados,", accent: "procesos digitales", cols: 4, items: ["Gestión remota e inmediata de los procesos", "Mejor coordinación de los equipos de trabajo", "Mejora de la productividad", "Incidencias resueltas desde el dispositivo", "Digitalización de documentos y procesos", "Mejor control de gastos y costes", "Seguridad y protección de datos personales", "Mejor trato con clientes y proveedores"] },
        {
          type: "rows", index: "Apps", eyebrow: "Tres perfiles", title: "Una herramienta", accent: "para cada usuario",
          items: [
            { title: "E-Agenda", text: ["Facilita el trabajo diario del equipo comercial, mejorando su rendimiento y productividad. Para iOS, en más de 350 dispositivos, integrada mediante tablas intermedias en SQL Server."], list: ["Agenda y control de visitas", "Censo de clientes", "Documentación técnica", "Gastos comerciales", "Pedidos e histórico de pedidos", "Inventario, productos y stock", "Albaranes, devoluciones y liquidaciones", "Pagos, impagos y presupuestos", "Consultas e informes", "Rutas optimizadas y mapas"] },
            { title: "Recaudaciones", text: ["Gestiona y registra los procesos de recaudación y los movimientos de las máquinas recreativas. Para Android, en más de 200 dispositivos, integrada mediante tablas intermedias en SQL Server."], list: ["Contadores internos de monedas", "Cálculo de cantidades y porcentajes al cliente", "Control de las recaudaciones", "Préstamos o créditos a clientes", "Partes de liquidación e impresión", "Visitas y geolocalización de establecimientos", "Incidencias y notificaciones", "Cobros, pagos y repartos", "Cuentas, balances y arqueos", "Servicio técnico de máquinas"] },
            { title: "Orenes Grupo Clientes", text: ["App B2C con la que los clientes controlan y gestionan sus incidencias hasta su resolución, y acceden a las novedades del grupo: eventos deportivos, calendario y noticias. Gratuita para iOS, con más de 2.000 descargas."], list: ["Histórico de averías", "Alta y baja de incidencias", "Solicitud de cambio", "Detalles de la avería", "Revisiones", "Importes"] },
          ],
        },
      ],
    },
    en: {
      group: G.recursos, crumb: crumb.en, relatedTitle: { title: "Other customers", accent: "who trust XOne" }, related: nextCases("orenes", "en"),
      seo: { title: "Success story: sales, collection and customer apps for Grupo Orenes | XOne", description: "With XOne, Grupo Orenes mobilizes its sales reps, collectors and customers with three apps: E-Agenda, Recaudaciones and Orenes Grupo Clientes." },
      hero: { title: "Sales, collection and customers", accent: "for Grupo Orenes", lead: "With XOne, Grupo Orenes mobilizes its sales reps, collectors and customers with three apps: E-Agenda, Recaudaciones and Orenes Grupo Clientes.", labels: ["Orenes", "SQL Server", "iOS", "Android"], secondary: { label: "Download the case study (PDF)", href: PDF("CASOUSOORENES-1.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "Operating systems", value: "Android and iOS" },
          { label: "Apps", value: "E-Agenda, Recaudaciones and Orenes Grupo Clientes" },
          { label: "Development", value: "12 weeks in total" },
          { label: "Devices", value: "More than 400" },
        ] },
        {
          type: "rows", index: "Project", eyebrow: "Challenge and response", title: "From the problem", accent: "to the XOne solution",
          items: [
            { title: "The challenge", text: ["Mobilizing and managing the network of sales reps, collectors and customers.", "Grupo Orenes, one of the leading names in the gaming and leisure industry in Spain, needed, due to its strong growth, a technology capable of successfully mobilizing the operating processes of its sales force, for whom mobile devices have become essential."] },
            { title: "The XOne solution", text: ["Three mobile applications, one for each profile, developed with the XOne Multiexperience Platform to meet the customer's needs."], list: ["E-Agenda, for the sales team", "Recaudaciones, for the collectors", "Orenes Grupo Clientes, for customers"] },
          ],
        },
        { type: "quote", text: "XOne provides companies with the ultimate tool for their sales data, with complete, fully customized solutions that enable sales reps to close a greater number of deals." },
        { type: "chips", index: "Benefits", eyebrow: "What the apps achieve", title: "Coordinated teams,", accent: "digital processes", cols: 4, items: ["Remote and immediate process management", "Better coordination of work teams", "Improved productivity", "Incidents resolved from the device", "Digitization of documents and processes", "Better control of expenses and costs", "Security and personal data protection", "Better relationship with customers and suppliers"] },
        {
          type: "rows", index: "Apps", eyebrow: "Three profiles", title: "One tool", accent: "for each user",
          items: [
            { title: "E-Agenda", text: ["Makes the sales team's daily work easier, boosting their performance and productivity. For iOS, on more than 350 devices, integrated through staging tables in SQL Server."], list: ["Calendar and visit control", "Customer census", "Technical documentation", "Sales expenses", "Orders and order history", "Inventory, products and stock", "Delivery notes, returns and settlements", "Payments, non-payments and quotes", "Queries and reports", "Optimized routes and maps"] },
            { title: "Recaudaciones", text: ["Manages and records collection processes and the movements of amusement machines. For Android, on more than 200 devices, integrated through staging tables in SQL Server."], list: ["Internal coin counters", "Amounts and percentages for the customer", "Collection control", "Loans or credits to customers", "Settlement reports and printing", "Visits and establishment geolocation", "Incidents and notifications", "Collections, payments and splits", "Accounts, balances and cash counts", "Machine technical service"] },
            { title: "Orenes Grupo Clientes", text: ["A B2C app that lets customers track and manage their incidents through to resolution, and access the group's latest news: sporting events, calendar and news. Free for iOS, with more than 2,000 downloads."], list: ["Breakdown history", "Incident creation and closure", "Change request", "Breakdown details", "Inspections", "Amounts"] },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  [`${LIST}/loomis`]: {
    es: {
      group: G.recursos, crumb: crumb.es, relatedTitle: { title: "Otros clientes", accent: "que confían en XOne" }, related: nextCases("loomis", "es"),
      seo: { title: "Caso de éxito: movilización del traslado de fondos y valores para Loomis | XOne", description: "Con XOne, Loomis moviliza el traslado de fondos y valores con una app que sincroniza los datos con la central y sigue funcionando sin conexión." },
      hero: { title: "Traslado de fondos y valores", accent: "para Loomis", lead: "Con XOne, Loomis moviliza el traslado de fondos y valores con una app que sincroniza los datos con la central y sigue funcionando sin conexión.", labels: ["Loomis", "Réplica", "SQL Server", "Push"], secondary: { label: "Descargar el caso en PDF", href: PDF("CASOUSOLOOMIS.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "Sistema operativo", value: "Android" },
          { label: "Integración", value: "SQL Server" },
          { label: "Desarrollo", value: "10 semanas" },
          { label: "Vehículos", value: "Más de 370" },
        ] },
        {
          type: "rows", index: "Proyecto", eyebrow: "Reto y respuesta", title: "Del desafío", accent: "a la solución XOne",
          items: [
            { title: "El desafío", text: ["Sincronizar los datos con la central, operando también sin conexión.", "Loomis, empresa internacional especializada en la creación de un flujo de efectivo eficiente, cuenta con más de 20 centros de procesado con información online durante todo el proceso.", "Su antigua aplicación movilizaba los procesos operativos, pero no tenía un sistema de réplica de datos que permitiera una comunicación óptima con la central, lo que dificultaba mucho la optimización de los procesos."] },
            { title: "La solución XOne", visual: "offline", text: ["Migración a una aplicación XOne con servicio de réplica y comunicaciones, y alta disponibilidad de datos.", "Lo más destacable es la integración de datos online-offline: la aplicación sigue funcionando con las copias locales de los datos, así que los usuarios de Loomis pueden continuar trabajando aunque no haya conexión."] },
          ],
        },
        { type: "quote", text: "La clave reside en el sistema de integración XOne, factor determinante para que la nueva solución móvil esté perfectamente sincronizada con toda la lógica de negocio que ya opera en la compañía." },
        {
          type: "cells", index: "Funciones", eyebrow: "Qué permite la app", title: "Seguimiento continuo", accent: "y datos en tiempo real", cols: 2,
          items: [
            { label: "Envío en tiempo real", icon: "signal", text: "La información de los terminales se envía prácticamente en tiempo real una vez recibida en el servidor de movilidad. El Bus de Integración la distribuye al instante con tecnología push." },
            { label: "Seguimiento y gestión", icon: "activity", text: "Un informe de errores integrado en el sistema operativo permite seguir cada paso ejecutado y tomar decisiones de forma rápida y precisa." },
          ],
        },
        { type: "chips", index: "Capacidades", eyebrow: "Funcionalidades", title: "Rutas, periféricos", accent: "y notificaciones", cols: 3, items: ["Gestión continua de coordenadas GPS", "Notificaciones push", "Integración de periféricos", "Visualización gráfica de rutas", "Seguimiento y monitorización", "Copias locales de los datos"] },
      ],
    },
    en: {
      group: G.recursos, crumb: crumb.en, relatedTitle: { title: "Other customers", accent: "who trust XOne" }, related: nextCases("loomis", "en"),
      seo: { title: "Success story: mobilizing cash and valuables transport for Loomis | XOne", description: "With XOne, Loomis mobilizes cash and valuables transport with an app that syncs data with headquarters and keeps working offline." },
      hero: { title: "Cash and valuables transport", accent: "for Loomis", lead: "With XOne, Loomis mobilizes cash and valuables transport with an app that syncs data with headquarters and keeps working offline.", labels: ["Loomis", "Replication", "SQL Server", "Push"], secondary: { label: "Download the case study (PDF)", href: PDF("CASOUSOLOOMIS.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "Operating system", value: "Android" },
          { label: "Integration", value: "SQL Server" },
          { label: "Development", value: "10 weeks" },
          { label: "Vehicles", value: "More than 370" },
        ] },
        {
          type: "rows", index: "Project", eyebrow: "Challenge and response", title: "From the problem", accent: "to the XOne solution",
          items: [
            { title: "The challenge", text: ["Synchronizing data with headquarters, while also operating offline.", "Loomis, an international company specializing in creating an efficient cash flow, has more than 20 processing centers with online information throughout the entire process.", "Its old application mobilized operational processes, but had no data replication system to communicate optimally with headquarters, which made process optimization very difficult."] },
            { title: "The XOne solution", visual: "offline", text: ["Migration to an XOne application with a replication and communications service, and high data availability.", "The most notable aspect is online-offline data integration: the application keeps running with local copies of the data, so Loomis users can continue working even without a connection."] },
          ],
        },
        { type: "quote", text: "The key lies in the XOne integration system, the decisive factor in ensuring the new mobile solution is perfectly synchronized with all the business logic already operating in the company." },
        {
          type: "cells", index: "Features", eyebrow: "What the app enables", title: "Continuous tracking", accent: "and real-time data", cols: 2,
          items: [
            { label: "Real-time delivery", icon: "signal", text: "Information from the terminals is sent practically in real time once it reaches the mobility server. The Integration Bus distributes it immediately using push technology." },
            { label: "Tracking and management", icon: "activity", text: "An error report built into the operating system makes it possible to follow every step executed and make decisions quickly and accurately." },
          ],
        },
        { type: "chips", index: "Capabilities", eyebrow: "Functions", title: "Routes, peripherals", accent: "and notifications", cols: 3, items: ["Continuous management of GPS coordinates", "Push notifications", "Peripheral integration", "Graphical route visualization", "Tracking and monitoring", "Local copies of the data"] },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  [`${LIST}/istobal`]: {
    es: {
      group: G.recursos, crumb: crumb.es, relatedTitle: { title: "Otros clientes", accent: "que confían en XOne" }, related: nextCases("istobal", "es"),
      seo: { title: "Caso de éxito: app de servicio técnico iSAT para Istobal | XOne", description: "Con XOne, Istobal gestiona el mantenimiento y las incidencias de su red de centros de lavado de vehículos con las apps de servicio técnico Istoservices e iSAT." },
      hero: { title: "Servicio técnico iSAT", accent: "para Istobal", lead: "Con XOne, Istobal gestiona el mantenimiento y las incidencias de su red de centros de lavado de vehículos con las apps de servicio técnico Istoservices e iSAT.", labels: ["Istobal", "iSAT", "Web services", "SLA"], secondary: { label: "Descargar el caso en PDF", href: PDF("CASOUSOISTOBAL-1.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "Colaboración", value: "Desde 2012" },
          { label: "Integración", value: "Web services" },
          { label: "Dispositivos", value: "Más de 150" },
          { label: "Países", value: "España, Reino Unido y Dinamarca" },
        ] },
        {
          type: "rows", index: "Proyecto", eyebrow: "Reto y respuesta", title: "Del desafío", accent: "a la solución XOne",
          items: [
            { title: "El desafío", text: ["Asistencia técnica para todo el equipamiento de su red de centros de lavado.", "Istobal, empresa española líder en soluciones de lavado y cuidado de automóviles desde 1950, está presente en más de 75 países.", "Para dar mayor cobertura a sus espacios de cuidado de vehículos, necesitaba una herramienta capaz de gestionar de forma remota todas sus estaciones de servicio y responder rápido a las necesidades de mantenimiento."] },
            { title: "La solución XOne", text: ["Istoservices primero, iSAT después: una app de servicio técnico que evoluciona con el negocio.", "En 2012 se movilizó Istoservices, la app corporativa de su servicio técnico, que optimiza las rutas, reduce los tiempos de traslado y los costes, mejora la productividad de los técnicos y acorta los tiempos de respuesta.", "Por su gran aceptación, se modernizó y amplió con nuevas funcionalidades en la app iSAT: imputación de materiales además de horas, encuestas de calidad y firma de documentos."] },
          ],
        },
        {
          type: "cells", index: "Apps", eyebrow: "Proyectos XOne", title: "Asistencia técnica", accent: "en movimiento", cols: 2,
          items: [
            { label: "Istoservices", icon: "headset", text: "El servicio móvil de asistencia técnica de Istobal: un vehículo especializado para el mantenimiento predictivo y la intervención remota de todos los centros de lavado, con una atención rápida y eficaz ante cualquier aviso." },
            { label: "iSAT", icon: "phone", text: "La app móvil del servicio técnico de Istoservice, con gestión de materiales, encuestas de calidad y documentos para firma por cliente y máquina.", link: { label: "Conoce iSAT", slug: "isat" } },
          ],
        },
        { type: "chips", index: "Procesos", eyebrow: "Movilizados con XOne", title: "Del aviso", accent: "al cierre técnico", cols: 4, items: ["Gestión de avisos", "Detalle del parte", "Control de tiempos", "Control de desplazamientos", "Gestión de materiales", "Geolocalización en tiempo real", "Navegación en dispositivo", "Mensajería", "Gestión de SLA", "Control de equipos de trabajo", "Asignación de técnicos", "Lectura de contadores", "Firmas en dispositivo", "Histórico de avisos", "Generación de documentación", "Encuestas de calidad", "Control de fichajes", "Fotografías y vídeos", "Checklists", "Cierre técnico", "Notificaciones", "Incidencias"] },
        { type: "quote", text: "La estrecha colaboración y los buenos resultados han llevado iSAT a otros países y a sincronizar la movilidad de su CRM; varios técnicos de Istobal se han formado en XOne para desarrollar en la app.", source: "Resultados · Istobal" },
      ],
    },
    en: {
      group: G.recursos, crumb: crumb.en, relatedTitle: { title: "Other customers", accent: "who trust XOne" }, related: nextCases("istobal", "en"),
      seo: { title: "Success story: iSAT technical service app for Istobal | XOne", description: "With XOne, Istobal manages maintenance and incidents across its network of car wash centers with the Istoservices and iSAT technical service apps." },
      hero: { title: "iSAT technical service", accent: "for Istobal", lead: "With XOne, Istobal manages maintenance and incidents across its network of car wash centers with the Istoservices and iSAT technical service apps.", labels: ["Istobal", "iSAT", "Web services", "SLA"], secondary: { label: "Download the case study (PDF)", href: PDF("CASOUSOISTOBAL-1.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "Partnership", value: "Since 2012" },
          { label: "Integration", value: "Web services" },
          { label: "Devices", value: "More than 150" },
          { label: "Countries", value: "Spain, the United Kingdom and Denmark" },
        ] },
        {
          type: "rows", index: "Project", eyebrow: "Challenge and response", title: "From the problem", accent: "to the XOne solution",
          items: [
            { title: "The challenge", text: ["Technical support for all the equipment in its network of wash centers.", "Istobal, a leading Spanish company in car wash and care solutions since 1950, has a presence in more than 75 countries.", "To give broader coverage to its vehicle care facilities, it needed a tool capable of remotely managing all its service stations and responding quickly to maintenance needs."] },
            { title: "The XOne solution", text: ["Istoservices first, then iSAT: a technical service app that evolves with the business.", "In 2012 Istoservices, the corporate app for its technical service, was mobilized. It optimizes routes, reduces travel times and costs, improves technician productivity and shortens response times.", "Thanks to its great acceptance, it was modernized and extended with new features in the iSAT app: logging materials as well as hours, quality surveys and document signing."] },
          ],
        },
        {
          type: "cells", index: "Apps", eyebrow: "XOne projects", title: "Technical support", accent: "on the move", cols: 2,
          items: [
            { label: "Istoservices", icon: "headset", text: "Istobal's mobile technical support service: a specialized vehicle for predictive maintenance and remote intervention at all wash centers, with a fast and effective response to any service request." },
            { label: "iSAT", icon: "phone", text: "The mobile app for the Istoservice technical service, with materials management, quality surveys and documents for signature by customer and machine.", link: { label: "Discover iSAT", slug: "isat" } },
          ],
        },
        { type: "chips", index: "Processes", eyebrow: "Mobilized with XOne", title: "From service request", accent: "to technical closure", cols: 4, items: ["Service request management", "Work order details", "Time tracking", "Travel tracking", "Materials management", "Real-time geolocation", "On-device navigation", "Messaging", "SLA management", "Work team control", "Technician assignment", "Meter reading", "On-device signatures", "Request history", "Document generation", "Quality surveys", "Clock-in/clock-out control", "Photos and videos", "Checklists", "Technical closure", "Notifications", "Incidents"] },
        { type: "quote", text: "The close collaboration and good results have taken iSAT to other countries and synchronized the mobility of its CRM; several Istobal technicians have been trained in XOne to develop in the app.", source: "Results · Istobal" },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  [`${LIST}/jcarrion`]: {
    es: {
      group: G.recursos, crumb: crumb.es, relatedTitle: { title: "Otros clientes", accent: "que confían en XOne" }, related: nextCases("jcarrion", "es"),
      seo: { title: "Caso de éxito: gestión de órdenes de transporte para JCarrion | XOne", description: "Con XOne, JCarrion gestiona las órdenes de transporte, tareas y subtareas de su flota de vehículos pesados con una app integrada con SAP R3 sobre HANA." },
      hero: { title: "Órdenes de transporte", accent: "para JCarrion", lead: "Con XOne, JCarrion gestiona las órdenes de transporte, tareas y subtareas de su flota de vehículos pesados con una app integrada con SAP R3 sobre HANA.", labels: ["JCarrion", "SAP HANA", "IoT", "Offline"], secondary: { label: "Descargar el caso en PDF", href: PDF("CASOUSOJCARRION-2.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "Sector", value: "Transporte y logística" },
          { label: "Integración", value: "SAP R3 sobre HANA" },
          { label: "Dispositivos", value: "Más de 1.500" },
        ] },
        {
          type: "rows", index: "Proyecto", eyebrow: "Reto y respuesta", title: "Del desafío", accent: "a la solución XOne",
          items: [
            { title: "El desafío", text: ["Movilizar las órdenes de transporte, tareas y subtareas de la flota de vehículos pesados de distribución de mercancías.", "JCarrion es una familia de empresas que da un servicio global en transporte y logística: transporte de mercancías, almacenaje y suministro y mantenimiento de vehículos industriales, con todos los servicios que necesita el transportista.", "Necesitaba una app móvil para automatizar la emisión de órdenes de carga por carretera, ganar rendimiento y agilizar su red logística, integrada de forma fluida con SAP R3 HANA."] },
            { title: "La solución XOne", visual: "route", text: ["Una app para gestionar las órdenes de ruta de transportistas y repartidores, que trabaja incluso sin conexión.", "Facilita la comunicación con la plantilla en carretera para optimizar los tiempos de entrega de mercancía y ganar productividad."] },
          ],
        },
        { type: "chips", index: "Procesos", eyebrow: "Movilizados con XOne", title: "De la tractora", accent: "a la entrega", cols: 3, items: ["Identificación de la tractora", "Asignación de OT", "Órdenes de transporte", "Tareas y subtareas", "Botón de solicitud de ayuda", "Gestión de documentos", "Mensajería corporativa", "Inicio y fin de jornada", "Autogeneración de formularios", "Homologación de PTV", "Integración con CamScanner", "Control de descarga de documentos", "Fotografías", "WiFi Manager y control de brillo", "Notificaciones emergentes", "Dispositivo en modo quiosco"] },
        {
          type: "cells", index: "Resultados", eyebrow: "Qué se consiguió", title: "Menos tiempo,", accent: "menos costes", cols: 4,
          items: [
            { label: "Tiempo", icon: "loop", text: "Enviar y generar las órdenes de carga en una misma app agiliza todo el proceso." },
            { label: "A medida", icon: "layers", text: "Una app adaptada a las necesidades de la empresa." },
            { label: "Tiempo real", icon: "signal", text: "Estado de cada orden de carga en tiempo real, en cuanto se realiza." },
            { label: "Costes", icon: "euro", text: "Sin procesos manuales ni varias apps, los costes son mucho menores." },
          ],
        },
        {
          type: "rows", index: "Futuro", eyebrow: "Tecnologías emergentes", title: "La flota,", accent: "conectada con IoT",
          items: [
            { title: "Interacción con nodos IoT, geolocalización y MapView", text: ["XOne habilita sus soluciones de transporte con las tecnologías emergentes más disruptivas, y lanzará para JCarrion una nueva funcionalidad basada en el IoT, que aprovecha el análisis de datos para sacar el máximo partido de los dispositivos."], list: ["Estado de la carga en tiempo real", "Información sobre la apertura de puertas", "Avisos de temperatura o presión en cabinas y remolques", "Tipos de conducción y sus variables", "Alertas de niveles de fluidos y combustible", "Avisos de posibles fallos"] },
          ],
        },
      ],
    },
    en: {
      group: G.recursos, crumb: crumb.en, relatedTitle: { title: "Other customers", accent: "who trust XOne" }, related: nextCases("jcarrion", "en"),
      seo: { title: "Success story: transport order management for JCarrion | XOne", description: "With XOne, JCarrion manages transport orders, tasks and subtasks for its heavy vehicle fleet with an app integrated with SAP R3 on HANA." },
      hero: { title: "Transport orders", accent: "for JCarrion", lead: "With XOne, JCarrion manages transport orders, tasks and subtasks for its heavy vehicle fleet with an app integrated with SAP R3 on HANA.", labels: ["JCarrion", "SAP HANA", "IoT", "Offline"], secondary: { label: "Download the case study (PDF)", href: PDF("CASOUSOJCARRION-2.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "Sector", value: "Transport and logistics" },
          { label: "Integration", value: "SAP R3 on HANA" },
          { label: "Devices", value: "More than 1,500" },
        ] },
        {
          type: "rows", index: "Project", eyebrow: "Challenge and response", title: "From the problem", accent: "to the XOne solution",
          items: [
            { title: "The challenge", text: ["Mobilizing transport orders, tasks and subtasks for the heavy goods distribution vehicle fleet.", "JCarrion is a family of companies providing a comprehensive service in transport and logistics: freight transport, warehousing and the supply and maintenance of industrial vehicles, with every service a carrier needs.", "It needed a mobile app to automate the issuing of road loading orders, gain performance and streamline its logistics network, integrated smoothly with SAP R3 HANA."] },
            { title: "The XOne solution", visual: "route", text: ["An app to manage the route orders of carriers and delivery drivers, which works even without a connection.", "It makes communication with staff on the road easier, optimizing goods delivery times and increasing productivity."] },
          ],
        },
        { type: "chips", index: "Processes", eyebrow: "Mobilized with XOne", title: "From tractor unit", accent: "to delivery", cols: 3, items: ["Tractor unit identification", "Work order assignment", "Transport orders", "Tasks and subtasks", "Help request button", "Document management", "Corporate messaging", "Start and end of workday", "Automatic form generation", "PTV certification", "Integration with CamScanner", "Document download control", "Photographs", "WiFi Manager and brightness control", "Pop-up notifications", "Device in kiosk mode"] },
        {
          type: "cells", index: "Results", eyebrow: "What was achieved", title: "Less time,", accent: "lower costs", cols: 4,
          items: [
            { label: "Time", icon: "loop", text: "Sending and generating loading orders in a single app streamlines the entire process." },
            { label: "Tailored", icon: "layers", text: "An app adapted to the company's needs." },
            { label: "Real time", icon: "signal", text: "The status of each loading order in real time, as soon as it is completed." },
            { label: "Costs", icon: "euro", text: "With no manual processes or multiple apps, costs are much lower." },
          ],
        },
        {
          type: "rows", index: "Next", eyebrow: "Emerging technologies", title: "The fleet,", accent: "connected with IoT",
          items: [
            { title: "IoT node interaction, geolocation and MapView", text: ["XOne powers its transport solutions with the most disruptive emerging technologies, and will launch a new IoT-based feature for JCarrion that leverages data analysis to get the most out of its devices."], list: ["Real-time cargo status", "Information about door openings", "Temperature or pressure alerts in cabs and trailers", "Driving styles and their variables", "Fluid and fuel level alerts", "Warnings of possible failures"] },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  [`${LIST}/cofares`]: {
    es: {
      group: G.recursos, crumb: crumb.es, relatedTitle: { title: "Otros clientes", accent: "que confían en XOne" }, related: nextCases("cofares", "es"),
      seo: { title: "Caso de éxito: visión artificial móvil para Cofares | XOne", description: "Cofares moviliza con XOne sus entregas y recogidas desde 2008 y, desde 2019, incorpora visión artificial, realidad aumentada e IA a su app de distribución." },
      hero: { title: "Visión artificial móvil", accent: "para Cofares", lead: "Cofares moviliza con XOne sus entregas y recogidas desde 2008 y, desde 2019, incorpora visión artificial, realidad aumentada e IA a su app de distribución.", labels: ["Cofares", "Scandit", "RA", "Face ID"], secondary: { label: "Descargar el caso en PDF", href: PDF("CASOUSOCOFARES.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "Con XOne", value: "Desde 2008" },
          { label: "IA y visión artificial", value: "Desde 2019" },
          { label: "Almacenes", value: "Más de 35" },
          { label: "Logística integral", value: "7 plataformas en España" },
        ] },
        {
          type: "rows", index: "Proyecto", eyebrow: "Reto y respuesta", title: "Del desafío", accent: "a la solución XOne",
          items: [
            { title: "El desafío", text: ["Una app para el suministro y la distribución eficiente de medicamentos y productos sanitarios.", "Cofares, cooperativa de capital 100 % farmacéutico, es la empresa líder en distribución de medicamentos en España. En 2008 confió a XOne la movilización de sus entregas y recogidas con una app a medida."], list: ["Estado de la ruta", "Carga y descarga de mercancías", "Entregas de bultos", "Lectura por código de barras", "Clientes y visitas", "Incidencias en ruta", "Devoluciones y abonos", "Optimización de rutas"] },
            { title: "La solución XOne", visual: "scan", text: ["En 2019, nuevas funcionalidades con inteligencia artificial.", "XOne incorpora las tecnologías emergentes a sus apps: la IA, el machine learning o la realidad aumentada ayudan a optimizar las rutas de reparto, mejorar la eficiencia del combustible y reducir los tiempos de entrega, con más beneficios y un importante ahorro de costes.", "Según la consultora Gartner, el potencial de mejora de la eficiencia del negocio gracias a la IA es del 89 %."] },
          ],
        },
        {
          type: "cells", index: "Realidad aumentada", eyebrow: "Visión artificial con Scandit", title: "Manos libres,", accent: "más productividad", cols: 3,
          items: [
            { label: "Captura con Scandit", icon: "search", text: "Escaneo de alto impacto de códigos de barras y reconocimiento de texto y objetos, con información en tiempo real mediante realidad aumentada, en smartphones, wearables o IoT. Incluye picking mediante visión." },
            { label: "Almacén", icon: "layers", text: "Captura de datos más rápida y precisa, información visual al instante, productos localizados con facilidad y menos pedidos pendientes y errores." },
            { label: "Rutas", icon: "map", text: "Informa al conductor de las rutas más eficientes sin planificación previa y muestra a los clientes en un mapa por orden de urgencia." },
            { label: "Preparación de pedidos", icon: "check", text: "Artículos y cantidades correctos, recogida más rápida y precisa, y verificación de un lote completo con un solo barrido." },
            { label: "Entregas", icon: "doc", text: "Varios códigos de barras de un estante o lote de un solo barrido, información del producto en pantalla e instrucciones precisas para el empleado." },
            { label: "Recogidas", icon: "refresh", text: "Acuses de recibo, documentación dañada o envíos fallidos registrados al instante, identidad del destinatario verificada y rutas planificadas sobre la marcha." },
          ],
        },
        {
          type: "cells", index: "Seguridad", eyebrow: "Autenticación de usuarios", title: "Acceso biométrico,", accent: "sin contraseñas", cols: 2,
          items: [
            { label: "Face ID", icon: "user-plus", text: "Desbloqueo del dispositivo, inicio de sesión en las apps, transacciones seguras y relleno de credenciales. Se adapta a los cambios de aspecto y funciona en interiores, exteriores e incluso a oscuras." },
            { label: "Touch ID", icon: "lock", text: "Sensor ultrasónico que crea un mapa 3D de la huella dactilar: acceso personalizado, desbloqueo para el inicio de sesión, validación de contraseñas y menos riesgo de suplantación." },
          ],
        },
      ],
    },
    en: {
      group: G.recursos, crumb: crumb.en, relatedTitle: { title: "Other customers", accent: "who trust XOne" }, related: nextCases("cofares", "en"),
      seo: { title: "Success story: mobile computer vision for Cofares | XOne", description: "Cofares has run its deliveries and pickups on XOne since 2008 and, since 2019, has added computer vision, AR and AI to its distribution app." },
      hero: { title: "Mobile computer vision", accent: "for Cofares", lead: "Cofares has run its deliveries and pickups on XOne since 2008 and, since 2019, has added computer vision, AR and AI to its distribution app.", labels: ["Cofares", "Scandit", "AR", "Face ID"], secondary: { label: "Download the case study (PDF)", href: PDF("CASOUSOCOFARES.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "With XOne", value: "Since 2008" },
          { label: "AI and computer vision", value: "Since 2019" },
          { label: "Warehouses", value: "More than 35" },
          { label: "Integrated logistics", value: "7 platforms in Spain" },
        ] },
        {
          type: "rows", index: "Project", eyebrow: "Challenge and response", title: "From the problem", accent: "to the XOne solution",
          items: [
            { title: "The challenge", text: ["An app for the efficient supply and distribution of medicines and healthcare products.", "Cofares, a cooperative 100% owned by pharmacists, is the leading pharmaceutical distribution company in Spain. In 2008 it entrusted XOne with mobilizing its deliveries and pickups with a custom app."], list: ["Route status", "Goods loading and unloading", "Package deliveries", "Barcode scanning", "Customers and visits", "Route incidents", "Returns and credit notes", "Route optimization"] },
            { title: "The XOne solution", visual: "scan", text: ["In 2019, new AI-powered features.", "XOne brings emerging technologies into its apps: AI, machine learning and augmented reality help optimize delivery routes, improve fuel efficiency and reduce delivery times, with higher profits and significant cost savings.", "According to the consulting firm Gartner, the potential for improving business efficiency thanks to AI is 89%."] },
          ],
        },
        {
          type: "cells", index: "Augmented reality", eyebrow: "Computer vision with Scandit", title: "Hands-free,", accent: "more productivity", cols: 3,
          items: [
            { label: "Capture with Scandit", icon: "search", text: "High-impact barcode scanning and text and object recognition, with real-time information through augmented reality, on smartphones, wearables or IoT. Includes vision-based picking." },
            { label: "Warehouse", icon: "layers", text: "Faster, more accurate data capture, instant visual information, easy product location and fewer backorders and errors." },
            { label: "Routes", icon: "map", text: "Tells the driver the most efficient routes with no advance planning and shows customers on a map by urgency." },
            { label: "Order picking", icon: "check", text: "The right items in the right quantities, faster and more accurate picking, and a whole batch verified in a single sweep." },
            { label: "Deliveries", icon: "doc", text: "Multiple barcodes on a shelf or batch in one sweep, product information on screen and precise instructions for employees." },
            { label: "Pickups", icon: "refresh", text: "Receipts, damaged documentation or failed shipments recorded instantly, recipient identity verified and routes planned on the fly." },
          ],
        },
        {
          type: "cells", index: "Security", eyebrow: "User authentication", title: "Biometric access,", accent: "no passwords", cols: 2,
          items: [
            { label: "Face ID", icon: "user-plus", text: "Device unlocking, app sign-in, secure transactions and credential filling. It adapts to changes in appearance and works indoors, outdoors and even in the dark." },
            { label: "Touch ID", icon: "lock", text: "An ultrasonic sensor that builds a 3D map of the fingerprint: personalized access, unlocking for sign-in, password validation and lower risk of identity theft." },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  [`${LIST}/ingeteam`]: {
    es: {
      group: G.recursos, crumb: crumb.es, relatedTitle: { title: "Otros clientes", accent: "que confían en XOne" }, related: nextCases("ingeteam", "es"),
      seo: { title: "Caso de éxito: app de prevención de riesgos laborales para Ingeteam | XOne", description: "Ingeteam adquirió la plataforma XOne para crear Ingeteam Services, su app de mantenimiento de parques eólicos y de gestión de la prevención de riesgos laborales." },
      hero: { title: "Prevención de riesgos laborales", accent: "para Ingeteam", lead: "Ingeteam adquirió la plataforma XOne para crear Ingeteam Services, su app de mantenimiento de parques eólicos y de gestión de la prevención de riesgos laborales.", labels: ["Ingeteam", "PRL", "Push", "GPS"], secondary: { label: "Descargar el caso en PDF", href: PDF("CASOUSOINGETEAM-2.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "App", value: "Ingeteam Services" },
          { label: "Presencia", value: "22 países" },
          { label: "Grupo", value: "Unas 4.000 personas" },
          { label: "Prevención centralizada", value: "Más de 1.000 empleados" },
        ] },
        {
          type: "rows", index: "Proyecto", eyebrow: "Reto y respuesta", title: "Del desafío", accent: "a la solución XOne",
          items: [
            { title: "El desafío", text: ["Movilizar la operación y el mantenimiento integral de parques eólicos.", "Ingeteam es un grupo internacional especializado en electrónica de potencia y control, máquina eléctrica rotativa, integración de ingeniería electromecánica y automatización, y servicios de operación y mantenimiento, para la generación eólica, fotovoltaica, hidroeléctrica y fósil, la industria, el naval, la tracción ferroviaria y la red eléctrica.", "Adquirió la plataforma XOne para movilizar algunos de sus servicios, y así nació la app corporativa Ingeteam Services."] },
            { title: "La solución XOne", text: ["La tecnología XOne moviliza la gestión de la prevención de riesgos laborales (PRL) de Ingeteam."], list: ["Alertas", "Noticias corporativas", "Incidencias", "Near misses", "Parte de inicio de trabajo", "Foto y vídeo", "Observaciones", "Acciones preventivas", "Geoposicionamiento", "Gestión push"] },
          ],
        },
        { type: "quote", text: "La compañía centraliza la gestión internacional de la prevención de más de 1.000 empleados, conjugando normativas de seguridad de países y culturas diferentes bajo los máximos estándares.", source: "Entornos de trabajo seguros · Ingeteam" },
        { type: "intro", lead: "Un compromiso con la prevención", accent: "reconocido internacionalmente.", text: ["El compromiso y la responsabilidad de Ingeteam Service en prevención de riesgos laborales, y todo el trabajo que ha desarrollado en este ámbito desde su creación, han sido reconocidos por varias entidades y corporaciones internacionales, que han premiado a la empresa por su buena gestión."] },
      ],
    },
    en: {
      group: G.recursos, crumb: crumb.en, relatedTitle: { title: "Other customers", accent: "who trust XOne" }, related: nextCases("ingeteam", "en"),
      seo: { title: "Success story: occupational risk prevention app for Ingeteam | XOne", description: "Ingeteam acquired the XOne platform to build Ingeteam Services, its app for wind farm maintenance and occupational risk prevention management." },
      hero: { title: "Occupational risk prevention", accent: "for Ingeteam", lead: "Ingeteam acquired the XOne platform to build Ingeteam Services, its app for wind farm maintenance and occupational risk prevention management.", labels: ["Ingeteam", "OHS", "Push", "GPS"], secondary: { label: "Download the case study (PDF)", href: PDF("CASOUSOINGETEAM-2.pdf") } },
      blocks: [
        { type: "facts", items: [
          { label: "App", value: "Ingeteam Services" },
          { label: "Presence", value: "22 countries" },
          { label: "Group", value: "Around 4,000 people" },
          { label: "Centralized prevention", value: "More than 1,000 employees" },
        ] },
        {
          type: "rows", index: "Project", eyebrow: "Challenge and response", title: "From the problem", accent: "to the XOne solution",
          items: [
            { title: "The challenge", text: ["Mobilizing comprehensive wind farm operation and maintenance.", "Ingeteam is an international group specializing in power and control electronics, rotating electrical machines, electromechanical engineering and automation integration, and operation and maintenance services, for wind, photovoltaic, hydroelectric and fossil generation, industry, the naval sector, rail traction and the power grid.", "It acquired the XOne platform to mobilize some of its services, giving rise to the corporate app Ingeteam Services."] },
            { title: "The XOne solution", text: ["XOne technology mobilizes Ingeteam's occupational health and safety (OHS) management."], list: ["Alerts", "Corporate news", "Incidents", "Near misses", "Work start report", "Photo and video", "Observations", "Preventive actions", "Geopositioning", "Push management"] },
          ],
        },
        { type: "quote", text: "The company centralizes the international risk prevention management of more than 1,000 employees, reconciling the safety regulations of different countries and cultures under the highest standards.", source: "Safe work environments · Ingeteam" },
        { type: "intro", lead: "A commitment to prevention", accent: "recognized internationally.", text: ["Ingeteam Service's commitment and responsibility in occupational risk prevention, and all the work it has done in this area since its creation, have been recognized by several international organizations and corporations, which have awarded the company for its good management."] },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  [`${LIST}/tubasa-buskme`]: {
    es: {
      group: G.recursos, crumb: crumb.es, relatedTitle: { title: "Otros clientes", accent: "que confían en XOne" }, related: nextCases("tubasa-buskme", "es"),
      seo: { title: "Caso de éxito: app «Muévete por Badajoz» para Tubasa | XOne", description: "Con XOne, Tubasa modernizó el pago del autobús urbano de Badajoz con una app de movilidad que incluye recargas, compra de billetes y el servicio de bus a demanda Buskme." },
      hero: { title: "App «Muévete por Badajoz»", accent: "para Tubasa", lead: "Con XOne, Tubasa modernizó el pago del autobús urbano de Badajoz con una app de movilidad que incluye recargas, compra de billetes y el servicio de bus a demanda Buskme.", labels: ["Tubasa", "Buskme", "Pagos", "Tiempo real"], secondary: { label: "Descargar el caso en PDF", href: PDF("CASODEUSOBUSKME.pdf") } },
      blocks: [
        {
          type: "rows", index: "Proyecto", eyebrow: "Reto y respuesta", title: "Del desafío", accent: "a la solución XOne",
          items: [
            { title: "El desafío", text: ["Modernizar el sistema de pago de los trayectos de los autobuses urbanos de la ciudad.", "Hasta entonces, todos los trayectos del autobús urbano de Badajoz se pagaban en efectivo. Para evitar posibles contagios por la COVID-19, el cliente decidió modernizar el pago con una solución de movilidad fácil de usar y al alcance de todos."] },
            { title: "La solución XOne", text: ["La app «Muévete por Badajoz»: pagar el bus y mucho más.", "Se organiza en tres apartados: los datos personales del usuario, la carga y consulta del saldo, y la información de las líneas y paradas de la ciudad junto con los trayectos realizados."] },
          ],
        },
        {
          type: "cells", index: "Servicios", eyebrow: "Qué ofrece la app", title: "El bus urbano,", accent: "en el bolsillo", cols: 4,
          items: [
            { label: "Información", icon: "pin", text: "Horarios de las paradas de cada línea en tiempo real, desde cualquier dispositivo." },
            { label: "Recargas", icon: "refresh", text: "Recarga del saldo cuando y donde se quiera." },
            { label: "Billetes", icon: "badge", text: "Compra antes de subir al autobús, con bonos para estudiantes, niños o desempleados." },
            { label: "Buskme", icon: "map", text: "Transporte a medida: el usuario elige parada, destino y hora según la demanda." },
          ],
        },
        { type: "chips", index: "Uso", eyebrow: "Cómo funciona", title: "Cinco pasos", accent: "para subir al bus", numbered: true, cols: 3, items: ["Regístrate en la app", "Localiza tu parada", "Compra tu billete desde el móvil", "Sube al bus", "Disfruta de tu viaje"] },
        { type: "chips", index: "A demanda", eyebrow: "Buskme", title: "Autobuses donde", accent: "y cuando se necesitan", cols: 3, items: ["Servicio a medida del usuario", "Optimiza el transporte nocturno y de fin de semana", "Autobuses en la franja horaria más demandada"] },
      ],
    },
    en: {
      group: G.recursos, crumb: crumb.en, relatedTitle: { title: "Other customers", accent: "who trust XOne" }, related: nextCases("tubasa-buskme", "en"),
      seo: { title: "Success story: “Muévete por Badajoz” app for Tubasa | XOne", description: "With XOne, Tubasa modernized Badajoz city bus payments with a mobility app offering top-ups, ticket purchases and the Buskme on-demand bus service." },
      hero: { title: "“Muévete por Badajoz” app", accent: "for Tubasa", lead: "With XOne, Tubasa modernized Badajoz city bus payments with a mobility app offering top-ups, ticket purchases and the Buskme on-demand bus service.", labels: ["Tubasa", "Buskme", "Payments", "Real time"], secondary: { label: "Download the case study (PDF)", href: PDF("CASODEUSOBUSKME.pdf") } },
      blocks: [
        {
          type: "rows", index: "Project", eyebrow: "Challenge and response", title: "From the problem", accent: "to the XOne solution",
          items: [
            { title: "The challenge", text: ["Modernizing the payment system for trips on the city's buses.", "Until then, all Badajoz city bus trips were paid in cash. To prevent possible COVID-19 infections, the customer decided to modernize payment with an easy-to-use mobility solution accessible to everyone."] },
            { title: "The XOne solution", text: ["The “Muévete por Badajoz” app: paying for the bus and much more.", "It is organized into three sections: the user's personal data, balance top-up and inquiry, and information on the city's lines and stops along with the trips taken."] },
          ],
        },
        {
          type: "cells", index: "Services", eyebrow: "What the app offers", title: "The city bus,", accent: "in your pocket", cols: 4,
          items: [
            { label: "Information", icon: "pin", text: "Real-time stop schedules for each line, from any device." },
            { label: "Top-ups", icon: "refresh", text: "Top up your balance whenever and wherever you want." },
            { label: "Tickets", icon: "badge", text: "Buy before boarding, with passes for students, children or the unemployed." },
            { label: "Buskme", icon: "map", text: "Tailored transport: users choose stop, destination and time according to demand." },
          ],
        },
        { type: "chips", index: "Usage", eyebrow: "How it works", title: "Five steps", accent: "to board the bus", numbered: true, cols: 3, items: ["Register in the app", "Find your stop", "Buy your ticket from your phone", "Board the bus", "Enjoy your trip"] },
        { type: "chips", index: "On demand", eyebrow: "Buskme", title: "Buses where", accent: "and when they're needed", cols: 3, items: ["A service tailored to the user", "Optimizes night and weekend transport", "Buses in the most requested time slot"] },
      ],
    },
  },

};
