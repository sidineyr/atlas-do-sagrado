import { ArrowLeft, ArrowRight, Clock3, ExternalLink, Quote } from "lucide-react";

import { CourseHeader } from "./course-header";
import { ViewCounter } from "./view-counter";
import { ModuleCompletion } from "./trail-progress";
import { SiteFooter } from "./site-footer";
import { getModule, getStudyPlan, modules } from "../course-data";

export function ModulePageView({ slug }: { slug: string }) {
  const courseModule = getModule(slug);
  if (!courseModule) return null;
  const index = modules.findIndex((item) => item.slug === courseModule.slug);
  const plan = getStudyPlan(courseModule);
  const previous = modules[index - 1];
  const next = modules[index + 1];

  return (
    <div className="site-shell">
      <CourseHeader />
      <main id="conteudo" tabIndex={-1} className="lesson-layout">
        <aside className="lesson-rail" aria-label="Percurso do curso">
          <a className="back-link" href="/#percurso"><ArrowLeft aria-hidden="true" size={16} /> Todos os módulos</a>
          <p>Seu percurso</p>
          <ol>
            {modules.map((item, itemIndex) => (
              <li key={item.slug} className={item.slug === courseModule.slug ? "current" : ""}>
                <a href={`/modulos/${item.slug}`} aria-current={item.slug === courseModule.slug ? "page" : undefined}>
                  <span>{String(itemIndex + 1).padStart(2, "0")}</span>{item.title}
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <article className="lesson">
          <header className="lesson-header">
            <p className="eyebrow">Módulo {String(index + 1).padStart(2, "0")} · {courseModule.era}</p>
            <h1>{courseModule.title}</h1>
            <p className="lesson-opening">{courseModule.opening}</p>
            <div className="lesson-meta"><span><Clock3 aria-hidden="true" size={16} />≈ {plan.total} min de estudo</span><ViewCounter page={courseModule.slug} /></div>
          </header>

          <div className="lesson-content">
            <section className="study-guide" aria-labelledby="study-title">
              <h2 id="study-title">Como estudar este módulo</h2>
              <p>Estimativa editorial: {plan.reading} min de leitura, {plan.reflection} min de reflexão e {plan.sources} min de aprofundamento opcional nas fontes. Ajuste ao seu ritmo; não há tempo mínimo.</p>
              {courseModule.objectives && <><h3>Ao final, procure conseguir</h3><ul>{courseModule.objectives.map((objective) => <li key={objective}>{objective}</li>)}</ul></>}
              <p><a href="#sources-title">Ir às fontes</a> · <a href="#completion-title">Ir ao registro de conclusão</a></p>
            </section>
            {courseModule.glossary && <section aria-labelledby="glossary-title"><h2 id="glossary-title">Palavras para acompanhar a leitura</h2><dl className="lesson-glossary">{courseModule.glossary.map((entry) => <div key={entry.term}><dt>{entry.term}</dt><dd>{entry.definition}</dd></div>)}</dl></section>}
            {courseModule.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
                {section.sourceIndexes && <p className="section-citations">Para conferir: {section.sourceIndexes.map((sourceIndex) => <a key={sourceIndex} href={`#source-${sourceIndex + 1}`}>Fonte {sourceIndex + 1} — {courseModule.sources[sourceIndex].institution}</a>)}</p>}
              </section>
            ))}

            <aside className="pause-card">
              <Quote aria-hidden="true" size={22} />
              <div><p className="eyebrow">Pausa para pensar</p><p>{courseModule.pause}</p></div>
            </aside>

            {courseModule.activity && <section aria-labelledby="activity-title"><h2 id="activity-title">Experimente explicar</h2><p>{courseModule.activity.prompt}</p><details className="activity-feedback"><summary>Conferir uma resposta possível</summary><p>{courseModule.activity.feedback}</p></details></section>}

            <section className="sources" aria-labelledby="sources-title">
              <p className="eyebrow">Para conferir e continuar</p>
              <h2 id="sources-title">Fontes deste módulo</h2>
              <ul>
                {courseModule.sources.map((source, sourceIndex) => (
                  <li key={source.url} id={`source-${sourceIndex + 1}`}>
                    <a href={source.url} target="_blank" rel="noreferrer">
                      <span><strong>{sourceIndex + 1}. {source.title}</strong><small>{source.institution} · abre em nova aba</small></span>
                      <ExternalLink aria-hidden="true" size={16} />
                    </a>
                    {source.scope && <p className="source-note">{source.scope}</p>}
                  </li>
                ))}
              </ul>
              <p className="source-note">Os textos do curso são sínteses originais. As fontes são apresentadas para verificação e aprofundamento, não como confirmação automática de toda interpretação.</p>
            </section>
          </div>

          <ModuleCompletion slug={courseModule.slug} />
          <nav className="lesson-pagination" aria-label="Navegação entre módulos">
            {previous ? <a href={`/modulos/${previous.slug}`}><ArrowLeft aria-hidden="true" size={18} /><span><small>Anterior</small>{previous.title}</span></a> : <span />}
            {next ? <a className="next" href={`/modulos/${next.slug}`}><span><small>Próximo</small>{next.title}</span><ArrowRight aria-hidden="true" size={18} /></a> : <a className="next" href="/"><span><small>Fim do percurso</small>Voltar ao início</span><ArrowRight aria-hidden="true" size={18} /></a>}
          </nav>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
