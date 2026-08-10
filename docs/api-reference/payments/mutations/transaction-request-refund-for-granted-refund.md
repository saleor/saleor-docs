---
api_reference: true
id: transaction-request-refund-for-granted-refund
title: transactionRequestRefundForGrantedRefund
---

Request a refund for payment transaction based on granted refund.

Requires one of the following permissions: HANDLE_PAYMENTS.

```graphql
transactionRequestRefundForGrantedRefund(
  grantedRefundId: ID!
  id: ID
  token: UUID
): TransactionRequestRefundForGrantedRefund
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionRequestRefundForGrantedRefund</code>.<code class="gqlmd-mdx-entity-name">grantedRefundId</code></span>](#granted-refund-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#granted-refund-id\}

The ID of the granted refund.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionRequestRefundForGrantedRefund</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the transaction. One of field id or token is required, if `transactionItem` is not already assigned to the `orderGrantedRefund`. If `transactionItem` is already assigned to the grantedRefund the field will be ignored.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionRequestRefundForGrantedRefund</code>.<code class="gqlmd-mdx-entity-name">token</code></span>](#token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">UUID</code></span>](/api-reference/miscellaneous/scalars/uuid) \{#token\}

The token of the transaction. One of field id or token is required, if `transactionItem` is not already assigned to the `orderGrantedRefund`. If `transactionItem` is already assigned to the grantedRefund the field will be ignored.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionRequestRefundForGrantedRefund</code></span>](/api-reference/payments/objects/transaction-request-refund-for-granted-refund)

Request a refund for payment transaction based on granted refund.

Requires one of the following permissions: HANDLE_PAYMENTS.
