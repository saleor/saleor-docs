---
api_reference: true
id: customer-bulk-delete
title: customerBulkDelete
---

Deletes customers.

Requires one of the following permissions: MANAGE_USERS.

Triggers the following webhook events:

- CUSTOMER_DELETED (async): A customer account was deleted.

```graphql
customerBulkDelete(
  ids: [ID!]!
): CustomerBulkDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">customerBulkDelete</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of user IDs to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CustomerBulkDelete</code></span>](/api-reference/users/objects/customer-bulk-delete)

Deletes customers.

Requires one of the following permissions: MANAGE_USERS.

Triggers the following webhook events:

- CUSTOMER_DELETED (async): A customer account was deleted.
