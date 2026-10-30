"use client";

import { useState } from "react";
import { ArrowRight, Clock3 } from "lucide-react";
import { modules, getStudyPlan } from "../course-data";
import { matchesModule } from "../lib/catalog";

export function ModuleCatalog() {
  const [query, setQuery] = useState("");
  const results = modules.filter((module) => matchesModule(module, query));
  return (
    <>
      <div className="catalog-search">
        <label htmlFor="module-search">Buscar nos módulos</label>
        <p id="search-help">Busque um tema, tradição ou palavra do conteúdo, como Umbanda ou agnosticismo. Os resultados indicam os módulos para leitura.</p>
        <input id="module-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} aria-describedby="search-help" placeholder="Ex.: Candomblé" />
        {query && <button type="button" className="secondary-action" onClick={() => setQuery("")}>Limpar busca</button>}
        <p role="status">{results.length} de {modules.length} módulos encontrados.</p>
        <noscript>Para filtrar, ative JavaScript. A lista completa permanece disponível abaixo.</noscript>
      </div>
      {results.length === 0 && <p>Nenhum módulo encontrado. Tente uma palavra mais ampla ou limpe a busca para ver o percurso completo.</p>}
      <ol className="module-list">
        {results.map((module) => {
          const index = modules.findIndex((item) => item.slug === module.slug);
          return <li key={module.slug} value={index + 1}>
            <a className="module-card" href={`/modulos/${module.slug}`}>
              <span className="module-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="module-body"><span className="module-era">{module.era}</span><strong>{module.title}</strong><span>{module.summary}</span></span>
              <span className="module-time"><Clock3 aria-hidden="true" size={15} />≈ {getStudyPlan(module).total} min de estudo</span>
              <ArrowRight className="module-arrow" aria-hidden="true" size={20} />
            </a>
          </li>;
        })}
      </ol>
    </>
  );
}
