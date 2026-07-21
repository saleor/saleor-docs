---
api_reference: true
id: account-address-update
title: accountAddressUpdate
---

Updates an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER.

Triggers the following webhook events:

- ADDRESS_UPDATED (async): An address was updated.

```graphql
accountAddressUpdate(
  id: ID!
  input: AddressInput!
): AccountAddressUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">accountAddressUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the address to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">accountAddressUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput!</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#input\}

Fields required to update the address.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AccountAddressUpdate</code></span>](/api-reference/users/objects/account-address-update)

Updates an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER.

Triggers the following webhook events:

- ADDRESS_UPDATED (async): An address was updated.
