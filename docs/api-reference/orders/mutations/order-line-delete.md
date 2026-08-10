---
api_reference: true
id: order-line-delete
title: orderLineDelete
---

Deletes an order line from an order.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderLineDelete(
  id: ID!
): OrderLineDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderLineDelete</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the order line to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderLineDelete</code></span>](/api-reference/orders/objects/order-line-delete)

Deletes an order line from an order.

Requires one of the following permissions: MANAGE_ORDERS.
