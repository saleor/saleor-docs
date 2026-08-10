---
api_reference: true
id: menu-item-update
title: menuItemUpdate
---

Updates a menu item.

Requires one of the following permissions: MANAGE_MENUS.

Triggers the following webhook events:

- MENU_ITEM_UPDATED (async): A menu item was updated.

```graphql
menuItemUpdate(
  id: ID!
  input: MenuItemInput!
): MenuItemUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuItemUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a menu item to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuItemUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuItemInput!</code></span>](/api-reference/miscellaneous/inputs/menu-item-input) \{#input\}

Fields required to update a menu item. Only one of `url`, `category`, `page`, `collection` is allowed per item.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuItemUpdate</code></span>](/api-reference/menu/objects/menu-item-update)

Updates a menu item.

Requires one of the following permissions: MANAGE_MENUS.

Triggers the following webhook events:

- MENU_ITEM_UPDATED (async): A menu item was updated.
