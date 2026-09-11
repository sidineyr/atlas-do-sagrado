import { Menu } from "lucide-react";
import Link from "next/link";

export function CourseHeader() {
  return (
    <header className="course-header">
      <Link className="brand" href="/" aria-label="Atlas do Sagrado — início">
        <span className="brand-mark" aria-hidden="true">✦</span>
        <span><strong>Atlas</strong> do Sagrado</span>
      </Link>
      <nav aria-label="Navegação principal">
        <Link href="/#percurso">Módulos</Link>
        <Link href="/certificado">Certificado</Link>
        <Link href="/#method-title">Método</Link>
        <Link href="/creditos">Créditos</Link>
      </nav>
      <details className="mobile-menu">
        <summary aria-label="Abrir menu"><Menu aria-hidden="true" size={22} /></summary>
        <div><Link href="/#percurso">Módulos</Link><Link href="/certificado">Certificado</Link><Link href="/#method-title">Método</Link><Link href="/creditos">Créditos</Link></div>
      </details>
    </header>
  );
}
