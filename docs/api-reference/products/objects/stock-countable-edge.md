---
api_reference: true
id: stock-countable-edge
title: StockCountableEdge
---

No description

```graphql
type StockCountableEdge {
  node: Stock!
  cursor: String!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StockCountableEdge</code>.<code class="gqlmd-mdx-entity-name">node</code></span>](#node)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Stock!</code></span>](/api-reference/products/objects/stock) \{#node\}

The item at the end of the edge.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StockCountableEdge</code>.<code class="gqlmd-mdx-entity-name">cursor</code></span>](#cursor)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#cursor\}

A cursor for use in pagination.

### Member Of

[`StockCountableConnection`](/api-reference/products/objects/stock-countable-connection) <mark class="gqlmd-mdx-badge">object</mark>
