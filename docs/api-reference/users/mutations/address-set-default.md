---
api_reference: true
id: address-set-default
title: addressSetDefault
---

Sets a default address for the given user.

Requires one of the following permissions: MANAGE_USERS.

Triggers the following webhook events:

- CUSTOMER_UPDATED (async): A customer was updated.

```graphql
addressSetDefault(
  addressId: ID!
  type: AddressTypeEnum!
  userId: ID!
): AddressSetDefault
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">addressSetDefault</code>.<code class="gqlmd-mdx-entity-name">addressId</code></span>](#address-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#address-id\}

ID of the address.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">addressSetDefault</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressTypeEnum!</code></span>](/api-reference/miscellaneous/enums/address-type-enum) \{#type\}

The type of address.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">addressSetDefault</code>.<code class="gqlmd-mdx-entity-name">userId</code></span>](#user-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#user-id\}

ID of the user to change the address for.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressSetDefault</code></span>](/api-reference/users/objects/address-set-default)

Sets a default address for the given user.

Requires one of the following permissions: MANAGE_USERS.

Triggers the following webhook events:

- CUSTOMER_UPDATED (async): A customer was updated.
