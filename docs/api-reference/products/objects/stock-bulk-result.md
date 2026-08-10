---
api_reference: true
id: stock-bulk-result
title: StockBulkResult
---

No description

```graphql
type StockBulkResult {
  stock: Stock
  errors: [StockBulkUpdateError!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StockBulkResult</code>.<code class="gqlmd-mdx-entity-name">stock</code></span>](#stock)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Stock</code></span>](/api-reference/products/objects/stock) \{#stock\}

Stock data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StockBulkResult</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[StockBulkUpdateError!]</code></span>](/api-reference/products/objects/stock-bulk-update-error) \{#errors\}

List of errors occurred on create or update attempt.

### Member Of

[`StockBulkUpdate`](/api-reference/products/objects/stock-bulk-update) <mark class="gqlmd-mdx-badge">object</mark>
