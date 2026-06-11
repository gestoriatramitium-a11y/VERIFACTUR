import { lastUpdated, officialSources } from "../data/resources";

export default function SourcesPage() {
  return (
    <section className="section app-page">
      <div className="page-shell">
        <p className="eyebrow">Fuentes oficiales</p>
        <h1>Fuentes oficiales y recursos recomendados</h1>
        <p className="page-intro">
          Consulta siempre la información oficial actualizada, ya que los plazos, criterios y obligaciones pueden cambiar según el tipo de actividad.
        </p>

        <div className="resource-grid">
          {officialSources.map((source) => (
            <a className="resource-card" href={source.href} key={source.name} target="_blank" rel="noreferrer">
              <h2>{source.name}</h2>
              <p>Revisar fuente oficial</p>
            </a>
          ))}
        </div>

        <div className="legal-notice">
          <h2>Última revisión del contenido</h2>
          <p>{lastUpdated}. Esta fecha es editable y debe actualizarse cuando revises el contenido legal o fiscal.</p>
        </div>
      </div>
    </section>
  );
}
