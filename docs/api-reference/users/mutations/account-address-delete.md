---
api_reference: true
id: account-address-delete
title: accountAddressDelete
---

Deletes an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER.

Triggers the following webhook events:

- ADDRESS_DELETED (async): An address was deleted.

```graphql
accountAddressDelete(
  id: ID!
): AccountAddressDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">accountAddressDelete</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the address to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AccountAddressDelete</code></span>](/api-reference/users/objects/account-address-delete)

Deletes an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER.

Triggers the following webhook events:

- ADDRESS_DELETED (async): An address was deleted.
