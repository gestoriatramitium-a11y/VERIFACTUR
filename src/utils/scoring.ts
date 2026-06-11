import type { Answers } from "../data/questions";

export type DiagnosticResult = {
  urgency: "Bajo" | "Medio" | "Alto";
  score: number;
  profile: string;
  recommendation: string;
  risks: string[];
  nextSteps: string[];
  advisorSummary: string;
};

const MANY_INVOICES = ["21_50", "50_plus"];

const answerLabels: Record<string, string> = {
  autonomo: "Autónomo",
  sociedad: "Sociedad o pyme",
  freelance: "Freelance",
  comercio: "Comercio local",
  sanitario: "Profesional sanitario",
  asesoria: "Asesoría o gestoría",
  excel: "Excel o Word",
  software: "Programa de facturación",
  gestoria: "Gestoría",
  papel: "Papel",
  no_emito: "No emite facturas",
  particulares: "Particulares",
  empresas: "Empresas",
  administracion: "Administración pública",
  mezcla: "Mezcla",
  "0_5": "0-5",
  "6_20": "6-20",
  "21_50": "21 a 50",
  "50_plus": "Más de 50",
  si: "Sí",
  no: "No",
  no_aplica: "No aplica",
  cumplir: "Cumplir la ley",
  tiempo: "Ahorrar tiempo",
  errores: "Reducir errores",
  precio: "Precio barato",
  delegar: "Delegarlo todo",
  gratuita: "Gratuita",
  economica: "Económica",
  profesional: "Profesional",
  gestionada: "Gestionada",
  otro: "Otro"
};

export function calculateResult(answers: Answers): DiagnosticResult {
  let score = 0;
  const risks = new Set<string>();
  const nextSteps = new Set<string>();

  if (["excel", "papel", "otro"].includes(answers.invoiceMethod ?? "")) {
    score += 3;
    risks.add("Tu sistema actual puede requerir revisión si emites facturas con regularidad.");
    nextSteps.add("Haz inventario de cómo emites, numeras, corriges y conservas tus facturas.");
  }

  if (answers.invoiceMethod !== "no_emito" && answers.monthlyInvoices !== "0_5") {
    score += 1;
  }

  if (answers.monthlyInvoices === "21_50") score += 2;
  if (answers.monthlyInvoices === "50_plus") score += 3;

  if (["empresas", "administracion", "mezcla"].includes(answers.customerType ?? "")) {
    score += 2;
    risks.add("Si facturas a empresas o administraciones, conviene revisar factura electrónica y requisitos de intercambio.");
    nextSteps.add("Pregunta a tu asesoría qué escenarios B2B o administración pública afectan a tu actividad.");
  }

  if (answers.hasEmployees === "si") {
    score += 2;
    risks.add("Al tener empleados, el registro horario digital es un punto laboral relevante a revisar.");
    nextSteps.add("Revisa siempre el registro horario digital: conservación, consulta, trazabilidad y acceso a los datos.");
  }

  if (answers.hasEmployees === "si" && answers.timeTracking === "no") {
    score += 2;
  }

  if (answers.hasAdvisor === "no") {
    score += 1;
    risks.add("Sin gestoría, es fácil retrasar decisiones o interpretar mal cambios normativos.");
    nextSteps.add("Usa el checklist y compara opciones antes de contratar una herramienta.");
  }

  if (answers.mainConcern === "delegar" || answers.preferredSolution === "gestionada") {
    nextSteps.add("Solicita una revisión a una gestoría online o asesoría tradicional.");
  }

  if (
    answers.mainConcern === "precio" &&
    ["0_5", "6_20"].includes(answers.monthlyInvoices ?? "") &&
    answers.hasEmployees !== "si" &&
    !["empresas", "administracion", "mezcla"].includes(answers.customerType ?? "") &&
    score < 8
  ) {
    nextSteps.add("Empieza comparando una opción básica o económica, sin descartar consulta profesional.");
  }

  nextSteps.add("Guarda este resultado y compártelo con tu gestoría antes de decidir.");

  const hasComplexBusiness = answers.hasEmployees === "si" && MANY_INVOICES.includes(answers.monthlyInvoices ?? "");
  const urgency = score >= 8 || hasComplexBusiness ? "Alto" : score >= 4 ? "Medio" : "Bajo";
  const profile = detectProfile(answers);
  const recommendation = buildRecommendation(answers, urgency);
  const advisorSummary = buildAdvisorSummary(answers, urgency, profile, Array.from(risks));

  return {
    urgency,
    score,
    profile,
    recommendation,
    risks: Array.from(risks),
    nextSteps: Array.from(nextSteps),
    advisorSummary
  };
}

