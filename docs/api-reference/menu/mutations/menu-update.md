---
api_reference: true
id: menu-update
title: menuUpdate
---

Updates a menu.

Requires one of the following permissions: MANAGE_MENUS.

Triggers the following webhook events:

- MENU_UPDATED (async): A menu was updated.

```graphql
menuUpdate(
  id: ID!
  input: MenuInput!
): MenuUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a menu to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuInput!</code></span>](/api-reference/miscellaneous/inputs/menu-input) \{#input\}

Fields required to update a menu.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuUpdate</code></span>](/api-reference/menu/objects/menu-update)

Updates a menu.

Requires one of the following permissions: MANAGE_MENUS.

Triggers the following webhook events:

- MENU_UPDATED (async): A menu was updated.
