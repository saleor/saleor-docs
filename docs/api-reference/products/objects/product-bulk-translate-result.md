---
api_reference: true
id: product-bulk-translate-result
title: ProductBulkTranslateResult
---

No description

```graphql
type ProductBulkTranslateResult {
  translation: ProductTranslation
  errors: [ProductBulkTranslateError!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductBulkTranslateResult</code>.<code class="gqlmd-mdx-entity-name">translation</code></span>](#translation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductTranslation</code></span>](/api-reference/products/objects/product-translation) \{#translation\}

Product translation data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductBulkTranslateResult</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductBulkTranslateError!]</code></span>](/api-reference/miscellaneous/objects/product-bulk-translate-error) \{#errors\}

List of errors occurred on translation attempt.

### Member Of

[`ProductBulkTranslate`](/api-reference/products/objects/product-bulk-translate) <mark class="gqlmd-mdx-badge">object</mark>
