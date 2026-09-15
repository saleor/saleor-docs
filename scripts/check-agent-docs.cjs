const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { load } = require("cheerio");
const { fromMarkdown } = require("mdast-util-from-markdown");

const build = path.resolve(__dirname, "../build");
const manifest = JSON.parse(
  fs.readFileSync(path.join(build, "agent-routes.json"), "utf8"),
);
const read = (url) => fs.readFileSync(path.join(build, url), "utf8");
const rootIndex = read("/llms.txt");
const indexes = new Set();
let bytes = 0;

for (const [route, entry] of Object.entries(manifest)) {
  const markdown = read(entry.markdown);
  const nodes = [];
  const visit = (node) => {
    nodes.push(node);
    node.children?.forEach(visit);
  };
  visit(fromMarkdown(markdown));
  const codeSamples = new Set(
    nodes.filter((node) => node.type === "code").map((node) => node.value),
  );
  for (const node of nodes.filter(
    (node) => node.type === "link" && node.url.startsWith("/"),
  )) {
    const target = node.url.split(/[?#]/)[0];
    if (/\.(md|txt)$/.test(target)) {
      assert.ok(
        fs.existsSync(path.join(build, decodeURI(target))),
        `${route}: broken link ${target}`,
      );
    }
  }
  bytes += Buffer.byteLength(markdown);
  assert.match(markdown, /^# .+/m, `${route}: missing title`);
  assert.ok(
    markdown.includes("Documentation index:"),
    `${route}: missing discovery`,
  );
  const index = read(entry.index);
  if (route !== "/") {
    assert.ok(
      index.includes(`](${entry.markdown})`),
      `${route}: absent from section index`,
    );
    assert.ok(
      rootIndex.includes(`](${entry.index})`),
      `${route}: unreachable section index`,
    );
  }
  indexes.add(entry.index);
  const html = load(
    read(route === "/" ? "/index.html" : `${route}/index.html`),
  );
  // Check every rendered badge, including version and permission labels.
  const plainText = nodes
    .filter((node) => node.type === "text" || node.type === "inlineCode")
    .map((node) => node.value)
    .join(" ")
    .replace(/\s+/g, " ");
  html(".theme-doc-markdown .badge").each((_, badge) => {
    const label = html(badge).text().trim().replace(/\s+/g, " ");
    assert.ok(plainText.includes(label), `${route}: badge lost: ${label}`);
  });
  assert.equal(
    html('link[rel="alternate"][type="text/markdown"]').attr("href"),
    entry.markdown,
    `${route}: HTML discovery mismatch`,
  );
  // A regression in code extraction must fail even on pages not in the fixtures.
  html(".theme-doc-markdown pre code").each((_, code) => {
    html(code).find("br").replaceWith("\n");
    const source = html(code).text().replace(/\n$/, "");
    assert.ok(codeSamples.has(source), `${route}: code sample changed`);
  });
}

assert.ok(
  read("/api-reference/products/objects/product.md").includes(
    "Added in Saleor",
  ),
);
assert.ok(
  read("/api-reference/products/objects/product.md").includes(
    "MANAGE\\_PRODUCTS permission",
  ),
);
assert.ok(read("/quickstart/api.md").includes("**Result**"));
assert.ok(read("/api-usage/authentication.md").includes("```mermaid"));
assert.ok(Buffer.byteLength(rootIndex) < 16000, "Root index should stay small");
console.log(
  `Verified ${Object.keys(manifest).length} Markdown pages, ${indexes.size} indexes and all rendered code samples (${(bytes / 1024 / 1024).toFixed(1)} MiB total).`,
);
