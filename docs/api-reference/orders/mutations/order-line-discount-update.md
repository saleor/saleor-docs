---
api_reference: true
id: order-line-discount-update
title: orderLineDiscountUpdate
---

Update discount for the order line.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderLineDiscountUpdate(
  input: OrderDiscountCommonInput!
  orderLineId: ID!
): OrderLineDiscountUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderLineDiscountUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDiscountCommonInput!</code></span>](/api-reference/orders/inputs/order-discount-common-input) \{#input\}

Fields required to update price for the order line.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderLineDiscountUpdate</code>.<code class="gqlmd-mdx-entity-name">orderLineId</code></span>](#order-line-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#order-line-id\}

ID of a order line to update price

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderLineDiscountUpdate</code></span>](/api-reference/orders/objects/order-line-discount-update)

Update discount for the order line.

Requires one of the following permissions: MANAGE_ORDERS.
