---
api_reference: true
id: account-delete
title: accountDelete
---

Remove user account.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- ACCOUNT_DELETED (async): Account was deleted.

```graphql
accountDelete(
  token: String!
): AccountDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">accountDelete</code>.<code class="gqlmd-mdx-entity-name">token</code></span>](#token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#token\}

A one-time token required to remove account. Sent by email using AccountRequestDeletion mutation.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AccountDelete</code></span>](/api-reference/users/objects/account-delete)

Remove user account.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- ACCOUNT_DELETED (async): Account was deleted.
