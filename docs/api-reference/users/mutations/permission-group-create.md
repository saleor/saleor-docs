---
api_reference: true
id: permission-group-create
title: permissionGroupCreate
---

Create new permission group. Apps are not allowed to perform this mutation.

Requires one of the following permissions: MANAGE_STAFF.

Triggers the following webhook events:

- PERMISSION_GROUP_CREATED (async)

```graphql
permissionGroupCreate(
  input: PermissionGroupCreateInput!
): PermissionGroupCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">permissionGroupCreate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PermissionGroupCreateInput!</code></span>](/api-reference/users/inputs/permission-group-create-input) \{#input\}

Input fields to create permission group.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PermissionGroupCreate</code></span>](/api-reference/users/objects/permission-group-create)

Create new permission group. Apps are not allowed to perform this mutation.

Requires one of the following permissions: MANAGE_STAFF.

Triggers the following webhook events:

- PERMISSION_GROUP_CREATED (async)
