---
api_reference: true
id: order-discount-delete
title: orderDiscountDelete
---

Remove discount from the order.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderDiscountDelete(
  discountId: ID!
): OrderDiscountDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderDiscountDelete</code>.<code class="gqlmd-mdx-entity-name">discountId</code></span>](#discount-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#discount-id\}

ID of a discount to remove.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDiscountDelete</code></span>](/api-reference/orders/objects/order-discount-delete)

Remove discount from the order.

Requires one of the following permissions: MANAGE_ORDERS.
