---
api_reference: true
id: product-variant-back-in-stock-for-click-and-collect
title: productVariantBackInStockForClickAndCollect
---

Event sent when a product variant becomes available again across click-and-collect warehouses in a channel.

Note: Only triggered when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

Added in Saleor 3.23.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

```graphql
productVariantBackInStockForClickAndCollect(
  channels: [String!]
): ProductVariantBackInStockForClickAndCollect
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantBackInStockForClickAndCollect</code>.<code class="gqlmd-mdx-entity-name">channels</code></span>](#channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#channels\}

List of channel slugs. The event will be sent only if the object belongs to one of the provided channels. If the channel slug list is empty, objects that belong to any channel will be sent. Maximally 500 items.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantBackInStockForClickAndCollect</code></span>](/api-reference/products/objects/product-variant-back-in-stock-for-click-and-collect)

Event sent when a product variant becomes available again across click-and-collect warehouses in a channel.

Note: Only triggered when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

Added in Saleor 3.23.
