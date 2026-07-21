---
api_reference: true
id: order-grant-refund-create
title: OrderGrantRefundCreate
---

Adds granted refund to the order.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
type OrderGrantRefundCreate {
  order: Order
  grantedRefund: OrderGrantedRefund
  errors: [OrderGrantRefundCreateError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundCreate</code>.<code class="gqlmd-mdx-entity-name">order</code></span>](#order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Order</code></span>](/api-reference/orders/objects/order) \{#order\}

Order which has assigned new grant refund.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundCreate</code>.<code class="gqlmd-mdx-entity-name">grantedRefund</code></span>](#granted-refund)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderGrantedRefund</code></span>](/api-reference/orders/objects/order-granted-refund) \{#granted-refund\}

Created granted refund.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundCreate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderGrantRefundCreateError!]!</code></span>](/api-reference/orders/objects/order-grant-refund-create-error) \{#errors\}

### Returned By

[`orderGrantRefundCreate`](/api-reference/orders/mutations/order-grant-refund-create) <mark class="gqlmd-mdx-badge">mutation</mark>
