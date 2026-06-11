import type { DiagnosticResult } from "../utils/scoring";

type ResultCardProps = {
  result: DiagnosticResult;
  onRestart: () => void;
  onCopy: () => void;
  copied: boolean;
};

export default function ResultCard({ result, onRestart, onCopy, copied }: ResultCardProps) {
  const urgencyClass = result.urgency.toLowerCase();

  return (
    <article className="result-card">
      <div className="result-topline">
        <span className={`urgency-badge ${urgencyClass}`}>Urgencia {result.urgency}</span>
        <span className="score">Puntuación orientativa: {result.score}/14</span>
      </div>

      <h3>{result.profile}</h3>
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

      <textarea className="advisor-text" readOnly value={result.advisorSummary} aria-label="Resumen para enviar a tu gestoría" />

      <div className="result-actions">
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
