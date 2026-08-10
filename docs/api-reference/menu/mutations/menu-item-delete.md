---
api_reference: true
id: menu-item-delete
title: menuItemDelete
---

Deletes a menu item.

Requires one of the following permissions: MANAGE_MENUS.

Triggers the following webhook events:

- MENU_ITEM_DELETED (async): A menu item was deleted.

```graphql
menuItemDelete(
  id: ID!
): MenuItemDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuItemDelete</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a menu item to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuItemDelete</code></span>](/api-reference/menu/objects/menu-item-delete)

Deletes a menu item.

Requires one of the following permissions: MANAGE_MENUS.

Triggers the following webhook events:

- MENU_ITEM_DELETED (async): A menu item was deleted.
