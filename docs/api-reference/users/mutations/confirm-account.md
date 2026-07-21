---
api_reference: true
id: confirm-account
title: confirmAccount
---

Confirm user account with token sent by email during registration.

Triggers the following webhook events:

- ACCOUNT_CONFIRMED (async): Account was confirmed.

```graphql
confirmAccount(
  email: String!
  token: String!
): ConfirmAccount
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">confirmAccount</code>.<code class="gqlmd-mdx-entity-name">email</code></span>](#email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#email\}

E-mail of the user performing account confirmation.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">confirmAccount</code>.<code class="gqlmd-mdx-entity-name">token</code></span>](#token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#token\}

A one-time token required to confirm the account.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ConfirmAccount</code></span>](/api-reference/users/objects/confirm-account)

Confirm user account with token sent by email during registration.

Triggers the following webhook events:

- ACCOUNT_CONFIRMED (async): Account was confirmed.
