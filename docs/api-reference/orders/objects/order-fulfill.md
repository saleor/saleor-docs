---
api_reference: true
id: order-fulfill
title: OrderFulfill
---

Creates new fulfillments for an order.

Requires one of the following permissions: MANAGE_ORDERS.

Triggers the following webhook events:

- FULFILLMENT_CREATED (async): A new fulfillment is created.
- ORDER_FULFILLED (async): Order is fulfilled.
- FULFILLMENT_TRACKING_NUMBER_UPDATED (async): Sent when fulfillment tracking number is updated.
- FULFILLMENT_APPROVED (async): A fulfillment is approved.

```graphql
type OrderFulfill {
  fulfillments: [Fulfillment!]
  order: Order
  orderErrors: [OrderError!]! @deprecated
  errors: [OrderError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderFulfill</code>.<code class="gqlmd-mdx-entity-name">fulfillments</code></span>](#fulfillments)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Fulfillment!]</code></span>](/api-reference/orders/objects/fulfillment) \{#fulfillments\}

List of created fulfillments.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderFulfill</code>.<code class="gqlmd-mdx-entity-name">order</code></span>](#order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Order</code></span>](/api-reference/orders/objects/order) \{#order\}

Fulfilled order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderFulfill</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderError!]!</code></span>](/api-reference/orders/objects/order-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderFulfill</code>.<code class="gqlmd-mdx-entity-name">orderErrors</code></span>](#order-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderError!]!</code></span>](/api-reference/orders/objects/order-error) \{#order-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`orderFulfill`](/api-reference/orders/mutations/order-fulfill) <mark class="gqlmd-mdx-badge">mutation</mark>
