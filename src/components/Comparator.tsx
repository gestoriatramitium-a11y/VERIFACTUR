import { comparatorItems } from "../data/resources";

type ComparatorProps = {
  compact?: boolean;
  fullPage?: boolean;
};

export default function Comparator({ compact = false, fullPage = false }: ComparatorProps) {
  return (
    <section className="section" id="comparador">
      <div className="section-heading">
        <p className="eyebrow">Compara opciones antes de contratar</p>
        {fullPage ? (
          <h1>Comparador de soluciones para facturación, VERI*FACTU y gestión digital</h1>
        ) : (
          <h2>Comparador de soluciones</h2>
        )}
        <p>
          Compara opciones para factura electrónica, programa de facturación, gestoría online, asesoría fiscal y registro horario digital.
          Estas categorías son genéricas: antes de elegir, revisa que la herramienta encaja con tu actividad y obligaciones.
        </p>
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
              <th>Opción</th>
              <th>Ideal para</th>
              <th>Ventajas</th>
              <th>Limitaciones</th>
              <th>Precio orientativo</th>
              <th>Dificultad</th>
              {!compact ? <th>Recomendado para</th> : null}
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
                {!compact ? <td>{item.recommendedFor}</td> : null}
                <td>
                  <a className="button table-button" href={item.href}>
                    {item.cta}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="affiliate-note">
        Algunos enlaces podrán ser enlaces de afiliado en el futuro. Esto no cambia el precio para el usuario y ayuda a mantener la herramienta.
      </p>
    </section>
  );
}
