---
api_reference: true
id: product-variant-stocks-update-input
title: ProductVariantStocksUpdateInput
---

No description

```graphql
input ProductVariantStocksUpdateInput {
  create: [StockInput!]
  update: [StockUpdateInput!]
  remove: [ID!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantStocksUpdateInput</code>.<code class="gqlmd-mdx-entity-name">create</code></span>](#create)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[StockInput!]</code></span>](/api-reference/products/inputs/stock-input) \{#create\}

List of warehouses to create stocks.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantStocksUpdateInput</code>.<code class="gqlmd-mdx-entity-name">update</code></span>](#update)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[StockUpdateInput!]</code></span>](/api-reference/products/inputs/stock-update-input) \{#update\}

List of stocks to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantStocksUpdateInput</code>.<code class="gqlmd-mdx-entity-name">remove</code></span>](#remove)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#remove\}

List of stocks to remove.

### Member Of

[`ProductVariantBulkUpdateInput`](/api-reference/products/inputs/product-variant-bulk-update-input) <mark class="gqlmd-mdx-badge">input</mark>
