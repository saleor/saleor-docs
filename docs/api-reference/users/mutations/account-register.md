---
api_reference: true
id: account-register
title: accountRegister
---

Register a new user.

Triggers the following webhook events:

- CUSTOMER_CREATED (async): A new customer account was created.
- NOTIFY_USER (async): A notification for account confirmation.
- ACCOUNT_CONFIRMATION_REQUESTED (async): An user confirmation was requested. This event is always sent regardless of settings.

```graphql
accountRegister(
  input: AccountRegisterInput!
): AccountRegister
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">accountRegister</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AccountRegisterInput!</code></span>](/api-reference/users/inputs/account-register-input) \{#input\}

Fields required to create a user.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AccountRegister</code></span>](/api-reference/users/objects/account-register)

Register a new user.

Triggers the following webhook events:

- CUSTOMER_CREATED (async): A new customer account was created.
- NOTIFY_USER (async): A notification for account confirmation.
- ACCOUNT_CONFIRMATION_REQUESTED (async): An user confirmation was requested. This event is always sent regardless of settings.
