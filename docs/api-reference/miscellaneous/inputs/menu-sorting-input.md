---
api_reference: true
id: menu-sorting-input
title: MenuSortingInput
---

No description

```graphql
input MenuSortingInput {
  direction: OrderDirection!
  field: MenuSortField!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuSortingInput</code>.<code class="gqlmd-mdx-entity-name">direction</code></span>](#direction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDirection!</code></span>](/api-reference/miscellaneous/enums/order-direction) \{#direction\}

Specifies the direction in which to sort menus.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuSortingInput</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuSortField!</code></span>](/api-reference/miscellaneous/enums/menu-sort-field) \{#field\}

Sort menus by the selected field.

### Member Of

[`menus`](/api-reference/menu/queries/menus) <mark class="gqlmd-mdx-badge">query</mark>
