import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createEngine } from '../search/engine.mjs';
const out = process.env.BLUME_BUILD_DIR ?? (process.env.BLUME_SERVER !== '0' ? '.vercel/output/static' : 'dist');
const documents = JSON.parse(await readFile(`${out}/blume-search.json`, 'utf8'));
const metadata = JSON.parse(await readFile(`${out}/saleor-search-metadata.json`, 'utf8'));
const search = createEngine(documents, metadata);
const tutorial = '/developer/extending/apps/building-payment-app';
for (const [query, route, maxRank] of [
  ['how to build a payment app', tutorial, 1],
  ['payment app', tutorial, 3],
  ['paymnt app', tutorial, 3],
  ['build payment', tutorial, 1],
  ['building payment', tutorial, 3],
  ['stored payment methods', '/developer/payments/stored-payments', 1],
  ['integration surface', tutorial, 1],
  ['checkoutCreate', '/api-reference/checkout/mutations/checkout-create', 1],
  ['checkout create', '/api-reference/checkout/mutations/checkout-create', 1],
  ['draftOrderComplete', '/api-reference/orders/mutations/draft-order-complete', 1],
  ['draft order complete', '/api-reference/orders/mutations/draft-order-complete', 1],
]) {
  const { hits } = await search(query);
  const rank = hits.findIndex(hit => hit.url.split('#')[0] === route) + 1;
  assert(rank > 0 && rank <= maxRank, `${query}: expected ${route} within top ${maxRank}, got ${rank || 'no result'}`);
  console.log(`${query}: rank ${rank}`);
}
const gateways = await search('payment gateways');
assert(gateways.hits.every(hit=>!hit.url.includes('/extending/plugins/')), 'Legacy plugins must not outrank current guidance');
console.log('payment gateways: legacy plugins demoted');
