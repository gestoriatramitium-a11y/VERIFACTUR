import { comparatorItems } from "../data/resources";

type GoPageProps = {
  slug: string;
};

export default function GoPage({ slug }: GoPageProps) {
  const item = comparatorItems.find((entry) => entry.slug === slug);
  const primaryTarget = getPrimaryTarget(slug);
  const otherOptions = comparatorItems.filter((entry) => entry.slug !== slug);

  if (!item) {
    return (
      <section className="section app-page">
        <div className="page-shell">
          <h1>Opción no encontrada</h1>
          <p className="page-intro">La página solicitada no existe. Puedes volver al comparador para revisar las opciones disponibles.</p>
          <a className="button button-primary" href="/comparador">Volver al comparador</a>
        </div>
      </section>
    );
  }

  return (
    <section className="section app-page">
      <div className="page-shell two-column-page">
        <div>
          <p className="eyebrow">Opción del comparador</p>
          <h1>{item.name}</h1>
          <p className="page-intro">{item.idealFor}</p>
          <div className="route-actions">
            {/* Sustituir este placeholder por el enlace de afiliado real cuando exista. */}
            <a className="button button-primary" href={primaryTarget}>Ver opciones recomendadas</a>
            <a className="button button-secondary" href="/comparador">Volver al comparador</a>
          </div>
          <p className="affiliate-placeholder">
            Estamos preparando una selección de opciones recomendadas. Mientras tanto, puedes volver al comparador o contactar para sugerencias,
            colaboraciones o recomendaciones.
          </p>
          <p className="go-note">
            Nota: esta página es informativa. Algunas recomendaciones o enlaces podrán ser de afiliado en el futuro, sin coste adicional para el usuario.
          </p>
        </div>

        <div className="content-card">
          <h2>Ventajas</h2>
          <p>{item.advantages}</p>
          <h2>Limitaciones</h2>
          <p>{item.limitations}</p>
          <h2>Qué revisar antes de contratar</h2>
          <ul>
            {item.checklist.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <h2>Recomendado para</h2>
          <p>{item.recommendedFor}</p>
        </div>
      </div>

      <div className="page-shell related-options">
        <h2>Otras opciones que puedes comparar</h2>
        <div className="related-grid">
          {otherOptions.map((option) => (
            <article className="related-card" key={option.slug}>
              <h3>{option.name}</h3>
              <p>{option.recommendedFor}</p>
              <a className="button button-secondary" href={option.href}>Ver opción</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function getPrimaryTarget(slug: string) {
  if (slug === "gestoria-online" || slug === "asesoria-tradicional") return "/contacto";
  return "/comparador";
}
