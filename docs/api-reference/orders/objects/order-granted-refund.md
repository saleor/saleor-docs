---
api_reference: true
id: order-granted-refund
title: OrderGrantedRefund
---

The details of granted refund.

```graphql
type OrderGrantedRefund {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  amount: Money!
  reason: String
  reasonReference: Page
  user: User
  app: App
  shippingCostsIncluded: Boolean!
  lines: [OrderGrantedRefundLine!]
  status: OrderGrantedRefundStatusEnum!
  transactionEvents: [TransactionEvent!]
  transaction: TransactionItem
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantedRefund</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantedRefund</code>.<code class="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#created-at\}

Time of creation.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantedRefund</code>.<code class="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#updated-at\}

Time of last update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantedRefund</code>.<code class="gqlmd-mdx-entity-name">amount</code></span>](#amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#amount\}

Refund amount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantedRefund</code>.<code class="gqlmd-mdx-entity-name">reason</code></span>](#reason)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#reason\}

Reason of the refund.

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantedRefund</code>.<code class="gqlmd-mdx-entity-name">reasonReference</code></span>](#reason-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Page</code></span>](/api-reference/pages/objects/page) \{#reason-reference\}

Reason Model (Page) reference for refund.

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantedRefund</code>.<code class="gqlmd-mdx-entity-name">user</code></span>](#user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span>](/api-reference/users/objects/user) \{#user\}

User who performed the action. Requires of of the following permissions: MANAGE_USERS, MANAGE_STAFF, OWNER.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantedRefund</code>.<code class="gqlmd-mdx-entity-name">app</code></span>](#app)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">App</code></span>](/api-reference/apps/objects/app) \{#app\}

App that performed the action.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantedRefund</code>.<code class="gqlmd-mdx-entity-name">shippingCostsIncluded</code></span>](#shipping-costs-included)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#shipping-costs-included\}

If true, the refunded amount includes the shipping price.If false, the refunded amount does not include the shipping price.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantedRefund</code>.<code class="gqlmd-mdx-entity-name">lines</code></span>](#lines)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderGrantedRefundLine!]</code></span>](/api-reference/miscellaneous/objects/order-granted-refund-line) \{#lines\}

Lines assigned to the granted refund.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantedRefund</code>.<code class="gqlmd-mdx-entity-name">status</code></span>](#status)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderGrantedRefundStatusEnum!</code></span>](/api-reference/orders/enums/order-granted-refund-status-enum) \{#status\}

Status of the granted refund calculated based on transactionItem assigned to granted refund.

Added in Saleor 3.20.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantedRefund</code>.<code class="gqlmd-mdx-entity-name">transactionEvents</code></span>](#transaction-events)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TransactionEvent!]</code></span>](/api-reference/payments/objects/transaction-event) \{#transaction-events\}

List of refund events associated with the granted refund.

Added in Saleor 3.20.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantedRefund</code>.<code class="gqlmd-mdx-entity-name">transaction</code></span>](#transaction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionItem</code></span>](/api-reference/payments/objects/transaction-item) \{#transaction\}

The transaction assigned to the granted refund.

Added in Saleor 3.20.

### Member Of

[`Order`](/api-reference/orders/objects/order) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderGrantRefundCreate`](/api-reference/orders/objects/order-grant-refund-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderGrantRefundUpdate`](/api-reference/orders/objects/order-grant-refund-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TransactionRefundRequested`](/api-reference/payments/objects/transaction-refund-requested) <mark class="gqlmd-mdx-badge">object</mark>
