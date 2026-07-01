import { copyFile, mkdir } from "node:fs/promises";

const projectRoot = new URL("../", import.meta.url);
const vendorDirectory = new URL("vendor/", projectRoot);

const modules = [
  {
    source: "node_modules/@vercel/analytics/dist/index.mjs",
    output: "vercel-analytics.mjs"
  },
  {
    source: "node_modules/@vercel/speed-insights/dist/index.mjs",
    output: "vercel-speed-insights.mjs"
  }
];

await mkdir(vendorDirectory, { recursive: true });
await Promise.all(
  modules.map(({ source, output }) =>
    copyFile(new URL(source, projectRoot), new URL(output, vendorDirectory))
  )
);
