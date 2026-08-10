---
api_reference: true
id: product-delete
title: productDelete
---

Deletes a product.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
productDelete(
  externalReference: String
  id: ID
): ProductDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productDelete</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of a product to delete.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productDelete</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a product to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductDelete</code></span>](/api-reference/products/objects/product-delete)

Deletes a product.

Requires one of the following permissions: MANAGE_PRODUCTS.
