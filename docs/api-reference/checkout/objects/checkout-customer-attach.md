---
api_reference: true
id: checkout-customer-attach
title: CheckoutCustomerAttach
---

Sets the customer as the owner of the checkout.

Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.

Triggers the following webhook events:

- CHECKOUT_UPDATED (async): A checkout was updated.

```graphql
type CheckoutCustomerAttach {
  checkout: Checkout
  checkoutErrors: [CheckoutError!]! @deprecated
  errors: [CheckoutError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCustomerAttach</code>.<code class="gqlmd-mdx-entity-name">checkout</code></span>](#checkout)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Checkout</code></span>](/api-reference/checkout/objects/checkout) \{#checkout\}

An updated checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCustomerAttach</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CheckoutError!]!</code></span>](/api-reference/checkout/objects/checkout-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCustomerAttach</code>.<code class="gqlmd-mdx-entity-name">checkoutErrors</code></span>](#checkout-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CheckoutError!]!</code></span>](/api-reference/checkout/objects/checkout-error) \{#checkout-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`checkoutCustomerAttach`](/api-reference/checkout/mutations/checkout-customer-attach) <mark class="gqlmd-mdx-badge">mutation</mark>
