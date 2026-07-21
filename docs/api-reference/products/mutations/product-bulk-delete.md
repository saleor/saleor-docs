---
api_reference: true
id: product-bulk-delete
title: productBulkDelete
---

Deletes products.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
productBulkDelete(
  ids: [ID!]!
): ProductBulkDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productBulkDelete</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of product IDs to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductBulkDelete</code></span>](/api-reference/products/objects/product-bulk-delete)

Deletes products.

Requires one of the following permissions: MANAGE_PRODUCTS.
