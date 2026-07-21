---
api_reference: true
id: product-bulk-translate
title: ProductBulkTranslate
---

Creates/updates translations for products.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

Triggers the following webhook events:

- TRANSLATION_CREATED (async): Called when a translation was created.
- TRANSLATION_UPDATED (async): Called when a translation was updated.

```graphql
type ProductBulkTranslate {
  count: Int!
  results: [ProductBulkTranslateResult!]!
  errors: [ProductBulkTranslateError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductBulkTranslate</code>.<code class="gqlmd-mdx-entity-name">count</code></span>](#count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#count\}

Returns how many translations were created/updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductBulkTranslate</code>.<code class="gqlmd-mdx-entity-name">results</code></span>](#results)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductBulkTranslateResult!]!</code></span>](/api-reference/products/objects/product-bulk-translate-result) \{#results\}

List of the translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductBulkTranslate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductBulkTranslateError!]!</code></span>](/api-reference/miscellaneous/objects/product-bulk-translate-error) \{#errors\}

### Returned By

[`productBulkTranslate`](/api-reference/products/mutations/product-bulk-translate) <mark class="gqlmd-mdx-badge">mutation</mark>
