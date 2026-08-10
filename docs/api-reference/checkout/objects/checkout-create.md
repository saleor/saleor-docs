---
api_reference: true
id: checkout-create
title: CheckoutCreate
---

Create a new checkout.

`skipValidation` field requires HANDLE_CHECKOUTS and AUTHENTICATED_APP permissions.

Triggers the following webhook events:

- CHECKOUT_CREATED (async): A checkout was created.

```graphql
type CheckoutCreate {
  created: Boolean @deprecated
  checkoutErrors: [CheckoutError!]! @deprecated
  errors: [CheckoutError!]!
  checkout: Checkout
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CheckoutError!]!</code></span>](/api-reference/checkout/objects/checkout-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreate</code>.<code class="gqlmd-mdx-entity-name">checkout</code></span>](#checkout)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Checkout</code></span>](/api-reference/checkout/objects/checkout) \{#checkout\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreate</code>.<code class="gqlmd-mdx-entity-name">created</code></span>](#created)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#created\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Always returns `true`.

</span>
</fieldset>

Whether the checkout was created or the current active one was returned. Refer to checkoutLinesAdd and checkoutLinesUpdate to merge a cart with an active checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreate</code>.<code class="gqlmd-mdx-entity-name">checkoutErrors</code></span>](#checkout-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CheckoutError!]!</code></span>](/api-reference/checkout/objects/checkout-error) \{#checkout-errors\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`checkoutCreate`](/api-reference/checkout/mutations/checkout-create) <mark class="gqlmd-mdx-badge">mutation</mark>
