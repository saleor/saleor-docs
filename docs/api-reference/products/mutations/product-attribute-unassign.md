---
api_reference: true
id: product-attribute-unassign
title: productAttributeUnassign
---

Un-assign attributes from a given product type.

Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.

```graphql
productAttributeUnassign(
  attributeIds: [ID!]!
  productTypeId: ID!
): ProductAttributeUnassign
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productAttributeUnassign</code>.<code class="gqlmd-mdx-entity-name">attributeIds</code></span>](#attribute-ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#attribute-ids\}

The IDs of the attributes to unassign.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productAttributeUnassign</code>.<code class="gqlmd-mdx-entity-name">productTypeId</code></span>](#product-type-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#product-type-id\}

ID of the product type from which the attributes should be unassigned.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductAttributeUnassign</code></span>](/api-reference/products/objects/product-attribute-unassign)

Un-assign attributes from a given product type.

Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
