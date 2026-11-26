import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const pages = execFileSync("git", ["ls-files", "docs/*.mdx"], { encoding: "utf8" })
  .split("\n")
  .filter((path) => path && !path.startsWith("docs/api-reference/"));

test("every tab has a title, which Blume shows as the tab name", () => {
  const untitled = pages.flatMap((path) =>
    (readFileSync(path, "utf8").match(/<Tab(?:\s[^>]*)?>/g) ?? [])
      .filter((tag) => !/\stitle=/.test(tag))
      .map((tag) => `${path}: ${tag}`),
  );
  assert.deepEqual(untitled, []);
});
