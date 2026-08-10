---
api_reference: true
id: checkout-remove-promo-code
title: CheckoutRemovePromoCode
---

Remove a gift card or a voucher from a checkout.

Triggers the following webhook events:

- CHECKOUT_UPDATED (async): A checkout was updated.

```graphql
type CheckoutRemovePromoCode {
  checkout: Checkout
  checkoutErrors: [CheckoutError!]! @deprecated
  errors: [CheckoutError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutRemovePromoCode</code>.<code class="gqlmd-mdx-entity-name">checkout</code></span>](#checkout)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Checkout</code></span>](/api-reference/checkout/objects/checkout) \{#checkout\}

The checkout with the removed gift card or voucher.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutRemovePromoCode</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CheckoutError!]!</code></span>](/api-reference/checkout/objects/checkout-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutRemovePromoCode</code>.<code class="gqlmd-mdx-entity-name">checkoutErrors</code></span>](#checkout-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CheckoutError!]!</code></span>](/api-reference/checkout/objects/checkout-error) \{#checkout-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`checkoutRemovePromoCode`](/api-reference/checkout/mutations/checkout-remove-promo-code) <mark class="gqlmd-mdx-badge">mutation</mark>
