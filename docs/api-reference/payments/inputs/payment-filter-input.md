---
api_reference: true
id: payment-filter-input
title: PaymentFilterInput
---

Filtering options for payments.

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

```graphql
input PaymentFilterInput {
  ids: [ID!]
  checkouts: [ID!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentFilterInput</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

Filter by ids.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentFilterInput</code>.<code class="gqlmd-mdx-entity-name">checkouts</code></span>](#checkouts)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#checkouts\}

### Member Of

[`payments`](/api-reference/deprecated/payments/queries/payments) <mark class="gqlmd-mdx-badge">query</mark>
