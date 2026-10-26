import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { load } from "cheerio";
import { readJson, matter, walk } from "./common.mjs";
import path from "node:path";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { siteUrl, documentationMcp } from "./site-config.mjs";
import { readHostRoutes } from "./vercel-routing.mjs";

const out = process.env.BLUME_OUTPUT_DIR ??
  (process.env.BLUME_SERVER !== "0" ? ".vercel/output/static" : "dist");
const routes = await readJson(`${out}/agent-routes.json`);
const runtimeDir = process.env.BLUME_RUNTIME_DIR ??
  (out === ".blume-verify/dist" ? ".blume-verify" : ".blume");
const builtManifest = await readJson(`${runtimeDir}/blume.manifest.json`);
const resolvedDates = new Map(builtManifest.routes.map(route => [route.path, route.lastModified]));
const sitemap = load(await readFile(`${out}/sitemap.xml`, "utf8"), { xml: true });
for (const entry of sitemap("url").toArray()) {
  const route = new URL(sitemap(entry).find("loc").text()).pathname;
  assert.equal(sitemap(entry).find("lastmod").text(), resolvedDates.get(route) ?? "", `${route}: sitemap date differs from Blume`);
}
const sampleRoute = "/developer/stock/stock-reservation";
const committedDate = execFileSync("git", ["log", "-1", "--format=%cI", "--", `docs${sampleRoute}.mdx`], { encoding: "utf8" }).trim();
assert(committedDate, "Git history must contain the sample documentation page");
assert.equal(resolvedDates.get(sampleRoute), committedDate, "Blume must use the Git modification date");

const discovery = await readJson(`${out}/agent-readability.json`);
const mcpDiscovery = await readJson(`${out}/.well-known/mcp.json`);
const mcpCard = await readJson(`${out}/.well-known/mcp/server-card.json`);
const mcpUrl = new URL(documentationMcp.route, siteUrl()).href;
assert.equal(mcpDiscovery.servers[0].url, mcpUrl);
assert.equal(mcpDiscovery.servers[0].transport, "streamable-http");
assert.equal(mcpCard.url, mcpUrl);
if (process.env.BLUME_SERVER !== "0") {
  await readHostRoutes();
  assert.equal(new URL(discovery.artifacts.mcp.url).pathname, "/mcp");
  await stat(`${out}/.well-known/mcp.json`);
  await stat(`${out}/.well-known/mcp/server-card.json`);
} else {
  assert.equal(discovery.artifacts.mcp, undefined, "Static build advertises an unavailable MCP server");
}
const skills = await readJson(`${out}/.well-known/agent-skills/index.json`);
for (const name of ["saleor-app", "saleor-storefront", "saleor-core", "saleor-configurator", "storefront-builder"]) {
  const skill = skills.skills.find(skill => skill.name === name);
  assert(skill, `Missing published skill: ${name}`);
  assert.equal(
    await readFile(`${out}/.well-known/agent-skills/${name}.txt`, "utf8"),
    await readFile(`skills/${name}/SKILL.md`, "utf8"),
    `${name}: raw skill must match its source`,
  );
  assert.equal(skill.type, "archive", `${name}: supporting files must be downloadable`);
  const file = `${out}${new URL(skill.url, "https://docs.example.test").pathname}`;
  assert.equal(skill.digest, `sha256:${createHash("sha256").update(await readFile(file)).digest("hex")}`);
  const entries = execFileSync("tar", ["-tzf", file], { encoding: "utf8" });
  assert.match(entries, /SKILL\.md/);
  assert.match(entries, /LICENSE/);
}
assert(!Object.keys(routes).some(route => route.startsWith("/changelog")), "Hidden changelog leaked into public routes");
assert.equal(await stat(`${out}/changelog/rss.xml`).then(() => true, () => false), false, "Hidden changelog still publishes RSS");
const legacy = await readJson("schema/api-routes.json");
for (const route of Object.values(legacy))
  assert(routes[route], `Missing legacy route ${route}`);
