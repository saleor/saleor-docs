---
api_reference: true
id: webhook-trigger
title: webhookTrigger
---

Trigger a webhook event. Supports a single event (the first, if multiple provided in the `webhook.subscription_query`). Requires permission relevant to processed event. Successfully delivered webhook returns `delivery` with status='PENDING' and empty payload.

Requires one of the following permissions: AUTHENTICATED_STAFF_USER.

```graphql
webhookTrigger(
  objectId: ID!
  webhookId: ID!
): WebhookTrigger
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">webhookTrigger</code>.<code class="gqlmd-mdx-entity-name">objectId</code></span>](#object-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#object-id\}

The ID of an object to serialize.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">webhookTrigger</code>.<code class="gqlmd-mdx-entity-name">webhookId</code></span>](#webhook-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#webhook-id\}

The ID of the webhook.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WebhookTrigger</code></span>](/api-reference/webhooks/objects/webhook-trigger)

Trigger a webhook event. Supports a single event (the first, if multiple provided in the `webhook.subscription_query`). Requires permission relevant to processed event. Successfully delivered webhook returns `delivery` with status='PENDING' and empty payload.

Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
