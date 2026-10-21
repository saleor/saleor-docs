import test from "node:test";
import assert from "node:assert/strict";
import { pageMetadata } from "../scripts/page-metadata.mjs";

test("maintained frontmatter supplies page metadata", () => {
  const result = pageMetadata({title: "Product Feed App (Deprecated)", seo: {description: "Migrate to Google Merchant Center."}});
  assert.equal(result.browserTitle, "Product Feed App (Deprecated) | Saleor Commerce Documentation");
  assert.equal(result.openGraphTitle, result.browserTitle);
  assert.equal(result.description, "Migrate to Google Merchant Center.");
  assert.equal(result.openGraphDescription, result.description);
});

test("new pages use the same title format and retain useful descriptions", () => {
  const result = pageMetadata({title: "Page", seo: {title: "Explicit title", description: "Useful description"}});
  assert.equal(result.browserTitle, "Explicit title | Saleor Commerce Documentation");
  assert.equal(result.description, "Useful description");
});

test("pages can explicitly clear descriptions", () => {
  assert.equal(pageMetadata({title: "Search", description: "Fallback", seo: {description: ""}}).description, "");
});
