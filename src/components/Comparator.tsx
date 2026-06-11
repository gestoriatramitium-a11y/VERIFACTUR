import { comparatorItems } from "../data/resources";

export default function Comparator() {
  return (
    <section className="section" id="comparador">
      <div className="section-heading">
        <p className="eyebrow">Compara opciones antes de contratar</p>
        <h2>Comparador de soluciones</h2>
        <p>Estas categorías son genéricas. Antes de elegir, revisa que la herramienta encaja con tu actividad y obligaciones.</p>
      </div>

      <div className="sponsor-strip">
        {/* Futuro bloque para Google AdSense o patrocinio: mantener visible pero discreto. */}
        <span>Espacio para publicidad</span>
        <strong>Programa recomendado</strong>
        <span>Comparativa patrocinada</span>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Solución</th>
              <th>Ideal para</th>
              <th>Ventajas</th>
              <th>Limitaciones</th>
              <th>Precio estimado</th>
              <th>Dificultad</th>
              <th>CTA</th>
            </tr>
          </thead>
          <tbody>
            {comparatorItems.map((item) => (
              <tr key={item.name}>
                <th scope="row">{item.name}</th>
                <td>{item.idealFor}</td>
                <td>{item.advantages}</td>
                <td>{item.limitations}</td>
                <td>{item.price}</td>
                <td>{item.difficulty}</td>
                <td>
                  <a className="text-link" href={item.href}>
                    {item.cta}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
