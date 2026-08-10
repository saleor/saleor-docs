---
api_reference: true
id: menu-item-sorting-input
title: MenuItemSortingInput
---

No description

```graphql
input MenuItemSortingInput {
  direction: OrderDirection!
  field: MenuItemsSortField!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemSortingInput</code>.<code class="gqlmd-mdx-entity-name">direction</code></span>](#direction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDirection!</code></span>](/api-reference/miscellaneous/enums/order-direction) \{#direction\}

Specifies the direction in which to sort menu items.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemSortingInput</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuItemsSortField!</code></span>](/api-reference/miscellaneous/enums/menu-items-sort-field) \{#field\}

Sort menu items by the selected field.

### Member Of

[`menuItems`](/api-reference/menu/queries/menu-items) <mark class="gqlmd-mdx-badge">query</mark>
