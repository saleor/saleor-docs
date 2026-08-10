---
api_reference: true
id: product-variant-bulk-result
title: ProductVariantBulkResult
---

No description

```graphql
type ProductVariantBulkResult {
  productVariant: ProductVariant
  errors: [ProductVariantBulkError!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBulkResult</code>.<code class="gqlmd-mdx-entity-name">productVariant</code></span>](#product-variant)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariant</code></span>](/api-reference/products/objects/product-variant) \{#product-variant\}

Product variant data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBulkResult</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductVariantBulkError!]</code></span>](/api-reference/products/objects/product-variant-bulk-error) \{#errors\}

List of errors occurred on create attempt.

### Member Of

[`ProductVariantBulkCreate`](/api-reference/products/objects/product-variant-bulk-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantBulkUpdate`](/api-reference/products/objects/product-variant-bulk-update) <mark class="gqlmd-mdx-badge">object</mark>
