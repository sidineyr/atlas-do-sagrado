"use client";

import { Award, Check, LockKeyhole } from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import { modules } from "../course-data";
import { COMPLETION_KEY, PROGRESS_EVENT, parseCompleted, saveCompletion } from "../lib/progress";

const validSlugs = modules.map((module) => module.slug);
function subscribe(listener: () => void) {
  window.addEventListener("storage", listener);
  window.addEventListener(PROGRESS_EVENT, listener);
  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener(PROGRESS_EVENT, listener);
  };
}
function snapshot() {
  try { return window.localStorage.getItem(COMPLETION_KEY) ?? "[]"; }
  catch { return "[]"; }
}
export function useCompletedModules() {
  const value = useSyncExternalStore(subscribe, snapshot, () => "[]");
  return parseCompleted(value, validSlugs);
}

export function ModuleCompletion({ slug }: { slug: string }) {
  const completed = useCompletedModules();
  const done = completed.includes(slug);
  const [message, setMessage] = useState("");
  function toggle() {
    try {
      saveCompletion(window.localStorage, slug, !done, validSlugs);
      window.dispatchEvent(new Event(PROGRESS_EVENT));
      setMessage(done ? "Conclusão desmarcada." : "Conclusão registrada neste navegador.");
    } catch {
      setMessage("Não foi possível salvar. Verifique se o navegador permite armazenamento local e tente novamente.");
    }
  }
  return (
    <section className="completion-card" aria-labelledby="completion-title">
      <h2 id="completion-title">Seu registro de estudo</h2>
      <p>Depois de ler e refletir, você decide quando concluir. Abrir esta página não conclui o módulo.</p>
      <button type="button" className="primary-action" aria-pressed={done} onClick={toggle}>
        {done ? "Desmarcar conclusão" : "Marcar módulo como concluído"}
      </button>
      <p role="status">{message || (done ? "Módulo concluído por sua confirmação." : "Módulo ainda não concluído.")}</p>
      <p className="source-note">O progresso fica apenas neste navegador. Visitas registradas na versão anterior não contam como conclusões confirmadas. Não há prova nem verificação de aprendizagem.</p>
      <noscript>Ative JavaScript para registrar a conclusão. A leitura e a navegação continuam disponíveis.</noscript>
    </section>
  );
}

export function CertificateInvitation() {
  const completed = useCompletedModules();
  const ready = completed.length === modules.length;
  const percent = Math.round((completed.length / modules.length) * 100);
  return (
    <section className="certificate-invitation" aria-labelledby="certificate-title">
      <div className="certificate-icon">{ready ? <Award aria-hidden="true" /> : <LockKeyhole aria-hidden="true" />}</div>
      <div className="certificate-copy">
        <p className="eyebrow">Conclusão simbólica</p>
        <h2 id="certificate-title">{ready ? "Seu certificado está disponível." : "Estude no seu ritmo e registre o percurso."}</h2>
        <p>{ready ? "Você confirmou a conclusão dos oito módulos. Pode baixar o PDF simbólico." : `Você confirmou ${completed.length} de ${modules.length} módulos. Não há prova nem nota.`}</p>
        <div className="progress-track" role="progressbar" aria-label="Módulos com conclusão confirmada" aria-valuemin={0} aria-valuemax={8} aria-valuenow={completed.length}><span style={{ width: `${percent}%` }} /></div>
      </div>
      <a className={ready ? "primary-action" : "secondary-action"} href="/certificado">
        {ready ? <Check aria-hidden="true" size={18} /> : null}{ready ? "Emitir certificado" : "Ver meu progresso"}
      </a>
    </section>
  );
}
