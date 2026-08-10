---
api_reference: true
id: page-update
title: pageUpdate
---

Updates an existing page.

Requires one of the following permissions: MANAGE_PAGES.

```graphql
pageUpdate(
  id: ID!
  input: PageInput!
): PageUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pageUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a page to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pageUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageInput!</code></span>](/api-reference/pages/inputs/page-input) \{#input\}

Fields required to update a page.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageUpdate</code></span>](/api-reference/pages/objects/page-update)

Updates an existing page.

Requires one of the following permissions: MANAGE_PAGES.
