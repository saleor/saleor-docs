---
api_reference: true
id: order-refund-line-input
title: OrderRefundLineInput
---

No description

```graphql
input OrderRefundLineInput {
  orderLineId: ID!
  quantity: Int!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderRefundLineInput</code>.<code class="gqlmd-mdx-entity-name">orderLineId</code></span>](#order-line-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#order-line-id\}

The ID of the order line to refund.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderRefundLineInput</code>.<code class="gqlmd-mdx-entity-name">quantity</code></span>](#quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity\}

The number of items to be refunded.

### Member Of

[`OrderRefundProductsInput`](/api-reference/orders/inputs/order-refund-products-input) <mark class="gqlmd-mdx-badge">input</mark>
