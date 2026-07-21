---
api_reference: true
id: fulfillment-update-tracking-input
title: FulfillmentUpdateTrackingInput
---

No description

```graphql
input FulfillmentUpdateTrackingInput {
  trackingNumber: String
  notifyCustomer: Boolean
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FulfillmentUpdateTrackingInput</code>.<code class="gqlmd-mdx-entity-name">trackingNumber</code></span>](#tracking-number)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#tracking-number\}

Fulfillment tracking number.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FulfillmentUpdateTrackingInput</code>.<code class="gqlmd-mdx-entity-name">notifyCustomer</code></span>](#notify-customer)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#notify-customer\}

If true, send an email notification to the customer.

### Member Of

[`orderFulfillmentUpdateTracking`](/api-reference/orders/mutations/order-fulfillment-update-tracking) <mark class="gqlmd-mdx-badge">mutation</mark>
