---
api_reference: true
id: order-grant-refund-update
title: orderGrantRefundUpdate
---

Updates granted refund.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderGrantRefundUpdate(
  id: ID!
  input: OrderGrantRefundUpdateInput!
): OrderGrantRefundUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderGrantRefundUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the granted refund.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderGrantRefundUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderGrantRefundUpdateInput!</code></span>](/api-reference/orders/inputs/order-grant-refund-update-input) \{#input\}

Fields required to update a granted refund.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderGrantRefundUpdate</code></span>](/api-reference/orders/objects/order-grant-refund-update)

Updates granted refund.

Requires one of the following permissions: MANAGE_ORDERS.
