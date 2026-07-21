---
api_reference: true
id: product-variant-bulk-delete
title: productVariantBulkDelete
---

Deletes product variants.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
productVariantBulkDelete(
  ids: [ID!]
  skus: [String!]
): ProductVariantBulkDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantBulkDelete</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of product variant IDs to delete.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantBulkDelete</code>.<code class="gqlmd-mdx-entity-name">skus</code></span>](#skus)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#skus\}

List of product variant SKUs to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantBulkDelete</code></span>](/api-reference/products/objects/product-variant-bulk-delete)

Deletes product variants.

Requires one of the following permissions: MANAGE_PRODUCTS.
