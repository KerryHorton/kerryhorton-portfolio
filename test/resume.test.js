import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));

test("the resume viewer references a valid PDF", async () => {
  const viewer = await readFile(new URL("../kerry-resume.js", import.meta.url), "utf8");
  const pathMatch = viewer.match(/var PDF = "([^"]+)"/);
  assert.ok(pathMatch, "resume path is declared");

  const relativePath = decodeURIComponent(pathMatch[1]).replace(/^\//, "");
  const pdf = await readFile(new URL(relativePath, `file://${projectRoot}/`));
  assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
});

test("same-origin resume embedding is allowed", async () => {
  const middleware = await readFile(new URL("../middleware.js", import.meta.url), "utf8");
  assert.match(middleware, /"X-Frame-Options": "SAMEORIGIN"/);
});

test("the embedded viewer opens fit-to-width, not the tiny default fit-page view", async () => {
  const viewer = await readFile(new URL("../kerry-resume.js", import.meta.url), "utf8");
  assert.match(viewer, /view=FitH/);
});
