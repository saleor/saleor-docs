---
api_reference: true
id: product-attribute-assignment-update
title: productAttributeAssignmentUpdate
---

Update attributes assigned to product variant for given product type.

Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.

```graphql
productAttributeAssignmentUpdate(
  operations: [ProductAttributeAssignmentUpdateInput!]!
  productTypeId: ID!
): ProductAttributeAssignmentUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productAttributeAssignmentUpdate</code>.<code class="gqlmd-mdx-entity-name">operations</code></span>](#operations)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductAttributeAssignmentUpdateInput!]!</code></span>](/api-reference/products/inputs/product-attribute-assignment-update-input) \{#operations\}

The operations to perform.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productAttributeAssignmentUpdate</code>.<code class="gqlmd-mdx-entity-name">productTypeId</code></span>](#product-type-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#product-type-id\}

ID of the product type to assign the attributes into.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductAttributeAssignmentUpdate</code></span>](/api-reference/products/objects/product-attribute-assignment-update)

Update attributes assigned to product variant for given product type.

Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
