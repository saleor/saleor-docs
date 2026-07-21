---
api_reference: true
id: money-input
title: MoneyInput
---

No description

```graphql
input MoneyInput {
  currency: String!
  amount: PositiveDecimal!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MoneyInput</code>.<code class="gqlmd-mdx-entity-name">currency</code></span>](#currency)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#currency\}

Currency code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MoneyInput</code>.<code class="gqlmd-mdx-entity-name">amount</code></span>](#amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal!</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#amount\}

Amount of money.

### Member Of

[`CardInput`](/api-reference/miscellaneous/inputs/card-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TransactionCreateInput`](/api-reference/payments/inputs/transaction-create-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TransactionUpdateInput`](/api-reference/payments/inputs/transaction-update-input) <mark class="gqlmd-mdx-badge">input</mark>
