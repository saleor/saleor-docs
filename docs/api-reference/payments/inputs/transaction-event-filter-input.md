---
api_reference: true
id: transaction-event-filter-input
title: TransactionEventFilterInput
---

Filter input for transaction events data.

Added in Saleor 3.23.

```graphql
input TransactionEventFilterInput {
  createdAt: DateTimeRangeInput
  type: TransactionEventTypeEnumFilterInput
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventFilterInput</code>.<code class="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTimeRangeInput</code></span>](/api-reference/miscellaneous/inputs/date-time-range-input) \{#created-at\}

Filter transaction events by created at date.

Added in Saleor 3.23.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventFilterInput</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionEventTypeEnumFilterInput</code></span>](/api-reference/payments/inputs/transaction-event-type-enum-filter-input) \{#type\}

Filter transaction events by type.

Added in Saleor 3.23.

### Member Of

[`TransactionWhereInput`](/api-reference/payments/inputs/transaction-where-input) <mark class="gqlmd-mdx-badge">input</mark>
