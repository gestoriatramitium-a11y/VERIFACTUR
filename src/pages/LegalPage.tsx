import { lastUpdated } from "../data/resources";

export default function LegalPage() {
  return (
    <section className="section app-page legal-page">
      <div className="page-shell">
        <p className="eyebrow">Información legal editable</p>
        <h1>Aviso legal</h1>
        <div className="content-card">
          <h2>Responsable del sitio</h2>
          <p><strong>Responsable pendiente de completar</strong></p>
          <p>Email de contacto: <a className="text-link" href="mailto:contacto@tudominio.com">contacto@tudominio.com</a></p>

          <h2>Finalidad del sitio</h2>
          <p>
            FacturaRadar es una herramienta informativa sobre VERI*FACTU, factura electrónica, registro horario digital y soluciones digitales para
            autónomos y pequeñas empresas. Su objetivo es ayudar a preparar una revisión ordenada y una conversación útil con una asesoría.
          </p>

          <h2>Limitación de responsabilidad</h2>
          <p>
            El contenido publicado no constituye asesoramiento fiscal, laboral, jurídico, contable ni técnico certificado. La normativa puede cambiar
            y cada actividad puede tener circunstancias distintas. Antes de tomar decisiones, consulta fuentes oficiales actualizadas o una asesoría profesional.
          </p>

          <h2>Propiedad intelectual</h2>
          <p>
            Los textos, estructura y elementos propios de FacturaRadar se ofrecen para este proyecto y no deben reutilizarse de forma engañosa o contraria a la ley.
            Los nombres de organismos públicos pertenecen a sus respectivos titulares.
          </p>

          <h2>Enlaces externos y afiliados</h2>
          <p>
            El sitio puede enlazar a fuentes oficiales, herramientas o páginas de terceros. Algunos enlaces podrán ser enlaces de afiliado en el futuro. Si se activan,
            se indicará de forma transparente y no debería cambiar el precio para el usuario.
          </p>

          <p className="updated-note">Última actualización editable: {lastUpdated}</p>
        </div>
      </div>
    </section>
  );
}
