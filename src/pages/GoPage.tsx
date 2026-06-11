import { comparatorItems } from "../data/resources";

type GoPageProps = {
  slug: string;
};

export default function GoPage({ slug }: GoPageProps) {
  const item = comparatorItems.find((entry) => entry.slug === slug);

  if (!item) {
    return (
      <section className="section app-page">
        <div className="page-shell">
          <h1>Opción no encontrada</h1>
          <p className="page-intro">La página solicitada no existe o el enlace está pendiente de configurar.</p>
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
            <a className="button button-primary" href="#enlace-pendiente">Ver opciones recomendadas</a>
            <a className="button button-secondary" href="/comparador">Volver al comparador</a>
          </div>
          <p className="affiliate-placeholder" id="enlace-pendiente">Enlace pendiente de configurar.</p>
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
    </section>
  );
}
