import { lastUpdated } from "../data/resources";

export default function CookiesPage() {
  return (
    <section className="section app-page legal-page">
      <div className="page-shell">
        <p className="eyebrow">Cookies</p>
        <h1>Política de cookies</h1>
        <div className="content-card">
          <h2>Qué son las cookies</h2>
          <p>
            Las cookies son pequeños archivos que un sitio puede guardar en el navegador para recordar información técnica, preferencias o mediciones de uso.
          </p>

          <h2>Estado actual</h2>
          <p>
            La versión actual de FacturaRadar no debe cargar cookies no necesarias salvo que estén realmente implementadas. El banner guarda la aceptación en
            localStorage para no mostrar el aviso en cada visita.
          </p>

          <h2>Tipos de cookies</h2>
          <ul>
            <li><strong>Técnicas:</strong> necesarias para el funcionamiento básico del sitio o preferencias locales.</li>
            <li><strong>De análisis:</strong> podrían usarse en el futuro para entender visitas y mejorar contenidos.</li>
            <li><strong>Publicitarias:</strong> podrían usarse en el futuro si se incorporan sistemas de publicidad.</li>
            <li><strong>De afiliación:</strong> podrían usarse si se activan enlaces o programas de afiliado.</li>
          </ul>

          <p>
            Si en el futuro se añade Google Analytics, AdSense u otras herramientas, será necesario adaptar este aviso y el mecanismo de consentimiento.
          </p>

          <p className="updated-note">Última actualización editable: {lastUpdated}</p>
        </div>
      </div>
    </section>
  );
}
