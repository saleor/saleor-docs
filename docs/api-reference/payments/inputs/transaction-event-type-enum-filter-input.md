---
api_reference: true
id: transaction-event-type-enum-filter-input
title: TransactionEventTypeEnumFilterInput
---

No description

```graphql
input TransactionEventTypeEnumFilterInput {
  eq: TransactionEventTypeEnum
  oneOf: [TransactionEventTypeEnum!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventTypeEnumFilterInput</code>.<code class="gqlmd-mdx-entity-name">eq</code></span>](#eq)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionEventTypeEnum</code></span>](/api-reference/payments/enums/transaction-event-type-enum) \{#eq\}

The value equal to.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventTypeEnumFilterInput</code>.<code class="gqlmd-mdx-entity-name">oneOf</code></span>](#one-of)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TransactionEventTypeEnum!]</code></span>](/api-reference/payments/enums/transaction-event-type-enum) \{#one-of\}

The value included in.

### Member Of

[`TransactionEventFilterInput`](/api-reference/payments/inputs/transaction-event-filter-input) <mark class="gqlmd-mdx-badge">input</mark>
