---
api_reference: true
id: order-update-shipping-input
title: OrderUpdateShippingInput
---

No description

```graphql
input OrderUpdateShippingInput {
  shippingMethod: ID
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderUpdateShippingInput</code>.<code class="gqlmd-mdx-entity-name">shippingMethod</code></span>](#shipping-method)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#shipping-method\}

ID of the selected shipping method, pass null to remove currently assigned shipping method.

### Member Of

[`orderUpdateShipping`](/api-reference/orders/mutations/order-update-shipping) <mark class="gqlmd-mdx-badge">mutation</mark>
