---
api_reference: true
id: product-variant-preorder-deactivate
title: productVariantPreorderDeactivate
---

Deactivates product variant preorder. It changes all preorder allocation into regular allocation.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
productVariantPreorderDeactivate(
  id: ID!
): ProductVariantPreorderDeactivate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantPreorderDeactivate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a variant which preorder should be deactivated.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantPreorderDeactivate</code></span>](/api-reference/products/objects/product-variant-preorder-deactivate)

Deactivates product variant preorder. It changes all preorder allocation into regular allocation.

Requires one of the following permissions: MANAGE_PRODUCTS.
