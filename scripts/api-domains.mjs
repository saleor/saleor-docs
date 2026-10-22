const domainGuides = {
  Apps: ['/developer/extending/apps/overview', 'Build an app'],
  Attributes: ['/developer/attributes/overview', 'Understand attributes'],
  Authentication: ['/api-usage/authentication', 'Authenticate API requests'],
  Channels: ['/developer/channels/overview', 'Configure channels'],
  Checkout: ['/developer/checkout/api-guide', 'Build a checkout'],
  Discounts: ['/developer/discounts/promotions', 'Configure promotions'],
  Orders: ['/developer/order/overview', 'Understand orders'],
  Payments: ['/developer/payments/overview', 'Integrate payments'],
  Products: ['/developer/products/overview', 'Model your catalog'],
  Shipping: ['/developer/shipping/shipping-method', 'Configure shipping'],
  Webhooks: ['/developer/extending/webhooks/overview', 'Work with webhooks'],
};
export const domainSlug = name => name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
export function domainOverview(domain, pages, version) {
  const current = pages.filter(page => page.domain === domain && !page.route.includes('/deprecated/') && !/^deprecated: true$/m.test(page.content));
  const guide = domainGuides[domain];
  const groups = ['queries', 'mutations', 'subscriptions', 'objects', 'inputs', 'enums', 'interfaces', 'unions', 'scalars', 'directives'];
  return `Explore the ${domain.toLowerCase()} API in **${version}**. Choose an operation below, then follow its type links for arguments and return fields.\n\n${guide ? `Start with [${guide[1]}](${guide[0]}) for the implementation workflow.\n\n` : ''}[API walkthrough](/quickstart/api) · [Authentication](/api-usage/authentication) · [Download schema](/schema/saleor.graphql)\n\n${groups.map(kind => {
    const items = current.filter(page => page.kind === kind).sort((a, b) => a.name.localeCompare(b.name));
    if (!items.length) return '';
    return `## ${kind[0].toUpperCase() + kind.slice(1)}\n\n${items.map(page => `- [${page.name}](${page.route})`).join('\n')}\n`;
  }).join('\n')}\nDeprecated operations remain available through search and the Deprecated section of the API navigation.\n`;
}
