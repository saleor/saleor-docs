---
api_reference: true
id: page-type-sorting-input
title: PageTypeSortingInput
---

No description

```graphql
input PageTypeSortingInput {
  direction: OrderDirection!
  field: PageTypeSortField!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageTypeSortingInput</code>.<code class="gqlmd-mdx-entity-name">direction</code></span>](#direction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDirection!</code></span>](/api-reference/miscellaneous/enums/order-direction) \{#direction\}

Specifies the direction in which to sort page types.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageTypeSortingInput</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageTypeSortField!</code></span>](/api-reference/pages/enums/page-type-sort-field) \{#field\}

Sort page types by the selected field.

### Member Of

[`pageTypes`](/api-reference/pages/queries/page-types) <mark class="gqlmd-mdx-badge">query</mark>
