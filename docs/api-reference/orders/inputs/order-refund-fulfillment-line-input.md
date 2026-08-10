---
api_reference: true
id: order-refund-fulfillment-line-input
title: OrderRefundFulfillmentLineInput
---

No description

```graphql
input OrderRefundFulfillmentLineInput {
  fulfillmentLineId: ID!
  quantity: Int!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderRefundFulfillmentLineInput</code>.<code class="gqlmd-mdx-entity-name">fulfillmentLineId</code></span>](#fulfillment-line-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#fulfillment-line-id\}

The ID of the fulfillment line to refund.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderRefundFulfillmentLineInput</code>.<code class="gqlmd-mdx-entity-name">quantity</code></span>](#quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity\}

The number of items to be refunded.

### Member Of

[`OrderRefundProductsInput`](/api-reference/orders/inputs/order-refund-products-input) <mark class="gqlmd-mdx-badge">input</mark>
