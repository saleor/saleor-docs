---
api_reference: true
id: checkout-shipping-method-update
title: checkoutShippingMethodUpdate
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `checkoutDeliveryMethodUpdate` instead.

</span>
</fieldset>

Updates the shipping method of the checkout.

Triggers the following webhook events:

- SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Triggered when updating the checkout shipping method with the external one.
- CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
- CHECKOUT_UPDATED (async): A checkout was updated.

```graphql
checkoutShippingMethodUpdate(
  checkoutId: ID
  id: ID
  shippingMethodId: ID
  token: UUID
): CheckoutShippingMethodUpdate @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">checkoutShippingMethodUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The checkout's ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">checkoutShippingMethodUpdate</code>.<code class="gqlmd-mdx-entity-name">shippingMethodId</code></span>](#shipping-method-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#shipping-method-id\}

Shipping method.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">checkoutShippingMethodUpdate</code>.<code class="gqlmd-mdx-entity-name">checkoutId</code></span>](#checkout-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#checkout-id\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `id` instead.

</span>
</fieldset>

The ID of the checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">checkoutShippingMethodUpdate</code>.<code class="gqlmd-mdx-entity-name">token</code></span>](#token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">UUID</code></span>](/api-reference/miscellaneous/scalars/uuid) \{#token\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `id` instead.

</span>
</fieldset>

Checkout token.

</details>

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CheckoutShippingMethodUpdate</code></span>](/api-reference/checkout/objects/checkout-shipping-method-update)

Updates the shipping method of the checkout.

Triggers the following webhook events:

- SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Triggered when updating the checkout shipping method with the external one.
- CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
- CHECKOUT_UPDATED (async): A checkout was updated.
