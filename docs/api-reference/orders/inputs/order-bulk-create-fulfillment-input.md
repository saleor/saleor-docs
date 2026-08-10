---
api_reference: true
id: order-bulk-create-fulfillment-input
title: OrderBulkCreateFulfillmentInput
---

No description

```graphql
input OrderBulkCreateFulfillmentInput {
  trackingCode: String
  lines: [OrderBulkCreateFulfillmentLineInput!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateFulfillmentInput</code>.<code class="gqlmd-mdx-entity-name">trackingCode</code></span>](#tracking-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#tracking-code\}

Fulfillment's tracking code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateFulfillmentInput</code>.<code class="gqlmd-mdx-entity-name">lines</code></span>](#lines)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderBulkCreateFulfillmentLineInput!]</code></span>](/api-reference/orders/inputs/order-bulk-create-fulfillment-line-input) \{#lines\}

List of items informing how to fulfill the order.

### Member Of

[`OrderBulkCreateInput`](/api-reference/orders/inputs/order-bulk-create-input) <mark class="gqlmd-mdx-badge">input</mark>
