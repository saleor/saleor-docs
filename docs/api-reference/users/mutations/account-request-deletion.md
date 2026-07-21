---
api_reference: true
id: account-request-deletion
title: accountRequestDeletion
---

Sends an email with the account removal link for the logged-in user.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- NOTIFY_USER (async): A notification for account delete request.
- ACCOUNT_DELETE_REQUESTED (async): An account delete requested.

```graphql
accountRequestDeletion(
  channel: String
  redirectUrl: String!
): AccountRequestDeletion
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">accountRequestDeletion</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\}

Slug of a channel which will be used to notify users. Optional when only one channel exists.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">accountRequestDeletion</code>.<code class="gqlmd-mdx-entity-name">redirectUrl</code></span>](#redirect-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#redirect-url\}

URL of a view where users should be redirected to delete their account. URL in RFC 1808 format.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AccountRequestDeletion</code></span>](/api-reference/users/objects/account-request-deletion)

Sends an email with the account removal link for the logged-in user.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- NOTIFY_USER (async): A notification for account delete request.
- ACCOUNT_DELETE_REQUESTED (async): An account delete requested.
