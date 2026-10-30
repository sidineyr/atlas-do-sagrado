import { env } from "cloudflare:workers";
import { modules } from "../../course-data";
import { allowedCounterPage } from "../../lib/request-validation";

const validPages = ["inicio", ...modules.map((module) => module.slug)];

function pageFrom(request: Request) {
  return allowedCounterPage(request.url, validPages);
}

export async function GET(request: Request) {
  const page = pageFrom(request);
  if (!page) return Response.json({ error: "Página inválida" }, { status: 400 });
  try {
    const row = await env.DB.prepare("SELECT count FROM page_views WHERE page = ?").bind(page).first<{ count: number }>();
    return Response.json({ count: row?.count ?? 0 });
  } catch {
    return Response.json({ error: "Contador temporariamente indisponível" }, { status: 503 });
  }
}

export async function POST(request: Request) {
  const page = pageFrom(request);
  if (!page) return Response.json({ error: "Página inválida" }, { status: 400 });
  try {
    const row = await env.DB.prepare(`
      INSERT INTO page_views (page, count, updated_at) VALUES (?, 1, CURRENT_TIMESTAMP)
      ON CONFLICT(page) DO UPDATE SET count = count + 1, updated_at = CURRENT_TIMESTAMP
      RETURNING count
    `).bind(page).first<{ count: number }>();
    return Response.json({ count: row?.count ?? 1 });
  } catch {
    return Response.json({ error: "Contador temporariamente indisponível" }, { status: 503 });
  }
}
