---
api_reference: true
id: order-mark-as-paid
title: orderMarkAsPaid
---

Mark order as manually paid.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderMarkAsPaid(
  id: ID!
  transactionReference: String
): OrderMarkAsPaid
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderMarkAsPaid</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the order to mark paid.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderMarkAsPaid</code>.<code class="gqlmd-mdx-entity-name">transactionReference</code></span>](#transaction-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#transaction-reference\}

The external transaction reference.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderMarkAsPaid</code></span>](/api-reference/orders/objects/order-mark-as-paid)

Mark order as manually paid.

Requires one of the following permissions: MANAGE_ORDERS.
