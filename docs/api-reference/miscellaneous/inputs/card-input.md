---
api_reference: true
id: card-input
title: CardInput
---

Card data used to check a payment balance.

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

```graphql
input CardInput {
  code: String!
  cvc: String
  money: MoneyInput!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CardInput</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#code\}

Payment method nonce, a token returned by the appropriate provider's SDK.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CardInput</code>.<code class="gqlmd-mdx-entity-name">cvc</code></span>](#cvc)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#cvc\}

Card security code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CardInput</code>.<code class="gqlmd-mdx-entity-name">money</code></span>](#money)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MoneyInput!</code></span>](/api-reference/miscellaneous/inputs/money-input) \{#money\}

Information about currency and amount.

### Member Of

[`PaymentCheckBalanceInput`](/api-reference/payments/inputs/payment-check-balance-input) <mark class="gqlmd-mdx-badge">input</mark>
