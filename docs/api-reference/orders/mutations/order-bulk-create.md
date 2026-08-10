---
api_reference: true
id: order-bulk-create
title: orderBulkCreate
---

Creates multiple orders.

Requires one of the following permissions: MANAGE_ORDERS_IMPORT.

```graphql
orderBulkCreate(
  errorPolicy: ErrorPolicyEnum
  orders: [OrderBulkCreateInput!]!
  stockUpdatePolicy: StockUpdatePolicyEnum
): OrderBulkCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderBulkCreate</code>.<code class="gqlmd-mdx-entity-name">errorPolicy</code></span>](#error-policy)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ErrorPolicyEnum</code></span>](/api-reference/miscellaneous/enums/error-policy-enum) \{#error-policy\}

Policies of error handling. DEFAULT: REJECT_EVERYTHING

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderBulkCreate</code>.<code class="gqlmd-mdx-entity-name">orders</code></span>](#orders)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderBulkCreateInput!]!</code></span>](/api-reference/orders/inputs/order-bulk-create-input) \{#orders\}

Input list of orders to create. Orders limit: 50.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderBulkCreate</code>.<code class="gqlmd-mdx-entity-name">stockUpdatePolicy</code></span>](#stock-update-policy)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StockUpdatePolicyEnum</code></span>](/api-reference/miscellaneous/enums/stock-update-policy-enum) \{#stock-update-policy\}

Determine how stock should be updated, while processing the order. DEFAULT: UPDATE - Only do update, if there is enough stocks.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderBulkCreate</code></span>](/api-reference/orders/objects/order-bulk-create)

Creates multiple orders.

Requires one of the following permissions: MANAGE_ORDERS_IMPORT.
