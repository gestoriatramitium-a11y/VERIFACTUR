import type { DiagnosticResult } from "../utils/scoring";

type ResultCardProps = {
  result: DiagnosticResult;
  onRestart: () => void;
  onCopy: () => void;
  copied: boolean;
};

export default function ResultCard({ result, onRestart, onCopy, copied }: ResultCardProps) {
  const urgencyClass = result.urgency.toLowerCase();
  const printedAt = new Date().toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  return (
    <article className="result-card">
      <div className="print-summary">
        <p className="print-brand">FacturaRadar</p>
        <p className="print-date">Fecha: {printedAt}</p>
        <h2>Resultado del test</h2>
      </div>

      <div className="result-topline">
        <span className={`urgency-badge ${urgencyClass}`}>Nivel de urgencia: {result.urgency}</span>
        <span className="score screen-only">Puntuación orientativa: {result.score}/14</span>
      </div>

      <h3>Perfil detectado: {result.profile}</h3>
      <p className="recommendation">{result.recommendation}</p>

      <div className="result-grid">
        <div>
          <h4>Riesgos o puntos a revisar</h4>
          <ul>
            {result.risks.length ? (
              result.risks.map((risk) => <li key={risk}>{risk}</li>)
            ) : (
              <li>No se detectan señales fuertes, aunque conviene revisar cambios normativos con cierta frecuencia.</li>
            )}
          </ul>
        </div>
        <div>
          <h4>Próximos pasos</h4>
          <ol>
            {result.nextSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="advisor-summary">
        <h4>Texto para enviar a tu gestoría</h4>
        <p className="advisor-copy-text">{result.advisorSummary}</p>
      </div>

      <p className="print-legal">
        Aviso: este resultado es una orientación general y no constituye asesoramiento fiscal, laboral, contable ni jurídico. Consulta fuentes
        oficiales o una asesoría profesional antes de tomar decisiones.
      </p>

      <div className="result-actions no-print">
        <button className="button button-primary" type="button" onClick={() => window.print()}>
          Imprimir o guardar PDF
        </button>
        <button className="button button-secondary" type="button" onClick={onCopy}>
          {copied ? "Resumen copiado" : "Enviar a mi gestoría"}
        </button>
        <button className="button button-ghost" type="button" onClick={onRestart}>
          Reiniciar test
        </button>
      </div>
    </article>
  );
}
