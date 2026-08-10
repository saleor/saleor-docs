---
api_reference: true
id: customer-create
title: customerCreate
---

Creates a new customer.

Requires one of the following permissions: MANAGE_USERS.

Triggers the following webhook events:

- CUSTOMER_CREATED (async): A new customer account was created.
- CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.
- NOTIFY_USER (async): A notification for setting the password.
- ACCOUNT_SET_PASSWORD_REQUESTED (async): Setting a new password for the account is requested.

```graphql
customerCreate(
  input: UserCreateInput!
): CustomerCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">customerCreate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">UserCreateInput!</code></span>](/api-reference/users/inputs/user-create-input) \{#input\}

Fields required to create a customer.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CustomerCreate</code></span>](/api-reference/users/objects/customer-create)

Creates a new customer.

Requires one of the following permissions: MANAGE_USERS.

Triggers the following webhook events:

- CUSTOMER_CREATED (async): A new customer account was created.
- CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.
- NOTIFY_USER (async): A notification for setting the password.
- ACCOUNT_SET_PASSWORD_REQUESTED (async): Setting a new password for the account is requested.
