import { useEffect, useState } from "react";

const COOKIE_KEY = "factura-radar-cookie-accepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem(COOKIE_KEY) !== "true");
  }, []);

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="region" aria-label="Aviso de cookies">
      <p>
        Usamos cookies técnicas necesarias para el funcionamiento del sitio. En el futuro podríamos incorporar analítica o publicidad,
        siempre actualizando esta información.
      </p>
      <div className="cookie-actions">
        <button
          className="button button-primary"
          type="button"
          onClick={() => {
            window.localStorage.setItem(COOKIE_KEY, "true");
            setVisible(false);
          }}
        >
          Aceptar
        </button>
        <a className="button button-secondary" href="/cookies">Más información</a>
      </div>
    </div>
  );
}
