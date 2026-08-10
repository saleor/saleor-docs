---
api_reference: true
id: product-variant-discounted-price-updated
title: productVariantDiscountedPriceUpdated
---

Event sent when product variant discounted price is recalculated.

Added in Saleor 3.22.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

```graphql
productVariantDiscountedPriceUpdated(
  channels: [String!]
): ProductVariantDiscountedPriceUpdated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantDiscountedPriceUpdated</code>.<code class="gqlmd-mdx-entity-name">channels</code></span>](#channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#channels\}

List of channel slugs. The event will be sent only if the object belongs to one of the provided channels. If the channel slug list is empty, objects that belong to any channel will be sent. Maximally 500 items.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantDiscountedPriceUpdated</code></span>](/api-reference/products/objects/product-variant-discounted-price-updated)

Event sent when product variant discounted price is recalculated.

Added in Saleor 3.22.
