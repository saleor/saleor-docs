---
api_reference: true
id: product-variant-bulk-translate-result
title: ProductVariantBulkTranslateResult
---

No description

```graphql
type ProductVariantBulkTranslateResult {
  translation: ProductVariantTranslation
  errors: [ProductVariantBulkTranslateError!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBulkTranslateResult</code>.<code class="gqlmd-mdx-entity-name">translation</code></span>](#translation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantTranslation</code></span>](/api-reference/products/objects/product-variant-translation) \{#translation\}

Product variant translation data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBulkTranslateResult</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductVariantBulkTranslateError!]</code></span>](/api-reference/miscellaneous/objects/product-variant-bulk-translate-error) \{#errors\}

List of errors occurred on translation attempt.

### Member Of

[`ProductVariantBulkTranslate`](/api-reference/products/objects/product-variant-bulk-translate) <mark class="gqlmd-mdx-badge">object</mark>
