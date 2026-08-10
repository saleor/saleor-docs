---
api_reference: true
id: app-extension-countable-connection
title: AppExtensionCountableConnection
---

No description

```graphql
type AppExtensionCountableConnection {
  pageInfo: PageInfo!
  edges: [AppExtensionCountableEdge!]!
  totalCount: Int
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppExtensionCountableConnection</code>.<code class="gqlmd-mdx-entity-name">pageInfo</code></span>](#page-info)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageInfo!</code></span>](/api-reference/miscellaneous/objects/page-info) \{#page-info\}

Pagination data for this connection.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppExtensionCountableConnection</code>.<code class="gqlmd-mdx-entity-name">edges</code></span>](#edges)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AppExtensionCountableEdge!]!</code></span>](/api-reference/apps/objects/app-extension-countable-edge) \{#edges\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppExtensionCountableConnection</code>.<code class="gqlmd-mdx-entity-name">totalCount</code></span>](#total-count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#total-count\}

A total count of items in the collection.

### Returned By

[`appExtensions`](/api-reference/apps/queries/app-extensions) <mark class="gqlmd-mdx-badge">query</mark>
