---
api_reference: true
id: checkout-complete
title: CheckoutComplete
---

Completes the checkout. As a result a new order is created. The mutation allows to create the unpaid order when setting `orderSettings.allowUnpaidOrders` for given `Channel` is set to `true`. When `orderSettings.allowUnpaidOrders` is set to `false`, checkout can be completed only when attached `Payment`/`TransactionItem`s fully cover the checkout's total. When processing the checkout with `Payment`, in case of required additional confirmation step like 3D secure, the `confirmationNeeded` flag will be set to True and no order will be created until payment is confirmed with second call of this mutation.

Triggers the following webhook events:

- SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Optionally triggered when cached external shipping methods are invalid.
- CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
- CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
- ORDER_CREATED (async): Triggered when order is created.
- NOTIFY_USER (async): A notification for order placement.
- NOTIFY_USER (async): A staff notification for order placement.
- ORDER_UPDATED (async): Triggered when order received the update after placement.
- ORDER_PAID (async): Triggered when newly created order is paid.
- ORDER_FULLY_PAID (async): Triggered when newly created order is fully paid.
- ORDER_CONFIRMED (async): Optionally triggered when newly created order are automatically marked as confirmed.

```graphql
type CheckoutComplete {
  order: Order
  confirmationNeeded: Boolean!
  confirmationData: JSONString
  checkoutErrors: [CheckoutError!]! @deprecated
  errors: [CheckoutError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutComplete</code>.<code class="gqlmd-mdx-entity-name">order</code></span>](#order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Order</code></span>](/api-reference/orders/objects/order) \{#order\}

Placed order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutComplete</code>.<code class="gqlmd-mdx-entity-name">confirmationNeeded</code></span>](#confirmation-needed)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#confirmation-needed\}

Set to true if payment needs to be confirmed before checkout is complete.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutComplete</code>.<code class="gqlmd-mdx-entity-name">confirmationData</code></span>](#confirmation-data)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#confirmation-data\}

Confirmation data used to process additional authorization steps.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutComplete</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CheckoutError!]!</code></span>](/api-reference/checkout/objects/checkout-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutComplete</code>.<code class="gqlmd-mdx-entity-name">checkoutErrors</code></span>](#checkout-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CheckoutError!]!</code></span>](/api-reference/checkout/objects/checkout-error) \{#checkout-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`checkoutComplete`](/api-reference/checkout/mutations/checkout-complete) <mark class="gqlmd-mdx-badge">mutation</mark>
