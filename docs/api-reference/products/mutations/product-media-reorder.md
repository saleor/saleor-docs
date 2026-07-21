---
api_reference: true
id: product-media-reorder
title: productMediaReorder
---

Changes ordering of the product media.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
productMediaReorder(
  mediaIds: [ID!]!
  productId: ID!
): ProductMediaReorder
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productMediaReorder</code>.<code class="gqlmd-mdx-entity-name">mediaIds</code></span>](#media-ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#media-ids\}

IDs of a product media in the desired order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productMediaReorder</code>.<code class="gqlmd-mdx-entity-name">productId</code></span>](#product-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#product-id\}

ID of product that media order will be altered.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductMediaReorder</code></span>](/api-reference/products/objects/product-media-reorder)

Changes ordering of the product media.

Requires one of the following permissions: MANAGE_PRODUCTS.
