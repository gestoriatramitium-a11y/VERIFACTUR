import { lastUpdated, officialSources } from "../data/resources";

const sections = [
  {
    title: "¿Qué es VERI*FACTU?",
    body: "VERI*FACTU se asocia a sistemas de facturación que buscan mejorar la integridad, trazabilidad y conservación de los registros. En muchos casos conviene revisar si el programa que usas está preparado y si tu forma de emitir facturas necesita cambios."
  },
  {
    title: "¿Puedo seguir haciendo facturas en Excel?",
    body: "Excel puede servir para tareas internas, pero cuando se emiten facturas de forma habitual conviene revisar si el sistema cumple los requisitos aplicables. Según el tipo de actividad, volumen y clientes, puede ser recomendable pasar a una herramienta de facturación."
  },
  {
    title: "¿Qué autónomos deberían revisar su sistema de facturación?",
    body: "Deberían prestar especial atención quienes emiten facturas todos los meses, trabajan con empresas o administraciones, usan documentos manuales o dependen de procesos poco trazables. La revisión debe hacerse caso por caso y, si hay dudas, con una asesoría."
  },
  {
    title: "Factura electrónica: qué conviene preparar",
    body: "La factura electrónica implica pensar en formatos, envío, recepción, conservación y relación con clientes. No todos los negocios tienen la misma prioridad, pero prepararse con tiempo ayuda a evitar decisiones apresuradas."
  },
  {
    title: "Registro horario digital: punto importante si tienes empleados",
    body: "Si tienes empleados, el registro de jornada es una obligación laboral que conviene gestionar con orden. Un sistema digital puede facilitar consultas, conservación y control, aunque la elección depende del tamaño y funcionamiento de la empresa."
  }
];

const faqs = [
  {
    question: "¿Este test me dice exactamente qué estoy obligado a hacer?",
    answer: "No. Ofrece orientación general y señales de revisión. Para decisiones concretas, consulta fuentes oficiales o una asesoría profesional."
  },
  {
    question: "¿FacturaRadar es un programa de facturación?",
    answer: "No. Es una web informativa, comparadora y de diagnóstico orientativo."
  },
  {
    question: "¿Los enlaces del comparador son afiliados?",
    answer: "Ahora son placeholders preparados para monetización futura. Puedes sustituirlos por enlaces de afiliado cuando corresponda."
  }
];

export default function SeoSections() {
  return (
    <section className="section seo-section" id="faq">
      <div className="section-heading">
        <p className="eyebrow">Guía rápida</p>
        <h2>Información útil sin tecnicismos</h2>
      </div>

      <div className="seo-grid">
        {sections.map((section) => (
          <article className="info-card" key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.body}</p>
          </article>
        ))}
      </div>

      <div className="faq-block">
        <h3>Preguntas frecuentes</h3>
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>

      <aside className="legal-notice">
        <h3>Aviso importante</h3>
        <p>
          Esta herramienta ofrece orientación general y no constituye asesoramiento fiscal, laboral, contable ni jurídico. La normativa puede cambiar.
          Consulta fuentes oficiales o una asesoría profesional antes de tomar decisiones.
        </p>
        <p>
          <strong>Última actualización editable:</strong> {lastUpdated}
        </p>
        <div className="source-links" aria-label="Fuentes oficiales">
          {officialSources.map((source) => (
            <a href={source.href} key={source.name} target="_blank" rel="noreferrer">
              {source.name}
            </a>
          ))}
        </div>
      </aside>
    </section>
  );
}
