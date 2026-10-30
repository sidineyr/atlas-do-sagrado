import { buildCertificatePdf } from "../../lib/certificate-pdf";
import { readCertificateName } from "../../lib/request-validation";

export function GET() {
  return Response.json({ error: "Use o formulário para gerar seu certificado sem colocar o nome no endereço." }, {
    status: 405,
    headers: { Allow: "POST", "Cache-Control": "no-store" },
  });
}

export async function POST(request: Request) {
  const result = await readCertificateName(request);
  if (!result.ok) return Response.json({ error: result.error }, { status: result.status, headers: { "Cache-Control": "no-store" } });
  const { name } = result;

  const now = new Date();
  const issuedOn = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "America/Sao_Paulo",
  }).format(now);
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(`atlas-do-sagrado|${name.toLowerCase()}|${now.toISOString().slice(0, 10)}`)
  );
  const certificateId = `ADS-${Array.from(new Uint8Array(digest)).slice(0, 5).map((byte) => byte.toString(16).padStart(2, "0")).join("").toUpperCase()}`;
  const pdf = buildCertificatePdf({ studentName: name, issuedOn, certificateId });
  const safeName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "").toLowerCase();

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="certificado-atlas-do-sagrado-${safeName || "estudante"}.pdf"`,
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
