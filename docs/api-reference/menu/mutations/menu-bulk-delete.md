---
api_reference: true
id: menu-bulk-delete
title: menuBulkDelete
---

Deletes menus.

Requires one of the following permissions: MANAGE_MENUS.

Triggers the following webhook events:

- MENU_DELETED (async): A menu was deleted.

```graphql
menuBulkDelete(
  ids: [ID!]!
): MenuBulkDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuBulkDelete</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of menu IDs to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuBulkDelete</code></span>](/api-reference/menu/objects/menu-bulk-delete)

Deletes menus.

Requires one of the following permissions: MANAGE_MENUS.

Triggers the following webhook events:

- MENU_DELETED (async): A menu was deleted.
