---
api_reference: true
id: staff-bulk-delete
title: staffBulkDelete
---

Deletes staff users. Apps are not allowed to perform this mutation.

Requires one of the following permissions: MANAGE_STAFF.

Triggers the following webhook events:

- STAFF_DELETED (async): A staff account was deleted.

```graphql
staffBulkDelete(
  ids: [ID!]!
): StaffBulkDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">staffBulkDelete</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of user IDs to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StaffBulkDelete</code></span>](/api-reference/users/objects/staff-bulk-delete)

Deletes staff users. Apps are not allowed to perform this mutation.

Requires one of the following permissions: MANAGE_STAFF.

Triggers the following webhook events:

- STAFF_DELETED (async): A staff account was deleted.
