---
api_reference: true
id: product-variant-set-default
title: productVariantSetDefault
---

Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
productVariantSetDefault(
  productId: ID!
  variantId: ID!
): ProductVariantSetDefault
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantSetDefault</code>.<code class="gqlmd-mdx-entity-name">productId</code></span>](#product-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#product-id\}

Id of a product that will have the default variant set.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantSetDefault</code>.<code class="gqlmd-mdx-entity-name">variantId</code></span>](#variant-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#variant-id\}

Id of a variant that will be set as default.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantSetDefault</code></span>](/api-reference/products/objects/product-variant-set-default)

Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook.

Requires one of the following permissions: MANAGE_PRODUCTS.
