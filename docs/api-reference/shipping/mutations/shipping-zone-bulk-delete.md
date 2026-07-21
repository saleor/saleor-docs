---
api_reference: true
id: shipping-zone-bulk-delete
title: shippingZoneBulkDelete
---

Deletes shipping zones.

Requires one of the following permissions: MANAGE_SHIPPING.

```graphql
shippingZoneBulkDelete(
  ids: [ID!]!
): ShippingZoneBulkDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">shippingZoneBulkDelete</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of shipping zone IDs to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShippingZoneBulkDelete</code></span>](/api-reference/shipping/objects/shipping-zone-bulk-delete)

Deletes shipping zones.

Requires one of the following permissions: MANAGE_SHIPPING.
