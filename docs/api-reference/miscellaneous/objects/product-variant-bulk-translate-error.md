---
api_reference: true
id: product-variant-bulk-translate-error
title: ProductVariantBulkTranslateError
---

No description

```graphql
type ProductVariantBulkTranslateError {
  path: String
  message: String
  code: ProductVariantTranslateErrorCode!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBulkTranslateError</code>.<code class="gqlmd-mdx-entity-name">path</code></span>](#path)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#path\}

Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBulkTranslateError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBulkTranslateError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantTranslateErrorCode!</code></span>](/api-reference/products/enums/product-variant-translate-error-code) \{#code\}

The error code.

### Member Of

[`ProductVariantBulkTranslate`](/api-reference/products/objects/product-variant-bulk-translate) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantBulkTranslateResult`](/api-reference/products/objects/product-variant-bulk-translate-result) <mark class="gqlmd-mdx-badge">object</mark>
