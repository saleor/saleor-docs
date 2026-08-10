---
api_reference: true
id: order-confirm
title: orderConfirm
---

Confirms an unconfirmed order by changing status to unfulfilled.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderConfirm(
  id: ID!
): OrderConfirm
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderConfirm</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of an order to confirm.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderConfirm</code></span>](/api-reference/orders/objects/order-confirm)

Confirms an unconfirmed order by changing status to unfulfilled.

Requires one of the following permissions: MANAGE_ORDERS.
