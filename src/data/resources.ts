export type ComparatorItem = {
  slug: string;
  name: string;
  idealFor: string;
  advantages: string;
  limitations: string;
  price: string;
  difficulty: string;
  recommendedFor: string;
  cta: string;
  href: string;
  checklist: string[];
};

export const comparatorItems: ComparatorItem[] = [
  {
    slug: "opcion-basica",
    name: "Opción básica / gratuita",
    idealFor: "Autónomos con pocas facturas y necesidades sencillas.",
    advantages: "Coste bajo y punto de partida para emitir con más control.",
    limitations: "Puede quedarse corta si hay mucho volumen, equipos o procesos complejos.",
    price: "0 EUR o muy bajo",
    difficulty: "Media",
    recommendedFor: "Actividad simple, baja emisión de facturas y apoyo puntual de asesoría.",
    cta: "Ver opción básica",
    href: "/go/opcion-basica",
    checklist: [
      "Comprueba si cubre tus obligaciones reales antes de usarla como sistema principal.",
      "Revisa cómo conserva registros, numeración, rectificaciones y copias.",
      "Valida con tu asesoría si encaja con tu actividad."
    ]
  },
  {
    slug: "software-economico",
    name: "Software de facturación económico",
    idealFor: "Freelancers, comercios y autónomos con facturación recurrente.",
    advantages: "Automatiza datos, clientes, plantillas y seguimiento de cobros.",
    limitations: "Conviene revisar si se adapta a tus obligaciones concretas.",
    price: "Desde 5-20 EUR/mes",
    difficulty: "Baja",
    recommendedFor: "Autónomos y pequeñas empresas con procesos sencillos y necesidad de ahorrar tiempo.",
    cta: "Comparar software económico",
    href: "/go/software-economico",
    checklist: [
      "Confirma si está preparado para factura electrónica y cambios normativos aplicables.",
      "Revisa exportaciones, soporte, copias y facilidad de migración.",
      "Comprueba el precio real tras promociones o límites de uso."
    ]
  },
  {
    slug: "programa-profesional",
    name: "Software profesional para pymes",
    idealFor: "Empresas con más volumen, varios usuarios o integraciones.",
    advantages: "Más control, permisos, informes y escalabilidad.",
    limitations: "Mayor coste y curva de implantación.",
    price: "Desde 25-80 EUR/mes",
    difficulty: "Media",
    recommendedFor: "Pymes, negocios con volumen medio o alto y equipos que necesitan control.",
    cta: "Ver programa profesional",
    href: "/go/programa-profesional",
    checklist: [
      "Pregunta por implantación, soporte, usuarios, permisos y trazabilidad.",
      "Valora si se integra con contabilidad, asesoría o herramientas internas.",
      "Revisa condiciones de permanencia y recuperación de datos."
    ]
  },
  {
    slug: "gestoria-online",
    name: "Gestoría online",
    idealFor: "Quien quiere apoyo y procesos digitales sin una estructura interna.",
    advantages: "Acompañamiento, recordatorios y ahorro de tiempo administrativo.",
    limitations: "Menos personalización que una asesoría muy cercana.",
    price: "Desde 30-120 EUR/mes",
    difficulty: "Baja",
    recommendedFor: "Autónomos y pequeñas empresas que prefieren delegar y mantener canales digitales.",
    cta: "Ver gestoría online",
    href: "/go/gestoria-online",
    checklist: [
      "Aclara qué incluye la cuota y qué servicios se facturan aparte.",
      "Pregunta cómo revisan factura electrónica, VERI*FACTU y registro horario si aplica.",
      "Comprueba tiempos de respuesta y canales de atención."
    ]
  },
  {
    slug: "asesoria-tradicional",
    name: "Asesoría tradicional",
    idealFor: "Negocios que prefieren trato directo o tienen casuísticas complejas.",
    advantages: "Contexto profesional, criterio humano y seguimiento personalizado.",
    limitations: "Puede depender de procesos menos automatizados.",
    price: "Variable",
    difficulty: "Baja",
    recommendedFor: "Empresas con empleados, casos complejos o necesidad de criterio profesional cercano.",
    cta: "Preparar consulta",
    href: "/go/asesoria-tradicional",
    checklist: [
      "Lleva un resumen de tu sistema actual y volumen de facturas.",
      "Pregunta qué cambios recomienda preparar y en qué plazo revisarlo.",
      "Aclara honorarios, alcance y responsabilidades."
    ]
  }
];

export const officialSources = [
  {
    name: "Agencia Tributaria",
    href: "https://sede.agenciatributaria.gob.es/"
  },
  {
    name: "BOE",
    href: "https://www.boe.es/"
  },
  {
    name: "Seguridad Social",
    href: "https://www.seg-social.es/"
  },
  {
    name: "Ministerio de Asuntos Económicos y Transformación Digital",
    href: "https://portal.mineco.gob.es/"
  },
  {
    name: "Kit Digital",
    href: "https://www.acelerapyme.gob.es/kit-digital"
  }
];

export const lastUpdated = "11 de junio de 2026";
