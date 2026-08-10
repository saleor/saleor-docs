---
api_reference: true
id: menu-create
title: menuCreate
---

Creates a new Menu.

Requires one of the following permissions: MANAGE_MENUS.

Triggers the following webhook events:

- MENU_CREATED (async): A menu was created.

```graphql
menuCreate(
  input: MenuCreateInput!
): MenuCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuCreate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuCreateInput!</code></span>](/api-reference/miscellaneous/inputs/menu-create-input) \{#input\}

Fields required to create a menu.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuCreate</code></span>](/api-reference/menu/objects/menu-create)

Creates a new Menu.

Requires one of the following permissions: MANAGE_MENUS.

Triggers the following webhook events:

- MENU_CREATED (async): A menu was created.
