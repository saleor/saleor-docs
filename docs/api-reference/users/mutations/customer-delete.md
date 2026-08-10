---
api_reference: true
id: customer-delete
title: customerDelete
---

Deletes a customer.

Requires one of the following permissions: MANAGE_USERS.

Triggers the following webhook events:

- CUSTOMER_DELETED (async): A customer account was deleted.

```graphql
customerDelete(
  externalReference: String
  id: ID
): CustomerDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">customerDelete</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of a customer to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">customerDelete</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a customer to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CustomerDelete</code></span>](/api-reference/users/objects/customer-delete)

Deletes a customer.

Requires one of the following permissions: MANAGE_USERS.

Triggers the following webhook events:

- CUSTOMER_DELETED (async): A customer account was deleted.
