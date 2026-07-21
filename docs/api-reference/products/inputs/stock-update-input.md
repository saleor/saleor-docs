---
api_reference: true
id: stock-update-input
title: StockUpdateInput
---

No description

```graphql
input StockUpdateInput {
  stock: ID!
  quantity: Int!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StockUpdateInput</code>.<code class="gqlmd-mdx-entity-name">stock</code></span>](#stock)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#stock\}

Stock.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StockUpdateInput</code>.<code class="gqlmd-mdx-entity-name">quantity</code></span>](#quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity\}

Quantity of items available for sell.

### Member Of

[`ProductVariantStocksUpdateInput`](/api-reference/products/inputs/product-variant-stocks-update-input) <mark class="gqlmd-mdx-badge">input</mark>
