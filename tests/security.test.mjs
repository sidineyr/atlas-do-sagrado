import test from "node:test";
import assert from "node:assert/strict";
import { MAX_CERTIFICATE_BODY_BYTES, allowedCounterPage, readCertificateName, validateCertificateName } from "../app/lib/request-validation.ts";
import { buildCertificatePdf } from "../app/lib/certificate-pdf.ts";

const request = (body, headers = { "Content-Type": "application/json" }) => new Request("https://atlas.test/api/certificate", { method: "POST", body, headers });

test("certificate accepts and normalizes a name from JSON, never from the URL", async () => {
  assert.deepEqual(await readCertificateName(request(JSON.stringify({ name: "  Ana   Joa\u0303o  " }))), { ok: true, name: "Ana João" });
  const queryOnly = new Request("https://atlas.test/api/certificate?name=Ana", { method: "POST", headers: { "Content-Type": "application/json" }, body: "{}" });
  assert.equal((await readCertificateName(queryOnly)).ok, false);
});

test("certificate rejects invalid names and preserves legitimate punctuation", () => {
  for (const name of [undefined, 4, "", " A ", "a".repeat(81), "Ana\u0000Maria"]) assert.equal(validateCertificateName(name).ok, false);
  assert.equal(validateCertificateName("Álvaro D'Ávila-Silva").ok, true);
  assert.equal(validateCertificateName("a".repeat(80)).ok, true);
});

test("certificate rejects non-JSON content and malformed structures", async () => {
  assert.equal((await readCertificateName(request("name=Ana", { "Content-Type": "application/x-www-form-urlencoded" }))).status, 415);
  for (const value of ["{broken", "null", "[]", '"Ana"', '{"name":5}']) {
    assert.equal((await readCertificateName(request(value))).status, 400);
  }
});

test("certificate bounds the actual request bytes even without a content-length", async () => {
  const body = JSON.stringify({ name: "Ana", excess: "a".repeat(MAX_CERTIFICATE_BODY_BYTES) });
  assert.equal((await readCertificateName(request(body))).status, 413);
  assert.equal((await readCertificateName(request(body, { "Content-Type": "application/json", "Content-Length": "12" }))).status, 413);
  assert.equal((await readCertificateName(request('{"name":"Ana"}', { "Content-Type": "application/json", "Content-Length": String(MAX_CERTIFICATE_BODY_BYTES + 1) }))).status, 413);
});

test("certificate request size is limited across streamed chunks", async () => {
  const stream = new ReadableStream({ start(controller) {
    controller.enqueue(new Uint8Array(MAX_CERTIFICATE_BODY_BYTES - 4));
    controller.enqueue(new Uint8Array(8));
    controller.close();
  } });
  const streamed = new Request("https://atlas.test/api/certificate", { method: "POST", headers: { "Content-Type": "application/json" }, body: stream, duplex: "half" });
  assert.equal((await readCertificateName(streamed)).status, 413);
});

test("counter only accepts known page identifiers", () => {
  const pages = ["inicio", "onde-tudo-comeca"];
  assert.equal(allowedCounterPage("https://atlas.test/api/views?page=inicio", pages), "inicio");
  assert.equal(allowedCounterPage("https://atlas.test/api/views?page=onde-tudo-comeca", pages), "onde-tudo-comeca");
  for (const page of ["", "arbitrary-new-page", "inicio%00", "../inicio"]) assert.equal(allowedCounterPage(`https://atlas.test/api/views?page=${page}`, pages), null);
});

test("PDF treats parentheses and backslashes in a name as literal text", () => {
  const pdf = new TextDecoder("latin1").decode(buildCertificatePdf({ studentName: "Ana (teste) \\ Silva", issuedOn: "29/10/2026", certificateId: "TEST" }));
  assert.ok(pdf.startsWith("%PDF-1.4"));
  assert.ok(pdf.trimEnd().endsWith("%%EOF"));
  assert.ok(pdf.includes("Ana \\(teste\\) \\\\ Silva"));
});
