---
api_reference: true
id: product-countable-edge
title: ProductCountableEdge
---

No description

```graphql
type ProductCountableEdge {
  node: Product!
  cursor: String!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductCountableEdge</code>.<code class="gqlmd-mdx-entity-name">node</code></span>](#node)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Product!</code></span>](/api-reference/products/objects/product) \{#node\}

The item at the end of the edge.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductCountableEdge</code>.<code class="gqlmd-mdx-entity-name">cursor</code></span>](#cursor)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#cursor\}

A cursor for use in pagination.

### Member Of

[`ProductCountableConnection`](/api-reference/products/objects/product-countable-connection) <mark class="gqlmd-mdx-badge">object</mark>
