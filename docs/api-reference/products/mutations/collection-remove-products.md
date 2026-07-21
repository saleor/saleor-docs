---
api_reference: true
id: collection-remove-products
title: collectionRemoveProducts
---

Remove products from a collection.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
collectionRemoveProducts(
  collectionId: ID!
  products: [ID!]!
): CollectionRemoveProducts
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">collectionRemoveProducts</code>.<code class="gqlmd-mdx-entity-name">collectionId</code></span>](#collection-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#collection-id\}

ID of a collection.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">collectionRemoveProducts</code>.<code class="gqlmd-mdx-entity-name">products</code></span>](#products)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#products\}

List of product IDs.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CollectionRemoveProducts</code></span>](/api-reference/products/objects/collection-remove-products)

Remove products from a collection.

Requires one of the following permissions: MANAGE_PRODUCTS.
