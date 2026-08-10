---
api_reference: true
id: app-sorting-input
title: AppSortingInput
---

No description

```graphql
input AppSortingInput {
  direction: OrderDirection!
  field: AppSortField!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppSortingInput</code>.<code class="gqlmd-mdx-entity-name">direction</code></span>](#direction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDirection!</code></span>](/api-reference/miscellaneous/enums/order-direction) \{#direction\}

Specifies the direction in which to sort apps.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppSortingInput</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppSortField!</code></span>](/api-reference/apps/enums/app-sort-field) \{#field\}

Sort apps by the selected field.

### Member Of

[`apps`](/api-reference/apps/queries/apps) <mark class="gqlmd-mdx-badge">query</mark>
