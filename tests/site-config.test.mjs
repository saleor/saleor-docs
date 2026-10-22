import test from "node:test";
import assert from "node:assert/strict";
import { resolveSiteUrls } from "../scripts/site-config.mjs";

const vercel = {
  VERCEL_URL: "saleor-docs-build.vercel.app",
  VERCEL_PROJECT_PRODUCTION_URL: "docs.saleor.io",
};

test("preview uses its own deployment URL and the production canonical URL", () => {
  assert.deepEqual(resolveSiteUrls({ ...vercel, VERCEL_ENV: "preview" }), {
    canonical: "https://docs.saleor.io",
    deployment: "https://saleor-docs-build.vercel.app",
  });
});

test("production uses the public domain without SITE_URL", () => {
  assert.deepEqual(resolveSiteUrls({ ...vercel, VERCEL_ENV: "production" }), {
    canonical: "https://docs.saleor.io",
    deployment: "https://docs.saleor.io",
  });
});

test("local development needs no Vercel variables", () => {
  assert.deepEqual(resolveSiteUrls({}), {
    canonical: "http://localhost:4321",
    deployment: "http://localhost:4321",
  });
});

test("obsolete SITE_URL does not override Vercel configuration", () => {
  assert.deepEqual(resolveSiteUrls({ ...vercel, SITE_URL: "https://test.example" }), {
    canonical: "https://docs.saleor.io",
    deployment: "https://saleor-docs-build.vercel.app",
  });
});

test("migration builds can supply a local HTTP origin through the URL inputs", () => {
  assert.deepEqual(resolveSiteUrls({
    VERCEL_URL: "http://localhost:4399",
    VERCEL_PROJECT_PRODUCTION_URL: "http://localhost:4399",
  }), {
    canonical: "http://localhost:4399",
    deployment: "http://localhost:4399",
  });
});

test("falls back to deployment URL if production domain is unavailable", () => {
  assert.deepEqual(resolveSiteUrls({ VERCEL_URL: vercel.VERCEL_URL }), {
    canonical: "https://saleor-docs-build.vercel.app",
    deployment: "https://saleor-docs-build.vercel.app",
  });
});
