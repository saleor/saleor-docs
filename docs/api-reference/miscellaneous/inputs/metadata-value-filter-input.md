---
api_reference: true
id: metadata-value-filter-input
title: MetadataValueFilterInput
---

Define the filtering options for metadata value fields.

```graphql
input MetadataValueFilterInput {
  eq: String
  oneOf: [String!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MetadataValueFilterInput</code>.<code class="gqlmd-mdx-entity-name">eq</code></span>](#eq)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#eq\}

The value equal to.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MetadataValueFilterInput</code>.<code class="gqlmd-mdx-entity-name">oneOf</code></span>](#one-of)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#one-of\}

The value included in.

### Member Of

[`MetadataFilterInput`](/api-reference/miscellaneous/inputs/metadata-filter-input) <mark class="gqlmd-mdx-badge">input</mark>
