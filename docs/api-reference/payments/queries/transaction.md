---
api_reference: true
id: transaction
title: transaction
---

Look up a transaction by ID.

Requires one of the following permissions: HANDLE_PAYMENTS, MANAGE_ORDERS.

```graphql
transaction(
  id: ID
  token: UUID
): TransactionItem
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transaction</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a transaction. Either it or token is required to fetch the transaction data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transaction</code>.<code class="gqlmd-mdx-entity-name">token</code></span>](#token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">UUID</code></span>](/api-reference/miscellaneous/scalars/uuid) \{#token\}

Token of a transaction. Either it or ID is required to fetch the transaction data.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionItem</code></span>](/api-reference/payments/objects/transaction-item)

Represents a payment transaction.
