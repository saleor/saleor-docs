---
api_reference: true
id: checkout-delivery-method-update
title: checkoutDeliveryMethodUpdate
---

Updates the delivery method (shipping method or pick up point) of the checkout. Updates the checkout shipping_address for click and collect delivery for a warehouse address.

Triggers the following webhook events:

- SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Triggered when updating the checkout delivery method with the external one.
- CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
- CHECKOUT_UPDATED (async): A checkout was updated.

```graphql
checkoutDeliveryMethodUpdate(
  deliveryMethodId: ID
  id: ID
  token: UUID
): CheckoutDeliveryMethodUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">checkoutDeliveryMethodUpdate</code>.<code class="gqlmd-mdx-entity-name">deliveryMethodId</code></span>](#delivery-method-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#delivery-method-id\}

Delivery Method ID (`Warehouse` ID or `ShippingMethod` ID or `CheckoutDelivery` ID).

DEPRECATED: Usage of `ShippingMethod` ID is deprecated. Use CheckoutDelivery ID instead.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">checkoutDeliveryMethodUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The checkout's ID.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">checkoutDeliveryMethodUpdate</code>.<code class="gqlmd-mdx-entity-name">token</code></span>](#token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">UUID</code></span>](/api-reference/miscellaneous/scalars/uuid) \{#token\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `id` instead.

</span>
</fieldset>

Checkout token.

</details>

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CheckoutDeliveryMethodUpdate</code></span>](/api-reference/checkout/objects/checkout-delivery-method-update)

Updates the delivery method (shipping method or pick up point) of the checkout. Updates the checkout shipping_address for click and collect delivery for a warehouse address.

Triggers the following webhook events:

- SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Triggered when updating the checkout delivery method with the external one.
- CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
- CHECKOUT_UPDATED (async): A checkout was updated.
