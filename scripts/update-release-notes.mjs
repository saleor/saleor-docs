import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { frontmatter, write, writeJson, walk } from "./common.mjs";
import { transformReleaseNotes } from "./release-notes.mjs";

// Committed Markdown keeps release fetching out of normal builds.
export function releasePage(release) {
  if (release.draft || release.prerelease) return null;
  if (!/^v?\d+\.\d+\.\d+$/.test(release.tag_name)) throw new Error(`Unexpected release tag: ${release.tag_name}`);
  if (!release.published_at || !Number.isFinite(Date.parse(release.published_at))) throw new Error("Release has no valid publication date");
  const version = release.tag_name.replace(/^v/, "");
  const name = `saleor-${version.replaceAll(".", "-")}`;
  const source = `https://github.com/saleor/saleor/releases/tag/${release.tag_name}`;
  const body = transformReleaseNotes(release.body || "See the original release for details.");
  const summary = body.split("\n").find(line => /^[-*] /.test(line))?.replace(/^[-*] /, "").replace(/ by @.*$/, "").replace(/[`*_]/g, "");
  return {
    name,
    content: frontmatter({
      title: `Saleor ${version}`,
      description: (summary ? `Saleor ${version}: ${summary}` : `Release notes for Saleor ${version}, with fixes and changes from the published release.`).slice(0, 160),
      slug: `changelog/${name}`,
      type: "changelog",
      date: release.published_at,
      changelog: { version, category: "Release" },
    }, `[View this release on GitHub](${source}) · [Upgrade guides](/upgrade-guides)\n\n${body}`),
  };
}

export async function main() {
  const sourceFile = process.argv[2];
  let releases;
  if (sourceFile) releases = JSON.parse(await readFile(sourceFile, "utf8"));
  else {
    const response = await fetch("https://api.github.com/repos/saleor/saleor/releases?per_page=30", {
      headers: { Accept: "application/vnd.github+json", ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}) },
      signal: AbortSignal.timeout(30_000),
    });
    if (!response.ok) throw new Error(`Release download failed: HTTP ${response.status}`);
    releases = await response.json();
  }
  if (!Array.isArray(releases)) throw new Error("Expected a GitHub releases array");
  const pages = releases.map(releasePage).filter(Boolean);
  if (!pages.length) throw new Error("No published stable releases found; existing notes were not changed");
  for (const page of pages) await write(`docs/changelog/${page.name}.md`, page.content);
  // Keep older imported entries; refreshing the recent window never deletes history.
  const names = (await walk("docs/changelog")).filter(p => p.endsWith(".md")).map(p => p.split("/").at(-1).replace(/\.md$/, ""));
  await write("docs/changelog/meta.ts", `import { defineMeta } from "blume";\nexport default defineMeta(${JSON.stringify({ title: "Changelog", pages: names.sort().reverse() })});\n`);
  await writeJson("schema/releases.json", releases.filter(r => !r.draft && !r.prerelease).map(({ tag_name, published_at, html_url, body }) => ({ tag_name, published_at, html_url, body })));
  console.log(`Imported ${pages.length} release notes. Review docs/changelog/ and schema/releases.json.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await main();
