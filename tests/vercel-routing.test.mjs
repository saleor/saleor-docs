import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { applyHostRoutes, readHostRoutes } from '../scripts/vercel-routing.mjs';

const host = await readHostRoutes({});

test('platform redirects cannot run ahead of generated media routes', () => {
  const platform = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url)));
  assert.equal(platform.redirects, undefined);
  assert.deepEqual(host.redirects, JSON.parse(readFileSync(new URL('../config/redirects.json', import.meta.url))));
});

test('content headers preserve routing without imposing site-wide indexing policy', () => {
  const build = { version: 3, routes: [{ handle: 'filesystem' }, { src: '/.*', dest: '/_render' }] };
  const result = applyHostRoutes(build, host);
  assert.equal(result.version, 3);
  assert(result.routes.every(route => !route.headers?.['X-Robots-Tag']));
  for (const [url, type] of [['/guide.md', 'text/markdown; charset=utf-8'], ['/schema/saleor.graphql', 'text/plain; charset=utf-8']]) {
    const route = result.routes.find(route => route.headers?.['Content-Type'] && new RegExp(route.src).test(url));
    assert.equal(route?.headers['Content-Type'], type);
    assert.equal(route.continue, true);
  }
  assert.deepEqual(result.routes.slice(-2), build.routes);
  assert.deepEqual(applyHostRoutes(result, host), result);
});

test('legacy redirect patterns retain their destinations and permanent status', () => {
  const result = applyHostRoutes({ version: 3 }, host);
  const redirect = result.routes.find(route => route.status === 308 && new RegExp(route.src).test('/docs/3.x/developer/channels'));
  assert.equal(redirect.headers.Location, '/developer/channels/overview');
  assert.equal(result.routes.filter(route => route.status === 308).length, host.redirects.length);
});

test('invalid host patterns fail the build instead of silently dropping protection', () => {
  assert.throws(() => applyHostRoutes({ version: 3 }, { headers: [{ source: '(invalid', headers: [] }] }), /Invalid Vercel host routes/);
});

test('copied media is served before legacy redirects without exempting nearby pages', () => {
  const staticAssets = [
    '/docs/developer/app-store/apps/pulse/assets/pulse-tour.mp4',
    '/docs/developer/app-store/apps/pulse/assets/pulse-financial.png',
    '/docs/developer/products/example(2).png',
    '/docs/dashboard/screenshots/click%26collect.png',
  ];
  const build = { version: 3, routes: [{ handle: 'filesystem' }, { src: '/.*', dest: '/_render' }] };
  const result = applyHostRoutes(build, host, { staticAssets });
  const firstMatch = url => result.routes.find(route => route.src && new RegExp(route.src).test(url) && !route.continue);
  for (const asset of staticAssets) {
    assert.equal(firstMatch(asset).dest, asset);
    assert.equal(firstMatch(decodeURIComponent(asset)).dest, asset);
    assert.equal(firstMatch(asset).status, undefined);
  }
  assert.equal(firstMatch('/docs/developer/products/exampleX2X.png').status, 308);
  assert.equal(firstMatch('/docs/3.x/developer/channels').headers.Location, '/developer/channels/overview');
  assert.equal(firstMatch('/docs/developer/app-store/apps/pulse/overview').status, 308);
  assert.deepEqual(result.routes.slice(-2), build.routes);
  assert.deepEqual(applyHostRoutes(result, host, { staticAssets }), result);
});

test('preview builds prevent indexing while production remains indexable', async () => {
  for (const environment of ['preview', 'development']) {
    const preview = applyHostRoutes({ version: 3 }, await readHostRoutes({ VERCEL_ENV: environment }));
    assert(preview.routes.some(route => route.headers?.['X-Robots-Tag'] === 'noindex, nofollow'));
  }
  const production = applyHostRoutes({ version: 3 }, await readHostRoutes({ VERCEL_ENV: 'production' }));
  assert(production.routes.every(route => !route.headers?.['X-Robots-Tag']));
});
