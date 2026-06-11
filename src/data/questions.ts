export type AnswerOption = {
  value: string;
  label: string;
};

export type Question = {
  id:
    | "businessType"
    | "invoiceMethod"
    | "customerType"
    | "monthlyInvoices"
    | "hasEmployees"
    | "timeTracking"
    | "mainConcern"
    | "hasAdvisor"
    | "preferredSolution";
  title: string;
  help?: string;
  options: AnswerOption[];
};

export type Answers = Partial<Record<Question["id"], string>>;

export const questions: Question[] = [
  {
    id: "businessType",
    title: "¿Qué describe mejor tu actividad?",
    help: "Elige la opción más parecida a tu caso.",
    options: [
      { value: "autonomo", label: "Autónomo" },
      { value: "sociedad", label: "Sociedad o pyme" },
      { value: "freelance", label: "Freelance" },
      { value: "comercio", label: "Comercio local" },
      { value: "sanitario", label: "Profesional sanitario" },
      { value: "asesoria", label: "Asesoría o gestoría" },
      { value: "otro", label: "Otro" }
    ]
  },
  {
    id: "invoiceMethod",
    title: "¿Cómo haces actualmente tus facturas?",
    options: [
      { value: "excel", label: "Excel o Word" },
      { value: "software", label: "Programa de facturación" },
      { value: "gestoria", label: "Me las prepara la gestoría" },
      { value: "papel", label: "Papel o talonario" },
      { value: "no_emito", label: "No emito facturas" },
      { value: "otro", label: "Otro método" }
    ]
  },
  {
    id: "customerType",
    title: "¿A quién facturas principalmente?",
    options: [
      { value: "particulares", label: "Particulares" },
      { value: "empresas", label: "Empresas" },
      { value: "administracion", label: "Administración pública" },
      { value: "mezcla", label: "Una mezcla de clientes" }
    ]
  },
  {
    id: "monthlyInvoices",
    title: "¿Cuántas facturas emites al mes?",
    options: [
      { value: "0_5", label: "0-5" },
      { value: "6_20", label: "6-20" },
      { value: "21_50", label: "21-50" },
      { value: "50_plus", label: "Más de 50" }
    ]
  },
  {
    id: "hasEmployees",
    title: "¿Tienes empleados?",
    options: [
      { value: "si", label: "Sí" },
      { value: "no", label: "No" }
    ]
  },
  {
    id: "timeTracking",
    title: "¿Usas un sistema digital para registrar jornada o turnos?",
    options: [
      { value: "si", label: "Sí" },
      { value: "no", label: "No" },
      { value: "no_aplica", label: "No aplica" }
    ]
  },
  {
    id: "mainConcern",
    title: "¿Qué te preocupa más ahora mismo?",
    options: [
      { value: "cumplir", label: "Cumplir la ley" },
      { value: "tiempo", label: "Ahorrar tiempo" },
      { value: "errores", label: "Reducir errores" },
      { value: "precio", label: "Precio barato" },
      { value: "delegar", label: "Delegarlo todo" }
    ]
  },
  {
    id: "hasAdvisor",
    title: "¿Tienes gestoría o asesoría?",
    options: [
      { value: "si", label: "Sí" },
      { value: "no", label: "No" }
    ]
  },
  {
    id: "preferredSolution",
    title: "¿Qué tipo de solución prefieres?",
    options: [
      { value: "gratuita", label: "Gratuita" },
      { value: "economica", label: "Económica" },
      { value: "profesional", label: "Profesional" },
      { value: "gestionada", label: "Que me lo gestione alguien" }
    ]
  }
];
