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
  "21_50": "21-50",
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
    nextSteps.add("Comprueba si tu registro de jornada permite conservar, consultar y justificar los datos.");
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

  if (answers.mainConcern === "precio" && ["0_5", "6_20"].includes(answers.monthlyInvoices ?? "")) {
    nextSteps.add("Empieza comparando una opción básica o económica, sin descartar consulta profesional.");
  }

  nextSteps.add("Guarda este resultado y compártelo con tu gestoría antes de decidir.");

  const urgency = score >= 8 ? "Alto" : score >= 4 ? "Medio" : "Bajo";
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
  if (answers.businessType === "comercio" && ["6_20", "21_50", "50_plus"].includes(answers.monthlyInvoices ?? "")) {
    return "Comercio con volumen medio";
  }
  if (["autonomo", "freelance"].includes(answers.businessType ?? "") && answers.monthlyInvoices === "0_5") {
    return "Autónomo con baja facturación";
  }
  if (answers.businessType === "sociedad") return "Pyme que debería revisar procesos";
  return "Negocio con situación a revisar";
}

function buildRecommendation(answers: Answers, urgency: DiagnosticResult["urgency"]) {
  if (answers.preferredSolution === "gestionada" || answers.mainConcern === "delegar") {
    return "Tu mejor primer paso puede ser pedir una revisión a una gestoría o asesoría y comparar una opción gestionada.";
  }
  if (answers.preferredSolution === "gratuita" || answers.preferredSolution === "economica") {
    return "Revisa una solución básica o económica, especialmente si emites pocas facturas, y valida con tu asesoría que cubre tu caso.";
  }
  if (urgency === "Alto") {
    return "Conviene priorizar una revisión de tu sistema de facturación y registro, especialmente antes de que lleguen las prisas.";
  }
  return "Tienes margen para informarte, comparar opciones y preparar una transición ordenada sin tecnicismos.";
}

function buildAdvisorSummary(answers: Answers, urgency: string, profile: string, risks: string[]) {
  const lines = [
    "Hola, he realizado un test orientativo en FacturaRadar y me gustaría revisar mi caso.",
    `Perfil detectado: ${profile}.`,
    `Nivel de urgencia orientativo: ${urgency}.`,
    `Tipo de actividad: ${label(answers.businessType)}.`,
    `Sistema actual de facturación: ${label(answers.invoiceMethod)}.`,
    `Clientes principales: ${label(answers.customerType)}.`,
    `Facturas mensuales: ${label(answers.monthlyInvoices)}.`,
    `Empleados: ${label(answers.hasEmployees)}.`,
    `Registro horario digital: ${label(answers.timeTracking)}.`,
    `Preferencia de solución: ${label(answers.preferredSolution)}.`
  ];

  if (risks.length) {
    lines.push(`Puntos a revisar: ${risks.join(" ")}`);
  }

  return lines.join("\n");
}

function label(value?: string) {
  if (!value) return "Sin responder";
  return answerLabels[value] ?? value;
}
