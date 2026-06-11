export default function ContactPage() {
  return (
    <section className="section app-page contact-page">
      <div className="page-shell two-column-page">
        <div>
          <p className="eyebrow">Contacto</p>
          <h1>Contacto</h1>
          <p className="page-intro">Puedes contactar para sugerencias, colaboraciones, afiliados o correcciones de contenido.</p>
          <p className="privacy-note">
            Antes de publicar en serio, sustituye los placeholders legales y confirma que el formulario está conectado a Netlify Forms u otra herramienta.
          </p>
        </div>

        <form
          className="lead-form contact-form"
          name="contacto"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contacto" />
          <label htmlFor="contact-name">Nombre</label>
          <input id="contact-name" name="name" type="text" required />

          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" required />

          <label htmlFor="contact-reason">Motivo</label>
          <select id="contact-reason" name="reason" required>
            <option value="">Selecciona una opción</option>
            <option value="sugerencia">Sugerencia</option>
            <option value="colaboracion">Colaboración</option>
            <option value="afiliados">Afiliados</option>
            <option value="correccion">Corrección de contenido</option>
          </select>

          <label htmlFor="contact-message">Mensaje</label>
          <textarea id="contact-message" name="message" rows={5} required />

          <label className="check-row">
            <input name="consent" type="checkbox" required />
            <span>Acepto que se traten estos datos para responder a mi solicitud.</span>
          </label>

          <button className="button button-primary" type="submit">Enviar mensaje</button>
          <p className="privacy-note">Consulta la política de privacidad antes de enviar el formulario. No envíes información fiscal sensible.</p>
        </form>
      </div>
    </section>
  );
}
