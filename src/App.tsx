import Header from "./components/Header";
import CookieBanner from "./components/CookieBanner";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import PrivacyPage from "./pages/PrivacyPage";
import CookiesPage from "./pages/CookiesPage";
import ContactPage from "./pages/ContactPage";
import SourcesPage from "./pages/SourcesPage";
import ComparatorPage from "./pages/ComparatorPage";
import GoPage from "./pages/GoPage";
import NotFoundPage from "./pages/NotFoundPage";

const pageMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "FacturaRadar | Test VERI*FACTU y factura electrónica",
    description: "Test orientativo sobre VERI*FACTU, factura electrónica y registro horario digital para autónomos y pequeñas empresas."
  },
  "/comparador": {
    title: "Comparador de facturación, VERI*FACTU y gestoría online | FacturaRadar",
    description: "Compara opciones básicas, software de facturación, programas profesionales, gestorías online y asesorías tradicionales."
  },
  "/aviso-legal": {
    title: "Aviso legal | FacturaRadar",
    description: "Aviso legal editable de FacturaRadar, herramienta informativa sobre facturación digital para España."
  },
  "/privacidad": {
    title: "Política de privacidad | FacturaRadar",
    description: "Información sobre formularios, localStorage y posibles herramientas futuras de analítica, publicidad o email marketing."
  },
  "/cookies": {
    title: "Política de cookies | FacturaRadar",
    description: "Información sobre cookies técnicas y posibles cookies futuras de análisis, publicidad o afiliación."
  },
  "/contacto": {
    title: "Contacto | FacturaRadar",
    description: "Contacto para sugerencias, colaboraciones, afiliados o correcciones de contenido."
  },
  "/fuentes": {
    title: "Fuentes oficiales | FacturaRadar",
    description: "Enlaces a fuentes oficiales para revisar información actualizada sobre normativa y digitalización."
  }
};

function renderRoute(pathname: string) {
  if (pathname === "/") return <HomePage />;
  if (pathname === "/comparador") return <ComparatorPage />;
  if (pathname === "/aviso-legal") return <LegalPage />;
  if (pathname === "/privacidad") return <PrivacyPage />;
  if (pathname === "/cookies") return <CookiesPage />;
  if (pathname === "/contacto") return <ContactPage />;
  if (pathname === "/fuentes") return <SourcesPage />;
  if (pathname.startsWith("/go/")) return <GoPage slug={pathname.replace("/go/", "")} />;
  return <NotFoundPage />;
}

function updateMeta(pathname: string) {
  const meta = pageMeta[pathname] ?? {
    title: "FacturaRadar | Soluciones digitales para facturación",
    description: "Orientación sobre VERI*FACTU, factura electrónica, asesoría fiscal y registro horario digital."
  };
  document.title = meta.title;
  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (description) description.content = meta.description;
}

export default function App() {
  const pathname = window.location.pathname.length > 1 ? window.location.pathname.replace(/\/$/, "") : window.location.pathname;
  updateMeta(pathname);

  return (
    <>
      <Header />
      <main>{renderRoute(pathname)}</main>
      <Footer />
      <CookieBanner />
    </>
  );
}
