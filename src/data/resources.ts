export type ComparatorItem = {
  name: string;
  idealFor: string;
  advantages: string;
  limitations: string;
  price: string;
  difficulty: string;
  cta: string;
  href: string;
};

export const comparatorItems: ComparatorItem[] = [
  {
    name: "Aplicación gratuita oficial / básica",
    idealFor: "Autónomos con pocas facturas y necesidades sencillas.",
    advantages: "Coste bajo y punto de partida para emitir con más control.",
    limitations: "Puede quedarse corta si hay mucho volumen, equipos o procesos complejos.",
    price: "0 € o muy bajo",
    difficulty: "Media",
    cta: "Ver opción básica",
    href: "/go/opcion-basica"
  },
  {
    name: "Software de facturación económico",
    idealFor: "Freelancers, comercios y autónomos con facturación recurrente.",
    advantages: "Automatiza datos, clientes, plantillas y seguimiento de cobros.",
    limitations: "Conviene revisar si se adapta a tus obligaciones concretas.",
    price: "Desde 5-20 €/mes",
    difficulty: "Baja",
    cta: "Comparar software económico",
    href: "/go/software-economico"
  },
  {
    name: "Software profesional para pymes",
    idealFor: "Empresas con más volumen, varios usuarios o integraciones.",
    advantages: "Más control, permisos, informes y escalabilidad.",
    limitations: "Mayor coste y curva de implantación.",
    price: "Desde 25-80 €/mes",
    difficulty: "Media",
    cta: "Ver programa profesional",
    href: "/go/programa-profesional"
  },
  {
    name: "Gestoría online",
    idealFor: "Quien quiere apoyo y procesos digitales sin una estructura interna.",
    advantages: "Acompañamiento, recordatorios y ahorro de tiempo administrativo.",
    limitations: "Menos personalización que una asesoría muy cercana.",
    price: "Desde 30-120 €/mes",
    difficulty: "Baja",
    cta: "Ver gestoría online",
    href: "/go/gestoria-online"
  },
  {
    name: "Asesoría tradicional",
    idealFor: "Negocios que prefieren trato directo o tienen casuísticas complejas.",
    advantages: "Contexto profesional, criterio humano y seguimiento personalizado.",
    limitations: "Puede depender de procesos menos automatizados.",
    price: "Variable",
    difficulty: "Baja",
    cta: "Preparar consulta",
    href: "/go/asesoria-tradicional"
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
  }
];

export const lastUpdated = "11 de junio de 2026";
