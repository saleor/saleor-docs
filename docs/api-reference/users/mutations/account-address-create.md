---
api_reference: true
id: account-address-create
title: accountAddressCreate
---

Create a new address for the customer.

Requires one of following set of permissions: AUTHENTICATED_USER or AUTHENTICATED_APP + IMPERSONATE_USER.

Triggers the following webhook events:

- CUSTOMER_UPDATED (async): A customer account was updated.
- ADDRESS_CREATED (async): An address was created.

```graphql
accountAddressCreate(
  customerId: ID
  input: AddressInput!
  type: AddressTypeEnum
): AccountAddressCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">accountAddressCreate</code>.<code class="gqlmd-mdx-entity-name">customerId</code></span>](#customer-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#customer-id\}

ID of customer the application is impersonating. The field can be used and is required by apps only. Requires IMPERSONATE_USER and AUTHENTICATED_APP permission.

Added in Saleor 3.19.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">accountAddressCreate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput!</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#input\}

Fields required to create address.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">accountAddressCreate</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressTypeEnum</code></span>](/api-reference/miscellaneous/enums/address-type-enum) \{#type\}

A type of address. If provided, the new address will be automatically assigned as the customer's default address of that type.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AccountAddressCreate</code></span>](/api-reference/users/objects/account-address-create)

Create a new address for the customer.

Requires one of following set of permissions: AUTHENTICATED_USER or AUTHENTICATED_APP + IMPERSONATE_USER.

Triggers the following webhook events:

- CUSTOMER_UPDATED (async): A customer account was updated.
- ADDRESS_CREATED (async): An address was created.
