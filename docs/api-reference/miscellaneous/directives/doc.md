---
api_reference: true
id: doc
title: doc
---

Groups fields and operations into named groups.

```graphql
directive @doc(
  category: String!
) on ENUM | FIELD | FIELD_DEFINITION | INPUT_OBJECT | OBJECT | INTERFACE
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">doc</code>.<code class="gqlmd-mdx-entity-name">category</code></span>](#category)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#category\}

Name of the grouping category
