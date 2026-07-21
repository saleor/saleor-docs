---
api_reference: true
id: account-set-default-address
title: accountSetDefaultAddress
---

Sets a default address for the authenticated user.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- CUSTOMER_UPDATED (async): A customer's address was updated.

```graphql
accountSetDefaultAddress(
  id: ID!
  type: AddressTypeEnum!
): AccountSetDefaultAddress
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">accountSetDefaultAddress</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the address to set as default.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">accountSetDefaultAddress</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressTypeEnum!</code></span>](/api-reference/miscellaneous/enums/address-type-enum) \{#type\}

The type of address.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AccountSetDefaultAddress</code></span>](/api-reference/users/objects/account-set-default-address)

Sets a default address for the authenticated user.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- CUSTOMER_UPDATED (async): A customer's address was updated.
