---
api_reference: true
id: checkout-create-from-order
title: CheckoutCreateFromOrder
---

Creates a new checkout from existing order.

```graphql
type CheckoutCreateFromOrder {
  unavailableVariants: [CheckoutCreateFromOrderUnavailableVariant!]
  checkout: Checkout
  errors: [CheckoutCreateFromOrderError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreateFromOrder</code>.<code class="gqlmd-mdx-entity-name">unavailableVariants</code></span>](#unavailable-variants)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CheckoutCreateFromOrderUnavailableVariant!]</code></span>](/api-reference/checkout/objects/checkout-create-from-order-unavailable-variant) \{#unavailable-variants\}

Variants that were not attached to the checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreateFromOrder</code>.<code class="gqlmd-mdx-entity-name">checkout</code></span>](#checkout)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Checkout</code></span>](/api-reference/checkout/objects/checkout) \{#checkout\}

Created checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreateFromOrder</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CheckoutCreateFromOrderError!]!</code></span>](/api-reference/checkout/objects/checkout-create-from-order-error) \{#errors\}

### Returned By

[`checkoutCreateFromOrder`](/api-reference/checkout/mutations/checkout-create-from-order) <mark class="gqlmd-mdx-badge">mutation</mark>
