---
api_reference: true
id: permission-group-update
title: permissionGroupUpdate
---

Update permission group. Apps are not allowed to perform this mutation.

Requires one of the following permissions: MANAGE_STAFF.

Triggers the following webhook events:

- PERMISSION_GROUP_UPDATED (async)

```graphql
permissionGroupUpdate(
  id: ID!
  input: PermissionGroupUpdateInput!
): PermissionGroupUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">permissionGroupUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the group to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">permissionGroupUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PermissionGroupUpdateInput!</code></span>](/api-reference/users/inputs/permission-group-update-input) \{#input\}

Input fields to create permission group.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PermissionGroupUpdate</code></span>](/api-reference/users/objects/permission-group-update)

Update permission group. Apps are not allowed to perform this mutation.

Requires one of the following permissions: MANAGE_STAFF.

Triggers the following webhook events:

- PERMISSION_GROUP_UPDATED (async)
