---
api_reference: true
id: product-bulk-result
title: ProductBulkResult
---

No description

```graphql
type ProductBulkResult {
  product: Product
  errors: [ProductBulkCreateError!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductBulkResult</code>.<code class="gqlmd-mdx-entity-name">product</code></span>](#product)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Product</code></span>](/api-reference/products/objects/product) \{#product\}

Product data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductBulkResult</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductBulkCreateError!]</code></span>](/api-reference/products/objects/product-bulk-create-error) \{#errors\}

List of errors occurred on create attempt.

### Member Of

[`ProductBulkCreate`](/api-reference/products/objects/product-bulk-create) <mark class="gqlmd-mdx-badge">object</mark>
