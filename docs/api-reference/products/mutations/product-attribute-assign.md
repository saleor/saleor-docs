---
api_reference: true
id: product-attribute-assign
title: productAttributeAssign
---

Assign attributes to a given product type.

Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.

```graphql
productAttributeAssign(
  operations: [ProductAttributeAssignInput!]!
  productTypeId: ID!
): ProductAttributeAssign
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productAttributeAssign</code>.<code class="gqlmd-mdx-entity-name">operations</code></span>](#operations)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductAttributeAssignInput!]!</code></span>](/api-reference/products/inputs/product-attribute-assign-input) \{#operations\}

The operations to perform.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productAttributeAssign</code>.<code class="gqlmd-mdx-entity-name">productTypeId</code></span>](#product-type-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#product-type-id\}

ID of the product type to assign the attributes into.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductAttributeAssign</code></span>](/api-reference/products/objects/product-attribute-assign)

Assign attributes to a given product type.

Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
