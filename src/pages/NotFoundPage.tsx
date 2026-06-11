export default function NotFoundPage() {
  return (
    <section className="section app-page">
      <div className="page-shell">
        <p className="eyebrow">404</p>
        <h1>Página no encontrada</h1>
        <p className="page-intro">La ruta solicitada no existe. Puedes volver al inicio o revisar el comparador.</p>
        <div className="route-actions">
          <a className="button button-primary" href="/">Volver al inicio</a>
          <a className="button button-secondary" href="/comparador">Ver comparador</a>
        </div>
      </div>
    </section>
  );
}
