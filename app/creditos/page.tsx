import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { CourseHeader } from "../components/course-header";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  alternates: { canonical: "/creditos" },
  title: "Créditos e fontes | Atlas do Sagrado",
  description: "Autoria, perfis e instituições que fundamentam o Atlas do Sagrado.",
};

const references = [
  ["OpenStax - World History, Volume 1", "https://openstax.org/books/world-history-volume-1/pages/1-introduction"],
  ["OpenStax - World History, Volume 2", "https://openstax.org/details/books/world-history-volume-2"],
  ["Stanford Encyclopedia of Philosophy - Philosophy of Religion", "https://plato.stanford.edu/entries/philosophy-religion/"],
  ["Stanford Encyclopedia of Philosophy - Atheism and Agnosticism", "https://plato.stanford.edu/entries/atheism-agnosticism/"],
  ["Internet Encyclopedia of Philosophy - Philosophy of Religion", "https://iep.utm.edu/religion/"],
  ["Pew Research Center - Global Religious Landscape", "https://www.pewresearch.org/religion/2025/06/09/how-the-global-religious-landscape-changed-from-2010-to-2020/"],
  ["IBGE - Censo 2022: religiões", "https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/43593-censo-2022-catolicos-seguem-em-queda-evangelicos-e-sem-religiao-crescem-no-pais"],
  ["IPHAN - Terreiro da Casa Branca", "https://www.gov.br/iphan/pt-br/assuntos/noticias/iphan-celebra-40-anos-de-tombamento-do-terreiro-da-casa-branca-ba"],
  ["The Metropolitan Museum of Art - Ancient Near Eastern Art", "https://www.metmuseum.org/toah/hd/ane/hd_ane.htm"],
];

export default function CreditsPage() {
  return (
    <div className="site-shell">
      <CourseHeader />
      <main className="credits-page">
        <header><p className="eyebrow">Transparência editorial</p><h1>Créditos e fontes</h1><p>Quem idealizou, quem criou e quais instituições fundamentam este percurso.</p></header>
        <section><h2>Criação</h2><dl className="credit-roles"><div><dt>Idealização e direção pedagógica</dt><dd>Sidiney Rodrigues, pedagogo.</dd></div><div><dt>Criação e desenvolvimento</dt><dd>ChatGPT, a partir da orientação e curadoria de Sidiney Rodrigues.</dd></div><div><dt>Ícones de interface</dt><dd><a href="https://lucide.dev/" target="_blank" rel="noreferrer">Lucide Icons</a>, distribuídos sob licença ISC.</dd></div></dl></section>
        <section><h2>Perfis do idealizador</h2><div className="profile-links"><a href="https://github.com/sidineyr" target="_blank" rel="noreferrer">GitHub <ExternalLink aria-hidden="true" size={15} /></a><a href="https://www.linkedin.com/in/sidineyrodrigues" target="_blank" rel="noreferrer">LinkedIn <ExternalLink aria-hidden="true" size={15} /></a><a href="https://sidineyr.substack.com" target="_blank" rel="noreferrer">Substack <ExternalLink aria-hidden="true" size={15} /></a></div></section>
        <section><h2>Referências verificáveis</h2><p>O curso apresenta sínteses originais. Cada módulo indica suas fontes específicas; esta lista reúne as instituições consultadas.</p><ul className="reference-list">{references.map(([title, url]) => <li key={url}><a href={url} target="_blank" rel="noreferrer"><span>{title}</span><ExternalLink aria-hidden="true" size={16} /></a></li>)}</ul></section>
        <aside className="editorial-note"><strong>Compromisso editorial</strong><p>O Atlas distingue evidência histórica, interpretação acadêmica e narrativa interna das tradições. Links são fornecidos para conferência; nenhuma fonte inexistente é criada para preencher lacunas.</p></aside>
      </main>
      <SiteFooter />
    </div>
  );
}
