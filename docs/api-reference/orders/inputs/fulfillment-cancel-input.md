---
api_reference: true
id: fulfillment-cancel-input
title: FulfillmentCancelInput
---

No description

```graphql
input FulfillmentCancelInput {
  warehouseId: ID
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FulfillmentCancelInput</code>.<code class="gqlmd-mdx-entity-name">warehouseId</code></span>](#warehouse-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#warehouse-id\}

ID of a warehouse where items will be restocked. Optional when fulfillment is in WAITING_FOR_APPROVAL state.

### Member Of

[`orderFulfillmentCancel`](/api-reference/orders/mutations/order-fulfillment-cancel) <mark class="gqlmd-mdx-badge">mutation</mark>
