---
api_reference: true
id: product-bulk-create
title: ProductBulkCreate
---

Creates products.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
type ProductBulkCreate {
  count: Int!
  results: [ProductBulkResult!]!
  errors: [ProductBulkCreateError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductBulkCreate</code>.<code class="gqlmd-mdx-entity-name">count</code></span>](#count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#count\}

Returns how many objects were created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductBulkCreate</code>.<code class="gqlmd-mdx-entity-name">results</code></span>](#results)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductBulkResult!]!</code></span>](/api-reference/products/objects/product-bulk-result) \{#results\}

List of the created products.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductBulkCreate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductBulkCreateError!]!</code></span>](/api-reference/products/objects/product-bulk-create-error) \{#errors\}

### Returned By

[`productBulkCreate`](/api-reference/products/mutations/product-bulk-create) <mark class="gqlmd-mdx-badge">mutation</mark>
