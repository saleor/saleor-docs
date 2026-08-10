---
api_reference: true
id: product-variant-bulk-update
title: ProductVariantBulkUpdate
---

Updates multiple product variants.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
type ProductVariantBulkUpdate {
  count: Int!
  results: [ProductVariantBulkResult!]!
  errors: [ProductVariantBulkError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBulkUpdate</code>.<code class="gqlmd-mdx-entity-name">count</code></span>](#count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#count\}

Returns how many objects were updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBulkUpdate</code>.<code class="gqlmd-mdx-entity-name">results</code></span>](#results)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductVariantBulkResult!]!</code></span>](/api-reference/products/objects/product-variant-bulk-result) \{#results\}

List of the updated variants.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBulkUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductVariantBulkError!]!</code></span>](/api-reference/products/objects/product-variant-bulk-error) \{#errors\}

### Returned By

[`productVariantBulkUpdate`](/api-reference/products/mutations/product-variant-bulk-update) <mark class="gqlmd-mdx-badge">mutation</mark>
