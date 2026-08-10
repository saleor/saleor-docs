---
api_reference: true
id: webhook-event-sync
title: WebhookEventSync
---

Synchronous webhook event.

```graphql
type WebhookEventSync {
  name: String!
  eventType: WebhookEventTypeSyncEnum!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventSync</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Display name of the event.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventSync</code>.<code class="gqlmd-mdx-entity-name">eventType</code></span>](#event-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WebhookEventTypeSyncEnum!</code></span>](/api-reference/webhooks/enums/webhook-event-type-sync-enum) \{#event-type\}

Internal name of the event type.

### Member Of

[`Webhook`](/api-reference/webhooks/objects/webhook) <mark class="gqlmd-mdx-badge">object</mark>
