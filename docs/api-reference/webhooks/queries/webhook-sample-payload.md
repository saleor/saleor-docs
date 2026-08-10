---
api_reference: true
id: webhook-sample-payload
title: webhookSamplePayload
---

Retrieve a sample payload for a given webhook event based on real data. It can be useful for some integrations where sample payload is required.

```graphql
webhookSamplePayload(
  eventType: WebhookSampleEventTypeEnum!
): JSONString
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">webhookSamplePayload</code>.<code class="gqlmd-mdx-entity-name">eventType</code></span>](#event-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WebhookSampleEventTypeEnum!</code></span>](/api-reference/webhooks/enums/webhook-sample-event-type-enum) \{#event-type\}

Name of the requested event type.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring)
