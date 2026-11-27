// Catálogo de los 11 casos de uso (fuente: fichas del cliente en docs/casos-de-uso/, nov-2026).
// Nombre, sector y frase de entrada son literales de cada ficha; el inglés es traducción nuestra.
import type { IconName } from "../components/ui/Icon";

export type Uso = {
  n: string;
  slug: string;
  icon: IconName;
  pdf: string;
  es: { name: string; sector: string; lead: string };
  en: { name: string; sector: string; lead: string };
};

export const USOS_BASE = "casos-de-uso-home";
export const usoSlug = (u: Uso) => `${USOS_BASE}/${u.slug}`;
export const usoPdf = (u: Uso) => `/casos-de-uso/${u.pdf}`;

export const usos: Uso[] = [
  {
    n: "01", slug: "gestion-inteligente-de-avisos", icon: "headset", pdf: "Ficha_01_Gestion_inteligente_de_avisos.pdf",
    es: { name: "Gestión inteligente de avisos", sector: "Servicio técnico, utilities y telecomunicaciones", lead: "Del aviso del cliente al técnico en ruta, sin coordinación manual en los casos habituales. La llamada, la decisión y la ejecución en campo, unidas en una sola solución." },
    en: { name: "Smart service request management", sector: "Technical service, utilities and telecommunications", lead: "From the customer's call to the technician on the road, with no manual coordination in the usual cases. The call, the decision and the field execution, joined in a single solution." },
  },
  {
    n: "02", slug: "parte-por-voz-en-campo", icon: "chat", pdf: "Ficha_02_Parte_por_voz_en_campo.pdf",
    es: { name: "Parte por voz en campo", sector: "Mantenimiento, calidad y logística", lead: "El técnico cuenta lo que ha hecho mientras trabaja y el parte, el inventario y la documentación se completan solos. Sin teclados: las manos, para el trabajo." },
    en: { name: "Voice work reports in the field", sector: "Maintenance, quality and logistics", lead: "The technician says what they have done while they work, and the report, the inventory and the paperwork fill themselves in. No keyboards: hands are for the job." },
  },
  {
    n: "03", slug: "atencion-inmediata-de-siniestros", icon: "shield", pdf: "Ficha_03_Atencion_inmediata_de_siniestros.pdf",
    es: { name: "Atención inmediata de siniestros", sector: "Seguros, asistencia y renting", lead: "En el peor momento de tu cliente, una respuesta inmediata: la llamada atendida al instante, las fotos del daño recibidas y el profesional adecuado en camino con toda la información." },
    en: { name: "Immediate claims handling", sector: "Insurance, assistance and renting", lead: "At your customer's worst moment, an immediate response: the call answered at once, photos of the damage received and the right professional on the way with all the information." },
  },
  {
    n: "04", slug: "recuperacion-de-entregas-fallidas", icon: "map", pdf: "Ficha_04_Recuperacion_de_entregas_fallidas.pdf",
    es: { name: "Recuperación de entregas fallidas", sector: "Paquetería, última milla y reparto a domicilio", lead: "Cuando nadie abre la puerta, el destinatario decide en ese momento dónde dejar el envío, mientras el repartidor sigue en la calle. Sin segundas entregas." },
    en: { name: "Failed delivery recovery", sector: "Parcels, last mile and home delivery", lead: "When nobody opens the door, the recipient decides there and then where to leave the parcel, while the driver is still on the street. No second deliveries." },
  },
  {
    n: "05", slug: "gestion-activa-de-riesgos-laborales", icon: "activity", pdf: "Ficha_05_Gestion_activa_de_riesgos_laborales.pdf",
    es: { name: "Gestión activa de riesgos laborales", sector: "Construcción, energía e industria", lead: "Cada riesgo detectado en obra o en planta se convierte en una orden de corrección con plazo, responsable y prueba fotográfica. Y si el plazo vence, el sistema lo escala por sí solo." },
    en: { name: "Active occupational risk management", sector: "Construction, energy and industry", lead: "Every risk detected on site or in the plant becomes a corrective order with a deadline, an owner and photo evidence. And if the deadline passes, the system escalates it on its own." },
  },
  {
    n: "06", slug: "gestion-de-cobros-integrada-en-ruta", icon: "euro", pdf: "Ficha_06_Gestion_de_cobros_integrada_en_ruta.pdf",
    es: { name: "Gestión de cobros integrada en ruta", sector: "Distribución HORECA y mayoristas", lead: "Recupera facturas pendientes cuidando la relación con tus clientes y cierra el cobro aprovechando las rutas de reparto que ya existen. Sin desvíos y sin que el repartidor tenga que negociar." },
    en: { name: "Collections built into the route", sector: "HORECA distribution and wholesalers", lead: "Recover unpaid invoices while looking after your customer relationships, and close the payment on the delivery routes you already run. No detours, and the driver never has to negotiate." },
  },
  {
    n: "07", slug: "reactivacion-de-clientes-con-entrega-en-ruta", icon: "refresh", pdf: "Ficha_07_Reactivacion_de_clientes_con_entrega_en_ruta.pdf",
    es: { name: "Reactivación de clientes con entrega en ruta", sector: "Distribución farmacéutica, recambios y gran consumo", lead: "Detecta a los clientes que han dejado de comprar, llámales con una propuesta pensada para ellos y entrega el pedido en la ruta del día siguiente. De la base de datos dormida al pedido entregado." },
    en: { name: "Customer reactivation with on-route delivery", sector: "Pharmaceutical distribution, spare parts and consumer goods", lead: "Spot the customers who have stopped buying, call them with an offer made for them and deliver the order on the next day's route. From a dormant database to a delivered order." },
  },
  {
    n: "08", slug: "atencion-de-incidencias-24-7-en-inmuebles", icon: "building", pdf: "Ficha_08_Atencion_de_incidencias_24-7_en_inmuebles.pdf",
    es: { name: "Atención de incidencias 24/7 en inmuebles", sector: "Facility management, alquiler turístico y hoteles", lead: "Respuesta inmediata a cualquier hora: el agente atiende al huésped o inquilino, intenta resolver por teléfono y, si hace falta, el técnico de guardia sale con todo lo que necesita." },
    en: { name: "24/7 incident handling in properties", sector: "Facility management, holiday rentals and hotels", lead: "An immediate response at any hour: the agent takes the guest's or tenant's call, tries to solve it over the phone and, if needed, the on-call technician heads out with everything they need." },
  },
  {
    n: "09", slug: "recepcion-logistica-fuera-de-horario", icon: "server", pdf: "Ficha_09_Recepcion_logistica_fuera_de_horario.pdf",
    es: { name: "Recepción logística fuera de horario", sector: "Centros logísticos, fábricas a turnos y puertos secos", lead: "Un camión llega de madrugada, habla con el interfono y se dirige al muelle correcto sin que nadie espere en la garita. El vigilante solo comprueba lo que de verdad necesita su criterio." },
    en: { name: "Out-of-hours logistics reception", sector: "Logistics centres, shift-based factories and dry ports", lead: "A truck arrives before dawn, talks to the intercom and heads to the right dock without anyone waiting at the gatehouse. The guard only checks what really needs their judgement." },
  },
  {
    n: "10", slug: "atencion-conectada-en-tienda", icon: "briefcase", pdf: "Ficha_10_Atencion_conectada_en_tienda.pdf",
    es: { name: "Atención conectada en tienda", sector: "Retail, bricolaje, electrónica y concesionarios", lead: "Que ninguna llamada a una tienda se quede sin respuesta y que el equipo de sala sepa en cada momento qué preparar. El teléfono, el stock y la sala, conectados." },
    en: { name: "Connected in-store service", sector: "Retail, DIY, electronics and car dealerships", lead: "No call to a store left unanswered, and a floor team that always knows what to get ready. The phone, the stock and the shop floor, connected." },
  },
  {
    n: "11", slug: "seguimiento-asistencial-domiciliario", icon: "users", pdf: "Ficha_11_Seguimiento_asistencial_domiciliario.pdf",
    es: { name: "Seguimiento asistencial domiciliario", sector: "Ayuda a domicilio, salud y servicios sociales", lead: "Una llamada diaria de acompañamiento a cada persona y, ante cualquier señal de que algo no va como siempre, la visita del auxiliar con el protocolo adecuado. Y la familia, informada." },
    en: { name: "Home care follow-up", sector: "Home help, health and social services", lead: "A daily companionship call to each person and, at any sign that something is not as usual, a visit from the care worker with the right protocol. And the family, kept informed." },
  },
];

/** «Sigue explorando» de cada ficha: los tres casos de uso siguientes. */
export const nextUsos = (slug: string, lang: "es" | "en") => {
  const i = usos.findIndex((u) => u.slug === slug);
  return [1, 2, 3].map((k) => usos[(i + k) % usos.length]).map((u) => ({ label: u[lang].name, desc: u[lang].sector, slug: usoSlug(u), icon: u.icon }));
};
