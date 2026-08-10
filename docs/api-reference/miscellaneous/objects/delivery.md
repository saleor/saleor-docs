---
api_reference: true
id: delivery
title: Delivery
---

Represents a delivery option for the checkout.

Added in Saleor 3.23.

```graphql
type Delivery {
  id: ID!
  shippingMethod: ShippingMethod
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Delivery</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the delivery.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Delivery</code>.<code class="gqlmd-mdx-entity-name">shippingMethod</code></span>](#shipping-method)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShippingMethod</code></span>](/api-reference/shipping/objects/shipping-method) \{#shipping-method\}

Shipping method represented by the delivery.

### Member Of

[`Checkout`](/api-reference/checkout/objects/checkout) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutProblemDeliveryMethodInvalid`](/api-reference/checkout/objects/checkout-problem-delivery-method-invalid) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutProblemDeliveryMethodStale`](/api-reference/checkout/objects/checkout-problem-delivery-method-stale) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`DeliveryOptionsCalculate`](/api-reference/shipping/objects/delivery-options-calculate) <mark class="gqlmd-mdx-badge">object</mark>
