---
api_reference: true
id: contains-filter-input
title: ContainsFilterInput
---

Define the filtering options for fields that can contain multiple values.

```graphql
input ContainsFilterInput {
  containsAny: [String!]
  containsAll: [String!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ContainsFilterInput</code>.<code class="gqlmd-mdx-entity-name">containsAny</code></span>](#contains-any)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#contains-any\}

The field contains at least one of the specified values.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ContainsFilterInput</code>.<code class="gqlmd-mdx-entity-name">containsAll</code></span>](#contains-all)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#contains-all\}

The field contains all of the specified values.

### Member Of

[`AssignedAttributeReferenceInput`](/api-reference/miscellaneous/inputs/assigned-attribute-reference-input) <mark class="gqlmd-mdx-badge">input</mark>
