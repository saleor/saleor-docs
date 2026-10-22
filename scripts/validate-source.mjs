import { spawnSync } from 'node:child_process';

const ignoredAssets = ['/llms.txt', '/.well-known/mcp.json', '/.well-known/mcp/server-card.json'];
const ignoredMessages = ignoredAssets.map(asset => `Asset ${asset} was not found in the public directory.`);

const result = spawnSync('pnpm', ['exec', 'blume', 'validate', '--strict', '--json'], {
  encoding: 'utf8', maxBuffer: 16 * 1024 * 1024,
});
if (result.stderr) process.stderr.write(result.stderr);
if (result.error || ![0, 1].includes(result.status)) {
  throw result.error ?? new Error('Source validator failed');
}
const { diagnostics } = JSON.parse(result.stdout);
const remaining = diagnostics.filter(diagnostic =>
  diagnostic.code !== 'BLUME_BROKEN_ANCHOR' &&
  !(diagnostic.code === 'BLUME_BROKEN_ASSET' && ignoredMessages.includes(diagnostic.message))
);
for (const diagnostic of remaining) console.error(`${diagnostic.code}: ${diagnostic.message}`);
process.exitCode = remaining.some(diagnostic => diagnostic.severity !== 'info') ? 1 : 0;
if (!process.exitCode) console.log('Source links validated (generated discovery files and section fragments excluded).');
