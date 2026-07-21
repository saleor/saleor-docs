---
api_reference: true
id: transaction-request-refund-for-granted-refund
title: TransactionRequestRefundForGrantedRefund
---

Request a refund for payment transaction based on granted refund.

Requires one of the following permissions: HANDLE_PAYMENTS.

```graphql
type TransactionRequestRefundForGrantedRefund {
  transaction: TransactionItem
  errors: [TransactionRequestRefundForGrantedRefundError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionRequestRefundForGrantedRefund</code>.<code class="gqlmd-mdx-entity-name">transaction</code></span>](#transaction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionItem</code></span>](/api-reference/payments/objects/transaction-item) \{#transaction\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionRequestRefundForGrantedRefund</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TransactionRequestRefundForGrantedRefundError!]!</code></span>](/api-reference/payments/objects/transaction-request-refund-for-granted-refund-error) \{#errors\}

### Returned By

[`transactionRequestRefundForGrantedRefund`](/api-reference/payments/mutations/transaction-request-refund-for-granted-refund) <mark class="gqlmd-mdx-badge">mutation</mark>
