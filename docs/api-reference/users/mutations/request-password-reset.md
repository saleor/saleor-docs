---
api_reference: true
id: request-password-reset
title: requestPasswordReset
---

Sends an email with the account password modification link.

Triggers the following webhook events:

- NOTIFY_USER (async): A notification for password reset.
- ACCOUNT_SET_PASSWORD_REQUESTED (async): Setting a new password for the account is requested.
- STAFF_SET_PASSWORD_REQUESTED (async): Setting a new password for the staff account is requested.

```graphql
requestPasswordReset(
  channel: String
  email: String!
  redirectUrl: String!
): RequestPasswordReset
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">requestPasswordReset</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\}

Slug of a channel which will be used to notify the user. It is needed for customers, if not provided, the notification may not happen. Please note that mutation will not fail if the channel is not provided.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">requestPasswordReset</code>.<code class="gqlmd-mdx-entity-name">email</code></span>](#email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#email\}

Email of the user that will be used for password recovery.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">requestPasswordReset</code>.<code class="gqlmd-mdx-entity-name">redirectUrl</code></span>](#redirect-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#redirect-url\}

URL of a view where users should be redirected to reset the password. URL in RFC 1808 format.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">RequestPasswordReset</code></span>](/api-reference/users/objects/request-password-reset)

Sends an email with the account password modification link.

Triggers the following webhook events:

- NOTIFY_USER (async): A notification for password reset.
- ACCOUNT_SET_PASSWORD_REQUESTED (async): Setting a new password for the account is requested.
- STAFF_SET_PASSWORD_REQUESTED (async): Setting a new password for the staff account is requested.
