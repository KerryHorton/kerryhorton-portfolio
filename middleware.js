import { next } from "@vercel/functions";
import {
  readCookie,
  SESSION_COOKIE,
  verifySessionToken
} from "./lib/session.js";

const PUBLIC_PATHS = new Set([
  "/gate.html",
  "/kerry-gate.js",
  "/api/auth"
]);

const RESPONSE_HEADERS = {
  "Referrer-Policy": "no-referrer",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "X-Robots-Tag": "noindex, nofollow"
};

export default async function portfolioAccess(request) {
  const url = new URL(request.url);
  const isPublicPath = PUBLIC_PATHS.has(url.pathname);
  const sessionSecret = process.env.PORTFOLIO_SESSION_SECRET;
  const configured = typeof sessionSecret === "string" && sessionSecret.length >= 32;
  const token = readCookie(request.headers.get("cookie"), SESSION_COOKIE);
  const authenticated = configured && token
    ? await verifySessionToken(token, sessionSecret)
    : false;

  if (isPublicPath) {
    if (url.pathname === "/gate.html" && authenticated) {
      return Response.redirect(new URL("/", request.url), 303);
    }
    return next({ headers: RESPONSE_HEADERS });
  }

  if (!configured) {
    return new Response("Portfolio access is not configured.", {
      status: 503,
      headers: { ...RESPONSE_HEADERS, "Cache-Control": "no-store" }
    });
  }

  if (authenticated) return next({ headers: RESPONSE_HEADERS });

  if (url.pathname.startsWith("/api/")) {
    return Response.json(
      { error: "Unauthorized." },
      { status: 401, headers: { ...RESPONSE_HEADERS, "Cache-Control": "no-store" } }
    );
  }

  const gateUrl = new URL("/gate.html", request.url);
  gateUrl.searchParams.set("next", `${url.pathname}${url.search}`);
  return Response.redirect(gateUrl, 307);
}

export const config = {
  matcher: "/:path*"
};
