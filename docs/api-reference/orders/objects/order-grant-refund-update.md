---
api_reference: true
id: order-grant-refund-update
title: OrderGrantRefundUpdate
---

Updates granted refund.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
type OrderGrantRefundUpdate {
  order: Order
  grantedRefund: OrderGrantedRefund
  errors: [OrderGrantRefundUpdateError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundUpdate</code>.<code class="gqlmd-mdx-entity-name">order</code></span>](#order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Order</code></span>](/api-reference/orders/objects/order) \{#order\}

Order which has assigned updated grant refund.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundUpdate</code>.<code class="gqlmd-mdx-entity-name">grantedRefund</code></span>](#granted-refund)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderGrantedRefund</code></span>](/api-reference/orders/objects/order-granted-refund) \{#granted-refund\}

Created granted refund.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderGrantRefundUpdateError!]!</code></span>](/api-reference/orders/objects/order-grant-refund-update-error) \{#errors\}

### Returned By

[`orderGrantRefundUpdate`](/api-reference/orders/mutations/order-grant-refund-update) <mark class="gqlmd-mdx-badge">mutation</mark>
