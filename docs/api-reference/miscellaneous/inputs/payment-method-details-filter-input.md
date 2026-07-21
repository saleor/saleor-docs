---
api_reference: true
id: payment-method-details-filter-input
title: PaymentMethodDetailsFilterInput
---

No description

```graphql
input PaymentMethodDetailsFilterInput {
  type: PaymentMethodTypeEnumFilterInput
  card: PaymentMethodDetailsCardFilterInput
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodDetailsFilterInput</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentMethodTypeEnumFilterInput</code></span>](/api-reference/miscellaneous/inputs/payment-method-type-enum-filter-input) \{#type\}

Filter by payment method type used to pay for the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodDetailsFilterInput</code>.<code class="gqlmd-mdx-entity-name">card</code></span>](#card)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentMethodDetailsCardFilterInput</code></span>](/api-reference/miscellaneous/inputs/payment-method-details-card-filter-input) \{#card\}

Filter by card details used to pay for the order. Skips `type` filter if provided.

### Member Of

[`TransactionFilterInput`](/api-reference/orders/inputs/transaction-filter-input) <mark class="gqlmd-mdx-badge">input</mark>
