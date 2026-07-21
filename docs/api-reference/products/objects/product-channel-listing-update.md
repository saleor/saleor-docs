---
api_reference: true
id: product-channel-listing-update
title: ProductChannelListingUpdate
---

Manage product's availability in channels.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
type ProductChannelListingUpdate {
  product: Product
  productChannelListingErrors: [ProductChannelListingError!]! @deprecated
  errors: [ProductChannelListingError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListingUpdate</code>.<code class="gqlmd-mdx-entity-name">product</code></span>](#product)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Product</code></span>](/api-reference/products/objects/product) \{#product\}

An updated product instance.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListingUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductChannelListingError!]!</code></span>](/api-reference/products/objects/product-channel-listing-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListingUpdate</code>.<code class="gqlmd-mdx-entity-name">productChannelListingErrors</code></span>](#product-channel-listing-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductChannelListingError!]!</code></span>](/api-reference/products/objects/product-channel-listing-error) \{#product-channel-listing-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`productChannelListingUpdate`](/api-reference/products/mutations/product-channel-listing-update) <mark class="gqlmd-mdx-badge">mutation</mark>
