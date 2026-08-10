---
api_reference: true
id: product-type
title: productType
---

Look up a product type by ID.

```graphql
productType(
  id: ID!
): ProductType
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productType</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the product type.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductType</code></span>](/api-reference/products/objects/product-type)

Represents a type of product. It defines what attributes are available to products of this type.
