---
api_reference: true
id: product-stock-filter-input
title: ProductStockFilterInput
---

No description

```graphql
input ProductStockFilterInput {
  warehouseIds: [ID!]
  quantity: IntRangeInput
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductStockFilterInput</code>.<code class="gqlmd-mdx-entity-name">warehouseIds</code></span>](#warehouse-ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#warehouse-ids\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductStockFilterInput</code>.<code class="gqlmd-mdx-entity-name">quantity</code></span>](#quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">IntRangeInput</code></span>](/api-reference/miscellaneous/inputs/int-range-input) \{#quantity\}

### Member Of

[`ProductFilterInput`](/api-reference/products/inputs/product-filter-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductWhereInput`](/api-reference/products/inputs/product-where-input) <mark class="gqlmd-mdx-badge">input</mark>
