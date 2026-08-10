---
api_reference: true
id: order-discount-add
title: orderDiscountAdd
---

Adds discount to the order.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderDiscountAdd(
  input: OrderDiscountCommonInput!
  orderId: ID!
): OrderDiscountAdd
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderDiscountAdd</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDiscountCommonInput!</code></span>](/api-reference/orders/inputs/order-discount-common-input) \{#input\}

Fields required to create a discount for the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderDiscountAdd</code>.<code class="gqlmd-mdx-entity-name">orderId</code></span>](#order-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#order-id\}

ID of an order to discount.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDiscountAdd</code></span>](/api-reference/orders/objects/order-discount-add)

Adds discount to the order.

Requires one of the following permissions: MANAGE_ORDERS.
