---
api_reference: true
id: menu-delete
title: menuDelete
---

Deletes a menu.

Requires one of the following permissions: MANAGE_MENUS.

Triggers the following webhook events:

- MENU_DELETED (async): A menu was deleted.

```graphql
menuDelete(
  id: ID!
): MenuDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuDelete</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a menu to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuDelete</code></span>](/api-reference/menu/objects/menu-delete)

Deletes a menu.

Requires one of the following permissions: MANAGE_MENUS.

Triggers the following webhook events:

- MENU_DELETED (async): A menu was deleted.
