---
api_reference: true
id: promotion-created-event
title: PromotionCreatedEvent
---

History log of the promotion created event.

```graphql
type PromotionCreatedEvent implements Node, PromotionEventInterface {
  id: ID!
  date: DateTime!
  type: PromotionEventsEnum!
  createdBy: UserOrApp
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionCreatedEvent</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionCreatedEvent</code>.<code class="gqlmd-mdx-entity-name">date</code></span>](#date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#date\}

Date when event happened.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionCreatedEvent</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionEventsEnum!</code></span>](/api-reference/discounts/enums/promotion-events-enum) \{#type\}

Promotion event type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionCreatedEvent</code>.<code class="gqlmd-mdx-entity-name">createdBy</code></span>](#created-by)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">UserOrApp</code></span>](/api-reference/miscellaneous/unions/user-or-app) \{#created-by\}

User or App that created the promotion event.

Requires one of the following permissions: MANAGE_STAFF, MANAGE_APPS, OWNER.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionEventInterface</code></span>](/api-reference/miscellaneous/interfaces/promotion-event-interface)

### Implemented By

[`PromotionEvent`](/api-reference/miscellaneous/unions/promotion-event) <mark class="gqlmd-mdx-badge">union</mark>
