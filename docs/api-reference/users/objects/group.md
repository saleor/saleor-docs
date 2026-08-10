---
api_reference: true
id: group
title: Group
---

Represents permission group data.

```graphql
type Group implements Node {
  id: ID!
  name: String!
  users: [User!]
  permissions: [Permission!]
  userCanManage: Boolean!
  accessibleChannels: [Channel!]
  restrictedAccessToChannels: Boolean!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Group</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the group.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Group</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

The name of the group.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Group</code>.<code class="gqlmd-mdx-entity-name">users</code></span>](#users)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[User!]</code></span>](/api-reference/users/objects/user) \{#users\}

List of group users

Requires one of the following permissions: MANAGE_STAFF.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Group</code>.<code class="gqlmd-mdx-entity-name">permissions</code></span>](#permissions)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Permission!]</code></span>](/api-reference/authentication/objects/permission) \{#permissions\}

List of group permissions

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Group</code>.<code class="gqlmd-mdx-entity-name">userCanManage</code></span>](#user-can-manage)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#user-can-manage\}

True, if the currently authenticated user has rights to manage a group.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Group</code>.<code class="gqlmd-mdx-entity-name">accessibleChannels</code></span>](#accessible-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Channel!]</code></span>](/api-reference/channels/objects/channel) \{#accessible-channels\}

List of channels the group has access to.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Group</code>.<code class="gqlmd-mdx-entity-name">restrictedAccessToChannels</code></span>](#restricted-access-to-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#restricted-access-to-channels\}

Determine if the group have restricted access to channels.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Returned By

[`permissionGroup`](/api-reference/users/queries/permission-group) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`GroupCountableEdge`](/api-reference/users/objects/group-countable-edge) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PermissionGroupCreate`](/api-reference/users/objects/permission-group-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PermissionGroupCreated`](/api-reference/users/objects/permission-group-created) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PermissionGroupDelete`](/api-reference/users/objects/permission-group-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PermissionGroupDeleted`](/api-reference/users/objects/permission-group-deleted) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PermissionGroupUpdate`](/api-reference/users/objects/permission-group-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PermissionGroupUpdated`](/api-reference/users/objects/permission-group-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`User`](/api-reference/users/objects/user) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`UserPermission`](/api-reference/users/objects/user-permission) <mark class="gqlmd-mdx-badge">object</mark>

### Implemented By

[`_Entity`](/api-reference/miscellaneous/unions/entity) <mark class="gqlmd-mdx-badge">union</mark>
