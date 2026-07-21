---
api_reference: true
id: order-sorting-input
title: OrderSortingInput
---

No description

```graphql
input OrderSortingInput {
  direction: OrderDirection!
  field: OrderSortField!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSortingInput</code>.<code class="gqlmd-mdx-entity-name">direction</code></span>](#direction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDirection!</code></span>](/api-reference/miscellaneous/enums/order-direction) \{#direction\}

Specifies the direction in which to sort orders.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSortingInput</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderSortField!</code></span>](/api-reference/orders/enums/order-sort-field) \{#field\}

Sort orders by the selected field.

### Member Of

[`draftOrders`](/api-reference/orders/queries/draft-orders) <mark class="gqlmd-mdx-badge">query</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`orders`](/api-reference/orders/queries/orders) <mark class="gqlmd-mdx-badge">query</mark>
