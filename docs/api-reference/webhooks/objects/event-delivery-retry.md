---
api_reference: true
id: event-delivery-retry
title: EventDeliveryRetry
---

Retries event delivery.

Requires one of the following permissions: MANAGE_APPS.

```graphql
type EventDeliveryRetry {
  delivery: EventDelivery
  errors: [WebhookError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDeliveryRetry</code>.<code class="gqlmd-mdx-entity-name">delivery</code></span>](#delivery)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">EventDelivery</code></span>](/api-reference/miscellaneous/objects/event-delivery) \{#delivery\}

Event delivery.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDeliveryRetry</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[WebhookError!]!</code></span>](/api-reference/webhooks/objects/webhook-error) \{#errors\}

### Returned By

[`eventDeliveryRetry`](/api-reference/webhooks/mutations/event-delivery-retry) <mark class="gqlmd-mdx-badge">mutation</mark>
