// v1 registered page visits automatically. Keep it intact, but do not present
// those visits as the student's explicit declaration of completion.
export const COMPLETION_KEY = "atlas-confirmed-modules-v2";
export const PROGRESS_EVENT = "atlas-progress-change";

export function parseCompleted(value: string | null, validSlugs: readonly string[]): string[] {
  try {
    const parsed: unknown = JSON.parse(value ?? "[]");
    if (!Array.isArray(parsed)) return [];
    return [...new Set(parsed.filter((slug): slug is string => typeof slug === "string" && validSlugs.includes(slug)))];
  } catch { return []; }
}

export function saveCompletion(storage: Pick<Storage, "getItem" | "setItem">, slug: string, done: boolean, validSlugs: readonly string[]) {
  if (!validSlugs.includes(slug)) throw new Error("Módulo desconhecido.");
  const completed = new Set(parseCompleted(storage.getItem(COMPLETION_KEY), validSlugs));
  if (done) completed.add(slug);
  else completed.delete(slug);
  storage.setItem(COMPLETION_KEY, JSON.stringify([...completed]));
}
