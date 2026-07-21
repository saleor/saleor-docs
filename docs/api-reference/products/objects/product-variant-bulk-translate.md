---
api_reference: true
id: product-variant-bulk-translate
title: ProductVariantBulkTranslate
---

Creates/updates translations for product variants.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

Triggers the following webhook events:

- TRANSLATION_CREATED (async): A translation was created.
- TRANSLATION_UPDATED (async): A translation was updated.

```graphql
type ProductVariantBulkTranslate {
  count: Int!
  results: [ProductVariantBulkTranslateResult!]!
  errors: [ProductVariantBulkTranslateError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBulkTranslate</code>.<code class="gqlmd-mdx-entity-name">count</code></span>](#count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#count\}

Returns how many translations were created/updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBulkTranslate</code>.<code class="gqlmd-mdx-entity-name">results</code></span>](#results)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductVariantBulkTranslateResult!]!</code></span>](/api-reference/products/objects/product-variant-bulk-translate-result) \{#results\}

List of the translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBulkTranslate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductVariantBulkTranslateError!]!</code></span>](/api-reference/miscellaneous/objects/product-variant-bulk-translate-error) \{#errors\}

### Returned By

[`productVariantBulkTranslate`](/api-reference/products/mutations/product-variant-bulk-translate) <mark class="gqlmd-mdx-badge">mutation</mark>
