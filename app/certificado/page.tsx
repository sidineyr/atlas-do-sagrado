"use client";

import { Award, CheckCircle2, Download, LockKeyhole } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { CourseHeader } from "../components/course-header";
import { SiteFooter } from "../components/site-footer";
import { modules } from "../course-data";

const STORAGE_KEY = "atlas-completed-modules";

export default function CertificatePage() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [name, setName] = useState("");
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
        setCompleted(Array.isArray(parsed) ? parsed : []);
      } catch { setCompleted([]); }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);
  const ready = modules.every((module) => completed.includes(module.slug));

  function download(event: FormEvent) {
    event.preventDefault();
    if (!ready || name.trim().length < 2) return;
    window.location.href = `/api/certificate?name=${encodeURIComponent(name.trim())}`;
  }

  return (
    <div className="site-shell">
      <CourseHeader />
      <main className="certificate-page">
        <div className="certificate-status">
          <span className="certificate-seal">{ready ? <Award aria-hidden="true" /> : <LockKeyhole aria-hidden="true" />}</span>
          <p className="eyebrow">Certificado simbólico</p>
          <h1>{ready ? "Trilha percorrida." : "Ainda há páginas no caminho."}</h1>
          <p>{ready ? "Você abriu os oito módulos deste curso. Agora pode registrar simbolicamente esse percurso." : `Seu navegador registra ${completed.filter((slug) => modules.some((module) => module.slug === slug)).length} de ${modules.length} módulos visitados.`}</p>
        </div>

        <ol className="completion-list">
          {modules.map((module, index) => {
            const done = completed.includes(module.slug);
            return <li key={module.slug} className={done ? "done" : ""}><span>{done ? <CheckCircle2 aria-hidden="true" /> : String(index + 1).padStart(2, "0")}</span><Link href={`/modulos/${module.slug}`}>{module.title}</Link></li>;
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
