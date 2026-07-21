---
api_reference: true
id: order-discount-update
title: orderDiscountUpdate
---

Update discount for the order.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderDiscountUpdate(
  discountId: ID!
  input: OrderDiscountCommonInput!
): OrderDiscountUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderDiscountUpdate</code>.<code class="gqlmd-mdx-entity-name">discountId</code></span>](#discount-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#discount-id\}

ID of a discount to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderDiscountUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDiscountCommonInput!</code></span>](/api-reference/orders/inputs/order-discount-common-input) \{#input\}

Fields required to update a discount for the order.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDiscountUpdate</code></span>](/api-reference/orders/objects/order-discount-update)

Update discount for the order.

Requires one of the following permissions: MANAGE_ORDERS.
