"use client";

import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

export function ViewCounter({ page }: { page: string }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const key = `atlas-view:${page}`;
    const seen = sessionStorage.getItem(key);
    const method = seen ? "GET" : "POST";
    if (!seen) sessionStorage.setItem(key, "1");

    fetch(`/api/views?page=${encodeURIComponent(page)}`, { method })
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((data) => setCount((data as { count: number }).count))
      .catch(() => setCount(null));
  }, [page]);

  return (
    <span className="view-counter" title="Uma leitura por página em cada sessão; nenhum dado pessoal é armazenado.">
      <Eye aria-hidden="true" size={16} />
      {count === null ? "Contando leituras…" : `${count.toLocaleString("pt-BR")} ${count === 1 ? "leitura" : "leituras"}`}
    </span>
  );
}