function detectProfile(answers: Answers) {
  if (answers.hasEmployees === "si") return "Empresa con empleados";
  if (answers.invoiceMethod === "gestoria") return "Profesional que depende de gestoría";
  if (answers.businessType === "comercio" && ["6_20", ...MANY_INVOICES].includes(answers.monthlyInvoices ?? "")) {
    return "Comercio con volumen medio";
  }
  if (["autonomo", "freelance"].includes(answers.businessType ?? "") && answers.monthlyInvoices === "0_5") {
    return "Autónomo con baja facturación";
  }
  if (answers.businessType === "sociedad") return "Pyme que debería revisar procesos";
  return "Negocio con situación a revisar";
}

function buildRecommendation(answers: Answers, urgency: DiagnosticResult["urgency"]) {
  const hasEmployees = answers.hasEmployees === "si";
  const hasManyInvoices = MANY_INVOICES.includes(answers.monthlyInvoices ?? "");
  const invoicesCompaniesOrPublic = ["empresas", "administracion", "mezcla"].includes(answers.customerType ?? "");

  if (hasEmployees) {
    if (urgency === "Alto" || hasManyInvoices || invoicesCompaniesOrPublic) {
      const reason = hasManyInvoices
        ? "Al tener empleados y un volumen medio de facturas, una solución básica podría quedarse corta."
        : "Al tener empleados, una solución básica podría quedarse corta para revisar correctamente el registro horario digital.";
      return `Por tu perfil, conviene revisar una solución profesional o una asesoría/gestoría que pueda ayudarte con facturación, factura electrónica y registro horario digital. ${reason}`;
    }
    return "Por tener empleados, conviene revisar una solución profesional o una asesoría/gestoría que pueda ayudarte con facturación y registro horario digital.";
  }

  if (invoicesCompaniesOrPublic) {
    return "Conviene revisar factura electrónica y valorar software profesional o una asesoría que confirme qué requisitos aplican a tus clientes y a tu actividad.";
  }

  if (urgency === "Alto" || hasManyInvoices) {
    return "Conviene valorar un software profesional, una gestoría online o una asesoría tradicional que revise tu caso y te ayude a preparar la adaptación.";
  }

  if (urgency === "Medio") {
    return "Conviene comparar un software económico de facturación o una gestoría online que te ayude a revisar tu situación.";
  }

  return "Puedes empezar revisando una opción básica o gratuita, pero valida tu caso con tu asesoría.";
}

function buildAdvisorSummary(answers: Answers, urgency: string, profile: string, risks: string[]) {
  const lowerUrgency = urgency.toLowerCase();
  const profileText = profile.toLowerCase();
  const invoiceText = label(answers.monthlyInvoices).toLowerCase();
  const customerText = customerSummary(answers.customerType);
  const customerClause = customerText ? ` y clientes principalmente ${customerText}` : "";
  const reviewFocus = answers.hasEmployees === "si" ? "facturación, factura electrónica y registro horario" : "facturación y factura electrónica";
  const riskText = risks.length ? ` Los puntos detectados a revisar son: ${risks.join(" ")}` : "";

  return `Hola, he realizado un test orientativo sobre VERI*FACTU, factura electrónica y registro horario. Mi resultado indica un nivel de urgencia ${lowerUrgency}. Mi perfil sería ${profileText}, con emisión aproximada de ${invoiceText} facturas mensuales${customerClause}. ¿Podrías revisar si mi sistema actual de ${reviewFocus} cumple con la normativa aplicable y qué cambios debería preparar?${riskText}`;
}

function label(value?: string) {
  if (!value) return "Sin responder";
  return answerLabels[value] ?? value;
}

function customerSummary(value?: string) {
  if (value === "empresas") return "empresas";
  if (value === "administracion") return "administración pública";
  if (value === "mezcla") return "una mezcla de particulares, empresas o administración";
  if (value === "particulares") return "particulares";
  return "";
}
