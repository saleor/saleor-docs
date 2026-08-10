---
api_reference: true
id: credit-card
title: CreditCard
---

No description

```graphql
type CreditCard {
  brand: String!
  firstDigits: String
  lastDigits: String!
  expMonth: Int
  expYear: Int
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CreditCard</code>.<code class="gqlmd-mdx-entity-name">brand</code></span>](#brand)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#brand\}

Card brand.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CreditCard</code>.<code class="gqlmd-mdx-entity-name">firstDigits</code></span>](#first-digits)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#first-digits\}

First 4 digits of the card number.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CreditCard</code>.<code class="gqlmd-mdx-entity-name">lastDigits</code></span>](#last-digits)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#last-digits\}

Last 4 digits of the card number.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CreditCard</code>.<code class="gqlmd-mdx-entity-name">expMonth</code></span>](#exp-month)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#exp-month\}

Two-digit number representing the card’s expiration month.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CreditCard</code>.<code class="gqlmd-mdx-entity-name">expYear</code></span>](#exp-year)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#exp-year\}

Four-digit number representing the card’s expiration year.

### Member Of

[`Payment`](/api-reference/payments/objects/payment) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PaymentSource`](/api-reference/payments/objects/payment-source) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`StoredPaymentMethod`](/api-reference/payments/objects/stored-payment-method) <mark class="gqlmd-mdx-badge">object</mark>
