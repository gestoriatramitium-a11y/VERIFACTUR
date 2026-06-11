import { lastUpdated } from "../data/resources";

export default function PrivacyPage() {
  return (
    <section className="section app-page legal-page">
      <div className="page-shell">
        <p className="eyebrow">Privacidad</p>
        <h1>Política de privacidad</h1>
        <div className="content-card">
          <h2>Datos que se pueden recoger</h2>
          <p>
            FacturaRadar puede recoger datos que el usuario facilite voluntariamente, como nombre, email, motivo de contacto, mensaje o consentimiento
            asociado a formularios. El test diagnóstico guarda resultados en el navegador mediante localStorage, sin base de datos propia.
          </p>

          <h2>Formularios</h2>
          <p>
            El formulario de contacto y el formulario de descarga/checklist están preparados para Netlify Forms u otras herramientas similares. Si se activan,
            los datos se tratarán para responder solicitudes, gestionar colaboraciones, enviar recursos o atender correcciones de contenido.
          </p>

          <h2>Consentimiento y herramientas futuras</h2>
          <p>
            Este sitio puede incorporar en el futuro herramientas de analítica, publicidad o email marketing como Netlify Forms, Mailchimp, Brevo,
            Google Analytics o AdSense. En caso de activarlas, se actualizará esta política.
          </p>

          <h2>Derechos</h2>
          <p>
            Puedes solicitar acceso, rectificación, supresión, oposición, limitación del tratamiento, portabilidad y demás derechos aplicables escribiendo a
            <a className="text-link" href="mailto:contacto@tudominio.com"> contacto@tudominio.com</a>. Sustituye este email por el contacto real antes de publicar.
          </p>

          <h2>Conservación</h2>
          <p>
            Los datos se conservarán solo durante el tiempo necesario para atender la solicitud o cumplir obligaciones aplicables. Los resultados del test se guardan
            localmente en el dispositivo del usuario y pueden borrarse reiniciando el test o limpiando datos del navegador.
          </p>

          <p className="updated-note">Última actualización editable: {lastUpdated}</p>
        </div>
      </div>
    </section>
  );
}
