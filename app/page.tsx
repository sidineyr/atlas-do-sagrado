import type { Metadata } from "next";
import { ArrowRight, BookOpen, Compass, Eye, ScrollText } from "lucide-react";
import { CourseHeader } from "./components/course-header";
import { ViewCounter } from "./components/view-counter";
import { CertificateInvitation } from "./components/trail-progress";
import { SiteFooter } from "./components/site-footer";
import { ModuleCatalog } from "./components/module-catalog";
import { modules, getStudyPlan } from "./course-data";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  const studyMinutes = modules.reduce((sum, module) => sum + getStudyPlan(module).total, 0);
  return (
    <div className="site-shell">
      <CourseHeader />
      <main id="conteudo" tabIndex={-1}>
        <section className="intro-grid" aria-labelledby="course-title">
          <div className="intro-copy">
            <p className="eyebrow">Curso aberto e gratuito · leitura autônoma</p>
            <h1 id="course-title">História das religiões sem atalhos fáceis.</h1>
            <p className="lead">
              Um percurso introdutório para compreender como seres humanos criaram,
              transmitiram e transformaram modos de lidar com o sagrado, o sentido,
              a morte e a vida coletiva.
            </p>
            <div className="intro-actions">
              <a className="primary-action" href={`/modulos/${modules[0].slug}`}>
                Começar o percurso <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a className="text-link" href="#percurso">Ver os 8 módulos</a>
            </div>
          </div>
          <aside className="course-note" aria-label="Como estudar">
            <Compass aria-hidden="true" size={24} />
            <h2>Como estudar</h2>
            <p>Leia na ordem sugerida ou escolha um tema. Não há prova nem prazo. As estimativas incluem reflexão e leitura opcional das fontes.</p>
            <dl>
              <div><dt>Formato</dt><dd>8 módulos</dd></div>
              <div><dt>Duração</dt><dd>≈ {studyMinutes} min de estudo</dd></div>
              <div><dt>Nível</dt><dd>Introdutório</dd></div>
            </dl>
          </aside>
        </section>

        <section className="principles" aria-label="Princípios do curso">
          <div><ScrollText aria-hidden="true" /><span><strong>História não é teologia.</strong> O curso descreve crenças sem decidir se são verdadeiras.</span></div>
          <div><BookOpen aria-hidden="true" /><span><strong>Fonte à vista.</strong> Afirmações históricas centrais apontam para leituras verificáveis.</span></div>
          <div><Eye aria-hidden="true" /><span><strong>Pluralidade real.</strong> Tradições são internamente diversas e mudam no tempo.</span></div>
        </section>

        <section className="module-section" id="percurso" aria-labelledby="module-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Percurso sugerido</p>
              <h2 id="module-title">Do vestígio à pergunta filosófica</h2>
            </div>
            <p>O mapa começa com evidências incompletas e termina com questões ainda abertas.</p>
          </div>
          <ModuleCatalog />

        </section>

        <section className="method-note" aria-labelledby="method-title">
          <p className="eyebrow">Nota de método</p>
          <h2 id="method-title">O que podemos afirmar — e o que permanece incerto</h2>
          <p>
            Não existe consenso sobre uma “primeira religião”. Objetos funerários,
            imagens e monumentos permitem inferências, mas não dão acesso direto ao
            pensamento de quem os produziu. Por isso, o curso distingue evidência,
            hipótese acadêmica e narrativa interna de cada tradição.
          </p>
        </section>
        <CertificateInvitation />
      </main>
      <div className="home-footer-wrap"><ViewCounter page="inicio" /></div>
      <SiteFooter />
    </div>
  );
}
