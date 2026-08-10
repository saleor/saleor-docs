---
api_reference: true
id: order-fulfillment-refund-products
title: orderFulfillmentRefundProducts
---

Refund products.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderFulfillmentRefundProducts(
  input: OrderRefundProductsInput!
  order: ID!
): FulfillmentRefundProducts
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderFulfillmentRefundProducts</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderRefundProductsInput!</code></span>](/api-reference/orders/inputs/order-refund-products-input) \{#input\}

Fields required to create an refund fulfillment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderFulfillmentRefundProducts</code>.<code class="gqlmd-mdx-entity-name">order</code></span>](#order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#order\}

ID of the order to be refunded.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">FulfillmentRefundProducts</code></span>](/api-reference/orders/objects/fulfillment-refund-products)

Refund products.

Requires one of the following permissions: MANAGE_ORDERS.
