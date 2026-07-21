---
api_reference: true
id: permission-group-create-input
title: PermissionGroupCreateInput
---

No description

```graphql
input PermissionGroupCreateInput {
  addPermissions: [PermissionEnum!]
  addUsers: [ID!]
  addChannels: [ID!]
  name: String!
  restrictedAccessToChannels: Boolean
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PermissionGroupCreateInput</code>.<code class="gqlmd-mdx-entity-name">addPermissions</code></span>](#add-permissions)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PermissionEnum!]</code></span>](/api-reference/users/enums/permission-enum) \{#add-permissions\}

List of permission code names to assign to this group.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PermissionGroupCreateInput</code>.<code class="gqlmd-mdx-entity-name">addUsers</code></span>](#add-users)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#add-users\}

List of users to assign to this group.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PermissionGroupCreateInput</code>.<code class="gqlmd-mdx-entity-name">addChannels</code></span>](#add-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#add-channels\}

List of channels to assign to this group.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PermissionGroupCreateInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Group name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PermissionGroupCreateInput</code>.<code class="gqlmd-mdx-entity-name">restrictedAccessToChannels</code></span>](#restricted-access-to-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#restricted-access-to-channels\}

Determine if the group has restricted access to channels. DEFAULT: False

### Member Of

[`permissionGroupCreate`](/api-reference/users/mutations/permission-group-create) <mark class="gqlmd-mdx-badge">mutation</mark>
