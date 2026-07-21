---
api_reference: true
id: webhook-trigger
title: WebhookTrigger
---

Trigger a webhook event. Supports a single event (the first, if multiple provided in the `webhook.subscription_query`). Requires permission relevant to processed event. Successfully delivered webhook returns `delivery` with status='PENDING' and empty payload.

Requires one of the following permissions: AUTHENTICATED_STAFF_USER.

```graphql
type WebhookTrigger {
  delivery: EventDelivery
  errors: [WebhookTriggerError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookTrigger</code>.<code class="gqlmd-mdx-entity-name">delivery</code></span>](#delivery)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">EventDelivery</code></span>](/api-reference/miscellaneous/objects/event-delivery) \{#delivery\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookTrigger</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[WebhookTriggerError!]!</code></span>](/api-reference/webhooks/objects/webhook-trigger-error) \{#errors\}

### Returned By

[`webhookTrigger`](/api-reference/webhooks/mutations/webhook-trigger) <mark class="gqlmd-mdx-badge">mutation</mark>
