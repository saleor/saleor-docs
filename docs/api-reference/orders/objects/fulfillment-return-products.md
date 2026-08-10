---
api_reference: true
id: fulfillment-return-products
title: FulfillmentReturnProducts
---

Return products.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
type FulfillmentReturnProducts {
  returnFulfillment: Fulfillment
  replaceFulfillment: Fulfillment
  order: Order
  replaceOrder: Order
  orderErrors: [OrderError!]! @deprecated
  errors: [OrderError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FulfillmentReturnProducts</code>.<code class="gqlmd-mdx-entity-name">returnFulfillment</code></span>](#return-fulfillment)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Fulfillment</code></span>](/api-reference/orders/objects/fulfillment) \{#return-fulfillment\}

A return fulfillment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FulfillmentReturnProducts</code>.<code class="gqlmd-mdx-entity-name">replaceFulfillment</code></span>](#replace-fulfillment)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Fulfillment</code></span>](/api-reference/orders/objects/fulfillment) \{#replace-fulfillment\}

A replace fulfillment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FulfillmentReturnProducts</code>.<code class="gqlmd-mdx-entity-name">order</code></span>](#order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Order</code></span>](/api-reference/orders/objects/order) \{#order\}

Order which fulfillment was returned.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FulfillmentReturnProducts</code>.<code class="gqlmd-mdx-entity-name">replaceOrder</code></span>](#replace-order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Order</code></span>](/api-reference/orders/objects/order) \{#replace-order\}

A draft order which was created for products with replace flag.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FulfillmentReturnProducts</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderError!]!</code></span>](/api-reference/orders/objects/order-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FulfillmentReturnProducts</code>.<code class="gqlmd-mdx-entity-name">orderErrors</code></span>](#order-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderError!]!</code></span>](/api-reference/orders/objects/order-error) \{#order-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`orderFulfillmentReturnProducts`](/api-reference/orders/mutations/order-fulfillment-return-products) <mark class="gqlmd-mdx-badge">mutation</mark>
