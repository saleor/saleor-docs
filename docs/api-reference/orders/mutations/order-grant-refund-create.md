---
api_reference: true
id: order-grant-refund-create
title: orderGrantRefundCreate
---

Adds granted refund to the order.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderGrantRefundCreate(
  id: ID!
  input: OrderGrantRefundCreateInput!
): OrderGrantRefundCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderGrantRefundCreate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderGrantRefundCreate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderGrantRefundCreateInput!</code></span>](/api-reference/orders/inputs/order-grant-refund-create-input) \{#input\}

Fields required to create a granted refund for the order.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderGrantRefundCreate</code></span>](/api-reference/orders/objects/order-grant-refund-create)

Adds granted refund to the order.

Requires one of the following permissions: MANAGE_ORDERS.
