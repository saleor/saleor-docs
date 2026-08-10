---
api_reference: true
id: webhook
title: Webhook
---

Webhook.

```graphql
type Webhook implements Node {
  id: ID!
  name: String
  identifier: String
  events: [WebhookEvent!]! @deprecated
  syncEvents: [WebhookEventSync!]!
  asyncEvents: [WebhookEventAsync!]!
  app: App!
  eventDeliveries(
    sortBy: EventDeliverySortingInput
    filter: EventDeliveryFilterInput
    before: String
    after: String
    first: Int
    last: Int
  ): EventDeliveryCountableConnection
  targetUrl: String!
  isActive: Boolean!
  secretKey: String @deprecated
  subscriptionQuery: String
  customHeaders: JSONString
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Webhook</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of webhook.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Webhook</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

The name of webhook.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Webhook</code>.<code class="gqlmd-mdx-entity-name">identifier</code></span>](#identifier)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#identifier\}

The unique identifier of the webhook, set by the app. Unique per app, null when not set.

Added in Saleor 3.23.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Webhook</code>.<code class="gqlmd-mdx-entity-name">syncEvents</code></span>](#sync-events)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[WebhookEventSync!]!</code></span>](/api-reference/webhooks/objects/webhook-event-sync) \{#sync-events\}

List of synchronous webhook events.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Webhook</code>.<code class="gqlmd-mdx-entity-name">asyncEvents</code></span>](#async-events)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[WebhookEventAsync!]!</code></span>](/api-reference/webhooks/objects/webhook-event-async) \{#async-events\}

List of asynchronous webhook events.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Webhook</code>.<code class="gqlmd-mdx-entity-name">app</code></span>](#app)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">App!</code></span>](/api-reference/apps/objects/app) \{#app\}

The app associated with Webhook.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Webhook</code>.<code class="gqlmd-mdx-entity-name">eventDeliveries</code></span>](#event-deliveries)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">EventDeliveryCountableConnection</code></span>](/api-reference/miscellaneous/objects/event-delivery-countable-connection) \{#event-deliveries\}

Event deliveries.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Webhook.eventDeliveries</code>.<code class="gqlmd-mdx-entity-name">sortBy</code></span>](#webhook-event-deliveries-sort-by)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">EventDeliverySortingInput</code></span>](/api-reference/webhooks/inputs/event-delivery-sorting-input) \{#webhook-event-deliveries-sort-by\}

Event delivery sorter.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Webhook.eventDeliveries</code>.<code class="gqlmd-mdx-entity-name">filter</code></span>](#webhook-event-deliveries-filter)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">EventDeliveryFilterInput</code></span>](/api-reference/miscellaneous/inputs/event-delivery-filter-input) \{#webhook-event-deliveries-filter\}

Event delivery filter options.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Webhook.eventDeliveries</code>.<code class="gqlmd-mdx-entity-name">before</code></span>](#webhook-event-deliveries-before)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#webhook-event-deliveries-before\}

Return the elements in the list that come before the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Webhook.eventDeliveries</code>.<code class="gqlmd-mdx-entity-name">after</code></span>](#webhook-event-deliveries-after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#webhook-event-deliveries-after\}

Return the elements in the list that come after the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Webhook.eventDeliveries</code>.<code class="gqlmd-mdx-entity-name">first</code></span>](#webhook-event-deliveries-first)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#webhook-event-deliveries-first\}

Retrieve the first n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Webhook.eventDeliveries</code>.<code class="gqlmd-mdx-entity-name">last</code></span>](#webhook-event-deliveries-last)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#webhook-event-deliveries-last\}

Retrieve the last n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Webhook</code>.<code class="gqlmd-mdx-entity-name">targetUrl</code></span>](#target-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#target-url\}

Target URL for webhook.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Webhook</code>.<code class="gqlmd-mdx-entity-name">isActive</code></span>](#is-active)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-active\}

Informs if webhook is activated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Webhook</code>.<code class="gqlmd-mdx-entity-name">subscriptionQuery</code></span>](#subscription-query)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#subscription-query\}

Used to define payloads for specific events.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Webhook</code>.<code class="gqlmd-mdx-entity-name">customHeaders</code></span>](#custom-headers)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#custom-headers\}

Custom headers, which will be added to HTTP request.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Webhook</code>.<code class="gqlmd-mdx-entity-name">events</code></span>](#events)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[WebhookEvent!]!</code></span>](/api-reference/webhooks/objects/webhook-event) \{#events\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `asyncEvents` or `syncEvents` instead.

</span>
</fieldset>

List of webhook events.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Webhook</code>.<code class="gqlmd-mdx-entity-name">secretKey</code></span>](#secret-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#secret-key\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

As of Saleor 3.5, webhook payloads default to signing using a verifiable JWS.

</span>
</fieldset>

Used to create a hash signature for each payload.

</details>

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Returned By

[`webhook`](/api-reference/webhooks/queries/webhook) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`App`](/api-reference/apps/objects/app) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WebhookCreate`](/api-reference/webhooks/objects/webhook-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WebhookDelete`](/api-reference/webhooks/objects/webhook-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WebhookUpdate`](/api-reference/webhooks/objects/webhook-update) <mark class="gqlmd-mdx-badge">object</mark>
