---
api_reference: true
id: order-fulfillment-cancel
title: orderFulfillmentCancel
---

Cancels existing fulfillment and optionally restocks items.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderFulfillmentCancel(
  id: ID!
  input: FulfillmentCancelInput
): FulfillmentCancel
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderFulfillmentCancel</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a fulfillment to cancel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderFulfillmentCancel</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">FulfillmentCancelInput</code></span>](/api-reference/orders/inputs/fulfillment-cancel-input) \{#input\}

Fields required to cancel a fulfillment.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">FulfillmentCancel</code></span>](/api-reference/orders/objects/fulfillment-cancel)

Cancels existing fulfillment and optionally restocks items.

Requires one of the following permissions: MANAGE_ORDERS.
