---
api_reference: true
id: permission-group
title: permissionGroup
---

Look up permission group by ID.

Requires one of the following permissions: MANAGE_STAFF.

```graphql
permissionGroup(
  id: ID!
): Group
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">permissionGroup</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the group.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Group</code></span>](/api-reference/users/objects/group)

Represents permission group data.
