---
api_reference: true
id: product-type-reorder-attributes
title: productTypeReorderAttributes
---

Reorder the attributes of a product type.

Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.

```graphql
productTypeReorderAttributes(
  moves: [ReorderInput!]!
  productTypeId: ID!
  type: ProductAttributeType!
): ProductTypeReorderAttributes
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productTypeReorderAttributes</code>.<code class="gqlmd-mdx-entity-name">moves</code></span>](#moves)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ReorderInput!]!</code></span>](/api-reference/miscellaneous/inputs/reorder-input) \{#moves\}

The list of attribute reordering operations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productTypeReorderAttributes</code>.<code class="gqlmd-mdx-entity-name">productTypeId</code></span>](#product-type-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#product-type-id\}

ID of a product type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productTypeReorderAttributes</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductAttributeType!</code></span>](/api-reference/products/enums/product-attribute-type) \{#type\}

The attribute type to reorder.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductTypeReorderAttributes</code></span>](/api-reference/products/objects/product-type-reorder-attributes)

Reorder the attributes of a product type.

Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
