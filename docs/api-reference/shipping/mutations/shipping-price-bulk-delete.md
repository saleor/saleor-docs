---
api_reference: true
id: shipping-price-bulk-delete
title: shippingPriceBulkDelete
---

Deletes shipping prices.

Requires one of the following permissions: MANAGE_SHIPPING.

```graphql
shippingPriceBulkDelete(
  ids: [ID!]!
): ShippingPriceBulkDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">shippingPriceBulkDelete</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of shipping price IDs to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShippingPriceBulkDelete</code></span>](/api-reference/shipping/objects/shipping-price-bulk-delete)

Deletes shipping prices.

Requires one of the following permissions: MANAGE_SHIPPING.
