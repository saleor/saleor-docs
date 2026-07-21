---
api_reference: true
id: warehouse-sorting-input
title: WarehouseSortingInput
---

No description

```graphql
input WarehouseSortingInput {
  direction: OrderDirection!
  field: WarehouseSortField!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseSortingInput</code>.<code class="gqlmd-mdx-entity-name">direction</code></span>](#direction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDirection!</code></span>](/api-reference/miscellaneous/enums/order-direction) \{#direction\}

Specifies the direction in which to sort warehouses.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseSortingInput</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WarehouseSortField!</code></span>](/api-reference/products/enums/warehouse-sort-field) \{#field\}

Sort warehouses by the selected field.

### Member Of

[`warehouses`](/api-reference/products/queries/warehouses) <mark class="gqlmd-mdx-badge">query</mark>
