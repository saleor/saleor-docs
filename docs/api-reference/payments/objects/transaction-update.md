---
api_reference: true
id: transaction-update
title: TransactionUpdate
---

Update transaction.

Requires the following permissions: OWNER and HANDLE_PAYMENTS for apps, HANDLE_PAYMENTS for staff users. Staff user cannot update a transaction that is owned by the app.

```graphql
type TransactionUpdate {
  transaction: TransactionItem
  errors: [TransactionUpdateError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionUpdate</code>.<code class="gqlmd-mdx-entity-name">transaction</code></span>](#transaction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionItem</code></span>](/api-reference/payments/objects/transaction-item) \{#transaction\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TransactionUpdateError!]!</code></span>](/api-reference/payments/objects/transaction-update-error) \{#errors\}

### Returned By

[`transactionUpdate`](/api-reference/payments/mutations/transaction-update) <mark class="gqlmd-mdx-badge">mutation</mark>
