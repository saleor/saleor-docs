---
api_reference: true
id: order-fulfillment-approve
title: orderFulfillmentApprove
---

Approve existing fulfillment.

Requires one of the following permissions: MANAGE_ORDERS.

Triggers the following webhook events:

- FULFILLMENT_APPROVED (async): Fulfillment is approved.

```graphql
orderFulfillmentApprove(
  allowStockToBeExceeded: Boolean = false
  id: ID!
  notifyCustomer: Boolean!
): FulfillmentApprove
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderFulfillmentApprove</code>.<code class="gqlmd-mdx-entity-name">allowStockToBeExceeded</code></span>](#allow-stock-to-be-exceeded)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#allow-stock-to-be-exceeded\}

True if stock could be exceeded.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderFulfillmentApprove</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a fulfillment to approve.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderFulfillmentApprove</code>.<code class="gqlmd-mdx-entity-name">notifyCustomer</code></span>](#notify-customer)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#notify-customer\}

True if confirmation email should be send.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">FulfillmentApprove</code></span>](/api-reference/orders/objects/fulfillment-approve)

Approve existing fulfillment.

Requires one of the following permissions: MANAGE_ORDERS.

Triggers the following webhook events:

- FULFILLMENT_APPROVED (async): Fulfillment is approved.
