export const SESSION_COOKIE = "kerry_portfolio_session";
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

const encoder = new TextEncoder();

function toBase64Url(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function fromBase64Url(value) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((value.length + 3) % 4);
  const binary = atob(padded);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

async function importHmacKey(secret) {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function passwordsMatch(provided, expected) {
  if (typeof provided !== "string" || typeof expected !== "string") return false;

  const [providedHash, expectedHash] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(provided)),
    crypto.subtle.digest("SHA-256", encoder.encode(expected))
  ]);

  const left = new Uint8Array(providedHash);
  const right = new Uint8Array(expectedHash);
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) {
    difference |= left[index] ^ right[index];
  }
  return difference === 0;
}

export async function createSessionToken(sessionSecret, options = {}) {
  const now = options.now ?? Date.now();
  const maxAgeSeconds = options.maxAgeSeconds ?? SESSION_MAX_AGE_SECONDS;
  const payload = toBase64Url(
    encoder.encode(JSON.stringify({
      version: 1,
      expiresAt: Math.floor(now / 1000) + maxAgeSeconds
    }))
  );
  const key = await importHmacKey(sessionSecret);
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return `${payload}.${toBase64Url(new Uint8Array(signature))}`;
}

export async function verifySessionToken(token, sessionSecret, options = {}) {
  if (typeof token !== "string" || typeof sessionSecret !== "string") return false;

  const [payload, signature, extra] = token.split(".");
  if (!payload || !signature || extra) return false;

  try {
    const key = await importHmacKey(sessionSecret);
    const signatureIsValid = await crypto.subtle.verify(
      "HMAC",
      key,
      fromBase64Url(signature),
      encoder.encode(payload)
    );
    if (!signatureIsValid) return false;

    const decoded = JSON.parse(new TextDecoder().decode(fromBase64Url(payload)));
    const now = options.now ?? Date.now();
    return decoded.version === 1 &&
      Number.isInteger(decoded.expiresAt) &&
      decoded.expiresAt > Math.floor(now / 1000);
  } catch {
    return false;
  }
}

export function readCookie(cookieHeader, name) {
  if (!cookieHeader) return null;
  for (const part of cookieHeader.split(";")) {
    const separator = part.indexOf("=");
    if (separator === -1) continue;
    const key = part.slice(0, separator).trim();
    if (key === name) return decodeURIComponent(part.slice(separator + 1).trim());
  }
  return null;
}

export function sessionCookie(token, requestUrl) {
  const secure = new URL(requestUrl).protocol === "https:";
  return [
    `${SESSION_COOKIE}=${encodeURIComponent(token)}`,
    "Path=/",
    `Max-Age=${SESSION_MAX_AGE_SECONDS}`,
    "HttpOnly",
    "SameSite=Lax",
    secure ? "Secure" : ""
  ].filter(Boolean).join("; ");
}

export function expiredSessionCookie(requestUrl) {
  const secure = new URL(requestUrl).protocol === "https:";
  return [
    `${SESSION_COOKIE}=`,
    "Path=/",
    "Max-Age=0",
    "HttpOnly",
    "SameSite=Lax",
    secure ? "Secure" : ""
  ].filter(Boolean).join("; ");
}

