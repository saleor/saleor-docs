import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createEngine, pageRank, tokens } from '../search/engine.mjs';
const doc = (route, title, content = '', extra = {}) => ({route,title,content,description:'',section:'Guides',locale:'en',version:'',...extra});
test('production category weights and legacy demotions', () => {
  assert.deepEqual(['/guide','/api-reference/a/mutations/x','/api-reference/a/queries/x','/api-reference/a/objects/x','/developer/extending/plugins/payment-gateways'].map(pageRank), [40,30,20,10,1]);
});
test('typos, transpositions, plurals, camelCase and final-word prefixes', async () => {
  const search = createEngine([doc('/guide','Payment Apps'), doc('/api','checkoutCreate')]);
  for (const query of ['paymnt app','payemnt apps','payment ap']) assert.equal((await search(query)).hits[0].url,'/guide');
  assert.equal((await search('checkout create')).hits[0].url,'/api');
  assert.deepEqual(tokens('storedPaymentMethods'),['stored','payment','method']);
});
test('guide content outranks API titles and legacy exact titles', async () => {
  const search=createEngine([doc('/api-reference/a/mutations/x','Payment gateways'),doc('/guide','Current integration','Payment gateways'),doc('/developer/extending/plugins/payment-gateways','Payment gateways')]);
  assert.deepEqual((await search('payment gateways')).hits.map(h=>h.url),['/guide','/api-reference/a/mutations/x','/developer/extending/plugins/payment-gateways']);
});
test('exact API names outrank guide mentions, return types and reference headings before limiting', async () => {
  const mutation = '/api-reference/orders/mutations/draft-order-complete';
  const object = '/api-reference/orders/objects/draft-order-complete';
  const guides = Array.from({length:20}, (_,i) => doc('/guide'+i, 'Draft Orders', 'Complete with draftOrderComplete.'));
  const search = createEngine([
    ...guides,
    doc(object, 'DraftOrderComplete Object'),
    doc(mutation, 'draftOrderComplete Mutation'),
    doc('/api-reference/orders/mutations/draft-order-update', 'draftOrderUpdate Mutation', 'draftOrderComplete'),
  ], {[mutation]:{headings:[{text:'Arguments',slug:'arguments',depth:2}]}});
  for (const query of ['draftOrderComplete', 'draft order complete', 'draft-order-complete', 'draftOrderComplete Mutation']) {
    const {hits} = await search(query);
    assert.equal(hits[0].url, mutation, query);
    assert.equal(hits[0].section, 'API');
  }
  assert.equal((await search('DraftOrderComplete Object')).hits[0].url, object);
  assert.equal((await search('draftOrderComplete', {section:'Guides'})).hits[0].section, 'Guides');
});
test('exact names apply to queries and types without promoting partial or fuzzy names', async () => {
  for (const [kind, title, query] of [
    ['queries', 'order Query', 'order'],
    ['inputs', 'DraftOrderCreateInput Input Type', 'draft order create input'],
    ['objects', 'Order Object', 'Order Object'],
  ]) {
    const route = `/api-reference/orders/${kind}/entity`;
    const search = createEngine([doc('/guide', 'Order guide', query), doc(route, title)]);
    assert.equal((await search(query)).hits[0].url, route, query);
  }
  const search = createEngine([
    doc('/guide', 'Checkout guide', 'checkoutCreate checkoutCreateFromOrder'),
    doc('/api-reference/checkout/mutations/checkout-create', 'checkoutCreate Mutation'),
    doc('/api-reference/checkout/mutations/checkout-create-from-order', 'checkoutCreateFromOrder Mutation'),
  ]);
  assert.equal((await search('checkoutCreate')).hits[0].url, '/api-reference/checkout/mutations/checkout-create');
  for (const query of ['checkout', 'checkout creat', 'checkout craete']) assert.equal((await search(query)).hits[0].url, '/guide', query);
  const pluralSearch = createEngine([
    doc('/guide', 'Stored Payment Methods'),
    doc('/api-reference/payments/objects/stored-payment-method', 'StoredPaymentMethod Object'),
  ]);
  assert.equal((await pluralSearch('stored payment methods')).hits[0].url, '/guide');
});
test('an exact guide title stays above a matching API name as typing finishes', async () => {
  const guide = '/developer/order/order-status';
  const api = '/api-reference/orders/enums/order-status';
  const search = createEngine([
    doc(api, 'OrderStatus Enum'),
    doc(guide, 'Order Status'),
  ], {[guide]: {headings: [{text: 'Settings', slug: 'settings', depth: 2}]}});
  for (const query of ['order stat', 'order statu', 'order status', 'Order Status', 'order status ']) {
    assert.equal((await search(query)).hits[0].url, guide, query);
  }
  assert.equal((await search('OrderStatus Enum')).hits[0].url, api);
  assert.equal((await search('order status', {section: 'API'})).hits[0].url, api);
});
test('app overviews lead broad searches while specific topics retain their relevance', async () => {
  for (const [name, slug] of [['Stripe', 'stripe'], ['AvaTax', 'avatax'], ['ExamplePay', 'example-pay']]) {
    const base = `/developer/app-store/apps/${slug}`;
    const search = createEngine([
      doc(`/developer/app-store/legacy-plugins/${slug}`, `${name} Plugin`, `${name} app`),
      doc(`${base}/architecture`, `${name} App Architecture`),
      doc(`${base}/configuration`, `${name} App Configuration`),
      doc(`${base}/overview`, `${name} App Overview`, `${name} configuration architecture`),
      doc('/other', 'AppBridge', `${name} app`),
    ], {[`${base}/overview`]: {headings: [{text: 'Architecture', slug: 'architecture', depth: 2}]}});
    for (const query of [name, name.toLowerCase(), `${name.toLowerCase()} app`]) {
      const {hits} = await search(query);
      assert.equal(hits[0].url, `${base}/overview`, query);
      assert.equal(hits.at(-1).url, `/developer/app-store/legacy-plugins/${slug}`, query);
    }
    for (const topic of ['architecture', 'configuration']) {
      assert.equal((await search(`${name.toLowerCase()} ${topic}`)).hits[0].url, `${base}/${topic}`);
    }
  }
});
test('legacy sections are demoted consistently, including exact legacy titles', async () => {
  for (const route of ['/developer/app-store/legacy-plugins/stripe', '/developer/app-store/legacy-plugins/avalara', '/developer/extending/plugins/new-plugin']) {
    assert.equal(pageRank(route), 1);
    const search = createEngine([doc(route, 'Example Plugin'), doc('/guide', 'Migrating to the app', 'Example Plugin')]);
    assert.equal((await search('Example Plugin')).hits[0].url, '/guide');
  }
});
test('app overview titles need not contain the word app', async () => {
  const base = '/developer/app-store/apps/example';
  const search = createEngine([
    doc(`${base}/overview`, 'Example Overview'),
    doc(`${base}/configuration`, 'Example App Configuration'),
  ]);
  assert.equal((await search('example app')).hits[0].url, `${base}/overview`);
});
test('headings link to their explicit anchor, filters apply before limiting', async () => {
  const docs=Array.from({length:20},(_,i)=>doc('/other'+i,'Integration surface','',{locale:'de'}));
  docs.push(doc('/tutorial','Payment tutorial'));
  const search=createEngine(docs,{'/tutorial':{headings:[{text:'Integration surface',slug:'custom-anchor',depth:2}]}});
  assert.equal((await search('integration surface',{locale:'en',version:''})).hits[0].url,'/tutorial#custom-anchor');
  assert.equal((await search('integration surface',{version:'old'})).hits.length,0);
});
test('all query words must match, even when no complete match exists', async () => {
  const search=createEngine([doc('/both','Apple banana'),doc('/one','Apple')]);
  assert.deepEqual((await search('apple banana')).hits.map(h=>h.url),['/both']);
  assert.deepEqual(await search('apple nonexistent'), {hits:[], sections:[]});
});
test('unknown hyphenated headers do not return unrelated common-word matches', async () => {
  const search=createEngine([doc('/upgrade','Upgrading From 3.23 To 3.24'),doc('/apps','How to allow App installation only for specific domains'),doc('/fuzzy','X was rewarded for this')]);
  assert.deepEqual(await search('x-forwarded-for'), {hits:[], sections:[]});
  const withHeader=createEngine([doc('/headers','Proxy headers','Configure the X-Forwarded-For header.')]);
  assert.equal((await withHeader('x-forwarded-for')).hits[0].url, '/headers');
});
test('untrusted titles and excerpts are escaped', async () => {
  const search=createEngine([doc('/guide','Payment <script>','<img onerror=x>')]);
  const {hits}=await search('payment');
  assert(!hits[0].title.includes('<script>'));
  assert(!hits[0].excerpt.includes('<img'));
});
test('reader scopes replace raw taxonomy filters without losing matches', async () => {
  const search = createEngine([
    doc('/developer/checkout/overview','Checkout','',{section:'Checkout'}),
    doc('/api-reference/checkout/mutations/create','Checkout create','',{section:'Mutations'}),
    doc('/recipes/checkout','Checkout recipe','',{section:'Recipes'}),
    doc('/changelog/release','Checkout changes','',{section:'Core'}),
  ]);
  assert.deepEqual((await search('checkout')).sections.map(s=>s.label), ['Guides','API','Recipes','Releases']);
  assert.deepEqual((await search('checkout', {section:'API'})).hits.map(h=>h.url), ['/api-reference/checkout/mutations/create']);
});
