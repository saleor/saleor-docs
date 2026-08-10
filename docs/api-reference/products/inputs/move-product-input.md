---
api_reference: true
id: move-product-input
title: MoveProductInput
---

No description

```graphql
input MoveProductInput {
  productId: ID!
  sortOrder: Int
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MoveProductInput</code>.<code class="gqlmd-mdx-entity-name">productId</code></span>](#product-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#product-id\}

The ID of the product to move.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MoveProductInput</code>.<code class="gqlmd-mdx-entity-name">sortOrder</code></span>](#sort-order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#sort-order\}

The relative sorting position of the product (from -inf to +inf) starting from the first given product's actual position.1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged.

### Member Of

[`collectionReorderProducts`](/api-reference/products/mutations/collection-reorder-products) <mark class="gqlmd-mdx-badge">mutation</mark>
