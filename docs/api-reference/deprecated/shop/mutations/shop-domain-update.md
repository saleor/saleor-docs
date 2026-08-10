---
api_reference: true
id: shop-domain-update
title: shopDomainUpdate
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `PUBLIC_URL` environment variable instead.

</span>
</fieldset>

Updates site domain of the shop.

Requires one of the following permissions: MANAGE_SETTINGS.

```graphql
shopDomainUpdate(
  input: SiteDomainInput
): ShopDomainUpdate @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">shopDomainUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SiteDomainInput</code></span>](/api-reference/miscellaneous/inputs/site-domain-input) \{#input\}

Fields required to update site.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShopDomainUpdate</code></span>](/api-reference/shop/objects/shop-domain-update)

Updates site domain of the shop.

Requires one of the following permissions: MANAGE_SETTINGS.
