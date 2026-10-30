"use client";

import { Award, CheckCircle2, Download, LockKeyhole } from "lucide-react";
import { FormEvent, useState } from "react";
import { useCompletedModules } from "../components/trail-progress";
import { CourseHeader } from "../components/course-header";
import { SiteFooter } from "../components/site-footer";
import { modules } from "../course-data";



export default function CertificatePage() {
  const completed = useCompletedModules();
  const [name, setName] = useState("");
  const ready = modules.every((module) => completed.includes(module.slug));

  function download(event: FormEvent) {
    event.preventDefault();
    if (!ready || name.trim().length < 2) return;
    window.location.href = `/api/certificate?name=${encodeURIComponent(name.trim())}`;
  }

  return (
    <div className="site-shell">
      <CourseHeader />
      <main id="conteudo" tabIndex={-1} className="certificate-page">
        <div className="certificate-status">
          <span className="certificate-seal">{ready ? <Award aria-hidden="true" /> : <LockKeyhole aria-hidden="true" />}</span>
          <p className="eyebrow">Certificado simbólico</p>
          <h1>{ready ? "Trilha percorrida." : "Ainda há páginas no caminho."}</h1>
          <p>{ready ? "Você confirmou a conclusão dos oito módulos. Este certificado registra sua declaração, sem avaliação de aprendizagem." : `Seu navegador registra ${completed.filter((slug) => modules.some((module) => module.slug === slug)).length} de ${modules.length} módulos com conclusão confirmada.`}</p>
        </div>

        <p>Leia cada módulo e use o botão de conclusão ao final. O progresso fica neste navegador e pode ser perdido ao limpar os dados locais.</p>
        <ol className="completion-list">
          {modules.map((module, index) => {
            const done = completed.includes(module.slug);
            return <li key={module.slug} className={done ? "done" : ""}><span>{done ? <CheckCircle2 aria-hidden="true" /> : String(index + 1).padStart(2, "0")}</span><a href={`/modulos/${module.slug}`}>{module.title} — {done ? "concluído" : "pendente"}</a></li>;
          })}
        </ol>

        <form className="certificate-form" onSubmit={download}>
          <label htmlFor="student-name">Nome que aparecerá no certificado</label>
          <input id="student-name" value={name} onChange={(event) => setName(event.target.value)} minLength={2} maxLength={80} required disabled={!ready} placeholder="Seu nome completo" />
          <button type="submit" disabled={!ready || name.trim().length < 2}><Download aria-hidden="true" size={18} />Baixar certificado em PDF</button>
          <p>Documento gratuito e simbólico, sem equivalência acadêmica, carga horária certificada ou validade profissional.</p>
        </form>
      </main>
      <SiteFooter />
    </div>
  );
}
