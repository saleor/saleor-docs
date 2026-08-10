---
api_reference: true
id: permission-group-delete
title: permissionGroupDelete
---

Delete permission group. Apps are not allowed to perform this mutation.

Requires one of the following permissions: MANAGE_STAFF.

Triggers the following webhook events:

- PERMISSION_GROUP_DELETED (async)

```graphql
permissionGroupDelete(
  id: ID!
): PermissionGroupDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">permissionGroupDelete</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the group to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PermissionGroupDelete</code></span>](/api-reference/users/objects/permission-group-delete)

Delete permission group. Apps are not allowed to perform this mutation.

Requires one of the following permissions: MANAGE_STAFF.

Triggers the following webhook events:

- PERMISSION_GROUP_DELETED (async)
