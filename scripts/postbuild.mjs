import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { walk, write, writeJson, readJson, matter } from "./common.mjs";
import { pageMetadata } from "./page-metadata.mjs";

import { applyHostRoutes, readHostRoutes } from "./vercel-routing.mjs";
import { resolveSiteUrls, documentationMcp } from "./site-config.mjs";
import { createRequire } from "node:module";

const out = process.env.BLUME_SERVER !== "0"
  ? ".vercel/output/static"
  : process.env.BLUME_RUNTIME_DIR
    ? path.join(process.env.BLUME_RUNTIME_DIR, "dist")
    : "dist";

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
const replaceMeta = (html, attribute, name, value) => {
  const pattern = new RegExp(`<meta (?=[^>]*${attribute}="${name}")[^>]*>`);
  if (!value) return html.replace(pattern, "");
  return html.replace(pattern, (tag) =>
    tag.replace(/content="[^"]*"/, `content="${escapeHtml(value)}"`),
  );
};
const documents = new Map();
for (const file of (await walk("docs")).filter((file) => /\.mdx?$/.test(file))) {
  const { data } = matter(await readFile(file, "utf8"));
  const route = "/" + (data.slug ?? path.relative("docs", file)
    .replaceAll(path.sep, "/").replace(/\.mdx?$/, "").replace(/(^|\/)index$/, "")).replace(/^\//, "");
  documents.set(route, data);
}
let metadataPages = 0;
for (const route of documents.keys()) {
  const metadata = pageMetadata(documents.get(route));
  const file = route === "/404"
    ? path.join(out, "404.html")
    : path.join(out, route.slice(1), "index.html");
  let html;
  try {
    html = await readFile(file, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") continue;
    throw error;
  }
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(metadata.browserTitle)}</title>`,
  );
  html = replaceMeta(html, "name", "description", metadata.description);
  html = replaceMeta(html, "property", "og:title", metadata.openGraphTitle);
  html = replaceMeta(
    html,
    "property",
    "og:description",
    metadata.openGraphDescription,
  );
  // Keep social metadata synchronized with maintained page frontmatter.
  html = replaceMeta(html, "name", "twitter:title", metadata.openGraphTitle);
  html = replaceMeta(html, "name", "twitter:description", metadata.openGraphDescription);
  if (route === "/404")
    html = html.replace(
      /(<h1[^>]*>)[\s\S]*?(<\/h1>)/,
      `$1${escapeHtml(metadata.heading)}$2`,
    );
  await writeFile(file, html);
  metadataPages += 1;
}
console.log(`Applied maintained page SEO metadata to ${metadataPages} built pages.`);
const groups = new Map();
const manifest = {};
for (const file of (await walk("docs")).filter((p) => /\.mdx?$/.test(p))) {
  const { data } = matter(await readFile(file, "utf8"));
  if (data.draft || data.hidden || data.ai?.exclude) continue;
  const route =
    "/" +
    (
      data.slug ??
      path
        .relative("docs", file)
        .replace(/\.mdx?$/, "")
        .replace(/(^|\/)index$/, "")
    ).replace(/^\//, "");
  const parts = route.split("/").filter(Boolean);
  const section =
    parts[0] === "api-reference" && parts.length > 1
      ? parts.slice(0, 2).join("/")
      : (parts[0] ?? "overview");
  const md = route === "/" ? "/index.md" : route + ".md";
  if (!groups.has(section)) groups.set(section, []);
  groups.get(section).push({ title: data.title, route, markdown: md });
  manifest[route] = { markdown: md, index: `/${section}/llms.txt` };
}
for (const [section, entries] of groups)
  await write(
    `${out}/${section}/llms.txt`,
    `# Saleor: ${section}\n\n${entries
      .sort((a, b) => a.route.localeCompare(b.route))
      .map((e) => `- [${e.title}](${e.markdown})`)
      .join("\n")}\n`,
  );
await writeJson(`${out}/agent-routes.json`, manifest);
const provenance = await readJson("schema/provenance.json");
let llms;
try {
  llms = await readFile(`${out}/llms.txt`, "utf8");
} catch (error) {
  if (error.code !== "ENOENT") throw error;
  llms = `# Saleor Documentation\n\n> Build commerce your way with Saleor’s GraphQL API, developer guides, and recipes.\n`;
}
await write(
  `${out}/llms.txt`,
  llms.replace(/\n## Saleor schema and section indexes[\s\S]*$/, "") +
    `\n## Saleor schema and section indexes\n\n- [${provenance.label} schema](/schema/saleor.graphql)\n${[
      ...groups.keys(),
    ]
      .sort()
      .map((s) => `- [${s}](/${s}/llms.txt)`)
    .join("\n")}\n`,
);

// Isolated Blume builds intentionally skip deploy artifacts. Generate the
// public contracts here as fallbacks so the same checks can run without
// stopping an active development server.
const { canonical, deployment: site } = resolveSiteUrls();
// Discovery must address this deployment, while Blume uses the canonical origin
// for SEO. Generate it for both server and isolated verification builds.
{
  const require = createRequire(import.meta.url);
  const blumeRequire = createRequire(require.resolve("blume"));
  const { createJiti } = blumeRequire("jiti");
  const { buildMcpDiscovery, buildMcpServerCard } = await createJiti(import.meta.url).import("blume/ai/mcp/discovery.ts");
  const { version } = require("blume/package.json");
  const input = { ...documentationMcp, base: "", site, version };
  await writeJson(`${out}/.well-known/mcp.json`, buildMcpDiscovery(input));
  await writeJson(`${out}/.well-known/mcp/server-card.json`, buildMcpServerCard(input));
}
// Reuse the dates resolved by Blume for the page footer, JSON-LD, and API.
// Both server and isolated builds emit this manifest in their runtime directory.
const builtManifest = await readJson(path.join(process.env.BLUME_RUNTIME_DIR ?? ".blume", "blume.manifest.json"));
const modifiedByRoute = new Map(builtManifest.routes.map(route => [route.path, route.lastModified]));
const xml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");
await write(
  `${out}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...new Set([
    ...Object.keys(manifest),
  ])]
    .sort()
    .map((route) => {
      const modified = modifiedByRoute.get(route);
      return `  <url><loc>${xml(new URL(route, canonical))}</loc>${modified ? `<lastmod>${xml(modified)}</lastmod>` : ""}</url>`;
    })
    .join("\n")}\n</urlset>\n`,
);

const skillsDir = path.join(out, ".well-known/agent-skills");
const skillsIndex = path.join(skillsDir, "index.json");
if (!existsSync(skillsIndex)) {
  await mkdir(skillsDir, { recursive: true });
  const skills = [];
  for (const directory of (await readdir("skills", { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name))) {
    const source = path.join("skills", directory.name);
    let parsed;
    try {
      parsed = matter(await readFile(path.join(source, "SKILL.md"), "utf8"));
    } catch (error) {
      if (error.code === "ENOENT") continue;
      throw error;
    }
    const name = parsed.data.name;
    const description = parsed.data.description;
    if (!(name && description)) continue;
    const target = path.join(skillsDir, `${name}.tar.gz`);
    execFileSync("tar", ["-czf", path.resolve(target), "--exclude=.DS_Store", "-C", path.resolve(source), "."]);
    const content = await readFile(target);
    skills.push({
      description,
      digest: `sha256:${createHash("sha256").update(content).digest("hex")}`,
      name,
      type: "archive",
      url: `/.well-known/agent-skills/${name}.tar.gz`,
    });
  }
  await writeJson(skillsIndex, {
    $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
    skills,
  });
}
if (!existsSync(`${out}/agent-readability.json`)) await writeJson(`${out}/agent-readability.json`, {
  artifacts: {
    markdown: { pattern: `${site}/{route}.md` },
    api: { openapi: `${site}/openapi.json`, pages: `${site}/api/docs/pages.json` },
    llmsTxt: `${site}/llms.txt`,
    sitemap: `${site}/sitemap.xml`,
    agentSkills: `${site}/.well-known/agent-skills/index.json`,
  },
  description: "Build commerce your way with Saleor’s GraphQL API, developer guides, and recipes.",
  generator: "blume@2.0.3",
  name: "Saleor Commerce Documentation",
  site,
  contentUsage: { search: true, "ai-input": true, "ai-train": true },
});
// Existing Blume discovery also includes operational links to this deployment.
if (canonical !== site) {
  const discovery = await readFile(`${out}/agent-readability.json`, "utf8");
  await writeFile(`${out}/agent-readability.json`, discovery.replaceAll(canonical, site));
}
console.log(
  `Published ${groups.size} section indexes and ${Object.keys(manifest).length} route mappings.`,
);

if (process.env.BLUME_SERVER !== "0") {
  const configPath = ".vercel/output/config.json";
  const staticAssets = (await walk("public/docs"))
    .map(file => "/" + path.relative("public", file).split(path.sep).map(encodeURIComponent).join("/"));
  await writeJson(configPath, applyHostRoutes(await readJson(configPath), await readHostRoutes(), { staticAssets }));
}
