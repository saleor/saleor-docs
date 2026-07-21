---
api_reference: true
id: collection-add-products
title: collectionAddProducts
---

Adds products to a collection.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
collectionAddProducts(
  collectionId: ID!
  products: [ID!]!
): CollectionAddProducts
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">collectionAddProducts</code>.<code class="gqlmd-mdx-entity-name">collectionId</code></span>](#collection-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#collection-id\}

ID of a collection.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">collectionAddProducts</code>.<code class="gqlmd-mdx-entity-name">products</code></span>](#products)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#products\}

List of product IDs.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CollectionAddProducts</code></span>](/api-reference/products/objects/collection-add-products)

Adds products to a collection.

Requires one of the following permissions: MANAGE_PRODUCTS.
