---
api_reference: true
id: address-delete
title: addressDelete
---

Deletes an address.

Requires one of the following permissions: MANAGE_USERS.

Triggers the following webhook events:

- ADDRESS_DELETED (async): An address was deleted.

```graphql
addressDelete(
  id: ID!
): AddressDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">addressDelete</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the address to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressDelete</code></span>](/api-reference/users/objects/address-delete)

Deletes an address.

Requires one of the following permissions: MANAGE_USERS.

Triggers the following webhook events:

- ADDRESS_DELETED (async): An address was deleted.
