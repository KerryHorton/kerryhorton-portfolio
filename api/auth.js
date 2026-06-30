import {
  createSessionToken,
  expiredSessionCookie,
  passwordsMatch,
  sessionCookie
} from "../lib/session.js";

const JSON_HEADERS = {
  "Cache-Control": "no-store",
  "Content-Type": "application/json; charset=utf-8"
};

function json(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...JSON_HEADERS, ...headers }
  });
}

function configuration() {
  const password = process.env.PORTFOLIO_PASSWORD;
  const sessionSecret = process.env.PORTFOLIO_SESSION_SECRET;
  if (!password || !sessionSecret || sessionSecret.length < 32) return null;
  return { password, sessionSecret };
}

export async function POST(request) {
  const config = configuration();
  if (!config) return json({ error: "Portfolio access is not configured." }, 503);

  let submittedPassword;
  try {
    const body = await request.json();
    submittedPassword = body?.password;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  if (typeof submittedPassword !== "string" || submittedPassword.length > 256) {
    return json({ error: "Invalid request." }, 400);
  }

  if (!(await passwordsMatch(submittedPassword, config.password))) {
    await new Promise((resolve) => setTimeout(resolve, 350));
    return json({ error: "Incorrect password." }, 401);
  }

  const token = await createSessionToken(config.sessionSecret);
  return json(
    { ok: true },
    200,
    { "Set-Cookie": sessionCookie(token, request.url) }
  );
}

export function DELETE(request) {
  return json(
    { ok: true },
    200,
    { "Set-Cookie": expiredSessionCookie(request.url) }
  );
}

export function GET() {
  return json({ error: "Method not allowed." }, 405, { Allow: "POST, DELETE" });
}

