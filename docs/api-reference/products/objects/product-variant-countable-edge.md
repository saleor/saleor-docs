---
api_reference: true
id: product-variant-countable-edge
title: ProductVariantCountableEdge
---

No description

```graphql
type ProductVariantCountableEdge {
  node: ProductVariant!
  cursor: String!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantCountableEdge</code>.<code class="gqlmd-mdx-entity-name">node</code></span>](#node)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariant!</code></span>](/api-reference/products/objects/product-variant) \{#node\}

The item at the end of the edge.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantCountableEdge</code>.<code class="gqlmd-mdx-entity-name">cursor</code></span>](#cursor)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#cursor\}

A cursor for use in pagination.

### Member Of

[`ProductVariantCountableConnection`](/api-reference/products/objects/product-variant-countable-connection) <mark class="gqlmd-mdx-badge">object</mark>
