---
api_reference: true
id: page-type-create-input
title: PageTypeCreateInput
---

No description

```graphql
input PageTypeCreateInput {
  name: String
  slug: String
  addAttributes: [ID!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageTypeCreateInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the page type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageTypeCreateInput</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#slug\}

Page type slug.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageTypeCreateInput</code>.<code class="gqlmd-mdx-entity-name">addAttributes</code></span>](#add-attributes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#add-attributes\}

List of attribute IDs to be assigned to the page type.

### Member Of

[`pageTypeCreate`](/api-reference/pages/mutations/page-type-create) <mark class="gqlmd-mdx-badge">mutation</mark>
