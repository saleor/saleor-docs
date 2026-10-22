import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { mcpSearch } from '../scripts/mcp-search.mjs';

let plugin;
mcpSearch().hooks['astro:config:setup']({ updateConfig: config => {
  plugin = config.vite.plugins[0];
} });
let redirected = false;
const bundle = await build({
  entryPoints: ['node_modules/blume/src/ai/mcp/query.ts'],
  bundle: true, write: false, format: 'esm', platform: 'node',
  plugins: [{ name: 'mcp-search', setup(build) {
    build.onResolve({ filter: /orama-index\.ts$/ }, args => {
      const path = plugin.resolveId(args.path, args.importer);
      if (path) { redirected = true; return { path }; }
    });
  } }],
});
assert(redirected, 'Blume changed its index import; review the MCP search adapter');
const { createIndexProvider, searchDocs, TOOL_INPUTS } = await import(
  `data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`
);
const doc = (route, title, extra = {}) => ({
  route, title, content: title, description: '', contentType: 'doc',
  locale: 'en', version: '', ...extra,
});
const documents = [
  doc('/api-reference/checkout/objects/checkout-create', 'CheckoutCreate Object'),
  doc('/api-reference/checkout/mutations/checkout-create-from-order', 'checkoutCreateFromOrder Mutation'),
  doc('/api-reference/checkout/mutations/checkout-create', 'checkoutCreate Mutation'),
  doc('/guide', 'Building a payment app', { facets: { status: 'stable' } }),
  doc('/old', 'Building a payment app', { version: 'v1' }),
  doc('/fr', 'Building a payment app', { locale: 'fr', contentType: 'recipe' }),
  ...Array.from({ length: 25 }, (_, n) => doc(`/more/${n}`, `Payment guide ${n}`)),
];
const data = { site: 'https://preview.example.com', base: '', archivedVersions: ['v1'] };
const index = createIndexProvider(documents);
const search = args => searchDocs(data, index, TOOL_INPUTS.search_docs.parse(args));

test('native MCP query ranks exact operations first before limiting', async () => {
  const hits = await search({ query: 'checkoutCreate', limit: 1 });
  assert.equal(hits[0].route, '/api-reference/checkout/mutations/checkout-create');
  assert.equal(hits[0].url, `https://preview.example.com${hits[0].route}`);
  assert.equal(hits[0].title, 'checkoutCreate Mutation');
});

test('MCP retains locale, content-type, facet and version filters', async () => {
  assert.deepEqual((await search({ query: 'payment app', filters: { status: 'stable' } })).map(h => h.route), ['/guide']);
  assert.deepEqual((await search({ query: 'payment app', version: 'v1' })).map(h => h.route), ['/old']);
  assert.deepEqual((await search({ query: 'payment app', locale: 'fr', contentTypes: ['recipe'] })).map(h => h.route), ['/fr']);
  assert.equal((await search({ query: 'payment app', contentTypes: ['missing'] })).length, 0);
});

test('MCP honors its 20-result maximum and returns no matches for empty or nonsense queries', async () => {
  assert.equal((await search({ query: 'payment', limit: 20 })).length, 20);
  assert.equal((await search({ query: 'payment', limit: 100 })).length, 20);
  assert.deepEqual(await search({ query: '' }), []);
  assert.deepEqual(await search({ query: 'zxqvnonexistent' }), []);
});

test('index override leaves other Blume consumers alone', () => {
  assert.equal(plugin.resolveId('../../search/orama-index.ts', '/blume/src/ai/other.ts'), undefined);
});

test('heading matches are deduplicated before MCP applies its result limit', async () => {
  const { createEngine } = await import('../search/engine.mjs');
  const search = createEngine([doc('/one', 'Payment guide'), doc('/two', 'Payment reference')], {
    '/one': { headings: [
      { text: 'Payment setup', slug: 'setup', depth: 2 },
      { text: 'Payment configuration', slug: 'configuration', depth: 2 },
    ] },
  });
  const { hits } = await search('payment', { uniquePages: true, limit: 2 });
  assert.deepEqual(new Set(hits.map(hit => hit.url.split('#')[0])), new Set(['/one', '/two']));
});
