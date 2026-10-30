"use client";

import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

export function ViewCounter({ page }: { page: string }) {
  const [state, setState] = useState<{ page: string; count: number | null; failed: boolean }>({ page: "", count: null, failed: false });

  useEffect(() => {
    const key = `atlas-view:${page}`;
    let method = "GET";
    try { method = window.sessionStorage.getItem(key) ? "GET" : "POST"; }
    catch { /* Read-only fallback avoids repeated increments when storage is unavailable. */ }
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 8000);
    let active = true;

    fetch(`/api/views?page=${encodeURIComponent(page)}`, { method, signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error("Contador indisponível");
        const data: unknown = await response.json();
        const count = data && typeof data === "object" ? (data as { count?: unknown }).count : null;
        if (typeof count !== "number" || !Number.isSafeInteger(count) || count < 0) throw new Error("Resposta inválida");
        if (!active) return;
        if (method === "POST") {
          try { window.sessionStorage.setItem(key, "1"); } catch { /* Counting never blocks reading. */ }
        }
        setState({ page, count, failed: false });
      })
      .catch(() => { if (active) setState({ page, count: null, failed: true }); })
      .finally(() => window.clearTimeout(timeout));
    return () => { active = false; window.clearTimeout(timeout); controller.abort(); };
  }, [page]);

  const current = state.page === page ? state : { count: null, failed: false };
  return (
    <span className="view-counter" title="Indicador aproximado de acessos, não de pessoas nem de leitura concluída.">
      <Eye aria-hidden="true" size={16} />
      {current.failed ? "Contador indisponível" : current.count === null ? "Consultando acessos…" : `${current.count.toLocaleString("pt-BR")} ${current.count === 1 ? "acesso aproximado" : "acessos aproximados"}`}
    </span>
  );
}
