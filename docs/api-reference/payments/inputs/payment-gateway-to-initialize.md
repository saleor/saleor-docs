---
api_reference: true
id: payment-gateway-to-initialize
title: PaymentGatewayToInitialize
---

No description

```graphql
input PaymentGatewayToInitialize {
  id: String!
  data: JSON
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentGatewayToInitialize</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#id\}

The identifier of the payment gateway app to initialize.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentGatewayToInitialize</code>.<code class="gqlmd-mdx-entity-name">data</code></span>](#data)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSON</code></span>](/api-reference/miscellaneous/scalars/json) \{#data\}

The data that will be passed to the payment gateway.

### Member Of

[`paymentGatewayInitialize`](/api-reference/payments/mutations/payment-gateway-initialize) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`transactionInitialize`](/api-reference/payments/mutations/transaction-initialize) <mark class="gqlmd-mdx-badge">mutation</mark>
