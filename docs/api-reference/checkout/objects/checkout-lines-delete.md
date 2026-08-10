---
api_reference: true
id: checkout-lines-delete
title: CheckoutLinesDelete
---

Deletes checkout lines.

Triggers the following webhook events:

- CHECKOUT_UPDATED (async): A checkout was updated.

```graphql
type CheckoutLinesDelete {
  checkout: Checkout
  errors: [CheckoutError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLinesDelete</code>.<code class="gqlmd-mdx-entity-name">checkout</code></span>](#checkout)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Checkout</code></span>](/api-reference/checkout/objects/checkout) \{#checkout\}

An updated checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLinesDelete</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CheckoutError!]!</code></span>](/api-reference/checkout/objects/checkout-error) \{#errors\}

### Returned By

[`checkoutLinesDelete`](/api-reference/checkout/mutations/checkout-lines-delete) <mark class="gqlmd-mdx-badge">mutation</mark>
