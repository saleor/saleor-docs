---
api_reference: true
id: fulfillment-approve
title: FulfillmentApprove
---

Approve existing fulfillment.

Requires one of the following permissions: MANAGE_ORDERS.

Triggers the following webhook events:

- FULFILLMENT_APPROVED (async): Fulfillment is approved.

```graphql
type FulfillmentApprove {
  fulfillment: Fulfillment
  order: Order
  orderErrors: [OrderError!]! @deprecated
  errors: [OrderError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FulfillmentApprove</code>.<code class="gqlmd-mdx-entity-name">fulfillment</code></span>](#fulfillment)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Fulfillment</code></span>](/api-reference/orders/objects/fulfillment) \{#fulfillment\}

An approved fulfillment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FulfillmentApprove</code>.<code class="gqlmd-mdx-entity-name">order</code></span>](#order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Order</code></span>](/api-reference/orders/objects/order) \{#order\}

Order which fulfillment was approved.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FulfillmentApprove</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderError!]!</code></span>](/api-reference/orders/objects/order-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FulfillmentApprove</code>.<code class="gqlmd-mdx-entity-name">orderErrors</code></span>](#order-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderError!]!</code></span>](/api-reference/orders/objects/order-error) \{#order-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`orderFulfillmentApprove`](/api-reference/orders/mutations/order-fulfillment-approve) <mark class="gqlmd-mdx-badge">mutation</mark>
