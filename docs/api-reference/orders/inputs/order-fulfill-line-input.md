---
api_reference: true
id: order-fulfill-line-input
title: OrderFulfillLineInput
---

No description

```graphql
input OrderFulfillLineInput {
  orderLineId: ID
  stocks: [OrderFulfillStockInput!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderFulfillLineInput</code>.<code class="gqlmd-mdx-entity-name">orderLineId</code></span>](#order-line-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#order-line-id\}

The ID of the order line.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderFulfillLineInput</code>.<code class="gqlmd-mdx-entity-name">stocks</code></span>](#stocks)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderFulfillStockInput!]!</code></span>](/api-reference/orders/inputs/order-fulfill-stock-input) \{#stocks\}

List of stock items to create.

### Member Of

[`OrderFulfillInput`](/api-reference/orders/inputs/order-fulfill-input) <mark class="gqlmd-mdx-badge">input</mark>
