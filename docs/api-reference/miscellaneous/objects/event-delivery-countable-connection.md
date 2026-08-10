---
api_reference: true
id: event-delivery-countable-connection
title: EventDeliveryCountableConnection
---

No description

```graphql
type EventDeliveryCountableConnection {
  pageInfo: PageInfo!
  edges: [EventDeliveryCountableEdge!]!
  totalCount: Int
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDeliveryCountableConnection</code>.<code class="gqlmd-mdx-entity-name">pageInfo</code></span>](#page-info)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageInfo!</code></span>](/api-reference/miscellaneous/objects/page-info) \{#page-info\}

Pagination data for this connection.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDeliveryCountableConnection</code>.<code class="gqlmd-mdx-entity-name">edges</code></span>](#edges)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[EventDeliveryCountableEdge!]!</code></span>](/api-reference/miscellaneous/objects/event-delivery-countable-edge) \{#edges\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDeliveryCountableConnection</code>.<code class="gqlmd-mdx-entity-name">totalCount</code></span>](#total-count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#total-count\}

A total count of items in the collection.

### Member Of

[`Webhook`](/api-reference/webhooks/objects/webhook) <mark class="gqlmd-mdx-badge">object</mark>
