---
api_reference: true
id: collection-reorder-products
title: collectionReorderProducts
---

Reorder the products of a collection.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
collectionReorderProducts(
  collectionId: ID!
  moves: [MoveProductInput!]!
): CollectionReorderProducts
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">collectionReorderProducts</code>.<code class="gqlmd-mdx-entity-name">collectionId</code></span>](#collection-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#collection-id\}

ID of a collection.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">collectionReorderProducts</code>.<code class="gqlmd-mdx-entity-name">moves</code></span>](#moves)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MoveProductInput!]!</code></span>](/api-reference/products/inputs/move-product-input) \{#moves\}

The collection products position operations.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CollectionReorderProducts</code></span>](/api-reference/products/objects/collection-reorder-products)

Reorder the products of a collection.

Requires one of the following permissions: MANAGE_PRODUCTS.
