---
api_reference: true
id: order-update-shipping
title: orderUpdateShipping
---

Updates a shipping method of the order. Requires shipping method ID to update, when null is passed then currently assigned shipping method is removed.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderUpdateShipping(
  order: ID!
  input: OrderUpdateShippingInput!
): OrderUpdateShipping
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderUpdateShipping</code>.<code class="gqlmd-mdx-entity-name">order</code></span>](#order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#order\}

ID of the order to update a shipping method.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderUpdateShipping</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderUpdateShippingInput!</code></span>](/api-reference/orders/inputs/order-update-shipping-input) \{#input\}

Fields required to change shipping method of the order.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderUpdateShipping</code></span>](/api-reference/orders/objects/order-update-shipping)

Updates a shipping method of the order. Requires shipping method ID to update, when null is passed then currently assigned shipping method is removed.

Requires one of the following permissions: MANAGE_ORDERS.
