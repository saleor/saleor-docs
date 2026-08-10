---
api_reference: true
id: payment-method-details
title: PaymentMethodDetails
---

Represents a payment method used for a transaction.

Added in Saleor 3.22.

```graphql
interface PaymentMethodDetails {
  name: String!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodDetails</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the payment method.

### Member Of

[`TransactionItem`](/api-reference/payments/objects/transaction-item) <mark class="gqlmd-mdx-badge">object</mark>

### Implemented By

[`CardPaymentMethodDetails`](/api-reference/miscellaneous/objects/card-payment-method-details) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`GiftCardPaymentMethodDetails`](/api-reference/miscellaneous/objects/gift-card-payment-method-details) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OtherPaymentMethodDetails`](/api-reference/miscellaneous/objects/other-payment-method-details) <mark class="gqlmd-mdx-badge">object</mark>
