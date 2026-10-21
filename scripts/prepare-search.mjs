import { readFile } from 'node:fs/promises';
import { includeStepHeadings } from '../components/step-headings.mjs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { walk, write, writeJson, matter } from './common.mjs';

const require = createRequire(import.meta.url);
const blumeRequire = createRequire(require.resolve('blume'));
const { createJiti } = blumeRequire('jiti');
const { extractHeadings } = await createJiti(import.meta.url).import('blume/core/sources/normalize.ts');
const blumeRoot = path.resolve('node_modules/blume');
// Preserve the pinned native dialog. Only its loader and import locations change.
const original = await readFile(path.join(blumeRoot, 'src/components/layout/Search.astro'), 'utf8');
if (!original.includes('await import("blume:search-client")')) throw Error('Blume search loader changed; review the override.');
const ui = original.replace('---', '---\n// Generated from Blume 2.0.3 by scripts/prepare-search.mjs; preserves its native UI.').replace(/from "(\.[^"]+)"/g, (_, specifier) => {
  const target = path.resolve(blumeRoot, 'src/components/layout', specifier);
  return `from "../${path.relative(process.cwd(), target)}"`;
}).replace('import { escape as escapeHtml } from "html-escaper";', 'import { escapeHtml } from "../search/engine.mjs";')
  .replace('await import("blume:search-client")', 'await import("../search/client.mjs")');
// Keep result context readable while grouping filters by reader intent.
const scopedUi = ui.replace('${hit.title}${versionTag}</span>', '${hit.title}${versionTag}</span><span class="block mt-0.5 text-xs text-muted-foreground">${escapeHtml(hit.section ?? "")} · ${escapeHtml(hit.url.split("#")[0].split("/").filter(Boolean).slice(0, -1).join(" / "))}</span>');
await write('components/Search.astro', scopedUi);
const metadata = {};
for (const file of (await walk('docs')).filter(f => /\.mdx?$/.test(f))) {
  const { data, content } = matter(await readFile(file, 'utf8'));
  if (data.draft || data.hidden || data.unlisted || data.search === false) continue;
  const route = '/' + String(data.slug ?? path.relative('docs', file).replace(/\.mdx?$/, '').replace(/(^|\/)index$/, '')).replace(/^\//, '');
  metadata[route] = { headings: extractHeadings(includeStepHeadings(content)) };
}
await writeJson('public/saleor-search-metadata.json', metadata);
console.log(`Prepared native search dialog and headings for ${Object.keys(metadata).length} pages.`);
