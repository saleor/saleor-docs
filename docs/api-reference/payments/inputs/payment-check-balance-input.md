---
api_reference: true
id: payment-check-balance-input
title: PaymentCheckBalanceInput
---

Fields required to check a payment balance.

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

```graphql
input PaymentCheckBalanceInput {
  gatewayId: String!
  method: String!
  channel: String!
  card: CardInput!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentCheckBalanceInput</code>.<code class="gqlmd-mdx-entity-name">gatewayId</code></span>](#gateway-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#gateway-id\}

An ID of a payment gateway to check.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentCheckBalanceInput</code>.<code class="gqlmd-mdx-entity-name">method</code></span>](#method)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#method\}

Payment method name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentCheckBalanceInput</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\}

Slug of a channel for which the data should be returned.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentCheckBalanceInput</code>.<code class="gqlmd-mdx-entity-name">card</code></span>](#card)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CardInput!</code></span>](/api-reference/miscellaneous/inputs/card-input) \{#card\}

Information about card.

### Member Of

[`paymentCheckBalance`](/api-reference/deprecated/payments/mutations/payment-check-balance) <mark class="gqlmd-mdx-badge">mutation</mark>
