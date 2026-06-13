import { comparatorItems } from "../data/resources";
import { affiliateLinks, type AffiliateLinkKey } from "../data/affiliateLinks";

type GoPageProps = {
  slug: string;
};

type RecommendedProvider = {
  key: AffiliateLinkKey;
  name: string;
  text: string;
  button: string;
};

export default function GoPage({ slug }: GoPageProps) {
  const item = comparatorItems.find((entry) => entry.slug === slug);
  const primaryTarget = getPrimaryTarget(slug);
  const otherOptions = comparatorItems.filter((entry) => entry.slug !== slug);
  const providers = getRecommendedProviders(slug);
  const hasRealAffiliateLinks = providers.some((provider) => affiliateLinks[provider.key]);

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
            <a className="button button-primary" href={primaryTarget}>Ver opciones recomendadas</a>
            <a className="button button-secondary" href="/comparador">Volver al comparador</a>
          </div>
          {providers.length ? (
            <div className="provider-list" aria-label="Opciones recomendadas">
              {providers.map((provider) => (
                <article className="provider-card" key={provider.key}>
                  <h2>{provider.name}</h2>
                  <p>{provider.text}</p>
                  {affiliateLinks[provider.key] ? (
                    <a
                      className="button button-primary"
                      href={affiliateLinks[provider.key] ?? "#"}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                    >
                      {provider.button}
                    </a>
                  ) : (
                    <span className="pending-badge">Próximamente</span>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <p className="affiliate-placeholder">
              Estamos revisando opciones fiables antes de mostrar recomendaciones. Mientras tanto, puedes volver al comparador o consultar con un
              profesional si tu caso requiere asesoramiento personalizado.
            </p>
          )}
          <p className="go-note">
            {hasRealAffiliateLinks
              ? "Algunos enlaces de esta página pueden ser enlaces de afiliado o referido. Esto significa que FacturaRadar podría recibir una comisión si contratas o te registras desde ellos, sin coste adicional para ti. Nuestra recomendación tiene carácter orientativo y debes revisar siempre las condiciones oficiales de cada proveedor."
              : "Nota: esta página es informativa. Algunas recomendaciones o enlaces podrán ser de afiliado en el futuro, sin coste adicional para el usuario."}
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

function getRecommendedProviders(slug: string): RecommendedProvider[] {
  if (slug === "software-economico") {
    return [
      {
        key: "quipu",
        name: "Quipu",
        text: "Quipu puede encajar con autónomos y pequeños negocios que buscan una solución sencilla para facturación, presupuestos, gastos y gestión básica.",
        button: "Ver Quipu"
      },
      {
        key: "contasimple",
        name: "Contasimple by Cegid",
        text: "Contasimple puede ser una alternativa para usuarios que buscan una herramienta sencilla para facturación, contabilidad básica y gestión de impuestos.",
        button: "Ver Contasimple"
      }
    ];
  }

  if (slug === "opcion-basica") {
    return [
      {
        key: "contasimple",
        name: "Contasimple by Cegid",
        text: "Contasimple puede ser una alternativa sencilla para empezar con facturación, contabilidad básica y gestión de impuestos.",
        button: "Ver Contasimple"
      },
      {
        key: "quipu",
        name: "Quipu",
        text: "Quipu también puede encajar si buscas una herramienta simple para facturas, presupuestos, gastos y gestión diaria.",
        button: "Ver Quipu"
      }
    ];
  }

  if (slug === "programa-profesional") {
    return [
      {
        key: "quipu",
        name: "Quipu",
        text: "Quipu está disponible como alternativa para negocios que quieren digitalizar facturación y gestión básica antes de valorar soluciones más complejas.",
        button: "Ver Quipu"
      },
      {
        key: "sage",
        name: "Sage",
        text: "Estamos revisando esta opción. El enlace real está pendiente de aprobación.",
        button: "Pendiente de enlace"
      },
      {
        key: "billin",
        name: "Billin / TeamSystem Billin",
        text: "Estamos revisando esta opción. El enlace real está pendiente de aprobación.",
        button: "Pendiente de enlace"
      }
    ];
  }

  return [];
}
