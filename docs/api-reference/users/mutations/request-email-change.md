---
api_reference: true
id: request-email-change
title: requestEmailChange
---

Request email change of the logged in user.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- NOTIFY_USER (async): A notification for account email change.
- ACCOUNT_CHANGE_EMAIL_REQUESTED (async): An account email change was requested.

```graphql
requestEmailChange(
  channel: String
  newEmail: String!
  password: String!
  redirectUrl: String!
): RequestEmailChange
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">requestEmailChange</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\}

Slug of a channel which will be used to notify users. Optional when only one channel exists.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">requestEmailChange</code>.<code class="gqlmd-mdx-entity-name">newEmail</code></span>](#new-email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#new-email\}

New user email.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">requestEmailChange</code>.<code class="gqlmd-mdx-entity-name">password</code></span>](#password)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#password\}

User password.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">requestEmailChange</code>.<code class="gqlmd-mdx-entity-name">redirectUrl</code></span>](#redirect-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#redirect-url\}

URL of a view where users should be redirected to update the email address. URL in RFC 1808 format.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">RequestEmailChange</code></span>](/api-reference/users/objects/request-email-change)

Request email change of the logged in user.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- NOTIFY_USER (async): A notification for account email change.
- ACCOUNT_CHANGE_EMAIL_REQUESTED (async): An account email change was requested.
