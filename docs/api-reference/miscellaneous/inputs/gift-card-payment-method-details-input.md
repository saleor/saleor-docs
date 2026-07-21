---
api_reference: true
id: gift-card-payment-method-details-input
title: GiftCardPaymentMethodDetailsInput
---

No description

```graphql
input GiftCardPaymentMethodDetailsInput {
  name: String!
  brand: String
  lastChars: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardPaymentMethodDetailsInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the payment method used for the transaction. Max length is 256 characters.

Added in Saleor 3.23.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardPaymentMethodDetailsInput</code>.<code class="gqlmd-mdx-entity-name">brand</code></span>](#brand)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#brand\}

Brand of the gift card used for the transaction. Max length is 40 characters.

Added in Saleor 3.23.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardPaymentMethodDetailsInput</code>.<code class="gqlmd-mdx-entity-name">lastChars</code></span>](#last-chars)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#last-chars\}

Last characters of the gift card used for the transaction. Max length is 4 characters.

Added in Saleor 3.23.

### Member Of

[`PaymentMethodDetailsInput`](/api-reference/miscellaneous/inputs/payment-method-details-input) <mark class="gqlmd-mdx-badge">input</mark>
