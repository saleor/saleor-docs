---
api_reference: true
id: address-create
title: addressCreate
---

Creates user address.

Requires one of the following permissions: MANAGE_USERS.

Triggers the following webhook events:

- ADDRESS_CREATED (async): A new address was created.

```graphql
addressCreate(
  input: AddressInput!
  userId: ID!
): AddressCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">addressCreate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput!</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#input\}

Fields required to create address.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">addressCreate</code>.<code class="gqlmd-mdx-entity-name">userId</code></span>](#user-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#user-id\}

ID of a user to create address for.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressCreate</code></span>](/api-reference/users/objects/address-create)

Creates user address.

Requires one of the following permissions: MANAGE_USERS.

Triggers the following webhook events:

- ADDRESS_CREATED (async): A new address was created.
