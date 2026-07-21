---
api_reference: true
id: order-bulk-create
title: OrderBulkCreate
---

Creates multiple orders.

Requires one of the following permissions: MANAGE_ORDERS_IMPORT.

```graphql
type OrderBulkCreate {
  count: Int!
  results: [OrderBulkCreateResult!]!
  errors: [OrderBulkCreateError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreate</code>.<code class="gqlmd-mdx-entity-name">count</code></span>](#count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#count\}

Returns how many objects were created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreate</code>.<code class="gqlmd-mdx-entity-name">results</code></span>](#results)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderBulkCreateResult!]!</code></span>](/api-reference/orders/objects/order-bulk-create-result) \{#results\}

List of the created orders.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderBulkCreateError!]!</code></span>](/api-reference/orders/objects/order-bulk-create-error) \{#errors\}

### Returned By

[`orderBulkCreate`](/api-reference/orders/mutations/order-bulk-create) <mark class="gqlmd-mdx-badge">mutation</mark>
