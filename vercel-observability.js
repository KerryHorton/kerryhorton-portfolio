import { inject } from "./vendor/vercel-analytics.mjs";
import { injectSpeedInsights } from "./vendor/vercel-speed-insights.mjs";

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "::1"]);

if (!LOCAL_HOSTS.has(window.location.hostname)) {
  inject({ mode: "production" });
  injectSpeedInsights();
}
