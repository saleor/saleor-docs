---
api_reference: true
id: collection-bulk-delete
title: collectionBulkDelete
---

Deletes collections.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
collectionBulkDelete(
  ids: [ID!]!
): CollectionBulkDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">collectionBulkDelete</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of collection IDs to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CollectionBulkDelete</code></span>](/api-reference/products/objects/collection-bulk-delete)

Deletes collections.

Requires one of the following permissions: MANAGE_PRODUCTS.
