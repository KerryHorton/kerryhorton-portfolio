import test from "node:test";
import assert from "node:assert/strict";
import {
  createSessionToken,
  passwordsMatch,
  verifySessionToken
} from "../lib/session.js";

const SECRET = "test-session-secret-that-is-at-least-32-characters";
const NOW = Date.parse("2026-06-30T12:00:00Z");

test("password comparison accepts only the exact password", async () => {
  assert.equal(await passwordsMatch("example-passphrase", "example-passphrase"), true);
  assert.equal(await passwordsMatch("Example-passphrase", "example-passphrase"), false);
  assert.equal(await passwordsMatch("example-passphrase ", "example-passphrase"), false);
});

test("a valid signed session is accepted before expiration", async () => {
  const token = await createSessionToken(SECRET, { now: NOW, maxAgeSeconds: 60 });
  assert.equal(await verifySessionToken(token, SECRET, { now: NOW + 30_000 }), true);
});

test("tampered and expired sessions are rejected", async () => {
  const token = await createSessionToken(SECRET, { now: NOW, maxAgeSeconds: 60 });
  const tampered = `${token.slice(0, -1)}${token.endsWith("a") ? "b" : "a"}`;
  assert.equal(await verifySessionToken(tampered, SECRET, { now: NOW + 30_000 }), false);
  assert.equal(await verifySessionToken(token, SECRET, { now: NOW + 61_000 }), false);
});
