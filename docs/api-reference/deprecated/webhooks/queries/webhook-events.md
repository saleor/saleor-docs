---
api_reference: true
id: webhook-events
title: webhookEvents
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `WebhookEventTypeAsyncEnum` and `WebhookEventTypeSyncEnum` to get available event types.

</span>
</fieldset>

List of all available webhook events.

Requires one of the following permissions: MANAGE_APPS.

```graphql
webhookEvents: [WebhookEvent!] @deprecated
```

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WebhookEvent</code></span>](/api-reference/webhooks/objects/webhook-event)

Webhook event.
