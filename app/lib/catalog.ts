import type { CourseModule } from "../course-data";

export function matchesModule(module: CourseModule, query: string) {
  const normalize = (value: string) => value.normalize("NFD").replace(/\p{M}/gu, "").toLocaleLowerCase("pt-BR");
  const text = normalize([module.title, module.summary, module.era, module.opening, ...module.sections.flatMap((section) => [section.title, ...section.paragraphs]), ...(module.glossary ?? []).map((entry) => entry.term)].join(" "));
  return normalize(query).trim().split(/\s+/u).every((word) => text.includes(word));
}
