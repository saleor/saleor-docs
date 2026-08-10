---
api_reference: true
id: page-where-input
title: PageWhereInput
---

No description

```graphql
input PageWhereInput {
  metadata: MetadataFilterInput
  ids: [ID!]
  slug: StringFilterInput
  pageType: GlobalIDFilterInput
  attributes: [AssignedAttributeWhereInput!]
  AND: [PageWhereInput!]
  OR: [PageWhereInput!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageWhereInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MetadataFilterInput</code></span>](/api-reference/miscellaneous/inputs/metadata-filter-input) \{#metadata\}

Filter by metadata fields.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageWhereInput</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageWhereInput</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StringFilterInput</code></span>](/api-reference/miscellaneous/inputs/string-filter-input) \{#slug\}

Filter by page slug.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageWhereInput</code>.<code class="gqlmd-mdx-entity-name">pageType</code></span>](#page-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GlobalIDFilterInput</code></span>](/api-reference/miscellaneous/inputs/global-idfilter-input) \{#page-type\}

Filter by page type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageWhereInput</code>.<code class="gqlmd-mdx-entity-name">attributes</code></span>](#attributes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AssignedAttributeWhereInput!]</code></span>](/api-reference/miscellaneous/inputs/assigned-attribute-where-input) \{#attributes\}

Filter by attributes associated with the page.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageWhereInput</code>.<code class="gqlmd-mdx-entity-name">AND</code></span>](#and)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PageWhereInput!]</code></span>](/api-reference/pages/inputs/page-where-input) \{#and\}

List of conditions that must be met.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageWhereInput</code>.<code class="gqlmd-mdx-entity-name">OR</code></span>](#or)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PageWhereInput!]</code></span>](/api-reference/pages/inputs/page-where-input) \{#or\}

A list of conditions of which at least one must be met.

### Member Of

[`pages`](/api-reference/pages/queries/pages) <mark class="gqlmd-mdx-badge">query</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PageWhereInput`](/api-reference/pages/inputs/page-where-input) <mark class="gqlmd-mdx-badge">input</mark>
