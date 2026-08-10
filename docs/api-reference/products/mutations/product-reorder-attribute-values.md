---
api_reference: true
id: product-reorder-attribute-values
title: productReorderAttributeValues
---

Reorder product attribute values.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
productReorderAttributeValues(
  attributeId: ID!
  moves: [ReorderInput!]!
  productId: ID!
): ProductReorderAttributeValues
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productReorderAttributeValues</code>.<code class="gqlmd-mdx-entity-name">attributeId</code></span>](#attribute-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#attribute-id\}

ID of an attribute.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productReorderAttributeValues</code>.<code class="gqlmd-mdx-entity-name">moves</code></span>](#moves)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ReorderInput!]!</code></span>](/api-reference/miscellaneous/inputs/reorder-input) \{#moves\}

The list of reordering operations for given attribute values.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productReorderAttributeValues</code>.<code class="gqlmd-mdx-entity-name">productId</code></span>](#product-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#product-id\}

ID of a product.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductReorderAttributeValues</code></span>](/api-reference/products/objects/product-reorder-attribute-values)

Reorder product attribute values.

Requires one of the following permissions: MANAGE_PRODUCTS.
