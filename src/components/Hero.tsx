export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <p className="eyebrow">Evita dudas antes de que lleguen las prisas</p>
        <h1>Descubre en 2 minutos si tu negocio debe adaptarse a VERI*FACTU o factura electrónica</h1>
        <p className="hero-copy">
          Responde unas preguntas y recibe una orientación personalizada para autónomos y pequeñas empresas en España.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#test">
            Hacer test gratuito
          </a>
          <a className="button button-secondary" href="#comparador">
            Ver comparador
          </a>
        </div>
      </div>
      <div className="hero-panel" aria-label="Resumen de ventajas de FacturaRadar">
        <div className="signal-card strong">
          <span className="signal-icon">✓</span>
          Comprueba tu situación en menos de 2 minutos
        </div>
        <div className="signal-card">
          <span className="signal-icon">i</span>
          Recibe una orientación clara sin tecnicismos
        </div>
        <div className="signal-card">
          <span className="signal-icon">↗</span>
          Compara opciones antes de contratar
        </div>
      </div>
    </section>
  );
}
