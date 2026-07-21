---
api_reference: true
id: stock-input
title: StockInput
---

No description

```graphql
input StockInput {
  warehouse: ID!
  quantity: Int!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StockInput</code>.<code class="gqlmd-mdx-entity-name">warehouse</code></span>](#warehouse)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#warehouse\}

Warehouse in which stock is located.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StockInput</code>.<code class="gqlmd-mdx-entity-name">quantity</code></span>](#quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity\}

Quantity of items available for sell.

### Member Of

[`ProductVariantBulkCreateInput`](/api-reference/products/inputs/product-variant-bulk-create-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantCreateInput`](/api-reference/products/inputs/product-variant-create-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`productVariantStocksCreate`](/api-reference/products/mutations/product-variant-stocks-create) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`productVariantStocksUpdate`](/api-reference/products/mutations/product-variant-stocks-update) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantStocksUpdateInput`](/api-reference/products/inputs/product-variant-stocks-update-input) <mark class="gqlmd-mdx-badge">input</mark>
