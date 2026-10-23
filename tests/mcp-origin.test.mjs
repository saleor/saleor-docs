import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { mcpOrigin } from '../scripts/mcp-origin.mjs';

const require = createRequire(import.meta.url);
const blumeRequire = createRequire(require.resolve('blume'));
const { createJiti } = blumeRequire('jiti');
const jiti = createJiti(import.meta.url);
const { runtimeModulesPlugin, publishRuntimeModules } = await jiti.import('../node_modules/blume/src/astro/runtime-modules.ts');
const { urlFor } = await jiti.import('blume/ai/mcp/query.ts');

for (const [environment, expected] of [['preview', 'https://preview.vercel.app'], ['production', 'https://docs.saleor.io']]) {
  test(`${environment} agent URLs use the deployment origin without altering SEO data`, async () => {
    let plugin;
    mcpOrigin({ VERCEL_ENV: environment, VERCEL_URL: 'preview.vercel.app', VERCEL_PROJECT_PRODUCTION_URL: 'docs.saleor.io' })
      .hooks['astro:config:setup']({ updateConfig: config => { plugin = config.vite.plugins[0]; } });
    const original = { site: 'https://docs.saleor.io', base: '', pages: { '/guide': 'Payment guide' } };
    publishRuntimeModules(new Map([['blume:mcp-data', JSON.stringify(original)]]));
    const code = runtimeModulesPlugin().load('\0blume:mcp-data');
    const result = plugin.transform(code, '\0blume:mcp-data');
    const { default: data } = await import(`data:text/javascript,${encodeURIComponent(result.code)}`);
    assert.equal(urlFor('/guide', data), `${expected}/guide`);
    assert.deepEqual(data.pages, original.pages);
    assert.equal(plugin.transform(code, '\0blume:data'), undefined);
    assert.equal(original.site, 'https://docs.saleor.io');
    assert.throws(() => plugin.transform('changed format', '\0blume:mcp-data'), /format changed/);
  });
}
