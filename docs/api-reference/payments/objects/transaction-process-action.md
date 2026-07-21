---
api_reference: true
id: transaction-process-action
title: TransactionProcessAction
---

No description

```graphql
type TransactionProcessAction {
  amount: PositiveDecimal!
  currency: String!
  actionType: TransactionFlowStrategyEnum!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionProcessAction</code>.<code class="gqlmd-mdx-entity-name">amount</code></span>](#amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal!</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#amount\}

Transaction amount to process.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionProcessAction</code>.<code class="gqlmd-mdx-entity-name">currency</code></span>](#currency)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#currency\}

Currency of the amount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionProcessAction</code>.<code class="gqlmd-mdx-entity-name">actionType</code></span>](#action-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionFlowStrategyEnum!</code></span>](/api-reference/payments/enums/transaction-flow-strategy-enum) \{#action-type\}

### Member Of

[`TransactionInitializeSession`](/api-reference/payments/objects/transaction-initialize-session) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TransactionProcessSession`](/api-reference/payments/objects/transaction-process-session) <mark class="gqlmd-mdx-badge">object</mark>
