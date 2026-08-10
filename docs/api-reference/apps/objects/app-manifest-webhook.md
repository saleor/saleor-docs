---
api_reference: true
id: app-manifest-webhook
title: AppManifestWebhook
---

No description

```graphql
type AppManifestWebhook {
  name: String!
  asyncEvents: [WebhookEventTypeAsyncEnum!]
  syncEvents: [WebhookEventTypeSyncEnum!]
  query: String!
  targetUrl: String!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppManifestWebhook</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

The name of the webhook.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppManifestWebhook</code>.<code class="gqlmd-mdx-entity-name">asyncEvents</code></span>](#async-events)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[WebhookEventTypeAsyncEnum!]</code></span>](/api-reference/webhooks/enums/webhook-event-type-async-enum) \{#async-events\}

The asynchronous events that webhook wants to subscribe.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppManifestWebhook</code>.<code class="gqlmd-mdx-entity-name">syncEvents</code></span>](#sync-events)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[WebhookEventTypeSyncEnum!]</code></span>](/api-reference/webhooks/enums/webhook-event-type-sync-enum) \{#sync-events\}

The synchronous events that webhook wants to subscribe.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppManifestWebhook</code>.<code class="gqlmd-mdx-entity-name">query</code></span>](#query)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#query\}

Subscription query of a webhook

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppManifestWebhook</code>.<code class="gqlmd-mdx-entity-name">targetUrl</code></span>](#target-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#target-url\}

The url to receive the payload.

### Member Of

[`Manifest`](/api-reference/apps/objects/manifest) <mark class="gqlmd-mdx-badge">object</mark>
