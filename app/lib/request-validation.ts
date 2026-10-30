export const MAX_CERTIFICATE_BODY_BYTES = 1024;

type NameResult = { ok: true; name: string } | { ok: false; status: number; error: string };

export function validateCertificateName(value: unknown): NameResult {
  if (typeof value !== "string") return { ok: false, status: 400, error: "Informe um nome entre 2 e 80 caracteres." };
  const name = value.normalize("NFC").trim().replace(/\s+/gu, " ");
  if (name.length < 2 || name.length > 80 || /[\u0000-\u001f\u007f]/u.test(name)) {
    return { ok: false, status: 400, error: "Informe um nome entre 2 e 80 caracteres, sem caracteres de controle." };
  }
  return { ok: true, name };
}

export async function readCertificateName(request: Request): Promise<NameResult> {
  if (!/^application\/json(?:\s*;|$)/iu.test(request.headers.get("content-type") ?? "")) {
    return { ok: false, status: 415, error: "Envie o nome no formato JSON." };
  }
  const contentLength = request.headers.get("content-length");
  if (contentLength !== null && Number(contentLength) > MAX_CERTIFICATE_BODY_BYTES) {
    return { ok: false, status: 413, error: "O pedido é muito grande. Envie apenas seu nome." };
  }
  const reader = request.body?.getReader();
  if (!reader) return { ok: false, status: 400, error: "Informe o nome para gerar o certificado." };
  const chunks: Uint8Array[] = [];
  let length = 0;
  try {
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      length += chunk.value.byteLength;
      if (length > MAX_CERTIFICATE_BODY_BYTES) {
        await reader.cancel();
        return { ok: false, status: 413, error: "O pedido é muito grande. Envie apenas seu nome." };
      }
      chunks.push(chunk.value);
    }
    const bytes = new Uint8Array(length);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
    const data: unknown = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      return { ok: false, status: 400, error: "Informe o nome no campo indicado." };
    }
    return validateCertificateName((data as { name?: unknown }).name);
  } catch {
    return { ok: false, status: 400, error: "Não foi possível ler o pedido. Tente novamente." };
  } finally { reader.releaseLock(); }
}

export function allowedCounterPage(url: string, validPages: readonly string[]) {
  const page = new URL(url).searchParams.get("page") ?? "";
  return validPages.includes(page) ? page : null;
}
