"use client";
import { useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { modules, getStudyPlan } from "../course-data";
import { matchesModule } from "../lib/catalog";

const categories = ["Origens & método", "Mundos antigos", "Tradições da Ásia", "Histórias conectadas", "Territórios & diásporas", "Religião & sociedade", "Vidas seculares", "Perguntas filosóficas"];
const filters = [
  { label: "Todos os capítulos", indexes: [0,1,2,3,4,5,6,7] },
  { label: "Histórias & contextos", indexes: [0,1,5] },
  { label: "Tradições vivas", indexes: [2,3,4] },
  { label: "Ideias & não religião", indexes: [6,7] },
];
export function ModuleCatalog() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState(0);
  const results = modules.filter((module, index) => filters[filter].indexes.includes(index) && matchesModule(module, query));
  return <>
    <div className="catalog-toolbar">
      <div className="catalog-filters" role="group" aria-label="Filtrar capítulos por tema">{filters.map((item,index) => <button type="button" aria-pressed={index===filter} key={item.label} onClick={()=>setFilter(index)}>{item.label}</button>)}</div>
      <div className="catalog-search"><label htmlFor="module-search"><Search aria-hidden="true" size={18} /><span className="sr-only">Buscar nos capítulos</span></label><input id="module-search" type="search" value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="O que você quer descobrir?" aria-describedby="catalog-count" /></div>
    </div>
    <div className="catalog-count"><p id="catalog-count" role="status">{results.length} de {modules.length} capítulos{query ? ` para “${query}”` : ""}</p>{(query || filter!==0) && <button type="button" onClick={()=>{setQuery("");setFilter(0);}}>Limpar busca e filtros</button>}</div>
    <noscript>A busca e os filtros precisam de JavaScript. A lista completa está disponível abaixo.</noscript>
    {results.length===0 && <div className="empty-state"><h3>Nenhum capítulo por aqui.</h3><p>Tente outro termo ou limpe os filtros para voltar ao percurso completo.</p></div>}
    <ol className="module-list">{results.map((module)=>{
      const index=modules.findIndex((item)=>item.slug===module.slug);
      return <li key={module.slug} value={index+1}><a className="module-card" href={`/modulos/${module.slug}`}><span className="module-number">{String(index+1).padStart(2,"0")}</span><span className="module-body"><span className="module-category">{categories[index]}</span><strong>{module.title}</strong><span>{module.summary}</span><span className="module-time">{getStudyPlan(module).reading} min de leitura · fontes e reflexão</span></span><ArrowUpRight className="module-arrow" aria-hidden="true" size={21}/></a></li>;
    })}</ol>
  </>;
}
