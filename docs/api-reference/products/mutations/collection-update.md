---
api_reference: true
id: collection-update
title: collectionUpdate
---

Updates a collection.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
collectionUpdate(
  id: ID!
  input: CollectionInput!
): CollectionUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">collectionUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a collection to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">collectionUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CollectionInput!</code></span>](/api-reference/products/inputs/collection-input) \{#input\}

Fields required to update a collection.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CollectionUpdate</code></span>](/api-reference/products/objects/collection-update)

Updates a collection.

Requires one of the following permissions: MANAGE_PRODUCTS.
