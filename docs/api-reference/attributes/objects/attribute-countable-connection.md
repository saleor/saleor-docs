---
api_reference: true
id: attribute-countable-connection
title: AttributeCountableConnection
---

No description

```graphql
type AttributeCountableConnection {
  pageInfo: PageInfo!
  edges: [AttributeCountableEdge!]!
  totalCount: Int
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeCountableConnection</code>.<code class="gqlmd-mdx-entity-name">pageInfo</code></span>](#page-info)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageInfo!</code></span>](/api-reference/miscellaneous/objects/page-info) \{#page-info\}

Pagination data for this connection.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeCountableConnection</code>.<code class="gqlmd-mdx-entity-name">edges</code></span>](#edges)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeCountableEdge!]!</code></span>](/api-reference/attributes/objects/attribute-countable-edge) \{#edges\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeCountableConnection</code>.<code class="gqlmd-mdx-entity-name">totalCount</code></span>](#total-count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#total-count\}

A total count of items in the collection.

### Returned By

[`attributes`](/api-reference/attributes/queries/attributes) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`PageType`](/api-reference/pages/objects/page-type) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductType`](/api-reference/products/objects/product-type) <mark class="gqlmd-mdx-badge">object</mark>
