---
api_reference: true
id: permission-group-update-input
title: PermissionGroupUpdateInput
---

No description

```graphql
input PermissionGroupUpdateInput {
  addPermissions: [PermissionEnum!]
  addUsers: [ID!]
  addChannels: [ID!]
  name: String
  removePermissions: [PermissionEnum!]
  removeUsers: [ID!]
  removeChannels: [ID!]
  restrictedAccessToChannels: Boolean
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PermissionGroupUpdateInput</code>.<code class="gqlmd-mdx-entity-name">addPermissions</code></span>](#add-permissions)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PermissionEnum!]</code></span>](/api-reference/users/enums/permission-enum) \{#add-permissions\}

List of permission code names to assign to this group.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PermissionGroupUpdateInput</code>.<code class="gqlmd-mdx-entity-name">addUsers</code></span>](#add-users)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#add-users\}

List of users to assign to this group.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PermissionGroupUpdateInput</code>.<code class="gqlmd-mdx-entity-name">addChannels</code></span>](#add-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#add-channels\}

List of channels to assign to this group.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PermissionGroupUpdateInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Group name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PermissionGroupUpdateInput</code>.<code class="gqlmd-mdx-entity-name">removePermissions</code></span>](#remove-permissions)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PermissionEnum!]</code></span>](/api-reference/users/enums/permission-enum) \{#remove-permissions\}

List of permission code names to unassign from this group.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PermissionGroupUpdateInput</code>.<code class="gqlmd-mdx-entity-name">removeUsers</code></span>](#remove-users)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#remove-users\}

List of users to unassign from this group.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PermissionGroupUpdateInput</code>.<code class="gqlmd-mdx-entity-name">removeChannels</code></span>](#remove-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#remove-channels\}

List of channels to unassign from this group.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PermissionGroupUpdateInput</code>.<code class="gqlmd-mdx-entity-name">restrictedAccessToChannels</code></span>](#restricted-access-to-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#restricted-access-to-channels\}

Determine if the group has restricted access to channels.

### Member Of

[`permissionGroupUpdate`](/api-reference/users/mutations/permission-group-update) <mark class="gqlmd-mdx-badge">mutation</mark>
