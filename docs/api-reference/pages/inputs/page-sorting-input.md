---
api_reference: true
id: page-sorting-input
title: PageSortingInput
---

No description

```graphql
input PageSortingInput {
  direction: OrderDirection!
  field: PageSortField!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageSortingInput</code>.<code class="gqlmd-mdx-entity-name">direction</code></span>](#direction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDirection!</code></span>](/api-reference/miscellaneous/enums/order-direction) \{#direction\}

Specifies the direction in which to sort pages.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageSortingInput</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageSortField!</code></span>](/api-reference/pages/enums/page-sort-field) \{#field\}

Sort pages by the selected field.

### Member Of

[`pages`](/api-reference/pages/queries/pages) <mark class="gqlmd-mdx-badge">query</mark>
