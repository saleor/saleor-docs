---
api_reference: true
id: order-fulfill-input
title: OrderFulfillInput
---

No description

```graphql
input OrderFulfillInput {
  lines: [OrderFulfillLineInput!]!
  notifyCustomer: Boolean
  allowStockToBeExceeded: Boolean
  trackingNumber: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderFulfillInput</code>.<code class="gqlmd-mdx-entity-name">lines</code></span>](#lines)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderFulfillLineInput!]!</code></span>](/api-reference/orders/inputs/order-fulfill-line-input) \{#lines\}

List of items informing how to fulfill the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderFulfillInput</code>.<code class="gqlmd-mdx-entity-name">notifyCustomer</code></span>](#notify-customer)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#notify-customer\}

If true, send an email notification to the customer.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderFulfillInput</code>.<code class="gqlmd-mdx-entity-name">allowStockToBeExceeded</code></span>](#allow-stock-to-be-exceeded)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#allow-stock-to-be-exceeded\}

If true, then allow proceed fulfillment when stock is exceeded.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderFulfillInput</code>.<code class="gqlmd-mdx-entity-name">trackingNumber</code></span>](#tracking-number)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#tracking-number\}

Fulfillment tracking number.

### Member Of

[`orderFulfill`](/api-reference/orders/mutations/order-fulfill) <mark class="gqlmd-mdx-badge">mutation</mark>
