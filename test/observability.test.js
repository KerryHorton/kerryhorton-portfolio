import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const projectRoot = new URL("../", import.meta.url);

test("public portfolio pages load Vercel observability", async () => {
  const pages = ["index.html", "About.html", "Case Study.html", "gate.html"];

  for (const page of pages) {
    const html = await readFile(new URL(page, projectRoot), "utf8");
    assert.match(
      html,
      /<script type="module" src="vercel-observability\.js"><\/script>/,
      `${page} loads the observability module`
    );
  }
});

test("the observability entry point uses both installed browser APIs", async () => {
  const entry = await readFile(
    new URL("vercel-observability.js", projectRoot),
    "utf8"
  );
  const analytics = await readFile(
    new URL("vendor/vercel-analytics.mjs", projectRoot),
    "utf8"
  );
  const speedInsights = await readFile(
    new URL("vendor/vercel-speed-insights.mjs", projectRoot),
    "utf8"
  );

  assert.match(entry, /inject\(\{ mode: "production" \}\)/);
  assert.match(entry, /injectSpeedInsights\(\)/);
  assert.match(analytics, /export \{[\s\S]*inject/);
  assert.match(speedInsights, /export \{[\s\S]*injectSpeedInsights/);
});

test("the password gate can load the observability modules", async () => {
  const middleware = await readFile(new URL("middleware.js", projectRoot), "utf8");

  assert.match(middleware, /"\/vercel-observability\.js"/);
  assert.match(middleware, /"\/vendor\/vercel-analytics\.mjs"/);
  assert.match(middleware, /"\/vendor\/vercel-speed-insights\.mjs"/);
  assert.match(middleware, /"\/_vercel\/insights\/"/);
  assert.match(middleware, /"\/_vercel\/speed-insights\/"/);
});
