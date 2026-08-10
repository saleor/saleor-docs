---
api_reference: true
id: menu-item-bulk-delete
title: menuItemBulkDelete
---

Deletes menu items.

Requires one of the following permissions: MANAGE_MENUS.

Triggers the following webhook events:

- MENU_ITEM_DELETED (async): A menu item was deleted.

```graphql
menuItemBulkDelete(
  ids: [ID!]!
): MenuItemBulkDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuItemBulkDelete</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of menu item IDs to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuItemBulkDelete</code></span>](/api-reference/menu/objects/menu-item-bulk-delete)

Deletes menu items.

Requires one of the following permissions: MANAGE_MENUS.

Triggers the following webhook events:

- MENU_ITEM_DELETED (async): A menu item was deleted.
