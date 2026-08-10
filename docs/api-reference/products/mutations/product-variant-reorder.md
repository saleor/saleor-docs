---
api_reference: true
id: product-variant-reorder
title: productVariantReorder
---

Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
productVariantReorder(
  moves: [ReorderInput!]!
  productId: ID!
): ProductVariantReorder
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantReorder</code>.<code class="gqlmd-mdx-entity-name">moves</code></span>](#moves)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ReorderInput!]!</code></span>](/api-reference/miscellaneous/inputs/reorder-input) \{#moves\}

The list of variant reordering operations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantReorder</code>.<code class="gqlmd-mdx-entity-name">productId</code></span>](#product-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#product-id\}

Id of product that variants order will be altered.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantReorder</code></span>](/api-reference/products/objects/product-variant-reorder)

Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook.

Requires one of the following permissions: MANAGE_PRODUCTS.
