---
api_reference: true
id: order-line-discount-remove
title: orderLineDiscountRemove
---

Remove discount applied to the order line.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderLineDiscountRemove(
  orderLineId: ID!
): OrderLineDiscountRemove
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderLineDiscountRemove</code>.<code class="gqlmd-mdx-entity-name">orderLineId</code></span>](#order-line-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#order-line-id\}

ID of a order line to remove its discount

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderLineDiscountRemove</code></span>](/api-reference/orders/objects/order-line-discount-remove)

Remove discount applied to the order line.

Requires one of the following permissions: MANAGE_ORDERS.
