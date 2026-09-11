import { ArrowLeft, ArrowRight, Clock3, ExternalLink, Quote } from "lucide-react";
import Link from "next/link";
import { CourseHeader } from "./course-header";
import { ViewCounter } from "./view-counter";
import { ModuleCompletion } from "./trail-progress";
import { SiteFooter } from "./site-footer";
import { getModule, modules } from "../course-data";

export function ModulePageView({ slug }: { slug: string }) {
  const courseModule = getModule(slug);
  if (!courseModule) return null;
  const index = modules.findIndex((item) => item.slug === courseModule.slug);
  const previous = modules[index - 1];
  const next = modules[index + 1];

  return (
    <div className="site-shell">
      <ModuleCompletion slug={courseModule.slug} />
      <CourseHeader />
      <main className="lesson-layout">
        <aside className="lesson-rail" aria-label="Percurso do curso">
          <Link className="back-link" href="/#percurso"><ArrowLeft aria-hidden="true" size={16} /> Todos os módulos</Link>
          <p>Seu percurso</p>
          <ol>
            {modules.map((item, itemIndex) => (
              <li key={item.slug} className={item.slug === courseModule.slug ? "current" : ""}>
                <Link href={`/modulos/${item.slug}`} aria-current={item.slug === courseModule.slug ? "page" : undefined}>
                  <span>{String(itemIndex + 1).padStart(2, "0")}</span>{item.title}
                </Link>
              </li>
            ))}
          </ol>
        </aside>

        <article className="lesson">
          <header className="lesson-header">
            <p className="eyebrow">Módulo {String(index + 1).padStart(2, "0")} · {courseModule.era}</p>
            <h1>{courseModule.title}</h1>
            <p className="lesson-opening">{courseModule.opening}</p>
            <div className="lesson-meta"><span><Clock3 aria-hidden="true" size={16} />{courseModule.minutes} minutos</span><ViewCounter page={courseModule.slug} /></div>
          </header>

          <div className="lesson-content">
            {courseModule.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
              </section>
            ))}

            <aside className="pause-card">
              <Quote aria-hidden="true" size={22} />
              <div><p className="eyebrow">Pausa para pensar</p><p>{courseModule.pause}</p></div>
            </aside>

            <section className="sources" aria-labelledby="sources-title">
              <p className="eyebrow">Para conferir e continuar</p>
              <h2 id="sources-title">Fontes deste módulo</h2>
              <ul>
                {courseModule.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noreferrer">
                      <span><strong>{source.title}</strong><small>{source.institution}</small></span>
                      <ExternalLink aria-hidden="true" size={16} />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="source-note">Os textos do curso são sínteses originais. As fontes são apresentadas para verificação e aprofundamento, não como confirmação automática de toda interpretação.</p>
            </section>
          </div>

          <nav className="lesson-pagination" aria-label="Navegação entre módulos">
            {previous ? <Link href={`/modulos/${previous.slug}`}><ArrowLeft aria-hidden="true" size={18} /><span><small>Anterior</small>{previous.title}</span></Link> : <span />}
            {next ? <Link className="next" href={`/modulos/${next.slug}`}><span><small>Próximo</small>{next.title}</span><ArrowRight aria-hidden="true" size={18} /></Link> : <Link className="next" href="/"><span><small>Fim do percurso</small>Voltar ao início</span><ArrowRight aria-hidden="true" size={18} /></Link>}
          </nav>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
