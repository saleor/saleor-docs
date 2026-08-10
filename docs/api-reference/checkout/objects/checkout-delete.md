---
api_reference: true
id: checkout-delete
title: CheckoutDelete
---

Deletes a checkout.

Added in Saleor 3.23.

Requires one of the following permissions: MANAGE_CHECKOUTS.

```graphql
type CheckoutDelete {
  errors: [CheckoutDeleteError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutDelete</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CheckoutDeleteError!]!</code></span>](/api-reference/checkout/objects/checkout-delete-error) \{#errors\}

### Returned By

[`checkoutDelete`](/api-reference/checkout/mutations/checkout-delete) <mark class="gqlmd-mdx-badge">mutation</mark>
