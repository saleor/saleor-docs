---
api_reference: true
id: checkout-delivery-method-update
title: CheckoutDeliveryMethodUpdate
---

Updates the delivery method (shipping method or pick up point) of the checkout. Updates the checkout shipping_address for click and collect delivery for a warehouse address.

Triggers the following webhook events:

- SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Triggered when updating the checkout delivery method with the external one.
- CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
- CHECKOUT_UPDATED (async): A checkout was updated.

```graphql
type CheckoutDeliveryMethodUpdate {
  checkout: Checkout
  errors: [CheckoutError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutDeliveryMethodUpdate</code>.<code class="gqlmd-mdx-entity-name">checkout</code></span>](#checkout)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Checkout</code></span>](/api-reference/checkout/objects/checkout) \{#checkout\}

An updated checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutDeliveryMethodUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CheckoutError!]!</code></span>](/api-reference/checkout/objects/checkout-error) \{#errors\}

### Returned By

[`checkoutDeliveryMethodUpdate`](/api-reference/checkout/mutations/checkout-delivery-method-update) <mark class="gqlmd-mdx-badge">mutation</mark>
