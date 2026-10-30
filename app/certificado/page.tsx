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
  const [downloading, setDownloading] = useState(false);
  const [message, setMessage] = useState("");
  const ready = modules.every((module) => completed.includes(module.slug));

  async function download(event: FormEvent) {
    event.preventDefault();
    if (!ready || downloading || name.trim().length < 2) return;
    setDownloading(true);
    setMessage("");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch("/api/certificate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim() }),
        signal: controller.signal,
      });
      if (!response.ok) {
        const details: unknown = await response.json().catch(() => null);
        const error = details && typeof details === "object" ? (details as { error?: unknown }).error : null;
        throw new Error(typeof error === "string" ? error : "Não foi possível gerar o certificado. Tente novamente.");
      }
      if (!response.headers.get("Content-Type")?.includes("application/pdf")) throw new Error("O certificado não foi recebido em PDF. Tente novamente.");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "certificado-atlas-do-sagrado.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      setMessage("PDF gerado. Confira os downloads do navegador.");
    } catch (error) {
      setMessage(error instanceof Error && error.name !== "AbortError" ? error.message : "A geração demorou mais que o esperado. Tente novamente.");
    } finally {
      window.clearTimeout(timeout);
      setDownloading(false);
    }
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
          <input id="student-name" value={name} onChange={(event) => setName(event.target.value)} minLength={2} maxLength={80} required disabled={!ready || downloading} placeholder="Seu nome completo" autoComplete="name" aria-describedby="certificate-privacy" />
          <button type="submit" disabled={!ready || downloading || name.trim().length < 2}><Download aria-hidden="true" size={18} />{downloading ? "Gerando certificado…" : "Baixar certificado em PDF"}</button>
          <p role="status">{message}</p>
          <p id="certificate-privacy">O nome é enviado ao servidor apenas para gerar o PDF, sem cadastro. Ele não é incluído no endereço da página.</p>
          <p>Documento gratuito e simbólico, sem equivalência acadêmica, carga horária certificada ou validade profissional.</p>
        </form>
      </main>
      <SiteFooter />
    </div>
  );
}
