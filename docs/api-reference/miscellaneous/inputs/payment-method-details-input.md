---
api_reference: true
id: payment-method-details-input
title: PaymentMethodDetailsInput
---

Details of the payment method used for the transaction. One of `card`, `other`, or `giftCard` is required.

Added in Saleor 3.22.

```graphql
input PaymentMethodDetailsInput {
  card: CardPaymentMethodDetailsInput
  other: OtherPaymentMethodDetailsInput
  giftCard: GiftCardPaymentMethodDetailsInput
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodDetailsInput</code>.<code class="gqlmd-mdx-entity-name">card</code></span>](#card)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CardPaymentMethodDetailsInput</code></span>](/api-reference/miscellaneous/inputs/card-payment-method-details-input) \{#card\}

Details of the card payment method used for the transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodDetailsInput</code>.<code class="gqlmd-mdx-entity-name">other</code></span>](#other)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OtherPaymentMethodDetailsInput</code></span>](/api-reference/miscellaneous/inputs/other-payment-method-details-input) \{#other\}

Details of the non-card payment method used for this transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodDetailsInput</code>.<code class="gqlmd-mdx-entity-name">giftCard</code></span>](#gift-card)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardPaymentMethodDetailsInput</code></span>](/api-reference/miscellaneous/inputs/gift-card-payment-method-details-input) \{#gift-card\}

Details of the gift card payment method used for the transaction.

Added in Saleor 3.23.

### Member Of

[`TransactionCreateInput`](/api-reference/payments/inputs/transaction-create-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`transactionEventReport`](/api-reference/payments/mutations/transaction-event-report) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TransactionUpdateInput`](/api-reference/payments/inputs/transaction-update-input) <mark class="gqlmd-mdx-badge">input</mark>
