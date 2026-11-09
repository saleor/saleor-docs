import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import matter from 'gray-matter';
import { mcpSkills, readSkills } from '../scripts/mcp-skills.mjs';
import { SKILLS_EXTENSION, withSkills } from '../scripts/mcp-skills-protocol.mjs';

const require = createRequire(import.meta.url);
const blumeRequire = createRequire(require.resolve('blume'));
const { createJiti } = blumeRequire('jiti');
const jiti = createJiti(import.meta.url);
const { createMcpFetchHandler } = await jiti.import('blume/ai/mcp/server.ts');

const skills = await readSkills(path.resolve(import.meta.dirname, '../skills'));
const blume = createMcpFetchHandler({
  base: '', documents: [], name: 'Saleor Docs', navigation: { featured: [], selectors: [], sidebar: [], tabs: [] },
  pages: { '/guide': '# Guide' },
  routes: [{ contentType: 'doc', indexable: true, lastModified: null, locale: 'en', route: '/guide', title: 'Guide', version: '' }],
  site: 'https://docs.saleor.io', version: '0.0.0',
});
const handler = withSkills(blume, skills);

const rpc = async (method, params, target = handler) => {
  const response = await target(new Request('https://docs.saleor.io/mcp', {
    method: 'POST',
    headers: { accept: 'application/json, text/event-stream', 'content-type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 7, method, params }),
  }));
  assert.equal(response.headers.get('access-control-allow-origin'), '*');
  return response.json();
};
const digest = bytes => `sha256:${createHash('sha256').update(bytes).digest('hex')}`;
const initialize = { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 'test', version: '0' } };

test('initialize keeps Blume capabilities and declares the skills extension', async () => {
  const { id, result } = await rpc('initialize', initialize);
  assert.equal(id, 7);
  assert.deepEqual(result.capabilities.extensions, { [SKILLS_EXTENSION]: {} });
  assert.ok(result.capabilities.tools && result.capabilities.resources);
  assert.equal(result.serverInfo.name, 'Saleor Docs');
});

test('every published skill verifies the way a SEP-2640 host checks it', async () => {
  const { result } = await rpc('skills/list', {});
  assert.deepEqual(result.skills.map(skill => skill.uri), skills.map(skill => `skill://${skill.name}/SKILL.md`));
  assert.ok(result.skills.length >= 5);
  for (const entry of result.skills) {
    assert.deepEqual((await rpc('skills/get', { uri: entry.uri })).result.skill, entry);
    assert.ok(entry.resources.some(resource => resource.uri === entry.uri));
    for (const resource of entry.resources) {
      const [content] = (await rpc('resources/read', { uri: resource.uri })).result.contents;
      const bytes = content.text === undefined ? Buffer.from(content.blob, 'base64') : Buffer.from(content.text);
      assert.equal(digest(bytes), resource.digest, resource.uri);
      assert.equal(bytes.byteLength, resource.size, resource.uri);
      if (resource.uri === entry.uri) assert.deepEqual(matter(bytes.toString()).data, entry.frontmatter);
    }
  }
});

test('resources/list keeps Blume pages and adds each SKILL.md', async () => {
  const { result } = await rpc('resources/list');
  assert.equal(result.resources[0].uri, 'https://docs.saleor.io/guide');
  assert.deepEqual(result.resources.slice(1).map(resource => resource.uri), skills.map(skill => `skill://${skill.name}/SKILL.md`));
  assert.equal(result.resources[1].mimeType, 'text/markdown');
});

test('unknown skills and files get the spec error codes', async () => {
  assert.equal((await rpc('skills/get', { uri: 'skill://nope/SKILL.md' })).error.code, -32_602);
  assert.equal((await rpc('skills/get', { uri: 'skill://saleor-core/README.md' })).error.code, -32_602);
  assert.equal((await rpc('skills/get', {})).error.code, -32_602);
  assert.equal((await rpc('resources/read', { uri: 'skill://saleor-core/missing.md' })).error.code, -32_002);
});

test('everything else is Blume untouched', async () => {
  const { result } = await rpc('tools/list');
  assert.ok(result.tools.some(tool => tool.name === 'search_docs'));
  assert.match((await rpc('resources/read', { uri: '/guide' })).result.contents[0].text, /# Guide/);
  assert.equal(withSkills(blume, []), blume);
  assert.equal((await rpc('skills/list', {}, blume)).error.code, -32_601);
  const get = await handler(new Request('https://docs.saleor.io/mcp'));
  assert.equal(get.status, 405);
  const oversized = await handler(new Request('https://docs.saleor.io/mcp', {
    method: 'POST',
    headers: { accept: 'application/json, text/event-stream', 'content-type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'skills/list', params: { pad: 'x'.repeat(70_000) } }),
  }));
  assert.equal(oversized.status, 413);
  const garbage = await handler(new Request('https://docs.saleor.io/mcp', {
    method: 'POST', headers: { accept: 'application/json, text/event-stream', 'content-type': 'application/json' }, body: '{nope',
  }));
  assert.equal((await garbage.json()).error.code, -32_700);
});

test('binary skill files are served as blobs and malformed skills fail the build', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'saleor-skills-'));
  await mkdir(path.join(root, 'demo/assets'), { recursive: true });
  await writeFile(path.join(root, 'demo/SKILL.md'), '---\nname: demo\ndescription: Demo.\n---\n# Demo\n');
  await writeFile(path.join(root, 'demo/assets/logo.png'), Buffer.from([0x89, 0x50, 0xff, 0xfe]));
  await mkdir(path.join(root, 'not-a-skill'));
  const [demo] = await readSkills(root);
  const logo = demo.files.find(file => file.path === 'assets/logo.png');
  assert.equal(logo.mimeType, 'image/png');
  assert.equal(logo.blob, Buffer.from([0x89, 0x50, 0xff, 0xfe]).toString('base64'));
  await mkdir(path.join(root, 'broken'));
  await writeFile(path.join(root, 'broken/SKILL.md'), '# No frontmatter\n');
  await assert.rejects(readSkills(root), /broken/);
});

test('only the generated /mcp endpoint is redirected to the skills handler', async () => {
  let plugin;
  mcpSkills().hooks['astro:config:setup']({ updateConfig: config => { [plugin] = config.vite.plugins; } });
  assert.match(plugin.resolveId('blume/ai/mcp/server.ts', '/repo/.blume/src/pages/mcp.ts'), /mcp-skills-handler\.mjs$/);
  assert.equal(plugin.resolveId('blume/ai/mcp/server.ts', '/repo/scripts/mcp-skills-handler.mjs'), undefined);
  assert.equal(plugin.resolveId('blume/ai/mcp/query.ts', '/repo/.blume/src/pages/mcp.ts'), undefined);
  const code = await plugin.load(plugin.resolveId('virtual:saleor-mcp-skills'));
  const { default: bundled } = await import(`data:text/javascript,${encodeURIComponent(code)}`);
  assert.deepEqual(bundled, skills);
  assert.equal(await plugin.load('other'), undefined);
});
