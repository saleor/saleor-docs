---
api_reference: true
id: user-permission
title: UserPermission
---

Represents user's permissions.

```graphql
type UserPermission {
  code: PermissionEnum!
  name: String!
  sourcePermissionGroups(userId: ID!): [Group!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">UserPermission</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PermissionEnum!</code></span>](/api-reference/users/enums/permission-enum) \{#code\}

Internal code for permission.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">UserPermission</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Describe action(s) allowed to do by permission.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">UserPermission</code>.<code class="gqlmd-mdx-entity-name">sourcePermissionGroups</code></span>](#source-permission-groups)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Group!]</code></span>](/api-reference/users/objects/group) \{#source-permission-groups\}

List of user permission groups which contains this permission.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">UserPermission.sourcePermissionGroups</code>.<code class="gqlmd-mdx-entity-name">userId</code></span>](#user-permission-source-permission-groups-user-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#user-permission-source-permission-groups-user-id\}

ID of user whose groups should be returned.

### Member Of

[`User`](/api-reference/users/objects/user) <mark class="gqlmd-mdx-badge">object</mark>
