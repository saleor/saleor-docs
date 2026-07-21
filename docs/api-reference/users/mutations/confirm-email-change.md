---
api_reference: true
id: confirm-email-change
title: confirmEmailChange
---

Confirm the email change of the logged-in user.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- CUSTOMER_UPDATED (async): A customer account was updated.
- NOTIFY_USER (async): A notification that account email change was confirmed.
- ACCOUNT_EMAIL_CHANGED (async): An account email was changed.

```graphql
confirmEmailChange(
  channel: String
  token: String!
): ConfirmEmailChange
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">confirmEmailChange</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\}

Slug of a channel which will be used to notify users. Optional when only one channel exists.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">confirmEmailChange</code>.<code class="gqlmd-mdx-entity-name">token</code></span>](#token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#token\}

A one-time token required to change the email.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ConfirmEmailChange</code></span>](/api-reference/users/objects/confirm-email-change)

Confirm the email change of the logged-in user.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- CUSTOMER_UPDATED (async): A customer account was updated.
- NOTIFY_USER (async): A notification that account email change was confirmed.
- ACCOUNT_EMAIL_CHANGED (async): An account email was changed.
