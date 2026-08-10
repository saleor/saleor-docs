---
api_reference: true
id: category-bulk-delete
title: categoryBulkDelete
---

Deletes categories.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
categoryBulkDelete(
  ids: [ID!]!
): CategoryBulkDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">categoryBulkDelete</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of category IDs to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CategoryBulkDelete</code></span>](/api-reference/products/objects/category-bulk-delete)

Deletes categories.

Requires one of the following permissions: MANAGE_PRODUCTS.
