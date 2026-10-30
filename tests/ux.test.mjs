import test from "node:test";
import assert from "node:assert/strict";
import { modules, getModule, getStudyPlan } from "../app/course-data.ts";
import { matchesModule } from "../app/lib/catalog.ts";
import { COMPLETION_KEY, parseCompleted, saveCompletion } from "../app/lib/progress.ts";

const slugs = modules.map((module) => module.slug);

test("completion ignores malformed, duplicated and unknown entries", () => {
  assert.deepEqual(parseCompleted('{broken', slugs), []);
  assert.deepEqual(parseCompleted('{}', slugs), []);
  assert.deepEqual(parseCompleted(JSON.stringify([slugs[0], slugs[0], 'unknown', 4]), slugs), [slugs[0]]);
});

test("legacy automatic visits do not unlock confirmed completion", () => {
  const entries = new Map([['atlas-completed-modules', JSON.stringify(slugs)]]);
  const storage = { getItem: (key) => entries.get(key) ?? null, setItem: (key, value) => entries.set(key, value) };
  assert.deepEqual(parseCompleted(storage.getItem(COMPLETION_KEY), slugs), []);
  saveCompletion(storage, slugs[0], true, slugs);
  assert.deepEqual(parseCompleted(storage.getItem(COMPLETION_KEY), slugs), [slugs[0]]);
  saveCompletion(storage, slugs[0], false, slugs);
  assert.deepEqual(parseCompleted(storage.getItem(COMPLETION_KEY), slugs), []);
  assert.equal(entries.get('atlas-completed-modules'), JSON.stringify(slugs));
});

test("unavailable storage reports failure and never silently succeeds", () => {
  const storage = { getItem: () => null, setItem: () => { throw new Error('quota'); } };
  assert.throws(() => saveCompletion(storage, slugs[0], true, slugs), /quota/);
  assert.throws(() => saveCompletion(storage, 'unknown', true, slugs), /desconhecido/);
});

test("search finds body topics without accents and supports an empty result", () => {
  assert.ok(matchesModule(getModule('africa-americas-brasil'), 'CANDOMBLE'));
  assert.ok(matchesModule(getModule('ateismo-agnosticismo'), 'agnosticismo'));
  assert.equal(modules.filter((module) => matchesModule(module, 'zzzinexistente')).length, 0);
  assert.equal(modules.filter((module) => matchesModule(module, ' ')).length, 8);
});

test("module references and study totals remain consistent", () => {
  assert.equal(new Set(slugs).size, 8);
  for (const module of modules) {
    const plan = getStudyPlan(module);
    assert.equal(plan.total, plan.reading + plan.reflection + plan.sources);
    assert.ok(plan.reading >= 1);
    for (const section of module.sections) {
      for (const index of section.sourceIndexes ?? []) assert.ok(module.sources[index], `${module.slug}: missing source ${index}`);
    }
  }
  assert.ok(getModule('africa-americas-brasil').sections.every((section) => section.sourceIndexes?.length));
});
