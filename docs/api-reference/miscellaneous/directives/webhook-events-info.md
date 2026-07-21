---
api_reference: true
id: webhook-events-info
title: webhookEventsInfo
---

Webhook events triggered by a specific location.

```graphql
directive @webhookEventsInfo(
  asyncEvents: [WebhookEventTypeAsyncEnum!]!
  syncEvents: [WebhookEventTypeSyncEnum!]!
) on FIELD | FIELD_DEFINITION | INPUT_OBJECT | OBJECT
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">webhookEventsInfo</code>.<code class="gqlmd-mdx-entity-name">asyncEvents</code></span>](#async-events)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[WebhookEventTypeAsyncEnum!]!</code></span>](/api-reference/webhooks/enums/webhook-event-type-async-enum) \{#async-events\}

List of asynchronous webhook events triggered by a specific location.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">webhookEventsInfo</code>.<code class="gqlmd-mdx-entity-name">syncEvents</code></span>](#sync-events)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[WebhookEventTypeSyncEnum!]!</code></span>](/api-reference/webhooks/enums/webhook-event-type-sync-enum) \{#sync-events\}

List of synchronous webhook events triggered by a specific location.
