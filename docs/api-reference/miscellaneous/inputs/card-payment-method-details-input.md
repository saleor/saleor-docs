---
api_reference: true
id: card-payment-method-details-input
title: CardPaymentMethodDetailsInput
---

No description

```graphql
input CardPaymentMethodDetailsInput {
  name: String!
  brand: String
  firstDigits: String
  lastDigits: String
  expMonth: Int
  expYear: Int
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CardPaymentMethodDetailsInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the payment method used for the transaction. Max length is 256 characters.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CardPaymentMethodDetailsInput</code>.<code class="gqlmd-mdx-entity-name">brand</code></span>](#brand)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#brand\}

Brand of the payment method used for the transaction. Max length is 40 characters.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CardPaymentMethodDetailsInput</code>.<code class="gqlmd-mdx-entity-name">firstDigits</code></span>](#first-digits)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#first-digits\}

First digits of the card used for the transaction. Max length is 4 characters.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CardPaymentMethodDetailsInput</code>.<code class="gqlmd-mdx-entity-name">lastDigits</code></span>](#last-digits)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#last-digits\}

Last digits of the card used for the transaction. Max length is 4 characters.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CardPaymentMethodDetailsInput</code>.<code class="gqlmd-mdx-entity-name">expMonth</code></span>](#exp-month)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#exp-month\}

Expiration month of the card used for the transaction. Value must be between 1 and 12.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CardPaymentMethodDetailsInput</code>.<code class="gqlmd-mdx-entity-name">expYear</code></span>](#exp-year)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#exp-year\}

Expiration year of the card used for the transaction. Value must be between 2000 and 9999.

### Member Of

[`PaymentMethodDetailsInput`](/api-reference/miscellaneous/inputs/payment-method-details-input) <mark class="gqlmd-mdx-badge">input</mark>
