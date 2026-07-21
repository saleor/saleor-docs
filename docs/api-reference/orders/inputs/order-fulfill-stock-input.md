---
api_reference: true
id: order-fulfill-stock-input
title: OrderFulfillStockInput
---

No description

```graphql
input OrderFulfillStockInput {
  quantity: Int!
  warehouse: ID!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderFulfillStockInput</code>.<code class="gqlmd-mdx-entity-name">quantity</code></span>](#quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity\}

The number of line items to be fulfilled from given warehouse.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderFulfillStockInput</code>.<code class="gqlmd-mdx-entity-name">warehouse</code></span>](#warehouse)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#warehouse\}

ID of the warehouse from which the item will be fulfilled.

### Member Of

[`OrderFulfillLineInput`](/api-reference/orders/inputs/order-fulfill-line-input) <mark class="gqlmd-mdx-badge">input</mark>
