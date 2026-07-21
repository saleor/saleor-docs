---
api_reference: true
id: event-delivery-attempt
title: EventDeliveryAttempt
---

Event delivery attempts.

```graphql
type EventDeliveryAttempt implements Node {
  id: ID!
  createdAt: DateTime!
  taskId: String
  duration: Float
  response: String
  responseHeaders: String
  responseStatusCode: Int
  requestHeaders: String
  status: EventDeliveryStatusEnum!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDeliveryAttempt</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of Event Delivery Attempt.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDeliveryAttempt</code>.<code class="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#created-at\}

Event delivery creation date and time.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDeliveryAttempt</code>.<code class="gqlmd-mdx-entity-name">taskId</code></span>](#task-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#task-id\}

Task id for delivery attempt.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDeliveryAttempt</code>.<code class="gqlmd-mdx-entity-name">duration</code></span>](#duration)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Float</code></span>](/api-reference/miscellaneous/scalars/float) \{#duration\}

Delivery attempt duration.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDeliveryAttempt</code>.<code class="gqlmd-mdx-entity-name">response</code></span>](#response)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#response\}

Delivery attempt response content.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDeliveryAttempt</code>.<code class="gqlmd-mdx-entity-name">responseHeaders</code></span>](#response-headers)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#response-headers\}

Response headers for delivery attempt.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDeliveryAttempt</code>.<code class="gqlmd-mdx-entity-name">responseStatusCode</code></span>](#response-status-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#response-status-code\}

Delivery attempt response status code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDeliveryAttempt</code>.<code class="gqlmd-mdx-entity-name">requestHeaders</code></span>](#request-headers)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#request-headers\}

Request headers for delivery attempt.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDeliveryAttempt</code>.<code class="gqlmd-mdx-entity-name">status</code></span>](#status)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">EventDeliveryStatusEnum!</code></span>](/api-reference/webhooks/enums/event-delivery-status-enum) \{#status\}

Event delivery status.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Member Of

[`EventDeliveryAttemptCountableEdge`](/api-reference/miscellaneous/objects/event-delivery-attempt-countable-edge) <mark class="gqlmd-mdx-badge">object</mark>
