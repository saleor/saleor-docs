import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { generateReference } from "../scripts/generate-api.mjs";
import { frontmatter, matter } from "../scripts/common.mjs";

const generator = new URL("../scripts/generate-api.mjs", import.meta.url).href;

test("API regeneration preserves maintained metadata and refreshes schema content", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "docs-api-metadata-"));
  try {
    const sdl = '"Current description"\ntype Query { ping: String }';
    const { pages } = generateReference(sdl);
    const page = pages.find(page => page.name === "ping");
    assert(page);
    const file = path.join(root, `docs${page.route}.mdx`);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, frontmatter({ title: "Maintained title", seo: { description: "Maintained summary" }, lastModified: "2026-10-20" }, "Old generated body"));
    await mkdir(path.join(root, "schema"));
    for (const [name, value] of Object.entries({ "api-routes": {}, "api-categories": {}, provenance: { label: "Test schema" } })) {
      await writeFile(path.join(root, `schema/${name}.json`), JSON.stringify(value));
    }
    await writeFile(path.join(root, "schema/saleor.graphql"), sdl);
    const run = () => execFileSync(process.execPath, ["--input-type=module", "-e", `import { main } from ${JSON.stringify(generator)}; await main();`], { cwd: root });
    run();
    const output = await readFile(file, "utf8");
    const parsed = matter(output);
    assert.equal(parsed.data.title, "Maintained title");
    assert.equal(parsed.data.seo.description, "Maintained summary");
    assert.equal(parsed.data.lastModified, "2026-10-20");
    assert(!parsed.content.includes("Old generated body"));
    assert(parsed.content.includes("ping"));
    run();
    assert.equal(await readFile(file, "utf8"), output);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
