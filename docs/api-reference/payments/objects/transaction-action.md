---
api_reference: true
id: transaction-action
title: TransactionAction
---

No description

```graphql
type TransactionAction {
  actionType: TransactionActionEnum!
  amount: PositiveDecimal!
  currency: String!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionAction</code>.<code class="gqlmd-mdx-entity-name">actionType</code></span>](#action-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionActionEnum!</code></span>](/api-reference/payments/enums/transaction-action-enum) \{#action-type\}

Determines the action type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionAction</code>.<code class="gqlmd-mdx-entity-name">amount</code></span>](#amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal!</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#amount\}

Transaction request amount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionAction</code>.<code class="gqlmd-mdx-entity-name">currency</code></span>](#currency)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#currency\}

Currency code.

### Member Of

[`TransactionCancelationRequested`](/api-reference/payments/objects/transaction-cancelation-requested) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TransactionChargeRequested`](/api-reference/payments/objects/transaction-charge-requested) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TransactionRefundRequested`](/api-reference/payments/objects/transaction-refund-requested) <mark class="gqlmd-mdx-badge">object</mark>
