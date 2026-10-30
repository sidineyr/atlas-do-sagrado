import { Menu } from "lucide-react";


export function CourseHeader() {
  return (
    <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="course-header">
      <a className="brand" href="/" aria-label="Atlas do Sagrado — início">
        <span className="brand-mark" aria-hidden="true">✦</span>
        <span><strong>Atlas</strong> do Sagrado</span>
      </a>
      <nav aria-label="Navegação principal">
        <a href="/#percurso">Módulos</a>
        <a href="/certificado">Certificado</a>
        <a href="/#method-title">Método</a>
        <a href="/creditos">Créditos</a>
      </nav>
      <details className="mobile-menu">
        <summary aria-label="Abrir menu"><Menu aria-hidden="true" size={22} /></summary>
        <div><a href="/#percurso">Módulos</a><a href="/certificado">Certificado</a><a href="/#method-title">Método</a><a href="/creditos">Créditos</a></div>
      </details>
    </header>
    </>
  );
}
