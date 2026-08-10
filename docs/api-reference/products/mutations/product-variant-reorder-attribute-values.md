---
api_reference: true
id: product-variant-reorder-attribute-values
title: productVariantReorderAttributeValues
---

Reorder product variant attribute values.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
productVariantReorderAttributeValues(
  attributeId: ID!
  moves: [ReorderInput!]!
  variantId: ID!
): ProductVariantReorderAttributeValues
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantReorderAttributeValues</code>.<code class="gqlmd-mdx-entity-name">attributeId</code></span>](#attribute-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#attribute-id\}

ID of an attribute.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantReorderAttributeValues</code>.<code class="gqlmd-mdx-entity-name">moves</code></span>](#moves)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ReorderInput!]!</code></span>](/api-reference/miscellaneous/inputs/reorder-input) \{#moves\}

The list of reordering operations for given attribute values.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantReorderAttributeValues</code>.<code class="gqlmd-mdx-entity-name">variantId</code></span>](#variant-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#variant-id\}

ID of a product variant.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantReorderAttributeValues</code></span>](/api-reference/products/objects/product-variant-reorder-attribute-values)

Reorder product variant attribute values.

Requires one of the following permissions: MANAGE_PRODUCTS.
