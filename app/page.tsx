import { ArrowRight, BookOpen, Clock3, Compass, Eye, ScrollText } from "lucide-react";
import { CourseHeader } from "./components/course-header";
import { ViewCounter } from "./components/view-counter";
import { CertificateInvitation } from "./components/trail-progress";
import { SiteFooter } from "./components/site-footer";
import { modules } from "./course-data";

export default function Home() {
  return (
    <div className="site-shell">
      <CourseHeader />
      <main>
        <section className="intro-grid" aria-labelledby="course-title">
          <div className="intro-copy">
            <p className="eyebrow">MOOC aberto · leitura autônoma</p>
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
            <p>Leia na ordem sugerida ou escolha um tema. Não há prova nem prazo.</p>
            <dl>
              <div><dt>Formato</dt><dd>8 módulos</dd></div>
              <div><dt>Duração</dt><dd>≈ 4 horas</dd></div>
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
          <ol className="module-list">
            {modules.map((module, index) => (
              <li key={module.slug}>
                <a className="module-card" href={`/modulos/${module.slug}`}>
                  <span className="module-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="module-body">
                    <span className="module-era">{module.era}</span>
                    <strong>{module.title}</strong>
                    <span>{module.summary}</span>
                  </span>
                  <span className="module-time"><Clock3 aria-hidden="true" size={15} />{module.minutes} min</span>
                  <ArrowRight className="module-arrow" aria-hidden="true" size={20} />
                </a>
              </li>
            ))}
          </ol>
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
