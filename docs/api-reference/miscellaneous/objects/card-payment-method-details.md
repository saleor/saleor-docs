---
api_reference: true
id: card-payment-method-details
title: CardPaymentMethodDetails
---

Represents a card payment method used for a transaction.

Added in Saleor 3.22.

```graphql
type CardPaymentMethodDetails implements PaymentMethodDetails {
  name: String!
  brand: String
  firstDigits: String
  lastDigits: String
  expMonth: Int
  expYear: Int
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CardPaymentMethodDetails</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the payment method.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CardPaymentMethodDetails</code>.<code class="gqlmd-mdx-entity-name">brand</code></span>](#brand)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#brand\}

Card brand.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CardPaymentMethodDetails</code>.<code class="gqlmd-mdx-entity-name">firstDigits</code></span>](#first-digits)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#first-digits\}

First 4 digits of the card number.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CardPaymentMethodDetails</code>.<code class="gqlmd-mdx-entity-name">lastDigits</code></span>](#last-digits)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#last-digits\}

Last 4 digits of the card number.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CardPaymentMethodDetails</code>.<code class="gqlmd-mdx-entity-name">expMonth</code></span>](#exp-month)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#exp-month\}

Two-digit number representing the card’s expiration month.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CardPaymentMethodDetails</code>.<code class="gqlmd-mdx-entity-name">expYear</code></span>](#exp-year)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#exp-year\}

Four-digit number representing the card’s expiration year.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentMethodDetails</code></span>](/api-reference/miscellaneous/interfaces/payment-method-details)

Represents a payment method used for a transaction.

Added in Saleor 3.22.
