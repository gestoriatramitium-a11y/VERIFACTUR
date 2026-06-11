import { useState } from "react";

export default function LeadMagnet() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section lead-section" id="checklist">
      <div className="lead-content">
        <p className="eyebrow">Descarga tu checklist de adaptación</p>
        <h2>Recibe una guía para revisar facturación, factura electrónica y registro horario</h2>
        <p>
          Función preparada para conectar con Netlify Forms, Mailchimp, Brevo o similar. El formulario no rompe si Netlify Forms no está activo.
        </p>
      </div>

      <form
        className="lead-form"
        name="checklist-adaptacion"
        method="POST"
        data-netlify="true"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <input type="hidden" name="form-name" value="checklist-adaptacion" />
        <label htmlFor="email">Email profesional</label>
        <input id="email" name="email" type="email" placeholder="tu@email.com" required />
        <label className="check-row">
          <input name="consent" type="checkbox" required />
          <span>Acepto recibir información relacionada con el checklist y entiendo que puedo darme de baja.</span>
        </label>
        {/* Insertar aquí integración futura con Mailchimp, Brevo o automatización de leads. */}
        <button className="button button-primary" type="submit">
          Descargar checklist
        </button>
        {submitted ? <p className="form-note">Solicitud registrada en modo demo. Conecta el formulario para enviar el recurso automáticamente.</p> : null}
      </form>
    </section>
  );
}
