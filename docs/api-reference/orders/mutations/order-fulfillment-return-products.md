---
api_reference: true
id: order-fulfillment-return-products
title: orderFulfillmentReturnProducts
---

Return products.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderFulfillmentReturnProducts(
  input: OrderReturnProductsInput!
  order: ID!
): FulfillmentReturnProducts
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderFulfillmentReturnProducts</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderReturnProductsInput!</code></span>](/api-reference/orders/inputs/order-return-products-input) \{#input\}

Fields required to return products.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderFulfillmentReturnProducts</code>.<code class="gqlmd-mdx-entity-name">order</code></span>](#order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#order\}

ID of the order to be returned.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">FulfillmentReturnProducts</code></span>](/api-reference/orders/objects/fulfillment-return-products)

Return products.

Requires one of the following permissions: MANAGE_ORDERS.
