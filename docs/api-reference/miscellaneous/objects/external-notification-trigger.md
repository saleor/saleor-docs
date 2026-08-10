---
api_reference: true
id: external-notification-trigger
title: ExternalNotificationTrigger
---

Trigger sending a notification with the notify plugin method. Serializes nodes provided as ids parameter and includes this data in the notification payload.

```graphql
type ExternalNotificationTrigger {
  errors: [ExternalNotificationError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExternalNotificationTrigger</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ExternalNotificationError!]!</code></span>](/api-reference/miscellaneous/objects/external-notification-error) \{#errors\}

### Returned By

[`externalNotificationTrigger`](/api-reference/deprecated/miscellaneous/mutations/external-notification-trigger) <mark class="gqlmd-mdx-badge">mutation</mark>
