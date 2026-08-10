---
api_reference: true
id: product-type-update
title: productTypeUpdate
---

Updates an existing product type.

Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.

```graphql
productTypeUpdate(
  id: ID!
  input: ProductTypeInput!
): ProductTypeUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productTypeUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a product type to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productTypeUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductTypeInput!</code></span>](/api-reference/products/inputs/product-type-input) \{#input\}

Fields required to update a product type.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductTypeUpdate</code></span>](/api-reference/products/objects/product-type-update)

Updates an existing product type.

Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
