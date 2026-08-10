---
api_reference: true
id: send-confirmation-email
title: sendConfirmationEmail
---

Sends a notification confirmation.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- NOTIFY_USER (async): A notification for account confirmation.
- ACCOUNT_CONFIRMATION_REQUESTED (async): An account confirmation was requested. This event is always sent regardless of settings.

```graphql
sendConfirmationEmail(
  channel: String!
  redirectUrl: String!
): SendConfirmationEmail
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">sendConfirmationEmail</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\}

Slug of a channel which will be used for notify user.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">sendConfirmationEmail</code>.<code class="gqlmd-mdx-entity-name">redirectUrl</code></span>](#redirect-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#redirect-url\}

Base of frontend URL that will be needed to create confirmation URL.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SendConfirmationEmail</code></span>](/api-reference/users/objects/send-confirmation-email)

Sends a notification confirmation.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- NOTIFY_USER (async): A notification for account confirmation.
- ACCOUNT_CONFIRMATION_REQUESTED (async): An account confirmation was requested. This event is always sent regardless of settings.
