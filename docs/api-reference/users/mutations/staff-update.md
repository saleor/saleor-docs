---
api_reference: true
id: staff-update
title: staffUpdate
---

Updates an existing staff user. Apps are not allowed to perform this mutation.

Requires one of the following permissions: MANAGE_STAFF.

Triggers the following webhook events:

- STAFF_UPDATED (async): A staff account was updated.

```graphql
staffUpdate(
  id: ID!
  input: StaffUpdateInput!
): StaffUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">staffUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a staff user to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">staffUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StaffUpdateInput!</code></span>](/api-reference/users/inputs/staff-update-input) \{#input\}

Fields required to update a staff user.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StaffUpdate</code></span>](/api-reference/users/objects/staff-update)

Updates an existing staff user. Apps are not allowed to perform this mutation.

Requires one of the following permissions: MANAGE_STAFF.

Triggers the following webhook events:

- STAFF_UPDATED (async): A staff account was updated.
