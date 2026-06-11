export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>FacturaRadar</strong>
        <p>FacturaRadar ofrece orientación general y no sustituye a una asesoría fiscal, laboral, contable o jurídica.</p>
      </div>
      <nav className="footer-links" aria-label="Enlaces legales">
        <a href="/aviso-legal">Aviso legal</a>
        <a href="/privacidad">Política de privacidad</a>
        <a href="/cookies">Política de cookies</a>
        <a href="/contacto">Contacto</a>
        <a href="/fuentes">Fuentes oficiales</a>
        <a href="/">Volver al inicio</a>
      </nav>
    </footer>
  );
}
