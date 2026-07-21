---
api_reference: true
id: transaction-request-action
title: TransactionRequestAction
---

Request an action for payment transaction.

Requires one of the following permissions: HANDLE_PAYMENTS.

```graphql
type TransactionRequestAction {
  transaction: TransactionItem
  errors: [TransactionRequestActionError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionRequestAction</code>.<code class="gqlmd-mdx-entity-name">transaction</code></span>](#transaction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionItem</code></span>](/api-reference/payments/objects/transaction-item) \{#transaction\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionRequestAction</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TransactionRequestActionError!]!</code></span>](/api-reference/payments/objects/transaction-request-action-error) \{#errors\}

### Returned By

[`transactionRequestAction`](/api-reference/payments/mutations/transaction-request-action) <mark class="gqlmd-mdx-badge">mutation</mark>
