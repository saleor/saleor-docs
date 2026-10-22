import { domainSlug } from '../scripts/api-domains.mjs';

// Section membership is independent of legacy URLs: existing deep links stay valid.
export const sectionTabs = [
  { label: 'Guides', icon: 'book-open', path: '/', href: '/' },
  { label: 'Apps & Integrations', icon: 'blocks', path: '/developer/app-store', href: '/developer/app-store/overview' },
  { label: 'Cloud & Deployment', icon: 'cloud', path: '/cloud', href: '/cloud/overview' },
  { label: 'API Reference', icon: 'braces', path: '/api-reference', href: '/api-reference' },
];

const sectionPrefixes = [
  ['/'],
  ['/developer/app-store', '/developer/extending'],
  ['/cloud', '/setup', '/upgrade-guides', '/developer/running-saleor', '/security'],
  ['/api-reference'],
];
const under = (route, prefix) => route === prefix || route.startsWith(`${prefix}/`);
export function sectionForRoute(route) {
  const section = sectionPrefixes.findIndex((prefixes, index) => index > 0 && prefixes.some(prefix => under(route, prefix)));
  return section < 0 ? 0 : section;
}

// Blume matches one prefix per tab. Select the section's matching legacy
// prefix on each page, keeping destinations and native tree scoping stable.
export function tabsForRoute(route) {
  const active = sectionForRoute(route);
  return sectionTabs.map((tab, index) => ({
    ...tab,
    path: index === active
      ? sectionPrefixes[index].find(prefix => under(route, prefix)) ?? tab.path
      : tab.path,
  }));
}

const link = (label, href) => ({ type: 'link', label, href });
const group = (label, items) => ({ type: 'category', label, collapsed: true, items });
const contents = (items) => items.filter(item => !item.customProps?.sidebar_is_backlink);

export function sectionItems(navigation, route) {
  const s = navigation.sidebars;
  const section = sectionForRoute(route);
  if (section === 3) return contents(s.api);
  if (section === 1) return [
    link('Overview', '/developer/app-store/overview'),
    group('Available integrations', [
      link('Overview', '/developer/app-store/integrations'),
      ...contents(s.appStore).filter(item => item.href !== '/developer/app-store/overview'),
    ]),
    group('Build an app', contents(s.buildingApps)),
    group('Webhooks & extensions', contents(s.extending)),
  ];
  if (section === 2) return [
    group('Saleor Cloud', contents(s.cloud)),
    group('Self-hosting', contents(s.selfHosting)),
    group('Upgrades', contents(s.upgrade)),
    link('Security', '/security'),
  ];
  return [
    link('Overview', '/'),
    ...s.main.filter(item => ['Quickstart', 'Why Saleor'].includes(item.label)),
    group('Core Concepts', contents(s.concepts)),
    group('API guides', contents(s.graphql)),
    group('Recipes', contents(s.recipes)),
    group('Developer Tools', [link('Configurator', '/developer/tools/configurator')]),
    link('Agents', '/developer/ai'),
    group('Community', contents(s.community)),
    link('Troubleshooting', '/troubleshooting'),
  ];
}

const canonicalRoute = route => route.replace(/\/$/, '') || '/';

// Convert presentation-only navigation headings into real Blume groups.
// Blume owns markup, disclosure state, active links, and deferred navigation.
function sidebarItems(items, { api = false, depth = 0 } = {}) {
  const result = [];
  let target = result;
  for (const item of items) {
    if (item.customProps?.sidebar_is_backlink) continue;
    if (item.type === 'heading') {
      const heading = { label: item.label, items: [] };
      result.push(heading);
      target = heading.items;
    } else if (item.type === 'link') {
      const route = canonicalRoute(item.href);
      const label = item.customProps?.isTitle && item.label !== 'Contributing'
        ? 'Overview'
        : route === '/api-reference' ? 'Overview' : item.label;
      target.push({ label, ...(route.startsWith('/') ? { root: route } : { href: route }) });
    } else if (item.type === 'category') {
      const children = sidebarItems(item.items ?? [], { api, depth: depth + 1 });
      if (api && depth === 0 && item.label !== 'Deprecated' &&
          item.items?.some(child => ['Queries', 'Mutations', 'Objects', 'Enums'].includes(child.label))) {
        children.unshift({ label: 'Overview', root: `/api-reference/${domainSlug(item.label)}` });
      }
      target.push({ label: item.label, items: children, collapsed: true });
    }
  }
  return result;
}

// Only section-level destinations receive icons; nested pages and API domains
// stay text-only so the tree remains easy to scan.
const sectionIcons = {
  Overview: 'house', Quickstart: 'zap', 'Why Saleor': 'compass',
  'Core Concepts': 'layers', 'API guides': 'braces', Recipes: 'notebook-text',
  'Developer Tools': 'terminal', Agents: 'bot', Community: 'users',
  Troubleshooting: 'life-buoy', 'Available integrations': 'blocks',
  'Build an app': 'puzzle', 'Webhooks & extensions': 'webhook',
  'Saleor Cloud': 'cloud', 'Self-hosting': 'server', Upgrades: 'arrow-up-circle',
  Security: 'shield-check',
};
const withSectionIcons = items => items.map(item => ({ ...item, icon: sectionIcons[item.label] }));

// Long app trees use Blume's native drill-in panels. Keep the catalog heading
// static so the initial view is a readable list of integrations, not a tree.
function appSidebar(items, depth = 0) {
  return items.map(item => item.items ? {
    ...item,
    display: depth === 0 && item.label === 'Available integrations' ? 'flat' : 'page',
    items: appSidebar(item.items, depth + 1),
  } : item);
}

export function sidebarConfig(navigation) {
  return [
    ...withSectionIcons(sidebarItems(sectionItems(navigation, '/'))),
    ...sectionTabs.slice(1).map(tab => ({
      label: tab.label,
      root: tab.href,
      items: tab.href === '/api-reference'
        ? sidebarItems(sectionItems(navigation, tab.href), { api: true })
        : withSectionIcons(tab.href === '/developer/app-store/overview'
          ? appSidebar(sidebarItems(sectionItems(navigation, tab.href)))
          : sidebarItems(sectionItems(navigation, tab.href))),
    })),
  ];
}

// Legacy sections span multiple URL prefixes. Give their native container the
// active tab's matching path without changing tree order or descendant identity:
// Blume's precomputed fragment IDs must still address the same groups.
export function sidebarForTabs(sidebar, tabs) {
  return sidebar.map(node => {
    const tab = tabs.slice(1).find(tab => node.kind === 'group' && node.route === tab.href);
    return tab ? { ...node, path: tab.path } : node;
  });
}
