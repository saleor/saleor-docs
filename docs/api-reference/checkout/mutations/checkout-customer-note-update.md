---
api_reference: true
id: checkout-customer-note-update
title: checkoutCustomerNoteUpdate
---

Updates customer note in the existing checkout object.

Added in Saleor 3.21.

Triggers the following webhook events:

- CHECKOUT_UPDATED (async): A checkout was updated.

```graphql
checkoutCustomerNoteUpdate(
  customerNote: String!
  id: ID!
): CheckoutCustomerNoteUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">checkoutCustomerNoteUpdate</code>.<code class="gqlmd-mdx-entity-name">customerNote</code></span>](#customer-note)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#customer-note\}

New customer note content.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">checkoutCustomerNoteUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The checkout's ID.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CheckoutCustomerNoteUpdate</code></span>](/api-reference/checkout/objects/checkout-customer-note-update)

Updates customer note in the existing checkout object.

Added in Saleor 3.21.

Triggers the following webhook events:

- CHECKOUT_UPDATED (async): A checkout was updated.
