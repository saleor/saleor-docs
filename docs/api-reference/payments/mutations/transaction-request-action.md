---
api_reference: true
id: transaction-request-action
title: transactionRequestAction
---

Request an action for payment transaction.

Requires one of the following permissions: HANDLE_PAYMENTS.

```graphql
transactionRequestAction(
  actionType: TransactionActionEnum!
  amount: PositiveDecimal
  id: ID
  refundReason: String
  refundReasonReference: ID
  token: UUID
): TransactionRequestAction
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionRequestAction</code>.<code class="gqlmd-mdx-entity-name">actionType</code></span>](#action-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionActionEnum!</code></span>](/api-reference/payments/enums/transaction-action-enum) \{#action-type\}

Determines the action type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionRequestAction</code>.<code class="gqlmd-mdx-entity-name">amount</code></span>](#amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#amount\}

Transaction request amount. If empty, maximal possible amount will be used.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionRequestAction</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the transaction. One of field id or token is required.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionRequestAction</code>.<code class="gqlmd-mdx-entity-name">refundReason</code></span>](#refund-reason)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#refund-reason\}

Reason of the refund

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionRequestAction</code>.<code class="gqlmd-mdx-entity-name">refundReasonReference</code></span>](#refund-reason-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#refund-reason-reference\}

ID of a `Page` (Model) to reference in reason.

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionRequestAction</code>.<code class="gqlmd-mdx-entity-name">token</code></span>](#token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">UUID</code></span>](/api-reference/miscellaneous/scalars/uuid) \{#token\}

The token of the transaction. One of field id or token is required.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionRequestAction</code></span>](/api-reference/payments/objects/transaction-request-action)

Request an action for payment transaction.

Requires one of the following permissions: HANDLE_PAYMENTS.
