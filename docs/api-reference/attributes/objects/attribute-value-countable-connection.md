---
api_reference: true
id: attribute-value-countable-connection
title: AttributeValueCountableConnection
---

No description

```graphql
type AttributeValueCountableConnection {
  pageInfo: PageInfo!
  edges: [AttributeValueCountableEdge!]!
  totalCount: Int
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueCountableConnection</code>.<code class="gqlmd-mdx-entity-name">pageInfo</code></span>](#page-info)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageInfo!</code></span>](/api-reference/miscellaneous/objects/page-info) \{#page-info\}

Pagination data for this connection.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueCountableConnection</code>.<code class="gqlmd-mdx-entity-name">edges</code></span>](#edges)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeValueCountableEdge!]!</code></span>](/api-reference/attributes/objects/attribute-value-countable-edge) \{#edges\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueCountableConnection</code>.<code class="gqlmd-mdx-entity-name">totalCount</code></span>](#total-count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#total-count\}

A total count of items in the collection.

### Member Of

[`Attribute`](/api-reference/attributes/objects/attribute) <mark class="gqlmd-mdx-badge">object</mark>
