---
api_reference: true
id: order-bulk-create-result
title: OrderBulkCreateResult
---

No description

```graphql
type OrderBulkCreateResult {
  order: Order
  errors: [OrderBulkCreateError!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateResult</code>.<code class="gqlmd-mdx-entity-name">order</code></span>](#order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Order</code></span>](/api-reference/orders/objects/order) \{#order\}

Order data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateResult</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderBulkCreateError!]</code></span>](/api-reference/orders/objects/order-bulk-create-error) \{#errors\}

List of errors occurred on create attempt.

### Member Of

[`OrderBulkCreate`](/api-reference/orders/objects/order-bulk-create) <mark class="gqlmd-mdx-badge">object</mark>
