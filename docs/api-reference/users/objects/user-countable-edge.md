---
api_reference: true
id: user-countable-edge
title: UserCountableEdge
---

No description

```graphql
type UserCountableEdge {
  node: User!
  cursor: String!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">UserCountableEdge</code>.<code class="gqlmd-mdx-entity-name">node</code></span>](#node)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User!</code></span>](/api-reference/users/objects/user) \{#node\}

The item at the end of the edge.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">UserCountableEdge</code>.<code class="gqlmd-mdx-entity-name">cursor</code></span>](#cursor)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#cursor\}

A cursor for use in pagination.

### Member Of

[`UserCountableConnection`](/api-reference/users/objects/user-countable-connection) <mark class="gqlmd-mdx-badge">object</mark>
