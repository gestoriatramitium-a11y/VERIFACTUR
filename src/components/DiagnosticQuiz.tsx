import { useEffect, useMemo, useState } from "react";
import { questions, type Answers } from "../data/questions";
import { calculateResult, type DiagnosticResult } from "../utils/scoring";
import ResultCard from "./ResultCard";

const STORAGE_KEY = "factura-radar-last-result";

type StoredResult = {
  answers: Answers;
  result: DiagnosticResult;
  savedAt: string;
};

export default function DiagnosticQuiz() {
  const [answers, setAnswers] = useState<Answers>({});
  const [step, setStep] = useState(0);
  const [storedResult, setStoredResult] = useState<StoredResult | null>(null);
  const [copied, setCopied] = useState(false);
  const currentQuestion = questions[step];
  const progress = Math.round(((step + 1) / questions.length) * 100);
  const isLastStep = step === questions.length - 1;
  const selectedValue = answers[currentQuestion.id];

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setStoredResult(JSON.parse(raw) as StoredResult);
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const result = useMemo(() => (storedResult ? storedResult.result : null), [storedResult]);

  function selectAnswer(value: string) {
    setAnswers((current) => ({ ...current, [currentQuestion.id]: value }));
  }

  function goNext() {
    if (!selectedValue) return;
    if (isLastStep) {
      const finalResult = calculateResult(answers);
      const payload = {
        answers,
        result: finalResult,
        savedAt: new Date().toISOString()
      };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      setStoredResult(payload);
      return;
    }
    setStep((current) => current + 1);
  }

  function goBack() {
    setStep((current) => Math.max(0, current - 1));
  }

  function restart() {
    setAnswers({});
    setStep(0);
    setStoredResult(null);
    setCopied(false);
    window.localStorage.removeItem(STORAGE_KEY);
  }

  async function copyAdvisorSummary() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.advisorSummary);
    } catch {
      const helper = document.createElement("textarea");
      helper.value = result.advisorSummary;
      helper.setAttribute("readonly", "");
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.appendChild(helper);
      helper.select();
      document.execCommand("copy");
      document.body.removeChild(helper);
    }
    setCopied(true);
  }

  return (
    <section className="section quiz-section" id="test">
      <div className="section-heading">
        <p className="eyebrow">Test diagnóstico gratuito</p>
        <h2>Prepara una conversación útil con tu gestoría</h2>
        <p>El resultado es orientativo y evita afirmaciones absolutas: cada actividad debe revisarse según su caso.</p>
      </div>

      <div className="quiz-shell">
        {result ? (
          <ResultCard result={result} onRestart={restart} onCopy={copyAdvisorSummary} copied={copied} />
        ) : (
          <div className="quiz-card" aria-live="polite">
            <div className="progress-row">
              <span>
                Pregunta {step + 1} de {questions.length}
              </span>
              <span>{progress}%</span>
            </div>
            <div className="progress-bar" aria-hidden="true">
              <span style={{ width: `${progress}%` }} />
            </div>

            <fieldset>
              <legend>{currentQuestion.title}</legend>
              {currentQuestion.help ? <p className="question-help">{currentQuestion.help}</p> : null}
              <div className="options-grid">
                {currentQuestion.options.map((option) => (
                  <label className="option-card" key={option.value}>
                    <input
                      type="radio"
                      name={currentQuestion.id}
                      value={option.value}
                      checked={selectedValue === option.value}
                      onChange={() => selectAnswer(option.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="quiz-actions">
              <button className="button button-secondary" type="button" onClick={goBack} disabled={step === 0}>
                Volver
              </button>
              <button className="button button-primary" type="button" onClick={goNext} disabled={!selectedValue}>
                {isLastStep ? "Ver resultado" : "Siguiente"}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
