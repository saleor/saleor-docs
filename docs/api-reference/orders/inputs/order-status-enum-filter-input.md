---
api_reference: true
id: order-status-enum-filter-input
title: OrderStatusEnumFilterInput
---

Filter by order status.

```graphql
input OrderStatusEnumFilterInput {
  eq: OrderStatus
  oneOf: [OrderStatus!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderStatusEnumFilterInput</code>.<code class="gqlmd-mdx-entity-name">eq</code></span>](#eq)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderStatus</code></span>](/api-reference/orders/enums/order-status) \{#eq\}

The value equal to.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderStatusEnumFilterInput</code>.<code class="gqlmd-mdx-entity-name">oneOf</code></span>](#one-of)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderStatus!]</code></span>](/api-reference/orders/enums/order-status) \{#one-of\}

The value included in.

### Member Of

[`CustomerOrderWhereInput`](/api-reference/orders/inputs/customer-order-where-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderWhereInput`](/api-reference/orders/inputs/order-where-input) <mark class="gqlmd-mdx-badge">input</mark>