const failures = [];
if (process.env.BLUME_SERVER !== "0") {
  const config = await readJson(".vercel/output/config.json");
  for (const file of await walk("public/docs")) {
    const asset = "/" + path.relative("public", file).split(path.sep).map(encodeURIComponent).join("/");
    for (const url of new Set([asset, decodeURIComponent(asset)])) {
      const route = config.routes.find(route => route.src && !route.continue && new RegExp(route.src).test(url));
      if (route?.dest !== asset || route.status)
        failures.push(`${url}: copied asset is intercepted by host routing`);
    }
  }
}
for (const [route, { markdown }] of Object.entries(routes)) {
  try {
    const html = await readFile(
      `${out}${route === "/" ? "" : route}/index.html`,
      "utf8",
    );
    const md = await readFile(`${out}${markdown}`, "utf8");
    const $ = load(html);
    assert.equal($("h1").length, 1, `${route}: expected one H1`);
    const ogPath = `/og/${route === "/" ? "index" : route.slice(1)}.png`;
    assert.equal(
      new URL($('meta[property="og:image"]').attr("content")).pathname,
      ogPath,
      `${route}: expected a page-specific social image`,
    );
    const og = await readFile(`${out}${ogPath}`);
    assert.equal(og.subarray(1, 4).toString(), "PNG", `${route}: invalid OG image`);
    assert.equal(og.readUInt32BE(16), 1200, `${route}: unexpected OG width`);
    assert.equal(og.readUInt32BE(20), 630, `${route}: unexpected OG height`);
    assert(md.length > 50, `${route}: empty Markdown export`);
    const markdownBody = matter(md).content;
    assert(
      !/<(?:Permissions|FeaturePreview|SaleorBadge|CompactCard|AppMetadata|PulseSurface|Video|SaleorSteps|SaleorStep)\b/.test(
        markdownBody,
      ),
      `${route}: unresolved custom component in Markdown`,
    );
    for (const image of $("article img").toArray()) {
      const src = $(image).attr("src");
      if (src?.startsWith("/") && !src.startsWith("//"))
        await stat(`${out}${decodeURIComponent(src.split("?")[0])}`);
    }
  } catch (error) {
    failures.push(error.message);
  }
}
const product = await readFile(
  `${out}/api-reference/products/queries/product.md`,
  "utf8",
);
assert.match(product, /MANAGE_PRODUCTS/);
assert.match(product, /Added in Saleor 3.21/);
const metadata = await readFile(
  `${out}/api-reference/miscellaneous/scalars/metadata.md`,
  "utf8",
);
assert.match(metadata, /"key1": "value1"/);
const pulse = await readFile(
  `${out}/developer/app-store/apps/pulse/overview.md`,
  "utf8",
);
assert.match(pulse, /Saleor version required/);
assert.match(pulse, /pulse-tour.mp4/);
const api = load(await readFile(`${out}/quickstart/api/index.html`, "utf8"));
assert(
  api("[data-blume-tab-panel]").length >= 2,
  "Tabs did not render all panels",
);
assert(api("pre code").length > 5, "Quickstart examples are missing");
assert.equal(api(".graphql-example").length, 6, "Quickstart runners are missing");
assert.equal(api('.graphql-example input[type="password"]').length, 0, "Anonymous runners must not accept tokens");
const quickstartMarkdown = await readFile(`${out}/quickstart/api.md`, "utf8");
assert.match(quickstartMarkdown, /query ShopName/);
assert.match(quickstartMarkdown, /query ProductsByPrice\(\$channel: String!\)/);
for (const operation of ["ProductDetails", "WalkthroughCreateCheckout", "UpdateCheckout", "SelectShippingMethod"]) {
  assert(quickstartMarkdown.includes(operation), `Walkthrough operation ${operation} is missing from Markdown`);
}
assert(quickstartMarkdown.includes("REPLACE_WITH_YOUR_PRODUCT_ID"));
assert(quickstartMarkdown.includes("REPLACE_WITH_YOUR_SHIPPING_METHOD_ID"));
assert(!quickstartMarkdown.includes("<GraphQLExample"), "Runner was not serialized into Markdown");
const webhooks = load(await readFile(`${out}/developer/extending/webhooks/creating/index.html`, "utf8"));
assert(webhooks("#webhook-identifier").length, "Comment conversion lost webhook content");
assert(webhooks("article pre").length >= 8, "Webhook examples were lost");
const checkout = load(await readFile(`${out}/developer/checkout/api-guide/index.html`, "utf8"));
assert(checkout("article pre").length >= 42, "Checkout tab examples were lost");
assert.equal(checkout("tabitem").length, 0, "Unconverted checkout tabs");
const examples = load(await readFile(`${out}/developer/extending/apps/developing-apps/app-examples/index.html`, "utf8"));
assert(examples("article [data-blume-card]").length >= 15, "App example cards were lost");
const unlisted = await readFile(
  `${out}/upgrade-guides/GUIDELINES/index.html`,
  "utf8",
);
assert.match(unlisted, /noindex/);
assert(
  !routes["/upgrade-guides/GUIDELINES"],
  "Unlisted page leaked into public route index",
);
assert.deepEqual(failures, []);
console.log(
  `Checked ${Object.keys(routes).length} HTML/Markdown pairs and ${Object.keys(legacy).length} preserved API routes.`,
);
