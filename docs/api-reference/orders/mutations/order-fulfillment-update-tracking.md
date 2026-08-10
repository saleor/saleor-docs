---
api_reference: true
id: order-fulfillment-update-tracking
title: orderFulfillmentUpdateTracking
---

Updates a fulfillment for an order.

Requires one of the following permissions: MANAGE_ORDERS.

Triggers the following webhook events:

- FULFILLMENT_TRACKING_NUMBER_UPDATED (async): Fulfillment tracking number is updated.

```graphql
orderFulfillmentUpdateTracking(
  id: ID!
  input: FulfillmentUpdateTrackingInput!
): FulfillmentUpdateTracking
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderFulfillmentUpdateTracking</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a fulfillment to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderFulfillmentUpdateTracking</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">FulfillmentUpdateTrackingInput!</code></span>](/api-reference/orders/inputs/fulfillment-update-tracking-input) \{#input\}

Fields required to update a fulfillment.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">FulfillmentUpdateTracking</code></span>](/api-reference/orders/objects/fulfillment-update-tracking)

Updates a fulfillment for an order.

Requires one of the following permissions: MANAGE_ORDERS.

Triggers the following webhook events:

- FULFILLMENT_TRACKING_NUMBER_UPDATED (async): Fulfillment tracking number is updated.
