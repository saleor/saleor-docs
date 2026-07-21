---
api_reference: true
id: order-bulk-cancel
title: orderBulkCancel
---

Cancels orders.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderBulkCancel(
  ids: [ID!]!
): OrderBulkCancel
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderBulkCancel</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of orders IDs to cancel.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderBulkCancel</code></span>](/api-reference/orders/objects/order-bulk-cancel)

Cancels orders.

Requires one of the following permissions: MANAGE_ORDERS.
