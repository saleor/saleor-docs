---
api_reference: true
id: transaction-sorting-input
title: TransactionSortingInput
---

No description

```graphql
input TransactionSortingInput {
  direction: OrderDirection!
  field: TransactionSortField!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionSortingInput</code>.<code class="gqlmd-mdx-entity-name">direction</code></span>](#direction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDirection!</code></span>](/api-reference/miscellaneous/enums/order-direction) \{#direction\}

Specifies the direction in which to sort transactions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionSortingInput</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionSortField!</code></span>](/api-reference/payments/enums/transaction-sort-field) \{#field\}

Sort transactions by the selected field.

### Member Of

[`transactions`](/api-reference/payments/queries/transactions) <mark class="gqlmd-mdx-badge">query</mark>
