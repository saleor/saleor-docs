---
api_reference: true
id: transaction-filter-input
title: TransactionFilterInput
---

Filter input for transactions.

```graphql
input TransactionFilterInput {
  paymentMethodDetails: PaymentMethodDetailsFilterInput
  pspReference: StringFilterInput
  metadata: MetadataFilterInput
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionFilterInput</code>.<code class="gqlmd-mdx-entity-name">paymentMethodDetails</code></span>](#payment-method-details)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentMethodDetailsFilterInput</code></span>](/api-reference/miscellaneous/inputs/payment-method-details-filter-input) \{#payment-method-details\}

Filter by payment method details used to pay for the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionFilterInput</code>.<code class="gqlmd-mdx-entity-name">pspReference</code></span>](#psp-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StringFilterInput</code></span>](/api-reference/miscellaneous/inputs/string-filter-input) \{#psp-reference\}

Filter by PSP reference of transactions.

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionFilterInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MetadataFilterInput</code></span>](/api-reference/miscellaneous/inputs/metadata-filter-input) \{#metadata\}

Filter by metadata fields of transactions.

### Member Of

[`DraftOrderWhereInput`](/api-reference/orders/inputs/draft-order-where-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderWhereInput`](/api-reference/orders/inputs/order-where-input) <mark class="gqlmd-mdx-badge">input</mark>
