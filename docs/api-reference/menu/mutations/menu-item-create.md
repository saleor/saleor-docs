---
api_reference: true
id: menu-item-create
title: menuItemCreate
---

Creates a new menu item.

Requires one of the following permissions: MANAGE_MENUS.

Triggers the following webhook events:

- MENU_ITEM_CREATED (async): A menu item was created.

```graphql
menuItemCreate(
  input: MenuItemCreateInput!
): MenuItemCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuItemCreate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuItemCreateInput!</code></span>](/api-reference/miscellaneous/inputs/menu-item-create-input) \{#input\}

Fields required to update a menu item. Only one of `url`, `category`, `page`, `collection` is allowed per item.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuItemCreate</code></span>](/api-reference/menu/objects/menu-item-create)

Creates a new menu item.

Requires one of the following permissions: MANAGE_MENUS.

Triggers the following webhook events:

- MENU_ITEM_CREATED (async): A menu item was created.
