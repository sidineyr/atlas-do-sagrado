import type { Metadata } from "next";
import { ArrowRight, BookOpen, Compass, Layers, MoveUpRight } from "lucide-react";
import { CourseHeader } from "./components/course-header";
import { CertificateInvitation } from "./components/trail-progress";
import { SiteFooter } from "./components/site-footer";
import { ModuleCatalog } from "./components/module-catalog";
import { modules, getStudyPlan } from "./course-data";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  const sourceCount = new Set(modules.flatMap((module) => module.sources.map((source) => source.url))).size;
  const studyMinutes = modules.reduce((sum, module) => sum + getStudyPlan(module).total, 0);
  return (
    <div className="site-shell">
      <CourseHeader />
      <main id="conteudo" tabIndex={-1}>
        <section className="atlas-hero" aria-labelledby="course-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="hero-kicker"><span /> Um atlas para aprender a olhar</p>
              <h1 id="course-title">O sagrado tem<br /><em>muitas histórias.</em></h1>
              <p className="hero-lead">Explore crenças, culturas e formas de viver. Um percurso pela história das religiões, pela não religião e pelas perguntas que nos aproximam.</p>
              <div className="hero-actions">
                <a className="primary-action" href="#percurso">Explorar o atlas <ArrowRight aria-hidden="true" size={18} /></a>
                <a className="hero-secondary" href="/modulos/onde-tudo-comeca">Começar pelo primeiro capítulo</a>
              </div>
              <p className="hero-note">Aberto, gratuito e no seu ritmo. Sem prova, prazo ou cadastro.</p>
            </div>
            <div className="hero-map" aria-label="Quatro pontos de partida para explorar o curso">
              <div className="map-caption"><span>Cartografias da experiência humana</span><Compass aria-hidden="true" size={20} /></div>
              <div className="cartography">
                <div className="map-grid" aria-hidden="true" />
                <img src="/images/world-land.svg" alt="" width={720} height={360} />
                <a className="map-point point-americas" href="/modulos/africa-americas-brasil"><span />Américas</a>
                <a className="map-point point-mediterranean" href="/modulos/religiao-no-mundo-antigo"><span />Mundo antigo</a>
                <a className="map-point point-africa" href="/modulos/africa-americas-brasil"><span />África e diásporas</a>
                <a className="map-point point-asia" href="/modulos/tradicoes-do-oriente"><span />Ásias</a>
              </div>
              <p className="map-legend"><span /> Lugares de partida, sem fronteiras para a curiosidade.</p>
            </div>
          </div>
          <div className="atlas-facts">
            <div><BookOpen aria-hidden="true" size={18} /><strong>8 capítulos</strong><span>Um percurso, muitos caminhos</span></div>
            <div><Layers aria-hidden="true" size={18} /><strong>{sourceCount} referências</strong><span>Fontes para conferir e continuar</span></div>
            <div><Compass aria-hidden="true" size={18} /><strong>Leitura autônoma</strong><span>Escolha um tema ou siga a trilha</span></div>
          </div>
        </section>

        <section className="editorial-section" id="percurso" aria-labelledby="module-title">
          <div className="section-intro">
            <p className="section-index">01 / Explore o acervo</p>
            <div className="section-heading"><h2 id="module-title">Por onde começa<br />a sua curiosidade?</h2><p className="section-description">Do vestígio arqueológico às perguntas do presente. Os capítulos se conectam; nenhum deles encerra uma tradição inteira.</p></div>
          </div>
          <ModuleCatalog />
        </section>

        <section className="editorial-section voices-section" aria-labelledby="voices-title">
          <p className="section-index">02 / Amplie o olhar</p>
          <div className="section-heading"><h2 id="voices-title">Outras vozes.<br /><em>Novas perspectivas.</em></h2><p className="section-description">Uma tradição não cabe em um símbolo. Conheça práticas, pessoas e interpretações em seus próprios contextos.</p></div>
          <div className="perspective-grid">
            <a className="perspective-card" href="/modulos/africa-americas-brasil"><span className="module-category">Território & memória</span><span className="perspective-number" aria-hidden="true">01</span><h3>Escutar uma<br />voz Yanomami</h3><p>Davi Kopenawa relaciona conhecimento, floresta e defesa de seu povo. Uma fala situada, com autoria e contexto.</p><span className="card-cta">África, Américas e Brasil <MoveUpRight aria-hidden="true" size={18} /></span></a>
            <a className="perspective-card" href="/modulos/tradicoes-do-oriente"><span className="module-category">Práticas & encontros</span><span className="perspective-number" aria-hidden="true">02</span><h3>Há muitas<br />formas de partilhar</h3><p>O langar sikh e a não violência no jainismo abrem caminhos para compreender histórias próprias.</p><span className="card-cta">Sul e Leste da Ásia <MoveUpRight aria-hidden="true" size={18} /></span></a>
            <a className="perspective-card" href="/modulos/ateismo-agnosticismo"><span className="module-category">Ética & sentido</span><span className="perspective-number" aria-hidden="true">03</span><h3>E quando o sentido<br />não é religioso?</h3><p>Ateísmo, agnosticismo e humanismo secular fazem parte da experiência humana e deste atlas.</p><span className="card-cta">Não religião <MoveUpRight aria-hidden="true" size={18} /></span></a>
          </div>
        </section>

        <section className="method-panel" aria-labelledby="method-title">
          <div className="editorial-section">
            <p className="section-index">03 / Nosso modo de investigar</p>
            <div className="section-heading"><h2 id="method-title">Respeito pelas pessoas.<br /><em>Rigor nas perguntas.</em></h2><p className="section-description">O Atlas é introdutório e não confessional. Estudamos as tradições sem decidir, por elas, quais crenças são verdadeiras.</p></div>
            <div className="method-columns">
              <div><span>01</span><h3>Evidência e interpretação</h3><p>Um objeto encontrado não revela sozinho o pensamento de quem o produziu. Diferenciamos o vestígio, a hipótese e a narrativa de uma tradição.</p></div>
              <div><span>02</span><h3>Pluralidade com contexto</h3><p>Comunidades mudam, discordam e recriam práticas. Evitamos um único porta-voz, uma definição fechada ou uma escala de religiões “mais evoluídas”.</p></div>
              <div><span>03</span><h3>Fontes à vista</h3><p>Identificamos autoria e limites das referências. Pesquisa acadêmica, documento institucional e perspectiva comunitária respondem a perguntas diferentes.</p></div>
            </div>
            <a className="hero-secondary" href="/creditos">Conhecer as fontes e a autoria <ArrowRight aria-hidden="true" size={17} /></a>
          </div>
        </section>

        <section className="editorial-section home-study" aria-labelledby="study-home-title">
          <div><p className="section-index">04 / Faça o seu percurso</p><h2 id="study-home-title">Aprender também<br />é deixar perguntas abertas.</h2></div>
          <div><p>Leia, consulte uma fonte e experimente explicar com suas palavras. Cada capítulo traz objetivos, vocabulário e uma atividade de reflexão.</p><p>O roteiro completo sugere cerca de {studyMinutes} minutos, incluindo aprofundamento opcional. É uma estimativa editorial, não uma exigência de tempo.</p><a className="text-link" href="/modulos/onde-tudo-comeca">Abrir o primeiro capítulo <ArrowRight aria-hidden="true" size={16} /></a></div>
        </section>
        <CertificateInvitation />
      </main>
      <SiteFooter />
    </div>
  );
}
