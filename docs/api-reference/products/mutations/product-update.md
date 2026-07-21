---
api_reference: true
id: product-update
title: productUpdate
---

Updates an existing product.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
productUpdate(
  externalReference: String
  id: ID
  input: ProductInput!
): ProductUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productUpdate</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of a product to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a product to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductInput!</code></span>](/api-reference/products/inputs/product-input) \{#input\}

Fields required to update a product.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductUpdate</code></span>](/api-reference/products/objects/product-update)

Updates an existing product.

Requires one of the following permissions: MANAGE_PRODUCTS.
