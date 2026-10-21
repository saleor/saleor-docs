import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { sectionForRoute, sectionItems, tabsForRoute, sidebarConfig, sidebarForTabs } from '../components/navigation-sections.mjs';
const navigation = JSON.parse(readFileSync(new URL('../config/navigation.json', import.meta.url)));

test('legacy routes select their section without changing tab destinations', () => {
  for (const [route, section] of [
    ['/', 0], ['/developer/products/overview', 0], ['/api-usage/authentication', 0],
    ['/quickstart/cloud', 0], ['/api-reference/products/objects/product', 3],
    ['/developer/app-store/apps/stripe/overview', 1], ['/developer/extending/apps/quickstart', 1],
    ['/developer/extending/webhooks/overview', 1], ['/setup/overview', 2],
    ['/upgrade-guides/core/3-23-to-3-24', 2], ['/developer/running-saleor/debugging-emails', 2],
  ]) {
    assert.equal(sectionForRoute(route), section, route);
    const tabs = tabsForRoute(route);
    const matched = tabs.filter(tab => tab.path === '/' || route === tab.path || route.startsWith(`${tab.path}/`))
      .sort((a, b) => b.path.length - a.path.length)[0];
    assert.equal(matched, tabs[section], route);
    assert.equal(tabs[section].href, ['/', '/developer/app-store/overview', '/cloud/overview', '/api-reference'][section]);
  }
});

test('native sidebar exposes landing pages and converts legacy headings to groups', () => {
  const sidebar = sidebarConfig(navigation);
  const apiGuides = sidebar.find(item => item.label === 'API guides');
  assert.deepEqual(apiGuides.items[0], { label: 'Overview', root: '/api-usage/overview' });
  const concepts = sidebar.find(item => item.label === 'Core Concepts');
  assert.deepEqual(concepts.items[0], { label: 'Overview', root: '/developer' });
  assert.equal(concepts.items[1].label, 'Channels');
  assert.equal(concepts.items[1].items[0].root, '/developer/channels/overview');
  const apps = sidebar.find(item => item.label === 'Apps & Integrations');
  assert.deepEqual(apps.items[0], { label: 'Overview', root: '/developer/app-store/overview', icon: 'house' });
  const api = sidebar.find(item => item.label === 'API Reference');
  assert.equal(api.items.find(item => item.label === 'Products').items[0].root, '/api-reference/products');
  const nodes = items => items.flatMap(item => [item, ...nodes(item.items ?? [])]);
  const all = nodes(sidebar);
  assert.ok(all.every(item => !('type' in item) && !('value' in item)));
  const destinations = new Set(all.map(item => item.root ?? item.href));
  for (const item of Object.values(navigation.sidebars).flatMap(nodes)) {
    const route = item.href?.replace(/\/$/, '') || '/';
    if (item.type === 'link' && route.startsWith('/')) {
      assert.ok(destinations.has(route), `Lost native navigation destination: ${route}`);
    }
  }
});

test('tab adaptation preserves native group order and children for deferred fragments', () => {
  const sidebar = sidebarConfig(navigation).map(item => ({
    kind: item.items ? 'group' : 'page', route: item.root,
    children: item.items, label: item.label,
  }));
  for (const route of ['/developer/extending/apps/overview', '/setup/overview', '/security']) {
    const tabs = tabsForRoute(route);
    const adapted = sidebarForTabs(sidebar, tabs);
    assert.deepEqual(adapted.map(node => node.label), sidebar.map(node => node.label));
    adapted.forEach((node, index) => assert.equal(node.children, sidebar[index].children));
    const active = tabs[sectionForRoute(route)];
    assert.equal(adapted.find(node => node.route === active.href).path, active.path);
  }
});

test('section sidebars retain every previously reachable internal destination', () => {
  const links = items => items.flatMap(item => [...(item.href?.startsWith('/') ? [item.href.replace(/\/$/, '') || '/'] : []), ...links(item.items ?? [])]);
  const actual = new Set(['/', '/api-reference', '/developer/app-store/overview', '/cloud/overview'].flatMap(route => links(sectionItems(navigation, route))));
  const expected = new Set(Object.values(navigation.sidebars).flatMap(links));
  for (const route of expected) assert.ok(actual.has(route), `Lost navigation destination: ${route}`);
  const guides = links(sectionItems(navigation, '/'));
  assert.ok(!guides.includes('/cloud/overview'));
  assert.ok(!guides.includes('/developer/app-store/overview'));
  assert.ok(guides.includes('/developer/products/overview'));
});

test('malformed heading markup cannot leave HTML delimiters in labels', () => {
  const input = structuredClone(navigation);
  const visit = items => {
    for (const item of items) {
      if (item.type === 'html' && !item.value.includes('<hr')) item.value = '<scr<script>ipt>Example</script>';
      if (item.items) visit(item.items);
    }
  };
  Object.values(input.sidebars).forEach(visit);
  const inspect = items => {
    for (const item of items) {
      assert(!/[<>]/.test(item.label));
      if (item.items) inspect(item.items);
    }
  };
  inspect(sidebarConfig(input));
});
