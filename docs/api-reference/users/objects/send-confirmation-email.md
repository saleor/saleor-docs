---
api_reference: true
id: send-confirmation-email
title: SendConfirmationEmail
---

Sends a notification confirmation.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- NOTIFY_USER (async): A notification for account confirmation.
- ACCOUNT_CONFIRMATION_REQUESTED (async): An account confirmation was requested. This event is always sent regardless of settings.

```graphql
type SendConfirmationEmail {
  errors: [SendConfirmationEmailError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SendConfirmationEmail</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[SendConfirmationEmailError!]!</code></span>](/api-reference/users/objects/send-confirmation-email-error) \{#errors\}

### Returned By

[`sendConfirmationEmail`](/api-reference/users/mutations/send-confirmation-email) <mark class="gqlmd-mdx-badge">mutation</mark>
