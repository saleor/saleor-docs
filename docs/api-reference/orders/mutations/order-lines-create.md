---
api_reference: true
id: order-lines-create
title: orderLinesCreate
---

Creates order lines for an order.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderLinesCreate(
  id: ID!
  input: [OrderLineCreateInput!]!
): OrderLinesCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderLinesCreate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the order to add the lines to.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderLinesCreate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderLineCreateInput!]!</code></span>](/api-reference/orders/inputs/order-line-create-input) \{#input\}

Fields required to add order lines.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderLinesCreate</code></span>](/api-reference/orders/objects/order-lines-create)

Creates order lines for an order.

Requires one of the following permissions: MANAGE_ORDERS.
