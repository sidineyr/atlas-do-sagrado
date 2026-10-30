import { ArrowLeft, ArrowRight, Clock3, ExternalLink, Quote } from "lucide-react";
import { CourseHeader } from "./course-header";
import { ViewCounter } from "./view-counter";
import { ModuleCompletion } from "./trail-progress";
import { SiteFooter } from "./site-footer";
import { getModule, getStudyPlan, modules } from "../course-data";

export function ModulePageView({ slug }: { slug: string }) {
  const module = getModule(slug);
  if (!module) return null;
  const index = modules.findIndex((item) => item.slug === slug);
  const previous = modules[index - 1];
  const next = modules[index + 1];
  const plan = getStudyPlan(module);
  return <div className="site-shell">
    <CourseHeader />
    <main id="conteudo" tabIndex={-1} className="lesson-layout">
      <aside className="lesson-rail" aria-label="Percurso do curso">
        <a className="back-link" href="/#percurso"><ArrowLeft aria-hidden="true" size={16} /> Explorar o atlas</a>
        <p>Os oito capítulos</p>
        <ol>{modules.map((item,i)=><li key={item.slug} className={item.slug===slug?"current":""}><a href={`/modulos/${item.slug}`} aria-current={item.slug===slug?"page":undefined}><span>{String(i+1).padStart(2,"0")}</span>{item.title}</a></li>)}</ol>
      </aside>
      <article className="lesson">
        <header className="lesson-header">
          <p className="eyebrow">Capítulo {String(index+1).padStart(2,"0")} / {module.era}</p>
          <h1>{module.title}</h1>
          <p className="lesson-opening">{module.opening}</p>
          <div className="lesson-meta"><span><Clock3 aria-hidden="true" size={15}/>{plan.reading} min de leitura</span><span>{module.sources.length} referências</span><ViewCounter page={slug}/></div>
        </header>
        <div className="lesson-content">
          <section className="study-guide" aria-labelledby="study-title">
            <p className="eyebrow">Antes de começar</p><h2 id="study-title">Uma leitura, algumas perguntas.</h2>
            <p>Depois da leitura, reserve cerca de {plan.reflection} minutos para refletir. Se quiser aprofundar, sugerimos mais {plan.sources} minutos nas fontes. São estimativas editoriais; ajuste ao seu ritmo.</p>
            {module.objectives && <details><summary>O que você pode aprender neste capítulo</summary><ul>{module.objectives.map((objective)=><li key={objective}>{objective}</li>)}</ul></details>}
          </section>
          <details className="lesson-toc"><summary>Neste capítulo · {module.sections.length} seções</summary><ol>{module.sections.map((section,i)=><li key={section.title}><a href={`#secao-${i+1}`}>{section.title}</a></li>)}<li><a href="#sources-title">Fontes para continuar</a></li></ol></details>
          {module.glossary && <details className="glossary-panel"><summary>Vocabulário de apoio · {module.glossary.length} termos</summary><dl className="lesson-glossary">{module.glossary.map((entry)=><div key={entry.term}><dt>{entry.term}</dt><dd>{entry.definition}</dd></div>)}</dl></details>}
          {module.sections.map((section,i)=><section id={`secao-${i+1}`} key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}{section.points && <ul>{section.points.map((point)=><li key={point}>{point}</li>)}</ul>}{section.sourceIndexes && <p className="section-citations">Investigue nas fontes: {section.sourceIndexes.map((n)=><a key={n} href={`#source-${n+1}`}>[{n+1}] {module.sources[n].institution}</a>)}</p>}</section>)}
          <aside className="pause-card"><Quote aria-hidden="true" size={25}/><div><p className="eyebrow">Leve esta pergunta com você</p><p>{module.pause}</p></div></aside>
          {module.activity && <section aria-labelledby="activity-title"><p className="eyebrow">Experimente explicar</p><h2 id="activity-title">Com suas palavras.</h2><p>{module.activity.prompt}</p><details className="activity-feedback"><summary>Conferir uma resposta possível</summary><p>{module.activity.feedback}</p></details></section>}
          <section className="sources" aria-labelledby="sources-title"><p className="eyebrow">A leitura continua</p><h2 id="sources-title">Fontes, vozes e perspectivas.</h2><p className="source-note">Referências para conferir e aprofundar. Uma fonte pode sustentar uma passagem sem confirmar automaticamente toda interpretação. Links externos abrem em nova aba.</p><ol>{module.sources.map((source,i)=><li key={source.url} id={`source-${i+1}`}><a href={source.url} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"><span><small>[{i+1}] {source.institution}</small><strong>{source.title}</strong></span><ExternalLink aria-hidden="true" size={17}/></a>{source.scope && <p className="source-note">{source.scope}</p>}</li>)}</ol></section>
        </div>
        <ModuleCompletion slug={slug}/>
        <nav className="lesson-pagination" aria-label="Navegação entre capítulos">{previous?<a href={`/modulos/${previous.slug}`}><ArrowLeft aria-hidden="true" size={18}/><span><small>Capítulo anterior</small>{previous.title}</span></a>:<a href="/#percurso">Voltar ao atlas</a>}{next?<a className="next" href={`/modulos/${next.slug}`}><span><small>Continue explorando</small>{next.title}</span><ArrowRight aria-hidden="true" size={18}/></a>:<a className="next" href="/certificado"><span><small>Fim da trilha sugerida</small>Ver meu percurso</span><ArrowRight aria-hidden="true" size={18}/></a>}</nav>
      </article>
    </main><SiteFooter/>
  </div>;
}
