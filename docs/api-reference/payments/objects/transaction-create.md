---
api_reference: true
id: transaction-create
title: TransactionCreate
---

Creates transaction for checkout or order.

Requires one of the following permissions: HANDLE_PAYMENTS.

```graphql
type TransactionCreate {
  transaction: TransactionItem
  errors: [TransactionCreateError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionCreate</code>.<code class="gqlmd-mdx-entity-name">transaction</code></span>](#transaction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionItem</code></span>](/api-reference/payments/objects/transaction-item) \{#transaction\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionCreate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TransactionCreateError!]!</code></span>](/api-reference/payments/objects/transaction-create-error) \{#errors\}

### Returned By

[`transactionCreate`](/api-reference/payments/mutations/transaction-create) <mark class="gqlmd-mdx-badge">mutation</mark>
