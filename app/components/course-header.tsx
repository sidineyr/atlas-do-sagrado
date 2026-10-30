import { Compass, Menu, ArrowUpRight } from "lucide-react";

export function CourseHeader() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="course-header">
        <a className="brand" href="/" aria-label="Atlas do Sagrado — início"><span className="brand-mark"><Compass aria-hidden="true" size={24} strokeWidth={1.3} /></span><span><strong>Atlas do Sagrado</strong><small className="brand-caption">Histórias, culturas e sentidos</small></span></a>
        <nav aria-label="Navegação principal"><a href="/#percurso">Explorar</a><a href="/#method-title">Nosso olhar</a><a href="/creditos">Fontes & autoria</a><a className="nav-progress" href="/certificado">Meu percurso <ArrowUpRight aria-hidden="true" size={15} /></a></nav>
        <details className="mobile-menu"><summary aria-label="Menu de navegação"><Menu aria-hidden="true" size={24} /></summary><div><a href="/#percurso">Explorar os capítulos</a><a href="/#method-title">Nosso olhar</a><a href="/creditos">Fontes e autoria</a><a href="/certificado">Meu percurso</a></div></details>
      </header>
    </>
  );
}
