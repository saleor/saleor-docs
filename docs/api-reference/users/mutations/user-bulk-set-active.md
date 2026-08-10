---
api_reference: true
id: user-bulk-set-active
title: userBulkSetActive
---

Activate or deactivate users.

Requires one of the following permissions: MANAGE_USERS.

```graphql
userBulkSetActive(
  ids: [ID!]!
  isActive: Boolean!
): UserBulkSetActive
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">userBulkSetActive</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of user IDs to activate/deactivate.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">userBulkSetActive</code>.<code class="gqlmd-mdx-entity-name">isActive</code></span>](#is-active)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-active\}

Determine if users will be set active or not.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">UserBulkSetActive</code></span>](/api-reference/users/objects/user-bulk-set-active)

Activate or deactivate users.

Requires one of the following permissions: MANAGE_USERS.
