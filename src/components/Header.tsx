export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="FacturaRadar inicio">
        <span className="brand-mark">FR</span>
        <span>FacturaRadar</span>
      </a>
      <nav className="nav" aria-label="Navegación principal">
        <a href="/">Inicio</a>
        <a href="/#test">Test</a>
        <a href="/comparador">Comparador</a>
        <a href="/#checklist">Checklist</a>
        <a href="/#faq">FAQ</a>
      </nav>
    </header>
  );
}
