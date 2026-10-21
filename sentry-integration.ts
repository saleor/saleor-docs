import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";
import { sentryVitePlugin } from "@sentry/vite-plugin";

export function sentrySourceMaps(): AstroIntegration {
  const { SENTRY_AUTH_TOKEN: authToken, SENTRY_ORG: org, SENTRY_PROJECT: project } = process.env;
  if (authToken && (!org || !project)) {
    throw new Error("SENTRY_ORG and SENTRY_PROJECT are required when SENTRY_AUTH_TOKEN is set.");
  }
  return {
    name: "saleor-sentry-source-maps",
    hooks: {
      "astro:config:setup": ({ updateConfig, command, config }) => {
        if (command !== "build" || !authToken) return;
        updateConfig({
          vite: {
            build: { sourcemap: "hidden" },
            plugins: [sentryVitePlugin({
              authToken, org, project,
              telemetry: false,
              release: { name: process.env.VERCEL_GIT_COMMIT_SHA || process.env.GITHUB_SHA },
              sourcemaps: { filesToDeleteAfterUpload: [`${fileURLToPath(config.outDir)}**/*.map`, ".vercel/output/**/*.map"] },
            })],
          },
        });
      },
    },
  };
}
