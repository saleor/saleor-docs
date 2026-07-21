---
api_reference: true
id: variant-media-assign
title: variantMediaAssign
---

Assign an media to a product variant.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
variantMediaAssign(
  mediaId: ID!
  variantId: ID!
): VariantMediaAssign
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">variantMediaAssign</code>.<code class="gqlmd-mdx-entity-name">mediaId</code></span>](#media-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#media-id\}

ID of a product media to assign to a variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">variantMediaAssign</code>.<code class="gqlmd-mdx-entity-name">variantId</code></span>](#variant-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#variant-id\}

ID of a product variant.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">VariantMediaAssign</code></span>](/api-reference/products/objects/variant-media-assign)

Assign an media to a product variant.

Requires one of the following permissions: MANAGE_PRODUCTS.
