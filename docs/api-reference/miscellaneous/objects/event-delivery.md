---
api_reference: true
id: event-delivery
title: EventDelivery
---

Event delivery.

```graphql
type EventDelivery implements Node {
  id: ID!
  createdAt: DateTime!
  status: EventDeliveryStatusEnum!
  eventType: WebhookEventTypeEnum!
  attempts(
    sortBy: EventDeliveryAttemptSortingInput
    before: String
    after: String
    first: Int
    last: Int
  ): EventDeliveryAttemptCountableConnection
  payload: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDelivery</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of an event delivery.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDelivery</code>.<code class="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#created-at\}

Creation time of an event delivery.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDelivery</code>.<code class="gqlmd-mdx-entity-name">status</code></span>](#status)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">EventDeliveryStatusEnum!</code></span>](/api-reference/webhooks/enums/event-delivery-status-enum) \{#status\}

Event delivery status.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDelivery</code>.<code class="gqlmd-mdx-entity-name">eventType</code></span>](#event-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WebhookEventTypeEnum!</code></span>](/api-reference/webhooks/enums/webhook-event-type-enum) \{#event-type\}

Webhook event type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDelivery</code>.<code class="gqlmd-mdx-entity-name">attempts</code></span>](#attempts)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">EventDeliveryAttemptCountableConnection</code></span>](/api-reference/miscellaneous/objects/event-delivery-attempt-countable-connection) \{#attempts\}

Event delivery attempts.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDelivery.attempts</code>.<code class="gqlmd-mdx-entity-name">sortBy</code></span>](#event-delivery-attempts-sort-by)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">EventDeliveryAttemptSortingInput</code></span>](/api-reference/webhooks/inputs/event-delivery-attempt-sorting-input) \{#event-delivery-attempts-sort-by\}

Event delivery sorter

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDelivery.attempts</code>.<code class="gqlmd-mdx-entity-name">before</code></span>](#event-delivery-attempts-before)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#event-delivery-attempts-before\}

Return the elements in the list that come before the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDelivery.attempts</code>.<code class="gqlmd-mdx-entity-name">after</code></span>](#event-delivery-attempts-after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#event-delivery-attempts-after\}

Return the elements in the list that come after the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDelivery.attempts</code>.<code class="gqlmd-mdx-entity-name">first</code></span>](#event-delivery-attempts-first)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#event-delivery-attempts-first\}

Retrieve the first n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDelivery.attempts</code>.<code class="gqlmd-mdx-entity-name">last</code></span>](#event-delivery-attempts-last)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#event-delivery-attempts-last\}

Retrieve the last n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDelivery</code>.<code class="gqlmd-mdx-entity-name">payload</code></span>](#payload)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#payload\}

Event payload.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Member Of

[`EventDeliveryCountableEdge`](/api-reference/miscellaneous/objects/event-delivery-countable-edge) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`EventDeliveryRetry`](/api-reference/webhooks/objects/event-delivery-retry) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WebhookTrigger`](/api-reference/webhooks/objects/webhook-trigger) <mark class="gqlmd-mdx-badge">object</mark>
