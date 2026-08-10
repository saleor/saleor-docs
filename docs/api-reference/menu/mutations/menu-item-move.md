---
api_reference: true
id: menu-item-move
title: menuItemMove
---

Moves items of menus.

Requires one of the following permissions: MANAGE_MENUS.

Triggers the following webhook events:

- MENU_ITEM_UPDATED (async): Optionally triggered when sort order or parent changed for menu item.

```graphql
menuItemMove(
  menu: ID!
  moves: [MenuItemMoveInput!]!
): MenuItemMove
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuItemMove</code>.<code class="gqlmd-mdx-entity-name">menu</code></span>](#menu)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#menu\}

ID of the menu.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuItemMove</code>.<code class="gqlmd-mdx-entity-name">moves</code></span>](#moves)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MenuItemMoveInput!]!</code></span>](/api-reference/miscellaneous/inputs/menu-item-move-input) \{#moves\}

The menu position data.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuItemMove</code></span>](/api-reference/menu/objects/menu-item-move)

Moves items of menus.

Requires one of the following permissions: MANAGE_MENUS.

Triggers the following webhook events:

- MENU_ITEM_UPDATED (async): Optionally triggered when sort order or parent changed for menu item.
