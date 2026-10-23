import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("code groups keep their selected tabs independent", async () => {
  const [components, codeGroup] = await Promise.all([
    readFile("components.ts", "utf8"),
    readFile("components/CodeGroup.astro", "utf8"),
  ]);

  assert.match(components, /CodeGroup:\s*"\.\/components\/CodeGroup\.astro"/);
  assert.match(codeGroup, /<Tabs\b[^>]*\bsync=\{false\}/);
});
