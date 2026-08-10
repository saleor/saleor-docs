---
api_reference: true
id: webhook-event
title: WebhookEvent
---

Webhook event.

```graphql
type WebhookEvent {
  name: String!
  eventType: WebhookEventTypeEnum!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEvent</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Display name of the event.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEvent</code>.<code class="gqlmd-mdx-entity-name">eventType</code></span>](#event-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WebhookEventTypeEnum!</code></span>](/api-reference/webhooks/enums/webhook-event-type-enum) \{#event-type\}

Internal name of the event type.

### Returned By

[`webhookEvents`](/api-reference/deprecated/webhooks/queries/webhook-events) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`Webhook`](/api-reference/webhooks/objects/webhook) <mark class="gqlmd-mdx-badge">object</mark>
