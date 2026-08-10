---
api_reference: true
id: order-line-update
title: orderLineUpdate
---

Updates an order line of an order.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderLineUpdate(
  id: ID!
  input: OrderLineInput!
): OrderLineUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderLineUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the order line to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderLineUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderLineInput!</code></span>](/api-reference/orders/inputs/order-line-input) \{#input\}

Fields required to update an order line.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderLineUpdate</code></span>](/api-reference/orders/objects/order-line-update)

Updates an order line of an order.

Requires one of the following permissions: MANAGE_ORDERS.
