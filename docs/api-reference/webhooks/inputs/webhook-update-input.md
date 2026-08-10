---
api_reference: true
id: webhook-update-input
title: WebhookUpdateInput
---

No description

```graphql
input WebhookUpdateInput {
  name: String
  identifier: String
  targetUrl: String
  events: [WebhookEventTypeEnum!] @deprecated
  asyncEvents: [WebhookEventTypeAsyncEnum!]
  syncEvents: [WebhookEventTypeSyncEnum!]
  app: ID
  isActive: Boolean
  secretKey: String @deprecated
  query: String
  customHeaders: JSONString
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookUpdateInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

The new name of the webhook.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookUpdateInput</code>.<code class="gqlmd-mdx-entity-name">identifier</code></span>](#identifier)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#identifier\}

The unique identifier of the webhook, set by the app. Unique per app. Maximum length is 256 characters. Pass a blank value to clear it.

Added in Saleor 3.23.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookUpdateInput</code>.<code class="gqlmd-mdx-entity-name">targetUrl</code></span>](#target-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#target-url\}

The url to receive the payload.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookUpdateInput</code>.<code class="gqlmd-mdx-entity-name">asyncEvents</code></span>](#async-events)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[WebhookEventTypeAsyncEnum!]</code></span>](/api-reference/webhooks/enums/webhook-event-type-async-enum) \{#async-events\}

The asynchronous events that webhook wants to subscribe.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookUpdateInput</code>.<code class="gqlmd-mdx-entity-name">syncEvents</code></span>](#sync-events)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[WebhookEventTypeSyncEnum!]</code></span>](/api-reference/webhooks/enums/webhook-event-type-sync-enum) \{#sync-events\}

The synchronous events that webhook wants to subscribe.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookUpdateInput</code>.<code class="gqlmd-mdx-entity-name">app</code></span>](#app)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#app\}

ID of the app to which webhook belongs.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookUpdateInput</code>.<code class="gqlmd-mdx-entity-name">isActive</code></span>](#is-active)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-active\}

Determine if webhook will be set active or not.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookUpdateInput</code>.<code class="gqlmd-mdx-entity-name">query</code></span>](#query)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#query\}

Subscription query used to define a webhook payload.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookUpdateInput</code>.<code class="gqlmd-mdx-entity-name">customHeaders</code></span>](#custom-headers)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#custom-headers\}

Custom headers, which will be added to HTTP request. There is a limitation of 5 headers per webhook and 998 characters per header.Only `X-*`, `Authorization*`, and `BrokerProperties` keys are allowed.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookUpdateInput</code>.<code class="gqlmd-mdx-entity-name">events</code></span>](#events)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[WebhookEventTypeEnum!]</code></span>](/api-reference/webhooks/enums/webhook-event-type-enum) \{#events\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `asyncEvents` or `syncEvents` instead.

</span>
</fieldset>

The events that webhook wants to subscribe.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookUpdateInput</code>.<code class="gqlmd-mdx-entity-name">secretKey</code></span>](#secret-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#secret-key\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

As of Saleor 3.5, webhook payloads default to signing using a verifiable JWS.

</span>
</fieldset>

Use to create a hash signature with each payload.

</details>

### Member Of

[`webhookUpdate`](/api-reference/webhooks/mutations/webhook-update) <mark class="gqlmd-mdx-badge">mutation</mark>
