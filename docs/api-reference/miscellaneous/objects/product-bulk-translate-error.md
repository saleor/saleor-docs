---
api_reference: true
id: product-bulk-translate-error
title: ProductBulkTranslateError
---

No description

```graphql
type ProductBulkTranslateError {
  path: String
  message: String
  code: ProductTranslateErrorCode!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductBulkTranslateError</code>.<code class="gqlmd-mdx-entity-name">path</code></span>](#path)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#path\}

Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductBulkTranslateError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductBulkTranslateError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductTranslateErrorCode!</code></span>](/api-reference/products/enums/product-translate-error-code) \{#code\}

The error code.

### Member Of

[`ProductBulkTranslate`](/api-reference/products/objects/product-bulk-translate) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductBulkTranslateResult`](/api-reference/products/objects/product-bulk-translate-result) <mark class="gqlmd-mdx-badge">object</mark>
