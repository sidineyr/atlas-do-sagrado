"use client";

import { Award, Check, LockKeyhole } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { modules } from "../course-data";

const STORAGE_KEY = "atlas-completed-modules";

function readCompleted() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
    return Array.isArray(parsed) ? parsed.filter((slug) => modules.some((module) => module.slug === slug)) : [];
  } catch {
    return [];
  }
}

export function ModuleCompletion({ slug }: { slug: string }) {
  useEffect(() => {
    const completed = new Set(readCompleted());
    completed.add(slug);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completed)));
  }, [slug]);
  return null;
}

export function CertificateInvitation() {
  const [completed, setCompleted] = useState<string[]>([]);
  useEffect(() => {
    const timer = window.setTimeout(() => setCompleted(readCompleted()), 0);
    return () => window.clearTimeout(timer);
  }, []);
  const ready = completed.length === modules.length;
  const percent = Math.round((completed.length / modules.length) * 100);

  return (
    <section className="certificate-invitation" aria-labelledby="certificate-title">
      <div className="certificate-icon">{ready ? <Award aria-hidden="true" /> : <LockKeyhole aria-hidden="true" />}</div>
      <div className="certificate-copy">
        <p className="eyebrow">Conclusão simbólica</p>
        <h2 id="certificate-title">{ready ? "Seu certificado está disponível." : "Percorra a trilha e receba um certificado."}</h2>
        <p>{ready ? "Você visitou os oito módulos. Informe seu nome e baixe o PDF simbólico." : `Você já percorreu ${completed.length} de ${modules.length} módulos. Não há prova nem nota.`}</p>
        <div className="progress-track" aria-label={`${percent}% da trilha concluída`}><span style={{ width: `${percent}%` }} /></div>
      </div>
      <Link className={ready ? "primary-action" : "secondary-action"} href="/certificado">
        {ready ? <Check aria-hidden="true" size={18} /> : null}{ready ? "Emitir certificado" : "Ver meu progresso"}
      </Link>
    </section>
  );
}
