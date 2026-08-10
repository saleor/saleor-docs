---
api_reference: true
id: order-fulfill
title: orderFulfill
---

Creates new fulfillments for an order.

Requires one of the following permissions: MANAGE_ORDERS.

Triggers the following webhook events:

- FULFILLMENT_CREATED (async): A new fulfillment is created.
- ORDER_FULFILLED (async): Order is fulfilled.
- FULFILLMENT_TRACKING_NUMBER_UPDATED (async): Sent when fulfillment tracking number is updated.
- FULFILLMENT_APPROVED (async): A fulfillment is approved.

```graphql
orderFulfill(
  input: OrderFulfillInput!
  order: ID
): OrderFulfill
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderFulfill</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderFulfillInput!</code></span>](/api-reference/orders/inputs/order-fulfill-input) \{#input\}

Fields required to create a fulfillment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderFulfill</code>.<code class="gqlmd-mdx-entity-name">order</code></span>](#order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#order\}

ID of the order to be fulfilled.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderFulfill</code></span>](/api-reference/orders/objects/order-fulfill)

Creates new fulfillments for an order.

Requires one of the following permissions: MANAGE_ORDERS.

Triggers the following webhook events:

- FULFILLMENT_CREATED (async): A new fulfillment is created.
- ORDER_FULFILLED (async): Order is fulfilled.
- FULFILLMENT_TRACKING_NUMBER_UPDATED (async): Sent when fulfillment tracking number is updated.
- FULFILLMENT_APPROVED (async): A fulfillment is approved.
