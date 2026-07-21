---
api_reference: true
id: variant-media-unassign
title: variantMediaUnassign
---

Unassign an media from a product variant.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
variantMediaUnassign(
  mediaId: ID!
  variantId: ID!
): VariantMediaUnassign
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">variantMediaUnassign</code>.<code class="gqlmd-mdx-entity-name">mediaId</code></span>](#media-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#media-id\}

ID of a product media to unassign from a variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">variantMediaUnassign</code>.<code class="gqlmd-mdx-entity-name">variantId</code></span>](#variant-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#variant-id\}

ID of a product variant.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">VariantMediaUnassign</code></span>](/api-reference/products/objects/variant-media-unassign)

Unassign an media from a product variant.

Requires one of the following permissions: MANAGE_PRODUCTS.
