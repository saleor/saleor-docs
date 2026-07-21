---
api_reference: true
id: menu-item-move-input
title: MenuItemMoveInput
---

No description

```graphql
input MenuItemMoveInput {
  itemId: ID!
  parentId: ID
  sortOrder: Int
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemMoveInput</code>.<code class="gqlmd-mdx-entity-name">itemId</code></span>](#item-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#item-id\}

The menu item ID to move.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemMoveInput</code>.<code class="gqlmd-mdx-entity-name">parentId</code></span>](#parent-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#parent-id\}

ID of the parent menu. If empty, menu will be top level menu.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemMoveInput</code>.<code class="gqlmd-mdx-entity-name">sortOrder</code></span>](#sort-order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#sort-order\}

The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged.

### Member Of

[`menuItemMove`](/api-reference/menu/mutations/menu-item-move) <mark class="gqlmd-mdx-badge">mutation</mark>
